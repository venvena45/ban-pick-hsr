// --- DATA KARAKTER ---
// Warna disesuaikan dengan Elemen (Combat Type)
const ELEMENT_COLORS = {
    Physical:   '#9e9e9e', // Abu-abu
    Fire:       '#ff4d4d', // Merah
    Ice:        '#4facfe', // Biru Muda
    Lightning:  '#d580ff', // Ungu Terang
    Wind:       '#5cdb95', // Hijau
    Quantum:    '#6a5acd', // Ungu Gelap (SlateBlue)
    Imaginary:  '#f1c40f'  // Emas/Kuning
};

const characters = [
    { id: 'acheron', name: 'Acheron', path: 'Nihility', color: ELEMENT_COLORS.Lightning },
    { id: 'aglaea', name: 'Aglaea', path: 'Remembrance', color: ELEMENT_COLORS.Lightning },
    { id: 'anaxa', name: 'Anaxa', path: 'Erudition', color: ELEMENT_COLORS.Wind },
    { id: 'archer', name: 'Archer', path: 'The Hunt', color: ELEMENT_COLORS.Quantum },
    { id: 'argenti', name: 'Argenti', path: 'Erudition', color: ELEMENT_COLORS.Physical },
    { id: 'arlan', name: 'Arlan', path: 'Destruction', color: ELEMENT_COLORS.Lightning },
    { id: 'asta', name: 'Asta', path: 'Harmony', color: ELEMENT_COLORS.Fire },
    { id: 'aventurine', name: 'Aventurine', path: 'Preservation', color: ELEMENT_COLORS.Imaginary },
    { id: 'bailu', name: 'Bailu', path: 'Abundance', color: ELEMENT_COLORS.Lightning },
    { id: 'blackswan', name: 'Black Swan', path: 'Nihility', color: ELEMENT_COLORS.Wind },
    { id: 'blade', name: 'Blade', path: 'Destruction', color: ELEMENT_COLORS.Wind },
    { id: 'boothill', name: 'Boothill', path: 'The Hunt', color: ELEMENT_COLORS.Physical },
    { id: 'bronya', name: 'Bronya', path: 'Harmony', color: ELEMENT_COLORS.Wind },
    { id: 'castorice', name: 'Castorice', path: 'Remembrance', color: ELEMENT_COLORS.Quantum },
    { id: 'cerydra', name: 'Cerydra', path: 'Harmony', color: ELEMENT_COLORS.Wind },
    { id: 'cipher', name: 'Cipher', path: 'Nihility', color: ELEMENT_COLORS.Quantum },
    { id: 'clara', name: 'Clara', path: 'Destruction', color: ELEMENT_COLORS.Physical },
    { id: 'cyrene', name: 'Cyrene', path: 'Remembrance', color: ELEMENT_COLORS.Ice },
    { id: 'danheng', name: 'Dan Heng', path: 'The Hunt', color: ELEMENT_COLORS.Wind },
    { id: 'dhil', name: 'Dan Heng IL', path: 'Destruction', color: ELEMENT_COLORS.Imaginary },
    { id: 'dhpt', name: 'Dan Heng PT', path: 'Preservation', color: ELEMENT_COLORS.Physical },
    { id: 'ratio', name: 'Dr. Ratio', path: 'The Hunt', color: ELEMENT_COLORS.Imaginary },
    { id: 'evernight', name: 'Evernight', path: 'Remembrance', color: ELEMENT_COLORS.Ice },
    { id: 'feixiao', name: 'Feixiao', path: 'The Hunt', color: ELEMENT_COLORS.Wind },
    { id: 'firefly', name: 'Firefly', path: 'Destruction', color: ELEMENT_COLORS.Fire },
    { id: 'fuxuan', name: 'Fu Xuan', path: 'Preservation', color: ELEMENT_COLORS.Quantum },
    { id: 'fugue', name: 'Fugue', path: 'Nihility', color: ELEMENT_COLORS.Fire },
    { id: 'gallagher', name: 'Gallagher', path: 'Abundance', color: ELEMENT_COLORS.Fire },
    { id: 'gepard', name: 'Gepard', path: 'Preservation', color: ELEMENT_COLORS.Ice },
    { id: 'guinaifen', name: 'Guinaifen', path: 'Nihility', color: ELEMENT_COLORS.Fire },
    { id: 'hanya', name: 'Hanya', path: 'Harmony', color: ELEMENT_COLORS.Physical },
    { id: 'herta', name: 'Herta', path: 'Erudition', color: ELEMENT_COLORS.Ice },
    { id: 'himeko', name: 'Himeko', path: 'Erudition', color: ELEMENT_COLORS.Fire },
    { id: 'hook', name: 'Hook', path: 'Destruction', color: ELEMENT_COLORS.Fire },
    { id: 'huohuo', name: 'Huohuo', path: 'Abundance', color: ELEMENT_COLORS.Wind },
    { id: 'hyacine', name: 'Hyacine', path: 'Remembrance', color: ELEMENT_COLORS.Wind },
    { id: 'hysilens', name: 'Hysilens', path: 'Nihility', color: ELEMENT_COLORS.Physical },
    { id: 'jade', name: 'Jade', path: 'Erudition', color: ELEMENT_COLORS.Quantum },
    { id: 'jiaoqiu', name: 'Jiaoqiu', path: 'Nihility', color: ELEMENT_COLORS.Fire },
    { id: 'jingyuan', name: 'Jing Yuan', path: 'Erudition', color: ELEMENT_COLORS.Lightning },
    { id: 'jingliu', name: 'Jingliu', path: 'Destruction', color: ELEMENT_COLORS.Ice },
    { id: 'kafka', name: 'Kafka', path: 'Nihility', color: ELEMENT_COLORS.Lightning },
    { id: 'lingsha', name: 'Lingsha', path: 'Abundance', color: ELEMENT_COLORS.Fire },
    { id: 'luka', name: 'Luka', path: 'Nihility', color: ELEMENT_COLORS.Physical },
    { id: 'luocha', name: 'Luocha', path: 'Abundance', color: ELEMENT_COLORS.Imaginary },
    { id: 'lynx', name: 'Lynx', path: 'Abundance', color: ELEMENT_COLORS.Quantum },
    { id: 'march7', name: 'March 7th', path: 'Preservation', color: ELEMENT_COLORS.Ice },
    { id: 'march7hunt', name: 'March 7th (Hunt)', path: 'The Hunt', color: ELEMENT_COLORS.Imaginary },
    { id: 'misha', name: 'Misha', path: 'Destruction', color: ELEMENT_COLORS.Ice },
    { id: 'moze', name: 'Moze', path: 'The Hunt', color: ELEMENT_COLORS.Lightning },
    { id: 'mydei', name: 'Mydei', path: 'Destruction', color: ELEMENT_COLORS.Imaginary },
    { id: 'natasha', name: 'Natasha', path: 'Abundance', color: ELEMENT_COLORS.Physical },
    { id: 'pela', name: 'Pela', path: 'Nihility', color: ELEMENT_COLORS.Ice },
    { id: 'phainon', name: 'Phainon', path: 'Destruction', color: ELEMENT_COLORS.Physical },
    { id: 'qingque', name: 'Qingque', path: 'Erudition', color: ELEMENT_COLORS.Quantum },
    { id: 'rappa', name: 'Rappa', path: 'Erudition', color: ELEMENT_COLORS.Imaginary },
    { id: 'robin', name: 'Robin', path: 'Harmony', color: ELEMENT_COLORS.Physical },
    { id: 'ruanmei', name: 'Ruan Mei', path: 'Harmony', color: ELEMENT_COLORS.Ice },
    { id: 'saber', name: 'Saber', path: 'Destruction', color: ELEMENT_COLORS.Wind },
    { id: 'sampo', name: 'Sampo', path: 'Nihility', color: ELEMENT_COLORS.Wind },
    { id: 'seele', name: 'Seele', path: 'The Hunt', color: ELEMENT_COLORS.Quantum },
    { id: 'serval', name: 'Serval', path: 'Erudition', color: ELEMENT_COLORS.Lightning },
    { id: 'silverwolf', name: 'Silver Wolf', path: 'Nihility', color: ELEMENT_COLORS.Quantum },
    { id: 'sparkle', name: 'Sparkle', path: 'Harmony', color: ELEMENT_COLORS.Quantum },
    { id: 'sunday', name: 'Sunday', path: 'Harmony', color: ELEMENT_COLORS.Imaginary },
    { id: 'sushang', name: 'Sushang', path: 'The Hunt', color: ELEMENT_COLORS.Physical },
    { id: 'thedahlia', name: 'The Dahlia', path: 'Nihility', color: ELEMENT_COLORS.Fire },
    { id: 'theherta', name: 'The Herta', path: 'Erudition', color: ELEMENT_COLORS.Ice },
    { id: 'tingyun', name: 'Tingyun', path: 'Harmony', color: ELEMENT_COLORS.Lightning },
    { id: 'topaz', name: 'Topaz & Numby', path: 'The Hunt', color: ELEMENT_COLORS.Fire },
    { id: 'tb_phys', name: 'MC (Physical)', path: 'Destruction', color: ELEMENT_COLORS.Physical },
    { id: 'tb_fire', name: 'MC (Fire)', path: 'Preservation', color: ELEMENT_COLORS.Fire },
    { id: 'tb_imag', name: 'MC (Harmony)', path: 'Harmony', color: ELEMENT_COLORS.Imaginary },
    { id: 'tb_rem', name: 'MC (Remembrance)', path: 'Remembrance', color: ELEMENT_COLORS.Ice },
    { id: 'tribbie', name: 'Tribbie', path: 'Harmony', color: ELEMENT_COLORS.Quantum },
    { id: 'welt', name: 'Welt', path: 'Nihility', color: ELEMENT_COLORS.Imaginary },
    { id: 'xueyi', name: 'Xueyi', path: 'Destruction', color: ELEMENT_COLORS.Quantum },
    { id: 'yanqing', name: 'Yanqing', path: 'The Hunt', color: ELEMENT_COLORS.Ice },
    { id: 'yukong', name: 'Yukong', path: 'Harmony', color: ELEMENT_COLORS.Imaginary },
    { id: 'yunli', name: 'Yunli', path: 'Destruction', color: ELEMENT_COLORS.Physical }
];

