// --- DATA KARAKTER ---
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

// --- FLOW STANDAR (Tim Ban & Pick) ---
const draftFlow = [
    { type: 'ban', team: 'blue', text: "BLUE TEAM: BAN PHASE" },
    { type: 'ban', team: 'red',  text: "RED TEAM: BAN PHASE" },
    { type: 'pick', team: 'blue', text: "BLUE TEAM: PICK 1" },
    { type: 'pick', team: 'red',  text: "RED TEAM: PICK 1" },
    { type: 'pick', team: 'red',  text: "RED TEAM: PICK 2" },
    { type: 'pick', team: 'blue', text: "BLUE TEAM: PICK 2" },
    { type: 'pick', team: 'blue', text: "BLUE TEAM: PICK 3" },
    { type: 'pick', team: 'red',  text: "RED TEAM: PICK 3" },
    { type: 'pick', team: 'red',  text: "RED TEAM: PICK 4" },
    { type: 'pick', team: 'blue', text: "BLUE TEAM: PICK 4" },
];

let currentStep = 0;
let selectedChars = new Set(); // ID karakter yang sudah dipakai (Ban/Pick/Universal)
let isUniversalMode = false;   // Switch untuk mode Universal Ban

function init() {
    renderSlots();
    renderGrid(characters);
    updateStatus();
}

function renderSlots() {
    const blueContainer = document.getElementById('blue-slots');
    const redContainer = document.getElementById('red-slots');
    const univContainer = document.getElementById('univ-ban-slots');

    // Render 4 Slot Universal (Awalnya kosong)
    univContainer.innerHTML = '';
    for(let i=0; i<4; i++) {
        univContainer.innerHTML += `<div class="univ-ban-box" id="univ-slot-${i}" onclick="removeUnivBan(${i})"></div>`;
    }

    // Render 4 Slot Pick per Tim
    blueContainer.innerHTML = '';
    redContainer.innerHTML = '';
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
        
        el.innerHTML = `
            <div style="width:100%; height:100%; background:${char.color}; display:flex; justify-content:center; align-items:center; font-weight:bold; font-size:1.5rem;">
                ${char.name.charAt(0)}
            </div>
            <div class="char-name">${char.name}</div>
        `;
        grid.appendChild(el);
    });
}

// --- LOGIKA KLIK KARAKTER ---
function handleCharClick(char) {
    if (selectedChars.has(char.id)) return; // Jangan lakukan apa-apa jika char sudah diambil

    // 1. JIKA MODE UNIVERSAL AKTIF
    if (isUniversalMode) {
        addUniversalBan(char);
        return;
    }

    // 2. JIKA MODE NORMAL (Draft Flow)
    if (currentStep >= draftFlow.length) return;

    const currentPhase = draftFlow[currentStep];
    selectedChars.add(char.id);
    const card = document.getElementById(`char-${char.id}`);

    if (currentPhase.type === 'ban') {
        // Logika BAN TIM
        card.classList.add('banned');
        const banSlot = document.getElementById(`${currentPhase.team}-ban-slot`);
        banSlot.innerHTML = `<span style="font-weight:bold; color:white;">${char.name}</span>`;
        banSlot.style.background = char.color;
    } else {
        // Logika PICK TIM
        card.classList.add('picked');
        fillPickSlot(currentPhase.team, char);
    }

    currentStep++;
    updateStatus();
}

// --- LOGIKA UNIVERSAL BAN ---
function toggleUniversalMode() {
    isUniversalMode = !isUniversalMode;
    const btn = document.getElementById('toggle-univ-btn');
    const body = document.body;

    if (isUniversalMode) {
        btn.textContent = "MODE: ON (Pilih Karakter untuk Ban)";
        btn.classList.add('active');
        body.classList.add('universal-mode-active'); // Efek visual (gelapkan tim)
    } else {
        btn.textContent = "MODE: OFF";
        btn.classList.remove('active');
        body.classList.remove('universal-mode-active');
    }
}

function addUniversalBan(char) {
    // Cari slot universal kosong
    let filled = false;
    for(let i=0; i<4; i++) {
        const slot = document.getElementById(`univ-slot-${i}`);
        if (!slot.classList.contains('filled')) {
            // Isi Slot
            slot.classList.add('filled');
            slot.innerHTML = `<div style="width:100%; height:100%; background:${char.color}; opacity:0.7;"></div>`;
            slot.dataset.charId = char.id; // Simpan ID di elemen HTML agar bisa dihapus nanti
            
            // Update Grid
            selectedChars.add(char.id);
            const card = document.getElementById(`char-${char.id}`);
            if(card) card.classList.add('banned');
            
            filled = true;
            break;
        }
    }
    
    if (!filled) {
        alert("Slot Universal Ban Penuh!");
    } else {
        // Otomatis matikan mode setelah pilih satu (opsional, biar tidak salah klik)
        // toggleUniversalMode(); 
    }
}

// Fitur Tambahan: Hapus Universal Ban jika diklik ulang slotnya
function removeUnivBan(index) {
    if (!isUniversalMode) return; // Hanya bisa hapus saat mode edit nyala

    const slot = document.getElementById(`univ-slot-${index}`);
    if (slot.classList.contains('filled')) {
        const charId = slot.dataset.charId;
        
        // Hapus dari data
        selectedChars.delete(charId);
        
        // Reset Visual Grid
        const card = document.getElementById(`char-${charId}`);
        if(card) card.classList.remove('banned');

        // Reset Slot
        slot.classList.remove('filled');
        slot.innerHTML = '';
        slot.removeAttribute('data-char-id');
    }
}

function fillPickSlot(team, char) {
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

    bluePanel.classList.remove('active-blue');
    redPanel.classList.remove('active-red');
    statusBar.style.backgroundColor = '#333';

    if (currentStep >= draftFlow.length) {
        statusBar.textContent = "DRAFT SELESAI";
        statusBar.style.color = "#d4b168";
        statusBar.style.border = "1px solid #d4b168";
        return;
    }

    const phase = draftFlow[currentStep];
    statusBar.textContent = phase.text;

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
    
    // Refresh visual
    characters.forEach(c => {
        if (selectedChars.has(c.id)) {
            const el = document.getElementById(`char-${c.id}`);
            if(el) {
                // Sederhana: anggap saja kalau sudah selected dia 'picked' style-nya
                // kecuali kita cek dia di array mana, tapi untuk visual ini cukup
                el.style.opacity = '0.3'; 
                el.style.pointerEvents = 'none';
            }
        }
    });
}

init();