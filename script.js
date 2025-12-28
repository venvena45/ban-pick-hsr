// --- DATA KARAKTER LENGKAP (80+ Char + Element + Image + Sound) ---
const ELEMENT_COLORS = {
    Physical: '#9e9e9e', Fire: '#ff4d4d', Ice: '#4facfe', 
    Lightning: '#d580ff', Wind: '#5cdb95', Quantum: '#6a5acd', Imaginary: '#f1c40f'
};

const characters = [
    // 5 STAR (Full Image)
    { id: 'acheron', name: 'Acheron', path: 'Nihility', color: ELEMENT_COLORS.Lightning, img: 'https://static.wikia.nocookie.net/houkai-star-rail/images/2/24/Character_Acheron_Icon.png/revision/latest?cb=20240605043757' },
    { 
        id: 'aglaea', name: 'Aglaea', path: 'Remembrance', color: ELEMENT_COLORS.Lightning, 
        img: 'https://static.wikia.nocookie.net/houkai-star-rail/images/f/f8/Character_Aglaea_Icon.png/revision/latest?cb=20250101123357',
        sound: 'https://static.wikia.nocookie.net/houkai-star-rail/images/f/f1/VO_JA_Archive_Aglaea_Added_to_Team_With_%28Trailblazer%29_M.ogg/revision/latest?cb=20250205040801'
    },
    { id: 'anaxa', name: 'Anaxa', path: 'Erudition', color: ELEMENT_COLORS.Wind, img: 'https://static.wikia.nocookie.net/houkai-star-rail/images/f/f0/Character_Anaxa_Icon.png/revision/latest?cb=20250328124329' },
    { id: 'archer', name: 'Archer', path: 'The Hunt', color: ELEMENT_COLORS.Quantum, img: 'https://static.wikia.nocookie.net/houkai-star-rail/images/8/8f/Character_Archer_Icon.png/revision/latest?cb=20250620124531' },
    { id: 'argenti', name: 'Argenti', path: 'Erudition', color: ELEMENT_COLORS.Physical, img: 'https://static.wikia.nocookie.net/houkai-star-rail/images/c/c0/Character_Argenti_Icon.png/revision/latest?cb=20231209093828' },
    { id: 'aventurine', name: 'Aventurine', path: 'Preservation', color: ELEMENT_COLORS.Imaginary, img: 'https://static.wikia.nocookie.net/houkai-star-rail/images/d/da/Character_Aventurine_Icon.png/revision/latest?cb=20240327022115' },
    { id: 'bailu', name: 'Bailu', path: 'Abundance', color: ELEMENT_COLORS.Lightning, img: 'https://static.wikia.nocookie.net/houkai-star-rail/images/4/47/Character_Bailu_Icon.png/revision/latest?cb=20230723080553' },
    { id: 'blackswan', name: 'Black Swan', path: 'Nihility', color: ELEMENT_COLORS.Wind, img: 'https://static.wikia.nocookie.net/houkai-star-rail/images/9/90/Character_Black_Swan_Icon.png/revision/latest?cb=20240206104620' },
    { id: 'blade', name: 'Blade', path: 'Destruction', color: ELEMENT_COLORS.Wind, img: 'https://static.wikia.nocookie.net/houkai-star-rail/images/9/90/Character_Blade_Icon.png/revision/latest?cb=20230723080612' },
    { id: 'boothill', name: 'Boothill', path: 'The Hunt', color: ELEMENT_COLORS.Physical, img: 'https://static.wikia.nocookie.net/houkai-star-rail/images/7/78/Character_Boothill_Icon.png/revision/latest?cb=20240525031219' },
    { id: 'bronya', name: 'Bronya', path: 'Harmony', color: ELEMENT_COLORS.Wind, img: 'https://static.wikia.nocookie.net/houkai-star-rail/images/0/0f/Character_Bronya_Icon.png/revision/latest?cb=20230723080648' },
    { id: 'castorice', name: 'Castorice', path: 'Remembrance', color: ELEMENT_COLORS.Quantum, img: 'https://static.wikia.nocookie.net/houkai-star-rail/images/d/da/Character_Castorice_Icon.png/revision/latest?cb=20250328124417' },
    { id: 'cerydra', name: 'Cerydra', path: 'Harmony', color: ELEMENT_COLORS.Wind, img: 'https://static.wikia.nocookie.net/houkai-star-rail/images/c/c9/Character_Cerydra_Icon.png/revision/latest?cb=20250802130229' },
    { id: 'cipher', name: 'Cipher', path: 'Nihility', color: ELEMENT_COLORS.Quantum, img: 'https://static.wikia.nocookie.net/houkai-star-rail/images/9/99/Character_Cipher_Icon.png/revision/latest?cb=20250509121146' },
    { id: 'cyrene', name: 'Cyrene', path: 'Remembrance', color: ELEMENT_COLORS.Ice, img: 'https://static.wikia.nocookie.net/houkai-star-rail/images/9/99/Character_Cyrene_Icon.png/revision/latest?cb=20251024130639' },
    { id: 'dhil', name: 'Dan Heng IL', path: 'Destruction', color: ELEMENT_COLORS.Imaginary, img: 'https://static.wikia.nocookie.net/houkai-star-rail/images/2/2a/Character_Dan_Heng_%E2%80%A2_Imbibitor_Lunae_Icon.png/revision/latest?cb=20240326111321' },
    { id: 'dhpt', name: 'Dan Heng PT', path: 'Preservation', color: ELEMENT_COLORS.Physical, img: 'https://static.wikia.nocookie.net/houkai-star-rail/images/f/fc/Character_Dan_Heng_%E2%80%A2_Permansor_Terrae_Icon.png/revision/latest?cb=20250912121518' },
    { id: 'ratio', name: 'Dr. Ratio', path: 'The Hunt', color: ELEMENT_COLORS.Imaginary, img: 'https://static.wikia.nocookie.net/houkai-star-rail/images/4/47/Character_Dr._Ratio_Icon.png/revision/latest?cb=20231227130912' },
    { id: 'evernight', name: 'Evernight', path: 'Remembrance', color: ELEMENT_COLORS.Ice, img: 'https://static.wikia.nocookie.net/houkai-star-rail/images/b/b7/Character_Evernight_Icon.png/revision/latest?cb=20250912121500' },
    { id: 'feixiao', name: 'Feixiao', path: 'The Hunt', color: ELEMENT_COLORS.Wind, img: 'https://static.wikia.nocookie.net/houkai-star-rail/images/7/75/Character_Feixiao_Icon.png/revision/latest?cb=20240910182925' },
    { id: 'firefly', name: 'Firefly', path: 'Destruction', color: ELEMENT_COLORS.Fire, img: 'https://static.wikia.nocookie.net/houkai-star-rail/images/9/9e/Character_Firefly_Icon.png/revision/latest?cb=20240619072408' },
    { id: 'fuxuan', name: 'Fu Xuan', path: 'Preservation', color: ELEMENT_COLORS.Quantum, img: 'https://static.wikia.nocookie.net/houkai-star-rail/images/1/1a/Character_Fu_Xuan_Icon.png/revision/latest?cb=20230723080902' },
    { id: 'fugue', name: 'Fugue', path: 'Nihility', color: ELEMENT_COLORS.Fire, img: 'https://static.wikia.nocookie.net/houkai-star-rail/images/c/c0/Character_Fugue_Icon.png/revision/latest?cb=20241122131000' },
    { id: 'gepard', name: 'Gepard', path: 'Preservation', color: ELEMENT_COLORS.Ice, img: 'https://static.wikia.nocookie.net/houkai-star-rail/images/7/75/Character_Gepard_Icon.png/revision/latest?cb=20230723080948' },
    { id: 'himeko', name: 'Himeko', path: 'Erudition', color: ELEMENT_COLORS.Fire, img: 'https://static.wikia.nocookie.net/houkai-star-rail/images/0/00/Character_Himeko_Icon.png/revision/latest?cb=20230723081029' },
    { id: 'huohuo', name: 'Huohuo', path: 'Abundance', color: ELEMENT_COLORS.Wind, img: 'https://static.wikia.nocookie.net/houkai-star-rail/images/6/68/Character_Huohuo_Icon.png/revision/latest?cb=20231209094156' },
    { id: 'hyacine', name: 'Hyacine', path: 'Remembrance', color: ELEMENT_COLORS.Wind, img: 'https://static.wikia.nocookie.net/houkai-star-rail/images/c/c0/Character_Hyacine_Icon.png/revision/latest?cb=20250509121044' },
    { id: 'hysilens', name: 'Hysilens', path: 'Nihility', color: ELEMENT_COLORS.Physical, img: 'https://static.wikia.nocookie.net/houkai-star-rail/images/1/19/Character_Hysilens_Icon.png/revision/latest?cb=20250802130317' },
    { id: 'jade', name: 'Jade', path: 'Erudition', color: ELEMENT_COLORS.Quantum, img: 'https://static.wikia.nocookie.net/houkai-star-rail/images/f/fd/Character_Jade_Icon.png/revision/latest?cb=20240619072848' },
    { id: 'jiaoqiu', name: 'Jiaoqiu', path: 'Nihility', color: ELEMENT_COLORS.Fire, img: 'https://static.wikia.nocookie.net/houkai-star-rail/images/4/48/Character_Jiaoqiu_Icon.png/revision/latest?cb=20240910182738' },
    { id: 'jingyuan', name: 'Jing Yuan', path: 'Erudition', color: ELEMENT_COLORS.Lightning, img: 'https://static.wikia.nocookie.net/houkai-star-rail/images/8/88/Character_Jing_Yuan_Icon.png/revision/latest?cb=20230723081207' },
    { id: 'jingliu', name: 'Jingliu', path: 'Destruction', color: ELEMENT_COLORS.Ice, img: 'https://static.wikia.nocookie.net/houkai-star-rail/images/f/f9/Character_Jingliu_Icon.png/revision/latest?cb=20230723081213' },
    { id: 'kafka', name: 'Kafka', path: 'Nihility', color: ELEMENT_COLORS.Lightning, img: 'https://static.wikia.nocookie.net/houkai-star-rail/images/8/8c/Character_Kafka_Icon.png/revision/latest?cb=20230723081234' },
    { id: 'lingsha', name: 'Lingsha', path: 'Abundance', color: ELEMENT_COLORS.Fire, img: 'https://static.wikia.nocookie.net/houkai-star-rail/images/a/ab/Character_Lingsha_Icon.png/revision/latest?cb=20240719042259' },
    { id: 'luocha', name: 'Luocha', path: 'Abundance', color: ELEMENT_COLORS.Imaginary, img: 'https://static.wikia.nocookie.net/houkai-star-rail/images/2/20/Character_Luocha_Icon.png/revision/latest?cb=20230723081416' },
    { id: 'mydei', name: 'Mydei', path: 'Destruction', color: ELEMENT_COLORS.Imaginary, img: 'https://static.wikia.nocookie.net/houkai-star-rail/images/8/89/Character_Mydei_Icon.png/revision/latest?cb=20250214124624' },
    { id: 'phainon', name: 'Phainon', path: 'Destruction', color: ELEMENT_COLORS.Physical, img: 'https://static.wikia.nocookie.net/houkai-star-rail/images/e/ef/Character_Phainon_Icon.png/revision/latest?cb=20250620124711' },
    { id: 'rappa', name: 'Rappa', path: 'Erudition', color: ELEMENT_COLORS.Imaginary, img: 'https://static.wikia.nocookie.net/houkai-star-rail/images/8/84/Character_Rappa_Icon.png/revision/latest?cb=20240827130309' },
    { id: 'robin', name: 'Robin', path: 'Harmony', color: ELEMENT_COLORS.Physical, img: 'https://static.wikia.nocookie.net/houkai-star-rail/images/7/72/Character_Robin_Icon.png/revision/latest?cb=20240525031318' },
    { id: 'ruanmei', name: 'Ruan Mei', path: 'Harmony', color: ELEMENT_COLORS.Ice, img: 'https://static.wikia.nocookie.net/houkai-star-rail/images/1/16/Character_Ruan_Mei_Icon.png/revision/latest?cb=20231227130539' },
    { id: 'saber', name: 'Saber', path: 'Destruction', color: ELEMENT_COLORS.Wind, img: 'https://static.wikia.nocookie.net/houkai-star-rail/images/4/43/Character_Saber_Icon.png/revision/latest?cb=20250620124608' },
    { id: 'seele', name: 'Seele', path: 'The Hunt', color: ELEMENT_COLORS.Quantum, img: 'https://static.wikia.nocookie.net/houkai-star-rail/images/9/9a/Character_Seele_Icon.png/revision/latest?cb=20230723081718' },
    { id: 'silverwolf', name: 'Silver Wolf', path: 'Nihility', color: ELEMENT_COLORS.Quantum, img: 'https://static.wikia.nocookie.net/houkai-star-rail/images/a/a3/Character_Silver_Wolf_Icon.png/revision/latest?cb=20230723081754' },
    { id: 'sparkle', name: 'Sparkle', path: 'Harmony', color: ELEMENT_COLORS.Quantum, img: 'https://static.wikia.nocookie.net/houkai-star-rail/images/6/6b/Character_Sparkle_Icon.png/revision/latest?cb=20240326110835' },
    { id: 'sunday', name: 'Sunday', path: 'Harmony', color: ELEMENT_COLORS.Imaginary, img: 'https://static.wikia.nocookie.net/houkai-star-rail/images/3/38/Character_Sunday_Icon.png/revision/latest?cb=20241122130945' },
    { id: 'thedahlia', name: 'The Dahlia', path: 'Nihility', color: ELEMENT_COLORS.Fire, img: 'https://static.wikia.nocookie.net/houkai-star-rail/images/7/71/Character_The_Dahlia_Icon.png/revision/latest?cb=20251205121527' },
    { id: 'theherta', name: 'The Herta', path: 'Erudition', color: ELEMENT_COLORS.Ice, img: 'https://static.wikia.nocookie.net/houkai-star-rail/images/3/39/Character_The_Herta_Icon.png/revision/latest?cb=20250101123319' },
    { id: 'topaz', name: 'Topaz & Numby', path: 'The Hunt', color: ELEMENT_COLORS.Fire, img: 'https://static.wikia.nocookie.net/houkai-star-rail/images/8/89/Character_Topaz_%26_Numby_Icon.png/revision/latest?cb=20231030000030' },
    { id: 'tb_phys', name: 'MC (Physical)', path: 'Destruction', color: ELEMENT_COLORS.Physical, img: 'https://static.wikia.nocookie.net/houkai-star-rail/images/8/89/Character_Trailblazer_%28Destruction%29_Icon.png/revision/latest?cb=20240326135926' },
    { id: 'tb_fire', name: 'MC (Fire)', path: 'Preservation', color: ELEMENT_COLORS.Fire, img: 'https://static.wikia.nocookie.net/houkai-star-rail/images/c/c3/Character_Trailblazer_%28Preservation%29_Icon.png/revision/latest?cb=20240326131619' },
    { id: 'tb_imag', name: 'MC (Harmony)', path: 'Harmony', color: ELEMENT_COLORS.Imaginary, img: 'https://static.wikia.nocookie.net/houkai-star-rail/images/f/fd/Character_Trailblazer_%28Harmony%29_Icon.png/revision/latest?cb=20240525030520' },
    { id: 'tb_rem', name: 'MC (Remembrance)', path: 'Remembrance', color: ELEMENT_COLORS.Ice, img: 'https://static.wikia.nocookie.net/houkai-star-rail/images/4/43/Character_Trailblazer_%28Remembrance%29_Icon.png/revision/latest?cb=20241123044918' },
    { id: 'tribbie', name: 'Tribbie', path: 'Harmony', color: ELEMENT_COLORS.Quantum, img: 'https://static.wikia.nocookie.net/houkai-star-rail/images/f/f3/Character_Tribbie_Icon.png/revision/latest?cb=20250214124656' },
    { id: 'welt', name: 'Welt', path: 'Nihility', color: ELEMENT_COLORS.Imaginary, img: 'https://static.wikia.nocookie.net/houkai-star-rail/images/1/11/Character_Welt_Icon.png/revision/latest?cb=20230723082022' },
    { id: 'yanqing', name: 'Yanqing', path: 'The Hunt', color: ELEMENT_COLORS.Ice, img: 'https://static.wikia.nocookie.net/houkai-star-rail/images/5/57/Character_Yanqing_Icon.png/revision/latest?cb=20230723082139' },
    { id: 'yunli', name: 'Yunli', path: 'Destruction', color: ELEMENT_COLORS.Physical, img: 'https://static.wikia.nocookie.net/houkai-star-rail/images/4/43/Character_Yunli_Icon.png/revision/latest?cb=20240724122212' },
    
    // --- 4 STAR CHARACTERS ---
    { id: 'arlan', name: 'Arlan', path: 'Destruction', color: ELEMENT_COLORS.Lightning, img: 'https://static.wikia.nocookie.net/houkai-star-rail/images/a/a9/Character_Arlan_Icon.png/revision/latest?cb=20230723080444' },
    { id: 'asta', name: 'Asta', path: 'Harmony', color: ELEMENT_COLORS.Fire, img: 'https://static.wikia.nocookie.net/houkai-star-rail/images/9/9f/Character_Asta_Icon.png/revision/latest?cb=20230723080506' },
    { id: 'danheng', name: 'Dan Heng', path: 'The Hunt', color: ELEMENT_COLORS.Wind, img: 'https://static.wikia.nocookie.net/houkai-star-rail/images/1/1a/Character_Dan_Heng_Icon.png/revision/latest?cb=20230723080807' },
    { id: 'gallagher', name: 'Gallagher', path: 'Abundance', color: ELEMENT_COLORS.Fire, img: 'https://static.wikia.nocookie.net/houkai-star-rail/images/1/12/Character_Gallagher_Icon.png/revision/latest?cb=20240325014209' },
    { id: 'guinaifen', name: 'Guinaifen', path: 'Nihility', color: ELEMENT_COLORS.Fire, img: 'https://static.wikia.nocookie.net/houkai-star-rail/images/9/98/Character_Guinaifen_Icon.png/revision/latest?cb=20231030000303' },
    { id: 'hanya', name: 'Hanya', path: 'Harmony', color: ELEMENT_COLORS.Physical, img: 'https://static.wikia.nocookie.net/houkai-star-rail/images/9/99/Character_Hanya_Icon.png/revision/latest?cb=20231209094526' },
    { id: 'herta', name: 'Herta', path: 'Erudition', color: ELEMENT_COLORS.Ice, img: 'https://static.wikia.nocookie.net/houkai-star-rail/images/b/bf/Character_Herta_Icon.png/revision/latest?cb=20230723081012' },
    { id: 'hook', name: 'Hook', path: 'Destruction', color: ELEMENT_COLORS.Fire, img: 'https://static.wikia.nocookie.net/houkai-star-rail/images/d/d5/Character_Hook_Icon.png/revision/latest?cb=20230723081051' },
    { id: 'luka', name: 'Luka', path: 'Nihility', color: ELEMENT_COLORS.Physical, img: 'https://static.wikia.nocookie.net/houkai-star-rail/images/c/c7/Character_Luka_Icon.png/revision/latest?cb=20230723081255' },
    { id: 'lynx', name: 'Lynx', path: 'Abundance', color: ELEMENT_COLORS.Quantum, img: 'https://static.wikia.nocookie.net/houkai-star-rail/images/6/6c/Character_Lynx_Icon.png/revision/latest?cb=20231031113034' },
    { id: 'march7', name: 'March 7th', path: 'Preservation', color: ELEMENT_COLORS.Ice, img: 'https://static.wikia.nocookie.net/houkai-star-rail/images/d/d3/Character_March_7th_Icon.png/revision/latest?cb=20230723081458' },
    { id: 'march7hunt', name: 'March 7th (Hunt)', path: 'The Hunt', color: ELEMENT_COLORS.Imaginary, img: 'https://static.wikia.nocookie.net/houkai-star-rail/images/7/7b/Character_March_7th_%28The_Hunt%29_Icon.png/revision/latest?cb=20240724122845' },
    { id: 'misha', name: 'Misha', path: 'Destruction', color: ELEMENT_COLORS.Ice, img: 'https://static.wikia.nocookie.net/houkai-star-rail/images/4/4d/Character_Misha_Icon.png/revision/latest?cb=20240206104846' },
    { id: 'moze', name: 'Moze', path: 'The Hunt', color: ELEMENT_COLORS.Lightning, img: 'https://static.wikia.nocookie.net/houkai-star-rail/images/2/25/Character_Moze_Icon.png/revision/latest?cb=20240910183040' },
    { id: 'natasha', name: 'Natasha', path: 'Abundance', color: ELEMENT_COLORS.Physical, img: 'https://static.wikia.nocookie.net/houkai-star-rail/images/6/61/Character_Natasha_Icon.png/revision/latest?cb=20230723081534' },
    { id: 'pela', name: 'Pela', path: 'Nihility', color: ELEMENT_COLORS.Ice, img: 'https://static.wikia.nocookie.net/houkai-star-rail/images/c/c2/Character_Pela_Icon.png/revision/latest?cb=20230723081559' },
    { id: 'qingque', name: 'Qingque', path: 'Erudition', color: ELEMENT_COLORS.Quantum, img: 'https://static.wikia.nocookie.net/houkai-star-rail/images/2/2e/Character_Qingque_Icon.png/revision/latest?cb=20230723081644' },
    { id: 'sampo', name: 'Sampo', path: 'Nihility', color: ELEMENT_COLORS.Wind, img: 'https://static.wikia.nocookie.net/houkai-star-rail/images/5/53/Character_Sampo_Icon.png/revision/latest?cb=20230723081700' },
    { id: 'serval', name: 'Serval', path: 'Erudition', color: ELEMENT_COLORS.Lightning, img: 'https://static.wikia.nocookie.net/houkai-star-rail/images/7/7c/Character_Serval_Icon.png/revision/latest?cb=20230723081736' },
    { id: 'sushang', name: 'Sushang', path: 'The Hunt', color: ELEMENT_COLORS.Physical, img: 'https://static.wikia.nocookie.net/houkai-star-rail/images/9/97/Character_Sushang_Icon.png/revision/latest?cb=20230723081849' },
    { id: 'tingyun', name: 'Tingyun', path: 'Harmony', color: ELEMENT_COLORS.Lightning, img: 'https://static.wikia.nocookie.net/houkai-star-rail/images/4/4f/Character_Tingyun_Icon.png/revision/latest?cb=20230723081906' },
    { id: 'xueyi', name: 'Xueyi', path: 'Destruction', color: ELEMENT_COLORS.Quantum, img: 'https://static.wikia.nocookie.net/houkai-star-rail/images/2/23/Character_Xueyi_Icon.png/revision/latest?cb=20231227130429' },
    { id: 'yukong', name: 'Yukong', path: 'Harmony', color: ELEMENT_COLORS.Imaginary, img: 'https://static.wikia.nocookie.net/houkai-star-rail/images/3/32/Character_Yukong_Icon.png/revision/latest?cb=20230723082209' }
];

