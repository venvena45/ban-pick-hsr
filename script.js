// --- KONFIGURASI DATA ---
// Dalam aplikasi nyata, gunakan gambar asli. Di sini kita pakai placeholder warna.
const characters = [
    { id: 'kafka', name: 'Kafka', path: 'Nihility', color: '#b042f5' },
    { id: 'jingliu', name: 'Jingliu', path: 'Destruction', color: '#4287f5' },
    { id: 'dhil', name: 'Imbibitor Lunae', path: 'Destruction', color: '#42f5ce' },
    { id: 'fuxuan', name: 'Fu Xuan', path: 'Preservation', color: '#f542aa' },
    { id: 'bronya', name: 'Bronya', path: 'Harmony', color: '#42f578' },
    { id: 'seele', name: 'Seele', path: 'Hunt', color: '#6a0dad' },
    { id: 'blade', name: 'Blade', path: 'Destruction', color: '#364f46' },
    { id: 'luocha', name: 'Luocha', path: 'Abundance', color: '#f5e942' },
    { id: 'sw', name: 'Silver Wolf', path: 'Nihility', color: '#a1a1a1' },
    { id: 'jy', name: 'Jing Yuan', path: 'Erudition', color: '#f5d442' },
    { id: 'topaz', name: 'Topaz', path: 'Hunt', color: '#f55742' },
    { id: 'huohuo', name: 'Huohuo', path: 'Abundance', color: '#42f5bc' },
    { id: 'ratio', name: 'Dr. Ratio', path: 'Hunt', color: '#4257f5' },
    { id: 'ruanmei', name: 'Ruan Mei', path: 'Harmony', color: '#42f5e9' },
    { id: 'acheron', name: 'Acheron', path: 'Nihility', color: '#630829' },
    { id: 'aventurine', name: 'Aventurine', path: 'Preservation', color: '#d4b74e' },
    { id: 'robin', name: 'Robin', path: 'Harmony', color: '#4eaad4' },
    { id: 'boothill', name: 'Boothill', path: 'Hunt', color: '#d44e4e' },
    { id: 'firefly', name: 'Firefly', path: 'Destruction', color: '#4ed491' },
    { id: 'jade', name: 'Jade', path: 'Erudition', color: '#8a4ed4' },
];

// --- STATE MANAGEMENT ---
const STATE = {
    BLUE_BAN: 'BLUE_BAN',
    RED_BAN: 'RED_BAN',
    BLUE_PICK_1: 'BLUE_PICK_1',
    RED_PICK_1: 'RED_PICK_1',
    RED_PICK_2: 'RED_PICK_2',
    BLUE_PICK_2: 'BLUE_PICK_2',
    BLUE_PICK_3: 'BLUE_PICK_3',
    RED_PICK_3: 'RED_PICK_3',
    RED_PICK_4: 'RED_PICK_4',
    BLUE_PICK_4: 'BLUE_PICK_4',
    FINISHED: 'FINISHED'
};

// Urutan fase drafting
const draftFlow = [
    { state: STATE.BLUE_BAN, team: 'blue', type: 'ban', text: "BLUE TEAM: BAN PHASE" },
    { state: STATE.RED_BAN, team: 'red', type: 'ban', text: "RED TEAM: BAN PHASE" },
    { state: STATE.BLUE_PICK_1, team: 'blue', type: 'pick', text: "BLUE TEAM: PICK 1" },
    { state: STATE.RED_PICK_1, team: 'red', type: 'pick', text: "RED TEAM: PICK 1" },
    { state: STATE.RED_PICK_2, team: 'red', type: 'pick', text: "RED TEAM: PICK 2" },
    { state: STATE.BLUE_PICK_2, team: 'blue', type: 'pick', text: "BLUE TEAM: PICK 2" },
    { state: STATE.BLUE_PICK_3, team: 'blue', type: 'pick', text: "BLUE TEAM: PICK 3" },
    { state: STATE.RED_PICK_3, team: 'red', type: 'pick', text: "RED TEAM: PICK 3" },
    { state: STATE.RED_PICK_4, team: 'red', type: 'pick', text: "RED TEAM: PICK 4" },
    { state: STATE.BLUE_PICK_4, team: 'blue', type: 'pick', text: "BLUE TEAM: PICK 4" },
];

let currentStep = 0;
let selectedChars = new Set(); // Menyimpan ID karakter yang sudah dipakai/ban

