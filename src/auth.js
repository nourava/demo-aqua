// Authentication module for AquaGuard (Household and Field Tester Roles)
import { dbGetUser, dbSaveUser } from './db.js';

const SESSION_KEY = 'aquaguard_active_session';

// Strict requirement: Never auto-login from old persistent localStorage
if (typeof localStorage !== 'undefined') {
  localStorage.removeItem('aquaguard_active_user');
}

export function getCurrentUser() {
  try {
    const raw = sessionStorage.getItem(SESSION_KEY);
    if (!raw) return null;
    return JSON.parse(raw);
  } catch (e) {
    return null;
  }
}

export async function loginUser(username, pin) {
  if (!username || !pin) {
    throw new Error('Please enter both username and password/PIN.');
  }

  const cleanUsername = username.trim().toLowerCase();

  // 1. Try Flask + SQLite API if online
  if (navigator.onLine) {
    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: cleanUsername, pin: String(pin).trim() })
      });
      const data = await res.json();
      if (res.ok && data.user) {
        sessionStorage.setItem(SESSION_KEY, JSON.stringify(data.user));
        await dbSaveUser(data.user);
        return data.user;
      } else if (res.status === 401 || res.status === 404) {
        throw new Error(data.error || 'Authentication failed.');
      }
    } catch (err) {
      if (err.message && (err.message.includes('PIN') || err.message.includes('password') || err.message.includes('not found') || err.message.includes('Authentication'))) {
        throw err;
      }
      console.warn('Network auth failed, falling back to local storage:', err);
    }
  }

  // 2. Offline fallback using IndexedDB & predefined demo accounts
  const demoUsers = {
    'tester1': { id: 1, name: 'Anil Kumar', username: 'tester1', pin: 'tester123', role: 'field_tester', ward: 'Ward 5', panchayat: 'Puzhakkal Panchayat', lat: 10.5657, lng: 76.205, specialty: 'Water Quality & Coliform Analysis, Turbidity & pH Screening' },
    'anil_tester': { id: 1, name: 'Anil Kumar', username: 'anil_tester', pin: '1234', role: 'field_tester', ward: 'Ward 5', panchayat: 'Puzhakkal Panchayat', lat: 10.5657, lng: 76.205, specialty: 'Water Quality & Coliform Analysis, Turbidity & pH Screening' },
    'sreya_tester': { id: 2, name: 'Sreya P.', username: 'sreya_tester', pin: '1234', role: 'field_tester', ward: 'Ward 2', panchayat: 'Puzhakkal Panchayat', lat: 10.5081, lng: 76.205, specialty: 'Spectrophotometric Turbidity, Coliform Test Strip' },
    'rahul_tester': { id: 3, name: 'Rahul K.', username: 'rahul_tester', pin: '1234', role: 'field_tester', ward: 'Ward 4', panchayat: 'Puzhakkal Panchayat', lat: 10.5972, lng: 76.205, specialty: 'Residual Chlorine & Microbial Assay, Chemical Contaminants' },
    'noura123': { id: 4, name: 'Noura', username: 'noura123', pin: '1234', role: 'household', ward: 'Ward 5', panchayat: 'Puzhakkal Panchayat', lat: 10.545, lng: 76.205 }
  };

  if (demoUsers[cleanUsername]) {
    if (demoUsers[cleanUsername].pin === String(pin).trim()) {
      sessionStorage.setItem(SESSION_KEY, JSON.stringify(demoUsers[cleanUsername]));
      await dbSaveUser(demoUsers[cleanUsername]);
      return demoUsers[cleanUsername];
    }
    throw new Error('Incorrect password/PIN. Please try again.');
  }

  const localUser = await dbGetUser(cleanUsername);
  if (!localUser) {
    throw new Error('Account not found locally. Please register or check credentials.');
  }

  if (String(localUser.pin).trim() !== String(pin).trim()) {
    throw new Error('Incorrect password/PIN. Please try again.');
  }

  sessionStorage.setItem(SESSION_KEY, JSON.stringify(localUser));
  return localUser;
}

export async function registerUser({ name, username, pin, ward, panchayat, lat, lng }) {
  if (!name || !name.trim()) throw new Error('Please enter your full name.');
  if (!username || !username.trim()) throw new Error('Please enter a username.');
  if (!pin || !pin.trim()) throw new Error('Please set a PIN or password.');
  if (!ward) throw new Error('Please select your ward.');

  const cleanUsername = username.trim().toLowerCase();

  // Try API first
  if (navigator.onLine) {
    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: name.trim(),
          username: cleanUsername,
          pin: String(pin).trim(),
          role: 'household',
          ward: ward.trim(),
          panchayat: panchayat ? panchayat.trim() : 'Puzhakkal Panchayat',
          lat: lat || 10.545,
          lng: lng || 76.205
        })
      });
      const data = await res.json();
      if (res.ok && data.user) {
        sessionStorage.setItem(SESSION_KEY, JSON.stringify(data.user));
        await dbSaveUser(data.user);
        return data.user;
      } else if (res.status === 409) {
        throw new Error(data.error);
      }
    } catch (err) {
      if (err.message && err.message.includes('already taken')) throw err;
      console.warn('Network registration failed, saving locally:', err);
    }
  }

  // Local fallback
  const newUser = {
    id: Date.now(),
    username: cleanUsername,
    name: name.trim(),
    pin: pin.trim(),
    role: 'household',
    ward: ward.trim(),
    panchayat: panchayat ? panchayat.trim() : 'Puzhakkal Panchayat',
    lat: lat || 10.545,
    lng: lng || 76.205,
    createdAt: new Date().toISOString()
  };

  await dbSaveUser(newUser);
  sessionStorage.setItem(SESSION_KEY, JSON.stringify(newUser));
  return newUser;
}

