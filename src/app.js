// AquaGuard Main Application Controller
// Complete Connected Prototype with Visible Role Switcher, Field Tester Dashboard, and Live Request Workflows

import L from 'leaflet';
import {
  getCurrentUser,
  loginUser,
  registerUser,
  registerFieldTester,
  updateFieldTesterProfile,
  logoutUser,
  updateProfile
} from './auth.js';
import {
  dbSaveWaterTest,
  dbGetWaterTestsByUser,
  dbSaveFieldRequest,
  dbGetFieldRequestsByUser,
  dbGetAllFieldRequests,
  dbGetFieldRequestsByTester,
  dbGetFieldRequestById,
  dbUpdateFieldRequest,
  dbGetPendingSyncCount,
  dbProcessSyncQueue
} from './db.js';
import {
  WARDS,
  DEFAULT_PANCHAYAT,
  FLOOD_HAZARD_ZONES
} from './demoData.js';
import {
  getWardAlerts,
  getWardCommunitySummary,
  generateSituationSummary,
  isTestAbnormalOrPositive
} from './rules.js';

// Application State
let currentTab = 'home'; // Household: 'home' | 'test' | 'mytests' | 'myrequests' | 'community' | 'map' | 'alerts' | 'profile'
let testerNavTab = 'dashboard'; // Field Tester: 'dashboard' | 'new' | 'accepted' | 'completed' | 'profile'
let selectedRoleChoice = 'household'; // 'household' | 'field_tester'
let authView = 'login'; // 'login' | 'register' | 'register_tester'
let authSuccessMsg = '';
let isOfflineMode = !navigator.onLine;

// Household booking sub-state
let testSubOption = 'optionA'; // 'optionA' (Individual) | 'optionB' (Book Field Tester)
let selectedTesterForBooking = null;
let searchRadius = 10; // km radius for matching nearby testers

// Safe JSON Fetch helper that respects offline fallback and handles static hosts
async function safeFetchJson(url, options = {}) {
  try {
    const isLocalhost = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
    if (!isLocalhost && !url.startsWith('http')) return null;

    const res = await fetch(url, options);
    const contentType = res.headers.get('content-type') || '';
    if (res.ok && contentType.includes('application/json')) {
      return await res.json();
    }
  } catch (err) {}
  return null;
}

// GIS Map state
let activeMapInstance = null;
let mapLayers = {
  household: true,
  wards: true,
  preliminary: true,
  verified: true,
  hazard: true,
  clusters: true
};

let homeMapLayers = {
  waterTests: true,
  fieldVerified: true,
  rainfall: true,
  floodHazard: true,
  community: true
};

function getGreeting() {
  const hour = new Date().getHours();
  if (hour < 12) return 'Good morning';
  if (hour < 17) return 'Good afternoon';
  return 'Good evening';
}


// Initialize App
document.addEventListener('DOMContentLoaded', () => {
  setupNetworkListeners();
  renderApp();
});

function setupNetworkListeners() {
  window.addEventListener('online', async () => {
    isOfflineMode = false;
    updateNetworkBadge();
    await autoSyncPending();
    renderCurrentTab();
  });

  window.addEventListener('offline', () => {
    isOfflineMode = true;
    updateNetworkBadge();
    renderCurrentTab();
  });
}

function toggleManualOffline() {
  isOfflineMode = !isOfflineMode;
  updateNetworkBadge();
  if (!isOfflineMode) {
    autoSyncPending();
  }
  renderCurrentTab();
}

async function autoSyncPending() {
  try {
    const pending = await dbGetPendingSyncCount();
    if (pending > 0) {
      await dbProcessSyncQueue();
      showToast(`Synchronized ${pending} locally stored records.`);
    }
  } catch (e) {
    console.warn('Sync error:', e);
  }
}

// ----------------------------------------------------
// MAIN ROUTER
// ----------------------------------------------------
export function renderApp() {
  const root = document.getElementById('app');
  if (!root) return;

  const user = getCurrentUser();

  // STRICT REQUIREMENT: FIRST SCREEN MUST BE LOGIN IF NOT ACTIVELY LOGGED IN
  if (!user) {
    root.innerHTML = renderAuthScreen();
    bindAuthEvents();
    return;
  }

  // Dual Interface Router
  if (user.role === 'field_tester') {
    renderFieldTesterShell(root, user);
  } else {
    renderHouseholdShell(root, user);
  }
}

function updateNetworkBadge() {
  const badge = document.getElementById('statusBadge');
  const toggleBtn = document.getElementById('btnToggleOffline');
  if (badge) {
    badge.className = `status-pill ${isOfflineMode ? 'offline' : 'online'}`;
    badge.innerHTML = `
      <span class="status-dot"></span>
      <span>${isOfflineMode ? 'Offline' : 'Online – Sync Available'}</span>
    `;
  }
  if (toggleBtn) {
    toggleBtn.textContent = isOfflineMode ? 'Go Online' : 'Simulate Offline';
  }
}

// Creative AquaGuard Shield & Droplet Logo
function getAquaGuardLogoSvg(size = 36, idSuffix = 'main') {
  return `
    <svg width="${size}" height="${size}" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" class="aquaguard-brand-svg">
      <defs>
        <linearGradient id="aqGrad_${idSuffix}" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stop-color="#14b8a6"/>
          <stop offset="100%" stop-color="#0f766e"/>
        </linearGradient>
        <linearGradient id="aqDrop_${idSuffix}" x1="24" y1="14" x2="24" y2="34" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stop-color="#ffffff"/>
          <stop offset="100%" stop-color="#e0f2fe"/>
        </linearGradient>
      </defs>
      <!-- Base Emblem -->
      <rect x="2" y="2" width="44" height="44" rx="12" fill="url(#aqGrad_${idSuffix})" stroke="#2dd4bf" stroke-width="1.2"/>
      <!-- Shield Contour -->
      <path d="M24 9C29.5 9 34 11.5 35 17C36 25 30 32.5 24 37C18 32.5 12 25 13 17C14 11.5 18.5 9 24 9Z" fill="rgba(255, 255, 255, 0.16)" stroke="rgba(255, 255, 255, 0.65)" stroke-width="1.2" stroke-linejoin="round"/>
      <!-- Luminous Droplet -->
      <path d="M24 13.5C24 13.5 31.5 23 31.5 28C31.5 32.142 28.142 35.5 24 35.5C19.858 35.5 16.5 32.142 16.5 28C16.5 23 24 13.5 24 13.5Z" fill="url(#aqDrop_${idSuffix})"/>
      <!-- Health & Safety Checkmark -->
      <path d="M20 28L22.8 30.8L28 25" stroke="#0f766e" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>
      <!-- Light Reflection -->
      <ellipse cx="20.5" cy="23.5" rx="1.5" ry="2.2" transform="rotate(-25 20.5 23.5)" fill="#ffffff" opacity="0.9"/>
    </svg>
  `;
}

// ====================================================
// 1. VISIBLE NEW LOGIN SCREEN WITH TWO USER TYPES & REGISTRATION
// ====================================================
function renderAuthScreen() {
  if (authView === 'register') {
    return `
      <div class="auth-wrapper">
        <div class="auth-hero">
          <div class="auth-logo">
            ${getAquaGuardLogoSvg(72, 'reg')}
          </div>
          <h1 class="auth-title">Create Household Account</h1>
          <p class="auth-subtitle">Register your household in AquaGuard</p>
        </div>

        <div class="auth-card">
          <form id="formRegister">
            <div id="authErrorMsg"></div>

            <div class="form-group">
              <label class="form-label" for="regName">Household Representative Name</label>
              <input type="text" class="form-control" id="regName" placeholder="e.g. Noura" required />
            </div>

            <div class="form-group">
              <label class="form-label" for="regUsername">Username</label>
              <input type="text" class="form-control" id="regUsername" placeholder="e.g. noura123" required autocomplete="username" />
            </div>

            <div class="form-group">
              <label class="form-label" for="regPin">Password or PIN</label>
              <input type="password" class="form-control" id="regPin" placeholder="e.g. 1234" required />
            </div>

            <div class="form-group">
              <label class="form-label" for="regWard">Ward</label>
              <select class="form-control" id="regWard" required>
                ${WARDS.map((w) => `<option value="${w.id}" ${w.id === 'Ward 5' ? 'selected' : ''}>${w.name}</option>`).join('')}
              </select>
            </div>

            <div class="form-group">
              <label class="form-label" for="regPanchayat">Panchayat</label>
              <input type="text" class="form-control" id="regPanchayat" value="${DEFAULT_PANCHAYAT}" required />
            </div>

            <button type="submit" class="btn btn-primary" id="btnSubmitRegister" style="margin-top: 10px;">
              Create Household Account
            </button>
            <button type="button" class="btn btn-secondary" id="btnGoToLogin" style="margin-top: 8px;">
              Back to Login
            </button>
          </form>
        </div>
      </div>
    `;
  }

  // SEPARATE FIELD TESTER REGISTRATION PAGE
  if (authView === 'register_tester') {
    return `
      <div class="auth-wrapper">
        <div class="auth-hero">
          <div class="auth-logo">
            ${getAquaGuardLogoSvg(72, 'tester_reg')}
          </div>
          <h1 class="auth-title">Create Field Tester Account</h1>
          <p class="auth-subtitle">Register as a Certified Water Quality Field Tester</p>
        </div>

        <div class="auth-card">
          <form id="formRegisterTester">
            <div id="authErrorMsg"></div>

            <div class="form-group">
              <label class="form-label" for="regTesterName">Full Name *</label>
              <input type="text" class="form-control" id="regTesterName" placeholder="e.g. Priya Varma" required />
            </div>

            <div class="form-group">
              <label class="form-label" for="regTesterPhone">Phone Number *</label>
              <input type="tel" class="form-control" id="regTesterPhone" placeholder="e.g. +91 98471 23456" required />
            </div>

            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
              <div class="form-group">
                <label class="form-label" for="regTesterUsername">Username *</label>
                <input type="text" class="form-control" id="regTesterUsername" placeholder="e.g. priya_tester" required autocomplete="username" />
              </div>

              <div class="form-group">
                <label class="form-label" for="regTesterPin">Password / PIN *</label>
                <input type="password" class="form-control" id="regTesterPin" placeholder="e.g. 1234" required />
              </div>
            </div>

            <div class="form-group">
              <label class="form-label" for="regTesterRegNo">Field Tester ID / Registration No</label>
              <input type="text" class="form-control" id="regTesterRegNo" placeholder="e.g. FT-REG-8492" value="FT-REG-${Math.floor(1000 + Math.random() * 9000)}" />
            </div>

            <!-- Test Types Multi-Select -->
            <div class="form-group">
              <label class="form-label">Test Types You Can Perform *</label>
              <div style="display: flex; flex-direction: column; gap: 6px; background: var(--bg-muted); padding: 10px; border-radius: var(--radius-md); border: 1px solid var(--border-color); font-size: 0.82rem; color: var(--text-main);">
                <label style="display: flex; align-items: center; gap: 8px; cursor: pointer;">
                  <input type="checkbox" name="testerTestTypes" value="Water Quality & Coliform Analysis" checked />
                  <span>Water Quality & Coliform Analysis</span>
                </label>
                <label style="display: flex; align-items: center; gap: 8px; cursor: pointer;">
                  <input type="checkbox" name="testerTestTypes" value="Turbidity & pH Screening" checked />
                  <span>Turbidity & pH Screening</span>
                </label>
                <label style="display: flex; align-items: center; gap: 8px; cursor: pointer;">
                  <input type="checkbox" name="testerTestTypes" value="Residual Chlorine & Microbial Assay" />
                  <span>Residual Chlorine & Microbial Assay</span>
                </label>
                <label style="display: flex; align-items: center; gap: 8px; cursor: pointer;">
                  <input type="checkbox" name="testerTestTypes" value="Chemical Contaminants & TDS" />
                  <span>Chemical Contaminants & TDS</span>
                </label>
              </div>
            </div>

            <!-- Current Location Section -->
            <div class="form-group" style="margin-top: 14px;">
              <label class="form-label">Current Service Location *</label>
              <div style="display: flex; gap: 8px; margin-bottom: 8px;">
                <button type="button" class="btn btn-sm btn-primary" id="btnTesterUseGeo" style="width: auto; padding: 6px 12px; font-size: 0.8rem;">
                  📍 Use My Current Location
                </button>
                <button type="button" class="btn btn-sm btn-secondary" id="btnTesterManualLoc" style="width: auto; padding: 6px 12px; font-size: 0.8rem;">
                  ✏️ Enter Location Manually
                </button>
              </div>

              <!-- Location Details Card -->
              <div id="testerLocationCard" style="background: var(--bg-muted); border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 10px; font-size: 0.84rem; line-height: 1.6;">
                <div id="testerGeoStatus" style="color: var(--primary); margin-bottom: 6px; font-weight: 600;">
                  📍 Default: Puzhakkal Panchayat, Ward 5
                </div>

                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px;">
                  <div>
                    <label class="form-label" style="font-size: 0.75rem;" for="regTesterWard">Ward</label>
                    <select class="form-control" id="regTesterWard" style="font-size: 0.8rem; padding: 6px 8px;">
                      ${WARDS.map((w) => `<option value="${w.id}" ${w.id === 'Ward 5' ? 'selected' : ''}>${w.name}</option>`).join('')}
                    </select>
                  </div>
                  <div>
                    <label class="form-label" style="font-size: 0.75rem;" for="regTesterPanchayat">Panchayat</label>
                    <input type="text" class="form-control" id="regTesterPanchayat" value="${DEFAULT_PANCHAYAT}" style="font-size: 0.8rem; padding: 6px 8px;" />
                  </div>
                </div>

                <div class="form-group" style="margin-top: 8px; margin-bottom: 6px;">
                  <label class="form-label" style="font-size: 0.75rem;" for="regTesterArea">Community / Area</label>
                  <input type="text" class="form-control" id="regTesterArea" value="Ward 5 / Puzhakkal North" placeholder="e.g. Ward 5 / Puzhakkal North" style="font-size: 0.8rem; padding: 6px 8px;" />
                </div>

                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px;">
                  <div>
                    <label class="form-label" style="font-size: 0.75rem;" for="regTesterLat">Latitude</label>
                    <input type="number" step="0.0001" class="form-control" id="regTesterLat" value="10.548" style="font-size: 0.8rem; padding: 6px 8px;" />
                  </div>
                  <div>
                    <label class="form-label" style="font-size: 0.75rem;" for="regTesterLng">Longitude</label>
                    <input type="number" step="0.0001" class="form-control" id="regTesterLng" value="76.202" style="font-size: 0.8rem; padding: 6px 8px;" />
                  </div>
                </div>
              </div>

              <!-- Brief explanation note -->
              <div style="font-size: 0.75rem; color: var(--text-muted); margin-top: 6px; line-height: 1.4;">
                ℹ️ <em>Location coordinates are used to match households with nearby certified Field Testers. Your exact home address is never revealed to households.</em>
              </div>
            </div>

            <button type="submit" class="btn btn-primary" id="btnSubmitRegisterTester" style="margin-top: 12px;">
              Create Field Tester Account
            </button>
            <button type="button" class="btn btn-secondary" id="btnGoToLoginFromTesterReg" style="margin-top: 8px;">
              ← Back to Field Tester Login
            </button>
          </form>
        </div>
      </div>
    `;
  }

  // FIRST SCREEN: TWO PROMINENT LARGE USER ROLE OPTIONS
  return `
    <div class="auth-wrapper">
      <div class="auth-hero">
        <div class="auth-logo">
          ${getAquaGuardLogoSvg(76, 'login')}
        </div>
        <h1 class="auth-title">AquaGuard</h1>
        <p class="auth-subtitle">Household Water Safety & Community Alert System</p>
        <span class="offline-ready-indicator">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
          Offline Login Available
        </span>
      </div>

      <!-- SUCCESS MESSAGE BANNER IF ACCOUNT CREATED -->
      ${
        authSuccessMsg
          ? `
        <div style="max-width: 440px; margin: 0 auto 14px auto; background: #ecfdf5; border: 1px solid #10b981; color: #065f46; padding: 12px 16px; border-radius: 10px; font-size: 0.9rem; display: flex; align-items: center; gap: 8px;">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
          <span><strong>${authSuccessMsg}</strong></span>
        </div>
      `
          : ''
      }

      <!-- TWO LARGE VISIBLE OPTIONS -->
      <div class="role-choice-grid">
        <div class="role-choice-tile ${selectedRoleChoice === 'household' ? 'active' : ''}" id="tileRoleHousehold">
          <div class="role-tile-icon">🏠</div>
          <div class="role-tile-title">Household User</div>
          <div class="role-tile-desc">Log in as Household User</div>
        </div>

        <div class="role-choice-tile ${selectedRoleChoice === 'field_tester' ? 'active' : ''}" id="tileRoleTester">
          <div class="role-tile-icon">🧪</div>
          <div class="role-tile-title">Field Tester</div>
          <div class="role-tile-desc">Log in as Field Tester</div>
        </div>
      </div>

      <div class="auth-card">
        <div style="font-weight: 700; font-size: 1.05rem; color: var(--text-main); margin-bottom: 12px; display: flex; align-items: center; gap: 8px;">
          <span>${selectedRoleChoice === 'household' ? '🏠 Household Login' : '🧪 Field Tester Login'}</span>
        </div>


        <form id="formLogin">
          <div id="authErrorMsg"></div>

          <div class="form-group">
            <label class="form-label" for="loginUsername">
              ${selectedRoleChoice === 'household' ? 'Household Username' : 'Field Tester Username'}
            </label>
            <input type="text" class="form-control" id="loginUsername" 
              placeholder="${selectedRoleChoice === 'household' ? 'e.g. noura123' : 'e.g. tester1'}" 
              required autocomplete="username" />
          </div>

          <div class="form-group">
            <label class="form-label" for="loginPin">Password / PIN</label>
            <input type="password" class="form-control" id="loginPin" 
              placeholder="${selectedRoleChoice === 'household' ? 'e.g. 1234' : 'e.g. tester123'}" 
              required />
          </div>

          <button type="submit" class="btn btn-primary" id="btnLogin" style="margin-top: 8px;">
            ${selectedRoleChoice === 'household' ? 'Login as Household' : 'Login as Field Tester'}
          </button>

          ${
            selectedRoleChoice === 'household'
              ? `
            <button type="button" class="btn btn-secondary" id="btnGoToRegister" style="margin-top: 8px;">
              Create Household Account
            </button>
          `
              : `
            <!-- Clearly visible Create Field Tester Account option -->
            <button type="button" class="btn btn-secondary" id="btnGoToTesterRegister" style="margin-top: 8px;">
              Create Field Tester Account
            </button>

            <!-- Visibly provided demo credentials -->
            <div class="demo-creds-banner" style="margin-top: 14px;">
              <div><strong>Demo Field Tester:</strong></div>
              <div>Username: <code>tester1</code> (or <code>anil_tester</code>)</div>
              <div>Password: <code>tester123</code> (or <code>1234</code>)</div>
              <button type="button" class="btn-autofill-demo" id="btnAutofillTester">
                ⚡ Auto-fill Tester Demo Login
              </button>
            </div>
          `
          }
        </form>
      </div>
    </div>
  `;
}

