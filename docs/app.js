/* ============================================
   БРАТВА FC Mobile — Notebook Engine
   Slide animations, sketchy charts, hand-drawn UI
   ============================================ */

const I18N = {
  en: {
    dir: 'ltr',
    league_record: 'League Overview',
    wins: 'Wins',
    draws: 'Draws',
    losses: 'Losses',
    recent_tournament: 'Recent Tournament',
    totw_spotlight: 'MVPs',
    top_performers: 'Top Scorers',
    flagged_players: 'Flagged Review',
    tournament_history: 'Tournament History',
    player: 'Player',
    goals: 'G',
    matches: 'T',
    avg_goals: 'Avg',
    search_placeholder: 'Search player...',
    all_time: 'All Time',
    window_7d: '7 Days',
    window_30d: '30 Days',
    nav_dash: 'Dash',
    nav_tournaments: 'Tournaments',
    nav_roster: 'Roster',
    nav_leaderboard: 'Stats',
    loading: 'Loading notes...',
    performance_chart: '7-Day Trend',
    click_point_hint: '(Tap a point for details)',
    turns_completed: 'turns',
    verdict_needs_work: 'Needs work',
    verdict_acceptable: 'Acceptable',
    verdict_good: 'Good',
    verdict_perfect: 'Perfect',
    verdict_champion: 'Champion',
    verdict_legendary: 'Legendary',
    verdict_absent: 'Absent/Skipped',
    verdict_no_tournament: 'No tournament today',
    eligibility_ok: 'Eligible (0 Fails)',
    eligibility_warn: 'Warning ({n} Fails)',
    eligibility_flagged: 'FLAGGED (3 Fails!)'
  },
  ar: {
    dir: 'rtl',
    league_record: 'نظرة عامة',
    wins: 'فوز',
    draws: 'تعادل',
    losses: 'خسارة',
    recent_tournament: 'آخر مباراة',
    totw_spotlight: 'أفضل اللاعبين',
    top_performers: 'الهدافين',
    flagged_players: 'مراجعة',
    tournament_history: 'سجل المباريات',
    player: 'اللاعب',
    goals: 'أهداف',
    matches: 'م',
    avg_goals: 'معدل',
    search_placeholder: 'بحث...',
    all_time: 'الكل',
    window_7d: '7 أيام',
    window_30d: '30 يوم',
    nav_dash: 'الرئيسية',
    nav_tournaments: 'مباريات',
    nav_roster: 'تشكيلة',
    nav_leaderboard: 'إحصائيات',
    loading: 'جاري التحميل...',
    performance_chart: 'أداء 7 أيام',
    click_point_hint: '(انقر للتفاصيل)',
    turns_completed: 'محاولات',
    verdict_needs_work: 'ضعيف',
    verdict_acceptable: 'مقبول',
    verdict_good: 'جيد',
    verdict_perfect: 'مثالي',
    verdict_champion: 'بطل',
    verdict_legendary: 'أسطوري',
    verdict_absent: 'غائب',
    verdict_no_tournament: 'لا توجد بطولة',
    eligibility_ok: 'مؤهل (0 فشل)',
    eligibility_warn: 'تحذير ({n} فشل)',
    eligibility_flagged: 'مراجعة (3 فشل!)'
  },
  ru: {
    dir: 'ltr',
    league_record: 'Обзор Лиги',
    wins: 'Победы',
    draws: 'Ничьи',
    losses: 'Поражения',
    recent_tournament: 'Последний матч',
    totw_spotlight: 'Лучшие',
    top_performers: 'Бомбардиры',
    flagged_players: 'Проверка',
    tournament_history: 'История матчей',
    player: 'Игрок',
    goals: 'Г',
    matches: 'М',
    avg_goals: 'Ср.',
    search_placeholder: 'Поиск...',
    all_time: 'Всё время',
    window_7d: '7 дней',
    window_30d: '30 дней',
    nav_dash: 'Главная',
    nav_tournaments: 'Матчи',
    nav_roster: 'Состав',
    nav_leaderboard: 'Стата',
    loading: 'Загрузка...',
    performance_chart: 'Форма 7 дней',
    click_point_hint: '(Жми на точку)',
    turns_completed: 'ходов',
    verdict_needs_work: 'Слабо',
    verdict_acceptable: 'Приемлемо',
    verdict_good: 'Хорошо',
    verdict_perfect: 'Идеально',
    verdict_champion: 'Чемпион',
    verdict_legendary: 'Легенда',
    verdict_absent: 'Пропуск',
    verdict_no_tournament: 'Нет турнира',
    eligibility_ok: 'Допущен (0 провалов)',
    eligibility_warn: 'Внимание ({n} пров.)',
    eligibility_flagged: 'БАН? (3 провала!)'
  },
  es: {
    dir: 'ltr',
    league_record: 'Resumen',
    wins: 'Vic',
    draws: 'Emp',
    losses: 'Der',
    recent_tournament: 'Último Partido',
    totw_spotlight: 'Destacados',
    top_performers: 'Goleadores',
    flagged_players: 'En Revisión',
    tournament_history: 'Historial',
    player: 'Jugador',
    goals: 'Goles',
    matches: 'P',
    avg_goals: 'Prom',
    search_placeholder: 'Buscar...',
    all_time: 'Todo',
    window_7d: '7 Días',
    window_30d: '30 Días',
    nav_dash: 'Inicio',
    nav_tournaments: 'Partidos',
    nav_roster: 'Plantilla',
    nav_leaderboard: 'Stats',
    loading: 'Cargando...',
    performance_chart: 'Rendimiento 7d',
    click_point_hint: '(Toca un punto)',
    turns_completed: 'turnos',
    verdict_needs_work: 'Bajo',
    verdict_acceptable: 'Aceptable',
    verdict_good: 'Bueno',
    verdict_perfect: 'Perfecto',
    verdict_champion: 'Campeón',
    verdict_legendary: 'Legendario',
    verdict_absent: 'Ausente',
    verdict_no_tournament: 'Sin torneo',
    eligibility_ok: 'Elegible (0 fallos)',
    eligibility_warn: 'Aviso ({n} fallos)',
    eligibility_flagged: 'REVISIÓN (3 fallos!)'
  }
};

const DATA_PATHS = ['./league-data', '../league-data', 'league-data'];
let activePath = './league-data';

// --- Sound Manager (Web Audio API) ---
const SoundManager = {
  ctx: null,
  init() {
    if (!this.ctx) {
      this.ctx = new (window.AudioContext || window.webkitAudioContext)();
    }
  },
  playClick() {
    if (!this.ctx) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    
    // Mature, premium UI "tick" (Subtle, short, and muted)
    osc.type = 'sine';
    osc.frequency.setValueAtTime(600, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(300, this.ctx.currentTime + 0.01);
    
    // Incredibly short envelope (15ms)
    gain.gain.setValueAtTime(0, this.ctx.currentTime);
    gain.gain.linearRampToValueAtTime(0.04, this.ctx.currentTime + 0.002);
    gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.015);
    
    osc.start();
    osc.stop(this.ctx.currentTime + 0.015);
  }
};

