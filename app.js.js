const places = [
  {
    id: "colon",
    name: "Teatro Colón",
    type: "Teatro",
    distance: "Centro",
    rating: 4.9,
    address: "Cerrito 618, San Nicolás",
    lat: -34.6011,
    lng: -58.3831,
    image: "assets/places/teatro-colon.svg",
    sourceUrl: "https://teatrocolon.org.ar/teatro-colon-accesible/",
    sourceLabel: "Teatro Colón Accesible",
    features: ["rampa", "braille", "senas", "audio"],
    featureLabels: ["Ingreso accesible por Tucumán", "Planos hápticos y braille", "Visitas en LSA", "Apoyos sensoriales"],
    note: "La ficha oficial informa ingreso accesible para discapacidad motora por calle Tucumán. El teatro incorporó planos hápticos y recursos táctiles para personas ciegas o con baja visión."
  },
  {
    id: "malba",
    name: "MALBA",
    type: "Museo",
    distance: "Palermo",
    rating: 4.8,
    address: "Av. Figueroa Alcorta 3415, Palermo",
    lat: -34.5764,
    lng: -58.4038,
    image: "assets/places/malba.svg",
    sourceUrl: "https://malba.org.ar/en/accesibilidad/",
    sourceLabel: "MALBA Accesibilidad",
    features: ["rampa", "banio", "senas", "audio"],
    featureLabels: ["Rampa de acceso", "Baño accesible", "Recorridos en LSA", "Audioguías por QR"],
    note: "MALBA informa circulación motriz plena, rampas en desniveles, ascensor, baño accesible, préstamo de sillas de ruedas, audioguías y recorridos en Lengua de Señas Argentina."
  },
  {
    id: "moderno",
    name: "Museo Moderno",
    type: "Museo",
    distance: "San Telmo",
    rating: 4.8,
    address: "Av. San Juan 350, San Telmo",
    lat: -34.6212,
    lng: -58.3712,
    image: "assets/places/museo-moderno.svg",
    sourceUrl: "https://museomoderno.org/accesibilidad/",
    sourceLabel: "Museo Moderno Accesibilidad",
    features: ["rampa", "banio", "braille", "senas", "audio"],
    featureLabels: ["Puerta automática", "Baños accesibles", "Braille y planos hápticos", "Actividades con LSA", "Audiodescripciones"],
    note: "El museo informa edificio libre de barreras, sillas de ruedas, ascensores, elevador, baños accesibles, planos hápticos, braille, audiodescripciones y actividades con LSA."
  },
  {
    id: "planetario",
    name: "Planetario Galileo Galilei",
    type: "Ciencia",
    distance: "Palermo",
    rating: 4.7,
    address: "Av. Sarmiento s/n, Palermo",
    lat: -34.5698,
    lng: -58.4113,
    image: "assets/places/planetario.svg",
    sourceUrl: "https://planetario.buenosaires.gob.ar/planetario-accesible",
    sourceLabel: "Planetario BA",
    features: ["rampa", "banio", "braille", "audio"],
    featureLabels: ["Rampas de acceso", "Sanitario accesible", "Cartelería en braille", "Aro magnético"],
    note: "El Planetario informa rampas, plataforma salvaescaleras, silla de ruedas, sanitarios accesibles, alarmas visuales y sonoras, aro magnético y planos hápticos."
  },
  {
    id: "recoleta",
    name: "Centro Cultural Recoleta",
    type: "Centro cultural",
    distance: "Recoleta",
    rating: 4.6,
    address: "Junín 1930, Recoleta",
    lat: -34.5876,
    lng: -58.3924,
    image: "assets/places/recoleta.svg",
    sourceUrl: "https://buenosaires.gob.ar/centro-cultural-recoleta-milla-museos",
    sourceLabel: "Buenos Aires Ciudad",
    features: ["rampa", "audio"],
    featureLabels: ["Visitas adaptables con ayuda", "Practicable para baja visión y ceguera con ayuda"],
    note: "La ficha oficial indica que pueden solicitarse visitas guiadas para discapacidad motora y clasifica varias discapacidades como accesibles o practicables con ayuda."
  },
  {
    id: "saavedra",
    name: "Museo Saavedra",
    type: "Museo",
    distance: "Saavedra",
    rating: 4.6,
    address: "Av. Crisólogo Larralde 6309, Saavedra",
    lat: -34.5527,
    lng: -58.4877,
    image: "assets/places/museo-saavedra.svg",
    sourceUrl: "https://buenosaires.gob.ar/gcaba_historico/cultura/museos/museosaavedra/un-museo-mas-accesible",
    sourceLabel: "Buenos Aires Ciudad",
    features: ["rampa", "banio", "audio"],
    featureLabels: ["Rampas en ingresos", "Baño accesible", "Audiodescripciones"],
    note: "La ficha oficial informa rampas de acceso, mostrador reglamentario, baño accesible, perros guía, áreas de descanso, estacionamiento prioritario y audiodescripciones."
  },
  {
    id: "usina",
    name: "Usina del Arte",
    type: "Centro cultural",
    distance: "La Boca",
    rating: 4.7,
    address: "Agustín R. Caffarena 1, La Boca",
    lat: -34.6283,
    lng: -58.3568,
    image: "assets/places/usina.svg",
    sourceUrl: "https://buenosaires.gob.ar/cultura/usina-del-arte/noticias/actividades-inclusivas-en-la-usina-del-arte",
    sourceLabel: "Buenos Aires Ciudad",
    features: ["senas", "audio", "rampa"],
    featureLabels: ["Actividades inclusivas", "Programación cultural accesible", "Espacios amplios"],
    note: "La Ciudad informa que la Usina cuenta con actividades y espectáculos con facilidades para la accesibilidad de personas con discapacidad."
  },
  {
    id: "sanmartin",
    name: "Teatro San Martín",
    type: "Teatro",
    distance: "San Nicolás",
    rating: 4.7,
    address: "Av. Corrientes 1530, San Nicolás",
    lat: -34.6045,
    lng: -58.3891,
    image: "assets/places/teatro-san-martin.svg",
    sourceUrl: "https://complejoteatral.gob.ar/noticia/130",
    sourceLabel: "Complejo Teatral BA",
    features: ["braille", "senas", "audio"],
    featureLabels: ["Programa en braille", "Subtítulos y LSA según función", "Audiodescripción"],
    note: "El programa Teatros Accesibles informa recursos como audiointroducción, audiodescripción, subtítulos en vivo, programa en braille, sonido amplificado, aro magnético individual y visita táctil."
  },
  {
    id: "palacio-libertad",
    name: "Palacio Libertad",
    type: "Centro cultural",
    distance: "Centro",
    rating: 4.7,
    address: "Sarmiento 151, San Nicolás",
    lat: -34.6032,
    lng: -58.3707,
    image: "assets/places/palacio-libertad.svg",
    sourceUrl: "https://palaciolibertad.gob.ar/agenda/",
    sourceLabel: "Palacio Libertad",
    features: ["rampa", "senas", "audio"],
    featureLabels: ["Salas accesibles", "Sillas de ruedas disponibles", "Actividades con LSA"],
    note: "La agenda oficial informa salas accesibles para personas con movilidad reducida, sillas de ruedas disponibles, asistencia de personal y actividades accesibles en múltiples formatos."
  },
  {
    id: "parque-estacion",
    name: "Biblioteca Parque de la Estación",
    type: "Biblioteca",
    distance: "Balvanera",
    rating: 4.5,
    address: "Pres. Tte. Gral. Juan Domingo Perón 3326, Balvanera",
    lat: -34.6081,
    lng: -58.4156,
    image: "assets/places/parque-estacion.svg",
    sourceUrl: "https://buenosaires.gob.ar/cultura/bibliotecas-publicas-de-la-ciudad/biblioteca-cultura-parque-de-la-estacion",
    sourceLabel: "Buenos Aires Ciudad",
    features: ["rampa", "banio"],
    featureLabels: ["Espacio conectado con el parque", "Biblioteca pública"],
    note: "Biblioteca pública inaugurada como espacio conectado con el exterior dentro del Parque de la Estación. La accesibilidad específica debe verificarse antes de visitar."
  }
];