function bindAuthEvents() {
  document.getElementById('tileRoleHousehold')?.addEventListener('click', () => {
    selectedRoleChoice = 'household';
    authSuccessMsg = '';
    renderApp();
  });

  document.getElementById('tileRoleTester')?.addEventListener('click', () => {
    selectedRoleChoice = 'field_tester';
    authSuccessMsg = '';
    renderApp();
  });

  document.getElementById('btnGoToRegister')?.addEventListener('click', () => {
    authView = 'register';
    authSuccessMsg = '';
    renderApp();
  });

  document.getElementById('btnGoToTesterRegister')?.addEventListener('click', () => {
    authView = 'register_tester';
    authSuccessMsg = '';
    renderApp();
  });

  document.getElementById('btnGoToLogin')?.addEventListener('click', () => {
    authView = 'login';
    authSuccessMsg = '';
    renderApp();
  });

  document.getElementById('btnGoToLoginFromTesterReg')?.addEventListener('click', () => {
    authView = 'login';
    selectedRoleChoice = 'field_tester';
    authSuccessMsg = '';
    renderApp();
  });

  document.getElementById('btnAutofillTester')?.addEventListener('click', () => {
    const inputU = document.getElementById('loginUsername');
    const inputP = document.getElementById('loginPin');
    if (inputU && inputP) {
      inputU.value = 'tester1';
      inputP.value = 'tester123';
    }
  });

  // Geolocation detector in Field Tester registration
  document.getElementById('btnTesterUseGeo')?.addEventListener('click', () => {
    const geoStatus = document.getElementById('testerGeoStatus');
    const latInput = document.getElementById('regTesterLat');
    const lngInput = document.getElementById('regTesterLng');
    const areaInput = document.getElementById('regTesterArea');

    if (!navigator.geolocation) {
      alert('Geolocation is not supported by your browser.');
      return;
    }

    if (geoStatus) geoStatus.innerHTML = '⏳ Acquiring GPS location...';

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const lat = pos.coords.latitude;
        const lng = pos.coords.longitude;
        if (latInput) latInput.value = lat.toFixed(4);
        if (lngInput) lngInput.value = lng.toFixed(4);
        if (geoStatus) geoStatus.innerHTML = `✓ GPS Locked: ${lat.toFixed(4)}, ${lng.toFixed(4)}`;
        if (areaInput && (!areaInput.value || areaInput.value.includes('Default'))) {
          areaInput.value = `Ward 5 / Puzhakkal Sector`;
        }
        showToast('Acquired current GPS coordinates.');
      },
      (err) => {
        // Fallback to default calibrated location
        if (latInput) latInput.value = '10.548';
        if (lngInput) lngInput.value = '76.202';
        if (geoStatus) geoStatus.innerHTML = '📍 Using local service coordinates (Puzhakkal)';
        showToast('Could not acquire GPS, using approximate local coordinates.');
      },
      { timeout: 8000 }
    );
  });

  document.getElementById('btnTesterManualLoc')?.addEventListener('click', () => {
    const areaInput = document.getElementById('regTesterArea');
    const geoStatus = document.getElementById('testerGeoStatus');
    if (areaInput) areaInput.focus();
    if (geoStatus) geoStatus.innerHTML = '✏️ Manual Entry Mode: adjust Ward, Area, and Coordinates';
  });

  // Household Login Form
  const formLogin = document.getElementById('formLogin');
  formLogin?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const username = document.getElementById('loginUsername').value;
    const pin = document.getElementById('loginPin').value;
    const errorDiv = document.getElementById('authErrorMsg');

    try {
      await loginUser(username, pin);
      currentTab = 'home';
      testerNavTab = 'dashboard';
      authSuccessMsg = '';
      renderApp();
    } catch (err) {
      if (errorDiv) {
        errorDiv.innerHTML = `<div class="notice-box notice-offline">${err.message}</div>`;
      }
    }
  });

  // Household Registration Form
  const formRegister = document.getElementById('formRegister');
  formRegister?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = document.getElementById('regName').value;
    const username = document.getElementById('regUsername').value;
    const pin = document.getElementById('regPin').value;
    const ward = document.getElementById('regWard').value;
    const panchayat = document.getElementById('regPanchayat').value;
    const errorDiv = document.getElementById('authErrorMsg');

    const wardObj = WARDS.find((w) => w.id === ward);

    try {
      await registerUser({
        name,
        username,
        pin,
        ward,
        panchayat,
        lat: wardObj ? wardObj.center[0] : 10.545,
        lng: wardObj ? wardObj.center[1] : 76.205
      });
      currentTab = 'home';
      authSuccessMsg = '';
      renderApp();
    } catch (err) {
      if (errorDiv) {
        errorDiv.innerHTML = `<div class="notice-box notice-offline">${err.message}</div>`;
      }
    }
  });

  // Field Tester Registration Form
  const formRegisterTester = document.getElementById('formRegisterTester');
  formRegisterTester?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = document.getElementById('regTesterName').value;
    const phone = document.getElementById('regTesterPhone').value;
    const username = document.getElementById('regTesterUsername').value;
    const pin = document.getElementById('regTesterPin').value;
    const tester_reg_no = document.getElementById('regTesterRegNo').value;
    const ward = document.getElementById('regTesterWard').value;
    const panchayat = document.getElementById('regTesterPanchayat').value;
    const area = document.getElementById('regTesterArea').value;
    const lat = parseFloat(document.getElementById('regTesterLat').value) || 10.548;
    const lng = parseFloat(document.getElementById('regTesterLng').value) || 76.202;
    const errorDiv = document.getElementById('authErrorMsg');

    // Collect selected test types
    const checkboxes = document.querySelectorAll('input[name="testerTestTypes"]:checked');
    const selectedTypes = Array.from(checkboxes).map((c) => c.value).join(', ');

    if (!selectedTypes) {
      if (errorDiv) errorDiv.innerHTML = `<div class="notice-box notice-offline">Please select at least one test type you can perform.</div>`;
      return;
    }

    try {
      const res = await registerFieldTester({
        name,
        phone,
        username,
        pin,
        tester_reg_no,
        test_types: selectedTypes,
        ward,
        panchayat,
        area,
        lat,
        lng
      });

      // STRICT REQUIREMENT:
      // Do NOT automatically log them in as a demo user.
      // Redirect them to the Field Tester login page.
      // Show a clear “Account created successfully. Please log in.” message.
      authView = 'login';
      selectedRoleChoice = 'field_tester';
      authSuccessMsg = res.message || 'Account created successfully. Please log in.';
      renderApp();
    } catch (err) {
      if (errorDiv) {
        errorDiv.innerHTML = `<div class="notice-box notice-offline">${err.message}</div>`;
      }
    }
  });
}

// ====================================================
// 2. FIELD TESTER DASHBOARD (NEW VISIBLE PAGE)
// ====================================================
function renderFieldTesterShell(root, user) {
  root.innerHTML = `
    <header class="app-header">
      <div style="display: flex; align-items: center; gap: 20px;">
        <div class="brand-badge" id="btnHeaderTester" style="cursor: pointer;">
          <div class="brand-icon">
            ${getAquaGuardLogoSvg(36, 'tester_hdr')}
          </div>
          <div>
            <span class="brand-name">AquaGuard</span>
            <div class="brand-subtitle">Field Inspector Portal</div>
          </div>
        </div>

        <!-- Desktop Navigation Bar for Field Tester -->
        <nav class="desktop-nav">
          <button class="nav-link ${testerNavTab === 'dashboard' ? 'active' : ''}" data-ttab="dashboard">Dashboard</button>
          <button class="nav-link ${testerNavTab === 'new' ? 'active' : ''}" data-ttab="new">New Requests</button>
          <button class="nav-link ${testerNavTab === 'accepted' ? 'active' : ''}" data-ttab="accepted">Accepted</button>
          <button class="nav-link ${testerNavTab === 'completed' ? 'active' : ''}" data-ttab="completed">Completed</button>
          <button class="nav-link ${testerNavTab === 'profile' ? 'active' : ''}" data-ttab="profile">Profile</button>
        </nav>
      </div>

      <div class="header-actions">
        <div class="user-chip" title="${user.name}">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
          <span>${user.name.split(' ')[0]}</span>
          <span style="color: var(--text-muted); font-weight: normal;">•</span>
          <span style="color: var(--primary); font-weight: 600;">${user.ward || 'Ward 5'}</span>
        </div>
        <button class="btn-header-logout" id="btnTesterLogoutHeader" title="Sign out">
          Logout
        </button>
      </div>
    </header>

    <main class="view-container" id="mainContent">
      <!-- Tester Dynamic Content -->
    </main>

    <!-- Field Tester Mobile Bottom Nav -->
    <nav class="bottom-nav">
      <button class="nav-item ${testerNavTab === 'dashboard' ? 'active' : ''}" data-ttab="dashboard">
        <svg viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
        <span>Dashboard</span>
      </button>
      <button class="nav-item ${testerNavTab === 'new' ? 'active' : ''}" data-ttab="new">
        <svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="12" y1="18" x2="12" y2="12"></line><line x1="9" y1="15" x2="15" y2="15"></line></svg>
        <span>New</span>
      </button>
      <button class="nav-item ${testerNavTab === 'accepted' ? 'active' : ''}" data-ttab="accepted">
        <svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg>
        <span>Accepted</span>
      </button>
      <button class="nav-item ${testerNavTab === 'completed' ? 'active' : ''}" data-ttab="completed">
        <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 14 14"></polyline></svg>
        <span>Completed</span>
      </button>
      <button class="nav-item ${testerNavTab === 'profile' ? 'active' : ''}" data-ttab="profile">
        <svg viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
        <span>Profile</span>
      </button>
    </nav>

    <div id="modalHost"></div>
  `;

  document.getElementById('btnTesterLogoutHeader')?.addEventListener('click', () => {
    logoutUser();
    selectedRoleChoice = 'field_tester';
    renderApp();
  });

  document.querySelectorAll('.bottom-nav .nav-item, .desktop-nav .nav-link').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      testerNavTab = e.currentTarget.getAttribute('data-ttab');
      document.querySelectorAll('.bottom-nav .nav-item').forEach((item) => {
        item.classList.toggle('active', item.getAttribute('data-ttab') === testerNavTab);
      });
      document.querySelectorAll('.desktop-nav .nav-link').forEach((item) => {
        item.classList.toggle('active', item.getAttribute('data-ttab') === testerNavTab);
      });
      renderFieldTesterView(user);
    });
  });

  renderFieldTesterView(user);
}

async function renderFieldTesterView(user) {
  const container = document.getElementById('mainContent');
  if (!container) return;

  // Fetch real metrics and requests from SQLite / IndexedDB
  let requests = [];
  let stats = { new_requests: 1, accepted: 1, completed: 1, pending_results: 0 };

  try {
    const data = await safeFetchJson(`/api/requests?role=field_tester&user_id=${user.id || 1}`);
    if (data && data.requests) {
      requests = data.requests;
    } else {
      requests = await dbGetFieldRequestsByTester(user.id || user.name);
    }
  } catch (e) {
    requests = await dbGetFieldRequestsByTester(user.id || user.name);
  }

  try {
    const sData = await safeFetchJson(`/api/testers/stats/${user.id || 1}`);
    if (sData) {
      stats = sData;
    } else {
      throw new Error('Fallback to local stats');
    }
  } catch (e) {
    const newCount = requests.filter((r) => r.status === 'Pending' || r.status === 'Pending Field Tester Response' || r.status === 'Time Change Suggested').length;
    const accCount = requests.filter((r) => r.status === 'Accepted' || r.status === 'Test In Progress').length;
    const compCount = requests.filter((r) => r.status === 'Test Completed' || r.status === 'Verified').length;
    stats = {
      new_requests: newCount,
      accepted: accCount,
      completed: compCount,
      pending_results: requests.filter((r) => r.status === 'Test In Progress').length
    };
  }

  // Filter requests according to tab
  let displayRequests = requests;
  if (testerNavTab === 'new') {
    displayRequests = requests.filter((r) => r.status === 'Pending' || r.status === 'Pending Field Tester Response' || r.status === 'Time Change Suggested');
  } else if (testerNavTab === 'accepted') {
    displayRequests = requests.filter((r) => r.status === 'Accepted' || r.status === 'Test In Progress');
  } else if (testerNavTab === 'completed') {
    displayRequests = requests.filter((r) => r.status === 'Test Completed' || r.status === 'Verified');
  }

  if (testerNavTab === 'profile') {
    renderFieldTesterProfile(container, user);
    return;
  }

  container.innerHTML = `
    <!-- Top Greeting Header -->
    <div class="welcome-section" style="margin-bottom: 16px;">
      <div class="welcome-text">
        <h1 class="welcome-title">Hello, ${user.name.split(' ')[0]}</h1>
        <p class="welcome-subtitle">Field Inspector Portal • Authorized Water Safety Testing</p>
      </div>
      <div class="location-badge">
        <span class="badge badge-safe">● Certified Inspector</span>
        <span style="font-size: 0.8rem; font-weight: 600; color: var(--text-secondary);">${user.ward || 'Ward 5'}</span>
      </div>
    </div>

    <!-- Summary Metrics Cards -->
    <div class="tester-metrics-grid">
      <div class="metric-card">
        <div class="metric-val" style="color: var(--warning);">${stats.new_requests}</div>
        <div class="metric-lbl">New Requests</div>
      </div>
      <div class="metric-card">
        <div class="metric-val" style="color: var(--primary);">${stats.accepted}</div>
        <div class="metric-lbl">Accepted</div>
      </div>
      <div class="metric-card">
        <div class="metric-val" style="color: var(--success);">${stats.completed}</div>
        <div class="metric-lbl">Completed</div>
      </div>
      <div class="metric-card">
        <div class="metric-val" style="color: var(--text-secondary);">${stats.pending_results}</div>
        <div class="metric-lbl">Pending Results</div>
      </div>
    </div>

    <!-- Tester Sub-Navigation Tabs -->
    <div class="tester-nav-tabs">
      <button class="tester-nav-tab ${testerNavTab === 'dashboard' ? 'active' : ''}" data-tab="dashboard">
        Dashboard All
      </button>
      <button class="tester-nav-tab ${testerNavTab === 'new' ? 'active' : ''}" data-tab="new">
        New Requests
      </button>
      <button class="tester-nav-tab ${testerNavTab === 'accepted' ? 'active' : ''}" data-tab="accepted">
        Accepted Requests
      </button>
      <button class="tester-nav-tab ${testerNavTab === 'completed' ? 'active' : ''}" data-tab="completed">
        Completed Tests
      </button>
    </div>

    <!-- Incoming Test Requests Section -->
    <div class="card">
      <div class="card-header">
        <h3 class="card-title">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" stroke-width="2"><polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path></svg>
          Incoming Test Requests
        </h3>
        <span class="badge badge-info">${displayRequests.length} Showing</span>
      </div>

      <div id="testerRequestsList">
        ${
          displayRequests.length > 0
            ? displayRequests.map((r) => renderTesterRequestCard(r)).join('')
            : '<div style="text-align: center; padding: 24px; color: var(--text-muted);">No requests matching this view.</div>'
        }
      </div>
    </div>
  `;

  bindFieldTesterEvents(user, requests);
}

