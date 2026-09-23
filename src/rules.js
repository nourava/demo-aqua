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
      id: 'alert-contamination',
      type: 'contamination',
      severity: 'hazard',
      badge: 'Pattern Detected',
      title: contamination.alertTitle,
      message: contamination.alertMessage,
      details: `${contamination.preliminaryPositiveCount} preliminary abnormal reports recorded (${contamination.fieldVerifiedCount} professionally verified) in ${ward.id}.`,
      alternateSolutions: [
        {
          id: 'sol-boil',
          title: 'Vigorous Rolling Boil Disinfection',
          tag: 'Emergency Gold Standard',
          icon: '🔥',
          timeRequired: '10–15 mins',
          cost: 'Household stove / Free',
          effectiveness: 'Kills 99.99% of bacterial coliforms, E. coli, enteric viruses, and microbial cysts.',
          bestFor: 'All immediate drinking water, cooking, and infant formula.',
          steps: [
            'Filter raw water through clean micro-mesh or folded cotton cloth to remove suspended particulate matter.',
            'Heat water to a continuous, vigorous rolling boil and maintain boiling for at least 1 to 3 minutes.',
            'Allow water to cool naturally in a sterilized, covered stainless steel or glass container with a dedicated tap/ladle.'
          ]
        },
        {
          id: 'sol-chlorine',
          title: 'Point-of-Use Chlorination / Halazone Treatment',
          tag: 'Large Storage & Overhead Tanks',
          icon: '💧',
          timeRequired: '30 mins contact time',
          cost: 'Minimal (Available at PHC / Panchayat)',
          effectiveness: 'Provides lasting residual antimicrobial protection against bacterial regrowth for up to 48 hours.',
          bestFor: 'Overhead storage tanks, 20L water cans, and well reservoirs.',
          steps: [
            'Add 1 standard chlorine / Halazone tablet (0.5g) or 4 drops of 0.5% sodium hypochlorite per 20 Litres of clear water.',
            'Stir thoroughly and let stand covered in shade for at least 30 minutes before first consumption.',
            'A faint chlorine scent confirms active residual disinfection against secondary bacterial contamination.'
          ]
        },
        {
          id: 'sol-kiosk',
          title: 'Ward 5 Community Safe Water Kiosk',
          tag: 'Free Municipal RO/UV Supply',
          icon: '🏢',
          timeRequired: 'Available 7:00 AM – 7:00 PM',
          cost: 'Free Public Service',
          effectiveness: 'Certified multi-stage reverse osmosis + ultraviolet sterilized municipal safe water.',
          bestFor: 'Households with persistent well discoloration, turbidity, or foul odor.',
          steps: [
            'Visit the Panchayat Clean Water Distribution Kiosk at Ward 5 Civic Centre (0.8 km).',
            'Bring clean food-grade containers for daily 25L household allocation.',
            'Water quality is verified twice daily with automated digital TDS and microbiological monitoring.'
          ]
        },
        {
          id: 'sol-tester',
          title: 'Request Certified Field Tester Verification',
          tag: 'Professional On-Site Test',
          icon: '🧪',
          timeRequired: 'Scheduled Visit',
          cost: 'Subsidized',
          action: 'book_tester',
          effectiveness: 'Official on-site photometer turbidity analysis and verified coliform strip assay for ward response.',
          bestFor: 'Residents requiring official verification to trigger municipal sanitization.',
          steps: [
            'Schedule a certified nearby Field Tester (e.g. Anil Kumar, 2.3 km away) to visit your residence.',
            'Tester performs on-site photometer turbidity & chemical screening with rapid microbial vial incubation.',
            'Verification results are officially submitted to ward health records and local response committees.'
          ]
        }
      ]
    });
  }

  // 2. Rainfall Alert
  if (ward.rainfall === 'Heavy') {
    alerts.push({
      id: 'alert-rainfall',
      type: 'rainfall',
      severity: 'warning',
      badge: 'Heavy Rainfall',
      title: 'Heavy Rainfall Alert',
      message: 'Heavy rainfall has been detected in your ward. Local water sources may be affected. Consider checking your drinking water.',
      details: `Observed precipitation: ${ward.rainfallMm}mm in the last 24 hours.`,
      alternateSolutions: [
        {
          id: 'sol-wellhead',
          title: 'Wellhead Elevation & Sandbag Bunding',
          tag: 'Surface Runoff Protection',
          icon: '🧱',
          timeRequired: '30 mins',
          cost: 'Low / Household effort',
          effectiveness: 'Blocks 95% of agricultural and stormwater surface runoff from draining into well shafts.',
          bestFor: 'Low-lying ring wells and wells near roadside storm drains.',
          steps: [
            'Stack a double-tier sandbag ring (min 0.5m height) tightly around the well parapet rim.',
            'Dig a 15cm shallow diversion trench around the apron to redirect stormwater away from wellhead.',
            'Ensure the well opening is covered with a watertight lid or waterproof tarpaulin.'
          ]
        },
        {
          id: 'sol-firstflush',
          title: 'Rainwater Harvesting First-Flush Diversion',
          tag: 'Roof Runoff Protection',
          icon: '🌧️',
          timeRequired: '10–15 mins',
          cost: 'Zero',
          effectiveness: 'Prevents atmospheric soot, bird droppings, and roof grit from fouling clean storage cisterns.',
          bestFor: 'Households utilizing rooftop rainwater harvesting.',
          steps: [
            'Open the first-flush bypass drain for the first 15–20 minutes of intense rainfall.',
            'Allow initial dirty wash to drain out before switching water flow to main storage tank.',
            'Engage secondary gravel-sand filter and add 1 potassium permanganate crystal for preventive biological inhibition.'
          ]
        },
        {
          id: 'sol-tanker',
          title: 'Emergency Potable Water Tanker Helpline',
          tag: 'Municipal Emergency Cell',
          icon: '🚛',
          timeRequired: 'Dispatched within 2–4 hours',
          cost: 'Free Municipal Assistance',
          effectiveness: 'Guaranteed safe drinking water delivered directly during storm events.',
          bestFor: 'Households whose domestic wells have turned murky or flooded.',
          steps: [
            'Contact the Puzhakkal Disaster Management Water Desk at toll-free 1800-425-9283.',
            'Provide your Ward (Ward 5) and landmark for urgent water bowser routing.',
            'Emergency bowsers will deliver 50L drinking water per family directly.'
          ]
        }
      ]
    });
  }

  // 3. Flood Risk Alert
  if (ward.floodRisk === 'High') {
    alerts.push({
      id: 'alert-flood',
      type: 'flood',
      severity: 'warning',
      badge: 'Flood Warning',
      title: 'Flood Risk Alert',
      message: 'Your location is within or near a potentially affected area. Follow local safety guidance and consider checking your drinking water.',
      details: `River and canal levels elevated in ${ward.name}.`,
      alternateSolutions: [
        {
          id: 'sol-shock',
          title: 'Well Shock Chlorination (Post-Inundation Protocol)',
          tag: 'Disinfection Protocol',
          icon: '🧴',
          timeRequired: 'Overnight (12 hours)',
          cost: '₹50 Bleaching powder',
          effectiveness: 'Sterilizes floodwater contaminants, coliform bacteria, and soil microbes in well shaft.',
          bestFor: 'Wells submerged or surrounded by floodwaters.',
          steps: [
            'Pump out murky standing water once external flood levels recede below the apron.',
            'Prepare a slurry of 50g fresh bleaching powder (33% active chlorine) per 1000 Litres of well volume.',
            'Pour slurry around the interior walls, agitate water vigorously, and let stand for 12 hours before pumping out.'
          ]
        },
        {
          id: 'sol-relief-water',
          title: 'PHC Emergency Potable Water Cans',
          tag: 'Immediate Relief',
          icon: '🚰',
          timeRequired: 'Instant pickup',
          cost: 'Free Relief Supply',
          effectiveness: 'Sealed food-grade potable drinking supply distributed by health volunteers.',
          bestFor: 'Residents whose household water sources are currently inundated.',
          steps: [
            'Visit the Ward Flood Relief Camp at Government UP School.',
            'Collect 10L sealed potable water cans and chlorine purification sachets.',
            'Report any gastrointestinal illness immediately to the on-site Medical Officer.'
          ]
        }
      ]
    });
  }

  // 4. Mosquito Risk Alert (Associated with Standing Water / Heavy Rainfall)
  if (ward.rainfall === 'Heavy' || ward.floodRisk === 'High') {
    alerts.push({
      id: 'alert-mosquito',
      type: 'mosquito',
      severity: 'warning',
      badge: 'Vector Risk',
      title: 'Stagnant Water & Mosquito Breeding Hazard',
      message: 'Recent rain and pooled surface water elevate mosquito breeding risks. Take preventative source reduction measures.',
      details: `Stagnant water pockets detected across low-lying zones in ${ward.name}.`,
      alternateSolutions: [
        {
          id: 'sol-dryday',
          title: 'Weekly "Dry Day" Source Elimination',
          tag: 'Community Source Reduction',
          icon: '🧹',
          timeRequired: '20 mins every Sunday',
          cost: 'Zero',
          effectiveness: 'Disrupts Aedes aegypti mosquito breeding cycle; prevents dengue and chikungunya outbreak.',
          bestFor: 'All household yards, terraces, and open storage compounds.',
          steps: [
            'Inspect outdoor flowerpot trays, air cooler bases, coconut shells, and tarpaulin folds.',
            'Empty standing water, scrub container inner walls to dislodge mosquito eggs, and invert containers.',
            'Ensure rooftop drains and sunshades flow freely without water pooling.'
          ]
        },
        {
          id: 'sol-mesh',
          title: 'Mosquito Mesh Screening on Wells & Vents',
          tag: 'Physical Barrier',
          icon: '🕸️',
          timeRequired: 'One-time setup',
          cost: 'Low (Nylon mesh ₹80)',
          effectiveness: 'Completely blocks adult mosquitoes from accessing dark humid well shafts for egg laying.',
          bestFor: 'Open domestic ring wells and overhead rainwater tank vent pipes.',
          steps: [
            'Cover the open mouth of domestic wells with durable 40-mesh nylon or stainless steel screening.',
            'Ensure screening is anchored snugly with weighted cord around the concrete parapet.',
            'Inspect and cover overflow pipes of overhead tanks with fine mesh.'
          ]
        },
        {
          id: 'sol-guppy',
          title: 'Biological Larvicide & Guppy Fish Deployment',
          tag: 'Biological Control',
          icon: '🐟',
          timeRequired: 'Single release',
          cost: 'Free from PHC',
          effectiveness: 'Larvivorous fish consume up to 100 mosquito larvae per day in standing water.',
          bestFor: 'Ornamental garden pools, farm ponds, and agricultural open wells.',
          steps: [
            'Collect Gambusia or Poecilia reticulata (Guppy) fingerlings from the Primary Health Centre.',
            'Introduce 5–10 fingerlings into unsealed water storage bodies or farm ponds.',
            'Avoid applying chemical bleach or pesticides in water bodies containing bio-control fish.'
          ]
        }
      ]
    });
  }

  // 5. Baseline Preventive Safety Advisory (Always available for household empowerment)
  if (alerts.length === 0) {
    alerts.push({
      id: 'alert-preventive',
      type: 'preventive',
      severity: 'info',
      badge: 'Preventive Safety',
      title: 'Standard Water Safety & Treatment Alternatives',
      message: 'Conditions in your ward are currently stable. Maintain baseline disinfection and monitoring protocols.',
      details: `Baseline surveillance active in ${ward.name}. No critical environmental hazards detected.`,
      alternateSolutions: [
        {
          id: 'sol-routine-boil',
          title: 'Routine Household Boiling',
          tag: 'Daily Best Practice',
          icon: '🔥',
          timeRequired: '10 mins',
          cost: 'Domestic stove',
          effectiveness: 'Provides complete baseline microbial safety against seasonal waterborne bacteria.',
          bestFor: 'Routine daily drinking and infant care.',
          steps: [
            'Bring daily drinking water to a full rolling boil for 1 minute.',
            'Store in clean, non-corrosive vessels with secure lids.',
            'Clean water storage jugs daily with hot water.'
          ]
        },
        {
          id: 'sol-gravity-filter',
          title: 'Ceramic Gravity Candle Filtration',
          tag: 'Point-of-Use Physical Filter',
          icon: '🏺',
          timeRequired: 'Continuous passive filtration',
          cost: 'One-time filter purchase',
          effectiveness: '0.2-micron ceramic micro-pores remove 99% of particulate sediment, protozoa, and cysts.',
          bestFor: 'Everyday household tap and well water clarity.',
          steps: [
            'Pour well or tap water into the upper chamber of a dual-chamber stainless steel gravity filter.',
            'Scrub ceramic filter candles weekly with a soft brush under clean running water (no soap).',
            'Pair with light chlorination or boiling for comprehensive bacterial barrier.'
          ]
        },
        {
          id: 'sol-periodic-test',
          title: 'Monthly Self Water Quality Screening',
          tag: 'Household Vigilance',
          icon: '🧪',
          timeRequired: '5 mins',
          cost: 'Free test strips',
          action: 'self_test',
          effectiveness: 'Detects sudden changes in pH, turbidity, or microbial contamination before health risks emerge.',
          bestFor: 'Monthly routine monitoring of domestic wells.',
          steps: [
            'Use the AquaGuard "Test Water" tool to log monthly baseline readings.',
            'Check clarity, odor, and color changes after seasonal rains.',
            'Request certified Field Tester if any anomaly is observed.'
          ]
        }
      ]
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

  return { summary: ruleSummary, source: 'Rule Engine (Spatial-Temporal Verification)' };
}