// --- FLOW DRAFT 2 PHASE (3 Node Per Phase) ---
const draftFlow = [
    // --- PHASE 1 ---
    { phase: 1, type: 'ban', team: 'blue', text: "P1 NODE 1: BLUE BAN" },
    { phase: 1, type: 'ban', team: 'red',  text: "P1 NODE 1: RED BAN" },
    { phase: 1, type: 'pick', team: 'blue', text: "P1 NODE 1: BLUE PICK" },
    { phase: 1, type: 'pick', team: 'red',  text: "P1 NODE 1: RED PICK" },
    { phase: 1, type: 'ban', team: 'blue', text: "P1 NODE 2: BLUE BAN" },
    { phase: 1, type: 'ban', team: 'red',  text: "P1 NODE 2: RED BAN" },
    { phase: 1, type: 'pick', team: 'red',  text: "P1 NODE 2: RED PICK (1/2)" },
    { phase: 1, type: 'pick', team: 'red',  text: "P1 NODE 2: RED PICK (2/2)" },
    { phase: 1, type: 'pick', team: 'blue', text: "P1 NODE 2: BLUE PICK (1/2)" },
    { phase: 1, type: 'pick', team: 'blue', text: "P1 NODE 2: BLUE PICK (2/2)" },
    { phase: 1, type: 'ban', team: 'blue', text: "P1 NODE 3: BLUE BAN" },
    { phase: 1, type: 'ban', team: 'red',  text: "P1 NODE 3: RED BAN" },
    { phase: 1, type: 'pick', team: 'blue', text: "P1 NODE 3: BLUE PICK" },
    { phase: 1, type: 'pick', team: 'red',  text: "P1 NODE 3: RED PICK" },

    // --- PHASE 2 ---
    { phase: 2, type: 'ban', team: 'blue', text: "P2 NODE 1: BLUE BAN" },
    { phase: 2, type: 'ban', team: 'red',  text: "P2 NODE 1: RED BAN" },
    { phase: 2, type: 'pick', team: 'blue', text: "P2 NODE 1: BLUE PICK" },
    { phase: 2, type: 'pick', team: 'red',  text: "P2 NODE 1: RED PICK" },
    { phase: 2, type: 'ban', team: 'blue', text: "P2 NODE 2: BLUE BAN" },
    { phase: 2, type: 'ban', team: 'red',  text: "P2 NODE 2: RED BAN" },
    { phase: 2, type: 'pick', team: 'red',  text: "P2 NODE 2: RED PICK (1/2)" },
    { phase: 2, type: 'pick', team: 'red',  text: "P2 NODE 2: RED PICK (2/2)" },
    { phase: 2, type: 'pick', team: 'blue', text: "P2 NODE 2: BLUE PICK (1/2)" },
    { phase: 2, type: 'pick', team: 'blue', text: "P2 NODE 2: BLUE PICK (2/2)" },
    { phase: 2, type: 'ban', team: 'blue', text: "P2 NODE 3: BLUE BAN" },
    { phase: 2, type: 'ban', team: 'red',  text: "P2 NODE 3: RED BAN" },
    { phase: 2, type: 'pick', team: 'blue', text: "P2 NODE 3: BLUE PICK" },
    { phase: 2, type: 'pick', team: 'red',  text: "P2 NODE 3: RED PICK" },
];