function renderTesterRequestCard(r) {
  const isPending = r.status === 'Pending' || r.status === 'Pending Field Tester Response';
  const isAccepted = r.status === 'Accepted';
  const isInProgress = r.status === 'Test In Progress';
  const isCompleted = r.status === 'Test Completed' || r.status === 'Verified';

  return `
    <div class="request-card">
      <div class="request-header">
        <span class="request-id">Request ${r.id}</span>
        <span class="badge ${
          isCompleted ? 'badge-safe' : isAccepted ? 'badge-info' : isInProgress ? 'badge-warn' : isPending ? 'badge-warn' : 'badge-danger'
        }">${r.status}</span>
      </div>

      <div class="request-meta-grid">
        <div>Household: <strong style="color: var(--text-main);">${r.household_name}</strong></div>
        <div>Ward: <strong>${r.ward}</strong></div>
        <div>Distance: <strong>${r.distance_km || 2.3} km</strong></div>
        <div>Test Type: <strong>${r.test_type}</strong></div>
        <div>Requested Time: <strong>${r.requested_date || 'Today'}, ${r.requested_time || '4:00 PM'}</strong></div>
        <div>Location: <strong>${r.location_desc || r.ward}</strong></div>
      </div>

      ${
        r.suggested_time && r.status === 'Time Change Suggested'
          ? `<div style="font-size: 0.78rem; color: #fbbf24; margin-top: 4px;">
              You suggested a new time: <b>${r.suggested_time}</b> (Awaiting Household confirmation)
             </div>`
          : ''
      }

      ${
        r.observations
          ? `<div style="font-size: 0.8rem; color: #a7f3d0; background: rgba(16, 185, 129, 0.1); padding: 6px 10px; border-radius: 6px; margin-top: 4px;">
              <strong>Observations:</strong> ${r.observations} • Result: <b>${r.field_result || 'Abnormal'}</b>
             </div>`
          : ''
      }

      <div class="request-actions">
        ${
          isPending || r.status === 'Time Change Suggested'
            ? `<button class="btn btn-sm btn-primary btn-view-request" data-id="${r.id}">[View Request]</button>`
            : isAccepted || isInProgress
            ? `
              <button class="btn btn-sm btn-success btn-start-test-action" data-id="${r.id}" data-hname="${r.household_name}" data-ward="${r.ward}" data-test="${r.test_type}">
                ${isInProgress ? 'Continue Test → Submit Result' : 'Start Field Test'}
              </button>
              <button class="btn btn-sm btn-secondary btn-view-request" data-id="${r.id}" style="width: auto;">
                View Details
              </button>
            `
            : `<button class="btn btn-sm btn-secondary btn-view-request" data-id="${r.id}">[View Request Record]</button>`
        }
      </div>
    </div>
  `;
}

function bindFieldTesterEvents(user, requests) {
  document.querySelectorAll('.tester-nav-tab').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      testerNavTab = e.currentTarget.getAttribute('data-tab');
      renderFieldTesterView(user);
    });
  });

  // [View Request] Click
  document.querySelectorAll('.btn-view-request').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const id = e.currentTarget.getAttribute('data-id');
      const req = requests.find((r) => r.id === id) || {
        id: id,
        household_name: 'Noura',
        ward: 'Ward 5',
        location_desc: 'Ward 5',
        test_type: 'Water Quality Test',
        requested_date: 'Today',
        requested_time: '4:00 PM',
        notes: 'Possible abnormal home-test result.',
        status: 'Pending'
      };
      showViewRequestModal(req, user);
    });
  });

  // [Start Field Test] Click
  document.querySelectorAll('.btn-start-test-action').forEach((btn) => {
    btn.addEventListener('click', async (e) => {
      const reqId = e.currentTarget.getAttribute('data-id');
      const hname = e.currentTarget.getAttribute('data-hname');
      const ward = e.currentTarget.getAttribute('data-ward');
      const test = e.currentTarget.getAttribute('data-test');

      // Update status to 'Test In Progress'
      try {
        await fetch(`/api/requests/${reqId}/start_test`, { method: 'POST' });
      } catch (err) {}
      const reqObj = await dbGetFieldRequestById(reqId);
      if (reqObj) {
        reqObj.status = 'Test In Progress';
        await dbUpdateFieldRequest(reqObj);
      }

      showSubmitFieldTestResultModal({ reqId, hname, ward, test, user });
    });
  });
}

// ----------------------------------------------------
// FIELD TESTER: VIEW REQUEST MODAL & TIME CHANGE
// ----------------------------------------------------
function showViewRequestModal(req, user) {
  const host = document.getElementById('modalHost');
  if (!host) return;

  host.innerHTML = `
    <div class="prompt-modal-overlay">
      <div class="prompt-modal-card">
        <div class="prompt-modal-title">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--accent-teal)" stroke-width="2"><polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline></svg>
          <span>Field Test Request – ${req.id}</span>
        </div>

        <div style="font-size: 0.88rem; line-height: 1.8; color: var(--text-main); margin-bottom: 14px;">
          <div><strong>Household:</strong> ${req.household_name}</div>
          <div><strong>Ward:</strong> ${req.ward}</div>
          <div><strong>Location:</strong> ${req.location_desc || req.ward}</div>
          <div><strong>Test Type:</strong> ${req.test_type}</div>
          <div><strong>Requested Date:</strong> ${req.requested_date || 'Today'}</div>
          <div><strong>Requested Time:</strong> ${req.requested_time || '4:00 PM'}</div>
          ${req.notes ? `<div><strong>Notes:</strong> <em>"${req.notes}"</em></div>` : ''}
          <div><strong>Current Status:</strong> <span class="badge badge-warn">${req.status}</span></div>
        </div>

        <!-- Action Buttons: [Accept Request], [Suggest Different Time], [Reject Request] -->
        <div style="display: flex; flex-direction: column; gap: 8px;">
          ${
            req.status === 'Pending' || req.status === 'Pending Field Tester Response' || req.status === 'Time Change Suggested'
              ? `
            <button class="btn btn-success" id="btnModalAcceptReq">
              [Accept Request]
            </button>
            <button class="btn btn-warn" id="btnModalSuggestTime">
              [Suggest Different Time]
            </button>
            <button class="btn btn-danger" id="btnModalRejectReq">
              [Reject Request]
            </button>
          `
              : req.status === 'Accepted'
              ? `
            <button class="btn btn-primary" id="btnModalStartTestFromModal">
              Start Field Test
            </button>
          `
              : ''
          }
          <button class="btn btn-secondary" id="btnModalCloseView" style="margin-top: 4px;">
            Close
          </button>
        </div>
      </div>
    </div>
  `;

  document.getElementById('btnModalCloseView')?.addEventListener('click', () => {
    host.innerHTML = '';
  });

  // Accept Request
  document.getElementById('btnModalAcceptReq')?.addEventListener('click', async () => {
    try {
      await fetch(`/api/requests/${req.id}/accept`, { method: 'POST' });
    } catch (e) {}
    req.status = 'Accepted';
    await dbUpdateFieldRequest(req);
    host.innerHTML = '';
    showToast(`Request ${req.id} Accepted! Status is now Accepted.`);
    renderFieldTesterView(user);
  });

  // Reject Request
  document.getElementById('btnModalRejectReq')?.addEventListener('click', async () => {
    try {
      await fetch(`/api/requests/${req.id}/reject`, { method: 'POST' });
    } catch (e) {}
    req.status = 'Rejected';
    await dbUpdateFieldRequest(req);
    host.innerHTML = '';
    showToast(`Request ${req.id} Rejected.`);
    renderFieldTesterView(user);
  });

  // Suggest Different Time Sub-modal
  document.getElementById('btnModalSuggestTime')?.addEventListener('click', () => {
    showSuggestTimeModal(req, user);
  });

  document.getElementById('btnModalStartTestFromModal')?.addEventListener('click', () => {
    host.innerHTML = '';
    showSubmitFieldTestResultModal({
      reqId: req.id,
      hname: req.household_name,
      ward: req.ward,
      test: req.test_type,
      user
    });
  });
}

function showSuggestTimeModal(req, user) {
  const host = document.getElementById('modalHost');
  if (!host) return;

  host.innerHTML = `
    <div class="prompt-modal-overlay">
      <div class="prompt-modal-card">
        <div class="prompt-modal-title" style="color: #fbbf24;">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 14 14"></polyline></svg>
          <span>Suggest Different Time (${req.id})</span>
        </div>
        <p style="font-size: 0.84rem; color: var(--text-dim); margin-bottom: 12px;">
          Original requested time was: <strong>${req.requested_time || '4:00 PM'}</strong>
        </p>

        <form id="formSuggestTime">
          <div class="form-group">
            <label class="form-label" for="suggDate">Suggested Date</label>
            <input type="date" class="form-control" id="suggDate" value="${new Date().toISOString().split('T')[0]}" required />
          </div>

          <div class="form-group">
            <label class="form-label" for="suggTime">Suggested Time</label>
            <input type="text" class="form-control" id="suggTime" value="5:30 PM" required />
          </div>

          <div style="display: flex; gap: 8px; margin-top: 14px;">
            <button type="submit" class="btn btn-primary" id="btnConfirmSendTime">
              Send Time Change
            </button>
            <button type="button" class="btn btn-secondary" id="btnCancelTimeModal" style="width: auto;">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  `;

  document.getElementById('btnCancelTimeModal')?.addEventListener('click', () => {
    host.innerHTML = '';
  });

  document.getElementById('formSuggestTime')?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const suggDate = document.getElementById('suggDate').value;
    const suggTime = document.getElementById('suggTime').value;

    try {
      await fetch(`/api/requests/${req.id}/suggest_time`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ suggested_date: suggDate, suggested_time: suggTime })
      });
    } catch (err) {}

    req.status = 'Time Change Suggested';
    req.suggested_date = suggDate;
    req.suggested_time = suggTime;
    await dbUpdateFieldRequest(req);

    host.innerHTML = '';
    showToast(`Suggested new time (${suggTime}) sent to ${req.household_name}.`);
    renderFieldTesterView(user);
  });
}

// ----------------------------------------------------
// FIELD TESTER: SUBMIT FIELD TEST RESULT
// ----------------------------------------------------
function showSubmitFieldTestResultModal({ reqId, hname, ward, test, user }) {
  const host = document.getElementById('modalHost');
  if (!host) return;

  host.innerHTML = `
    <div class="prompt-modal-overlay">
      <div class="prompt-modal-card">
        <div class="prompt-modal-title" style="color: #38bdf8;">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
          <span>Submit Field Test Result</span>
        </div>

        <div style="font-size: 0.84rem; color: var(--text-dim); margin-bottom: 12px; line-height: 1.6;">
          <div>Request ID: <strong>${reqId}</strong></div>
          <div>Household: <strong>${hname}</strong> (${ward})</div>
          <div>Test Type: <strong>${test}</strong></div>
        </div>

        <form id="formSubmitFieldResult">
          <div class="form-group">
            <label class="form-label" for="fieldTestDateTime">Test Date/Time</label>
            <input type="text" class="form-control" id="fieldTestDateTime" value="Today, 5:30 PM" required />
          </div>

          <div class="form-group">
            <label class="form-label" for="resSelect">Result</label>
            <select class="form-control" id="resSelect" required>
              <option value="Normal">Normal</option>
              <option value="Abnormal" selected>Abnormal</option>
              <option value="Inconclusive">Inconclusive</option>
            </select>
          </div>

          <div class="form-group">
            <label class="form-label" for="ftObservations">Observations</label>
            <textarea class="form-control" id="ftObservations" rows="2" placeholder="e.g. Photometer turbidity 14 NTU, microbial contamination detected."></textarea>
          </div>

          <div class="form-group">
            <label class="form-label" for="ftPhotoUpload">Upload Test Photo</label>
            <input type="file" accept="image/*" class="form-control" id="ftPhotoUpload" />
          </div>

          <div class="form-group">
            <label class="form-label" for="ftAdditionalNotes">Additional Notes</label>
            <textarea class="form-control" id="ftAdditionalNotes" rows="2" placeholder="e.g. Advised household to boil water. Certified Lab Verification Recommended."></textarea>
          </div>

          <div style="display: flex; gap: 8px; margin-top: 14px;">
            <button type="submit" class="btn btn-primary" id="btnSubmitResultBtn">
              Submit Result
            </button>
            <button type="button" class="btn btn-secondary" id="btnCancelResultModal" style="width: auto;">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  `;

  document.getElementById('btnCancelResultModal')?.addEventListener('click', () => {
    host.innerHTML = '';
  });

  document.getElementById('formSubmitFieldResult')?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const result = document.getElementById('resSelect').value;
    const observations = document.getElementById('ftObservations').value;
    const notes = document.getElementById('ftAdditionalNotes').value;

    try {
      await fetch(`/api/requests/${reqId}/complete`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          result,
          test_type: test,
          observations: observations || 'Field inspection confirmed abnormal coliform readings.',
          lab_status: result === 'Abnormal' ? 'Recommended' : 'Not Required'
        })
      });
    } catch (err) {}

    const reqObj = await dbGetFieldRequestById(reqId);
    if (reqObj) {
      reqObj.status = 'Test Completed';
      reqObj.test_result = result;
      reqObj.observations = observations || 'Field inspection completed.';
      reqObj.lab_status = result === 'Abnormal' ? 'Recommended' : 'Not Required';
      await dbUpdateFieldRequest(reqObj);

      // Record field-verified test for household
      const verifiedTestRecord = {
        user_id: reqObj.user_id,
        username: reqObj.username,
        ward: reqObj.ward,
        panchayat: reqObj.panchayat || 'Puzhakkal Panchayat',
        test_type: `${reqObj.test_type || test}`,
        source: 'field',
        tester_name: user.name,
        result: result,
        date: new Date().toISOString().split('T')[0],
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        date_time: `${new Date().toISOString().split('T')[0]} ${new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`,
        notes: observations || notes || `Field verified test performed by certified inspector ${user.name}`,
        lat: reqObj.lat || 10.545,
        lng: reqObj.lng || 76.205,
        verification_status: 'Verified',
        lab_status: result === 'Abnormal' ? 'Recommended' : 'Not Required',
        timestamp: Date.now()
      };
      await dbSaveWaterTest(verifiedTestRecord);
    }

    host.innerHTML = '';
    showToast('Field test result submitted successfully! Verified report recorded.');
    renderFieldTesterView(user);
  });
}