// --- Audio Manager (Background Music & Flag Flapping) ---
const AudioManager = {
  bgMusic: null,
  flagSound: null,
  isMuted: localStorage.getItem('fcm_audio_muted') === 'true',
  initialized: false,

  init() {
    if (this.initialized) return;
    this.initialized = true;

    try {
      this.bgMusic = new Audio('assets/vaitsez-game-game-music-574073.mp3');
      this.bgMusic.loop = true;
      this.bgMusic.volume = 0.15; // Low background volume

      this.flagSound = new Audio('assets/Flag Flapping Sound Effect (128kbit_AAC).m4a');
      this.flagSound.loop = true;
      this.flagSound.volume = 0.25; // Loop flag flapping

      if (!this.isMuted) {
        this.play();
      }
    } catch (e) {
      console.warn('Audio init error:', e);
    }
    this.updateUI();
  },

  play() {
    this.isMuted = false;
    localStorage.setItem('fcm_audio_muted', 'false');
    if (this.bgMusic) this.bgMusic.play().catch(() => {});
    if (this.flagSound) this.flagSound.play().catch(() => {});
    this.updateUI();
  },

  pause() {
    this.isMuted = true;
    localStorage.setItem('fcm_audio_muted', 'true');
    if (this.bgMusic) this.bgMusic.pause();
    if (this.flagSound) this.flagSound.pause();
    this.updateUI();
  },

  toggle() {
    if (!this.initialized) {
      this.init();
      return;
    }
    if (this.isMuted) {
      this.play();
    } else {
      this.pause();
    }
  },

  updateUI() {
    const btn = document.getElementById('audio-toggle-btn');
    if (btn) {
      const soundOnSVG = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg>`;
      const soundMutedSVG = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><line x1="23" y1="9" x2="17" y2="15"></line><line x1="17" y1="9" x2="23" y2="15"></line></svg>`;
      btn.innerHTML = this.isMuted ? soundMutedSVG : soundOnSVG;
      btn.classList.toggle('muted', this.isMuted);
    }
  }
};

