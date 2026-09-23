// Pattern detection, GIS hazard evaluation, and ward-level response rules for AquaGuard

import { WARDS, BASELINE_WATER_TESTS } from './demoData.js';
import { dbGetAllWaterTests } from './db.js';

const CONTAMINATION_WINDOW_MS = 72 * 60 * 60 * 1000; // 72 hours
const PRELIMINARY_THRESHOLD = 3;

/**
 * Retrieves all tests (baseline demo tests + locally saved user tests)
 */
export async function getAllCombinedTests() {
  let userTests = [];
  try {
    userTests = await dbGetAllWaterTests();
  } catch (e) {
    console.warn('Error reading IndexedDB tests:', e);
  }
  return [...BASELINE_WATER_TESTS, ...userTests];
}

/**
 * Normalizes test result string ('Abnormal', 'Positive' -> isPositive = true)
 */
export function isTestAbnormalOrPositive(result) {
  if (!result) return false;
  const lower = String(result).toLowerCase();
  return lower.includes('abnormal') || lower.includes('positive');
}

/**
 * Evaluates contamination patterns distinguishing preliminary vs field-verified reports
 */
export async function analyzeWardContamination(wardId) {
  const allTests = await getAllCombinedTests();
  const now = Date.now();
  const wardTests = allTests.filter((t) => t.ward === wardId);

  // Preliminary positive/abnormal tests within the window
  const recentPreliminaryPositives = wardTests.filter((t) => {
    if (!isTestAbnormalOrPositive(t.result)) return false;
    const testTime = t.timestamp || (t.date ? new Date(t.date).getTime() : 0);
    return now - testTime <= CONTAMINATION_WINDOW_MS;
  });

  // Professionally verified positive tests
  const fieldVerifiedPositives = wardTests.filter((t) => {
    return t.fieldVerification && t.fieldVerification.status === 'Verified';
  });

  const isPatternDetected = recentPreliminaryPositives.length >= PRELIMINARY_THRESHOLD;

  return {
    isPatternDetected,
    preliminaryPositiveCount: recentPreliminaryPositives.length,
    fieldVerifiedCount: fieldVerifiedPositives.length,
    threshold: PRELIMINARY_THRESHOLD,
    windowHours: 72,
    alertTitle: 'Possible Water-Quality Pattern',
    alertMessage: 'Possible water-quality pattern detected based on multiple abnormal reports. Professional field verification is recommended.',
    recentPreliminaryPositives,
    fieldVerifiedPositives
  };
}

/**
 * Returns ward details
 */
export function getWardDetails(wardId) {
  const ward = WARDS.find((w) => w.id === wardId);
  return (
    ward || {
      id: wardId,
      name: wardId,
      panchayat: 'Puzhakkal Panchayat',
      rainfall: 'Normal',
      rainfallMm: 20,
      floodRisk: 'Low',
      responseStatus: 'Normal',
      center: [10.545, 76.205]
    }
  );
}

/**
 * Generates all active alerts for a user's ward
 */
export async function getWardAlerts(wardId) {
  const ward = getWardDetails(wardId);
  const contamination = await analyzeWardContamination(wardId);
  const alerts = [];

  // 1. Water-Quality Pattern Alert (Derived spatial pattern)
  if (contamination.isPatternDetected) {
    alerts.push({
      type: 'contamination',
      severity: 'hazard',
      badge: 'Pattern Detected',
      title: contamination.alertTitle,
      message: contamination.alertMessage,
      details: `${contamination.preliminaryPositiveCount} preliminary abnormal reports recorded (${contamination.fieldVerifiedCount} professionally verified) in ${ward.id}.`
    });
  }

  // 2. Rainfall Alert
  if (ward.rainfall === 'Heavy') {
    alerts.push({
      type: 'rainfall',
      severity: 'warning',
      badge: 'Heavy Rainfall',
      title: 'Heavy Rainfall Alert',
      message: 'Heavy rainfall has been detected in your ward. Local water sources may be affected. Consider checking your drinking water.',
      details: `Observed precipitation: ${ward.rainfallMm}mm in the last 24 hours.`
    });
  }

  // 3. Flood Risk Alert
  if (ward.floodRisk === 'High') {
    alerts.push({
      type: 'flood',
      severity: 'warning',
      badge: 'Flood Warning',
      title: 'Flood Risk Alert',
      message: 'Your location is within or near a potentially affected area. Follow local safety guidance and consider checking your drinking water.',
      details: `River and canal levels elevated in ${ward.name}.`
    });
  }

  return { ward, contamination, alerts };
}

/**
 * Aggregates ward summary for Community & Ward-Level Response views
 */