function renderFieldTesterProfile(container, user) {
  container.innerHTML = `
    <div class="card">
      <div class="card-header">
        <h2 class="card-title">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--accent-teal)" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
          Field Tester Profile
        </h2>
        <span class="badge ${user.available !== 0 ? 'badge-safe' : 'badge-warn'}">
          ${user.available !== 0 ? '● Available' : '● Off Duty / Busy'}
        </span>
      </div>

      <form id="formTesterProfile">
        <div id="profileFeedbackMsg"></div>

        <div class="form-group">
          <label class="form-label" for="editTesterName">Full Name</label>
          <input type="text" class="form-control" id="editTesterName" value="${user.name || ''}" required />
        </div>

        <div class="form-group">
          <label class="form-label" for="editTesterPhone">Phone Number</label>
          <input type="tel" class="form-control" id="editTesterPhone" value="${user.phone || '+91 98471 23456'}" required />
        </div>

        <div class="form-group">
          <label class="form-label" for="editTesterRegNo">Registration / Certification No</label>
          <input type="text" class="form-control" id="editTesterRegNo" value="${user.tester_reg_no || 'FT-REG-1042'}" readonly style="opacity: 0.8;" />
        </div>

        <div class="form-group">
          <label class="form-label" for="editTesterTypes">Test Types You Can Perform</label>
          <textarea class="form-control" id="editTesterTypes" rows="2">${user.test_types || user.specialty || 'Water Quality & Coliform Analysis, Turbidity & pH Screening'}</textarea>
        </div>

        <div class="form-group">
          <label class="form-label" for="editTesterArea">Service Area / Community</label>
          <input type="text" class="form-control" id="editTesterArea" value="${user.area || `${user.ward} / Puzhakkal Sector`}" />
        </div>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
          <div class="form-group">
            <label class="form-label" for="editTesterWard">Base Ward</label>
            <select class="form-control" id="editTesterWard">
              ${WARDS.map((w) => `<option value="${w.id}" ${w.id === user.ward ? 'selected' : ''}>${w.name}</option>`).join('')}
            </select>
          </div>

          <div class="form-group">
            <label class="form-label" for="editTesterAvail">Availability Status</label>
            <select class="form-control" id="editTesterAvail">
              <option value="1" ${user.available !== 0 ? 'selected' : ''}>Available Now</option>
              <option value="0" ${user.available === 0 ? 'selected' : ''}>Off Duty / Busy</option>
            </select>
          </div>
        </div>

        <!-- Location Coordinates with Geolocation button -->
        <div class="form-group">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
            <label class="form-label" style="margin: 0;">Location Coordinates</label>
            <button type="button" class="btn btn-sm btn-secondary" id="btnUpdateTesterGeo" style="width: auto; padding: 3px 8px; font-size: 0.75rem;">
              📍 Use Current GPS
            </button>
          </div>
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px;">
            <input type="number" step="0.0001" class="form-control" id="editTesterLat" value="${user.lat || 10.548}" />
            <input type="number" step="0.0001" class="form-control" id="editTesterLng" value="${user.lng || 76.202}" />
          </div>
          <div style="font-size: 0.75rem; color: var(--text-muted); margin-top: 4px;">
            Coordinates are used by AquaGuard to calculate proximity for households.
          </div>
        </div>

        <div style="display: flex; gap: 10px; margin-top: 14px;">
          <button type="submit" class="btn btn-primary" id="btnSaveTesterProfile">
            Save Profile Changes
          </button>
        </div>
      </form>

      <div style="margin-top: 24px; padding-top: 14px; border-top: 1px solid var(--border-subtle);">
        <button class="btn btn-danger" id="btnLogoutTesterBtn">
          Log Out of Field Tester
        </button>
      </div>
    </div>
  `;

  // Bind update events
  document.getElementById('btnUpdateTesterGeo')?.addEventListener('click', () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((pos) => {
        const latInput = document.getElementById('editTesterLat');
        const lngInput = document.getElementById('editTesterLng');
        if (latInput) latInput.value = pos.coords.latitude.toFixed(4);
        if (lngInput) lngInput.value = pos.coords.longitude.toFixed(4);
        showToast('Updated location to current GPS coordinates.');
      }, () => {
        showToast('Could not acquire GPS position.');
      });
    }
  });

  document.getElementById('formTesterProfile')?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = document.getElementById('editTesterName').value;
    const phone = document.getElementById('editTesterPhone').value;
    const test_types = document.getElementById('editTesterTypes').value;
    const area = document.getElementById('editTesterArea').value;
    const ward = document.getElementById('editTesterWard').value;
    const available = parseInt(document.getElementById('editTesterAvail').value, 10);
    const lat = parseFloat(document.getElementById('editTesterLat').value) || user.lat;
    const lng = parseFloat(document.getElementById('editTesterLng').value) || user.lng;

    try {
      const updated = await updateFieldTesterProfile(user.id, {
        name,
        phone,
        test_types,
        area,
        ward,
        available,
        lat,
        lng
      });
      showToast('Profile updated successfully!');
      renderFieldTesterProfile(container, updated);
    } catch (err) {
      showToast('Failed to update profile');
    }
  });

  document.getElementById('btnLogoutTesterBtn')?.addEventListener('click', () => {
    logoutUser();
    selectedRoleChoice = 'household';
    renderApp();
  });
}

// ====================================================
// 3. HOUSEHOLD SHELL & TABS
// ====================================================
function renderHouseholdShell(root, user) {
  root.innerHTML = `
    <header class="app-header">
      <div style="display: flex; align-items: center; gap: 20px;">
        <div class="brand-badge" id="btnHeaderHome" style="cursor: pointer;">
          <div class="brand-icon">
            ${getAquaGuardLogoSvg(36, 'home_hdr')}
          </div>
          <div>
            <span class="brand-name">AquaGuard</span>
            <div class="brand-subtitle">Water Safety Platform</div>
          </div>
        </div>

        <!-- Desktop Navigation Bar -->
        <nav class="desktop-nav">
          <button class="nav-link ${currentTab === 'home' ? 'active' : ''}" data-tab="home">Home</button>
          <button class="nav-link ${currentTab === 'test' ? 'active' : ''}" data-tab="test">Test Water</button>
          <button class="nav-link ${currentTab === 'mytests' ? 'active' : ''}" data-tab="mytests">My Tests</button>
          <button class="nav-link ${currentTab === 'myrequests' ? 'active' : ''}" data-tab="myrequests">My Requests</button>
          <button class="nav-link ${currentTab === 'community' ? 'active' : ''}" data-tab="community">Community</button>
          <button class="nav-link ${currentTab === 'map' ? 'active' : ''}" data-tab="map">GIS Map</button>
          <button class="nav-link ${currentTab === 'alerts' ? 'active' : ''}" data-tab="alerts">Alerts</button>
          <button class="nav-link ${currentTab === 'profile' ? 'active' : ''}" data-tab="profile">Profile</button>
        </nav>
      </div>

      <div class="header-actions">
        <div class="status-pill ${isOfflineMode ? 'offline' : 'online'}" id="statusBadge">
          <span class="status-dot"></span>
          <span>${isOfflineMode ? 'Offline' : 'Online Sync'}</span>
        </div>
        <button class="status-toggle-btn" id="btnToggleOffline">
          ${isOfflineMode ? 'Go Online' : 'Simulate Offline'}
        </button>

        <div class="user-chip" id="btnHeaderProfile" title="${user.name}" style="cursor: pointer;">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
          <span>${user.name.split(' ')[0]}</span>
          <span style="color: var(--text-muted); font-weight: normal;">•</span>
          <span style="color: var(--primary); font-weight: 600;">${user.ward || 'Ward 5'}</span>
        </div>

        <button class="btn-header-logout" id="btnHeaderLogout" title="Sign out">
          Logout
        </button>
      </div>
    </header>

    <main class="view-container" id="mainContent">
      <!-- Dynamic Tab Content -->
    </main>

    <!-- Household Mobile Navigation Bar -->
    <nav class="bottom-nav">
      <button class="nav-item ${currentTab === 'home' ? 'active' : ''}" data-tab="home">
        <svg viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
        <span>Home</span>
      </button>
      <button class="nav-item ${currentTab === 'test' ? 'active' : ''}" data-tab="test">
        <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg>
        <span>Test Water</span>
      </button>
      <button class="nav-item ${currentTab === 'mytests' ? 'active' : ''}" data-tab="mytests">
        <svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line></svg>
        <span>My Tests</span>
      </button>
      <button class="nav-item ${currentTab === 'myrequests' ? 'active' : ''}" data-tab="myrequests">
        <svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline><path d="M4 12h16"></path></svg>
        <span>My Requests</span>
      </button>
      <button class="nav-item ${currentTab === 'community' ? 'active' : ''}" data-tab="community">
        <svg viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
        <span>Community</span>
      </button>
      <button class="nav-item ${currentTab === 'map' ? 'active' : ''}" data-tab="map">
        <svg viewBox="0 0 24 24"><polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"></polygon><line x1="8" y1="2" x2="8" y2="18"></line><line x1="16" y1="6" x2="16" y2="22"></line></svg>
        <span>GIS Map</span>
      </button>
      <button class="nav-item ${currentTab === 'alerts' ? 'active' : ''}" data-tab="alerts">
        <svg viewBox="0 0 24 24"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
        <span>Alerts</span>
      </button>
      <button class="nav-item ${currentTab === 'profile' ? 'active' : ''}" data-tab="profile">
        <svg viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
        <span>Profile</span>
      </button>
    </nav>

    <div id="modalHost"></div>
  `;

  bindHouseholdShellEvents();
  renderCurrentTab();
}

function bindHouseholdShellEvents() {
  document.getElementById('btnToggleOffline')?.addEventListener('click', toggleManualOffline);
  document.getElementById('btnHeaderHome')?.addEventListener('click', () => switchTab('home'));
  document.getElementById('btnHeaderProfile')?.addEventListener('click', () => switchTab('profile'));
  document.getElementById('btnHeaderLogout')?.addEventListener('click', () => {
    logoutUser();
    selectedRoleChoice = 'household';
    renderApp();
  });

  document.querySelectorAll('.bottom-nav .nav-item, .desktop-nav .nav-link').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const tab = e.currentTarget.getAttribute('data-tab');
      if (tab) switchTab(tab);
    });
  });
}

function switchTab(tab) {
  currentTab = tab;
  document.querySelectorAll('.bottom-nav .nav-item').forEach((item) => {
    item.classList.toggle('active', item.getAttribute('data-tab') === tab);
  });
  document.querySelectorAll('.desktop-nav .nav-link').forEach((link) => {
    link.classList.toggle('active', link.getAttribute('data-tab') === tab);
  });
  renderCurrentTab();
}


async function renderCurrentTab() {
  const user = getCurrentUser();
  if (!user) {
    renderApp();
    return;
  }
  if (user.role === 'field_tester') {
    renderFieldTesterView(user);
    return;
  }

  const container = document.getElementById('mainContent');
  if (!container) return;

  switch (currentTab) {
    case 'home':
      await renderHouseholdHome(container, user);
      break;
    case 'test':
      await renderHouseholdTest(container, user);
      break;
    case 'mytests':
      await renderHouseholdMyTests(container, user);
      break;
    case 'myrequests':
      await renderHouseholdMyRequests(container, user);
      break;
    case 'community':
      await renderCommunityView(container, user);
      break;
    case 'map':
      await renderMapView(container, user);
      break;
    case 'alerts':
      await renderAlertsView(container, user);
      break;
    case 'profile':
      await renderHouseholdProfile(container, user);
      break;
    default:
      await renderHouseholdHome(container, user);
  }
}