const featureNames = {
  rampa: "rampa",
  braille: "carta en braille",
  banio: "baño accesible",
  senas: "lengua de señas",
  mesa: "mesas con espacio",
  audio: "audiodescripcion o apoyo sonoro"
};

const fallbackImage = `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 506">
  <rect width="900" height="506" fill="#d7e8e2"/>
  <circle cx="450" cy="196" r="72" fill="#176b63"/>
  <path d="M450 105c-50 0-91 40-91 89 0 69 91 158 91 158s91-89 91-158c0-49-41-89-91-89z" fill="#ffffff"/>
  <circle cx="450" cy="194" r="32" fill="#e0a22b"/>
  <text x="450" y="405" text-anchor="middle" font-family="Arial, sans-serif" font-size="42" font-weight="700" fill="#176b63">IncluMapa</text>
  <text x="450" y="452" text-anchor="middle" font-family="Arial, sans-serif" font-size="24" fill="#687574">Imagen no disponible</text>
</svg>`)}`;

const profileNeeds = {
  wheelchair: ["rampa", "banio", "mesa"],
  blind: ["braille", "audio"],
  deaf: ["senas", "audio"],
  neurodivergent: []
};

const state = {
  filter: "all",
  query: "",
  map: null,
  markers: [],
  currentUser: null,
  userMode: "visitor",
  pendingRegistration: null,
  verifiedLocation: null,
  cameraStream: null,
  capturedPhoto: null,
  narration: false,
  profile: "",
  gestureNavigation: false,
  gestureIndex: -1,
  touchStartX: 0,
  touchStartY: 0,
  tapTimes: []
};

function applyViewMode() {
  const params = new URLSearchParams(window.location.search);
  const requested = params.get("version") || localStorage.getItem("inclumapa_view") || "";
  const isDesktop = requested === "pc" || window.location.pathname.toLowerCase().includes("pc");
  const isMobile = requested === "celular" || window.location.pathname.toLowerCase().includes("celular") || !isDesktop;
  document.body.classList.toggle("desktop-view", isDesktop);
  document.body.classList.toggle("mobile-view", isMobile);
  document.body.classList.toggle("places-collapsed", isMobile);
  localStorage.setItem("inclumapa_view", isDesktop ? "pc" : "celular");
}

applyViewMode();

const authScreen = document.querySelector("#authScreen");
const loginForm = document.querySelector("#loginForm");
const registerForm = document.querySelector("#registerForm");
const authMessage = document.querySelector("#authMessage");
const sessionLabel = document.querySelector("#sessionLabel");
const verificationBox = document.querySelector("#verificationBox");
const codePreview = document.querySelector("#codePreview");
const registerSubmitButton = document.querySelector("#registerSubmitButton");
const placesList = document.querySelector("#placesList");
const resultCount = document.querySelector("#resultCount");
const searchInput = document.querySelector("#searchInput");
const filterButtons = document.querySelectorAll(".filter-chip");
const placeDialog = document.querySelector("#placeDialog");
const dialogContent = document.querySelector("#dialogContent");
const suggestDialog = document.querySelector("#suggestDialog");
const settingsDialog = document.querySelector("#settingsDialog");
const demoMap = document.querySelector("#demoMap");
const mapStatus = document.querySelector("#mapStatus");
const locationStatus = document.querySelector("#locationStatus");
const cameraPreview = document.querySelector("#cameraPreview");
const photoCanvas = document.querySelector("#photoCanvas");
const photoPreview = document.querySelector("#photoPreview");
const photoCoach = document.querySelector("#photoCoach");
const startCameraButton = document.querySelector("#startCameraButton");
const capturePhotoButton = document.querySelector("#capturePhotoButton");
const sachoPanel = document.querySelector("#sachoPanel");
const sachoThread = document.querySelector("#sachoThread");
const sachoInput = document.querySelector("#sachoInput");
const narrationToggle = document.querySelector("#narrationToggle");
const disabilitySelect = document.querySelector("#disabilitySelect");
const gestureNavigationToggle = document.querySelector("#gestureNavigationToggle");
const historyList = document.querySelector("#historyList");
const historyNote = document.querySelector("#historyNote");

function normalizeText(value) {
  return value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function escapeHTML(value) {
  return value.replace(/[&<>"']/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "\"": "&quot;",
    "'": "&#039;"
  })[character]);
}

function getUsers() {
  return JSON.parse(localStorage.getItem("inclumapa_users") || "[]");
}

function saveUsers(users) {
  localStorage.setItem("inclumapa_users", JSON.stringify(users));
}

function makeSalt() {
  const values = new Uint8Array(16);
  if (window.crypto?.getRandomValues) {
    window.crypto.getRandomValues(values);
  } else {
    for (let index = 0; index < values.length; index += 1) {
      values[index] = Math.floor(Math.random() * 256);
    }
  }
  return Array.from(values).map((value) => value.toString(16).padStart(2, "0")).join("");
}

async function hashText(value, salt) {
  const text = `${salt}:${value}`;
  if (window.crypto?.subtle) {
    const data = new TextEncoder().encode(text);
    const digest = await window.crypto.subtle.digest("SHA-256", data);
    return Array.from(new Uint8Array(digest)).map((byte) => byte.toString(16).padStart(2, "0")).join("");
  }

  let hash = 2166136261;
  for (let index = 0; index < text.length; index += 1) {
    hash ^= text.charCodeAt(index);
    hash += (hash << 1) + (hash << 4) + (hash << 7) + (hash << 8) + (hash << 24);
  }
  return `fallback-${(hash >>> 0).toString(16)}`;
}

function generateVerificationCode() {
  const values = new Uint32Array(1);
  window.crypto?.getRandomValues?.(values);
  const random = values[0] || Math.floor(Math.random() * 1000000);
  return String(random % 1000000).padStart(6, "0");
}

function saveSession(user, mode) {
  state.currentUser = user;
  state.userMode = mode;
  localStorage.setItem("inclumapa_session", JSON.stringify({ user, mode }));
  updateSessionUI();
}

function loadSession() {
  const session = JSON.parse(localStorage.getItem("inclumapa_session") || "null");
  if (session?.user && session?.mode) {
    state.currentUser = session.user;
    state.userMode = session.mode;
    updateSessionUI();
  } else {
    authScreen.hidden = false;
  }
}

function updateSessionUI() {
  authScreen.hidden = true;
  document.body.classList.toggle("visitor-mode", state.userMode === "visitor");
  const name = state.currentUser?.name || "Visitante";
  sessionLabel.textContent = state.userMode === "visitor"
    ? "Visitante: IA, historial y añadir lugares bloqueados"
    : `Sesión: ${name}`;
  renderHistory();
}

function requireRegistered(featureName) {
  if (state.userMode !== "visitor") return true;
  const message = `Para usar ${featureName} tenés que registrarte o iniciar sesión.`;
  authMessage.textContent = message;
  speak(message);
  alert(message);
  return false;
}

function switchAuthMode(mode) {
  const isRegister = mode === "register";
  loginForm.hidden = isRegister;
  registerForm.hidden = !isRegister;
  document.querySelector("#showLoginButton").classList.toggle("is-active", !isRegister);
  document.querySelector("#showRegisterButton").classList.toggle("is-active", isRegister);
  authMessage.textContent = "";
  state.pendingRegistration = null;
  verificationBox.hidden = true;
  registerSubmitButton.textContent = "Enviar código";
}

async function registerUser(event) {
  event.preventDefault();
  const name = document.querySelector("#registerName").value.trim();
  const email = normalizeText(document.querySelector("#registerEmail").value.trim());
  const password = document.querySelector("#registerPassword").value;
  const enteredCode = document.querySelector("#registerCode").value.trim();

  const users = getUsers();
  if (!state.pendingRegistration) {
    if (!name || !email || password.length < 4) {
      authMessage.textContent = "Completá nombre, email y una contraseña de al menos 4 caracteres.";
      return;
    }

    if (!email.endsWith("@gmail.com")) {
      authMessage.textContent = "Para esta version, usá una cuenta de Gmail.";
      return;
    }

    if (users.some((user) => user.email === email)) {
      authMessage.textContent = "Ese Gmail ya está registrado.";
      return;
    }

    const salt = makeSalt();
    const code = generateVerificationCode();
    state.pendingRegistration = {
      id: `user-${Date.now()}`,
      name,
      email,
      passwordSalt: salt,
      passwordHash: await hashText(password, salt),
      codeSalt: makeSalt(),
      codeExpiresAt: Date.now() + 5 * 60 * 1000
    };
    state.pendingRegistration.codeHash = await hashText(code, state.pendingRegistration.codeSalt);
    verificationBox.hidden = false;
    registerSubmitButton.textContent = "Verificar y crear cuenta";
    authMessage.textContent = "Ingresá el código de 6 dígitos que llegó a tu Gmail.";
    codePreview.textContent = `Prototipo sin servidor de correo: código de prueba ${code}. En producción se enviaría por Gmail.`;
    speak("Código enviado. Ingresá los seis dígitos para crear la cuenta.");
    return;
  }

  if (Date.now() > state.pendingRegistration.codeExpiresAt) {
    authMessage.textContent = "El código venció. Pedí uno nuevo.";
    state.pendingRegistration = null;
    verificationBox.hidden = true;
    registerSubmitButton.textContent = "Enviar código";
    return;
  }

  const enteredHash = await hashText(enteredCode, state.pendingRegistration.codeSalt);
  if (enteredHash !== state.pendingRegistration.codeHash) {
    authMessage.textContent = "Código incorrecto.";
    return;
  }

  const user = {
    id: state.pendingRegistration.id,
    name: state.pendingRegistration.name,
    email: state.pendingRegistration.email,
    passwordSalt: state.pendingRegistration.passwordSalt,
    passwordHash: state.pendingRegistration.passwordHash,
    createdAt: new Date().toISOString()
  };
  users.push(user);
  saveUsers(users);
  saveSession({ id: user.id, name: user.name, email: user.email }, "registered");
  state.pendingRegistration = null;
  verificationBox.hidden = true;
  registerForm.reset();
  speak(`Bienvenido ${user.name}.`);
}

async function loginUser(event) {
  event.preventDefault();
  const email = normalizeText(document.querySelector("#loginEmail").value.trim());
  const password = document.querySelector("#loginPassword").value;
  const user = getUsers().find((item) => item.email === email);

  if (!user?.passwordHash || !user?.passwordSalt) {
    authMessage.textContent = "Email o contraseña incorrectos.";
    return;
  }

  const passwordHash = await hashText(password, user.passwordSalt);
  if (passwordHash !== user.passwordHash) {
    authMessage.textContent = "Email o contraseña incorrectos.";
    return;
  }

  saveSession({ id: user.id, name: user.name, email: user.email }, "registered");
  speak(`Hola ${user.name}.`);
}

function enterAsGuest() {
  saveSession({ id: "guest", name: "Visitante", email: "" }, "visitor");
  speak("Entraste como visitante. Algunas funciones quedan bloqueadas.");
}

function logout() {
  localStorage.removeItem("inclumapa_session");
  state.currentUser = null;
  state.userMode = "visitor";
  authScreen.hidden = false;
  sachoPanel.hidden = true;
  speak("Sesión cerrada.");
}

function getHistoryKey() {
  return `inclumapa_history_${state.currentUser?.id || "guest"}`;
}

function getHistory() {
  if (state.userMode === "visitor") return [];
  return JSON.parse(localStorage.getItem(getHistoryKey()) || "[]");
}

function addToHistory(place) {
  if (state.userMode === "visitor") return;
  const history = getHistory().filter((item) => item.id !== place.id);
  history.unshift({
    id: place.id,
    name: place.name,
    type: place.type,
    date: new Date().toLocaleString("es-AR")
  });
  localStorage.setItem(getHistoryKey(), JSON.stringify(history.slice(0, 12)));
  renderHistory();
}

function renderHistory() {
  if (!historyList || !historyNote) return;
  if (state.userMode === "visitor") {
    historyNote.textContent = "El historial está disponible solo para usuarios registrados.";
    historyList.innerHTML = "";
    return;
  }

  const history = getHistory();
  historyNote.textContent = history.length
    ? "Tus últimos lugares abiertos."
    : "Todavía no abriste lugares con esta cuenta.";
  historyList.innerHTML = history.map((item) => `
    <button class="history-item" type="button" data-history-place-id="${item.id}">
      <span>${escapeHTML(item.name)}</span>
      <small>${escapeHTML(item.date)}</small>
    </button>
  `).join("");
}

function getFilteredPlaces() {
  const query = normalizeText(state.query.trim());
  return places.filter((place) => {
    const matchesFilter = state.filter === "all" || place.features.includes(state.filter);
    const haystack = normalizeText(`${place.name} ${place.type} ${place.address} ${place.featureLabels.join(" ")}`);
    return matchesFilter && (!query || haystack.includes(query));
  });
}

function repairBrokenImages(container = document) {
  container.querySelectorAll("img[data-fallback-image]").forEach((image) => {
    image.addEventListener("error", () => {
      image.src = fallbackImage;
      image.classList.add("image-fallback");
    }, { once: true });
  });
}

function renderPlaces() {
  const filteredPlaces = getFilteredPlaces();
  resultCount.textContent = `${filteredPlaces.length} ${filteredPlaces.length === 1 ? "opcion inclusiva" : "opciones inclusivas"}`;
  placesList.innerHTML = filteredPlaces.map((place) => `
    <article class="place-card">
      <img class="place-image" src="${place.image || fallbackImage}" alt="Imagen de ${place.name}" loading="lazy" data-fallback-image="true" />
      <header>
        <div>
          <h3>${place.name}</h3>
          <small>${place.type} · ${place.distance}</small>
        </div>
        <span class="rating" aria-label="Puntaje ${place.rating}">★ ${place.rating}</span>
      </header>
      <div class="tag-list">
        ${place.featureLabels.map((feature) => `<span class="tag">${feature}</span>`).join("")}
      </div>
      <small class="source-line">Fuente: ${place.sourceLabel}</small>
      <div class="card-actions">
        <button class="secondary-button" type="button" data-action="details" data-place-id="${place.id}">Detalles</button>
        <button class="primary-button" type="button" data-action="route" data-place-id="${place.id}">Ver mapa</button>
      </div>
    </article>
  `).join("");
  repairBrokenImages(placesList);
  syncDemoPins(filteredPlaces);
  syncMapMarkers(filteredPlaces);
}

function syncDemoPins(filteredPlaces) {
  const visibleIds = new Set(filteredPlaces.map((place) => place.id));
  document.querySelectorAll(".pin").forEach((pin) => {
    pin.hidden = !visibleIds.has(pin.dataset.placeId);
  });
}

function openPlace(placeId) {
  const place = places.find((item) => item.id === placeId);
  if (!place) return;
  addToHistory(place);

  dialogContent.innerHTML = `
    <section class="dialog-place">
      <h2>${place.name}</h2>
      <img class="dialog-image" src="${place.image || fallbackImage}" alt="Imagen de ${place.name}" data-fallback-image="true" />
      <div class="tag-list">
        ${place.featureLabels.map((feature) => `<span class="tag">${feature}</span>`).join("")}
      </div>
      <div class="meta-grid">
        <div class="meta-item"><strong>Tipo</strong><span>${place.type}</span></div>
        <div class="meta-item"><strong>Distancia</strong><span>${place.distance}</span></div>
        <div class="meta-item"><strong>Puntaje</strong><span>${place.rating}</span></div>
        <div class="meta-item"><strong>Direccion</strong><span>${place.address}</span></div>
      </div>
      <p>${place.note}</p>
      <p><a class="source-link" href="${place.sourceUrl}" target="_blank" rel="noopener">Ver fuente oficial</a></p>
      <button class="primary-button" type="button" data-action="route" data-place-id="${place.id}">Abrir en OpenStreetMap</button>
    </section>
  `;
  repairBrokenImages(dialogContent);
  placeDialog.showModal();
}

function openRoute(placeId) {
  const place = places.find((item) => item.id === placeId);
  if (!place) return;
  window.open(`https://www.openstreetmap.org/?mlat=${place.lat}&mlon=${place.lng}#map=18/${place.lat}/${place.lng}`, "_blank");
}