let currentStep = 0;
let bluePicks = []; 
let redPicks = [];
let blueBans = [];
let redBans = [];
let univBanSet = new Set();
let teamBlueName = "BLUE TEAM";
let teamRedName = "RED TEAM";

let isUniversalMode = false;
let timeLeft = 30;
let timerInterval;
let isPaused = true;

function init() { renderSlots(); renderGrid(characters); }

// --- SOUND FX ---
function playSound(type) {
    const sound = document.getElementById(`sfx-${type}`);
    if(sound) { sound.currentTime = 0; sound.play().catch(e=>console.log("Audio Error:",e)); }
}

function playCharSound(char, type) {
    if (type === 'ban') {
        playSound('ban');
    } else {
        if (char.sound) {
            const audio = new Audio(char.sound);
            audio.volume = 0.8; 
            audio.play().catch(e => console.log("Char Audio Error:", e));
        } else {
            playSound('click'); // Fallback click sound
        }
    }
}

// --- TIMER & GAME ---
function startGame() {
    // 1. Ambil nama dari input
    const bInput = document.getElementById('input-blue-name').value;
    const rInput = document.getElementById('input-red-name').value;

    // 2. Jika ada isinya, pakai input user. Jika kosong, pakai default.
    if (bInput.trim() !== "") teamBlueName = bInput.trim();
    else teamBlueName = "BLUE TEAM";

    if (rInput.trim() !== "") teamRedName = rInput.trim();
    else teamRedName = "RED TEAM";

    document.body.classList.add('game-started');
    renderSlots();
    updateStatus();
    isPaused = true; 
    timeLeft = 30;
    updateTimerDisplay();
    updateTimerStatus();
    runTimerLoop();
    playSound('click');
}