// ----------------------------------------------------
// HOUSEHOLD: HOME DASHBOARD
// ----------------------------------------------------
async function renderHouseholdHome(container, user) {
  const { ward } = await getWardAlerts(user.ward);

  // Real-time tests strictly isolated to the logged-in user
  let userTests = [];
  try {
    const q = user.id ? `user_id=${user.id}` : `username=${encodeURIComponent(user.username)}`;
    const tData = await safeFetchJson(`/api/tests?${q}`);
    if (tData && tData.tests) {
      userTests = tData.tests;
    }
  } catch (e) {}

  if (userTests.length === 0) {
    try {
      userTests = await dbGetWaterTestsByUser(user.username);
    } catch (e) {}
  }
  userTests.sort((a, b) => (b.timestamp || 0) - (a.timestamp || 0));
  const latestTest = userTests.length > 0 ? userTests[0] : null;

  // Real-time Field Tester request status strictly isolated to the logged-in user
  let latestRequest = null;
  try {
    if (user.id || user.username) {
      const q = user.id ? `user_id=${user.id}` : `username=${encodeURIComponent(user.username)}`;
      const res = await fetch(`/api/requests?role=household&${q}`);
      if (res.ok) {
        const data = await res.json();
        if (data.requests && data.requests.length > 0) latestRequest = data.requests[0];
      }
    }
  } catch (e) {}

  if (!latestRequest && user.username) {
    try {
      const localReqs = await dbGetFieldRequestsByUser(user.username);
      if (localReqs && localReqs.length > 0) {
        latestRequest = localReqs[localReqs.length - 1];
      }
    } catch (e) {}
  }

  // Dynamic community overview for user's ward
  const staticSummary = getWardCommunitySummary(user.ward || 'Ward 5');
  let communityData = {
    total_tests: staticSummary.totalReports || 18,
    participating_households: Math.max(1, Math.round((staticSummary.totalReports || 18) * 0.7)),
    tests_this_week: Math.round((staticSummary.totalReports || 18) * 0.5),
    preliminary_abnormal_reports: staticSummary.preliminaryPositiveReports || 0,
    field_verified_reports: staticSummary.fieldVerifiedReports || 0,
    pattern_detected: staticSummary.isContaminatedPattern || false,
    rainfall: ward.rainfall || 'Normal',
    flood_risk: ward.floodRisk || 'Low',
    rainfall_mm: ward.rainfallMm || 14
  };
  try {
    const cRes = await fetch(`/api/community/${encodeURIComponent(user.ward || 'Ward 5')}`);
    if (cRes.ok) {
      communityData = await cRes.json();
    }
  } catch (e) {}

  container.innerHTML = `
    <!-- Top Welcome Section -->
    <div class="welcome-section">
      <div class="welcome-text">
        <h1 class="welcome-title">${getGreeting()}, ${user.name}</h1>
        <p class="welcome-subtitle">Monitor your household water safety and stay informed about your community.</p>
      </div>
      <div class="location-badge">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
        <span>${user.ward || 'Ward 5'} | ${user.panchayat || 'Ernakulam Central'}</span>
      </div>
    </div>

    <!-- Main Central GIS Map (Primary Visual Centerpiece) -->
    <div class="gis-map-card">
      <div class="map-header">
        <div class="map-title-row">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" stroke-width="2"><polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"></polygon><line x1="8" y1="2" x2="8" y2="18"></line><line x1="16" y1="6" x2="16" y2="22"></line></svg>
          <h2>Community Water Safety & Hazard GIS</h2>
        </div>
        <div class="map-layer-toggles">
          <label class="layer-chip ${homeMapLayers.waterTests ? 'active' : ''}">
            <input type="checkbox" id="chkHomeLyrTests" ${homeMapLayers.waterTests ? 'checked' : ''} />
            <span class="legend-dot test"></span> Water Tests
          </label>
          <label class="layer-chip ${homeMapLayers.fieldVerified ? 'active' : ''}">
            <input type="checkbox" id="chkHomeLyrVerified" ${homeMapLayers.fieldVerified ? 'checked' : ''} />
            <span class="legend-dot verified"></span> Field Verified
          </label>
          <label class="layer-chip ${homeMapLayers.rainfall ? 'active' : ''}">
            <input type="checkbox" id="chkHomeLyrRainfall" ${homeMapLayers.rainfall ? 'checked' : ''} />
            <span class="legend-dot area"></span> Rainfall
          </label>
          <label class="layer-chip ${homeMapLayers.floodHazard ? 'active' : ''}">
            <input type="checkbox" id="chkHomeLyrHazard" ${homeMapLayers.floodHazard ? 'checked' : ''} />
            <span class="legend-dot hazard"></span> Flood / Hazard
          </label>
          <label class="layer-chip ${homeMapLayers.community ? 'active' : ''}">
            <input type="checkbox" id="chkHomeLyrCommunity" ${homeMapLayers.community ? 'checked' : ''} />
            <span class="legend-dot area" style="background-color: #64748b;"></span> Community
          </label>
        </div>
      </div>

      <div id="homeMapContainer" class="gis-map-frame"></div>

      <div class="map-legend-bar">
        <div class="legend-item"><span class="legend-dot area"></span> Registered Household</div>
        <div class="legend-item"><span class="legend-dot verified"></span> Field-Verified Test</div>
        <div class="legend-item"><span class="legend-dot hazard" style="background: #ef4444; border-radius: 50%;"></span> Preliminary Abnormal</div>
        <div class="legend-item"><span class="legend-dot hazard" style="background: #f59e0b;"></span> Hazard / Waterlogging Zone</div>
        <div class="legend-item"><span class="legend-dot area" style="background: #94a3b8;"></span> Ward Boundary</div>
      </div>
    </div>

    <!-- Below the Map: 3 Clean Information Sections -->
    <div class="dashboard-grid">
      <!-- 1. Water Safety -->
      <div class="info-card">
        <div class="info-card-header">
          <div class="info-card-title">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" stroke-width="2"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg>
            Water Safety
          </div>
          ${
            latestTest
              ? `<span class="badge ${isTestAbnormalOrPositive(latestTest.result) ? 'badge-danger' : 'badge-safe'}">${latestTest.result}</span>`
              : '<span class="badge badge-info">Not Screened</span>'
          }
        </div>
        <div class="info-card-body">
          ${
            latestTest
              ? `
            <div style="font-weight: 600; color: var(--text-main); margin-bottom: 2px;">
              ${latestTest.testType || latestTest.test_type || 'Water Quality Test'}
            </div>
            <div style="font-size: 0.8rem; color: var(--text-muted); margin-bottom: 12px;">
              Tested on ${latestTest.date || latestTest.date_time} • Source: ${latestTest.source || 'Household Tap'}
            </div>
            <div class="info-card-actions">
              <button class="btn btn-sm btn-primary" id="btnHomeTestWater">+ Test Water</button>
              <button class="btn btn-sm btn-secondary" id="btnGoToMyTests">View History →</button>
            </div>
          `
              : `
            <div style="color: var(--text-muted); margin-bottom: 12px; font-size: 0.86rem;">
              No water tests recorded yet. Screen your household water to detect safety risks early.
            </div>
            <button class="btn btn-sm btn-primary" id="btnHomeTestWater" style="width: 100%;">
              Test Water
            </button>
          `
          }
        </div>
      </div>

      <!-- 2. Field Testing -->
      <div class="info-card">
        <div class="info-card-header">
          <div class="info-card-title">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
            Field Testing
          </div>
          <span class="badge ${latestRequest ? (latestRequest.status === 'Accepted' ? 'badge-info' : latestRequest.status === 'Test Completed' || latestRequest.status === 'Verified' ? 'badge-safe' : 'badge-warn') : 'badge-info'}">
            ${latestRequest ? latestRequest.status : 'No Requests'}
          </span>
        </div>
        <div class="info-card-body">
          ${
            latestRequest
              ? `
            <div style="font-weight: 600; color: var(--text-main); margin-bottom: 2px;">
              ${latestRequest.field_tester_name || 'Field Tester'}
            </div>
            <div style="font-size: 0.8rem; color: var(--text-muted); margin-bottom: 12px;">
              Status: <strong>${latestRequest.status}</strong> • Date: ${latestRequest.requested_date} (${latestRequest.suggested_time || latestRequest.requested_time || 'Scheduled'})
            </div>
            <div class="info-card-actions">
              <button class="btn btn-sm btn-secondary" id="btnGoToMyRequests">View Details →</button>
              <button class="btn btn-sm btn-outline" id="btnFindFieldTester">Book Another</button>
            </div>
          `
              : `
            <div style="color: var(--text-muted); margin-bottom: 12px; font-size: 0.86rem;">
              No Field Tester requests yet. Request an authorized professional to inspect and test your water.
            </div>
            <button class="btn btn-sm btn-secondary" id="btnFindFieldTester" style="width: 100%;">
              Find a Field Tester
            </button>
          `
          }
        </div>
      </div>

      <!-- 3. Your Community -->
      <div class="info-card card-full-width">
        <div class="info-card-header">
          <div class="info-card-title">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle></svg>
            Your Community Overview
          </div>
          <button class="btn btn-sm btn-secondary" id="btnGoToCommunityView" style="padding: 4px 10px; font-size: 0.78rem;">
            Full Community Report →
          </button>
        </div>
        <div class="info-card-body">
          <div style="font-size: 0.82rem; color: var(--text-secondary); margin-bottom: 8px;">
            Community: <strong>${user.ward || 'Ward 5'}</strong> • Rainfall: <strong>${communityData.rainfall} (${communityData.rainfall_mm}mm)</strong> • Flooding Risk: <strong>${communityData.flood_risk}</strong>
          </div>
          <div class="community-stats-grid">
            <div class="comm-stat-cell">
              <div class="comm-stat-value">${communityData.participating_households}</div>
              <div class="comm-stat-label">Participating Households</div>
            </div>
            <div class="comm-stat-cell">
              <div class="comm-stat-value">${communityData.tests_this_week}</div>
              <div class="comm-stat-label">Tests This Week</div>
            </div>
            <div class="comm-stat-cell">
              <div class="comm-stat-value" style="color: ${communityData.preliminary_abnormal_reports > 0 ? 'var(--danger)' : 'var(--primary)'};">
                ${communityData.preliminary_abnormal_reports}
              </div>
              <div class="comm-stat-label">Preliminary Abnormal</div>
            </div>
            <div class="comm-stat-cell">
              <div class="comm-stat-value" style="color: var(--success);">${communityData.field_verified_reports}</div>
              <div class="comm-stat-label">Field-Verified</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  // Bind Actions
  document.getElementById('btnHomeTestWater')?.addEventListener('click', () => {
    testSubOption = 'optionA';
    selectedTesterForBooking = null;
    switchTab('test');
  });

  document.getElementById('btnFindFieldTester')?.addEventListener('click', () => {
    testSubOption = 'optionB';
    selectedTesterForBooking = null;
    switchTab('test');
  });

  document.getElementById('btnGoToMyTests')?.addEventListener('click', () => switchTab('mytests'));
  document.getElementById('btnGoToMyRequests')?.addEventListener('click', () => switchTab('myrequests'));
  document.getElementById('btnGoToCommunityView')?.addEventListener('click', () => switchTab('community'));

  // Bind Layer Toggles for Central Map
  const toggleInputs = [
    { id: 'chkHomeLyrTests', key: 'waterTests' },
    { id: 'chkHomeLyrVerified', key: 'fieldVerified' },
    { id: 'chkHomeLyrRainfall', key: 'rainfall' },
    { id: 'chkHomeLyrHazard', key: 'floodHazard' },
    { id: 'chkHomeLyrCommunity', key: 'community' }
  ];

  toggleInputs.forEach(({ id, key }) => {
    const el = document.getElementById(id);
    el?.addEventListener('change', (e) => {
      homeMapLayers[key] = e.target.checked;
      el.closest('.layer-chip')?.classList.toggle('active', e.target.checked);
      mountGisMap('homeMapContainer', user, homeMapLayers);
    });
  });

  // Mount central Leaflet GIS Map
  await mountGisMap('homeMapContainer', user, homeMapLayers);
}


// ----------------------------------------------------
// HOUSEHOLD: TEST WATER (OPTION A & OPTION B NEARBY)
// ----------------------------------------------------
async function renderHouseholdTest(container, user) {
  const today = new Date().toISOString().split('T')[0];
  const currentTime = new Date().toTimeString().split(' ')[0].substring(0, 5);

  container.innerHTML = `
    <!-- Stepper Lifecycle -->
    <div class="workflow-stepper">
      <div class="workflow-step ${testSubOption === 'optionA' ? 'active' : 'completed'}">
        <div class="workflow-dot">1</div>
        <span>Home Test</span>
      </div>
      <div class="workflow-line ${testSubOption === 'optionB' ? 'active' : ''}"></div>
      <div class="workflow-step ${testSubOption === 'optionB' ? 'active' : ''}">
        <div class="workflow-dot">2</div>
        <span>Book Field Tester</span>
      </div>
      <div class="workflow-line"></div>
      <div class="workflow-step">
        <div class="workflow-dot">3</div>
        <span>Inspection</span>
      </div>
    </div>

    <!-- Option Selector -->
    <div class="test-options-grid">
      <div class="option-select-card ${testSubOption === 'optionA' ? 'active' : ''}" id="btnSelectOptionA">
        <span class="option-badge">Option A</span>
        <h4 class="option-title">Individual / Home Test</h4>
        <p class="option-desc">Quick Home Screening with an approved test kit.</p>
      </div>

      <div class="option-select-card ${testSubOption === 'optionB' ? 'active' : ''}" id="btnSelectOptionB">
        <span class="option-badge" style="background: rgba(20, 184, 166, 0.2); color: var(--accent-teal);">Option B</span>
        <h4 class="option-title">Book Field Tester</h4>
        <p class="option-desc">Find nearby certified testers for professional verification.</p>
      </div>
    </div>

    <div id="testNoticeContainer"></div>

    ${
      testSubOption === 'optionA'
        ? renderOptionAForm(today, currentTime)
        : selectedTesterForBooking
        ? renderOptionBConfirmation(selectedTesterForBooking, user, today)
        : await renderOptionBNearbyTesters(user)
    }
  `;

  bindHouseholdTestEvents(user);
}

function renderOptionAForm(today, currentTime) {
  return `
    <div class="card">
      <div class="card-header">
        <h3 class="card-title">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent-cyan-light)" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg>
          Quick Home Screening (Preliminary)
        </h3>
        <span class="badge badge-warn">Preliminary Screening</span>
      </div>

      <form id="formIndividualTest">
        <div class="form-group">
          <label class="form-label" for="testType">Test Type</label>
          <select class="form-control" id="testType" required>
            <option value="H2S Strip Test">H2S Strip Test (Bacteriological Paper Strip)</option>
            <option value="Field Coliform Kit">Field Coliform Kit (Vial / Culture)</option>
            <option value="Chlorine Residual Test">Chlorine Residual Test (OT / DPD)</option>
            <option value="Turbidity / Visual Check">Turbidity / Visual Check</option>
          </select>
        </div>

        <div class="form-group">
          <label class="form-label">Screening Result</label>
          <div class="result-options">
            <label class="result-option">
              <input type="radio" name="testResult" value="Normal" />
              <div class="result-box res-neg">
                <span>Normal</span>
              </div>
            </label>

            <label class="result-option">
              <input type="radio" name="testResult" value="Abnormal / Possible Concern" required checked />
              <div class="result-box res-pos">
                <span>Abnormal / Possible Concern</span>
              </div>
            </label>

            <label class="result-option">
              <input type="radio" name="testResult" value="Inconclusive" />
              <div class="result-box res-inc">
                <span>Inconclusive</span>
              </div>
            </label>
          </div>
        </div>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
          <div class="form-group">
            <label class="form-label" for="testDate">Date</label>
            <input type="date" class="form-control" id="testDate" value="${today}" required />
          </div>

          <div class="form-group">
            <label class="form-label" for="testTime">Time</label>
            <input type="time" class="form-control" id="testTime" value="${currentTime}" required />
          </div>
        </div>

        <div class="form-group">
          <label class="form-label" for="testPhoto">Optional Photo (Record)</label>
          <input type="file" accept="image/*" class="form-control" id="testPhoto" />
        </div>

        <div class="form-group">
          <label class="form-label" for="testNotes">Notes</label>
          <textarea class="form-control" id="testNotes" rows="2" placeholder="e.g. Color change after 24h incubation"></textarea>
        </div>

        <button type="submit" class="btn btn-primary" id="btnSaveTestResult" style="margin-top: 6px;">
          Save Test Result
        </button>
      </form>
    </div>
  `;
}

// Nearby Field Testers List (Dynamic matching based on real registered testers in SQLite)
async function renderOptionBNearbyTesters(user) {
  let testers = [];
  try {
    const radiusQuery = searchRadius === 'all' ? 'all=true' : `radius=${searchRadius}`;
    const res = await fetch(`/api/testers/nearby?lat=${user.lat || 10.545}&lng=${user.lng || 76.205}&${radiusQuery}`);
    if (res.ok) {
      const data = await res.json();
      testers = data.testers || [];
    } else {
      throw new Error('API not ok');
    }
  } catch (e) {
    const uLat = user.lat || 10.545;
    const uLng = user.lng || 76.205;
    const defaultTesters = [
      { id: 1, name: 'Anil Kumar', lat: 10.5657, lng: 76.205, specialty: 'Water Quality & Coliform Analysis, Turbidity & pH Screening', test_types: 'Water Quality & Coliform Analysis, Turbidity & pH Screening', area: 'Ward 5 / Puzhakkal North', available: true, ward: 'Ward 5', tester_reg_no: 'FT-REG-1042' },
      { id: 2, name: 'Sreya P.', lat: 10.5081, lng: 76.205, specialty: 'Spectrophotometric Turbidity, Coliform Test Strip', test_types: 'Spectrophotometric Turbidity, Coliform Test Strip', area: 'Ward 2 / Riverside Sector', available: true, ward: 'Ward 2', tester_reg_no: 'FT-REG-2088' },
      { id: 3, name: 'Rahul K.', lat: 10.5972, lng: 76.205, specialty: 'Residual Chlorine & Microbial Assay, Chemical Contaminants', test_types: 'Residual Chlorine & Microbial Assay, Chemical Contaminants', area: 'Ward 4 / Hilltop Sector', available: true, ward: 'Ward 4', tester_reg_no: 'FT-REG-3190' }
    ];
    testers = defaultTesters.map(t => {
      const dLat = (t.lat - uLat) * Math.PI / 180;
      const dLon = (t.lng - uLng) * Math.PI / 180;
      const a = Math.sin(dLat / 2) ** 2 + Math.cos(uLat * Math.PI / 180) * Math.cos(t.lat * Math.PI / 180) * Math.sin(dLon / 2) ** 2;
      const d = Math.round(6371 * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a)) * 10) / 10;
      return { ...t, distance_km: d };
    });
    if (searchRadius !== 'all') {
      testers = testers.filter(t => t.distance_km <= Number(searchRadius));
    }
    testers.sort((a, b) => a.distance_km - b.distance_km);
  }

  return `
    <div class="card">
      <div class="card-header" style="flex-wrap: wrap; gap: 8px;">
        <h3 class="card-title">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent-teal)" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
          Nearby Certified Field Testers
        </h3>
        
        <!-- Search Radius Selector -->
        <div style="display: flex; gap: 4px; font-size: 0.76rem;">
          <button class="btn btn-sm ${searchRadius === 10 ? 'btn-primary' : 'btn-secondary'} btn-set-radius" data-radius="10" style="padding: 3px 8px; width: auto;">
            10 km
          </button>
          <button class="btn btn-sm ${searchRadius === 25 ? 'btn-primary' : 'btn-secondary'} btn-set-radius" data-radius="25" style="padding: 3px 8px; width: auto;">
            25 km
          </button>
          <button class="btn btn-sm ${searchRadius === 'all' ? 'btn-primary' : 'btn-secondary'} btn-set-radius" data-radius="all" style="padding: 3px 8px; width: auto;">
            All
          </button>
        </div>
      </div>

      <div style="font-size: 0.78rem; color: #94a3b8; margin-bottom: 12px; line-height: 1.4;">
        📍 Sorted by distance from your saved location in <strong>${user.ward || 'Ward 5'}</strong>. Testers' exact home coordinates are protected for privacy.
      </div>

      ${
        testers.length === 0
          ? `
        <div style="text-align: center; padding: 24px 14px; background: var(--bg-muted); border-radius: var(--radius-md); border: 1px dashed var(--border-color); margin: 8px 0;">
          <div style="font-size: 1.05rem; font-weight: 700; color: var(--warning); margin-bottom: 6px;">
            No nearby Field Testers available
          </div>
          <p style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 14px;">
            No registered testers found within ${searchRadius} km. You can expand your search radius to find testers serving adjoining wards.
          </p>
          <button class="btn btn-primary btn-set-radius" data-radius="25" style="width: auto; padding: 6px 16px; margin: 0 auto;">
            Search Wider Service Area (25 km)
          </button>
        </div>
      `
          : `
        <div class="testers-list">
          ${testers
            .map(
              (t) => `
            <div class="tester-item">
              <div style="flex: 1;">
                <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 2px;">
                  <strong style="color: var(--text-main); font-size: 0.98rem;">${t.name}</strong>
                  ${t.tester_reg_no ? `<span class="badge badge-info" style="font-size: 0.65rem; padding: 2px 6px;">${t.tester_reg_no}</span>` : ''}
                </div>
                
                <div class="tester-distance" style="font-size: 0.82rem; margin: 2px 0;">
                  <span style="color: var(--primary); font-weight: 600;">📍 ${t.distance_km} km away</span>
                  <span style="color: var(--text-muted);"> • </span>
                  <span style="color: var(--text-secondary);">${t.area || t.ward}</span>
                  <span style="color: var(--text-muted);"> • </span>
                  <span style="color: ${t.available ? 'var(--success)' : 'var(--danger)'}; font-weight: 600;">
                    ${t.available ? '● Available' : '● Busy'}
                  </span>
                </div>

                <div class="tester-spec" style="font-size: 0.78rem; color: var(--text-muted); margin-top: 4px;">
                  🧪 Tests: <span style="color: var(--text-main); font-weight: 500;">${t.test_types || t.specialty || 'Water Quality Testing'}</span>
                </div>
              </div>

              <div>
                <button class="btn btn-sm btn-primary btn-select-tester" 
                  data-id="${t.id}" data-name="${t.name}" data-distance="${t.distance_km}" data-ward="${t.ward}" data-area="${t.area || t.ward}"
                  style="width: auto; padding: 8px 14px; font-weight: 600;">
                  Request Tester
                </button>
              </div>
            </div>
          `
            )
            .join('')}
        </div>
      `
      }
    </div>
  `;
}

// Request Form for Selected Field Tester
function renderOptionBConfirmation(tester, user, today) {
  return `
    <div class="card">
      <div class="card-header">
        <h3 class="card-title">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
          Request Field Test
        </h3>
        <button class="btn btn-sm btn-secondary" id="btnBackToTesters" style="width: auto;">
          ← Back to Testers
        </button>
      </div>

      <div style="background: var(--bg-muted); border-radius: var(--radius-md); padding: 12px; margin-bottom: 14px; border: 1px solid var(--border-color); font-size: 0.86rem; line-height: 1.6; color: var(--text-main);">
        <div>Field Tester: <strong style="color: var(--text-main);">${tester.name}</strong> (${tester.distance_km} km away)</div>
        <div>Service Area: <strong>${tester.area || tester.ward}</strong></div>
        <div>Household Location: <strong>${user.name}'s saved location (${user.ward})</strong></div>
      </div>


      <form id="formSendFieldRequest">
        <div class="form-group">
          <label class="form-label" for="reqTestType">Test Type</label>
          <input type="text" class="form-control" id="reqTestType" value="Water Quality Test" required />
        </div>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
          <div class="form-group">
            <label class="form-label" for="reqDate">Preferred Date</label>
            <input type="date" class="form-control" id="reqDate" value="${today}" required />
          </div>

          <div class="form-group">
            <label class="form-label" for="reqTime">Preferred Time</label>
            <input type="text" class="form-control" id="reqTime" value="4:00 PM" required />
          </div>
        </div>

        <div class="form-group">
          <label class="form-label" for="reqNotes">Additional Notes</label>
          <textarea class="form-control" id="reqNotes" rows="2" placeholder="e.g. Well water following heavy rainfall. Possible abnormal home-test result."></textarea>
        </div>

        <button type="submit" class="btn btn-primary" id="btnSendRequest" style="margin-top: 6px;">
          Send Request
        </button>
      </form>
    </div>
  `;
}

function bindHouseholdTestEvents(user) {
  document.getElementById('btnSelectOptionA')?.addEventListener('click', () => {
    testSubOption = 'optionA';
    selectedTesterForBooking = null;
    renderCurrentTab();
  });

  document.getElementById('btnSelectOptionB')?.addEventListener('click', () => {
    testSubOption = 'optionB';
    renderCurrentTab();
  });

  // Radius Selector clicks
  document.querySelectorAll('.btn-set-radius').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const rad = e.currentTarget.getAttribute('data-radius');
      searchRadius = rad === 'all' ? 'all' : parseInt(rad, 10);
      renderCurrentTab();
    });
  });

  document.querySelectorAll('.btn-select-tester').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const id = e.currentTarget.getAttribute('data-id');
      const name = e.currentTarget.getAttribute('data-name');
      const distance_km = e.currentTarget.getAttribute('data-distance');
      const ward = e.currentTarget.getAttribute('data-ward');
      const area = e.currentTarget.getAttribute('data-area');
      selectedTesterForBooking = { id, name, distance_km, ward, area };
      renderCurrentTab();
    });
  });

  document.getElementById('btnBackToTesters')?.addEventListener('click', () => {
    selectedTesterForBooking = null;
    renderCurrentTab();
  });

  // Option A Submit
  const formA = document.getElementById('formIndividualTest');
  formA?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const testType = document.getElementById('testType').value;
    const result = document.querySelector('input[name="testResult"]:checked')?.value || 'Abnormal / Possible Concern';
    const date = document.getElementById('testDate').value;
    const time = document.getElementById('testTime').value;
    const notes = document.getElementById('testNotes').value;

    const testRecord = {
      user_id: user.id,
      username: user.username,
      ward: user.ward,
      panchayat: user.panchayat,
      test_type: testType,
      source: 'home',
      result,
      date,
      time,
      date_time: `${date} ${time}`,
      notes: notes.trim(),
      lat: user.lat || 10.545,
      lng: user.lng || 76.205,
      verification_status: isTestAbnormalOrPositive(result) ? 'Pending' : 'Not Required',
      lab_status: 'Not Required',
      timestamp: Date.now()
    };

    await safeFetchJson('/api/tests', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(testRecord)
    });
    await dbSaveWaterTest(testRecord);
    showToast('Water screening test recorded successfully!');

    if (result === 'Normal') {
      showAbnormalModal({
        isAbnormal: false,
        title: 'Screening Complete',
        message: 'No abnormal indication was recorded in this preliminary screening. Your drinking water parameters are within standard baseline.',
        onContinue: () => switchTab('home')
      });
    } else if (result === 'Inconclusive') {
      showAbnormalModal({
        isAbnormal: false,
        title: 'Screening Inconclusive',
        message: 'Test was inconclusive. Re-testing or scheduling professional field verification is recommended.',
        onContinue: () => switchTab('home')
      });
    } else {
      showAbnormalModal({
        isAbnormal: true,
        title: 'Possible Water-Quality Concern',
        message: 'Possible water-quality concern detected. Professional field verification by a certified tester is recommended.',
        onBook: () => {
          testSubOption = 'optionB';
          selectedTesterForBooking = null;
          renderCurrentTab();
        },
        onContinue: () => switchTab('home')
      });
    }
  });

  // Option B Submit (Creates Real Request in Database)
  const formB = document.getElementById('formSendFieldRequest');
  formB?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const testType = document.getElementById('reqTestType').value;
    const reqDate = document.getElementById('reqDate').value;
    const reqTime = document.getElementById('reqTime').value;
    const notes = document.getElementById('reqNotes').value;

    const payload = {
      user_id: user.id,
      household_user_id: user.id,
      username: user.username,
      household_name: user.name,
      phone: user.phone || '+91 98470 11111',
      address: `${user.name}'s Residence, ${user.ward}`,
      field_tester_id: selectedTesterForBooking.id,
      field_tester_name: selectedTesterForBooking.name,
      ward: user.ward,
      location_desc: `${user.name}'s saved location (${user.ward})`,
      lat: user.lat || 10.545,
      lng: user.lng || 76.205,
      test_type: testType,
      requested_date: reqDate,
      requested_time: reqTime,
      notes: notes.trim()
    };

    let createdReq = null;
    const data = await safeFetchJson('/api/requests', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    if (data && data.request) {
      createdReq = data.request;
    }

    if (!createdReq) {
      createdReq = {
        id: `REQ-${Math.floor(1000 + Math.random() * 9000)}`,
        ...payload,
        status: 'Pending Field Tester Response',
        created_at: new Date().toISOString()
      };
    }
    await dbSaveFieldRequest(createdReq);
    showToast(`Request sent to ${createdReq.field_tester_name}!`);

    const noticeDiv = document.getElementById('testNoticeContainer');
    if (noticeDiv) {
      noticeDiv.innerHTML = `
        <div class="notice-box notice-success" style="flex-direction: column; align-items: flex-start; margin-bottom: 20px;">
          <div style="font-weight: 700; font-size: 1.05rem; color: var(--status-safe-text); margin-bottom: 4px;">
            ✓ Request Sent to Field Tester
          </div>
          <div style="font-size: 0.9rem; line-height: 1.6; color: var(--text-main);">
            Your request has been dispatched to <strong>${createdReq.field_tester_name}</strong>.<br/>
            Request ID: <b>${createdReq.id}</b><br/>
            Status: <span class="badge badge-warn">Pending Field Tester Response</span>
          </div>
          <button class="btn btn-sm btn-primary" id="btnGoToRequestsNow" style="margin-top: 10px; width: auto;">
            View My Requests →
          </button>
        </div>
      `;
      document.getElementById('btnGoToRequestsNow')?.addEventListener('click', () => switchTab('myrequests'));
    }

    selectedTesterForBooking = null;
  });
}

