// IndexedDB wrapper for AquaGuard Offline-First storage
// Enhanced with Field Tester Requests and Verification Lifecycle

const DB_NAME = 'AquaGuardDB';
const DB_VERSION = 2; // Incremented for fieldTesterRequests store

let dbPromise = null;

export function getDB() {
  if (dbPromise) return dbPromise;

  dbPromise = new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);

    request.onupgradeneeded = (event) => {
      const db = event.target.result;

      if (!db.objectStoreNames.contains('users')) {
        db.createObjectStore('users', { keyPath: 'username' });
      }

      if (!db.objectStoreNames.contains('waterTests')) {
        const testStore = db.createObjectStore('waterTests', { keyPath: 'id', autoIncrement: true });
        testStore.createIndex('ward', 'ward', { unique: false });
        testStore.createIndex('username', 'username', { unique: false });
        testStore.createIndex('timestamp', 'timestamp', { unique: false });
      }

      if (!db.objectStoreNames.contains('fieldTesterRequests')) {
        const ftStore = db.createObjectStore('fieldTesterRequests', { keyPath: 'id', autoIncrement: true });
        ftStore.createIndex('username', 'username', { unique: false });
        ftStore.createIndex('ward', 'ward', { unique: false });
      }

      if (!db.objectStoreNames.contains('wardData')) {
        db.createObjectStore('wardData', { keyPath: 'wardId' });
      }

      if (!db.objectStoreNames.contains('syncQueue')) {
        db.createObjectStore('syncQueue', { keyPath: 'id', autoIncrement: true });
      }
    };

    request.onsuccess = (event) => {
      resolve(event.target.result);
    };

    request.onerror = (event) => {
      console.error('IndexedDB open error:', event.target.error);
      reject(event.target.error);
    };
  });

  return dbPromise;
}

// User operations
export async function dbGetUser(username) {
  const db = await getDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction('users', 'readonly');
    const store = tx.objectStore('users');
    const req = store.get(username);
    req.onsuccess = () => resolve(req.result || null);
    req.onerror = () => reject(req.error);
  });
}

export async function dbSaveUser(user) {
  const db = await getDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction('users', 'readwrite');
    const store = tx.objectStore('users');
    const req = store.put(user);
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}

// Water Test operations
export async function dbSaveWaterTest(test) {
  const db = await getDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(['waterTests', 'syncQueue'], 'readwrite');
    const testStore = tx.objectStore('waterTests');
    const syncStore = tx.objectStore('syncQueue');

    const testReq = testStore.add(test);
    testReq.onsuccess = (e) => {
      const generatedId = e.target.result;
      test.id = generatedId;
      if (!test.synced) {
        syncStore.add({ type: 'WATER_TEST', data: test, timestamp: Date.now() });
      }
    };

    tx.oncomplete = () => resolve(test);
    tx.onerror = () => reject(tx.error);
  });
}

export async function dbUpdateWaterTest(test) {
  const db = await getDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction('waterTests', 'readwrite');
    const store = tx.objectStore('waterTests');
    const req = store.put(test);
    req.onsuccess = () => resolve(test);
    req.onerror = () => reject(req.error);
  });
}

export async function dbGetAllWaterTests() {
  const db = await getDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction('waterTests', 'readonly');
    const store = tx.objectStore('waterTests');
    const req = store.getAll();
    req.onsuccess = () => resolve(req.result || []);
    req.onerror = () => reject(req.error);
  });
}

export async function dbGetWaterTestsByWard(ward) {
  const all = await dbGetAllWaterTests();
  return all.filter((t) => t.ward === ward);
}

export async function dbGetWaterTestsByUser(username) {
  const all = await dbGetAllWaterTests();
  return all.filter((t) => t.username === username);
}

// Field Tester Request operations
export async function dbSaveFieldRequest(requestData) {
  const db = await getDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(['fieldTesterRequests', 'syncQueue'], 'readwrite');
    const reqStore = tx.objectStore('fieldTesterRequests');
    const syncStore = tx.objectStore('syncQueue');

    const addReq = reqStore.add(requestData);
    addReq.onsuccess = (e) => {
      requestData.id = e.target.result;
      if (!requestData.synced) {
        syncStore.add({ type: 'FIELD_REQUEST', data: requestData, timestamp: Date.now() });
      }
    };

    tx.oncomplete = () => resolve(requestData);
    tx.onerror = () => reject(tx.error);
  });
}

export async function dbGetFieldRequestsByUser(username) {
  const db = await getDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction('fieldTesterRequests', 'readonly');
    const store = tx.objectStore('fieldTesterRequests');
    const req = store.getAll();
    req.onsuccess = () => {
      const all = req.result || [];
      resolve(all.filter((r) => r.username === username));
    };
    req.onerror = () => reject(req.error);
  });
}

// Sync queue
export async function dbGetPendingSyncCount() {
  const db = await getDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction('syncQueue', 'readonly');
    const store = tx.objectStore('syncQueue');
    const req = store.count();
    req.onsuccess = () => resolve(req.result || 0);
    req.onerror = () => reject(req.error);
  });
}

export async function dbProcessSyncQueue() {
  const db = await getDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(['syncQueue', 'waterTests', 'fieldTesterRequests'], 'readwrite');
    const syncStore = tx.objectStore('syncQueue');
    const testStore = tx.objectStore('waterTests');
    const ftStore = tx.objectStore('fieldTesterRequests');

    const getReq = syncStore.getAll();
    getReq.onsuccess = () => {
      const items = getReq.result || [];
      items.forEach((item) => {
        if (item.type === 'WATER_TEST' && item.data?.id) {
          const testGet = testStore.get(item.data.id);
          testGet.onsuccess = () => {
            if (testGet.result) {
              const updated = testGet.result;
              updated.synced = true;
              testStore.put(updated);
            }
          };
        } else if (item.type === 'FIELD_REQUEST' && item.data?.id) {
          const ftGet = ftStore.get(item.data.id);
          ftGet.onsuccess = () => {
            if (ftGet.result) {
              const updated = ftGet.result;
              updated.synced = true;
              ftStore.put(updated);
            }
          };
        }
      });
      syncStore.clear();
    };

    tx.oncomplete = () => resolve(true);
    tx.onerror = () => reject(tx.error);
  });
}