// --- 3D Fabric Flag Animation with Three.js ---
const Flag3DManager = {
  // Background 3D Flag
  bgRenderer: null,
  bgScene: null,
  bgCamera: null,
  bgMesh: null,
  bgPosAttr: null,
  bgInitPos: null,
  bgGeometry: null,

  // Header 3D Flag
  headerRenderer: null,
  headerScene: null,
  headerCamera: null,
  headerMesh: null,
  headerPosAttr: null,
  headerInitPos: null,
  headerGeometry: null,

  // Modal 3D Flag
  modalRenderer: null,
  modalScene: null,
  modalCamera: null,
  modalMesh: null,
  modalPosAttr: null,
  modalInitPos: null,
  modalGeometry: null,
  modalActive: false,

  // Mouse / Interaction tracking
  mouseX: 0,
  mouseY: 0,
  targetRotationX: 0,
  targetRotationY: 0,
  clock: null,
  texture: null,

  init() {
    if (typeof THREE === 'undefined') return;
    this.clock = new THREE.Clock();

    const textureLoader = new THREE.TextureLoader();
    textureLoader.load('assets/fc-bratva-logo.png', (tex) => {
      tex.generateMipmaps = true;
      tex.minFilter = THREE.LinearMipmapLinearFilter;
      tex.magFilter = THREE.LinearFilter;
      this.texture = tex;

      this.initBgFlag();
      this.initHeaderFlag();
      this.animate();
    });

    this.setupInteractions();
  },

  // Fullscreen Background 3D Flag
  initBgFlag() {
    const container = document.getElementById('bg-3d-canvas-container');
    if (!container || !this.texture) return;

    this.bgScene = new THREE.Scene();
    this.bgCamera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
    this.bgCamera.position.set(0, 0, 8);

    this.bgRenderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    this.bgRenderer.setSize(window.innerWidth, window.innerHeight);
    this.bgRenderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.bgRenderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.bgRenderer.toneMappingExposure = 1.1;
    container.innerHTML = '';
    container.appendChild(this.bgRenderer.domElement);

    // Exact Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.85);
    this.bgScene.add(ambientLight);
    const dirLight1 = new THREE.DirectionalLight(0xffe8d6, 1.4);
    dirLight1.position.set(5, 5, 4);
    this.bgScene.add(dirLight1);
    const dirLight2 = new THREE.DirectionalLight(0x7a5cff, 0.8);
    dirLight2.position.set(-5, -3, 3);
    this.bgScene.add(dirLight2);

    // Exact Geometry: width 4.2, height 4.2, segments 128
    const width = 4.2;
    const height = 4.2;
    const segments = 128;
    this.bgGeometry = new THREE.PlaneGeometry(width, height, segments, segments);
    this.bgPosAttr = this.bgGeometry.attributes.position;
    this.bgInitPos = this.bgPosAttr.array.slice();

    const material = new THREE.MeshStandardMaterial({
      map: this.texture,
      side: THREE.DoubleSide,
      roughness: 0.35,
      metalness: 0.1,
      transparent: true
    });

    this.bgMesh = new THREE.Mesh(this.bgGeometry, material);
    this.bgScene.add(this.bgMesh);
  },

  // Header 3D Flag Emblem (50% Bigger: 108px)
  initHeaderFlag() {
    const container = document.getElementById('flag-3d-header');
    if (!container || !this.texture) return;

    const width = container.clientWidth || 108;
    const height = container.clientHeight || 108;

    this.headerScene = new THREE.Scene();
    this.headerCamera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    this.headerCamera.position.set(0, 0, 8);

    this.headerRenderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    this.headerRenderer.setSize(width, height);
    this.headerRenderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.headerRenderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.headerRenderer.toneMappingExposure = 1.1;
    container.innerHTML = '';
    container.appendChild(this.headerRenderer.domElement);

    // Exact Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.85);
    this.headerScene.add(ambientLight);
    const dirLight1 = new THREE.DirectionalLight(0xffe8d6, 1.4);
    dirLight1.position.set(5, 5, 4);
    this.headerScene.add(dirLight1);
    const dirLight2 = new THREE.DirectionalLight(0x7a5cff, 0.8);
    dirLight2.position.set(-5, -3, 3);
    this.headerScene.add(dirLight2);

    // Exact Geometry: width 4.2, height 4.2, segments 128
    const geoW = 4.2;
    const geoH = 4.2;
    const segments = 128;
    this.headerGeometry = new THREE.PlaneGeometry(geoW, geoH, segments, segments);
    this.headerPosAttr = this.headerGeometry.attributes.position;
    this.headerInitPos = this.headerPosAttr.array.slice();

    const material = new THREE.MeshStandardMaterial({
      map: this.texture,
      side: THREE.DoubleSide,
      roughness: 0.35,
      metalness: 0.1,
      transparent: true
    });

    this.headerMesh = new THREE.Mesh(this.headerGeometry, material);
    this.headerScene.add(this.headerMesh);
  },

  // Interactive 3D Modal
  openModal() {
    const modal = document.getElementById('flag-modal');
    const container = document.getElementById('flag-modal-canvas-container');
    if (!modal || !container || !this.texture) return;

    modal.style.display = 'flex';
    this.modalActive = true;

    if (!this.modalRenderer) {
      const width = container.clientWidth || 400;
      const height = container.clientHeight || 400;

      this.modalScene = new THREE.Scene();
      this.modalCamera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
      this.modalCamera.position.set(0, 0, 8);

      this.modalRenderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
      this.modalRenderer.setSize(width, height);
      this.modalRenderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      this.modalRenderer.toneMapping = THREE.ACESFilmicToneMapping;
      this.modalRenderer.toneMappingExposure = 1.1;
      container.innerHTML = '';
      container.appendChild(this.modalRenderer.domElement);

      const ambientLight = new THREE.AmbientLight(0xffffff, 0.85);
      this.modalScene.add(ambientLight);
      const dirLight1 = new THREE.DirectionalLight(0xffe8d6, 1.4);
      dirLight1.position.set(5, 5, 4);
      this.modalScene.add(dirLight1);
      const dirLight2 = new THREE.DirectionalLight(0x7a5cff, 0.8);
      dirLight2.position.set(-5, -3, 3);
      this.modalScene.add(dirLight2);

      const geoW = 4.2;
      const geoH = 4.2;
      const segments = 128;
      this.modalGeometry = new THREE.PlaneGeometry(geoW, geoH, segments, segments);
      this.modalPosAttr = this.modalGeometry.attributes.position;
      this.modalInitPos = this.modalPosAttr.array.slice();

      const material = new THREE.MeshStandardMaterial({
        map: this.texture,
        side: THREE.DoubleSide,
        roughness: 0.35,
        metalness: 0.1,
        transparent: true
      });

      this.modalMesh = new THREE.Mesh(this.modalGeometry, material);
      this.modalScene.add(this.modalMesh);
    } else {
      const width = container.clientWidth;
      const height = container.clientHeight;
      this.modalCamera.aspect = width / height;
      this.modalCamera.updateProjectionMatrix();
      this.modalRenderer.setSize(width, height);
    }
  },

  closeModal() {
    const modal = document.getElementById('flag-modal');
    if (modal) modal.style.display = 'none';
    this.modalActive = false;
  },

  setupInteractions() {
    // Global Mouse Interaction for smooth tilt
    window.addEventListener('mousemove', (e) => {
      this.mouseX = (e.clientX - window.innerWidth / 2) / (window.innerWidth / 2);
      this.mouseY = (e.clientY - window.innerHeight / 2) / (window.innerHeight / 2);
      this.targetRotationY = this.mouseX * 0.35;
      this.targetRotationX = this.mouseY * 0.25;
    });

    window.addEventListener('touchmove', (e) => {
      if (e.touches.length > 0) {
        const touch = e.touches[0];
        this.mouseX = (touch.clientX - window.innerWidth / 2) / (window.innerWidth / 2);
        this.mouseY = (touch.clientY - window.innerHeight / 2) / (window.innerHeight / 2);
        this.targetRotationY = this.mouseX * 0.35;
        this.targetRotationX = this.mouseY * 0.25;
      }
    }, { passive: true });

    // Drag & Drop image support
    window.addEventListener('dragover', (e) => e.preventDefault());
    window.addEventListener('drop', (e) => {
      e.preventDefault();
      const file = e.dataTransfer.files[0];
      if (file && file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = (event) => {
          new THREE.TextureLoader().load(event.target.result, (tex) => {
            tex.generateMipmaps = true;
            tex.minFilter = THREE.LinearMipmapLinearFilter;
            tex.magFilter = THREE.LinearFilter;
            this.texture = tex;
            if (this.bgMesh) this.bgMesh.material.map = tex;
            if (this.headerMesh) this.headerMesh.material.map = tex;
            if (this.modalMesh) this.modalMesh.material.map = tex;
          });
        };
        reader.readAsDataURL(file);
      }
    });

    const headerFlag = document.getElementById('flag-3d-header');
    if (headerFlag) {
      headerFlag.addEventListener('click', () => {
        SoundManager.playClick();
        this.openModal();
      });
    }

    const closeBtn = document.getElementById('flag-modal-close-x');
    if (closeBtn) {
      closeBtn.addEventListener('click', () => {
        SoundManager.playClick();
        this.closeModal();
      });
    }

    const modal = document.getElementById('flag-modal');
    if (modal) {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) {
          SoundManager.playClick();
          this.closeModal();
        }
      });
    }

    window.addEventListener('resize', () => {
      if (this.bgRenderer && this.bgCamera) {
        this.bgCamera.aspect = window.innerWidth / window.innerHeight;
        this.bgCamera.updateProjectionMatrix();
        this.bgRenderer.setSize(window.innerWidth, window.innerHeight);
      }
      if (this.headerRenderer && this.headerCamera) {
        const container = document.getElementById('flag-3d-header');
        if (container) {
          const w = container.clientWidth || 108;
          const h = container.clientHeight || 108;
          this.headerCamera.aspect = w / h;
          this.headerCamera.updateProjectionMatrix();
          this.headerRenderer.setSize(w, h);
        }
      }
      if (this.modalActive && this.modalRenderer && this.modalCamera) {
        const container = document.getElementById('flag-modal-canvas-container');
        if (container) {
          const w = container.clientWidth;
          const h = container.clientHeight;
          this.modalCamera.aspect = w / h;
          this.modalCamera.updateProjectionMatrix();
          this.modalRenderer.setSize(w, h);
        }
      }
    });
  },

  // Exact Animation Loop with Harmonic Wave Equation & Mouse Tilting
  animate() {
    requestAnimationFrame(() => this.animate());
    const elapsedTime = this.clock ? this.clock.getElapsedTime() : 0;
    const width = 4.2;

    // 1. Animate Background 3D Flag
    if (this.bgMesh && this.bgPosAttr && this.bgInitPos) {
      this.bgMesh.rotation.y += (this.targetRotationY - this.bgMesh.rotation.y) * 0.05;
      this.bgMesh.rotation.x += (this.targetRotationX - this.bgMesh.rotation.x) * 0.05;

      const positions = this.bgPosAttr.array;
      for (let i = 0; i < positions.length; i += 3) {
        const u = this.bgInitPos[i];
        const v = this.bgInitPos[i + 1];

        // Exact Harmonic Wave equation
        const wave1 = Math.sin(u * 2.2 + elapsedTime * 3.2) * 0.22;
        const wave2 = Math.cos(v * 1.8 + elapsedTime * 2.4) * 0.15;
        const microWave = Math.sin((u + v) * 4.5 + elapsedTime * 4.0) * 0.06;
        const windWeight = (u + width / 2) / width;
        positions[i + 2] = (wave1 + wave2 + microWave) * (0.4 + windWeight * 0.8);
      }
      this.bgPosAttr.needsUpdate = true;
      this.bgGeometry.computeVertexNormals();
      this.bgRenderer.render(this.bgScene, this.bgCamera);
    }

    // 2. Animate Header 3D Flag
    if (this.headerMesh && this.headerPosAttr && this.headerInitPos) {
      this.headerMesh.rotation.y += (this.targetRotationY - this.headerMesh.rotation.y) * 0.05;
      this.headerMesh.rotation.x += (this.targetRotationX - this.headerMesh.rotation.x) * 0.05;

      const positions = this.headerPosAttr.array;
      for (let i = 0; i < positions.length; i += 3) {
        const u = this.headerInitPos[i];
        const v = this.headerInitPos[i + 1];

        // Exact Harmonic Wave equation
        const wave1 = Math.sin(u * 2.2 + elapsedTime * 3.2) * 0.22;
        const wave2 = Math.cos(v * 1.8 + elapsedTime * 2.4) * 0.15;
        const microWave = Math.sin((u + v) * 4.5 + elapsedTime * 4.0) * 0.06;
        const windWeight = (u + width / 2) / width;
        positions[i + 2] = (wave1 + wave2 + microWave) * (0.4 + windWeight * 0.8);
      }
      this.headerPosAttr.needsUpdate = true;
      this.headerGeometry.computeVertexNormals();
      this.headerRenderer.render(this.headerScene, this.headerCamera);
    }

    // 3. Animate Modal 3D Flag
    if (this.modalActive && this.modalMesh && this.modalPosAttr && this.modalInitPos) {
      this.modalMesh.rotation.y += (this.targetRotationY - this.modalMesh.rotation.y) * 0.05;
      this.modalMesh.rotation.x += (this.targetRotationX - this.modalMesh.rotation.x) * 0.05;

      const positions = this.modalPosAttr.array;
      for (let i = 0; i < positions.length; i += 3) {
        const u = this.modalInitPos[i];
        const v = this.modalInitPos[i + 1];

        // Exact Harmonic Wave equation
        const wave1 = Math.sin(u * 2.2 + elapsedTime * 3.2) * 0.22;
        const wave2 = Math.cos(v * 1.8 + elapsedTime * 2.4) * 0.15;
        const microWave = Math.sin((u + v) * 4.5 + elapsedTime * 4.0) * 0.06;
        const windWeight = (u + width / 2) / width;
        positions[i + 2] = (wave1 + wave2 + microWave) * (0.4 + windWeight * 0.8);
      }
      this.modalPosAttr.needsUpdate = true;
      this.modalGeometry.computeVertexNormals();
      this.modalRenderer.render(this.modalScene, this.modalCamera);
    }
  }
};