const draftFlow = [
    // NODE 1
    { type: 'ban', team: 'blue', text: "NODE 1: BLUE BAN" },
    { type: 'ban', team: 'red',  text: "NODE 1: RED BAN" },
    { type: 'pick', team: 'blue', text: "NODE 1: BLUE PICK" },
    { type: 'pick', team: 'red',  text: "NODE 1: RED PICK" },
    // NODE 2
    { type: 'ban', team: 'blue', text: "NODE 2: BLUE BAN" },
    { type: 'ban', team: 'red',  text: "NODE 2: RED BAN" },
    { type: 'pick', team: 'red',  text: "NODE 2: RED PICK (1/2)" },
    { type: 'pick', team: 'red',  text: "NODE 2: RED PICK (2/2)" },
    { type: 'pick', team: 'blue', text: "NODE 2: BLUE PICK (1/2)" },
    { type: 'pick', team: 'blue', text: "NODE 2: BLUE PICK (2/2)" },
    // NODE 3
    { type: 'ban', team: 'blue', text: "NODE 3: BLUE BAN" },
    { type: 'ban', team: 'red',  text: "NODE 3: RED BAN" },
    { type: 'pick', team: 'blue', text: "NODE 3: BLUE PICK" },
    { type: 'pick', team: 'red',  text: "NODE 3: RED PICK" },
];

