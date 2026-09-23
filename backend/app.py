# AquaGuard Python Flask + SQLite Backend
# Full Dual-Interface Support for Household & Field Tester Workflows

import os
import math
import sqlite3
import json
from datetime import datetime, timezone
from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

DB_PATH = os.path.join(os.path.dirname(__file__), 'aquaguard.db')

def get_db():
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    return conn

def haversine_distance(lat1, lon1, lat2, lon2):
    try:
        lat1, lon1, lat2, lon2 = float(lat1), float(lon1), float(lat2), float(lon2)
        R = 6371.0 # Earth radius in km
        dLat = math.radians(lat2 - lat1)
        dLon = math.radians(lon2 - lon1)
        a = math.sin(dLat / 2)**2 + math.cos(math.radians(lat1)) * math.cos(math.radians(lat2)) * math.sin(dLon / 2)**2
        c = 2 * math.atan2(math.sqrt(a), math.sqrt(1 - a))
        return round(R * c, 1)
    except Exception:
        return 2.5

def init_db():
    conn = get_db()
    cursor = conn.cursor()

    # 1. users table
    cursor.execute('''
    CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        username TEXT UNIQUE NOT NULL,
        pin TEXT NOT NULL,
        role TEXT NOT NULL, -- 'household' or 'field_tester'
        ward TEXT NOT NULL,
        panchayat TEXT NOT NULL,
        lat REAL,
        lng REAL,
        phone TEXT,
        tester_reg_no TEXT,
        test_types TEXT,
        area TEXT,
        specialty TEXT,
        available INTEGER DEFAULT 1,
        created_at TEXT
    )
    ''')

    # Add missing columns dynamically
    cursor.execute("PRAGMA table_info(users)")
    u_cols = [row['name'] for row in cursor.fetchall()]
    if 'phone' not in u_cols:
        cursor.execute("ALTER TABLE users ADD COLUMN phone TEXT")
    if 'tester_reg_no' not in u_cols:
        cursor.execute("ALTER TABLE users ADD COLUMN tester_reg_no TEXT")
    if 'test_types' not in u_cols:
        cursor.execute("ALTER TABLE users ADD COLUMN test_types TEXT")
    if 'area' not in u_cols:
        cursor.execute("ALTER TABLE users ADD COLUMN area TEXT")

    # 2. water_tests table
    cursor.execute('''
    CREATE TABLE IF NOT EXISTS water_tests (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        user_id INTEGER,
        username TEXT,
        test_type TEXT,
        source TEXT, -- 'home' or 'field'
        result TEXT, -- 'Normal', 'Abnormal', 'Inconclusive'
        lat REAL,
        lng REAL,
        ward TEXT,
        panchayat TEXT,
        date_time TEXT,
        photo TEXT,
        notes TEXT,
        verification_status TEXT, -- 'Pending', 'Test Completed', 'Verified', 'Not Required'
        lab_status TEXT, -- 'Not Required', 'Recommended', 'Pending', 'Completed'
        tester_name TEXT,
        reference_code TEXT,
        timestamp INTEGER
    )
    ''')

    # 3. field_test_requests table
    cursor.execute('''
    CREATE TABLE IF NOT EXISTS field_test_requests (
        id TEXT PRIMARY KEY, -- e.g. 'FT-001'
        household_user_id INTEGER,
        household_name TEXT,
        field_tester_id INTEGER,
        field_tester_name TEXT,
        ward TEXT,
        location_desc TEXT,
        lat REAL,
        lng REAL,
        test_type TEXT,
        requested_date TEXT,
        requested_time TEXT,
        suggested_date TEXT,
        suggested_time TEXT,
        status TEXT, -- 'Pending', 'Pending Field Tester Response', 'Time Change Suggested', 'Accepted', 'Test In Progress', 'Test Completed', 'Verified', 'Rejected'
        notes TEXT,
        field_result TEXT,
        observations TEXT,
        lab_status TEXT,
        result_photo TEXT,
        created_at TEXT,
        accepted_at TEXT,
        completed_at TEXT
    )
    ''')

    cursor.execute("PRAGMA table_info(field_test_requests)")
    existing_cols = [row['name'] for row in cursor.fetchall()]
    if 'suggested_date' not in existing_cols:
        cursor.execute("ALTER TABLE field_test_requests ADD COLUMN suggested_date TEXT")
    if 'suggested_time' not in existing_cols:
        cursor.execute("ALTER TABLE field_test_requests ADD COLUMN suggested_time TEXT")
    if 'observations' not in existing_cols:
        cursor.execute("ALTER TABLE field_test_requests ADD COLUMN observations TEXT")
    if 'result_photo' not in existing_cols:
        cursor.execute("ALTER TABLE field_test_requests ADD COLUMN result_photo TEXT")

    # 4. alerts table
    cursor.execute('''
    CREATE TABLE IF NOT EXISTS alerts (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        ward TEXT,
        alert_type TEXT,
        message TEXT,
        severity TEXT,
        created_at TEXT,
        active INTEGER DEFAULT 1
    )
    ''')

    conn.commit()

    # Pre-register Accounts
    # 1. Household demo account (Noura: lat 10.545, lng 76.205)
    cursor.execute('SELECT COUNT(*) FROM users WHERE username = "noura123"')
    if cursor.fetchone()[0] == 0:
        cursor.execute('''
            INSERT INTO users (name, username, pin, role, ward, panchayat, lat, lng, area, phone, specialty, available, created_at)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        ''', ('Noura', 'noura123', '1234', 'household', 'Ward 5', 'Puzhakkal Panchayat', 10.545, 76.205, 'Ward 5 Residential', '+91 98470 11111', None, 1, datetime.now(timezone.utc).isoformat()))

    # 2. Field Tester demo accounts:
    # Calibrated coordinates relative to Noura (10.545, 76.205):
    # Anil Kumar: 2.3 km (10.5657, 76.205)
    # Sreya P.: 4.1 km (10.5081, 76.205)
    # Rahul K.: 5.8 km (10.5972, 76.205)

    cursor.execute('SELECT COUNT(*) FROM users WHERE username = "tester1"')
    if cursor.fetchone()[0] == 0:
        cursor.execute('''
            INSERT INTO users (name, username, pin, role, ward, panchayat, lat, lng, area, phone, tester_reg_no, test_types, specialty, available, created_at)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        ''', ('Anil Kumar', 'tester1', 'tester123', 'field_tester', 'Ward 5', 'Puzhakkal Panchayat', 10.5657, 76.205, 'Ward 5 / Puzhakkal North', '+91 98471 23456', 'FT-REG-1042', 'Water Quality & Coliform Analysis, Turbidity & pH Screening', 'Water Quality & Coliform Analysis', 1, datetime.now(timezone.utc).isoformat()))
    else:
        cursor.execute('''
            UPDATE users SET 
                lat = 10.5657, lng = 76.205, phone = COALESCE(phone, "+91 98471 23456"),
                tester_reg_no = COALESCE(tester_reg_no, "FT-REG-1042"),
                test_types = COALESCE(test_types, "Water Quality & Coliform Analysis, Turbidity & pH Screening"),
                area = COALESCE(area, "Ward 5 / Puzhakkal North"),
                specialty = COALESCE(specialty, "Water Quality & Coliform Analysis")
            WHERE username = "tester1"
        ''')

    cursor.execute('SELECT COUNT(*) FROM users WHERE username = "anil_tester"')
    if cursor.fetchone()[0] == 0:
        cursor.execute('''
            INSERT INTO users (name, username, pin, role, ward, panchayat, lat, lng, area, phone, tester_reg_no, test_types, specialty, available, created_at)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        ''', ('Anil Kumar', 'anil_tester', '1234', 'field_tester', 'Ward 5', 'Puzhakkal Panchayat', 10.5657, 76.205, 'Ward 5 / Puzhakkal North', '+91 98471 23456', 'FT-REG-1042', 'Water Quality & Coliform Analysis, Turbidity & pH Screening', 'Water Quality & Coliform Analysis', 1, datetime.now(timezone.utc).isoformat()))
    else:
        cursor.execute('''
            UPDATE users SET 
                lat = 10.5657, lng = 76.205, phone = COALESCE(phone, "+91 98471 23456"),
                tester_reg_no = COALESCE(tester_reg_no, "FT-REG-1042"),
                test_types = COALESCE(test_types, "Water Quality & Coliform Analysis, Turbidity & pH Screening"),
                area = COALESCE(area, "Ward 5 / Puzhakkal North")
            WHERE username = "anil_tester"
        ''')

    cursor.execute('SELECT COUNT(*) FROM users WHERE username = "sreya_tester"')
    if cursor.fetchone()[0] == 0:
        cursor.execute('''
            INSERT INTO users (name, username, pin, role, ward, panchayat, lat, lng, area, phone, tester_reg_no, test_types, specialty, available, created_at)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        ''', ('Sreya P.', 'sreya_tester', '1234', 'field_tester', 'Ward 2', 'Puzhakkal Panchayat', 10.5081, 76.205, 'Ward 2 / Riverside Sector', '+91 98472 34567', 'FT-REG-2088', 'Spectrophotometric Turbidity, Coliform Test Strip', 'Spectrophotometric Turbidity', 1, datetime.now(timezone.utc).isoformat()))
    else:
        cursor.execute('''
            UPDATE users SET 
                lat = 10.5081, lng = 76.205, phone = COALESCE(phone, "+91 98472 34567"),
                tester_reg_no = COALESCE(tester_reg_no, "FT-REG-2088"),
                test_types = COALESCE(test_types, "Spectrophotometric Turbidity, Coliform Test Strip"),
                area = COALESCE(area, "Ward 2 / Riverside Sector")
            WHERE username = "sreya_tester"
        ''')

    cursor.execute('SELECT COUNT(*) FROM users WHERE username = "rahul_tester"')
    if cursor.fetchone()[0] == 0:
        cursor.execute('''
            INSERT INTO users (name, username, pin, role, ward, panchayat, lat, lng, area, phone, tester_reg_no, test_types, specialty, available, created_at)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        ''', ('Rahul K.', 'rahul_tester', '1234', 'field_tester', 'Ward 4', 'Puzhakkal Panchayat', 10.5972, 76.205, 'Ward 4 / Hilltop Sector', '+91 98473 45678', 'FT-REG-3190', 'Residual Chlorine & Microbial Assay, Chemical Contaminants', 'Residual Chlorine & Microbial Assay', 1, datetime.now(timezone.utc).isoformat()))
    else:
        cursor.execute('''
            UPDATE users SET 
                lat = 10.5972, lng = 76.205, phone = COALESCE(phone, "+91 98473 45678"),
                tester_reg_no = COALESCE(tester_reg_no, "FT-REG-3190"),
                test_types = COALESCE(test_types, "Residual Chlorine & Microbial Assay, Chemical Contaminants"),
                area = COALESCE(area, "Ward 4 / Hilltop Sector")
            WHERE username = "rahul_tester"
        ''')

    conn.commit()
    conn.close()

