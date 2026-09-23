// Realistic Demo Data for AquaGuard Household Water Safety & Community Alert System
// Puzhakkal Panchayat (Wards 1 through 7)

export const DEFAULT_PANCHAYAT = 'Puzhakkal Panchayat';

export const WARDS = [
  {
    id: 'Ward 1',
    name: 'Ward 1 - Viyyoor North',
    panchayat: DEFAULT_PANCHAYAT,
    center: [10.5512, 76.2155],
    rainfall: 'Normal', // 'Normal' | 'Moderate' | 'Heavy'
    rainfallMm: 14,
    floodRisk: 'Low', // 'Low' | 'Moderate' | 'High'
    mosquitoRisk: 'Low', // 'Low' | 'Medium' | 'High'
    responseStatus: 'Normal', // 'Attention Required' | 'Monitoring Active' | 'Normal'
    polygon: [
      [10.558, 76.208],
      [10.559, 76.222],
      [10.546, 76.223],
      [10.544, 76.210],
      [10.558, 76.208]
    ]
  },
  {
    id: 'Ward 2',
    name: 'Ward 2 - Puzhakkal Riverbanks',
    panchayat: DEFAULT_PANCHAYAT,
    center: [10.542, 76.195],
    rainfall: 'Heavy',
    rainfallMm: 98,
    floodRisk: 'High',
    mosquitoRisk: 'High',
    responseStatus: 'Monitoring Active',
    polygon: [
      [10.550, 76.185],
      [10.552, 76.205],
      [10.536, 76.208],
      [10.533, 76.188],
      [10.550, 76.185]
    ]
  },
  {
    id: 'Ward 3',
    name: 'Ward 3 - Amala Hills',
    panchayat: DEFAULT_PANCHAYAT,
    center: [10.562, 76.178],
    rainfall: 'Moderate',
    rainfallMm: 42,
    floodRisk: 'Low',
    mosquitoRisk: 'Medium',
    responseStatus: 'Normal',
    polygon: [
      [10.570, 76.168],
      [10.572, 76.188],
      [10.555, 76.190],
      [10.552, 76.170],
      [10.570, 76.168]
    ]
  },
  {
    id: 'Ward 4',
    name: 'Ward 4 - Sobha City Environs',
    panchayat: DEFAULT_PANCHAYAT,
    center: [10.535, 76.218],
    rainfall: 'Moderate',
    rainfallMm: 38,
    floodRisk: 'Moderate',
    mosquitoRisk: 'Medium',
    responseStatus: 'Normal',
    polygon: [
      [10.544, 76.210],
      [10.545, 76.228],
      [10.526, 76.227],
      [10.525, 76.211],
      [10.544, 76.210]
    ]
  },
  {
    id: 'Ward 5',
    name: 'Ward 5 - Central Market & Canal',
    panchayat: DEFAULT_PANCHAYAT,
    center: [10.545, 76.205],
    rainfall: 'Heavy',
    rainfallMm: 112,
    floodRisk: 'High',
    mosquitoRisk: 'High',
    responseStatus: 'Attention Required',
    polygon: [
      [10.552, 76.198],
      [10.554, 76.212],
      [10.538, 76.214],
      [10.536, 76.200],
      [10.552, 76.198]
    ]
  },
  {
    id: 'Ward 6',
    name: 'Ward 6 - Ayyanthole Border',
    panchayat: DEFAULT_PANCHAYAT,
    center: [10.528, 76.198],
    rainfall: 'Normal',
    rainfallMm: 22,
    floodRisk: 'Low',
    mosquitoRisk: 'Medium',
    responseStatus: 'Normal',
    polygon: [
      [10.536, 76.190],
      [10.537, 76.206],
      [10.520, 76.208],
      [10.518, 76.192],
      [10.536, 76.190]
    ]
  },
  {
    id: 'Ward 7',
    name: 'Ward 7 - Muthuvara Junction',
    panchayat: DEFAULT_PANCHAYAT,
    center: [10.558, 76.195],
    rainfall: 'Normal',
    rainfallMm: 18,
    floodRisk: 'Low',
    mosquitoRisk: 'Low',
    responseStatus: 'Normal',
    polygon: [
      [10.566, 76.188],
      [10.567, 76.204],
      [10.552, 76.205],
      [10.550, 76.189],
      [10.566, 76.188]
    ]
  }
];