function initOpenStreetMap() {
  if (!window.L) {
    mapStatus.hidden = false;
    mapStatus.textContent = "No se pudo cargar OpenStreetMap. Revisá la conexión a internet.";
    return;
  }

  demoMap.style.display = "none";
  mapStatus.hidden = true;

  state.map = L.map("map", {
    zoomControl: true
  }).setView([-34.5935, -58.4215], 13);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(state.map);

  syncMapMarkers(getFilteredPlaces());
}

function syncMapMarkers(filteredPlaces) {
  if (!state.map || !window.L) return;
  state.markers.forEach((marker) => marker.remove());
  state.markers = filteredPlaces.map((place) => {
    const marker = L.marker([place.lat, place.lng])
      .addTo(state.map)
      .bindPopup(`<strong>${escapeHTML(place.name)}</strong><br>${escapeHTML(place.featureLabels.join(", "))}`);
    marker.on("click", () => openPlace(place.id));
    return marker;
  });
}

function captureVerifiedLocation() {
  if (!navigator.geolocation) {
    locationStatus.textContent = "Este dispositivo no permite obtener ubicacion.";
    return;
  }

  locationStatus.textContent = "Pidiendo permiso de ubicacion...";
  navigator.geolocation.getCurrentPosition(
    (position) => {
      state.verifiedLocation = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
        accuracy: Math.round(position.coords.accuracy)
      };
      locationStatus.textContent = `Ubicacion guardada con precision aproximada de ${state.verifiedLocation.accuracy} m.`;
      speak("Ubicacion verificada correctamente.");
    },
    () => {
      locationStatus.textContent = "No se pudo verificar la ubicacion. Revisá los permisos del navegador.";
      speak("No se pudo verificar la ubicacion.");
    },
    { enableHighAccuracy: true, timeout: 12000, maximumAge: 0 }
  );
}