// --- INISIALISASI ---
function init() {
    renderSlots();
    renderGrid(characters);
    updateStatus();
}

// --- RENDER FUNGSI ---
function renderSlots() {
    const blueContainer = document.getElementById('blue-slots');
    const redContainer = document.getElementById('red-slots');

    // Buat 4 slot kosong untuk masing-masing tim
    for(let i=0; i<4; i++) {
        blueContainer.innerHTML += `<div class="slot" id="blue-slot-${i}">Slot Kosong</div>`;
        redContainer.innerHTML += `<div class="slot" id="red-slot-${i}">Slot Kosong</div>`;
    }
}

function renderGrid(chars) {
    const grid = document.getElementById('char-grid');
    grid.innerHTML = '';
    
    chars.forEach(char => {
        const el = document.createElement('div');
        el.className = 'char-card';
        el.id = `char-${char.id}`;
        el.onclick = () => handleCharClick(char);
        
        // Menggunakan warna background sebagai placeholder gambar
        el.innerHTML = `
            <div style="width:100%; height:100%; background:${char.color}; display:flex; justify-content:center; align-items:center; font-weight:bold; font-size:1.5rem;">
                ${char.name.charAt(0)}
            </div>
            <div class="char-name">${char.name}</div>
        `;
        grid.appendChild(el);
    });
}

// --- LOGIKA UTAMA ---
function handleCharClick(char) {
    if (currentStep >= draftFlow.length) return; // Draft selesai
    if (selectedChars.has(char.id)) return; // Karakter sudah dipilih

    const currentPhase = draftFlow[currentStep];
    
    // Update Visual Data
    selectedChars.add(char.id);
    const card = document.getElementById(`char-${char.id}`);

    if (currentPhase.type === 'ban') {
        // Logika BAN
        card.classList.add('banned');
        document.getElementById(`${currentPhase.team}-ban-slot`).innerHTML = `
            <span style="font-weight:bold; color:white;">${char.name}</span>
        `;
        document.getElementById(`${currentPhase.team}-ban-slot`).style.background = char.color;
        document.getElementById(`${currentPhase.team}-ban-slot`).style.opacity = '0.7';

    } else {
        // Logika PICK
        card.classList.add('picked');
        fillNextSlot(currentPhase.team, char);
    }

    // Pindah ke step berikutnya
    currentStep++;
    updateStatus();
}

function fillNextSlot(team, char) {
    // Cari slot kosong pertama
    for (let i = 0; i < 4; i++) {
        const slot = document.getElementById(`${team}-slot-${i}`);
        if (slot.innerHTML === "Slot Kosong") {
            slot.innerHTML = `
                <div style="width:30px; height:30px; border-radius:50%; background:${char.color}; margin-right:10px;"></div>
                <span>${char.name}</span>
            `;
            slot.classList.add('filled');
            break;
        }
    }
}

function updateStatus() {
    const statusBar = document.getElementById('status-bar');
    const bluePanel = document.getElementById('blue-panel');
    const redPanel = document.getElementById('red-panel');

    // Reset highlight
    bluePanel.classList.remove('active-blue');
    redPanel.classList.remove('active-red');
    statusBar.style.backgroundColor = '#333';

    if (currentStep >= draftFlow.length) {
        statusBar.textContent = "TEST DRAFT HSR - VENA";
        statusBar.style.color = "#d4b168";
        statusBar.style.border = "1px solid #d4b168";
        return;
    }

    const phase = draftFlow[currentStep];
    statusBar.textContent = phase.text;

    // Highlight Tim yang sedang aktif
    if (phase.team === 'blue') {
        bluePanel.classList.add('active-blue');
        statusBar.style.backgroundColor = 'var(--blue-team)';
    } else {
        redPanel.classList.add('active-red');
        statusBar.style.backgroundColor = 'var(--red-team)';
    }
}

function filterChars(query) {
    const lowerQ = query.toLowerCase();
    const filtered = characters.filter(c => c.name.toLowerCase().includes(lowerQ));
    renderGrid(filtered);
    // Kita harus re-apply class banned/picked karena render ulang
    characters.forEach(c => {
        if (selectedChars.has(c.id)) {
            // Sederhana: kita tidak tahu dia banned atau picked tanpa simpan state lebih detail
            // Untuk demo, kita grey out saja jika sudah di select
            const el = document.getElementById(`char-${c.id}`);
            if(el) el.style.opacity = '0.2';
        }
    });
}

// Start
init();