export async function getWardCommunitySummary(wardId) {
  const allTests = await getAllCombinedTests();
  const wardTests = allTests.filter((t) => t.ward === wardId);
  const ward = getWardDetails(wardId);
  const contamination = await analyzeWardContamination(wardId);

  const totalReports = wardTests.length;
  const preliminaryPositiveReports = wardTests.filter((t) => isTestAbnormalOrPositive(t.result)).length;
  const fieldVerifiedReports = wardTests.filter((t) => t.fieldVerification && t.fieldVerification.status === 'Verified').length;

  // Determine ward response status
  let responseStatus = 'Normal';
  if (contamination.isPatternDetected) {
    responseStatus = 'Attention Required';
  } else if (ward.rainfall === 'Heavy' || ward.floodRisk === 'High') {
    responseStatus = 'Monitoring Active';
  }

  // Anonymized community feed (strictly no personal names, phone numbers, or exact addresses)
  const anonymizedFeed = wardTests
    .sort((a, b) => (b.timestamp || 0) - (a.timestamp || 0))
    .slice(0, 8)
    .map((t) => {
      const isPos = isTestAbnormalOrPositive(t.result);
      const isVerified = t.fieldVerification && t.fieldVerification.status === 'Verified';

      let text = '';
      if (isVerified) {
        text = `Field-verified report logged in ${t.ward} (${t.testType}) - Ref ${t.fieldVerification.referenceCode || 'Verified'}.`;
      } else if (isPos) {
        text = `Preliminary abnormal water screening logged in ${t.ward} (${t.testType}).`;
      } else {
        text = `Preliminary normal water screening recorded in ${t.ward} (${t.testType}).`;
      }

      return {
        id: t.id,
        text,
        isPositive: isPos,
        isVerified,
        result: t.result,
        date: t.date,
        time: t.time
      };
    });

  return {
    wardId,
    wardName: ward.name,
    panchayat: ward.panchayat,
    totalReports,
    preliminaryPositiveReports,
    fieldVerifiedReports,
    rainfallDetected: ward.rainfall === 'Heavy' ? 'Heavy rainfall detected' : `${ward.rainfall} rainfall`,
    rainfallMm: ward.rainfallMm,
    floodRisk: ward.floodRisk,
    contaminationPattern: contamination.isPatternDetected ? 'Detected' : 'None detected',
    isContaminatedPattern: contamination.isPatternDetected,
    responseStatus,
    feed: anonymizedFeed
  };
}

/**
 * Natural language situation explanation (Offline rule-based + optional local Ollama)
 */
export async function generateSituationSummary(wardId) {
  const summary = await getWardCommunitySummary(wardId);
  const ward = getWardDetails(wardId);

  let ruleSummary = '';
  if (summary.isContaminatedPattern && ward.rainfall === 'Heavy') {
    ruleSummary = `${ward.id} has experienced heavy rainfall and ${summary.preliminaryPositiveReports} preliminary abnormal water-test reports. ${summary.fieldVerifiedReports} reports have been professionally verified. Further authorized water-quality assessment is recommended.`;
  } else if (summary.isContaminatedPattern) {
    ruleSummary = `${ward.id} has recorded ${summary.preliminaryPositiveReports} preliminary abnormal water-test reports (${summary.fieldVerifiedReports} field-verified). Authorized community re-testing is recommended.`;
  } else if (ward.rainfall === 'Heavy') {
    ruleSummary = `${ward.id} has experienced heavy rainfall (${ward.rainfallMm}mm). Surface runoff may impact local wells; environmental monitoring is active.`;
  } else {
    ruleSummary = `Conditions in ${ward.id} are currently stable with normal baseline water-test readings.`;
  }

  // Attempt optional local Ollama (timeout 1.2s to prevent delay)
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 1200);

    const res = await fetch('http://localhost:11434/api/generate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: 'llama3:latest',
        prompt: `Provide a calm, 2-sentence public advisory for ${ward.id}: Rainfall=${ward.rainfall}, Preliminary Positives=${summary.preliminaryPositiveReports}, Field Verified=${summary.fieldVerifiedReports}. Mention further authorized assessment if abnormal.`,
        stream: false
      }),
      signal: controller.signal
    });
    clearTimeout(timeoutId);

    if (res.ok) {
      const data = await res.json();
      if (data && data.response) {
        return { summary: data.response.trim(), source: 'Ollama AI (Local)' };
      }
    }
  } catch (e) {
    // Offline / Ollama not running fallback
  }

  return { summary: ruleSummary, source: 'Rule Engine (Offline)' };
}