async function startCamera() {
  if (!navigator.mediaDevices?.getUserMedia) {
    photoCoach.textContent = "Este navegador no permite abrir la camara desde la app.";
    speak("Este navegador no permite abrir la camara desde la app.");
    return;
  }

  try {
    stopCamera();
    state.capturedPhoto = null;
    state.cameraStream = await navigator.mediaDevices.getUserMedia({
      video: { facingMode: { ideal: "environment" } },
      audio: false
    });
    cameraPreview.srcObject = state.cameraStream;
    cameraPreview.hidden = false;
    photoPreview.hidden = true;
    capturePhotoButton.disabled = false;
    photoCoach.textContent = "Camara lista. Enfoca la rampa, carta, baño accesible o cartel que quieras validar.";
    speak("Camara lista. Enfoca el elemento inclusivo y toca sacar foto.");
  } catch (error) {
    photoCoach.textContent = "No se pudo abrir la camara. Revisá los permisos del navegador.";
    speak("No se pudo abrir la camara. Revisa los permisos del navegador.");
  }
}

function stopCamera() {
  if (!state.cameraStream) return;
  state.cameraStream.getTracks().forEach((track) => track.stop());
  state.cameraStream = null;
  cameraPreview.srcObject = null;
  cameraPreview.hidden = true;
  capturePhotoButton.disabled = true;
}