# --- AUTH ROUTES ---
@app.route('/api/auth/login', methods=['POST'])
def login():
    data = request.json or {}
    username = str(data.get('username', '')).strip().lower()
    pin = str(data.get('pin', '')).strip()

    if not username or not pin:
        return jsonify({'error': 'Username and password/PIN are required.'}), 400

    conn = get_db()
    cursor = conn.cursor()
    cursor.execute('SELECT * FROM users WHERE LOWER(username) = ?', (username,))
    row = cursor.fetchone()
    conn.close()

    if not row:
        return jsonify({'error': 'Account not found. Please register or check credentials.'}), 404

    if str(row['pin']).strip() != pin:
        return jsonify({'error': 'Incorrect PIN/password. Please try again.'}), 401

    user_dict = dict(row)
    del user_dict['pin']
    return jsonify({'user': user_dict})

@app.route('/api/auth/register', methods=['POST'])
def register():
    data = request.json or {}
    name = str(data.get('name', '')).strip()
    username = str(data.get('username', '')).strip().lower()
    pin = str(data.get('pin', '')).strip()
    role = data.get('role', 'household')
    ward = data.get('ward', 'Ward 5')
    panchayat = data.get('panchayat', 'Puzhakkal Panchayat')
    area = data.get('area', '')
    phone = data.get('phone', '')
    tester_reg_no = data.get('tester_reg_no', '')
    test_types = data.get('test_types', '')
    specialty = data.get('specialty', '')
    lat = float(data.get('lat', 10.545))
    lng = float(data.get('lng', 76.205))

    if not name or not username or not pin:
        return jsonify({'error': 'Name, username and PIN/password are required.'}), 400

    conn = get_db()
    cursor = conn.cursor()
    try:
        cursor.execute('''
            INSERT INTO users (
                name, username, pin, role, ward, panchayat, area, phone,
                tester_reg_no, test_types, specialty, lat, lng, available, created_at
            )
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        ''', (
            name, username, pin, role, ward, panchayat, area, phone,
            tester_reg_no, test_types, specialty or test_types,
            lat, lng, 1, datetime.now(timezone.utc).isoformat()
        ))
        conn.commit()
        user_id = cursor.lastrowid
    except sqlite3.IntegrityError:
        conn.close()
        return jsonify({'error': f'Username "{username}" is already taken.'}), 409

    cursor.execute('SELECT * FROM users WHERE id = ?', (user_id,))
    row = cursor.fetchone()
    conn.close()

    user_dict = dict(row)
    del user_dict['pin']
    return jsonify({
        'message': 'Account created successfully. Please log in.',
        'user': user_dict
    })