// Unlock Web Audio & Background Music on first user interaction
const unlockAudio = () => {
  SoundManager.init();
  AudioManager.init();
};
document.addEventListener('click', unlockAudio, { once: true });
document.addEventListener('touchstart', unlockAudio, { once: true });

const state = {
  lang: 'en',
  playersIndex: {},
  tournamentsIndex: {},
  players: [],
  tournaments: [],
  activeTab: 'dashboard',
  searchQuery: '',
  leaderboardWindow: 'all'
};

// Tabs order for animation direction
const tabsOrder = ['dashboard', 'tournaments', 'players', 'leaderboard'];

// --- Initialization ---
document.addEventListener('DOMContentLoaded', async () => {
  const initialLang = autoDetectLanguage();
  setLanguage(initialLang);
  
  // Update lang selector UI to match auto-detected lang
  document.querySelectorAll('.lang-opt').forEach(opt => {
    if(opt.dataset.lang === initialLang) opt.classList.add('active');
    else opt.classList.remove('active');
  });

  setupLanguageSelector();
  setupNavigation();
  setupSearch();
  setupFilterControls();

  // Audio Toggle Button
  const audioBtn = document.getElementById('audio-toggle-btn');
  if (audioBtn) {
    audioBtn.addEventListener('click', () => {
      SoundManager.playClick();
      AudioManager.toggle();
    });
    AudioManager.updateUI();
  }

  // Initialize 3D Waving Flag
  Flag3DManager.init();

  // Scroll transparency for nav-bar
  let scrollTimeout;
  const navBar = document.querySelector('.nav-bar');
  window.addEventListener('scroll', () => {
    if (navBar) {
      navBar.classList.add('scrolling');
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        navBar.classList.remove('scrolling');
      }, 250);
    }
  });

  await loadData();
  renderAll();
});

// --- Language Selector ---
function setupLanguageSelector() {
  const toggleBtn = document.getElementById('lang-toggle-btn');
  const menu = document.getElementById('lang-menu');

  toggleBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    menu.classList.toggle('show');
  });

  document.addEventListener('click', () => menu.classList.remove('show'));

  const options = document.querySelectorAll('.lang-opt');
  options.forEach(opt => {
    opt.addEventListener('click', () => {
      options.forEach(o => o.classList.remove('active'));
      opt.classList.add('active');
      setLanguage(opt.dataset.lang);
      menu.classList.remove('show');
    });
  });
}

function autoDetectLanguage() {
  const saved = localStorage.getItem('fcm_lang');
  if (saved && I18N[saved]) return saved;

  const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || '';
  // Morocco timezone overrides to English
  if (tz.includes('Casablanca') || tz.includes('El_Aaiun') || tz.includes('Morocco')) {
    return 'en';
  }

  const browserLang = (navigator.language || navigator.userLanguage || '').toLowerCase();
  if (browserLang.startsWith('ar')) return 'ar';
  if (browserLang.startsWith('ru')) return 'ru';
  if (browserLang.startsWith('es')) return 'es';
  
  return 'en';
}

function setLanguage(langCode) {
  if (!I18N[langCode]) return;
  state.lang = langCode;
  localStorage.setItem('fcm_lang', langCode);
  const dict = I18N[langCode];

  document.documentElement.setAttribute('dir', dict.dir);
  document.documentElement.setAttribute('lang', langCode);

  document.getElementById('current-lang-code').textContent = langCode.toUpperCase();

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (dict[key]) el.textContent = dict[key];
  });

  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const key = el.dataset.i18nPh;
    if (dict[key]) el.placeholder = dict[key];
  });

  renderAll();
}