function capturePhoto() {
  if (!state.cameraStream || !cameraPreview.videoWidth) {
    photoCoach.textContent = "Primero abri la camara y espera a que se vea la imagen.";
    speak("Primero abri la camara y espera a que se vea la imagen.");
    return;
  }

  photoCanvas.width = cameraPreview.videoWidth;
  photoCanvas.height = cameraPreview.videoHeight;
  const context = photoCanvas.getContext("2d");
  context.drawImage(cameraPreview, 0, 0, photoCanvas.width, photoCanvas.height);
  state.capturedPhoto = photoCanvas.toDataURL("image/jpeg", 0.86);
  photoPreview.src = state.capturedPhoto;
  photoPreview.hidden = false;
  reviewCapturedPhoto();
  stopCamera();
}

function reviewCapturedPhoto() {
  const sampleCanvas = document.createElement("canvas");
  const size = 80;
  sampleCanvas.width = size;
  sampleCanvas.height = size;
  const sampleContext = sampleCanvas.getContext("2d");
  sampleContext.drawImage(photoCanvas, 0, 0, size, size);
  const { data } = sampleContext.getImageData(0, 0, size, size);
  let brightness = 0;
  let contrast = 0;

  for (let index = 0; index < data.length; index += 4) {
    const value = (data[index] + data[index + 1] + data[index + 2]) / 3;
    brightness += value;
    contrast += Math.abs(value - 128);
  }

  const pixels = data.length / 4;
  brightness = brightness / pixels;
  contrast = contrast / pixels;

  const advice = [];
  if (brightness < 80) advice.push("falta luz: acercate a una ventana o encende una luz");
  if (brightness > 210) advice.push("hay demasiada luz: evitá reflejos fuertes");
  if (contrast < 32) advice.push("la foto se ve plana: acercate mas al cartel, rampa o menu");
  if (!advice.length) advice.push("la foto parece valida: buena luz y contraste");

  const message = `Sacho Panza: ${advice.join(". ")}.`;
  photoCoach.textContent = message;
  speak(message);
}