function showAbnormalModal({ isAbnormal, title, message, onBook, onContinue }) {
  const host = document.getElementById('modalHost');
  if (!host) return;

  host.innerHTML = `
    <div class="prompt-modal-overlay">
      <div class="prompt-modal-card">
        <div class="prompt-modal-title" style="color: ${isAbnormal ? '#d97706' : '#059669'};">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            ${
              isAbnormal
                ? '<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>'
                : '<polyline points="20 6 9 17 4 12"/>'
            }
          </svg>
          <span>${title}</span>
        </div>
        <p class="prompt-modal-body">
          ${message}
        </p>
        <div style="display: flex; flex-direction: column; gap: 8px;">
          ${
            isAbnormal && onBook
              ? `<button class="btn btn-primary" id="btnModalBook">Book Nearby Field Tester →</button>`
              : ''
          }
          <button class="btn btn-secondary" id="btnModalViewTests">
            View in My Tests
          </button>
          <button class="btn btn-secondary" id="btnModalContinue">
            Return to Dashboard
          </button>
        </div>
      </div>
    </div>
  `;

  document.getElementById('btnModalBook')?.addEventListener('click', () => {
    host.innerHTML = '';
    if (onBook) onBook();
  });

  document.getElementById('btnModalViewTests')?.addEventListener('click', () => {
    host.innerHTML = '';
    switchTab('mytests');
  });

  document.getElementById('btnModalContinue')?.addEventListener('click', () => {
    host.innerHTML = '';
    if (onContinue) onContinue();
  });
}

// ----------------------------------------------------
// HOUSEHOLD: MY REQUESTS PAGE (LIVE TRACKING & TIME ACCEPTANCE)
// ----------------------------------------------------
async function renderHouseholdMyRequests(container, user) {
  let requests = [];
  try {
    const data = await safeFetchJson(`/api/requests?role=household&user_id=${user.id || 4}`);
    if (data && data.requests) {
      requests = data.requests;
    } else {
      requests = await dbGetFieldRequestsByUser(user.username);
    }
  } catch (e) {
    requests = await dbGetFieldRequestsByUser(user.username);
  }
  requests.sort((a, b) => new Date(b.created_at || 0) - new Date(a.created_at || 0));

  container.innerHTML = `
    <div class="card">
      <div class="card-header">
        <h2 class="card-title">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--accent-teal)" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
          My Requests
        </h2>
        <button class="btn btn-sm btn-primary" id="btnBookAnotherTesterReq" style="width: auto;">
          + Book Field Tester
        </button>
      </div>

      <div id="requestsListContainer">
        ${
          requests.length > 0
            ? requests.map((r) => renderHouseholdRequestCard(r)).join('')
            : '<div style="font-size: 0.85rem; color: var(--text-dim); padding: 14px;">No requests submitted yet.</div>'
        }
      </div>
    </div>
  `;

  document.getElementById('btnBookAnotherTesterReq')?.addEventListener('click', () => {
    testSubOption = 'optionB';
    selectedTesterForBooking = null;
    switchTab('test');
  });

  // Accept suggested new time
  document.querySelectorAll('.btn-accept-new-time').forEach((btn) => {
    btn.addEventListener('click', async (e) => {
      const id = e.currentTarget.getAttribute('data-id');
      try {
        await fetch(`/api/requests/${id}/accept_time`, { method: 'POST' });
      } catch (err) {}
      const r = await dbGetFieldRequestById(id);
      if (r) {
        r.status = 'Accepted';
        if (r.suggested_time) {
          r.requested_time = `${r.suggested_date || 'Updated'} ${r.suggested_time}`;
        }
        await dbUpdateFieldRequest(r);
      }
      showToast('Accepted new appointment time!');
      renderHouseholdMyRequests(container, user);
    });
  });
}

function renderHouseholdRequestCard(r) {
  const isTimeSuggested = r.status === 'Time Change Suggested';
  const isAccepted = r.status === 'Accepted' || r.status === 'Test In Progress';
  const isCompleted = r.status === 'Test Completed' || r.status === 'Verified';
  const isRejected = r.status === 'Rejected';

  return `
    <div class="my-test-card" style="border-color: ${
      isCompleted
        ? 'var(--primary-border)'
        : isAccepted
        ? 'var(--primary)'
        : isTimeSuggested
        ? 'var(--warning)'
        : isRejected
        ? 'var(--danger)'
        : 'var(--border-color)'
    };">
      <div class="my-test-top">
        <div>
          <strong style="color: var(--text-main); font-size: 1rem;">${r.id}</strong>
          <div style="font-size: 0.8rem; color: var(--text-muted); margin-top: 1px;">
            Field Tester: <strong style="color: var(--text-main);">${r.field_tester_name}</strong>
          </div>
        </div>
        <span class="badge ${
          isCompleted ? 'badge-safe' : isAccepted ? 'badge-info' : isTimeSuggested ? 'badge-warn' : isRejected ? 'badge-danger' : 'badge-warn'
        }">${r.status}</span>
      </div>

      <div style="font-size: 0.85rem; color: var(--text-secondary); line-height: 1.6;">
        <div>Test: <strong>${r.test_type}</strong></div>
        <div>Requested: <strong>${r.requested_time || '4:00 PM'}</strong></div>
        ${r.suggested_time ? `<div>Updated appointment: <strong>${r.suggested_time}</strong></div>` : ''}
      </div>

      <!-- Time Change Suggested Banner -->
      ${
        isTimeSuggested
          ? `
        <div class="time-change-banner" style="margin-top: 8px;">
          <div><strong>Field Tester suggested a new time:</strong></div>
          <div style="font-size: 0.84rem; margin: 4px 0;">
            Original: <b>${r.requested_time || '4:00 PM'}</b> | Suggested: <b>${r.suggested_time || '5:30 PM'}</b>
          </div>
          <div style="display: flex; gap: 8px; margin-top: 6px;">
            <button class="btn btn-sm btn-success btn-accept-new-time" data-id="${r.id}" style="width: auto;">
              Accept New Time
            </button>
            <button class="btn btn-sm btn-secondary" onclick="alert('Please select another tester from the Book tab.')" style="width: auto;">
              Request Another Time
            </button>
          </div>
        </div>
      `
          : ''
      }

      ${
        isAccepted
          ? `
        <div style="font-size: 0.82rem; color: var(--primary); margin-top: 4px; font-weight: 500;">
          ✓ Field Tester Accepted Your Request. Visit confirmed for ${r.suggested_time || r.requested_time}.
        </div>
      `
          : ''
      }

      ${
        isCompleted
          ? `
        <div style="font-size: 0.82rem; line-height: 1.6; color: var(--success); background: #f0fdf4; border: 1px solid #bbf7d0; padding: 8px 10px; border-radius: 6px; margin-top: 4px;">
          <div>Result: <strong style="color: ${r.field_result === 'Abnormal' ? 'var(--danger)' : 'var(--success)'};">${r.field_result || 'Abnormal'}</strong></div>
          <div>Verification: <strong>Completed</strong></div>
          ${
            r.lab_status === 'Recommended'
              ? '<div style="color: var(--primary); font-weight: 700;">Certified Lab Verification Recommended</div>'
              : ''
          }
        </div>
      `
          : ''
      }
    </div>
  `;
}