function t(key, vars = {}) {
  const dict = I18N[state.lang] || I18N.en;
  let str = dict[key] || I18N.en[key] || key;
  Object.keys(vars).forEach(k => {
    str = str.replace(`{${k}}`, vars[k]);
  });
  return str;
}

// --- Data Fetching ---
async function loadData() {
  const cb = Date.now();
  for (const path of DATA_PATHS) {
    try {
      const res = await fetch(`${path}/index/players_index.json?v=${cb}`);
      if (res.ok) {
        activePath = path;
        state.playersIndex = await res.json();
        break;
      }
    } catch (e) {}
  }

  try {
    const tRes = await fetch(`${activePath}/index/tournaments_index.json?v=${cb}`);
    if (tRes.ok) state.tournamentsIndex = await tRes.json();
  } catch (e) {}

  const pIds = Object.keys(state.playersIndex);
  const pPromises = pIds.map(id => fetch(`${activePath}/players/${id}.json?v=${cb}`).then(r => r.ok ? r.json() : null).catch(() => null));

  const tIds = Object.keys(state.tournamentsIndex);
  const tPromises = tIds.map(id => fetch(`${activePath}/tournaments/${id}.json?v=${cb}`).then(r => r.ok ? r.json() : null).catch(() => null));

  const [pResults, tResults] = await Promise.all([Promise.all(pPromises), Promise.all(tPromises)]);

  state.players = pResults.filter(Boolean);
  state.tournaments = tResults.filter(Boolean);
  state.tournaments.sort((a, b) => new Date(b.date) - new Date(a.date));
}

// --- Navigation Tab Switching ---
function setupNavigation() {
  const navs = document.querySelectorAll('.nav-item');
  navs.forEach(nav => {
    nav.addEventListener('click', () => {
      SoundManager.playClick();
      const newTab = nav.dataset.tab;
      if (newTab === state.activeTab) return;
      
      navs.forEach(n => n.classList.remove('active'));
      nav.classList.add('active');
      switchTab(newTab);
    });
  });
}