function getRecommendations(question) {
  const normalizedQuestion = normalizeText(question);
  const needs = new Set(profileNeeds[state.profile] || []);
  const placeTypeHints = ["museo", "teatro", "biblioteca", "ciencia", "centro cultural"];

  Object.entries(featureNames).forEach(([feature, label]) => {
    if (normalizedQuestion.includes(normalizeText(label))) needs.add(feature);
  });
  if (normalizedQuestion.includes("ciego") || normalizedQuestion.includes("baja vision")) needs.add("braille");
  if (normalizedQuestion.includes("silla") || normalizedQuestion.includes("rueda") || normalizedQuestion.includes("rampa")) needs.add("rampa");
  if (normalizedQuestion.includes("baño") || normalizedQuestion.includes("banio")) needs.add("banio");
  if (normalizedQuestion.includes("señas") || normalizedQuestion.includes("senas") || normalizedQuestion.includes("sordo")) needs.add("senas");

  const matches = places
    .map((place) => ({
      place,
      score:
        place.features.filter((feature) => needs.has(feature)).length * 2 +
        placeTypeHints.filter((hint) => normalizedQuestion.includes(hint) && normalizeText(place.type).includes(hint)).length +
        (normalizedQuestion.includes(normalizeText(place.distance)) ? 1 : 0) +
        (normalizedQuestion.includes(normalizeText(place.address)) ? 1 : 0)
    }))
    .filter((item) => item.score > 0 || needs.size === 0)
    .sort((a, b) => b.score - a.score || b.place.rating - a.place.rating)
    .slice(0, 2)
    .map((item) => item.place);

  if (!matches.length) {
    return "No encontre una coincidencia perfecta, pero podés probar con filtros de rampa, braille, baño accesible o lengua de señas.";
  }

  return `Pensándolo por tus necesidades, te recomiendo ${matches.map((place) => place.name).join(" y ")}. Elegí esos lugares porque coinciden con ${matches[0].featureLabels.slice(0, 3).join(", ")}.`;
}

function answerBasicQuestion(question) {
  const normalizedQuestion = normalizeText(question);
  if (/(hola|buenas|hey|que tal)/.test(normalizedQuestion)) {
    return "Hola, soy Sacho Panza. Puedo recomendarte lugares, explicarte accesibilidad, ayudarte a elegir según tu perfil o decirte cómo usar la app.";
  }
  if (normalizedQuestion.includes("seguridad") || normalizedQuestion.includes("datos") || normalizedQuestion.includes("privacidad")) {
    return "Tus datos se guardan localmente en este dispositivo. La contraseña se guarda con hash y sal, no como texto plano. Aun así, para una versión pública conviene usar backend seguro, HTTPS, base de datos protegida y envío real de códigos por correo.";
  }
  if (normalizedQuestion.includes("visitante")) {
    return "Como visitante podés mirar el mapa y consultar lugares. Para usar IA, subir lugares y guardar historial tenés que registrarte.";
  }
  if (normalizedQuestion.includes("foto") || normalizedQuestion.includes("camara")) {
    return "La foto debe sacarse desde la cámara de la app. Buscá buena luz, enfocá la evidencia de accesibilidad y evitá reflejos.";
  }
  if (normalizedQuestion.includes("ubicacion")) {
    return "La ubicación se pide para validar que estás cerca del lugar cuando sugerís una mejora. Eso reduce reportes falsos, aunque una versión final también debería tener moderación.";
  }
  if (normalizedQuestion.includes("ciego") || normalizedQuestion.includes("baja vision")) {
    return "Activá narración y exploración táctil en Configuración. Después podés deslizar para recorrer, doble toque para elegir y triple toque para volver.";
  }
  if (normalizedQuestion.includes("sordo") || normalizedQuestion.includes("señas") || normalizedQuestion.includes("senas")) {
    return "Para personas sordas conviene buscar lugares con LSA, subtítulos, aro magnético o asistencia visual. En la app podés usar el filtro de Lengua de señas.";
  }
  if (normalizedQuestion.includes("silla") || normalizedQuestion.includes("ruedas") || normalizedQuestion.includes("movilidad")) {
    return "Para movilidad reducida conviene priorizar rampa, ascensor, baño accesible y circulación sin barreras. Puedo recomendar lugares con esos criterios.";
  }
  return "";
}

function answerWithReasoning(question) {
  const basicAnswer = answerBasicQuestion(question);
  if (basicAnswer) return basicAnswer;
  const normalizedQuestion = normalizeText(question);
  if (normalizedQuestion.includes("por que") || normalizedQuestion.includes("porque") || normalizedQuestion.includes("razona")) {
    return "Para razonar una recomendación miro tres cosas: tu perfil de accesibilidad, las características del lugar y la confiabilidad de la fuente. Si un lugar no tiene fuente clara, prefiero marcarlo como dato a verificar antes de que alguien viaje.";
  }
  return getRecommendations(question);
}

function askSacho(question) {
  const cleanQuestion = question.trim();
  if (!cleanQuestion) return;
  const answer = answerWithReasoning(cleanQuestion);
  sachoThread.innerHTML += `<p><strong>Vos:</strong> ${escapeHTML(cleanQuestion)}</p><p><strong>Sacho Panza:</strong> ${escapeHTML(answer)}</p>`;
  sachoThread.scrollTop = sachoThread.scrollHeight;
  sachoInput.value = "";
  speak(answer);
}

function speak(text) {
  if (!state.narration || !("speechSynthesis" in window)) return;
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "es-AR";
  window.speechSynthesis.speak(utterance);
}

