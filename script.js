
/* ==========================================
   ORACULO — SISTEMA PRINCIPAL
   Rede inicial, perfil, consultoria, oráculo,
   pedidos e assistência física.
   ========================================== */
(() => {
  "use strict";

  /* CONFIGURAÇÃO */
  const GOOGLE_MAPS_API_KEY = "COLOCA_A_TUA_CHAVE_RESTRINGIDA_AQUI";
  const TEMPO_REDE = 12500;
  const TEMPO_FRASE = 2600;
  const TEMPO_SCANNER = 12000;
  const TEMPO_CARREGAMENTO = 8500;
  const TEMPO_ENTIDADE = 1600;
  const TEMPO_ORACULO = 7000;
  const TEMPO_INTERPRETACAO = 4000;

  const PROFILE_URL =
    "https://www.google.com/maps/contrib/108003330993722570596/photos/@41.7815287,-2.9185443,1495m/data=!3m2!1e3!4b1!4m3!8m2!3m1!1e1?entry=ttu";

  const PALETA = [
    [245, 245, 245],
    [220, 220, 220],
    [190, 190, 190],
    [165, 165, 165],
    [232, 232, 232],
    [205, 205, 205]
  ];

  /* ==========================================
     IMAGENS E ENTIDADES
     ========================================== */

  const RAW =
    "https://raw.githubusercontent.com/souxaea12ousouy/oraculoRede/main/";

  const ENTIDADES = [
    {
      id: "porto-fran-gonzalez",
      latitude: 41.1377953,
      longitude: -8.61107562,
      heading: 14.63244021,
      pitch: 0,
      fov: 60,

      earthUrl:
        "https://earth.google.com/web/@41.1377953,-8.61107562,16.0699872a,0d,60y,14.63244021h,0.001t,0r/data=CgRCAggCIhsKF0NJSE0wb2dLRUlDQWdJRHFuYmlVaUFFEAUyKQonCiUKITFKMnpTNVBjYXpDODNjNEx0ZFg1V1VUN1pzRlBHNHJuVSABOgMKATBCAggASggI5P2GhAUQAQ",

      perfilUrl:
        "https://www.google.com/maps/contrib/108003330993722570596/photos/@41.7815287,-2.9185443,1495m/data=!3m2!1e3!4b1!4m3!8m2!3m1!1e1?entry=ttu",

      fotoUrl: RAW + "frangonzalex_perfil.png",

      imagens: [
        RAW + "fran_image1.png",
        RAW + "fran_image2.png",
        RAW + "fran_image3.png"
      ],

      oferendaUrl: RAW + "fran_oferenda.png",

      perfil: {
        nome: "Fran González",
        pontos: "5 516",
        pontosMaximos: "15 000",

        estatisticas: [
          ["Críticas", "61"],
          ["Classificações", "9"],
          ["Fotos", "795"],
          ["Vídeos", "27"],
          ["Legendas", "1"],
          ["Dicas", "0"],
          ["Respostas", "45"],
          ["Edições", "5"],
          ["Denunciadas como incorretas", "0"],
          ["Locais adicionados", "10"],
          ["Estradas adicionadas", "0"],
          ["P/R", "0"],
          ["Feedback de viagem", "0"],
          ["Relatórios de incidentes", "57"]
        ]
      }
    },

    {
      id: "trung-nguyen",
      latitude: 41.14775852,
      longitude: -8.60992886,
      heading: 209.312295,
      pitch: 0,
      fov: 60,

      earthUrl:
        "https://earth.google.com/web/@41.14775852,-8.60992886,72.69511898a,0d,60y,209.312295h,0.001t,0r/data=CgRCAggCIhoKFkNJSE0wb2dLRUlDQWdJREUxUFBTV0EQBTIpCicKJQohMUoyelM1UGNhekM4M2M0THRkWDVXVVQ3WnNGUEc0cm5VIAE6AwoBMEICCABKCAjk_YaEBRAB",

      perfilUrl:
        "https://www.google.com/maps/contrib/112415029962243514414/photos/@26.7908381,-81.3322905,458007m/data=!3m1!1e3!4m3!8m2!3m1!1e1?entry=ttu",

      fotoUrl: RAW + "trungnguyen_perfil.png",

      imagens: [
        RAW + "trung_image1.png",
        RAW + "trung_image2.png",
        RAW + "trung_image3.png"
      ],

      oferendaUrl: RAW + "trung_oferenda.png",

      perfil: {
        nome: "Trung Nguyen",
        pontos: "36 711",
        pontosMaximos: "50 000",

        estatisticas: [
          ["Críticas", "277"],
          ["Classificações", "1497"],
          ["Fotos", "6101"],
          ["Vídeos", "16"],
          ["Legendas", "0"],
          ["Dicas", "0"],
          ["Respostas", "137"],
          ["Edições", "3"],
          ["Denunciadas como incorretas", "0"],
          ["Locais adicionados", "2"],
          ["Estradas adicionadas", "0"],
          ["P/R", "3"],
          ["Feedback de viagem", "0"],
          ["Relatórios de incidentes", "0"]
        ]
      }
    },

    {
      id: "kirill-kuznetsov",
      latitude: 41.15750118,
      longitude: -8.60555547,
      heading: 19.02078357,
      pitch: 46.1554382,
      fov: 90,

      earthUrl:
        "https://earth.google.com/web/@41.15750118,-8.60555547,142.3084332a,0d,90y,19.02078357h,46.1554382t,0r/data=CgRCAggCIhsKF0NJSE0wb2dLRUlDQWdJQ0VvZkhyaWdFEAUyKQonCiUKITFKMnpTNVBjYXpDODNjNEx0ZFg1V1VUN1pzRlBHNHJuVSABOgMKATBCAggASggI5P2GhAUQAQ",

      perfilUrl:
        "https://www.google.com/maps/contrib/103963947019199521182/photos/@47.2352744,16.2525889,5574045m/data=!3m1!1e3!4m3!8m2!3m1!1e1?entry=ttu",

      fotoUrl:
        RAW + "%D0%9A%D0%B8%D1%80%D0%B8%D0%BB%D0%BB%D0%9A%D1%83%D0%B7%D0%BD%D0%B5%D1%86%D0%BE%D0%B2_perfil.png",

      imagens: [
        RAW + "%D0%9A%D0%B8%D1%80%D0%B8%D0%BB%D0%BB_image1.png",
        RAW + "%D0%9A%D0%B8%D1%80%D0%B8%D0%BB%D0%BB_image2.png",
        RAW + "%D0%9A%D0%B8%D1%80%D0%B8%D0%BB%D0%BB_image3.png"
      ],

      oferendaUrl:
        RAW + "%D0%9A%D0%B8%D1%80%D0%B8%D0%BB%D0%BB_oferenda.png",

      perfil: {
        nome: "Кирилл Кузнецов",
        pontos: "713",
        pontosMaximos: "1 500",

        estatisticas: [
          ["Críticas", "8"],
          ["Classificações", "14"],
          ["Fotos", "109"],
          ["Vídeos", "0"],
          ["Legendas", "0"],
          ["Dicas", "0"],
          ["Respostas", "66"],
          ["Edições", "0"],
          ["Denunciadas como incorretas", "0"],
          ["Locais adicionados", "0"],
          ["Estradas adicionadas", "0"],
          ["P/R", "0"],
          ["Feedback de viagem", "0"],
          ["Relatórios de incidentes", "0"]
        ]
      }
    },

    {
      id: "pavel-golovinsky",
      latitude: 41.13829422,
      longitude: -8.60747244,
      heading: 87.85517648,
      pitch: 13.57570642,
      fov: 60,

      earthUrl:
        "https://earth.google.com/web/@41.13829422,-8.60747244,80.93608152a,0d,60y,87.85517648h,13.57570642t,0r/data=CgRCAggCIhsKF0NJSE0wb2dLRUlDQWdJREVvWld3NWdFEAUyKQonCiUKITFKMnpTNVBjYXpDODNjNEx0ZFg1V1VUN1pzRlBHNHJuVSABOgMKATBCAggASggI5P2GhAUQAQ",

      perfilUrl:
        "https://www.google.com/maps/contrib/104172082461287320500/photos/@30.4004998,-88.0386449,3540310m/data=!3m2!1e3!4b1!4m3!8m2!3m1!1e1?entry=ttu",

      fotoUrl: RAW + "pavelgolovinsky_perfil.png",

      imagens: [
        RAW + "pavel_image1.png",
        RAW + "pavel_image2.png",
        RAW + "pavel_image3.png"
      ],

      oferendaUrl: RAW + "pavel_oferenda.png",

      perfil: {
        nome: "Pavel Golovinsky",
        pontos: "7 585",
        pontosMaximos: "15 000",

        estatisticas: [
          ["Críticas", "113"],
          ["Classificações", "19"],
          ["Fotos", "1045"],
          ["Vídeos", "0"],
          ["Legendas", "0"],
          ["Dicas", "0"],
          ["Respostas", "534"],
          ["Edições", "4"],
          ["Denunciadas como incorretas", "0"],
          ["Locais adicionados", "3"],
          ["Estradas adicionadas", "0"],
          ["P/R", "1"],
          ["Feedback de viagem", "0"],
          ["Relatórios de incidentes", "34"]
        ]
      }
    }
  ];

  /* ==========================================
     ELEMENTOS HTML
     ========================================== */

  const el = (id) => document.getElementById(id);

  const canvas = el("internet-map");
  const connectButton = el("connect-button");
  const openingScreen = el("opening-screen");
  const readingScreen = el("reading-screen");
  const instructionPhase = el("hand-instruction-phase");
  const handPhase = el("hand-phase");
  const loadingPhase = el("loading-phase");
  const foundPhase = el("found-phase");
  const progressTrack = el("progress-track");
  const progressFill = el("progress-fill");

  const mapModal = el("map-modal");
  const closeMapButton = el("close-map-button");
  const streetViewFrame = el("streetview-frame");
  const mapLocationLabel = el("map-location-label");

  const profileScreen = el("profile-screen");
  const profileNameLink = el("profile-name-link");
  const profilePoints = el("profile-points");
  const profileStats = el("profile-stats");
  const consultButton = el("consult-button");

  const servicesScreen = el("services-screen");
  const serviceActions = Array.from(
    document.querySelectorAll(".service-action")
  );

  const consultoriaScreen = el("consultoria-screen");
  const closeConsultoriaButton = el("close-consultoria");
  const consultModeScreen = el("consult-mode-screen");

  const consultModeButtons = Array.from(
    document.querySelectorAll(".consult-mode-button")
  );

  const mentalizePhase = el("mentalize-phase");
  const questionPhase = el("question-phase");
  const answerPhase = el("answer-phase");
  const otherModePhase = el("other-mode-phase");
  const serviceDetailPhase = el("service-detail-phase");
  const otherModeTitle = el("other-mode-title");
  const serviceDetailTitle = el("service-detail-title");

  const questionForm = el("yes-no-form");
  const questionInput = el("yes-no-question");
  const answerWord = el("answer-word");
  const backToConsultoriaButton = el("back-to-consultoria");
  const backToServicesButton = el("back-to-services");

  /* ORÁCULO */
  const entropyBreathPhase = el("entropy-breath-phase");
  const entropyCupButton = el("entropy-cup-button");
  const entropyAnimationPhase = el("entropy-animation-phase");
  const entropyReadingPhase = el("entropy-reading-phase");
  const entropyCanvas = el("entropy-canvas");

  const entropyProcessingPhase = el("entropy-processing-phase");
  const entropyProgressTrack = el("entropy-progress-track");
  const entropyProgressFill = el("entropy-progress-fill");

  const entropySystemLabel =
    el("entropy-processing-label") ||
    el("entropy-system-label") ||
    { textContent: "" };

  const entropyTitle = el("entropy-reading-title");
  const entropyParagraphOne = el("entropy-reading-paragraph-one");
  const entropyParagraphTwo = el("entropy-reading-paragraph-two");
  const entropyBackButton = el("entropy-back");

  /* PEDIDOS */
  const requestsInterface = el("requests-interface");
  const requestsProfileStep = el("requests-step-profile");
  const requestsOfferingsStep = el("requests-step-offerings");
  const requestsSmokeStep = el("requests-step-smoke");

  const requestsEntityProfileCard = el("requests-entity-profile-card");
  const requestsFollowButton = el("requests-follow-order");
  const requestsEntityName = el("requests-entity-name");
  const requestsImageGrid = el("requests-image-grid");
  const requestsSelectionCount = el("requests-selection-count");
  const requestsOfferingFeedback = el("requests-offering-feedback");
  const requestsSmokeOverlay = el("requests-smoke-overlay");
  const requestsSmokeCloud = el("requests-smoke-cloud");
  const requestsFinalImage = el("requests-final-image-placeholder");

  const requestsSmokeTitle =
    requestsSmokeStep?.querySelector(".requests-lead");

  /* ASSISTÊNCIA FÍSICA */
  const assistanceInterface = el("assistance-interface");
  const meetingForm = el("meeting-form");
  const meetingDate = el("meeting-date");
  const meetingTime = el("meeting-time");
  const meetingPlace = el("meeting-place");
  const meetingConfirmation = el("meeting-confirmation");
  const meetingConfirmationMessage = el("meeting-confirmation-message");
  const editMeetingButton = el("edit-meeting");

  /* VALIDAR ELEMENTOS */
  const requiredElements = [
    ["internet-map", canvas],
    ["connect-button", connectButton],
    ["opening-screen", openingScreen],
    ["reading-screen", readingScreen],
    ["hand-instruction-phase", instructionPhase],
    ["hand-phase", handPhase],
    ["loading-phase", loadingPhase],
    ["found-phase", foundPhase],
    ["progress-track", progressTrack],
    ["progress-fill", progressFill],
    ["map-modal", mapModal],
    ["close-map-button", closeMapButton],
    ["streetview-frame", streetViewFrame],
    ["map-location-label", mapLocationLabel],
    ["profile-screen", profileScreen],
    ["profile-name-link", profileNameLink],
    ["profile-points", profilePoints],
    ["profile-stats", profileStats],
    ["consult-button", consultButton],
    ["services-screen", servicesScreen],
    ["consultoria-screen", consultoriaScreen],
    ["close-consultoria", closeConsultoriaButton],
    ["consult-mode-screen", consultModeScreen],
    ["mentalize-phase", mentalizePhase],
    ["question-phase", questionPhase],
    ["answer-phase", answerPhase],
    ["other-mode-phase", otherModePhase],
    ["service-detail-phase", serviceDetailPhase],
    ["other-mode-title", otherModeTitle],
    ["service-detail-title", serviceDetailTitle],
    ["yes-no-form", questionForm],
    ["yes-no-question", questionInput],
    ["answer-word", answerWord],
    ["back-to-consultoria", backToConsultoriaButton],
    ["back-to-services", backToServicesButton],
    ["entropy-breath-phase", entropyBreathPhase],
    ["entropy-cup-button", entropyCupButton],
    ["entropy-animation-phase", entropyAnimationPhase],
    ["entropy-reading-phase", entropyReadingPhase],
    ["entropy-canvas", entropyCanvas],
    ["entropy-reading-title", entropyTitle],
    ["entropy-reading-paragraph-one", entropyParagraphOne],
    ["entropy-reading-paragraph-two", entropyParagraphTwo],
    ["entropy-back", entropyBackButton],
    ["requests-interface", requestsInterface],
    ["requests-step-profile", requestsProfileStep],
    ["requests-step-offerings", requestsOfferingsStep],
    ["requests-step-smoke", requestsSmokeStep],
    ["requests-entity-profile-card", requestsEntityProfileCard],
    ["requests-follow-order", requestsFollowButton],
    ["requests-entity-name", requestsEntityName],
    ["requests-image-grid", requestsImageGrid],
    ["requests-selection-count", requestsSelectionCount],
    ["requests-offering-feedback", requestsOfferingFeedback],
    ["requests-smoke-overlay", requestsSmokeOverlay],
    ["requests-smoke-cloud", requestsSmokeCloud],
    ["requests-final-image-placeholder", requestsFinalImage],
    ["assistance-interface", assistanceInterface],
    ["meeting-form", meetingForm],
    ["meeting-date", meetingDate],
    ["meeting-time", meetingTime],
    ["meeting-place", meetingPlace],
    ["meeting-confirmation", meetingConfirmation],
    ["meeting-confirmation-message", meetingConfirmationMessage],
    ["edit-meeting", editMeetingButton]
  ];

  const missingElements = requiredElements
    .filter(([, element]) => !element)
    .map(([id]) => id);

  if (missingElements.length > 0) {
    console.error(
      "ORACULO: faltam estes elementos no HTML: " +
      missingElements.join(", ")
    );
    return;
  }

  const ctx = canvas.getContext("2d");
  const entropyCtx = entropyCanvas.getContext("2d");

  if (!ctx || !entropyCtx) {
    console.error("ORACULO: não foi possível iniciar os canvas.");
    return;
  }

  /* Criar a mensagem final dos Pedidos sem alterar o HTML. */
  const requestsFinalMessage = document.createElement("p");
  requestsFinalMessage.id = "requests-final-message";
  requestsFinalMessage.className = "requests-final-message";
  requestsFinalMessage.hidden = true;
  requestsFinalImage.insertAdjacentElement(
    "afterend",
    requestsFinalMessage
  );

  Object.assign(requestsFinalMessage.style, {
    color: "#eeeeee",
    fontFamily: '"Courier New", monospace',
    fontSize: "14px",
    lineHeight: "1.7",
    textAlign: "center",
    maxWidth: "420px",
    margin: "22px auto 0",
    padding: "0 18px"
  });

  /* O overlay passa para o body para a fumaça cobrir a página inteira. */
  document.body.appendChild(requestsSmokeOverlay);

  /* ESTADO */
  let width = window.innerWidth;
  let height = window.innerHeight;
  let pixelRatio = 1;

  let nodes = [];
  let edges = [];
  let networkStart = null;
  let networkProgress = 0;
  let networkFinished = false;
  let experienceStarted = false;
  let activeEntity = null;

  let modeRunId = 0;
  let entropyAnimationFrame = null;
  let entropyNodes = [];
  let requestsSmokeTimer = null;

  const selectedOfferingCards = new Set();

  const clamp = (value, min = 0, max = 1) =>
    Math.min(max, Math.max(min, value));

  function smooth(value) {
    const t = clamp(value);
    return t * t * (3 - 2 * t);
  }

  function wait(ms) {
    return new Promise((resolve) => window.setTimeout(resolve, ms));
  }

  /* ==========================================
     1. REDE INICIAL
     ========================================== */

  function resizeNetwork() {
    width = window.innerWidth;
    height = window.innerHeight;
    pixelRatio = Math.min(window.devicePixelRatio || 1, 2);

    canvas.width = Math.floor(width * pixelRatio);
    canvas.height = Math.floor(height * pixelRatio);
    canvas.style.width = width + "px";
    canvas.style.height = height + "px";

    ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);

    createNodes();
    createEdges();
    drawNetwork(networkProgress);

    if (networkFinished) {
      connectButton.classList.add("is-visible");
      connectButton.setAttribute("aria-hidden", "false");
    }
  }

  function createNodes() {
    const count = Math.min(
      1700,
      Math.max(560, Math.floor(width * height / 850))
    );

    const radius = Math.min(width, height) * 0.455;
    const cx = width / 2;
    const cy = height / 2;

    nodes = [];

    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      let distance;

      if (Math.random() < 0.22) {
        distance = Math.pow(Math.random(), 1.65) * radius * 0.7;
      } else {
        distance = Math.pow(Math.random(), 0.78) * radius;
      }

      distance *= 0.94 + Math.random() * 0.08;

      const sector = Math.min(
        PALETA.length - 1,
        Math.floor(angle / (Math.PI * 2) * PALETA.length)
      );

      nodes.push({
        index: i,
        x: cx + Math.cos(angle) * distance,
        y: cy + Math.sin(angle) * distance,
        radial: distance,
        color: PALETA[sector],
        size: 0.55 + Math.random() * 0.85,
        energy: Math.random(),
        revealAt: 0.015 + (distance / radius) * 0.63 + Math.random() * 0.19,
        degree: 0,
        sparkle: false
      });
    }
  }

  function createEdges() {
    edges = [];

    const edgeMap = new Map();
    const cellSize = 58;

    const maxDistance = Math.min(
      84,
      Math.max(58, Math.min(width, height) * 0.105)
    );

    const maxDistanceSquared = maxDistance * maxDistance;
    const grid = new Map();

    const cellKey = (x, y) => `${x},${y}`;

    for (const node of nodes) {
      node.cellX = Math.floor(node.x / cellSize);
      node.cellY = Math.floor(node.y / cellSize);

      const key = cellKey(node.cellX, node.cellY);

      if (!grid.has(key)) grid.set(key, []);
      grid.get(key).push(node.index);
    }

    function addEdge(indexA, indexB, backbone = false) {
      if (indexA === indexB) return;

      const a = Math.min(indexA, indexB);
      const b = Math.max(indexA, indexB);
      const key = `${a}:${b}`;

      if (edgeMap.has(key)) {
        if (backbone) edgeMap.get(key).backbone = true;
        return;
      }

      const nodeA = nodes[a];
      const nodeB = nodes[b];

      const edge = {
        a,
        b,
        backbone,
        energy: Math.random(),
        revealAt: Math.min(
          0.96,
          Math.max(nodeA.revealAt, nodeB.revealAt) + Math.random() * 0.075
        )
      };

      edgeMap.set(key, edge);
      edges.push(edge);

      nodeA.degree++;
      nodeB.degree++;
    }

    const searchRange = Math.ceil(maxDistance / cellSize) + 1;

    for (const node of nodes) {
      const candidates = [];

      for (
        let gx = node.cellX - searchRange;
        gx <= node.cellX + searchRange;
        gx++
      ) {
        for (
          let gy = node.cellY - searchRange;
          gy <= node.cellY + searchRange;
          gy++
        ) {
          const bucket = grid.get(cellKey(gx, gy));
          if (!bucket) continue;

          for (const index of bucket) {
            if (index === node.index) continue;

            const other = nodes[index];

            const dx = node.x - other.x;
            const dy = node.y - other.y;
            const distanceSquared = dx * dx + dy * dy;

            if (distanceSquared < maxDistanceSquared) {
              candidates.push({ index, distanceSquared });
            }
          }
        }
      }

      candidates.sort((a, b) => a.distanceSquared - b.distanceSquared);

      const wanted = 4 + Math.floor(Math.random() * 3);

      for (const candidate of candidates.slice(0, wanted)) {
        addEdge(node.index, candidate.index);
      }
    }

    const radius = Math.min(width, height) * 0.455;

    for (const node of nodes) {
      if (Math.random() > 0.085) continue;

      let bestIndex = -1;
      let bestScore = Infinity;

      for (let attempt = 0; attempt < 18; attempt++) {
        const index = Math.floor(Math.random() * nodes.length);
        if (index === node.index) continue;

        const other = nodes[index];

        const dx = node.x - other.x;
        const dy = node.y - other.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (
          distance > maxDistance * 1.25 &&
          distance < radius * 0.78
        ) {
          const score = Math.random() * distance;

          if (score < bestScore) {
            bestScore = score;
            bestIndex = index;
          }
        }
      }

      if (bestIndex >= 0) {
        addEdge(node.index, bestIndex, true);
      }
    }

    const core = nodes
      .filter((node) => node.radial < radius * 0.2)
      .sort(() => Math.random() - 0.5)
      .slice(0, 22);

    const outer = nodes.filter(
      (node) => node.radial > radius * 0.58
    );

    if (outer.length) {
      for (const hub of core) {
        const routeCount = 2 + Math.floor(Math.random() * 2);

        for (let i = 0; i < routeCount; i++) {
          const target = outer[
            Math.floor(Math.random() * outer.length)
          ];

          addEdge(hub.index, target.index, true);
        }
      }
    }

    for (const node of nodes) {
      node.sparkle = node.degree >= 12 && Math.random() < 0.16;
    }
  }

  function drawNetwork(progress) {
    ctx.clearRect(0, 0, width, height);

    ctx.fillStyle = "#000000";
    ctx.fillRect(0, 0, width, height);

    const cx = width / 2;
    const cy = height / 2;
    const radius = Math.min(width, height) * 0.48;

    const halo = ctx.createRadialGradient(
      cx, cy, radius * 0.02,
      cx, cy, radius
    );

    halo.addColorStop(0, `rgba(17, 17, 17, ${0.34 * progress})`);
    halo.addColorStop(0.7, `rgba(9, 9, 9, ${0.18 * progress})`);
    halo.addColorStop(1, "rgba(0, 0, 0, 0)");

    ctx.fillStyle = halo;
    ctx.fillRect(0, 0, width, height);

    const fades = new Float32Array(nodes.length);

    for (const node of nodes) {
      fades[node.index] = smooth(
        (progress - node.revealAt) / 0.045
      );
    }

    for (const edge of edges) {
      const a = nodes[edge.a];
      const b = nodes[edge.b];

      const fadeA = fades[edge.a];
      const fadeB = fades[edge.b];

      if (fadeA <= 0.01 || fadeB <= 0.01) continue;

      const lineProgress = smooth(
        (progress - edge.revealAt) / 0.065
      );

      if (lineProgress <= 0.01) continue;

      const [r, g, bl] = a.color;

      const endX = a.x + (b.x - a.x) * lineProgress;
      const endY = a.y + (b.y - a.y) * lineProgress;

      const opacity = Math.min(fadeA, fadeB) * lineProgress;

      const intensity = edge.backbone
        ? 0.23 + edge.energy * 0.14
        : 0.13 + edge.energy * 0.13;

      ctx.beginPath();
      ctx.moveTo(a.x, a.y);
      ctx.lineTo(endX, endY);

      ctx.strokeStyle =
        `rgba(${r}, ${g}, ${bl}, ${intensity * opacity})`;

      ctx.lineWidth = edge.backbone ? 0.72 : 0.42;
      ctx.stroke();
    }

    for (const node of nodes) {
      const opacity = fades[node.index];
      if (opacity <= 0.01) continue;

      const [r, g, bl] = node.color;
      const bright = node.degree >= 15;

      if (bright) {
        ctx.shadowColor = `rgba(${r}, ${g}, ${bl}, 0.65)`;
        ctx.shadowBlur = 5;
      }

      ctx.beginPath();

      ctx.arc(
        node.x,
        node.y,
        node.size + (bright ? 0.5 : 0),
        0,
        Math.PI * 2
      );

      ctx.fillStyle =
        `rgba(${r}, ${g}, ${bl}, ${opacity * (bright ? 0.95 : 0.72)})`;

      ctx.fill();
      ctx.shadowBlur = 0;

      if (node.sparkle && opacity > 0.7) {
        const ray = 3 + node.energy * 5;

        ctx.beginPath();
        ctx.moveTo(node.x - ray, node.y);
        ctx.lineTo(node.x + ray, node.y);
        ctx.moveTo(node.x, node.y - ray);
        ctx.lineTo(node.x, node.y + ray);

        ctx.strokeStyle =
          `rgba(236, 236, 236, ${opacity * 0.55})`;

        ctx.lineWidth = 0.45;
        ctx.stroke();
      }
    }
  }

  function animateNetwork(timestamp) {
    if (networkStart === null) networkStart = timestamp;

    networkProgress = clamp(
      (timestamp - networkStart) / TEMPO_REDE
    );

    drawNetwork(networkProgress);

    if (networkProgress < 1) {
      requestAnimationFrame(animateNetwork);
    } else {
      networkFinished = true;

      connectButton.classList.add("is-visible");
      connectButton.setAttribute("aria-hidden", "false");
    }
  }

  /* ==========================================
     2. LEITURA DA MÃO E STREET VIEW
     ========================================== */

  async function changeReadingPhase(current, next) {
    current.classList.remove("is-visible");
    current.setAttribute("aria-hidden", "true");

    await wait(750);

    next.classList.add("is-visible");
    next.setAttribute("aria-hidden", "false");
  }

  function runLoadingBar() {
    const start = performance.now();

    progressFill.style.width = "0%";
    progressTrack.setAttribute("aria-valuenow", "0");

    return new Promise((resolve) => {
      function update(now) {
        const progress = clamp(
          (now - start) / TEMPO_CARREGAMENTO
        );

        const value = Math.round(progress * 100);

        progressFill.style.width = `${value}%`;
        progressTrack.setAttribute("aria-valuenow", String(value));

        if (progress < 1) {
          requestAnimationFrame(update);
        } else {
          resolve();
        }
      }

      requestAnimationFrame(update);
    });
  }

  function makeStreetViewUrl(entity) {
    const key = GOOGLE_MAPS_API_KEY.trim();

    if (
      !key ||
      key === "COLOCA_A_TUA_CHAVE_RESTRINGIDA_AQUI"
    ) {
      return "";
    }

    const params = new URLSearchParams({
      key,
      location: `${entity.latitude},${entity.longitude}`,
      heading: String(entity.heading),
      pitch: String(entity.pitch),
      fov: String(entity.fov)
    });

    return (
      "https://www.google.com/maps/embed/v1/streetview?" +
      params.toString()
    );
  }

  function openStreetView(entity) {
    mapLocationLabel.textContent =
      `${entity.latitude.toFixed(6)}, ${entity.longitude.toFixed(6)}`;

    const url = makeStreetViewUrl(entity);

    streetViewFrame.src = url || "about:blank";

    mapModal.classList.add("is-open");
    mapModal.setAttribute("aria-hidden", "false");

    closeMapButton.focus();
  }

  function closeStreetView() {
    mapModal.classList.remove("is-open");
    mapModal.setAttribute("aria-hidden", "true");

    streetViewFrame.src = "about:blank";

    readingScreen.classList.remove("is-active");
    readingScreen.setAttribute("aria-hidden", "true");

    showProfile(activeEntity);
  }

  closeMapButton.addEventListener("click", closeStreetView);

  /* ==========================================
     3. IMAGENS DOS PERFIS E DAS OFERENDAS
     ========================================== */

  function makeContentImage(url, alt, className) {
    const image = document.createElement("img");

    image.src = url;
    image.alt = alt;
    image.className = className || "";
    image.loading = "lazy";
    image.decoding = "async";

    image.style.display = "block";
    image.style.width = "100%";
    image.style.height = "100%";
    image.style.objectFit = "cover";
    image.style.pointerEvents = "none";

    return image;
  }

  function setRequestsProfileImage(entity) {
    requestsEntityProfileCard.replaceChildren();

    if (entity.fotoUrl) {
      const image = makeContentImage(
        entity.fotoUrl,
        `Perfil de ${entity.perfil.nome}`,
        "requests-entity-profile-image"
      );

      image.onerror = () => {
        requestsEntityProfileCard.textContent =
          `PERFIL DE ${entity.perfil.nome}`;
      };

      requestsEntityProfileCard.appendChild(image);
    } else {
      requestsEntityProfileCard.textContent =
        `PERFIL DE ${entity.perfil.nome}`;
    }

    requestsEntityProfileCard.setAttribute(
      "aria-label",
      `Abrir perfil de ${entity.perfil.nome} no Google Maps`
    );
  }

  function prepareOfferingCards() {
    const entity = activeEntity || ENTIDADES[0];
    const cards = getRequestCards();

    const correctImages = (entity.imagens || []).map((url, index) => ({
      url,
      correct: true,
      alt: `Imagem ${index + 1} da entidade ${entity.perfil.nome}`
    }));

    const otherImages = ENTIDADES
      .filter((other) => other.id !== entity.id)
      .flatMap((other) =>
        (other.imagens || []).map((url, index) => ({
          url,
          correct: false,
          alt: `Imagem ${index + 1} de outra entidade`
        }))
      );

    for (let i = otherImages.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));

      [otherImages[i], otherImages[j]] =
        [otherImages[j], otherImages[i]];
    }

    const choices = [
      ...correctImages,
      ...otherImages.slice(
        0,
        Math.max(0, 6 - correctImages.length)
      )
    ];

    for (let i = choices.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));

      [choices[i], choices[j]] = [choices[j], choices[i]];
    }

    cards.forEach((card, index) => {
      const choice = choices[index];

      if (!choice) {
        card.hidden = true;
        return;
      }

      card.hidden = false;
      card.dataset.correct = String(choice.correct);
      card.setAttribute("aria-label", choice.alt);

      card.replaceChildren(
        makeContentImage(
          choice.url,
          choice.alt,
          "requests-offering-image"
        )
      );

      card.style.padding = "0";
      card.style.overflow = "hidden";
    });
  }

  function prepareFinalOfferingImage() {
    const entity = activeEntity || ENTIDADES[0];

    requestsFinalImage.replaceChildren();

    if (entity.oferendaUrl) {
      requestsFinalImage.appendChild(
        makeContentImage(
          entity.oferendaUrl,
          `Oferenda para ${entity.perfil.nome}`,
          "requests-final-offering-image"
        )
      );

      requestsFinalImage.setAttribute(
        "aria-label",
        `Oferenda para ${entity.perfil.nome}`
      );
    } else {
      requestsFinalImage.textContent = "OFERENDA";
    }
  }

  /* ==========================================
     4. MOSTRAR O PERFIL
     ========================================== */

  function showProfile(entity) {
    const profile = entity.perfil;

    profileNameLink.textContent = profile.nome;
    profileNameLink.href = entity.perfilUrl || PROFILE_URL;

    profilePoints.replaceChildren();

    const points = document.createElement("strong");
    points.textContent = profile.pontos;

    profilePoints.append(
      points,
      document.createTextNode(` / ${profile.pontosMaximos} pontos`)
    );

    profileStats.replaceChildren();

    for (const [labelText, valueText] of profile.estatisticas) {
      const item = document.createElement("div");
      item.className = "stat-item";

      const label = document.createElement("dt");
      label.textContent = labelText;

      const value = document.createElement("dd");
      value.textContent = valueText;

      item.append(label, value);
      profileStats.appendChild(item);
    }

    /* Mostrar sempre as iniciais, nunca a fotografia. */
    const photo = el("profile-photo");
    const photoPlaceholder = el("profile-photo-placeholder");

    if (photo) {
      photo.hidden = true;
      photo.removeAttribute("src");
      photo.alt = "";
    }

    if (photoPlaceholder) {
      const initials = profile.nome
        .trim()
        .split(/\s+/)
        .slice(0, 2)
        .map((part) => Array.from(part)[0] || "")
        .join("")
        .toLocaleUpperCase();

      photoPlaceholder.textContent = initials;
      photoPlaceholder.hidden = false;
    }

    requestsEntityName.textContent = profile.nome;

    setRequestsProfileImage(entity);

    profileScreen.classList.remove("is-leaving");
    profileScreen.classList.add("is-active");
    profileScreen.setAttribute("aria-hidden", "false");
  }

  /* ==========================================
     5. INICIAR A EXPERIÊNCIA
     ========================================== */

  async function startExperience() {
    if (experienceStarted) return;

    experienceStarted = true;
    connectButton.disabled = true;

    activeEntity = ENTIDADES[
      Math.floor(Math.random() * ENTIDADES.length)
    ];

    requestsEntityName.textContent = activeEntity.perfil.nome;

    openingScreen.classList.add("is-leaving");

    readingScreen.classList.add("is-active");
    readingScreen.setAttribute("aria-hidden", "false");

    await wait(800);

    instructionPhase.classList.add("is-visible");
    instructionPhase.setAttribute("aria-hidden", "false");

    await wait(TEMPO_FRASE);

    await changeReadingPhase(instructionPhase, handPhase);

    await wait(TEMPO_SCANNER);

    await changeReadingPhase(handPhase, loadingPhase);

    await runLoadingBar();

    await changeReadingPhase(loadingPhase, foundPhase);

    await wait(TEMPO_ENTIDADE);

    foundPhase.classList.remove("is-visible");
    foundPhase.setAttribute("aria-hidden", "true");

    await wait(700);

    openStreetView(activeEntity);
  }

  connectButton.addEventListener("click", startExperience);

  /* ==========================================
     6. PERFIL -> MENU PRINCIPAL
     ========================================== */

  async function openServices() {
    profileScreen.classList.add("is-leaving");

    servicesScreen.classList.add("is-active");
    servicesScreen.setAttribute("aria-hidden", "false");

    await wait(850);

    profileScreen.classList.remove("is-active");
    profileScreen.setAttribute("aria-hidden", "true");
  }

  consultButton.addEventListener("click", openServices);

  function hideAllConsultStages() {
    [
      mentalizePhase,
      questionPhase,
      answerPhase,
      entropyBreathPhase,
      entropyAnimationPhase,
      entropyReadingPhase,
      otherModePhase,
      serviceDetailPhase,
      entropyProcessingPhase
    ].filter(Boolean).forEach((stage) => {
      stage.hidden = true;
    });
  }

  function openConsultoria() {
    servicesScreen.classList.remove("is-active");
    servicesScreen.setAttribute("aria-hidden", "true");

    consultoriaScreen.classList.add("is-active");
    consultoriaScreen.setAttribute("aria-hidden", "false");
  }

  function returnToServices() {
    modeRunId++;
    stopEntropyAnimation();

    resetRequestsFlow();

    entropyBackButton.hidden = true;

    requestsInterface.hidden = true;
    assistanceInterface.hidden = true;

    consultModeScreen.classList.remove("is-active");
    consultModeScreen.setAttribute("aria-hidden", "true");

    consultoriaScreen.classList.remove("is-active");
    consultoriaScreen.setAttribute("aria-hidden", "true");

    servicesScreen.classList.add("is-active");
    servicesScreen.setAttribute("aria-hidden", "false");

    serviceDetailPhase.classList.remove("has-requests");
  }

  function returnToConsultoria() {
    modeRunId++;
    stopEntropyAnimation();

    entropyBackButton.hidden = true;

    consultModeScreen.classList.remove("is-active");
    consultModeScreen.setAttribute("aria-hidden", "true");

    consultoriaScreen.classList.add("is-active");
    consultoriaScreen.setAttribute("aria-hidden", "false");
  }

  function openDetailScreen(title, returnTarget) {
    modeRunId++;
    stopEntropyAnimation();

    hideAllConsultStages();
    resetRequestsFlow();

    entropyBackButton.hidden = true;

    const isConsult = returnTarget === "consultoria";

    if (isConsult) {
      otherModeTitle.textContent = title;
      otherModePhase.hidden = false;
    } else if (title === "Pedidos") {
      serviceDetailTitle.textContent = "conheça a sua entidade";
      serviceDetailTitle.hidden = false;

      serviceDetailPhase.classList.add("has-requests");
      serviceDetailPhase.hidden = false;

      requestsInterface.hidden = false;
      assistanceInterface.hidden = true;

      requestsEntityName.textContent =
        activeEntity?.perfil?.nome || ENTIDADES[0].perfil.nome;
    } else {
      const entityName =
        activeEntity?.perfil?.nome || ENTIDADES[0].perfil.nome;

      serviceDetailTitle.textContent =
        `marcar uma visita de ${entityName}`;

      serviceDetailTitle.hidden = false;

      serviceDetailPhase.classList.remove("has-requests");
      serviceDetailPhase.hidden = false;

      requestsInterface.hidden = true;
      assistanceInterface.hidden = false;

      resetMeetingForm();
    }

    consultModeScreen.classList.add("is-active");
    consultModeScreen.setAttribute("aria-hidden", "false");
  }

  for (const button of serviceActions) {
    button.addEventListener("click", () => {
      const service = button.dataset.service;

      if (service === "consultoria") {
        openConsultoria();
      } else if (service === "pedidos") {
        openDetailScreen("Pedidos", "services");
      } else if (service === "assistencia-fisica") {
        openDetailScreen("Assistência física", "services");
      }
    });
  }

  /* ==========================================
     7. SIM E NÃO
     ========================================== */

  async function startYesNoRitual() {
    modeRunId++;
    const thisRun = modeRunId;

    hideAllConsultStages();

    consultoriaScreen.classList.remove("is-active");
    consultoriaScreen.setAttribute("aria-hidden", "true");

    consultModeScreen.classList.add("is-active");
    consultModeScreen.setAttribute("aria-hidden", "false");

    const mentalizeText = mentalizePhase.querySelector("p");

    if (mentalizeText) {
      mentalizeText.textContent = "Mentalize a sua entidade";
    }

    mentalizePhase.hidden = false;

    await wait(2200);

    if (thisRun !== modeRunId) return;

    mentalizePhase.hidden = true;
    questionPhase.hidden = false;

    questionInput.value = "";
    questionInput.focus();
  }

  function submitYesNoQuestion(event) {
    event.preventDefault();

    if (questionInput.value.trim() === "") {
      questionInput.focus();
      return;
    }

    modeRunId++;
    const thisRun = modeRunId;

    questionPhase.hidden = true;
    answerPhase.hidden = true;

    window.setTimeout(() => {
      if (thisRun !== modeRunId) return;

      const answers = ["SIM", "NÃO", "DEPENDE"];

      answerWord.textContent =
        answers[Math.floor(Math.random() * answers.length)];

      answerPhase.hidden = false;
    }, 1850);
  }

  questionForm.addEventListener("submit", submitYesNoQuestion);
  answerWord.addEventListener("click", returnToConsultoria);

  /* ==========================================
     8. ORÁCULO — LEITURAS
     ========================================== */

  const readings = [
    {
      title: "O que está a mudar",
      first: "Há coisas na tua vida que já não encaixam da mesma forma, mesmo que ainda não consigas perceber exatamente porquê. Talvez estejas a insistir numa situação por medo do que vem a seguir, ou talvez sintas que precisas de tomar uma decisão sem ter todas as respostas. Nem tudo o que perde o sentido precisa de ser recuperado. Às vezes, a mudança começa muito antes de termos coragem de a reconhecer.",
      second: "Não te apresses a encontrar uma explicação para tudo. Há caminhos que só se tornam claros depois do primeiro passo. Por agora, presta atenção ao que te pesa e ao que, mesmo discretamente, te devolve energia. Aí pode estar uma resposta que tens procurado noutro lugar."
    },
    {
      title: "Sobre o amor",
      first: "Existe uma diferença entre sentir falta de alguém e sentir falta daquilo que imaginavas que poderiam ser juntos. Talvez estejas a tentar compreender uma relação, a interpretar gestos ou a esperar por uma palavra que nunca chega. Mas nem tudo o que é intenso é necessariamente certo para ti, e nem tudo o que é tranquilo significa ausência de sentimento.",
      second: "O amor não deve exigir que estejas constantemente a adivinhar o teu lugar na vida de outra pessoa. Se alguém te acompanha, deixa que o demonstre; se alguém se afasta, não transformes essa distância numa medida do teu valor. Há espaço para o inesperado, mas também há espaço para escolheres aquilo que te faz sentir em casa."
    },
    {
      title: "Trabalho e propósito",
      first: "Podes estar numa fase em que o esforço parece maior do que o reconhecimento. Há trabalho a acontecer em silêncio, competências que ainda estás a desenvolver e possibilidades que talvez não tenham encontrado o momento certo para aparecer. Não confundas a lentidão do processo com a ausência de progresso. Nem todas as oportunidades chegam quando estamos preparados para as receber, e nem todas as portas fechadas significam que escolheste o caminho errado.",
      second: "Ainda assim, esta carta convida-te a distinguir a paciência da espera passiva. Há alguma coisa que tens adiado por receio de não seres suficientemente bom, de não teres experiência ou de chegares tarde demais? Talvez não precises de estar pronto. Talvez precises apenas de te permitir começar, mesmo sem garantias de como vai acabar."
    },
    {
      title: "Aquilo que precisas de deixar ir",
      first: "Há uma situação à qual continuas a voltar mentalmente, como se pensar nela mais uma vez pudesse finalmente alterar o desfecho. Pode ser uma conversa, uma escolha antiga ou uma versão de ti que já não sabes bem como recuperar. O passado tem uma maneira particular de parecer mais simples quando o presente nos deixa inseguros, mas recordar não é o mesmo que precisar de regressar.",
      second: "Não precisas de apagar o que aconteceu para deixares de viver em função disso. Podes guardar o que aprendeste sem continuar a carregar tudo o que te magoou. Existe uma espécie de liberdade em aceitar que algumas perguntas vão ficar sem resposta. Nem sempre o encerramento vem de compreender o outro; por vezes, começa quando deixas de precisar dessa compreensão para seguir em frente."
    },
    {
      title: "Uma oportunidade inesperada",
      first: "Nem tudo o que merece a tua atenção vai chegar com a aparência de uma grande oportunidade. Pode surgir através de uma conversa banal, de um convite que quase recusas ou de uma pessoa que te apresenta uma perspetiva diferente da tua. Há algo de interessante naquilo que ainda não sabes reconhecer como importante. Esta é uma altura para estares atento, sobretudo às coisas que despertam a tua curiosidade sem te exigirem uma resposta imediata.",
      second: "Não precisas de dizer que sim a tudo, nem de transformar cada coincidência num sinal do destino. Mas talvez possas experimentar não rejeitar tão depressa aquilo que foge aos teus planos. Às vezes, não é a oportunidade que nos falta: é a disponibilidade para considerar um caminho que não tínhamos imaginado."
    },
    {
      title: "Confia no teu próprio ritmo",
      first: "Talvez estejas a olhar demasiado para o percurso das outras pessoas. Vês decisões tomadas, relações a avançar, projetos a ganhar forma, e começas a questionar se devias estar noutro lugar. É fácil esquecer que aquilo que observas nos outros é apenas uma parte da história. Não conheces todas as dúvidas, os recuos ou os compromissos que existem por trás de cada conquista.",
      second: "Não estás necessariamente atrasado. Estás a viver um percurso que não precisa de seguir a mesma ordem que os restantes. Isso não significa que devas ficar onde estás se sentes vontade de mudar, mas que podes fazê-lo sem transformar a tua vida numa corrida. Escolhe o próximo passo com honestidade, não com urgência. Há decisões que se tornam mais claras quando deixamos de as tomar para provar alguma coisa a alguém."
    }
  ];

  /* Apenas dígitos binários na animação do copo. */
  const codeSymbols = ["0", "1"];

  function stopEntropyAnimation() {
    if (entropyAnimationFrame !== null) {
      cancelAnimationFrame(entropyAnimationFrame);
      entropyAnimationFrame = null;
    }
  }

  async function showOracleCup() {
    modeRunId++;
    const thisRun = modeRunId;

    stopEntropyAnimation();
    hideAllConsultStages();

    consultoriaScreen.classList.remove("is-active");
    consultoriaScreen.setAttribute("aria-hidden", "true");

    consultModeScreen.classList.add("is-active");
    consultModeScreen.setAttribute("aria-hidden", "false");

    if (entropyProcessingPhase) {
      entropyProcessingPhase.hidden = true;
    }

    entropyAnimationPhase.hidden = true;
    entropyReadingPhase.hidden = true;
    entropyBreathPhase.hidden = true;

    if (entropyProgressFill) {
      entropyProgressFill.style.width = "0%";
    }

    if (entropyProgressTrack) {
      entropyProgressTrack.setAttribute("aria-valuenow", "0");
    }

    const mentalizeText = mentalizePhase.querySelector("p");

    if (mentalizeText) {
      mentalizeText.textContent = "Mentalize a sua entidade";
    }

    mentalizePhase.hidden = false;
    entropyBackButton.hidden = true;

    requestsEntityName.textContent =
      activeEntity?.perfil?.nome || ENTIDADES[0].perfil.nome;

    await wait(2200);

    if (thisRun !== modeRunId) return;

    mentalizePhase.hidden = true;
    entropyBreathPhase.hidden = false;
    entropyBackButton.hidden = false;
  }

  function prepareEntropyAnimation() {
    const bounds = entropyAnimationPhase.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const w = Math.max(
      1,
      Math.round(bounds.width || window.innerWidth)
    );

    const h = Math.max(
      1,
      Math.round(bounds.height || window.innerHeight)
    );

    entropyCanvas.width = Math.floor(w * dpr);
    entropyCanvas.height = Math.floor(h * dpr);

    entropyCanvas.style.width = `${w}px`;
    entropyCanvas.style.height = `${h}px`;

    entropyCtx.setTransform(dpr, 0, 0, dpr, 0, 0);
    entropyCtx.clearRect(0, 0, w, h);

    const count = 75 + Math.floor(Math.random() * 25);
    const cupX = w / 2;
    const cupY = h * 0.82;

    entropyNodes = Array.from({ length: count }, (_, index) => {
      const angle = Math.random() * Math.PI * 2;
      const spread = 20 + Math.random() * Math.min(w, h) * 0.43;

      return {
        x: cupX + (Math.random() - 0.5) * 28,
        y: cupY + (Math.random() - 0.5) * 18,
        sx: cupX + (Math.random() - 0.5) * 28,
        sy: cupY + (Math.random() - 0.5) * 18,
        tx: w / 2 + Math.cos(angle) * spread,
        ty: h * 0.43 + Math.sin(angle) * spread * 0.7,
        delay: Math.random() * 0.18,
        size: 8 + Math.random() * 8,
        symbol: codeSymbols[
          Math.floor(Math.random() * codeSymbols.length)
        ],
        phase: Math.random() * Math.PI * 2,
        index
      };
    });
  }

  function drawEntropyFrame(timestamp, startTime) {
    const w = entropyCanvas.clientWidth;
    const h = entropyCanvas.clientHeight;

    const globalProgress = clamp(
      (timestamp - startTime) / TEMPO_ORACULO
    );

    entropyCtx.clearRect(0, 0, w, h);

    entropyNodes.forEach((node) => {
      const p = smooth(
        clamp((globalProgress - node.delay) / 0.36)
      );

      const wobble = (1 - p) * 15;

      node.x =
        node.sx +
        (node.tx - node.sx) * p +
        Math.sin(timestamp / 200 + node.phase) * wobble;

      node.y =
        node.sy +
        (node.ty - node.sy) * p +
        Math.cos(timestamp / 250 + node.phase) * wobble;
    });

    for (let i = 0; i < entropyNodes.length; i++) {
      const a = entropyNodes[i];

      for (let j = i + 1; j < entropyNodes.length; j++) {
        const b = entropyNodes[j];
        const distance = Math.hypot(a.x - b.x, a.y - b.y);

        if (distance < 78) {
          const alpha =
            (1 - distance / 78) * 0.3 * globalProgress;

          entropyCtx.beginPath();
          entropyCtx.moveTo(a.x, a.y);
          entropyCtx.lineTo(b.x, b.y);

          entropyCtx.strokeStyle =
            `rgba(197, 197, 197, ${alpha})`;

          entropyCtx.lineWidth = 0.6;
          entropyCtx.stroke();
        }
      }
    }

    entropyNodes.forEach((node) => {
      const p = smooth(
        clamp((globalProgress - node.delay) / 0.36)
      );

      const alpha = 0.24 + 0.7 * p;

      entropyCtx.font =
        `${node.size}px "Courier New", monospace`;

      entropyCtx.fillStyle =
        `rgba(227, 227, 227, ${alpha})`;

      entropyCtx.fillText(node.symbol, node.x, node.y);

      entropyCtx.beginPath();
      entropyCtx.arc(
        node.x,
        node.y + 5,
        1.5 + p,
        0,
        Math.PI * 2
      );

      entropyCtx.fillStyle =
        `rgba(218, 218, 218, ${alpha})`;

      entropyCtx.fill();
    });

    return globalProgress;
  }

  function showEntropyReading() {
    const result =
      readings[Math.floor(Math.random() * readings.length)];

    entropyTitle.textContent = result.title;
    entropyParagraphOne.textContent = result.first;
    entropyParagraphTwo.textContent = result.second;

    entropyReadingPhase.hidden = false;
  }

  function runEntropyLoading(thisRun) {
    const entityName =
      activeEntity?.perfil?.nome || ENTIDADES[0].perfil.nome;

    entropySystemLabel.textContent =
      `interpretando ${entityName}`;

    entropyAnimationPhase.hidden = true;

    if (
      !entropyProcessingPhase ||
      !entropyProgressTrack ||
      !entropyProgressFill
    ) {
      showEntropyReading();
      return;
    }

    entropyProcessingPhase.hidden = false;
    entropyProgressFill.style.width = "0%";

    entropyProgressTrack.setAttribute("aria-valuenow", "0");

    const loadStart = performance.now();

    function loadFrame(timestamp) {
      if (thisRun !== modeRunId) return;

      const progress = clamp(
        (timestamp - loadStart) / TEMPO_INTERPRETACAO
      );

      const percentage = Math.round(progress * 100);

      entropyProgressFill.style.width = `${percentage}%`;

      entropyProgressTrack.setAttribute(
        "aria-valuenow",
        String(percentage)
      );

      if (progress < 1) {
        entropyAnimationFrame = requestAnimationFrame(loadFrame);
      } else {
        entropyAnimationFrame = null;
        entropyProcessingPhase.hidden = true;
        showEntropyReading();
      }
    }

    entropyAnimationFrame = requestAnimationFrame(loadFrame);
  }

  function startEntropyReading() {
    modeRunId++;
    const thisRun = modeRunId;

    stopEntropyAnimation();

    entropyBreathPhase.hidden = true;

    if (entropyProcessingPhase) {
      entropyProcessingPhase.hidden = true;
    }

    entropyReadingPhase.hidden = true;
    entropyAnimationPhase.hidden = false;
    entropyBackButton.hidden = false;

    /* Esperar um frame para o navegador calcular as dimensões. */
    requestAnimationFrame(() => {
      if (thisRun !== modeRunId) return;

      prepareEntropyAnimation();

      const startTime = performance.now();

      function frame(timestamp) {
        if (thisRun !== modeRunId) return;

        const progress = drawEntropyFrame(timestamp, startTime);

        if (progress < 1) {
          entropyAnimationFrame = requestAnimationFrame(frame);
        } else {
          entropyAnimationFrame = null;
          runEntropyLoading(thisRun);
        }
      }

      entropyAnimationFrame = requestAnimationFrame(frame);
    });
  }

  entropyCupButton.addEventListener("click", startEntropyReading);
  entropyBackButton.addEventListener("click", returnToConsultoria);

  /* ==========================================
     9. PEDIDOS — PERFIL, OFERENDAS E DEFUMAÇÃO
     ========================================== */

  function getRequestCards() {
    return Array.from(
      requestsImageGrid.querySelectorAll(".requests-offering-card")
    );
  }

  function updateRequestCounter() {
    const count = requestsImageGrid.querySelectorAll(
      ".requests-offering-card.is-selected"
    ).length;

    requestsSelectionCount.textContent =
      `${count}/3 imagens selecionadas`;
  }

  function clearRequestSelection() {
    selectedOfferingCards.clear();

    getRequestCards().forEach((card) => {
      card.classList.remove("is-selected");
      card.disabled = false;
    });

    updateRequestCounter();
    requestsSelectionCount.hidden = true;
  }

  function resetRequestsFlow() {
    if (requestsSmokeTimer !== null) {
      clearTimeout(requestsSmokeTimer);
      requestsSmokeTimer = null;
    }

    document.body.classList.remove("requests-fumigating");

    requestsSmokeOverlay.hidden = true;
    requestsSmokeCloud.classList.remove("is-active");

    requestsProfileStep.hidden = false;
    requestsOfferingsStep.hidden = true;
    requestsSmokeStep.hidden = true;
    requestsFinalImage.hidden = true;

    requestsFinalMessage.hidden = true;
    requestsFinalMessage.textContent = "";

    if (requestsSmokeTitle) {
      requestsSmokeTitle.hidden = false;
    }

    serviceDetailTitle.hidden = false;

    requestsEntityName.textContent =
      activeEntity?.perfil?.nome || ENTIDADES[0].perfil.nome;

    requestsOfferingFeedback.textContent = "";

    clearRequestSelection();
  }

  function shuffleRequestCards() {
    const cards = getRequestCards();

    for (let i = cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));

      [cards[i], cards[j]] = [cards[j], cards[i]];
    }

    cards.forEach((card) => {
      requestsImageGrid.appendChild(card);
    });
  }

  function openEntityProfile() {
    const url = activeEntity?.perfilUrl || PROFILE_URL;

    window.open(url, "_blank", "noopener,noreferrer");
  }

  function openRequestOfferings() {
    requestsEntityName.textContent =
      activeEntity?.perfil?.nome || ENTIDADES[0].perfil.nome;

    serviceDetailTitle.hidden = true;

    requestsProfileStep.hidden = true;
    requestsOfferingsStep.hidden = false;
    requestsSmokeStep.hidden = true;

    requestsOfferingFeedback.textContent = "";

    clearRequestSelection();
    prepareOfferingCards();
    shuffleRequestCards();
  }

  function startRequestFumigation() {
    requestsOfferingsStep.hidden = true;
    requestsSmokeStep.hidden = false;

    if (requestsSmokeTitle) {
      requestsSmokeTitle.hidden = false;
    }

    serviceDetailTitle.hidden = true;
    requestsFinalImage.hidden = true;
    requestsFinalMessage.hidden = true;
    requestsFinalMessage.textContent = "";

    prepareFinalOfferingImage();

    requestsSmokeOverlay.hidden = false;

    document.body.classList.add("requests-fumigating");
    requestsSmokeCloud.classList.add("is-active");

    if (requestsSmokeTimer !== null) {
      clearTimeout(requestsSmokeTimer);
    }

    requestsSmokeTimer = window.setTimeout(() => {
      document.body.classList.remove("requests-fumigating");

      requestsSmokeOverlay.hidden = true;
      requestsSmokeCloud.classList.remove("is-active");

      if (requestsSmokeTitle) {
        requestsSmokeTitle.hidden = true;
      }

      requestsFinalImage.hidden = false;

      const entityName =
        activeEntity?.perfil?.nome || ENTIDADES[0].perfil.nome;

      requestsFinalMessage.textContent =
        `Oferenda recebida, ${entityName} vai trabalhar para conceder o seu pedido`;

      requestsFinalMessage.hidden = false;

      requestsSmokeTimer = null;
    }, 5000);
  }

  requestsEntityProfileCard.addEventListener(
    "click",
    openEntityProfile
  );

  requestsFollowButton.addEventListener(
    "click",
    openRequestOfferings
  );

  requestsImageGrid.addEventListener("click", (event) => {
    const card = event.target.closest(".requests-offering-card");

    if (!card || card.disabled) return;

    if (card.classList.contains("is-selected")) {
      card.classList.remove("is-selected");
      selectedOfferingCards.delete(card);

      requestsOfferingFeedback.textContent = "";

      updateRequestCounter();
      return;
    }

    if (selectedOfferingCards.size >= 3) return;

    card.classList.add("is-selected");
    selectedOfferingCards.add(card);

    updateRequestCounter();

    if (selectedOfferingCards.size !== 3) {
      requestsOfferingFeedback.textContent = "";
      return;
    }

    getRequestCards().forEach((item) => {
      item.disabled = true;
    });

    const allCorrect = Array.from(selectedOfferingCards).every(
      (item) => item.dataset.correct === "true"
    );

    if (allCorrect) {
      requestsOfferingFeedback.textContent = "";

      window.setTimeout(startRequestFumigation, 350);
    } else {
      requestsOfferingFeedback.textContent =
        "esta combinação não corresponde à oferenda. tente novamente.";

      window.setTimeout(() => {
        clearRequestSelection();
        requestsOfferingFeedback.textContent = "";
      }, 1200);
    }
  });

  /* RASTO DE FUMAÇA NA PÁGINA INTEIRA */
  document.addEventListener("pointermove", (event) => {
    if (!document.body.classList.contains("requests-fumigating")) {
      return;
    }

    requestsSmokeCloud.style.left = `${event.clientX}px`;
    requestsSmokeCloud.style.top = `${event.clientY}px`;

    requestsSmokeCloud.classList.add("is-active");

    const puff = document.createElement("div");
    puff.className = "requests-smoke-puff";

    puff.style.left = `${event.clientX}px`;
    puff.style.top = `${event.clientY}px`;

    requestsSmokeOverlay.appendChild(puff);

    window.setTimeout(() => puff.remove(), 1300);
  });

  /* ==========================================
     10. ASSISTÊNCIA FÍSICA E GOOGLE CALENDAR
     ========================================== */

  function resetMeetingForm() {
    meetingForm.hidden = false;
    meetingConfirmation.hidden = true;
    meetingForm.reset();

    serviceDetailTitle.hidden = false;

    const today = new Date();

    meetingDate.min =
      `${today.getFullYear()}-` +
      `${String(today.getMonth() + 1).padStart(2, "0")}-` +
      `${String(today.getDate()).padStart(2, "0")}`;
  }

  function formatMeetingDate(dateValue) {
    const [year, month, day] = dateValue.split("-").map(Number);

    const date = new Date(year, month - 1, day);

    return date.toLocaleDateString("pt-PT", {
      day: "numeric",
      month: "long",
      year: "numeric"
    });
  }

  meetingForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const place = meetingPlace.value.trim();
    const time = meetingTime.value;
    const dateValue = meetingDate.value;

    if (!dateValue || !time || !place) return;

    const name =
      activeEntity?.perfil?.nome || ENTIDADES[0].perfil.nome;

    const dateFormatted = formatMeetingDate(dateValue);

    meetingConfirmationMessage.textContent =
      `${name} te encontrará em ${place} no dia ${dateFormatted} às ${time}.`;

    meetingForm.hidden = true;
    serviceDetailTitle.hidden = true;
    meetingConfirmation.hidden = false;
  });

  function formatCalendarDate(date) {
    const pad = (number) => String(number).padStart(2, "0");

    return (
      date.getFullYear() +
      pad(date.getMonth() + 1) +
      pad(date.getDate()) +
      "T" +
      pad(date.getHours()) +
      pad(date.getMinutes()) +
      "00"
    );
  }

  function addMeetingToGoogleCalendar() {
    const name =
      activeEntity?.perfil?.nome || ENTIDADES[0].perfil.nome;

    const place = meetingPlace.value.trim();
    const dateValue = meetingDate.value;
    const time = meetingTime.value;

    if (!dateValue || !time || !place) return;

    const startDate = new Date(`${dateValue}T${time}:00`);

    if (Number.isNaN(startDate.getTime())) return;

    const endDate = new Date(
      startDate.getTime() + 60 * 60 * 1000
    );

    const params = new URLSearchParams({
      action: "TEMPLATE",
      text: `Visita com ${name}`,
      dates:
        `${formatCalendarDate(startDate)}/` +
        `${formatCalendarDate(endDate)}`,
      details: `Visita com ${name}. Prepare-se.`,
      location: place,
      ctz: "Europe/Lisbon"
    });

    const calendarUrl =
      "https://calendar.google.com/calendar/render?" +
      params.toString();

    window.open(calendarUrl, "_blank", "noopener,noreferrer");
  }

  editMeetingButton.addEventListener(
    "click",
    addMeetingToGoogleCalendar
  );

  /* ==========================================
     11. BOTÕES DE CONSULTORIA E VOLTA
     ========================================== */

  for (const button of consultModeButtons) {
    button.addEventListener("click", () => {
      const mode = button.dataset.consultMode;

      if (mode === "sim-nao") {
        startYesNoRitual();
      } else if (mode === "oraculo") {
        showOracleCup();
      }
    });
  }

  closeConsultoriaButton.addEventListener(
    "click",
    returnToServices
  );

  backToConsultoriaButton.addEventListener(
    "click",
    returnToConsultoria
  );

  backToServicesButton.addEventListener(
    "click",
    returnToServices
  );

  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") return;

    if (mapModal.classList.contains("is-open")) {
      closeStreetView();
      return;
    }

    if (consultModeScreen.classList.contains("is-active")) {
      if (serviceDetailPhase.hidden) {
        returnToConsultoria();
      } else {
        returnToServices();
      }

      return;
    }

    if (consultoriaScreen.classList.contains("is-active")) {
      returnToServices();
      return;
    }

    if (servicesScreen.classList.contains("is-active")) {
      servicesScreen.classList.remove("is-active");
      servicesScreen.setAttribute("aria-hidden", "true");

      profileScreen.classList.remove("is-leaving");
      profileScreen.classList.add("is-active");
      profileScreen.setAttribute("aria-hidden", "false");
    }
  });

  /* ==========================================
     12. INICIAR
     ========================================== */

  window.addEventListener("resize", resizeNetwork);

  resetRequestsFlow();

  entropyBackButton.hidden = true;

  resizeNetwork();

  ctx.fillStyle = "#000000";
  ctx.fillRect(0, 0, width, height);

  requestAnimationFrame(animateNetwork);
})();