let currentStep = 0;

// LOGIKA BARU: Split Picked Sets
let bluePicks = new Set();      // Karakter yang dipick Blue
let redPicks = new Set();       // Karakter yang dipick Red
// pickedChars GLOBAL DIHAPUS agar mirror match bisa terjadi

let univBanSet = new Set();
let blueBanSet = new Set();
let redBanSet = new Set();

let isUniversalMode = false;
let timeLeft = 30;
let timerInterval;

function init() {
    renderSlots();
    renderGrid(characters);
    // Overlay Start Game logic handle separately
}

function startGame() {
    document.body.classList.add('game-started');
    updateStatus();
    startTimer();
}

function startTimer() {
    clearInterval(timerInterval);
    timeLeft = 30;
    updateTimerDisplay();
    document.getElementById('timer-status').innerText = "RUNNING";
    document.getElementById('timer-status').style.color = "#44ff44";

    timerInterval = setInterval(() => {
        timeLeft--;
        updateTimerDisplay();
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            autoPickRandom();
        }
    }, 1000);
}

function updateTimerDisplay() {
    const timerEl = document.getElementById('timer');
    timerEl.textContent = timeLeft;
    if (timeLeft <= 10) timerEl.style.color = '#ff4444';
    else timerEl.style.color = 'white';
}

function autoPickRandom() {
    const currentPhase = draftFlow[currentStep];
    const available = characters.filter(c => 
        isCharAvailable(c.id, currentPhase.team, currentPhase.type)
    );

    if (available.length > 0) {
        const randomChar = available[Math.floor(Math.random() * available.length)];
        handleCharClick(randomChar);
    }
}