export async function registerFieldTester({ name, phone, username, pin, tester_reg_no, test_types, ward, panchayat, area, lat, lng }) {
  if (!name || !name.trim()) throw new Error('Please enter your full name.');
  if (!username || !username.trim()) throw new Error('Please enter a username.');
  if (!pin || !pin.trim()) throw new Error('Please set a PIN or password.');

  const cleanUsername = username.trim().toLowerCase();

  // Try API first
  if (navigator.onLine) {
    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: name.trim(),
          phone: phone ? phone.trim() : '+91 98471 00000',
          username: cleanUsername,
          pin: String(pin).trim(),
          tester_reg_no: tester_reg_no ? tester_reg_no.trim() : `FT-REG-${Math.floor(1000 + Math.random() * 9000)}`,
          test_types: test_types || 'Water Quality & Coliform Analysis',
          role: 'field_tester',
          ward: ward ? ward.trim() : 'Ward 5',
          panchayat: panchayat ? panchayat.trim() : 'Puzhakkal Panchayat',
          area: area ? area.trim() : 'Ward 5 Community Area',
          lat: lat || 10.548,
          lng: lng || 76.202
        })
      });
      const data = await res.json();
      if (res.ok && data.user) {
        // DO NOT AUTO LOGIN: save user record in local db for offline support, but DO NOT set active session
        await dbSaveUser(data.user);
        return {
          success: true,
          message: data.message || 'Account created successfully. Please log in.',
          user: data.user
        };
      } else if (res.status === 409) {
        throw new Error(data.error);
      }
    } catch (err) {
      if (err.message && err.message.includes('already taken')) throw err;
      console.warn('Network registration failed, saving locally:', err);
    }
  }

  // Local fallback
  const newTester = {
    id: Date.now(),
    username: cleanUsername,
    name: name.trim(),
    phone: phone ? phone.trim() : '+91 98471 00000',
    pin: pin.trim(),
    tester_reg_no: tester_reg_no ? tester_reg_no.trim() : `FT-REG-${Math.floor(1000 + Math.random() * 9000)}`,
    test_types: test_types || 'Water Quality & Coliform Analysis',
    role: 'field_tester',
    ward: ward ? ward.trim() : 'Ward 5',
    panchayat: panchayat ? panchayat.trim() : 'Puzhakkal Panchayat',
    area: area ? area.trim() : 'Ward 5 Community Area',
    specialty: test_types || 'Water Quality & Coliform Analysis',
    available: 1,
    lat: lat || 10.548,
    lng: lng || 76.202,
    createdAt: new Date().toISOString()
  };

  await dbSaveUser(newTester);
  // Do NOT auto login: redirect to login screen
  return {
    success: true,
    message: 'Account created successfully. Please log in.',
    user: newTester
  };
}

export async function updateFieldTesterProfile(testerId, profileData) {
  const current = getCurrentUser();
  if (navigator.onLine) {
    try {
      const res = await fetch(`/api/testers/${testerId || current.id}/profile`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(profileData)
      });
      const data = await res.json();
      if (res.ok && data.profile) {
        const updated = { ...current, ...data.profile };
        sessionStorage.setItem(SESSION_KEY, JSON.stringify(updated));
        await dbSaveUser(updated);
        return updated;
      }
    } catch (e) {
      console.warn('Network profile update failed:', e);
    }
  }

  const updated = { ...current, ...profileData };
  sessionStorage.setItem(SESSION_KEY, JSON.stringify(updated));
  await dbSaveUser(updated);
  return updated;
}

export async function updateProfile({ name, ward, panchayat }) {
  const current = getCurrentUser();
  if (!current) throw new Error('No user currently logged in.');

  const updated = {
    ...current,
    name: name ? name.trim() : current.name,
    ward: ward ? ward.trim() : current.ward,
    panchayat: panchayat ? panchayat.trim() : current.panchayat
  };

  await dbSaveUser(updated);
  sessionStorage.setItem(SESSION_KEY, JSON.stringify(updated));
  return updated;
}

export function logoutUser() {
  sessionStorage.removeItem(SESSION_KEY);
  if (typeof localStorage !== 'undefined') {
    localStorage.removeItem('aquaguard_active_user');
  }
}