# --- NEARBY FIELD TESTERS DISCOVERY (DYNAMIC HAVERSINE) ---
@app.route('/api/testers/nearby', methods=['GET'])
def get_nearby_testers():
    try:
        lat = float(request.args.get('lat', 10.545))
        lng = float(request.args.get('lng', 76.205))
    except (TypeError, ValueError):
        lat, lng = 10.545, 76.205

    radius_param = request.args.get('radius')
    show_all = request.args.get('all') == 'true' or radius_param == 'all'
    try:
        radius = float(radius_param) if (radius_param and radius_param != 'all') else 10.0
    except ValueError:
        radius = 10.0

    conn = get_db()
    cursor = conn.cursor()
    cursor.execute('SELECT * FROM users WHERE role = "field_tester" AND (available = 1 OR available IS NULL)')
    rows = [dict(r) for r in cursor.fetchall()]
    conn.close()

    testers = []
    seen_names = set()

    for r in rows:
        name = r['name']
        if name in seen_names:
            continue
        seen_names.add(name)

        t_lat = r.get('lat') if r.get('lat') is not None else 10.548
        t_lng = r.get('lng') if r.get('lng') is not None else 76.202
        dist = haversine_distance(lat, lng, t_lat, t_lng)

        # Distance filter
        if not show_all and dist > radius:
            continue

        testers.append({
            'id': r['id'],
            'name': r['name'],
            'username': r['username'],
            'phone': r.get('phone') or '+91 98471 23456',
            'tester_reg_no': r.get('tester_reg_no') or f'FT-REG-{r["id"]:04d}',
            'distance_km': dist,
            'specialty': r.get('specialty') or r.get('test_types') or 'Water Quality Testing',
            'test_types': r.get('test_types') or r.get('specialty') or 'Water Quality & Coliform Analysis',
            'area': r.get('area') or r.get('ward') or 'Puzhakkal Panchayat',
            'ward': r.get('ward') or 'Ward 5',
            'available': bool(r.get('available', 1))
        })

    # Sort by nearest distance
    testers.sort(key=lambda x: x['distance_km'])

    return jsonify({
        'testers': testers,
        'total': len(testers),
        'radius_km': radius,
        'message': 'Nearby field testers located.' if testers else 'No nearby Field Testers available'
    })