function switchTab(newTabName) {
  document.querySelectorAll('.tab-page').forEach(p => {
    p.classList.remove('active');
    p.style.display = 'none';
  });

  const newPage = document.getElementById(`tab-${newTabName}`);
  if (newPage) {
    newPage.classList.add('active');
    newPage.style.display = 'block';
  }

  state.activeTab = newTabName;
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// --- Renderers ---
function renderAll() {
  renderDashboard();
  renderTournaments();
  renderRoster();
  renderLeaderboard();
}

function renderPlayerCard(p, rank, customGoals, customAvg) {
  const goals = customGoals !== undefined ? customGoals : getPlayerGoals(p);
  const matches = p.matches || [];
  const totalTurns = matches.length * 3;
  const isFlagged = p.eligibility_streak?.flagged_for_review;

  let ovr = 90;
  let tierName = "ELITE TIER";
  let cardClass = "fc-card-elite";

  if (rank === 1) {
    ovr = 99;
    tierName = "GOLD LEGEND";
    cardClass = "fc-card-gold";
  } else if (rank === 2) {
    ovr = 97;
    tierName = "SILVER MASTER";
    cardClass = "fc-card-silver";
  } else if (rank === 3) {
    ovr = 95;
    tierName = "BRONZE CHAMPION";
    cardClass = "fc-card-bronze";
  } else if (rank <= 10) {
    ovr = 93;
    tierName = "DIAMOND PRO";
  }

  // Turn dots calculation from recent tournament match
  const lastMatch = matches.length > 0 ? matches[matches.length - 1] : null;
  const lastTurns = lastMatch ? (lastMatch.turns_played !== undefined ? lastMatch.turns_played : (lastMatch.goals_for ? 3 : 0)) : 3;

  return `
    <div class="fc-player-card ${cardClass}" onclick="openPlayerModal('${p.player_id}')">
      <div class="fc-card-left">
        <div class="fc-ovr-badge">
          <span class="ovr-num">${ovr}</span>
          <span class="ovr-lbl">#${rank}</span>
        </div>
        <div class="fc-player-info">
          <div class="fc-player-name">
            ${escapeHTML(p.display_name)}
            ${isFlagged ? '<span class="stamp stamp-loss" style="font-size:0.6rem; padding: 2px 6px;">FLAG</span>' : ''}
          </div>
          <div class="fc-tier-banner">${tierName} • ${matches.length} ${t('matches')}</div>
        </div>
      </div>
      <div class="fc-card-right">
        <div class="fc-turn-dots" title="${lastTurns}/3 turns completed">
          <span class="turn-dot ${lastTurns >= 1 ? 'done' : 'missed'}"></span>
          <span class="turn-dot ${lastTurns >= 2 ? 'done' : 'missed'}"></span>
          <span class="turn-dot ${lastTurns >= 3 ? 'done' : 'missed'}"></span>
        </div>
        <div class="fc-goal-stat">
          <div class="fc-goal-val">${goals}</div>
          <div class="fc-goal-lbl">${t('goals')}</div>
        </div>
      </div>
    </div>
  `;
}

function renderDashboard() {
  const completed = state.tournaments.filter(t => t.status === 'complete');
  const wins = completed.filter(t => t.result === 'win').length;
  const losses = completed.filter(t => t.result === 'loss').length;
  const draws = completed.filter(t => t.result === 'draw').length;

  const winRate = completed.length > 0 ? ((wins / completed.length) * 100).toFixed(1) : '0.0';

  document.getElementById('hero-wins').textContent = wins;
  document.getElementById('hero-draws').textContent = draws;
  document.getElementById('hero-losses').textContent = losses;
  document.getElementById('hero-winrate-badge').textContent = `${winRate}% WR`;

  // Recent match
  const recentBox = document.getElementById('recent-match-container');
  if (state.tournaments.length === 0) {
    recentBox.innerHTML = `<div style="text-align:center; padding:16px;" class="hand-text">${t('loading')}</div>`;
  } else {
    const tItem = state.tournaments[0];
    const stampClass = tItem.result === 'win' ? 'stamp-win' : tItem.result === 'loss' ? 'stamp-loss' : 'stamp-draw';
    
    // Goal Gauge Percentages
    const totalGoals = (tItem.our_total_goals || 0) + (tItem.opponent_total_goals || 0);
    const ourPct = totalGoals > 0 ? ((tItem.our_total_goals / totalGoals) * 100).toFixed(1) : 50;
    const oppPct = totalGoals > 0 ? ((tItem.opponent_total_goals / totalGoals) * 100).toFixed(1) : 50;

    recentBox.innerHTML = `
      <div style="cursor: pointer; padding: 4px;" onclick="openTournamentModal('${tItem.tournament_id}')">
        <div style="display: flex; justify-content: space-around; align-items: center; margin-bottom: 14px;">
          <div style="text-align: center; flex: 1;">
            <div class="username" style="font-size: 1.15rem; color: var(--gold-prime); font-weight: 800;">Братва</div>
            <div style="font-size: 2.3rem; font-family: var(--font-score); font-weight: 900; color: #ffffff; text-shadow: 0 0 16px rgba(246, 200, 81, 0.45);">${tItem.our_total_goals}</div>
          </div>
          <div style="font-family: var(--font-heading); font-weight: 800; color: var(--gold-prime); font-size: 0.9rem; background: rgba(246, 200, 81, 0.14); border: 1px solid rgba(246, 200, 81, 0.4); border-radius: 6px; padding: 3px 12px; letter-spacing: 1px;">VS</div>
          <div style="text-align: center; flex: 1;">
            <div class="username" style="font-size: 1.15rem; color: var(--text-secondary); max-width: 140px; margin: 0 auto; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${escapeHTML(tItem.opponent_league)}</div>
            <div style="font-size: 2.3rem; font-family: var(--font-score); font-weight: 900; color: #ffffff;">${tItem.opponent_total_goals}</div>
          </div>
        </div>

        <!-- Power Goal Gauge -->
        <div class="gauge-wrap" style="margin: 12px 0;">
          <div class="gauge-fill" style="width: ${ourPct}%;"></div>
          <div class="gauge-fill-opp" style="width: ${oppPct}%;"></div>
        </div>

        <div style="display:flex; justify-content:space-between; align-items:center; margin-top: 8px;">
          <span class="stamp ${stampClass}">${tItem.result ? tItem.result : 'In Progress'}</span>
          <span class="hand-text" style="color:var(--text-muted); font-size: 0.85rem; font-weight: 700;">${tItem.date}</span>
        </div>
      </div>
    `;
  }

  // Top performers FC Mobile Cards
  const topContainer = document.getElementById('top-performers-container');
  const sortedPlayers = [...state.players].sort((a, b) => getPlayerGoals(b) - getPlayerGoals(a));
  const top3 = sortedPlayers.slice(0, 3);

  if (topContainer) {
    topContainer.innerHTML = top3.map((p, idx) => renderPlayerCard(p, idx + 1)).join('');
  }

  // Flagged Section
  const flaggedBox = document.getElementById('flagged-card-box');
  const flaggedList = document.getElementById('flagged-players-list');
  const flagged = state.players.filter(p => p.eligibility_streak?.flagged_for_review);

  if (flagged.length > 0) {
    flaggedBox.style.display = 'block';
    flaggedList.innerHTML = flagged.map(p => `
      <div style="display:flex; justify-content:space-between; align-items:center; padding:10px 12px; background: rgba(255, 51, 102, 0.1); border: 1px solid rgba(255, 51, 102, 0.3); border-radius: 8px; margin-bottom: 6px; cursor:pointer;" onclick="openPlayerModal('${p.player_id}')">
        <span class="username">${escapeHTML(p.display_name)}</span>
        <span class="stamp stamp-loss">${p.eligibility_streak.current_fail_streak} FAILS</span>
      </div>
    `).join('');
  } else {
    flaggedBox.style.display = 'none';
  }
}

function renderTournaments() {
  const container = document.getElementById('tournaments-list-container');
  container.innerHTML = state.tournaments.map(tItem => {
    const stampClass = tItem.result === 'win' ? 'stamp-win' : tItem.result === 'loss' ? 'stamp-loss' : 'stamp-draw';
    return `
      <div style="background: var(--bg-tile); border: 1px solid rgba(168, 85, 247, 0.22); border-radius: 12px; padding: 14px; margin-bottom: 12px; cursor: pointer; transition: transform 0.2s, border-color 0.2s;" onclick="openTournamentModal('${tItem.tournament_id}')">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
          <div style="display: flex; align-items: center; gap: 8px;">
            <span class="stamp ${stampClass}">${tItem.result || 'In Progress'}</span>
            <span class="hand-text" style="color: var(--text-muted); font-size: 0.85rem; font-weight: 700;">${tItem.date}</span>
          </div>
          <span style="font-family: var(--font-score); font-weight: 800; font-size: 0.85rem; color: var(--gold-prime); background: rgba(246, 200, 81, 0.12); padding: 3px 10px; border-radius: 6px; border: 1px solid rgba(246, 200, 81, 0.35);">${tItem.format || '32v32'}</span>
        </div>
        <div style="display: flex; justify-content: space-between; align-items: center;">
          <div style="flex: 1; text-align: left;">
            <div style="font-weight: 800; font-size: 1.05rem; color: var(--gold-prime); margin-bottom: 2px; word-break: break-word;">Братва</div>
            <div style="font-family: var(--font-score); font-weight: 900; font-size: 1.45rem; color: #ffffff;">${tItem.our_total_goals}</div>
          </div>
          <div style="width: 38px; text-align: center; font-family: var(--font-heading); font-weight: 800; color: var(--gold-prime); font-size: 0.85rem; background: rgba(246,200,81,0.12); border-radius: 6px; padding: 3px 0;">VS</div>
          <div style="flex: 1; text-align: right;">
            <div style="font-weight: 800; font-size: 1.05rem; color: var(--text-secondary); margin-bottom: 2px; word-break: break-word;">${escapeHTML(tItem.opponent_league)}</div>
            <div style="font-family: var(--font-score); font-weight: 900; font-size: 1.45rem; color: #ffffff;">${tItem.opponent_total_goals}</div>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

function setupSearch() {
  document.getElementById('roster-search-input').addEventListener('input', (e) => {
    state.searchQuery = e.target.value.toLowerCase().trim();
    renderRoster();
  });
}

function renderRoster() {
  const cardsContainer = document.getElementById('roster-cards-container');
  let list = [...state.players];

  if (state.searchQuery) {
    list = list.filter(p => p.display_name.toLowerCase().includes(state.searchQuery));
  }
  list.sort((a, b) => a.display_name.localeCompare(b.display_name));

  if (cardsContainer) {
    cardsContainer.innerHTML = list.map((p, idx) => renderPlayerCard(p, idx + 1)).join('');
  }
}

function setupFilterControls() {
  document.querySelectorAll('[data-window]').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('[data-window]').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.leaderboardWindow = btn.dataset.window;
      renderLeaderboard();
    });
  });
}

function renderLeaderboard() {
  const cardsContainer = document.getElementById('leaderboard-cards-container');
  const windowDays = state.leaderboardWindow;

  let list = state.players.map(p => {
    let matches = p.matches || [];
    if (windowDays !== 'all') {
      const days = parseInt(windowDays, 10);
      const cutoff = new Date();
      cutoff.setDate(cutoff.getDate() - days);
      matches = matches.filter(m => {
        const tInfo = state.tournamentsIndex[m.tournament_id];
        return tInfo && new Date(tInfo.date) >= cutoff;
      });
    }
    if (windowDays !== 'all' && matches.length === 0) return null;
    const goals = matches.reduce((sum, m) => sum + (m.goals_for || 0), 0);
    const avg = matches.length > 0 ? (goals / matches.length).toFixed(1) : '0.0';
    return { player_id: p.player_id, display_name: p.display_name, goals, avg };
  }).filter(Boolean);

  list.sort((a, b) => b.goals - a.goals);

  if (cardsContainer) {
    cardsContainer.innerHTML = list.map((item, idx) => {
      const p = state.players.find(pl => pl.player_id === item.player_id) || item;
      return renderPlayerCard(p, idx + 1, item.goals, item.avg);
    }).join('');
  }
}

// --- Player Detail Modal ---
function openPlayerModal(playerId) {
  const player = state.players.find(p => p.player_id === playerId);
  if (!player) return;

  const overlay = document.getElementById('player-modal');
  const content = document.getElementById('modal-player-content');
  const page = document.getElementById('modal-page');

  SoundManager.playClick();

  document.getElementById('modal-close-x').onclick = () => {
    SoundManager.playClick();
    overlay.style.display = 'none';
  };
  overlay.onclick = (e) => { 
    if (e.target === overlay) {
      SoundManager.playClick();
      overlay.style.display = 'none';
    } 
  };

  const streak = player.eligibility_streak?.current_fail_streak || 0;
  const isFlagged = player.eligibility_streak?.flagged_for_review;

  let eligHTML = `<span class="hand-text" style="color: var(--pencil-green);">${t('eligibility_ok')}</span>`;
  if (isFlagged) {
    eligHTML = `<span class="hand-text" style="color: var(--pencil-red); font-weight: bold;">${t('eligibility_flagged')}</span>`;
  } else if (streak > 0) {
    eligHTML = `<span class="hand-text" style="color: var(--pencil-gold);">${t('eligibility_warn', { n: streak })}</span>`;
  }

  const chartData = build7DayPerformanceData(player);

  content.innerHTML = `
    <div style="border-bottom: 1px solid var(--border-subtle); padding-bottom: 10px; margin-bottom: 16px;">
      <div class="username" style="font-size: 1.6rem; color: var(--gold-main); font-weight: 800;">${escapeHTML(player.display_name)}</div>
      <div style="margin-top: 4px;">${eligHTML}</div>
    </div>

    <div class="card-title">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><path d="M18 9l-5 5-4-4-5 5"/></svg>
      ${t('performance_chart')}
    </div>
    
    <div class="chart-wrap" style="background: rgba(14, 8, 28, 0.7); border: 1px solid var(--border-subtle); border-radius: 10px; padding: 10px; margin-bottom: 14px;">
      ${renderSketchyChart(chartData)}
    </div>

    <div id="chart-point-summary" style="background: rgba(22, 12, 42, 0.9); padding: 12px; border: 1px solid var(--border-subtle); border-radius: 8px; margin-bottom: 18px;">
      <div class="hand-text" id="summary-date-label" style="color: var(--text-muted); font-size: 0.85rem; font-weight: 600;">${t('click_point_hint')}</div>
      <div class="username" id="summary-verdict-label" style="font-size: 1.05rem; margin-top: 4px;">-</div>
    </div>

    <div class="card-title">${t('tournament_history')}</div>
    <div style="display: flex; flex-direction: column; gap: 6px;">
      ${(player.matches || []).map(m => `
        <div style="display:flex; justify-content:space-between; align-items:center; background: rgba(16, 9, 32, 0.5); border: 1px solid rgba(157, 78, 221, 0.15); border-radius: 8px; padding: 8px 12px;">
          <span class="hand-text" style="color: var(--text-secondary); font-weight: 600;">vs ${escapeHTML(m.opponent_display_name)}</span>
          <span style="font-family: var(--font-score); font-weight: 800; color: var(--gold-main); font-size: 1rem;">${m.goals_for} G <span class="hand-text" style="font-weight: 600; font-size: 0.75rem; color: var(--text-muted);">(${m.turns_played !== undefined ? m.turns_played : 3}/3)</span></span>
        </div>
      `).join('')}
    </div>
  `;

  overlay.style.display = 'flex';
  page.style.transform = 'none';

  attachChartPointListeners(chartData);
}

function build7DayPerformanceData(player) {
  const days = [];
  const now = new Date();
  for (let i = 6; i >= 0; i--) {
    const d = new Date();
    d.setDate(now.getDate() - i);
    const dateStr = d.toISOString().split('T')[0];
    days.push({ dateStr, dayLabel: d.toLocaleDateString(state.lang, { weekday: 'short' }), match: null, status: 'no_tournament' });
  }
  (player.matches || []).forEach(m => {
    const tInfo = state.tournamentsIndex[m.tournament_id];
    const matchDate = tInfo ? tInfo.date : null;
    if (matchDate) {
      const dayObj = days.find(d => d.dateStr === matchDate);
      if (dayObj) {
        dayObj.match = m;
        dayObj.tournament = tInfo;
        const goals = m.goals_for || 0;
        const turns = m.turns_played !== undefined ? m.turns_played : 3;
        if (turns === 0) dayObj.status = 'absent';
        else if (goals >= 40) dayObj.status = 'legendary';
        else if (goals >= 35) dayObj.status = 'champion';
        else if (goals >= 30) dayObj.status = 'perfect';
        else if (goals >= 25) dayObj.status = 'good';
        else if (goals >= 20) dayObj.status = 'acceptable';
        else dayObj.status = 'needs_work';
      }
    }
  });
  return days;
}

function renderSketchyChart(daysData) {
  const w = 320, h = 140, px = 20, py = 20;
  const step = (w - px * 2) / (daysData.length - 1);
  const getY = (goals) => h - py - (Math.min(Math.max(goals, 0), 40) / 40) * (h - py * 2);

  const points = daysData.map((d, i) => ({ x: px + i * step, y: getY(d.match ? (d.match.goals_for||0) : 0), data: d }));
  const pathD = points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ');

  return `
    <svg viewBox="0 0 ${w} ${h}" style="width:100%; height:100%; overflow:visible;">
      <defs>
        <linearGradient id="neonLineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#9d4edd" />
          <stop offset="50%" stop-color="#c77dff" />
          <stop offset="100%" stop-color="#ffd15c" />
        </linearGradient>
        <linearGradient id="chartAreaGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="rgba(157, 78, 221, 0.35)" />
          <stop offset="100%" stop-color="rgba(157, 78, 221, 0.0)" />
        </linearGradient>
      </defs>
      <!-- Grid / Axis -->
      <line x1="${px}" y1="${h-py}" x2="${w-px}" y2="${h-py}" stroke="rgba(157, 78, 221, 0.3)" stroke-width="1.5"/>
      <!-- Glowing Line -->
      <path d="${pathD}" fill="none" stroke="url(#neonLineGrad)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" style="filter: drop-shadow(0 0 6px rgba(157,78,221,0.6));"/>
      <!-- Data points -->
      ${points.map((p, i) => `
        <circle cx="${p.x}" cy="${p.y}" r="5" class="sketch-point" data-index="${i}" 
                style="cursor:pointer; fill:${p.data.status==='absent' ? 'var(--loss-color)' : 'var(--gold-main)'}; stroke:var(--bg-midnight); stroke-width:2; filter: drop-shadow(0 0 6px rgba(255,209,92,0.6));" />
        <text x="${p.x}" y="${h-4}" font-family="var(--font-heading)" font-weight="700" font-size="9" fill="var(--text-muted)" text-anchor="middle">${p.data.dayLabel}</text>
      `).join('')}
    </svg>
  `;
}

function attachChartPointListeners(daysData) {
  const points = document.querySelectorAll('.sketch-point');
  const summaryDate = document.getElementById('summary-date-label');
  const summaryVerdict = document.getElementById('summary-verdict-label');

  points.forEach(pt => {
    pt.addEventListener('click', () => {
      const d = daysData[parseInt(pt.dataset.index, 10)];
      summaryDate.textContent = `${d.dateStr} (${d.dayLabel})`;
      if (d.status === 'no_tournament') {
        summaryVerdict.innerHTML = `<span style="color:var(--text-muted);">${t('verdict_no_tournament')}</span>`;
      } else if (d.status === 'absent') {
        summaryVerdict.innerHTML = `<span style="color:var(--loss-color); font-weight:bold;">${t('verdict_absent')}</span>`;
      } else {
        let color = 'var(--loss-color)';
        let verdictKey = 'verdict_needs_work';
        if (d.status === 'legendary') { color = '#c77dff'; verdictKey = 'verdict_legendary'; }
        else if (d.status === 'champion') { color = 'var(--gold-main)'; verdictKey = 'verdict_champion'; }
        else if (d.status === 'perfect') { color = '#00f59b'; verdictKey = 'verdict_perfect'; }
        else if (d.status === 'good') { color = '#60a5fa'; verdictKey = 'verdict_good'; }
        else if (d.status === 'acceptable') { color = '#94a3b8'; verdictKey = 'verdict_acceptable'; }
        
        summaryVerdict.innerHTML = `
          <span style="color:${color}; font-weight:800; font-size:1.1rem; text-shadow: 0 0 8px ${color}88;">${t(verdictKey)} (${d.match.goals_for}G)</span>
          <div class="hand-text" style="font-size:0.85rem; color:var(--text-muted); margin-top:2px;">vs ${escapeHTML(d.match.opponent_display_name)} • ${d.match.turns_played !== undefined ? d.match.turns_played : (d.match.goals_for ? 3 : 0)}/3 ${t('turns_completed')}</div>
        `;
      }
    });
  });
}

function openTournamentModal(tId) {
  const tItem = state.tournaments.find(t => t.tournament_id === tId);
  if (!tItem) return;

  const overlay = document.getElementById('player-modal');
  const content = document.getElementById('modal-player-content');
  const page = document.getElementById('modal-page');
  
  SoundManager.playClick();

  document.getElementById('modal-close-x').onclick = () => {
    SoundManager.playClick();
    overlay.style.display = 'none';
  };
  overlay.onclick = (e) => { if (e.target === overlay) { SoundManager.playClick(); overlay.style.display = 'none'; } };

  const matches = [...(tItem.matches || [])].sort((a, b) => b.goals_for - a.goals_for);

  content.innerHTML = `
    <div style="border-bottom: 1px solid var(--border-subtle); padding-bottom: 10px; margin-bottom: 16px;">
      <div class="username" style="font-size: 1.5rem; color: var(--gold-main); font-weight: 800;">vs ${escapeHTML(tItem.opponent_league)}</div>
      <div class="hand-text" style="color: var(--text-muted); font-size: 0.85rem; font-weight: 600;">${tItem.date} • ${tItem.format || '32v32'}</div>
    </div>

    <div style="display: flex; justify-content: space-around; align-items: center; background: rgba(14, 8, 28, 0.7); border: 1px solid var(--border-subtle); border-radius: 12px; padding: 14px; margin-bottom: 18px;">
      <div style="text-align:center; flex: 1;">
        <div class="username" style="color: var(--gold-main); font-weight: 800;">Братва</div>
        <div style="font-size: 2.2rem; font-family: var(--font-score); font-weight: 900; color: #ffffff; text-shadow: 0 0 10px rgba(255,209,92,0.4);">${tItem.our_total_goals}</div>
      </div>
      <div style="font-family: var(--font-heading); font-weight: 800; color: var(--gold-main); font-size: 0.85rem; background: rgba(255,209,92,0.12); padding: 3px 8px; border-radius: 6px;">VS</div>
      <div style="text-align:center; flex: 1;">
        <div class="username" style="max-width:110px; overflow:hidden; text-overflow:ellipsis; white-space:nowrap; margin: 0 auto; color: var(--text-secondary);">${escapeHTML(tItem.opponent_league)}</div>
        <div style="font-size: 2.2rem; font-family: var(--font-score); font-weight: 900; color: #ffffff;">${tItem.opponent_total_goals}</div>
      </div>
    </div>

    <div class="card-title">${t('player')} Scores</div>
    <div style="display: flex; flex-direction: column; gap: 6px;">
      ${matches.map(m => `
        <div class="sketch-row" style="display:flex; justify-content:space-between; align-items:center; padding: 10px 14px;" onclick="openPlayerModal('${m.player_id}')">
          <span class="username">${escapeHTML(m.player_display_name || m.player_id)} <span class="hand-text" style="font-size:0.75rem; color:var(--text-muted); font-weight:600;">(${m.turns_played !== undefined ? m.turns_played : 3}/3)</span></span>
          <span style="font-family: var(--font-score); font-weight:800; color: var(--gold-main); font-size: 1.05rem;">${m.goals_for} G</span>
        </div>
      `).join('')}
    </div>
  `;

  overlay.style.display = 'flex';
  page.style.transform = 'none';
}

function getPlayerGoals(player) {
  return (player.matches || []).reduce((sum, m) => sum + (m.goals_for || 0), 0);
}

function escapeHTML(str) {
  if (!str) return '';
  return str.replace(/[&<>"']/g, m => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[m]));
}