// --- LOGIKA UTAMA: MIRROR MATCH ALLOWED ---
function isCharAvailable(charId, team, phaseType) {
    // 1. Universal Ban berlaku untuk semua
    if (univBanSet.has(charId)) return false;

    if (phaseType === 'pick') {
        // Cek Ban Lawan
        if (team === 'blue' && redBanSet.has(charId)) return false;
        if (team === 'red' && blueBanSet.has(charId)) return false;

        // Cek Duplicate Tim Sendiri (Satu tim gaboleh 2 char sama)
        if (team === 'blue' && bluePicks.has(charId)) return false;
        if (team === 'red' && redPicks.has(charId)) return false;

        // CATATAN: Kita TIDAK mengecek tim lawan. 
        // Jadi kalau Red sudah pick Kafka, Blue MASIH BISA pick Kafka (Mirror).
        return true; 
    }

    if (phaseType === 'ban') {
        // Tidak bisa ban karakter yang SUDAH dipick siapapun (opsional, biasanya begitu)
        if (bluePicks.has(charId) || redPicks.has(charId)) return false;
        
        // Tidak bisa ban karakter yang sudah diban (Double ban useless)
        if (blueBanSet.has(charId) || redBanSet.has(charId)) return false;

        return true;
    }
    return false;
}

function handleCharClick(char) {
    if (isUniversalMode) {
        addUniversalBan(char);
        return;
    }
    
    if (currentStep >= draftFlow.length) return;

    const currentPhase = draftFlow[currentStep];

    if (!isCharAvailable(char.id, currentPhase.team, currentPhase.type)) {
        alert("Karakter tidak tersedia (Sudah dipick timmu, diban, atau slot penuh)!");
        return;
    }

    // EKSEKUSI
    if (currentPhase.type === 'ban') {
        if (currentPhase.team === 'blue') blueBanSet.add(char.id);
        else redBanSet.add(char.id);
        fillBanSlot(currentPhase.team, char);
    } else {
        // Masukkan ke set tim masing-masing
        if (currentPhase.team === 'blue') bluePicks.add(char.id);
        else redPicks.add(char.id);
        
        fillPickSlot(currentPhase.team, char);
    }

    currentStep++;
    renderGrid(characters);
    updateStatus();

    if (currentStep < draftFlow.length) {
        startTimer();
    } else {
        clearInterval(timerInterval);
        document.getElementById('timer').textContent = "GG";
        document.getElementById('timer-status').innerText = "FINISHED";
    }
}

// --- RENDER FUNCTIONS ---
function renderSlots() {
    const blueContainer = document.getElementById('blue-slots');
    const redContainer = document.getElementById('red-slots');
    const blueBans = document.getElementById('blue-bans');
    const redBans = document.getElementById('red-bans');
    const univContainer = document.getElementById('univ-ban-slots');

    univContainer.innerHTML = '';
    for(let i=0; i<4; i++) univContainer.innerHTML += `<div class="univ-ban-box" id="univ-slot-${i}" onclick="removeUnivBan(${i})"></div>`;

    blueContainer.innerHTML = '';
    redContainer.innerHTML = '';
    for(let i=0; i<4; i++) {
        blueContainer.innerHTML += `<div class="slot" id="blue-slot-${i}">Slot Kosong</div>`;
        redContainer.innerHTML += `<div class="slot" id="red-slot-${i}">Slot Kosong</div>`;
    }

    blueBans.innerHTML = '';
    redBans.innerHTML = '';
    for(let i=0; i<3; i++) {
        blueBans.innerHTML += `<div class="team-ban-slot" id="blue-ban-${i}"></div>`;
        redBans.innerHTML += `<div class="team-ban-slot" id="red-ban-${i}"></div>`;
    }
}
function renderGrid(chars) {
    const grid = document.getElementById('char-grid');
    grid.innerHTML = '';
    
    const currentPhase = currentStep < draftFlow.length ? draftFlow[currentStep] : null;
    const activeTeam = currentPhase ? currentPhase.team : null;
    const isPickPhase = currentPhase ? currentPhase.type === 'pick' : false;

    chars.forEach(char => {
        const el = document.createElement('div');
        el.className = 'char-card';
        el.id = `char-${char.id}`;
        
        // --- VISUAL LOGIC ---
        let isUnavailable = false;
        if (univBanSet.has(char.id)) isUnavailable = true;
        if (activeTeam === 'blue' && bluePicks.has(char.id)) isUnavailable = true;
        if (activeTeam === 'red' && redPicks.has(char.id)) isUnavailable = true;

        if (isPickPhase) {
            if (activeTeam === 'blue' && redBanSet.has(char.id)) isUnavailable = true;
            if (activeTeam === 'red' && blueBanSet.has(char.id)) isUnavailable = true;
        }

        if (isUnavailable) el.classList.add('picked');

        // Badge Visual
        let badge = '';
        if (blueBanSet.has(char.id)) badge += '<div style="position:absolute; top:0; left:0; background:blue; color:white; font-size:9px; padding:3px 6px; border-bottom-right-radius:5px; z-index:10;">BAN</div>';
        if (redBanSet.has(char.id)) badge += '<div style="position:absolute; top:0; right:0; background:red; color:white; font-size:9px; padding:3px 6px; border-bottom-left-radius:5px; z-index:10;">BAN</div>';
        
        if (bluePicks.has(char.id)) badge += '<div style="position:absolute; top:5px; right:5px; width:12px; height:12px; background:var(--blue-team); border-radius:50%; border:2px solid white; box-shadow:0 0 5px blue; z-index:10;"></div>';
        if (redPicks.has(char.id)) badge += '<div style="position:absolute; top:5px; left:5px; width:12px; height:12px; background:var(--red-team); border-radius:50%; border:2px solid white; box-shadow:0 0 5px red; z-index:10;"></div>';

        // --- UPDATE BAGIAN HTML INI ---
        // Saya menambahkan class "char-initial" dan memisahkan styling background
        el.innerHTML = `
            ${badge}
            <div class="char-initial" style="background:${char.color};">
                ${char.name.charAt(0)}
            </div>
            <div class="char-name">${char.name}</div>
        `;
        
        el.onclick = () => handleCharClick(char);
        grid.appendChild(el);
    });
}