# --- FIELD TESTER METRICS & SUMMARY ---
@app.route('/api/testers/stats/<int:tester_id>', methods=['GET'])
def get_tester_stats(tester_id):
    conn = get_db()
    cursor = conn.cursor()

    cursor.execute('''
        SELECT COUNT(*) FROM field_test_requests 
        WHERE field_tester_id = ?
        AND status IN ("Pending", "Pending Field Tester Response")
    ''', (tester_id,))
    new_requests = cursor.fetchone()[0]

    cursor.execute('''
        SELECT COUNT(*) FROM field_test_requests 
        WHERE field_tester_id = ?
        AND status IN ("Accepted", "Test In Progress")
    ''', (tester_id,))
    accepted = cursor.fetchone()[0]

    cursor.execute('''
        SELECT COUNT(*) FROM field_test_requests 
        WHERE field_tester_id = ?
        AND status IN ("Test Completed", "Verified")
    ''', (tester_id,))
    completed = cursor.fetchone()[0]

    cursor.execute('''
        SELECT COUNT(*) FROM field_test_requests 
        WHERE field_tester_id = ?
        AND status = "Time Change Suggested"
    ''', (tester_id,))
    pending_results = cursor.fetchone()[0]

    conn.close()

    return jsonify({
        'new_requests': new_requests,
        'accepted': accepted,
        'completed': completed,
        'pending_results': pending_results
    })