function describeElement(element) {
  const text = element.getAttribute("aria-label") || element.innerText || element.value || element.placeholder;
  if (text) speak(text.trim());
}

function getGestureItems() {
  return Array.from(document.querySelectorAll("button:not([disabled]), input, textarea, select, [tabindex='0']"))
    .filter((element) => element.offsetParent !== null && !element.closest("[hidden]"));
}

function selectGestureItem(nextIndex) {
  const items = getGestureItems();
  if (!items.length) return;
  document.querySelector(".gesture-selected")?.classList.remove("gesture-selected");
  state.gestureIndex = (nextIndex + items.length) % items.length;
  const selected = items[state.gestureIndex];
  selected.classList.add("gesture-selected");
  selected.focus({ preventScroll: false });
  selected.scrollIntoView({ block: "center", inline: "center", behavior: "smooth" });
  describeElement(selected);
}

function activateGestureItem() {
  const items = getGestureItems();
  const selected = items[state.gestureIndex];
  if (!selected) return;
  speak("Seleccionado.");
  selected.click();
}

function goBackByGesture() {
  document.querySelector(".gesture-selected")?.classList.remove("gesture-selected");
  state.gestureIndex = -1;
  if (placeDialog.open) placeDialog.close();
  else if (suggestDialog.open) suggestDialog.close();
  else if (settingsDialog.open) settingsDialog.close();
  else if (!sachoPanel.hidden) sachoPanel.hidden = true;
  speak("Volver.");
}

function handleGestureTap(event) {
  if (!state.gestureNavigation) return;
  if (event.target.matches("input, textarea, select")) return;

  const now = Date.now();
  state.tapTimes = state.tapTimes.filter((time) => now - time < 650);
  state.tapTimes.push(now);

  if (state.tapTimes.length >= 3) {
    event.preventDefault();
    state.tapTimes = [];
    goBackByGesture();
    return;
  }

  if (state.tapTimes.length === 2) {
    event.preventDefault();
    window.setTimeout(() => {
      if (state.tapTimes.length === 2) {
        state.tapTimes = [];
        activateGestureItem();
      }
    }, 180);
  }
}

function handleGestureSwipe(event) {
  if (!state.gestureNavigation) return;
  const touch = event.changedTouches[0];
  const deltaX = touch.clientX - state.touchStartX;
  const deltaY = touch.clientY - state.touchStartY;
  if (Math.abs(deltaX) < 45 || Math.abs(deltaX) < Math.abs(deltaY)) return;
  event.preventDefault();
  selectGestureItem(state.gestureIndex + (deltaX < 0 ? 1 : -1));
}

function setPlacesPanelCollapsed(collapsed) {
  if (!document.body.classList.contains("mobile-view")) return;
  document.body.classList.toggle("places-collapsed", collapsed);
  window.setTimeout(() => {
    if (state.map?.invalidateSize) state.map.invalidateSize();
  }, 260);
}

function setupPlacesPanelDrag() {
  const panel = document.querySelector(".places-panel");
  const handle = document.querySelector(".panel-handle");
  if (!panel || !handle) return;
  let startY = 0;
  let dragging = false;

  const beginDrag = (clientY) => {
    dragging = true;
    startY = clientY;
    panel.classList.add("is-dragging");
  };

  const finishDrag = (clientY) => {
    if (!dragging) return;
    dragging = false;
    panel.classList.remove("is-dragging");
    const deltaY = clientY - startY;
    if (Math.abs(deltaY) < 20) {
      setPlacesPanelCollapsed(!document.body.classList.contains("places-collapsed"));
      return;
    }
    setPlacesPanelCollapsed(deltaY > 0);
  };

  handle.addEventListener("click", () => {
    setPlacesPanelCollapsed(!document.body.classList.contains("places-collapsed"));
  });
  handle.addEventListener("touchstart", (event) => beginDrag(event.changedTouches[0].clientY), { passive: true });
  handle.addEventListener("touchend", (event) => finishDrag(event.changedTouches[0].clientY), { passive: true });
  handle.addEventListener("pointerdown", (event) => beginDrag(event.clientY));
  window.addEventListener("pointerup", (event) => finishDrag(event.clientY));
}

document.querySelector("#showLoginButton").addEventListener("click", () => switchAuthMode("login"));
document.querySelector("#showRegisterButton").addEventListener("click", () => switchAuthMode("register"));
loginForm.addEventListener("submit", loginUser);
registerForm.addEventListener("submit", registerUser);
document.querySelector("#guestButton").addEventListener("click", enterAsGuest);
document.querySelector("#logoutButton").addEventListener("click", logout);

searchInput.addEventListener("input", (event) => {
  state.query = event.target.value;
  renderPlaces();
});

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((item) => item.classList.remove("is-active"));
    button.classList.add("is-active");
    state.filter = button.dataset.filter;
    renderPlaces();
  });
});

placesList.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-action]");
  if (!button) return;
  if (button.dataset.action === "details") openPlace(button.dataset.placeId);
  if (button.dataset.action === "route") openRoute(button.dataset.placeId);
});

demoMap.addEventListener("click", (event) => {
  const pin = event.target.closest(".pin");
  if (pin) openPlace(pin.dataset.placeId);
});

dialogContent.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-action='route']");
  if (button) openRoute(button.dataset.placeId);
});

document.querySelector("#closeDialogButton").addEventListener("click", () => placeDialog.close());
document.querySelector("#addPlaceButton").addEventListener("click", () => {
  if (!requireRegistered("añadir lugares")) return;
  document.querySelector("#suggestForm").reset();
  state.verifiedLocation = null;
  state.capturedPhoto = null;
  locationStatus.textContent = "Pidiendo permiso de ubicacion...";
  photoPreview.hidden = true;
  photoCoach.textContent = "Sacho Panza revisa luz, nitidez aproximada y encuadre cuando saques una foto desde la app.";
  suggestDialog.showModal();
  captureVerifiedLocation();
});
document.querySelector("#closeSuggestButton").addEventListener("click", () => {
  stopCamera();
  suggestDialog.close();
});
document.querySelector("#settingsButton").addEventListener("click", () => settingsDialog.showModal());
document.querySelector("#closeSettingsButton").addEventListener("click", () => settingsDialog.close());
document.querySelector("#captureLocationButton").addEventListener("click", captureVerifiedLocation);
startCameraButton.addEventListener("click", startCamera);
capturePhotoButton.addEventListener("click", capturePhoto);
suggestDialog.addEventListener("close", stopCamera);