// --- UPDATE FUNGSI WARNA BAN ---
function fillBanSlot(team, char) {
    for (let i = 0; i < 3; i++) {
        const slot = document.getElementById(`${team}-ban-${i}`);
        if (!slot.classList.contains('filled')) {
            slot.classList.add('filled');
            
            // LOGIKA WARNA: Ubah background slot jadi warna karakter
            slot.style.backgroundColor = char.color;
            slot.style.borderColor = char.color;
            slot.style.boxShadow = `0 0 10px ${char.color}`; // Efek glow
            
            slot.innerHTML = `<span class="ban-icon-text">${char.name.charAt(0)}</span>`;
            break;
        }
    }
}

function fillPickSlot(team, char) {
    for (let i = 0; i < 4; i++) {
        const slot = document.getElementById(`${team}-slot-${i}`);
        if (slot.innerHTML === "Slot Kosong") {
            slot.innerHTML = `
                <div style="width:30px; height:30px; border-radius:50%; background:${char.color}; margin-right:10px; border:2px solid white;"></div>
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

function toggleUniversalMode() {
    isUniversalMode = !isUniversalMode;
    const btn = document.getElementById('toggle-univ-btn');
    if (isUniversalMode) {
        clearInterval(timerInterval);
        document.getElementById('timer-status').innerText = "PAUSED";
        document.body.classList.add('universal-mode-active');
        btn.textContent = "MODE: ON";
        btn.classList.add('active');
    } else {
        startTimer();
        document.body.classList.remove('universal-mode-active');
        btn.textContent = "MODE: OFF";
        btn.classList.remove('active');
        renderGrid(characters);
    }
}

function addUniversalBan(char) {
    for(let i=0; i<4; i++) {
        const slot = document.getElementById(`univ-slot-${i}`);
        if (!slot.classList.contains('filled')) {
            slot.classList.add('filled');
            slot.innerHTML = `<div style="width:100%; height:100%; background:${char.color}; opacity:0.7;"></div>`;
            slot.dataset.charId = char.id;
            univBanSet.add(char.id);
            renderGrid(characters);
            break;
        }
    }
}

function removeUnivBan(index) {
    if (!isUniversalMode) return;
    const slot = document.getElementById(`univ-slot-${index}`);
    if (slot.classList.contains('filled')) {
        const charId = slot.dataset.charId;
        univBanSet.delete(charId);
        slot.classList.remove('filled');
        slot.innerHTML = '';
        slot.removeAttribute('data-char-id');
        renderGrid(characters);
    }
}

function filterChars(query) {
    const lowerQ = query.toLowerCase();
    const filtered = characters.filter(c => c.name.toLowerCase().includes(lowerQ));
    renderGrid(filtered);
}

init();