# --- FIELD TESTER PROFILE ---
@app.route('/api/testers/<int:tester_id>/profile', methods=['GET', 'PUT', 'POST'])
def tester_profile(tester_id):
    conn = get_db()
    cursor = conn.cursor()

    if request.method in ('PUT', 'POST'):
        data = request.json or {}
        name = data.get('name')
        phone = data.get('phone')
        test_types = data.get('test_types')
        area = data.get('area')
        ward = data.get('ward')
        avail_raw = data.get('available')
        available = 1 if avail_raw in (True, 1, '1', 'Available', 'available') else 0
        lat = data.get('lat')
        lng = data.get('lng')

        cursor.execute('''
            UPDATE users SET
                name = COALESCE(?, name),
                phone = COALESCE(?, phone),
                test_types = COALESCE(?, test_types),
                specialty = COALESCE(?, specialty),
                area = COALESCE(?, area),
                ward = COALESCE(?, ward),
                available = ?,
                lat = COALESCE(?, lat),
                lng = COALESCE(?, lng)
            WHERE id = ? AND role = "field_tester"
        ''', (name, phone, test_types, test_types, area, ward, available, lat, lng, tester_id))
        conn.commit()

    cursor.execute('SELECT * FROM users WHERE id = ?', (tester_id,))
    row = cursor.fetchone()
    conn.close()

    if not row:
        return jsonify({'error': 'Field Tester not found.'}), 404

    t_dict = dict(row)
    if 'pin' in t_dict:
        del t_dict['pin']
    return jsonify({'profile': t_dict})

# --- FIELD TEST REQUESTS ---
@app.route('/api/requests', methods=['POST'])
def create_request():
    data = request.json or {}
    h_id = data.get('household_user_id')
    h_name = data.get('household_name', 'Household')
    ft_id = data.get('field_tester_id')
    ft_name = data.get('field_tester_name')
    ward = data.get('ward', 'Ward 5')
    location_desc = data.get('location_desc', ward)
    lat = float(data.get('lat', 10.545))
    lng = float(data.get('lng', 76.205))
    test_type = data.get('test_type', 'Water Quality Test')
    req_date = data.get('requested_date', datetime.now(timezone.utc).strftime('%Y-%m-%d'))
    req_time = data.get('requested_time', '4:00 PM')
    notes = data.get('notes', '')

    conn = get_db()
    cursor = conn.cursor()

    # Generate sequential Request ID: FT-001, FT-002, etc.
    cursor.execute('SELECT COUNT(*) FROM field_test_requests')
    count = cursor.fetchone()[0] + 1
    req_id = f'FT-{count:03d}'

    now_iso = datetime.now(timezone.utc).isoformat()
    cursor.execute('''
        INSERT INTO field_test_requests (
            id, household_user_id, household_name, field_tester_id, field_tester_name,
            ward, location_desc, lat, lng, test_type, requested_date, requested_time,
            status, notes, created_at
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    ''', (
        req_id, h_id, h_name, ft_id, ft_name,
        ward, location_desc, lat, lng, test_type, req_date, req_time,
        'Pending Field Tester Response', notes, now_iso
    ))
    conn.commit()

    cursor.execute('SELECT * FROM field_test_requests WHERE id = ?', (req_id,))
    created_req = dict(cursor.fetchone())
    conn.close()

    return jsonify({'request': created_req})