// Baseline water-test observations distinguishing Preliminary Screening vs Field-Verified Testing
export const BASELINE_WATER_TESTS = [
  // Ward 5: 3 Preliminary Positives/Abnormals + 2 Field Verified Positives
  {
    id: 'base-1',
    username: 'resident_anon1',
    ward: 'Ward 5',
    panchayat: DEFAULT_PANCHAYAT,
    testType: 'H2S Strip Test',
    testMethod: 'Individual Screening',
    result: 'Abnormal', // 'Normal' | 'Abnormal' | 'Inconclusive'
    date: new Date(Date.now() - 14 * 3600000).toISOString().split('T')[0],
    time: '09:30',
    notes: 'Black precipitate formed on paper strip after 18 hours.',
    location: [10.547, 76.203],
    fieldVerification: {
      status: 'Verified',
      referenceCode: 'REF-FT-8421',
      date: new Date(Date.now() - 8 * 3600000).toISOString().split('T')[0],
      verifiedBy: 'Field Officer S. Nair',
      notes: 'Coliform confirmed with dual-wavelength portable photometer.',
      result: 'Abnormal'
    },
    labVerification: {
      status: 'Recommended',
      notes: 'Formal biological culture confirmation advised.'
    },
    synced: true,
    timestamp: Date.now() - 14 * 3600000
  },
  {
    id: 'base-2',
    username: 'resident_anon2',
    ward: 'Ward 5',
    panchayat: DEFAULT_PANCHAYAT,
    testType: 'Field Coliform Kit',
    testMethod: 'Individual Screening',
    result: 'Abnormal',
    date: new Date(Date.now() - 6 * 3600000).toISOString().split('T')[0],
    time: '14:15',
    notes: 'Well water sample turned yellow with gas bubbles in vial.',
    location: [10.543, 76.208],
    fieldVerification: {
      status: 'Verified',
      referenceCode: 'REF-FT-8422',
      date: new Date(Date.now() - 2 * 3600000).toISOString().split('T')[0],
      verifiedBy: 'Field Officer M. Varma',
      notes: 'Spectrophotometric turbidity check 12 NTU.',
      result: 'Abnormal'
    },
    labVerification: {
      status: 'Pending',
      notes: 'Sample dispatched to District Water Authority Lab.'
    },
    synced: true,
    timestamp: Date.now() - 6 * 3600000
  },
  {
    id: 'base-3',
    username: 'resident_anon3',
    ward: 'Ward 5',
    panchayat: DEFAULT_PANCHAYAT,
    testType: 'Turbidity / Visual Check',
    testMethod: 'Individual Screening',
    result: 'Abnormal',
    date: new Date(Date.now() - 20 * 3600000).toISOString().split('T')[0],
    time: '11:20',
    notes: 'High brownish sediment following canal overflow.',
    location: [10.549, 76.207],
    fieldVerification: {
      status: 'Pending',
      referenceCode: 'REF-FT-8425',
      date: null,
      verifiedBy: null,
      notes: 'Field test visit scheduled for tomorrow morning.',
      result: null
    },
    labVerification: {
      status: 'Not Required',
      notes: ''
    },
    synced: true,
    timestamp: Date.now() - 20 * 3600000
  },
  {
    id: 'base-4',
    username: 'resident_anon4',
    ward: 'Ward 5',
    panchayat: DEFAULT_PANCHAYAT,
    testType: 'Chlorine Residual Test',
    testMethod: 'Individual Screening',
    result: 'Normal',
    date: new Date(Date.now() - 28 * 3600000).toISOString().split('T')[0],
    time: '08:00',
    notes: 'Chlorine residual present at 0.4 mg/L.',
    location: [10.541, 76.202],
    fieldVerification: {
      status: 'Not Required',
      referenceCode: null,
      date: null,
      verifiedBy: null,
      notes: '',
      result: null
    },
    labVerification: {
      status: 'Not Required',
      notes: ''
    },
    synced: true,
    timestamp: Date.now() - 28 * 3600000
  },
  // Ward 2: Riverbanks
  {
    id: 'base-5',
    username: 'resident_anon5',
    ward: 'Ward 2',
    panchayat: DEFAULT_PANCHAYAT,
    testType: 'Turbidity / Visual Check',
    testMethod: 'Individual Screening',
    result: 'Inconclusive',
    date: new Date(Date.now() - 18 * 3600000).toISOString().split('T')[0],
    time: '16:45',
    notes: 'Water is slightly turbid after river level rise.',
    location: [10.540, 76.192],
    fieldVerification: {
      status: 'Pending',
      referenceCode: 'REF-FT-8430',
      date: null,
      verifiedBy: null,
      notes: 'Field visit assigned to Riverbank Health Inspector.',
      result: null
    },
    labVerification: {
      status: 'Not Required',
      notes: ''
    },
    synced: true,
    timestamp: Date.now() - 18 * 3600000
  },
  // Ward 1: Viyyoor
  {
    id: 'base-6',
    username: 'resident_anon6',
    ward: 'Ward 1',
    panchayat: DEFAULT_PANCHAYAT,
    testType: 'Chlorine Residual Test',
    testMethod: 'Individual Screening',
    result: 'Normal',
    date: new Date(Date.now() - 22 * 3600000).toISOString().split('T')[0],
    time: '11:00',
    notes: 'Adequate free residual chlorine observed (0.5 mg/L).',
    location: [10.553, 76.218],
    fieldVerification: {
      status: 'Not Required',
      referenceCode: null,
      date: null,
      verifiedBy: null,
      notes: '',
      result: null
    },
    labVerification: {
      status: 'Not Required',
      notes: ''
    },
    synced: true,
    timestamp: Date.now() - 22 * 3600000
  }
];

// Flood hazard polygons
export const FLOOD_HAZARD_ZONES = [
  {
    name: 'Puzhakkal River Flood Basin',
    polygon: [
      [10.553, 76.182],
      [10.554, 76.203],
      [10.535, 76.206],
      [10.531, 76.186]
    ],
    severity: 'High',
    description: 'Active inundation risk along river catchment.'
  },
  {
    name: 'Ward 5 Lowland Drainage Zone',
    polygon: [
      [10.550, 76.200],
      [10.551, 76.210],
      [10.541, 76.211],
      [10.540, 76.201]
    ],
    severity: 'Moderate',
    description: 'Surface runoff accumulation during heavy monsoon rain.'
  }
];