historyList.addEventListener("click", (event) => {
  const button = event.target.closest("[data-history-place-id]");
  if (!button) return;
  settingsDialog.close();
  openPlace(button.dataset.historyPlaceId);
});

document.querySelector("#suggestForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const name = document.querySelector("#suggestName").value.trim() || "Lugar sugerido";
  const selectedFeatures = Array.from(form.querySelectorAll("input[type='checkbox']:checked")).map((input) => input.value);
  const featureList = selectedFeatures.length ? selectedFeatures : ["rampa"];
  const note = document.querySelector("#suggestNote").value.trim() || "Sugerencia enviada por la comunidad, pendiente de revision.";
  const verifiedLocation = state.verifiedLocation || { lat: -34.5935, lng: -58.4215, accuracy: null };

  if (!state.verifiedLocation) {
    const message = "Para enviar el lugar tenes que permitir la ubicacion del telefono.";
    locationStatus.textContent = message;
    speak(message);
    return;
  }

  if (!state.capturedPhoto) {
    const message = "Para enviar el lugar tenes que sacar una foto desde la camara de la app.";
    photoCoach.textContent = message;
    speak(message);
    return;
  }

  places.unshift({
    id: `user-${Date.now()}`,
    name,
    type: "Sugerido",
    distance: "Ubicacion verificada",
    rating: 5,
    address: "Ubicacion enviada desde el telefono",
    lat: verifiedLocation.lat,
    lng: verifiedLocation.lng,
    features: featureList,
    featureLabels: featureList.map((feature) => featureNames[feature] || feature),
    note
  });

  const status = state.verifiedLocation
    ? "Sugerencia agregada con ubicacion verificada."
    : "Sugerencia agregada, pero queda pendiente verificar ubicacion.";
  photoCoach.textContent = status;
  form.reset();
  photoPreview.hidden = true;
  state.verifiedLocation = null;
  state.capturedPhoto = null;
  locationStatus.textContent = "Todavia no se pidio permiso.";
  suggestDialog.close();
  renderPlaces();
  speak(status);
});

document.querySelector("#sachoButton").addEventListener("click", () => {
  if (!requireRegistered("Sacho Panza")) return;
  sachoPanel.hidden = !sachoPanel.hidden;
  if (!sachoPanel.hidden) speak("Sacho Panza abierto. Escribi que lugar necesitás.");
});

document.querySelector("#closeSachoButton").addEventListener("click", () => {
  sachoPanel.hidden = true;
});

document.querySelector("#askSachoButton").addEventListener("click", () => askSacho(sachoInput.value));
sachoInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") askSacho(sachoInput.value);
});

document.querySelectorAll(".quick-prompts button").forEach((button) => {
  button.addEventListener("click", () => askSacho(button.dataset.question));
});

narrationToggle.addEventListener("change", (event) => {
  state.narration = event.target.checked;
  document.body.classList.toggle("narration-on", state.narration);
  speak("Narracion activada. Voy a relatar botones y acciones al tocar.");
});

gestureNavigationToggle.addEventListener("change", (event) => {
  state.gestureNavigation = event.target.checked;
  state.narration = state.narration || state.gestureNavigation;
  narrationToggle.checked = state.narration;
  document.body.classList.toggle("narration-on", state.narration);
  document.body.classList.toggle("gesture-mode", state.gestureNavigation);
  if (state.gestureNavigation) {
    speak("Modo exploracion tactil activado. Desliza para recorrer. Doble toque para seleccionar. Triple toque para volver.");
    selectGestureItem(0);
  } else {
    document.querySelector(".gesture-selected")?.classList.remove("gesture-selected");
    state.gestureIndex = -1;
    speak("Modo exploracion tactil desactivado.");
  }
});

disabilitySelect.addEventListener("change", (event) => {
  state.profile = event.target.value;
  speak("Perfil actualizado.");
});

document.addEventListener("focusin", (event) => {
  if (state.narration && event.target.matches("button, input, textarea, select")) {
    describeElement(event.target);
  }
});

document.addEventListener("click", (event) => {
  const target = event.target.closest("button, input, textarea, select");
  if (state.narration && target) describeElement(target);
});

document.addEventListener("touchstart", (event) => {
  if (!state.gestureNavigation || !event.changedTouches.length) return;
  state.touchStartX = event.changedTouches[0].clientX;
  state.touchStartY = event.changedTouches[0].clientY;
}, { passive: true });

document.addEventListener("touchend", (event) => {
  if (!state.gestureNavigation || !event.changedTouches.length) return;
  const touch = event.changedTouches[0];
  const deltaX = touch.clientX - state.touchStartX;
  const deltaY = touch.clientY - state.touchStartY;
  if (Math.abs(deltaX) > 45 && Math.abs(deltaX) > Math.abs(deltaY)) {
    handleGestureSwipe(event);
  } else {
    handleGestureTap(event);
  }
}, { passive: false });

document.querySelector("#locateButton").addEventListener("click", () => {
  if (!navigator.geolocation) return;
  navigator.geolocation.getCurrentPosition((position) => {
    if (state.map) {
      state.map.setView([position.coords.latitude, position.coords.longitude], 15);
    }
    speak("Mapa centrado en tu ubicacion.");
  });
});

loadSession();
renderPlaces();
initOpenStreetMap();
setupPlacesPanelDrag();