@app.route('/api/requests', methods=['GET'])
def list_requests():
    role = request.args.get('role')
    user_id = request.args.get('user_id')
    username = request.args.get('username')
    status = request.args.get('status')

    conn = get_db()
    cursor = conn.cursor()

    query = 'SELECT * FROM field_test_requests'
    params = []
    conditions = []

    if role == 'field_tester':
        ft_conds = []
        if user_id and str(user_id) not in ('None', '', 'null'):
            ft_conds.append('field_tester_id = ?')
            params.append(int(user_id) if str(user_id).isdigit() else user_id)
        if username and username not in ('None', '', 'null'):
            ft_conds.append('field_tester_name = ?')
            params.append(username)
        if ft_conds:
            conditions.append('(' + ' OR '.join(ft_conds) + ')')
    elif role == 'household':
        h_conds = []
        if user_id and str(user_id) not in ('None', '', 'null'):
            h_conds.append('household_user_id = ?')
            params.append(int(user_id) if str(user_id).isdigit() else user_id)
        if username and username not in ('None', '', 'null'):
            h_conds.append('household_name = ?')
            params.append(username)
        if h_conds:
            conditions.append('(' + ' OR '.join(h_conds) + ')')
        else:
            # If household role is given but no user_id/username, do not return all requests
            conditions.append('household_user_id = -9999')

    if status:
        if status in ('Pending', 'Pending Field Tester Response'):
            conditions.append('status IN ("Pending", "Pending Field Tester Response")')
        else:
            conditions.append('status = ?')
            params.append(status)

    if conditions:
        query += ' WHERE ' + ' AND '.join(conditions)

    query += ' ORDER BY created_at DESC'
    cursor.execute(query, tuple(params))
    rows = [dict(r) for r in cursor.fetchall()]
    conn.close()

    return jsonify({'requests': rows})

# Accept Request: Pending -> Accepted
@app.route('/api/requests/<req_id>/accept', methods=['POST'])
def accept_request(req_id):
    conn = get_db()
    cursor = conn.cursor()
    cursor.execute('''
        UPDATE field_test_requests
        SET status = 'Accepted', accepted_at = ?
        WHERE id = ?
    ''', (datetime.now(timezone.utc).isoformat(), req_id))
    conn.commit()

    cursor.execute('SELECT * FROM field_test_requests WHERE id = ?', (req_id,))
    row = cursor.fetchone()
    conn.close()

    if not row:
        return jsonify({'error': 'Request not found.'}), 404
    return jsonify({'request': dict(row)})

# Suggest Different Time
@app.route('/api/requests/<req_id>/suggest_time', methods=['POST'])
def suggest_time(req_id):
    data = request.json or {}
    sugg_date = data.get('suggested_date', 'Today')
    sugg_time = data.get('suggested_time', '5:30 PM')

    conn = get_db()
    cursor = conn.cursor()
    cursor.execute('''
        UPDATE field_test_requests
        SET status = 'Time Change Suggested', suggested_date = ?, suggested_time = ?
        WHERE id = ?
    ''', (sugg_date, sugg_time, req_id))
    conn.commit()

    cursor.execute('SELECT * FROM field_test_requests WHERE id = ?', (req_id,))
    row = cursor.fetchone()
    conn.close()

    return jsonify({'request': dict(row) if row else {}})

# Household accepts suggested new time
@app.route('/api/requests/<req_id>/accept_time', methods=['POST'])
def accept_time(req_id):
    conn = get_db()
    cursor = conn.cursor()
    cursor.execute('''
        UPDATE field_test_requests
        SET status = 'Accepted', requested_date = COALESCE(suggested_date, requested_date), requested_time = COALESCE(suggested_time, requested_time)
        WHERE id = ?
    ''', (req_id,))
    conn.commit()

    cursor.execute('SELECT * FROM field_test_requests WHERE id = ?', (req_id,))
    row = cursor.fetchone()
    conn.close()

    return jsonify({'request': dict(row) if row else {}})