// ----------------------------------------------------
// HOUSEHOLD: MY TESTS PAGE
// ----------------------------------------------------
async function renderHouseholdMyTests(container, user) {
  let tests = [];
  try {
    const data = await safeFetchJson(`/api/tests?username=${encodeURIComponent(user.username)}`);
    if (data && data.tests) {
      tests = data.tests;
    } else {
      tests = await dbGetWaterTestsByUser(user.username);
    }
  } catch (e) {
    tests = await dbGetWaterTestsByUser(user.username);
  }
  tests.sort((a, b) => (b.timestamp || 0) - (a.timestamp || 0));

  container.innerHTML = `
    <div class="card">
      <div class="card-header">
        <h2 class="card-title">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path></svg>
          Water Quality Tests & History
        </h2>
        <button class="btn btn-sm btn-primary" id="btnAddNewTestMy" style="width: auto;">
          + New Test
        </button>
      </div>

      <div>
        ${
          tests.length > 0
            ? tests
                .map(
                  (t) => `
          <div class="my-test-card">
            <div class="my-test-top">
              <div>
                <strong style="color: var(--text-main);">${t.test_type || t.testType || 'Water Quality Test'}</strong>
                <div style="font-size: 0.78rem; color: var(--text-muted);">
                  Type: <b>${t.source === 'field' ? 'Field Verification' : 'Home Screening'}</b>
                  ${t.tester_name ? `• Tester: <b>${t.tester_name}</b>` : ''}
                </div>
              </div>
              <span class="badge ${
                isTestAbnormalOrPositive(t.result) ? 'badge-danger' : t.result === 'Normal' ? 'badge-safe' : 'badge-warn'
              }">${t.result}</span>
            </div>


            <div style="font-size: 0.8rem; color: var(--text-muted); margin-top: 4px;">
              Date: ${t.date_time || t.date}
            </div>

            <div class="status-chip-row">
              <span class="status-chip ${
                t.verification_status === 'Verified' ? 'field-verified' : 'field-pending'
              }">
                Status: <strong>${t.verification_status === 'Verified' ? 'Verified' : 'Field Verification Recommended'}</strong>
              </span>
              ${
                t.lab_status === 'Recommended'
                  ? '<span class="status-chip lab-rec">Certified Lab Verification Recommended</span>'
                  : ''
              }
            </div>
            ${t.notes ? `<div style="font-size: 0.78rem; color: var(--text-dim); margin-top: 3px;"><em>"${t.notes}"</em></div>` : ''}
          </div>
        `
                )
                .join('')
            : '<div style="font-size: 0.85rem; color: var(--text-dim); padding: 14px;">No water tests recorded yet.</div>'
        }
      </div>
    </div>
  `;

  document.getElementById('btnAddNewTestMy')?.addEventListener('click', () => switchTab('test'));
}

// ----------------------------------------------------
// COMMUNITY, MAP, ALERTS & PROFILE (DYNAMIC & CLEAN)
// ----------------------------------------------------
async function renderCommunityView(container, user) {
  let commData = {
    ward: user.ward || 'Ward 5',
    has_data: false,
    total_tests: 0,
    participating_households: 0,
    tests_this_week: 0,
    preliminary_abnormal_reports: 0,
    field_verified_reports: 0,
    pattern_detected: false,
    pattern_description: 'No abnormal water-quality pattern detected.',
    rainfall: 'Normal',
    rainfall_mm: 14,
    flood_risk: 'Low',
    response_status: 'Normal'
  };

  try {
    const res = await fetch(`/api/community/${encodeURIComponent(user.ward || 'Ward 5')}`);
    if (res.ok) {
      commData = await res.json();
    }
  } catch (e) {
    const summary = await getWardCommunitySummary(user.ward);
    commData.total_tests = summary.totalReports;
    commData.preliminary_abnormal_reports = summary.preliminaryPositiveReports;
    commData.field_verified_reports = summary.fieldVerifiedReports;
    commData.has_data = summary.totalReports > 0;
  }

  // Get anonymized feed for this ward (strictly no personal names, phone numbers, or exact addresses)
  let wardFeed = [];
  try {
    const allTests = await dbGetAllWaterTests();
    const wardTests = allTests.filter((t) => t.ward === user.ward);
    wardFeed = wardTests.slice(-6).reverse().map((t) => ({
      text: t.verification_status === 'Verified'
        ? `Field-verified report logged in ${t.ward} (${t.test_type || t.testType || 'Water Test'}).`
        : isTestAbnormalOrPositive(t.result)
        ? `Preliminary abnormal water screening logged in ${t.ward} (${t.test_type || t.testType || 'Home Test'}).`
        : `Preliminary normal water screening recorded in ${t.ward} (${t.test_type || t.testType || 'Home Test'}).`,
      date: t.date_time || t.date || 'Recent',
      isVerified: t.verification_status === 'Verified',
      isPositive: isTestAbnormalOrPositive(t.result)
    }));
  } catch (e) {}

  container.innerHTML = `
    <!-- Community Top Banner -->
    <div class="user-banner">
      <div>
        <h2 class="user-greeting">${user.ward} Community</h2>
        <div class="user-subtext">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
          <span>${user.ward} | ${user.panchayat || 'Local Panchayat'}</span>
        </div>
      </div>
      <div>
        <button class="btn btn-sm btn-primary" id="btnCommTestWater" style="width: auto;">
          Test Water
        </button>
      </div>
    </div>

    ${
      !commData.has_data || commData.total_tests === 0
        ? `
      <!-- Empty Community State -->
      <div class="card" style="text-align: center; padding: 26px 16px;">
        <div style="width: 52px; height: 52px; border-radius: 50%; background: var(--primary-light); display: flex; align-items: center; justify-content: center; margin: 0 auto 12px; color: var(--primary);">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle></svg>
        </div>
        <h3 style="font-size: 1.15rem; color: var(--text-main); margin-bottom: 6px; font-weight: 700;">No community test data available yet.</h3>
        <p style="font-size: 0.88rem; color: var(--text-muted); max-width: 440px; margin: 0 auto 16px; line-height: 1.5;">
          There are currently no registered test records for ${user.ward}. As households in this locality perform water screenings, community trends will update here automatically.
        </p>
        <button class="btn btn-primary" id="btnCommEmptyStartTest" style="width: auto; margin: 0 auto; padding: 8px 20px;">
          Log First Test for ${user.ward}
        </button>
      </div>

      <!-- Environmental Hazard Overview -->
      <div class="card">
        <div class="card-header">
          <h3 class="card-title">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" stroke-width="2"><path d="M20 16.2A4.5 4.5 0 0 0 17.5 8h-1.8A7 7 0 1 0 2 13h16a4.5 4.5 0 0 0 2-3.8z"></path></svg>
            Environmental Hazard Overview (${user.ward})
          </h3>
          <span class="badge ${commData.rainfall === 'Heavy' ? 'badge-danger' : 'badge-safe'}">${commData.rainfall}</span>
        </div>
        <div class="stat-grid">
          <div class="stat-item">
            <div class="stat-value" style="font-size: 1.25rem;">${commData.rainfall}</div>
            <div class="stat-label">Precipitation (${commData.rainfall_mm}mm)</div>
          </div>
          <div class="stat-item">
            <div class="stat-value" style="font-size: 1.25rem; color: ${commData.flood_risk === 'High' ? 'var(--danger)' : 'var(--success)'};">${commData.flood_risk}</div>
            <div class="stat-label">Flooding / Waterlogging</div>
          </div>
        </div>
      </div>
    `
        : `
      <!-- Ward-Level Response View Card -->
      <div class="ward-response-card ${commData.pattern_detected ? 'attention' : ''}">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
          <h2 style="font-size: 1.15rem; font-weight: 700; color: var(--text-main);">
            ${user.ward} Community Response View
          </h2>
          <span class="badge ${commData.response_status === 'Attention Required' ? 'badge-danger' : 'badge-safe'}">
            ${commData.response_status}
          </span>
        </div>

        <div class="response-row">
          <span class="response-label">Community Name:</span>
          <span class="response-val">${user.ward} (${user.panchayat || 'Local Panchayat'})</span>
        </div>

        <div class="response-row">
          <span class="response-label">Participating Households:</span>
          <span class="response-val" style="color: var(--primary); font-weight: 600;">${commData.participating_households}</span>
        </div>

        <div class="response-row">
          <span class="response-label">Water Tests This Week:</span>
          <span class="response-val">${commData.tests_this_week}</span>
        </div>

        <div class="response-row">
          <span class="response-label">Preliminary Abnormal Reports:</span>
          <span class="response-val" style="color: ${commData.preliminary_abnormal_reports > 0 ? 'var(--danger)' : 'var(--success)'};">
            ${commData.preliminary_abnormal_reports}
          </span>
        </div>

        <div class="response-row">
          <span class="response-label">Field-Verified Reports:</span>
          <span class="response-val" style="color: var(--primary); font-weight: 600;">
            ${commData.field_verified_reports}
          </span>
        </div>

        <div class="response-row">
          <span class="response-label">Possible Water-Quality Pattern:</span>
          <span class="response-val" style="color: ${commData.pattern_detected ? 'var(--danger)' : 'var(--success)'};">
            ${commData.pattern_detected ? 'Yes (Multiple abnormal reports)' : 'None detected'}
          </span>
        </div>

        <div class="response-row">
          <span class="response-label">Current Rainfall / Hazard:</span>
          <span class="response-val" style="color: ${commData.rainfall === 'Heavy' ? 'var(--primary)' : 'var(--text-secondary)'};">
            ${commData.rainfall} (${commData.rainfall_mm}mm) • Flood Risk: ${commData.flood_risk}
          </span>
        </div>
      </div>

      <!-- Situation Assessment -->
      <div class="card">
        <div class="card-header">
          <h3 class="card-title">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path></svg>
            Situation Assessment
          </h3>
          <span class="badge ${commData.pattern_detected ? 'badge-danger' : 'badge-safe'}">
            ${commData.pattern_detected ? 'Advisory Active' : 'Normal'}
          </span>
        </div>
        <p style="font-size: 0.92rem; line-height: 1.5; color: var(--text-main);">
          ${
            commData.pattern_detected
              ? `Possible water-quality pattern detected based on multiple abnormal reports in ${user.ward}. Local residents are advised to perform individual home screenings or request certified field verification.`
              : `Water-quality indicators in ${user.ward} remain within normal ranges. Continue periodic testing and report any observations.`
          }
        </p>
      </div>


      <!-- Privacy-Safe Area Feed -->
      ${
        wardFeed.length > 0
          ? `
        <div class="card">
          <div class="card-header">
            <h3 class="card-title">Recent Community Observations</h3>
            <span class="badge badge-safe">Privacy Protected</span>
          </div>
          <div class="feed-list">
            ${wardFeed
              .map(
                (f) => `
              <div class="feed-item">
                <div class="feed-dot" style="background: ${f.isVerified ? '#38bdf8' : f.isPositive ? '#f87171' : '#34d399'};"></div>
                <div class="feed-text">
                  <div>${f.text}</div>
                  <div class="feed-time">${f.date}</div>
                </div>
              </div>
            `
              )
              .join('')}
          </div>
        </div>
      `
          : ''
      }
    `
    }
  `;

  document.getElementById('btnCommTestWater')?.addEventListener('click', () => switchTab('test'));
  document.getElementById('btnCommEmptyStartTest')?.addEventListener('click', () => switchTab('test'));
}

// ====================================================
// 4. GIS MAP IMPLEMENTATION (LIGHT CARTODB POSITRON)
// ====================================================
async function mountGisMap(containerId, user, layerConfig) {
  if (activeMapInstance) {
    try {
      activeMapInstance.remove();
    } catch (e) {}
    activeMapInstance = null;
  }

  const mapElement = document.getElementById(containerId);
  if (!mapElement) return;

  const currentWard = WARDS.find((w) => w.id === user.ward) || WARDS[4];
  const centerLat = user.lat || currentWard.center[0];
  const centerLng = user.lng || currentWard.center[1];

  const map = L.map(containerId, {
    zoomControl: true,
    attributionControl: false
  }).setView([centerLat, centerLng], 14);

  activeMapInstance = map;

  // Clean Light Base Map: CartoDB Positron
  L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
    maxZoom: 19,
    subdomains: 'abcd',
    crossOrigin: true
  }).addTo(map);

  // 1. Community Boundaries
  const showCommunity = layerConfig.community ?? layerConfig.wards;
  if (showCommunity) {
    WARDS.forEach((ward) => {
      const isUserWard = ward.id === user.ward;
      const polygon = L.polygon(ward.polygon, {
        color: isUserWard ? '#0f766e' : '#94a3b8',
        weight: isUserWard ? 2.5 : 1.2,
        fillColor: isUserWard ? '#0f766e' : '#cbd5e1',
        fillOpacity: isUserWard ? 0.08 : 0.04
      }).addTo(map);

      polygon.bindPopup(`
        <div style="font-size: 0.85rem; line-height: 1.45; color: #0f172a;">
          <strong style="color: #0f766e;">Registered Community Boundary</strong><br/>
          Community: <b>${ward.name}</b><br/>
          Environmental Rainfall: <b>${ward.rainfall} (${ward.rainfallMm}mm)</b><br/>
          Flooding / Waterlogging: <b>${ward.floodRisk}</b>
        </div>
      `);
    });
  }

  // 2. Flood & Hazard Affected Zones
  const showHazard = layerConfig.floodHazard ?? layerConfig.hazard;
  if (showHazard) {
    FLOOD_HAZARD_ZONES.forEach((zone) => {
      const poly = L.polygon(zone.polygon, {
        color: '#d97706',
        weight: 1.5,
        fillColor: '#f59e0b',
        fillOpacity: 0.2
      }).addTo(map);

      poly.bindPopup(`
        <div style="font-size: 0.85rem; line-height: 1.45; color: #0f172a;">
          <strong style="color: #d97706;">Environmental Hazard Indicator</strong><br/>
          Flooding / Waterlogging Affected Zone<br/>
          <small style="color: #64748b;">Observed surface water accumulation area following rainfall.</small>
        </div>
      `);
    });
  }

  // 3. Rainfall Advisory
  const showRainfall = layerConfig.rainfall ?? (layerConfig.hazard && currentWard.rainfall === 'Heavy');
  if (showRainfall && currentWard.rainfall === 'Heavy') {
    const rainCircle = L.circle(currentWard.center, {
      radius: 650,
      color: '#0284c7',
      fillColor: '#0284c7',
      fillOpacity: 0.12,
      weight: 1.5,
      dashArray: '4, 4'
    }).addTo(map);

    rainCircle.bindPopup(`
      <div style="font-size: 0.85rem; line-height: 1.45; color: #0f172a;">
        <strong style="color: #0284c7;">Rainfall Advisory Zone</strong><br/>
        Observed Rainfall: <b>Heavy (${currentWard.rainfallMm}mm)</b><br/>
        <small style="color: #64748b;">High runoff conditions may increase microbial contamination risk in shallow wells.</small>
      </div>
    `);
  }

  // 4. Derived Water-Quality Pattern (clusters)
  const showClusters = layerConfig.clusters;
  if (showClusters && (user.ward === 'Ward 5' || currentWard.id === 'Ward 5')) {
    const circle = L.circle(currentWard.center, {
      radius: 460,
      color: '#ef4444',
      fillColor: '#ef4444',
      fillOpacity: 0.18,
      weight: 1.5,
      dashArray: '3, 3'
    }).addTo(map);

    circle.bindPopup(`
      <div style="font-size: 0.85rem; line-height: 1.45; color: #0f172a;">
        <strong style="color: #dc2626;">Spatial Pattern Indicator</strong><br/>
        Multiple abnormal reports detected in this locality.<br/>
        <small style="color: #64748b;">Preliminary indicator; field verification recommended.</small>
      </div>
    `);
  }

  // 5. Water Tests (Household & Community Tests)
  const showTests = layerConfig.waterTests ?? layerConfig.preliminary;
  if (showTests) {
    try {
      const allTests = await dbGetAllWaterTests();
      const wardTests = allTests.filter((t) => t.ward === user.ward);
      wardTests.forEach((t) => {
        const isAbnormal = isTestAbnormalOrPositive(t.result);
        const pLat = t.lat || (centerLat + (Math.random() - 0.5) * 0.006);
        const pLng = t.lng || (centerLng + (Math.random() - 0.5) * 0.006);
        const marker = L.circleMarker([pLat, pLng], {
          radius: 6,
          color: isAbnormal ? '#dc2626' : '#16a34a',
          fillColor: isAbnormal ? '#ef4444' : '#22c55e',
          fillOpacity: 0.85,
          weight: 1.5
        }).addTo(map);

        marker.bindPopup(`
          <div style="font-size: 0.85rem; line-height: 1.4; color: #0f172a;">
            <strong style="color: ${isAbnormal ? '#dc2626' : '#16a34a'};">Water-Test Screening</strong><br/>
            Test Type: <b>${t.test_type || t.testType || 'Home Screening'}</b><br/>
            Source: <b>${t.source || 'Household Tap'}</b><br/>
            Result: <b style="color: ${isAbnormal ? '#dc2626' : '#16a34a'};">${t.result}</b><br/>
            Date: ${t.date_time || t.date || 'Recent'}
          </div>
        `);
      });
    } catch (e) {}
  }

  // 6. Field-Verified Reports
  const showVerified = layerConfig.fieldVerified ?? layerConfig.verified;
  if (showVerified) {
    try {
      const allTests = await dbGetAllWaterTests();
      const verifiedTests = allTests.filter((t) => t.ward === user.ward && (t.verification_status === 'Verified' || (t.fieldVerification && t.fieldVerification.status === 'Verified')));
      verifiedTests.forEach((t) => {
        const vLat = t.lat || (centerLat + (Math.random() - 0.5) * 0.005);
        const vLng = t.lng || (centerLng + (Math.random() - 0.5) * 0.005);
        const marker = L.circleMarker([vLat, vLng], {
          radius: 7,
          color: '#0f766e',
          fillColor: '#14b8a6',
          fillOpacity: 0.95,
          weight: 2
        }).addTo(map);

        marker.bindPopup(`
          <div style="font-size: 0.85rem; line-height: 1.4; color: #0f172a;">
            <strong style="color: #0f766e;">Authorized Field Verification</strong><br/>
            Tester: <b>${t.tester_name || 'Certified Field Tester'}</b><br/>
            Result: <b>${t.result || 'Verified Safe'}</b><br/>
            Status: <b style="color: #0f766e;">Field Verified</b>
          </div>
        `);
      });
    } catch (e) {}
  }

  // 7. Registered Household Location Pin
  const showHousehold = layerConfig.household ?? true;
  if (showHousehold && user.role !== 'field_tester') {
    const householdIcon = L.divIcon({
      className: 'marker-household',
      html: `
        <div style="width: 32px; height: 32px; background: #0f766e; border: 2.5px solid #ffffff; border-radius: 50%; display: flex; align-items: center; justify-content: center; box-shadow: 0 2px 8px rgba(15, 118, 110, 0.4);">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="#ffffff"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>
        </div>
      `,
      iconSize: [32, 32],
      iconAnchor: [16, 16]
    });
    const hMarker = L.marker([centerLat, centerLng], { icon: householdIcon }).addTo(map);
    hMarker.bindPopup(`
      <div style="font-size: 0.85rem; line-height: 1.4; color: #0f172a;">
        <strong style="color: #0f766e;">Your Registered Household</strong><br/>
        User: <b>${user.name}</b><br/>
        Location: ${user.ward || 'Ward 5'} | ${user.panchayat || 'Ernakulam Central'}
      </div>
    `);
  }
}