function runTimerLoop() {
    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        if (!isPaused) {
            timeLeft--;
            updateTimerDisplay();
            if (timeLeft <= 5 && timeLeft > 0) playSound('timer');
            if (timeLeft <= 0) {
                clearInterval(timerInterval);
                autoPickRandom();
            }
        }
    }, 1000);
}

function resetRoundTimer() {
    timeLeft = 30;
    updateTimerDisplay();
}

function togglePauseTimer() { isPaused = !isPaused; updateTimerStatus(); playSound('click'); }

function updateTimerStatus() { 
    const statusEl = document.getElementById('timer-status');
    const btn = document.getElementById('pause-btn');
    if (isPaused) {
        if (currentStep === 0 && timeLeft === 30) {
            btn.innerText = "START"; statusEl.innerText = "READY"; statusEl.style.color = "white"; btn.classList.add('paused');
        } else {
            statusEl.innerText = "PAUSED"; statusEl.style.color = "#ffcc00"; btn.innerText = "RESUME"; btn.classList.add('paused');
        }
    } else {
        statusEl.innerText = "RUNNING"; statusEl.style.color = "#44ff44"; btn.innerText = "PAUSE"; btn.classList.remove('paused');
    }
}

function updateTimerDisplay() {
    const timerEl = document.getElementById('timer');
    timerEl.textContent = timeLeft;
    timerEl.style.color = timeLeft <= 10 ? '#ff4444' : 'white';
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

// --- LOGIKA UTAMA (FIXED: PICK & BAN TERPISAH) ---
function isCharAvailable(charId, team, phaseType) {
    // 1. Cek Universal Ban (Selalu dilarang)
    if (univBanSet.has(charId)) return false;

    const currentPhase = draftFlow[currentStep] ? draftFlow[currentStep].phase : 1;

    // Filter Data Ban di Phase Ini
    const activeBlueBans = blueBans.filter(b => b.phase === currentPhase);
    const activeRedBans = redBans.filter(b => b.phase === currentPhase);
    
    // Cek apakah sudah diban tim sendiri?
    const isBannedByBlue = activeBlueBans.some(b => b.char.id === charId);
    const isBannedByRed = activeRedBans.some(b => b.char.id === charId);

    // Cek Ban Lawan (Untuk Pick)
    const isBannedByOpponent = (team === 'blue' && isBannedByRed) || (team === 'red' && isBannedByBlue);

    // Cek Pick Tim Sendiri (Global - Gaboleh pick 2x karakter sama)
    const isPickedByBlue = bluePicks.some(p => p.char.id === charId);
    const isPickedByRed = redPicks.some(p => p.char.id === charId);
    const isPickedBySelf = (team === 'blue' && isPickedByBlue) || (team === 'red' && isPickedByRed);

    // --- LOGIKA PICK ---
    if (phaseType === 'pick') {
        if (isBannedByOpponent) return false; // Gaboleh pick yang diban lawan
        if (isPickedBySelf) return false;     // Gaboleh pick yang sudah kita pick
        return true; 
    }

    // --- LOGIKA BAN ---
    if (phaseType === 'ban') {
        // PERBAIKAN DI SINI:
        // Kita HANYA melarang ban jika karakter itu SUDAH KITA BAN SENDIRI sebelumnya.
        if (team === 'blue' && isBannedByBlue) return false;
        if (team === 'red' && isBannedByRed) return false;

        // Kita MENGIZINKAN ban karakter yang sudah di-pick (oleh siapapun).
        // Kita MENGIZINKAN ban karakter yang sudah di-ban lawan (Double Ban).
        
        return true;
    }

    return false;
}

function handleCharClick(char) {
    if (isUniversalMode) { addUniversalBan(char); return; }
    if (isPaused) { alert("Silakan klik START/RESUME untuk melanjutkan."); return; }
    if (currentStep >= draftFlow.length) return;

    const curr = draftFlow[currentStep];

    if (!isCharAvailable(char.id, curr.team, curr.type)) {
        alert("Karakter tidak tersedia!");
        return;
    }

    const entry = { char: char, phase: curr.phase };

    if (curr.type === 'ban') {
        if (curr.team === 'blue') blueBans.push(entry); else redBans.push(entry);
        playCharSound(char, 'ban');
    } else {
        if (curr.team === 'blue') bluePicks.push(entry); else redPicks.push(entry);
        playCharSound(char, 'pick');
    }

    currentStep++;
    renderSlots(); 
    renderGrid(characters);
    updateStatus();

    if (currentStep < draftFlow.length) {
        resetRoundTimer();
    } else {
        clearInterval(timerInterval);
        document.getElementById('timer').textContent = "GG";
        document.getElementById('timer-status').innerText = "FINISHED";
        setTimeout(showFinalResult, 1000);
    }
}

// --- RENDER SYSTEM UPDATED ---

function renderSlots() {
    const currentPhase = currentStep < draftFlow.length ? draftFlow[currentStep].phase : 2;

    // --- UPDATE JUDUL MENGGUNAKAN NAMA KUSTOM ---
    document.getElementById('blue-title').textContent = `${teamBlueName} - PHASE ${currentPhase}`;
    document.getElementById('red-title').textContent = `${teamRedName} - PHASE ${currentPhase}`;
    
    // Update juga judul kotak kecil di atas (Top Dashboard)
    const p1BlueTitle = document.querySelector('.team-blue-p1 .p1-title');
    if(p1BlueTitle) p1BlueTitle.textContent = `${teamBlueName} - P1`;
    
    const p1RedTitle = document.querySelector('.team-red-p1 .p1-title');
    if(p1RedTitle) p1RedTitle.textContent = `${teamRedName} - P1`;

    // 1. Render Dashboard Atas
    renderPhase1Top('blue', currentPhase);
    renderPhase1Top('red', currentPhase);

    // 2. Render Panel Bawah (Tempat Drafting Utama)
    renderActiveSlots('blue', currentPhase);
    renderActiveSlots('red', currentPhase);

    // 3. Render Bans & Universal Bans
    renderActiveBans('blue', currentPhase);
    renderActiveBans('red', currentPhase);

    // Render Univ Ban List
    const univContainer = document.getElementById('univ-ban-slots');
    univContainer.innerHTML = '';
    let i = 0;
    univBanSet.forEach(id => {
        const char = characters.find(c => c.id === id);
        if(char) univContainer.innerHTML += createIcon(char, 40, true); 
        i++;
    });
    for(; i<4; i++) univContainer.innerHTML += `<div class="univ-ban-box" id="univ-${i}" onclick="removeUnivBan('${i}')"></div>`;
}

function renderPhase1Top(team, currentPhase) {
    const container = document.getElementById(`${team}-p1-display`);
    container.innerHTML = '';
    
    // Jika masih Phase 1, kotak atas biarkan kosong (placeholder saja)
    if (currentPhase === 1) {
        for(let i=0; i<4; i++) container.innerHTML += `<div class="p1-slot"></div>`;
        return;
    }

    // Jika sudah Phase 2 (atau selesai), isi dengan data Phase 1
    const picks = team === 'blue' ? bluePicks : redPicks;
    const p1Picks = picks.filter(p => p.phase === 1); 

    for (let i = 0; i < 4; i++) {
        if (i < p1Picks.length) {
            const char = p1Picks[i].char;
            container.innerHTML += `
                <div class="p1-slot" style="border-color:${char.color}">
                    ${createIcon(char, '100%')}
                </div>`;
        } else {
            container.innerHTML += `<div class="p1-slot"></div>`;
        }
    }
}

function renderActiveSlots(team, currentPhase) {
    const container = document.getElementById(`${team}-active-slots`);
    container.innerHTML = '';
    
    const picks = team === 'blue' ? bluePicks : redPicks;
    const activePicks = picks.filter(p => p.phase === currentPhase);

    // Cek langkah terakhir untuk fitur Undo
    const lastStepIndex = currentStep - 1;
    const lastAction = currentStep > 0 ? draftFlow[lastStepIndex] : null;

    for(let i=0; i<4; i++) {
        if (i < activePicks.length) {
            const char = activePicks[i].char;
            
            let isUndoable = false;
            if (lastAction && lastAction.type === 'pick' && lastAction.team === team && i === activePicks.length - 1) {
                isUndoable = true;
            }

            const undoAttr = isUndoable ? `onclick="triggerUndo()" style="cursor:pointer; border-color:${char.color}; background:rgba(255,255,255,0.1); box-shadow: 0 0 10px red;" title="Klik untuk Undo"` : `style="border-color:${char.color}; background:rgba(255,255,255,0.1);"`;

            container.innerHTML += `<div class="slot filled" ${undoAttr}>${createIcon(char, 40)}<span>${char.name}</span></div>`;
        } else {
            const text = currentPhase === 1 ? "CHAR KOMPE P1" : "CHAR KOMPE P2";
            container.innerHTML += `<div class="slot">${text}</div>`;
        }
    }
}

function renderActiveBans(team, currentPhase) {
    // Update Judul
    const banLabel = document.getElementById(`${team}-ban-label`);
    if (banLabel) banLabel.textContent = `BANS (PHASE ${currentPhase})`;

    const container = document.getElementById(`${team}-active-bans`);
    container.innerHTML = '';
    
    const bans = team === 'blue' ? blueBans : redBans;
    const currentBans = bans.filter(b => b.phase === currentPhase);
    
    const lastStepIndex = currentStep - 1;
    const lastAction = currentStep > 0 ? draftFlow[lastStepIndex] : null;

    currentBans.forEach((b, index) => {
        let isUndoable = false;
        if (lastAction && lastAction.type === 'ban' && lastAction.team === team && index === currentBans.length - 1) {
            isUndoable = true;
        }

        const undoAttr = isUndoable ? `onclick="triggerUndo()" style="cursor:pointer; border-color:${b.char.color}; background:${b.char.color}; box-shadow: 0 0 10px red;" title="Klik untuk Undo"` : `style="border-color:${b.char.color}; background:${b.char.color};"`;

        container.innerHTML += `<div class="team-ban-slot filled" ${undoAttr}>${createIcon(b.char, '100%')}</div>`;
    });
    
    const emptySlots = 3 - currentBans.length;
    for(let i=0; i < emptySlots; i++) {
        container.innerHTML += `<div class="team-ban-slot"></div>`;
    }
}

function createIcon(char, size) {
    const imgUrl = char.img ? `https://wsrv.nl/?url=${encodeURIComponent(char.img)}` : '';
    const style = typeof size === 'string' ? `width:${size};height:${size}` : `width:${size}px;height:${size}px`;
    if (char.img) return `<img src="${imgUrl}" style="${style}; object-fit:cover; display:block;">`;
    return `<div style="${style}; background:${char.color}; display:flex; justify-content:center; align-items:center; font-weight:bold;">${char.name.charAt(0)}</div>`;
}

function renderGrid(chars) {
    const grid = document.getElementById('char-grid');
    grid.innerHTML = '';
    const curr = currentStep < draftFlow.length ? draftFlow[currentStep] : null;
    
    const activeTeam = curr ? curr.team : null;
    const isPick = curr ? curr.type === 'pick' : false;
    const currentPhase = curr ? curr.phase : 1;

    const activeBlueBans = blueBans.filter(b => b.phase === currentPhase);
    const activeRedBans = redBans.filter(b => b.phase === currentPhase);

    chars.forEach(char => {
        const el = document.createElement('div');
        el.className = 'char-card';
        
        let isUnavailable = false;
        let isGreyedOut = false;

        if (univBanSet.has(char.id)) { isUnavailable = true; isGreyedOut = true; }

        const pickedBlue = bluePicks.some(p => p.char.id === char.id);
        const pickedRed = redPicks.some(p => p.char.id === char.id);
        
        if (isPick) {
            if (activeTeam === 'blue' && pickedBlue) {
                isUnavailable = true;
                isGreyedOut = true;
            }
            if (activeTeam === 'red' && pickedRed) {
                isUnavailable = true;
                isGreyedOut = true;
            }
        }

        const bannedBlueNow = activeBlueBans.some(b => b.char.id === char.id);
        const bannedRedNow = activeRedBans.some(b => b.char.id === char.id);

        if (isPick) {
            if (activeTeam === 'blue' && bannedRedNow) { isUnavailable = true; el.classList.add('banned-opponent'); isGreyedOut = true; }
            if (activeTeam === 'red' && bannedBlueNow) { isUnavailable = true; el.classList.add('banned-opponent'); isGreyedOut = true; }
        }

        if (isGreyedOut) el.classList.add('picked');

        let badge = '';
        if (bannedBlueNow) badge += '<span style="position:absolute;top:0;left:0;background:blue;font-size:8px;padding:2px;z-index:2;">BAN P'+currentPhase+'</span>';
        if (bannedRedNow) badge += '<span style="position:absolute;top:0;right:0;background:red;font-size:8px;padding:2px;z-index:2;">BAN P'+currentPhase+'</span>';
        
        if (pickedBlue) badge += '<span style="position:absolute;bottom:20px;left:0;background:blue;width:10px;height:10px;border-radius:50%;border:1px solid white;z-index:2;"></span>';
        if (pickedRed) badge += '<span style="position:absolute;bottom:20px;right:0;background:red;width:10px;height:10px;border-radius:50%;border:1px solid white;z-index:2;"></span>';

        const imgUrl = char.img ? `https://wsrv.nl/?url=${encodeURIComponent(char.img)}` : `images/${char.id}.jpg`;
        
        el.innerHTML = `
            ${badge}
            <img src="${imgUrl}" class="char-img" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
            <div class="char-initial" style="background:${char.color};display:none">${char.name.charAt(0)}</div>
            <div class="char-name">${char.name}</div>
        `;
        el.onclick = () => handleCharClick(char);
        grid.appendChild(el);
    });
}

function updateStatus() {
    const bar = document.getElementById('status-bar');
    const bluePanel = document.getElementById('blue-panel');
    const redPanel = document.getElementById('red-panel');
    bluePanel.classList.remove('active-turn');
    redPanel.classList.remove('active-turn');

    if (currentStep >= draftFlow.length) {
        bar.textContent = "SELESAI"; bar.style.backgroundColor = "#d4b168"; return;
    }
    const curr = draftFlow[currentStep];
    
    // --- GANTI TEKS STATUS BAR SECARA DINAMIS ---
    let displayText = curr.text;
    displayText = displayText.replace('BLUE', teamBlueName.toUpperCase());
    displayText = displayText.replace('RED', teamRedName.toUpperCase());
    
    bar.textContent = displayText;

    bar.style.backgroundColor = curr.team === 'blue' ? 'var(--blue-team)' : 'var(--red-team)';
    
    if (curr.team === 'blue') bluePanel.classList.add('active-turn');
    else redPanel.classList.add('active-turn');
}

function toggleUniversalMode() {
    isUniversalMode = !isUniversalMode;
    const btn = document.getElementById('toggle-univ-btn');
    if(isUniversalMode) {
        isPaused = true; updateTimerStatus();
        document.body.classList.add('universal-mode-active');
        btn.innerText = "ON"; btn.style.background = "red";
    } else {
        document.body.classList.remove('universal-mode-active');
        btn.innerText = "OFF"; btn.style.background = "#333";
        renderGrid(characters);
    }
}

function addUniversalBan(char) {
    if(!univBanSet.has(char.id)){
        univBanSet.add(char.id);
        renderSlots(); renderGrid(characters);
        playSound('ban');
    }
}

function removeUnivBan(index) { alert("Tidak bisa dihapus."); }

function filterChars(val) {
    const filtered = characters.filter(c => c.name.toLowerCase().includes(val.toLowerCase()));
    renderGrid(filtered);
}

function showFinalResult() {
    const overlay = document.getElementById('result-overlay');
    const blueP1Cont = document.getElementById('final-blue-p1');
    const blueP2Cont = document.getElementById('final-blue-p2');
    const redP1Cont = document.getElementById('final-red-p1');
    const redP2Cont = document.getElementById('final-red-p2');
    const banContainer = document.getElementById('final-bans');

    // Update Judul di Overlay Result
    document.querySelector('.result-team-box.blue h2').textContent = teamBlueName;
    document.querySelector('.result-team-box.red h2').textContent = teamRedName;

    overlay.style.display = 'flex';

    const renderCard = (char) => {
        const imgUrl = char.img ? `https://wsrv.nl/?url=${encodeURIComponent(char.img)}` : '';
        return `
            <div class="result-card" style="border-color:${char.color}">
                <img src="${imgUrl}" onerror="this.style.display='none'">
                <div style="width:100%;height:100%;background:${char.color};display:${char.img?'none':'flex'};justify-content:center;align-items:center;font-weight:bold;">${char.name.charAt(0)}</div>
                <div class="name">${char.name}</div>
            </div>
        `;
    };

    blueP1Cont.innerHTML = ''; blueP2Cont.innerHTML = '';
    bluePicks.filter(p => p.phase === 1).forEach(p => blueP1Cont.innerHTML += renderCard(p.char));
    bluePicks.filter(p => p.phase === 2).forEach(p => blueP2Cont.innerHTML += renderCard(p.char));

    redP1Cont.innerHTML = ''; redP2Cont.innerHTML = '';
    redPicks.filter(p => p.phase === 1).forEach(p => redP1Cont.innerHTML += renderCard(p.char));
    redPicks.filter(p => p.phase === 2).forEach(p => redP2Cont.innerHTML += renderCard(p.char));

    banContainer.innerHTML = '';
    [...blueBans, ...redBans].forEach(b => {
        const imgUrl = b.char.img ? `https://wsrv.nl/?url=${encodeURIComponent(b.char.img)}` : '';
        banContainer.innerHTML += `
            <div class="result-ban-item" title="Banned Phase ${b.phase}">
                <img src="${imgUrl}">
                <div style="width:100%;height:100%;background:${b.char.color};display:${b.char.img?'none':'block'}"></div>
            </div>
        `;
    });
}

function resetDraft() {
    if (!confirm("Ulangi draft dari awal? (Data saat ini akan dihapus)")) {
        return;
    }

    clearInterval(timerInterval); 
    isPaused = true;

    currentStep = 0;
    bluePicks = [];
    redPicks = [];
    blueBans = [];
    redBans = [];
    univBanSet.clear();

    teamBlueName = "BLUE TEAM";
    teamRedName = "RED TEAM";
    document.getElementById('input-blue-name').value = "";
    document.getElementById('input-red-name').value = "";
    
    isUniversalMode = false;
    timeLeft = 30;

    const univBtn = document.getElementById('toggle-univ-btn');
    if (univBtn) {
        univBtn.textContent = "OFF";
        univBtn.classList.remove('active');
        document.body.classList.remove('universal-mode-active');
    }

    const statusEl = document.getElementById('timer-status');
    const pauseBtn = document.getElementById('pause-btn');
    
    pauseBtn.innerText = "START";
    pauseBtn.classList.add('paused'); 
    
    statusEl.innerText = "READY";
    statusEl.style.color = "white";
    
    updateTimerDisplay();

    const overlay = document.getElementById('result-overlay');
    if (overlay) overlay.style.display = 'none';

    renderSlots();
    renderGrid(characters);
    updateStatus();

    runTimerLoop(); 
}

function downloadScreenshot() {
    const element = document.getElementById('capture-area');
    
    // Tambahkan konfigurasi useCORS: true
    html2canvas(element, { 
        useCORS: true,       
        allowTaint: true,    
        backgroundColor: '#1d1e26',
        scale: 2             
    }).then(canvas => {
        const link = document.createElement('a');
        link.download = `HSR_Draft_Result_${Date.now()}.png`;
        link.href = canvas.toDataURL("image/png");
        link.click();
    }).catch(err => {
        console.error("Gagal mengambil screenshot:", err);
        alert("Gagal menyimpan gambar. Cek console log.");
    });
}

function triggerUndo() {
    if (currentStep <= 0) {
        const btn = document.getElementById('undo-btn');
        btn.style.transform = "translateX(5px)";
        setTimeout(() => btn.style.transform = "translateX(0)", 100);
        return; 
    }

    undoLastMove();
}

function undoLastMove() {
    if (currentStep === 0) return;

    currentStep--;
    const lastAction = draftFlow[currentStep];

    if (lastAction.type === 'pick') {
        if (lastAction.team === 'blue') bluePicks.pop();
        else redPicks.pop();
    } else {
        if (lastAction.team === 'blue') blueBans.pop();
        else redBans.pop();
    }

    clearInterval(timerInterval); 
    timeLeft = 30; 
    isPaused = true; 
    
    updateTimerDisplay();
    updateTimerStatus(); 
    
    renderSlots();
    renderGrid(characters);
    updateStatus();

    playSound('click'); 

    runTimerLoop(); 
}

// --- UPDATE FUNGSI RESULT & DOWNLOAD ---

function showFinalResult() {
    const overlay = document.getElementById('result-overlay');
    const resultContent = document.getElementById('capture-area'); // Target div konten
    
    // 1. Render Kartu Pick
    const renderCard = (char) => {
        const imgUrl = char.img ? `https://wsrv.nl/?url=${encodeURIComponent(char.img)}` : '';
        return `
            <div class="result-card" style="border-color:${char.color}">
                <img src="${imgUrl}" onerror="this.style.display='none'">
                <div style="width:100%;height:100%;background:${char.color};display:${char.img?'none':'flex'};justify-content:center;align-items:center;font-weight:bold;">${char.name.charAt(0)}</div>
                <div class="name">${char.name}</div>
            </div>
        `;
    };

    // 2. Render Kartu Ban
    const renderBans = (bans) => {
        let html = '';
        bans.forEach(b => {
            const imgUrl = b.char.img ? `https://wsrv.nl/?url=${encodeURIComponent(b.char.img)}` : '';
            html += `
                <div class="result-ban-item" title="Banned Phase ${b.phase}">
                    <img src="${imgUrl}">
                    <div style="width:100%;height:100%;background:${b.char.color};display:${b.char.img?'none':'block'}"></div>
                </div>
            `;
        });
        return html || '<span style="font-size:0.7rem; color:#555;">No Bans</span>';
    };

    // 3. Siapkan Data HTML Per Tim
    const blueP1 = bluePicks.filter(p => p.phase === 1).map(p => renderCard(p.char)).join('');
    const blueP2 = bluePicks.filter(p => p.phase === 2).map(p => renderCard(p.char)).join('');
    const blueBansHTML = renderBans(blueBans);

    const redP1 = redPicks.filter(p => p.phase === 1).map(p => renderCard(p.char)).join('');
    const redP2 = redPicks.filter(p => p.phase === 2).map(p => renderCard(p.char)).join('');
    const redBansHTML = renderBans(redBans);

    // 4. INJECT HTML BARU (Overwrites existing structure)
    // Kita memasukkan Ban ke dalam kotak tim masing-masing agar ikut ter-screenshot
    resultContent.innerHTML = `
        <h1 style="color: var(--gold); margin-bottom: 20px; text-shadow: 0 0 10px var(--gold);">TIM SABUNG HSR</h1>
        
        <div class="result-container">
            <div class="result-team-box blue" id="result-box-blue" style="padding:15px; border-radius:10px; border:1px solid var(--blue-team);">
                <h2 style="color: var(--blue-team); border-bottom: 1px solid #444; padding-bottom:5px; margin-top:0;">${teamBlueName}</h2>
                
                <div class="result-phase-block">
                    <span class="res-phase-label">PHASE 1</span>
                    <div class="result-grid">${blueP1}</div>
                </div>
                
                <div class="result-phase-block" style="margin-top:10px;">
                    <span class="res-phase-label">PHASE 2</span>
                    <div class="result-grid">${blueP2}</div>
                </div>

                <div class="internal-bans">
                    <h4>Banned Characters</h4>
                    <div class="ban-row">${blueBansHTML}</div>
                </div>
            </div>

            <div class="result-team-box red" id="result-box-red" style="padding:15px; border-radius:10px; border:1px solid var(--red-team);">
                <h2 style="color: var(--red-team); border-bottom: 1px solid #444; padding-bottom:5px; margin-top:0;">${teamRedName}</h2>
                
                <div class="result-phase-block">
                    <span class="res-phase-label">PHASE 1</span>
                    <div class="result-grid">${redP1}</div>
                </div>
                
                <div class="result-phase-block" style="margin-top:10px;">
                    <span class="res-phase-label">PHASE 2</span>
                    <div class="result-grid">${redP2}</div>
                </div>

                <div class="internal-bans">
                    <h4>Banned Characters</h4>
                    <div class="ban-row">${redBansHTML}</div>
                </div>
            </div>
        </div>

        <div class="download-actions">
            <button class="result-btn btn-blue" onclick="downloadTeam('blue')">
                ⬇ ${teamBlueName}
            </button>
            <button class="result-btn btn-red" onclick="downloadTeam('red')">
                ⬇ ${teamRedName}
            </button>
        </div>

        <button onclick="resetDraft()" class="result-btn btn-reset">ULANGI DRAFT</button>
        
        <div style="margin-top: 15px; font-size: 0.8rem; color: #666;">
            Contact Support: <strong style="color:#7289da">venvena</strong>
        </div>
    `;

    overlay.style.display = 'flex';
}

// Fungsi Download Per Tim
function downloadTeam(team) {
    const elementId = team === 'blue' ? 'result-box-blue' : 'result-box-red';
    const element = document.getElementById(elementId);
    
    if (!element) return;

    // Tentukan nama file
    const teamName = team === 'blue' ? teamBlueName : teamRedName;
    const cleanName = teamName.replace(/[^a-zA-Z0-9]/g, '_'); // Bersihkan karakter aneh
    const fileName = `HSR_Draft_${cleanName}_${Date.now()}.png`;

    html2canvas(element, { 
        useCORS: true,       
        allowTaint: true,    
        backgroundColor: '#1d1e26', // Warna background gambar (dark theme)
        scale: 2, // Resolusi lebih tinggi
        logging: false
    }).then(canvas => {
        const link = document.createElement('a');
        link.download = fileName;
        link.href = canvas.toDataURL("image/png");
        link.click();
    }).catch(err => {
        console.error("Gagal screenshot:", err);
        alert("Gagal menyimpan gambar.");
    });
}
init();