# Reject Request: Pending -> Rejected
@app.route('/api/requests/<req_id>/reject', methods=['POST'])
def reject_request(req_id):
    conn = get_db()
    cursor = conn.cursor()
    cursor.execute('''
        UPDATE field_test_requests
        SET status = 'Rejected'
        WHERE id = ?
    ''', (req_id,))
    conn.commit()

    cursor.execute('SELECT * FROM field_test_requests WHERE id = ?', (req_id,))
    row = cursor.fetchone()
    conn.close()

    return jsonify({'request': dict(row) if row else {}})

# Start Field Test: Accepted -> Test In Progress
@app.route('/api/requests/<req_id>/start_test', methods=['POST'])
def start_test(req_id):
    conn = get_db()
    cursor = conn.cursor()
    cursor.execute('''
        UPDATE field_test_requests
        SET status = 'Test In Progress'
        WHERE id = ?
    ''', (req_id,))
    conn.commit()

    cursor.execute('SELECT * FROM field_test_requests WHERE id = ?', (req_id,))
    row = cursor.fetchone()
    conn.close()

    return jsonify({'request': dict(row) if row else {}})

# Complete & Submit Field Test Result: Test In Progress -> Test Completed / Verified
@app.route('/api/requests/<req_id>/complete', methods=['POST'])
def complete_request(req_id):
    data = request.json or {}
    result = data.get('result', 'Abnormal')
    test_type = data.get('test_type', 'Water Quality Test')
    observations = data.get('observations', '')
    lab_status = data.get('lab_status', 'Recommended' if result == 'Abnormal' else 'Not Required')
    photo = data.get('photo', None)

    conn = get_db()
    cursor = conn.cursor()
    now_iso = datetime.now(timezone.utc).isoformat()

    cursor.execute('''
        UPDATE field_test_requests
        SET status = 'Test Completed', field_result = ?, lab_status = ?, observations = ?, completed_at = ?
        WHERE id = ?
    ''', (result, lab_status, observations, now_iso, req_id))

    cursor.execute('SELECT * FROM field_test_requests WHERE id = ?', (req_id,))
    req_row = cursor.fetchone()

    # Also register the professional result into water_tests table
    if req_row:
        cursor.execute('''
            INSERT INTO water_tests (
                user_id, username, test_type, source, result, lat, lng, ward, panchayat,
                date_time, photo, notes, verification_status, lab_status, tester_name, reference_code, timestamp
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        ''', (
            req_row['household_user_id'],
            req_row['household_name'],
            test_type,
            'field',
            result,
            req_row['lat'],
            req_row['lng'],
            req_row['ward'],
            'Puzhakkal Panchayat',
            now_iso[:16].replace('T', ' '),
            photo,
            observations,
            'Verified',
            lab_status,
            req_row['field_tester_name'],
            req_id,
            int(datetime.now(timezone.utc).timestamp() * 1000)
        ))

    conn.commit()
    conn.close()

    return jsonify({'request': dict(req_row) if req_row else {}})