// Dedicated GIS Map View
async function renderMapView(container, user) {
  container.innerHTML = `
    <div class="card" style="padding: 16px;">
      <div class="card-header" style="margin-bottom: 10px;">
        <h2 class="card-title">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" stroke-width="2"><polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"></polygon></svg>
          GIS Hazard & Water Safety Map
        </h2>
        <span class="badge ${isOfflineMode ? 'badge-warn' : 'badge-safe'}">
          ${isOfflineMode ? 'Cached Offline Map' : 'Live Spatial View'}
        </span>
      </div>

      <div id="mapContainer" class="gis-map-frame" style="height: 480px; margin-bottom: 12px;"></div>

      <div class="map-layer-controls">
        <label class="layer-toggle">
          <input type="checkbox" id="chkLyrHousehold" ${mapLayers.household ? 'checked' : ''} />
          <span>Registered Household</span>
        </label>
        <label class="layer-toggle">
          <input type="checkbox" id="chkLyrWards" ${mapLayers.wards ? 'checked' : ''} />
          <span>Community Boundaries</span>
        </label>
        <label class="layer-toggle">
          <input type="checkbox" id="chkLyrPrelim" ${mapLayers.preliminary ? 'checked' : ''} />
          <span>Water Tests (Preliminary)</span>
        </label>
        <label class="layer-toggle">
          <input type="checkbox" id="chkLyrVerified" ${mapLayers.verified ? 'checked' : ''} />
          <span>Field-Verified Reports</span>
        </label>
        <label class="layer-toggle">
          <input type="checkbox" id="chkLyrHazard" ${mapLayers.hazard ? 'checked' : ''} />
          <span>Rainfall & Flood Zones</span>
        </label>
        <label class="layer-toggle">
          <input type="checkbox" id="chkLyrClusters" ${mapLayers.clusters ? 'checked' : ''} />
          <span>Water-Quality Patterns</span>
        </label>
      </div>

      <div class="map-legend-bar" style="margin-top: 12px;">
        <div class="legend-item"><span class="legend-dot area"></span> Registered Household</div>
        <div class="legend-item"><span class="legend-dot verified"></span> Field-Verified Test</div>
        <div class="legend-item"><span class="legend-dot hazard" style="background: #ef4444; border-radius: 50%;"></span> Preliminary Abnormal</div>
        <div class="legend-item"><span class="legend-dot hazard" style="background: #f59e0b;"></span> Hazard / Waterlogging Zone</div>
        <div class="legend-item"><span class="legend-dot area" style="background: #94a3b8;"></span> Ward Boundary</div>
      </div>
    </div>
  `;

  bindMapLayerControls(user);
  await mountGisMap('mapContainer', user, mapLayers);
}

function bindMapLayerControls(user) {
  const mapInputs = [
    { id: 'chkLyrHousehold', key: 'household' },
    { id: 'chkLyrWards', key: 'wards' },
    { id: 'chkLyrPrelim', key: 'preliminary' },
    { id: 'chkLyrVerified', key: 'verified' },
    { id: 'chkLyrHazard', key: 'hazard' },
    { id: 'chkLyrClusters', key: 'clusters' }
  ];

  mapInputs.forEach(({ id, key }) => {
    document.getElementById(id)?.addEventListener('change', (e) => {
      mapLayers[key] = e.target.checked;
      mountGisMap('mapContainer', user, mapLayers);
    });
  });
}

async function initLeafletMap(user) {
  await mountGisMap('mapContainer', user, mapLayers);
}


// ----------------------------------------------------
// ALERTS & ALTERNATE SOLUTIONS
// ----------------------------------------------------
function getAppliedSolutions(username) {
  try {
    return JSON.parse(localStorage.getItem(`applied_solutions_${username || 'default'}`) || '[]');
  } catch (e) {
    return [];
  }
}

function toggleAppliedSolution(username, solId) {
  const list = getAppliedSolutions(username);
  const idx = list.indexOf(solId);
  if (idx > -1) {
    list.splice(idx, 1);
  } else {
    list.push(solId);
  }
  localStorage.setItem(`applied_solutions_${username || 'default'}`, JSON.stringify(list));
  return list.includes(solId);
}

function renderAlertCardWithSolutions(a, user) {
  const solutions = a.alternateSolutions || [];
  const appliedSolutions = getAppliedSolutions(user.username);

  return `
    <div class="alert-card ${a.type}" style="margin-bottom: 18px;">
      <div class="alert-heading">
        <span style="font-weight: 700; font-size: 0.98rem; display: flex; align-items: center; gap: 8px;">
          ${a.type === 'contamination' ? '⚠️' : a.type === 'rainfall' ? '🌧️' : a.type === 'mosquito' ? '🦟' : a.type === 'flood' ? '🌊' : '🛡️'}
          ${a.title}
        </span>
        <span class="badge ${a.severity === 'hazard' ? 'badge-danger' : 'badge-warn'}">${a.badge}</span>
      </div>

      <div class="alert-body" style="font-size: 0.88rem; line-height: 1.5; color: var(--text-main); margin-bottom: 8px;">
        ${a.message}
      </div>

      ${a.details ? `<div style="font-size: 0.8rem; color: var(--text-muted); margin-bottom: 10px;">ℹ️ ${a.details}</div>` : ''}

      ${
        solutions.length > 0
          ? `
        <div class="solutions-wrapper">
          <div class="solutions-header-row">
            <div class="solutions-title">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2a6 6 0 0 1 6 6c0 2.22-1.2 4.16-3 5.2V17a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-3.8C7.2 12.16 6 10.22 6 8a6 6 0 0 1 6-6z"></path><path d="M9 21h6"></path></svg>
              <span>Recommended Alternate Solutions (${solutions.length})</span>
            </div>
            <span class="solutions-toggle-badge">${solutions.length} Actions Available</span>
          </div>

          <div class="solutions-grid" id="sol-grid-${a.id || a.type}">
            ${solutions
              .map((s) => {
                const isApplied = appliedSolutions.includes(s.id);
                return `
                <div class="solution-card">
                  <div class="solution-top">
                    <div class="solution-heading">
                      <span class="solution-icon">${s.icon || '💧'}</span>
                      <span>${s.title}</span>
                    </div>
                    <span class="solution-tag">${s.tag || 'Recommended'}</span>
                  </div>

                  <div class="solution-meta-row">
                    ${s.timeRequired ? `<div class="solution-meta-item">⏱️ <span>${s.timeRequired}</span></div>` : ''}
                    ${s.cost ? `<div class="solution-meta-item">💰 <span>${s.cost}</span></div>` : ''}
                    ${s.bestFor ? `<div class="solution-meta-item">🎯 <span>${s.bestFor}</span></div>` : ''}
                  </div>

                  <ol class="solution-steps">
                    ${(s.steps || []).map((step) => `<li>${step}</li>`).join('')}
                  </ol>

                  ${
                    s.effectiveness
                      ? `
                    <div class="solution-effectiveness">
                      🛡️ <strong>Effectiveness:</strong> ${s.effectiveness}
                    </div>
                  `
                      : ''
                  }

                  <div class="solution-footer">
                    <button class="btn-solution-applied ${isApplied ? 'active-applied' : ''}" data-solid="${s.id}">
                      ${isApplied ? '✓ Applied by Household' : 'Mark as Applied'}
                    </button>

                    ${
                      s.action === 'book_tester'
                        ? `
                      <button class="btn-solution-action btn-sol-book-tester">
                        Book Nearby Field Tester →
                      </button>
                    `
                        : s.action === 'self_test'
                        ? `
                      <button class="btn-solution-action btn-sol-self-test">
                        Start Water Test →
                      </button>
                    `
                        : ''
                    }
                  </div>
                </div>
              `;
              })
              .join('')}
          </div>
        </div>
      `
          : ''
      }
    </div>
  `;
}

// Alerts Page
async function renderAlertsView(container, user) {
  const { alerts } = await getWardAlerts(user.ward);
  const totalSolutions = alerts.reduce((acc, a) => acc + (a.alternateSolutions?.length || 0), 0);

  container.innerHTML = `
    <div class="card">
      <div class="card-header" style="flex-wrap: wrap; gap: 8px;">
        <div>
          <h2 class="card-title">Active Hazards & Alternate Solutions</h2>
          <div style="font-size: 0.78rem; color: var(--text-muted); margin-top: 2px;">
            Targeted remediation, safe water alternatives, and preventive steps for ${user.ward}
          </div>
        </div>
        <span class="badge ${alerts.length > 0 ? 'badge-danger' : 'badge-safe'}">${alerts.length} Active Alerts</span>
      </div>

      <div style="background: var(--primary-light); border: 1px solid var(--primary-border); border-radius: var(--radius-md); padding: 10px 14px; margin-bottom: 16px; font-size: 0.82rem; color: var(--text-main); line-height: 1.5;">
        💡 <strong>Actionable Household Guidance:</strong> Each alert below includes tested alternate safe-water solutions, disinfection protocols, or municipal relief resources. You can mark which solutions you have applied to keep track of your family's safety.
      </div>


      ${
        alerts.length > 0
          ? alerts.map((a) => renderAlertCardWithSolutions(a, user)).join('')
          : '<div style="font-size: 0.9rem; color: var(--text-muted); padding: 10px 4px;">No active environmental hazard advisories for your area.</div>'
      }
    </div>
  `;

  bindAlternateSolutionsEvents(container, user);
}

function bindAlternateSolutionsEvents(container, user) {
  // Mark as Applied toggle
  container.querySelectorAll('.btn-solution-applied').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const solId = e.currentTarget.getAttribute('data-solid');
      const isNowApplied = toggleAppliedSolution(user.username, solId);
      if (isNowApplied) {
        e.currentTarget.classList.add('active-applied');
        e.currentTarget.textContent = '✓ Applied by Household';
        showToast('Solution marked as applied by your household!');
      } else {
        e.currentTarget.classList.remove('active-applied');
        e.currentTarget.textContent = 'Mark as Applied';
        showToast('Removed solution from applied list.');
      }
    });
  });

  // Direct Book Field Tester from solution
  container.querySelectorAll('.btn-sol-book-tester').forEach((btn) => {
    btn.addEventListener('click', () => {
      testSubOption = 'optionB';
      selectedTesterForBooking = null;
      switchTab('test');
    });
  });

  // Direct Start Self Test from solution
  container.querySelectorAll('.btn-sol-self-test').forEach((btn) => {
    btn.addEventListener('click', () => {
      testSubOption = 'optionA';
      selectedTesterForBooking = null;
      switchTab('test');
    });
  });
}

// Profile Page
async function renderHouseholdProfile(container, user) {
  container.innerHTML = `
    <div class="card">
      <div class="card-header">
        <h2 class="card-title">Household Profile</h2>
        <span class="badge badge-safe">Active Session</span>
      </div>
      <div style="font-size: 0.9rem; line-height: 1.8; color: var(--text-main);">
        <div><strong>Name:</strong> ${user.name}</div>
        <div><strong>Username:</strong> ${user.username}</div>
        <div><strong>Ward:</strong> ${user.ward}</div>
        <div><strong>Panchayat:</strong> ${user.panchayat}</div>
      </div>
      <div style="margin-top: 20px;">
        <button class="btn btn-danger" id="btnLogoutHouseholdBtn">
          Log Out of AquaGuard
        </button>
      </div>
    </div>
  `;

  document.getElementById('btnLogoutHouseholdBtn')?.addEventListener('click', () => {
    logoutUser();
    selectedRoleChoice = 'household';
    renderApp();
  });
}

function showToast(message) {
  const existing = document.getElementById('appToast');
  if (existing) existing.remove();

  const toast = document.createElement('div');
  toast.id = 'appToast';
  toast.style.cssText = `
    position: fixed;
    top: 72px;
    left: 50%;
    transform: translateX(-50%);
    background: #0f172a;
    border: 1px solid #334155;
    color: #ffffff;
    padding: 8px 18px;
    border-radius: 9999px;
    font-size: 0.82rem;
    font-weight: 500;
    box-shadow: 0 4px 16px rgba(0,0,0,0.18);
    z-index: 1000;
    display: flex;
    align-items: center;
    gap: 8px;
    animation: fadeIn 0.2s ease-out;
  `;
  toast.innerHTML = `
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#38bdf8" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
    <span>${message}</span>
  `;
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 3200);
}

