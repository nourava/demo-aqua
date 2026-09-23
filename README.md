# AquaGuard — Household Water Safety & Community Alert System

AquaGuard is an offline-first, GIS-based water safety and hazard monitoring platform. It empowers households to screen drinking water, connects them with nearby certified Field Testers for professional verification, and aggregates real-time community water-quality patterns.

---

## 🌟 Core Features

- **Dual Role Architecture**:
  - 🏠 **Household Users**: Log preliminary home water tests, track test history, request nearby certified Field Testers, and receive environmental alerts.
  - 🧪 **Certified Field Testers**: Accept/schedule testing requests, conduct field verification, submit calibrated test results, and manage service availability.
- **Clean New-User Experience**: Newly registered households start with a pristine, empty dashboard (no fake tests, no unverified contamination claims).
- **Two-Option Water Testing**:
  - **Option 1 — Individual / Home Test**: Record screening kits (H2S Strip, Coliform Kit, Chlorine Residual, Turbidity) with results (`Normal`, `Abnormal / Possible Concern`, `Inconclusive`). Abnormal results prompt professional field verification.
  - **Option 2 — Book a Field Tester**: Request nearby certified testers directly without prior home tests.
- **Proximity Matching**: Haversine distance calculation matches households with certified testers near their GPS coordinates while protecting exact home addresses.
- **Dynamic Community Aggregation**: Community statistics (participating households, weekly tests, abnormal reports, field-verified tests) are dynamically derived from actual database records in the user's ward/panchayat.
- **GIS Hazard & Environmental Map**: Interactive Leaflet GIS map with distinct layers for:
  - Actual / Recorded Data (Household locations, Community boundaries, Water tests, Field verifications).
  - Environmental Data (Rainfall, Flooding / Waterlogging zones).
  - Derived Spatial Information (Possible water-quality clusters).
- **Offline Capability**: Local IndexedDB caching and Service Worker synchronization ensure functionality even during connectivity loss.

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** (v18+) & **npm**
- **Python** (v3.9+) with `Flask` and `Flask-CORS`

### 1. Install Dependencies

```bash
# Install frontend packages
npm install

# Install Python backend packages
pip install flask flask-cors
```

### 2. Start the Backend API (Port 5050)

```bash
python3 backend/app.py
```
*The SQLite database (`backend/aquaguard.db`) will automatically initialize and seed registered demo accounts on first launch.*

### 3. Start the Frontend Dev Server (Port 5173)

```bash
npm run dev
```

Open **[http://localhost:5173](http://localhost:5173)** in your browser.

---

## 👥 Demo Credentials

| Role | Username | Password / PIN | Ward |
| :--- | :--- | :--- | :--- |
| **Household User** | `noura123` | `1234` | Ward 5 |
| **Field Tester** | `anil_tester` | `1234` | Ward 5 |
| **Field Tester** | `sreya_tester` | `1234` | Ward 2 |
| **Field Tester** | `rahul_tester` | `1234` | Ward 4 |

*Or register a new Household or Field Tester account directly from the login screen.*

---

## 🛠️ Tech Stack
- **Frontend**: Vanilla JavaScript (ES Modules), HTML5, CSS3 Glassmorphism UI, Leaflet.js
- **Build Tool**: Vite
- **Storage**: IndexedDB (Offline-First), Service Worker
- **Backend API**: Python Flask, RESTful Endpoints
- **Database**: SQLite3 (`backend/aquaguard.db`)