# --- WATER TESTS & COMMUNITY AGGREGATION ---
@app.route('/api/tests', methods=['GET', 'POST'])
def handle_tests():
    conn = get_db()
    cursor = conn.cursor()

    if request.method == 'POST':
        data = request.json or {}
        now_ts = int(datetime.now(timezone.utc).timestamp() * 1000)
        cursor.execute('''
            INSERT INTO water_tests (
                user_id, username, test_type, source, result, lat, lng, ward, panchayat,
                date_time, photo, notes, verification_status, lab_status, tester_name, reference_code, timestamp
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        ''', (
            data.get('user_id'),
            data.get('username'),
            data.get('test_type'),
            data.get('source', 'home'),
            data.get('result', 'Abnormal'),
            float(data.get('lat', 10.545)),
            float(data.get('lng', 76.205)),
            data.get('ward', 'Ward 5'),
            data.get('panchayat', 'Puzhakkal Panchayat'),
            data.get('date_time', datetime.now(timezone.utc).strftime('%Y-%m-%d %H:%M')),
            data.get('photo'),
            data.get('notes', ''),
            data.get('verification_status', 'Pending' if data.get('result') == 'Abnormal' else 'Not Required'),
            data.get('lab_status', 'Not Required'),
            data.get('tester_name'),
            data.get('reference_code'),
            now_ts
        ))
        conn.commit()
        new_id = cursor.lastrowid
        cursor.execute('SELECT * FROM water_tests WHERE id = ?', (new_id,))
        record = dict(cursor.fetchone())
        conn.close()
        return jsonify({'test': record})

    # GET
    ward = request.args.get('ward')
    username = request.args.get('username')
    user_id = request.args.get('user_id')

    if user_id and str(user_id) not in ('None', '', 'null'):
        uid = int(user_id) if str(user_id).isdigit() else user_id
        cursor.execute('SELECT * FROM water_tests WHERE user_id = ? ORDER BY timestamp DESC', (uid,))
    elif username and username not in ('None', '', 'null'):
        cursor.execute('SELECT * FROM water_tests WHERE username = ? ORDER BY timestamp DESC', (username,))
    elif ward:
        cursor.execute('SELECT * FROM water_tests WHERE ward = ? ORDER BY timestamp DESC', (ward,))
    else:
        cursor.execute('SELECT * FROM water_tests ORDER BY timestamp DESC')

    tests = [dict(r) for r in cursor.fetchall()]
    conn.close()
    return jsonify({'tests': tests})

@app.route('/api/community/<ward_id>', methods=['GET'])
def get_ward_community(ward_id):
    conn = get_db()
    cursor = conn.cursor()
    cursor.execute('SELECT * FROM water_tests WHERE ward = ? ORDER BY timestamp DESC', (ward_id,))
    tests = [dict(r) for r in cursor.fetchall()]

    cursor.execute('SELECT COUNT(DISTINCT id) FROM users WHERE ward = ? AND role = "household"', (ward_id,))
    registered_households = cursor.fetchone()[0]
    test_households = len(set(t['user_id'] or t['username'] for t in tests if (t.get('user_id') or t.get('username'))))
    participating_households = max(registered_households, test_households)

    now_ts = int(datetime.now(timezone.utc).timestamp() * 1000)
    seven_days_ago_ts = now_ts - (7 * 24 * 60 * 60 * 1000)
    tests_this_week = sum(1 for t in tests if (t.get('timestamp') or 0) >= seven_days_ago_ts)
    total_tests = len(tests)

    preliminary_abnormals = sum(1 for t in tests if t.get('result') in ['Abnormal', 'Abnormal / Possible Concern', 'Positive'] and t.get('source') == 'home')
    field_verified = sum(1 for t in tests if t.get('verification_status') == 'Verified' or t.get('source') == 'field')

    pattern_detected = preliminary_abnormals >= 3

    rainfall = 'Heavy' if ward_id in ['Ward 5', 'Ward 2'] else 'Normal'
    rainfall_mm = 84 if ward_id == 'Ward 5' else 98 if ward_id == 'Ward 2' else 14
    flood_risk = 'High' if ward_id in ['Ward 5', 'Ward 2'] else 'Low'

    conn.close()

    return jsonify({
        'ward': ward_id,
        'has_data': total_tests > 0 or participating_households > 0,
        'total_tests': total_tests,
        'participating_households': participating_households,
        'tests_this_week': tests_this_week,
        'preliminary_abnormal_reports': preliminary_abnormals,
        'preliminary_positives': preliminary_abnormals,
        'field_verified': field_verified,
        'field_verified_reports': field_verified,
        'pattern_detected': pattern_detected,
        'pattern_description': 'Possible water-quality pattern detected based on multiple abnormal reports.' if pattern_detected else 'No abnormal water-quality pattern detected.',
        'rainfall': rainfall,
        'rainfall_mm': rainfall_mm,
        'flood_risk': flood_risk,
        'response_status': 'Attention Required' if pattern_detected else 'Normal'
    })

if __name__ == '__main__':
    init_db()
    app.run(host='0.0.0.0', port=5050, debug=False)
