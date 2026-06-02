import { firebaseConfig, firebaseAtivo } from "./firebase-config.js";

// ============================================================
//  CONFIG DA VIAGEM
// ============================================================
const DATA_VIAGEM = "2027-08-02"; // usado no countdown "Faltam X dias"

// 🔑 COLE AQUI sua chave da Pexels (https://www.pexels.com/api/new/).
// Enquanto estiver "SUA_CHAVE_PEXELS", o app mostra o placeholder "FOTO DO LOCAL".
const PEXELS_KEY = "J71m9coziUvRtHpJaRb96af7BCc34RsErqKsoMFb275424FNiITDg13x";

// Dados iniciais (semente) — roteiro extraído do orçamento Chile 2027.
// Cada destino tem uma lista de DIAS; as setas do carrossel trocam o dia
// e as atividades mostradas são as daquele dia.
const SEED_DESTINOS = [
  {
    id: "santiago",
    nome: "Santiago",
    busca: "Santiago Chile",
    dias: [
      {
        data: "Seg · 2 de Agosto 2027",
        foto: "",
        atividades: [
          "Check-in 15h — Bairro Dieciocho",
          "Paseo Bandera",
          "Cerro Santa Lucía",
          "Bairro Lastarria",
        ],
      },
      {
        data: "Ter · 3 de Agosto 2027",
        foto: "",
        atividades: ["Cavalgada Santuário Yerba Loca (com churrascão)"],
      },
      {
        data: "Qua · 4 de Agosto 2027",
        foto: "",
        atividades: [
          "Vinícola Concha y Toro",
          "Parque Florestal",
          "La Mundial",
        ],
      },
      {
        data: "Qui · 5 de Agosto 2027",
        foto: "",
        atividades: ["Check-out 12h", "Traslado para Puerto Varas"],
      },
    ],
  },
  {
    id: "puerto-varas",
    nome: "Puerto Varas",
    busca: "Puerto Varas Chile",
    dias: [
      {
        data: "Qui · 5 de Agosto 2027",
        foto: "",
        atividades: ["Check-in 15h"],
      },
      {
        data: "Sex · 6 de Agosto 2027",
        foto: "",
        atividades: ["Tour Vulcão Osorno + Cataratas de Petrohué"],
      },
      {
        data: "Sáb · 7 de Agosto 2027",
        foto: "",
        atividades: ["Termas del Sol — day use, piscinas vulcânicas"],
      },
      {
        data: "Dom · 8 de Agosto 2027",
        foto: "",
        atividades: ["Frutillar — Teatro del Lago / museu"],
      },
      {
        data: "Seg · 9 de Agosto 2027",
        foto: "",
        atividades: ["Mercado Angelmó — almoço + artesanato", "Check-out 12h"],
      },
    ],
  },
];
const SEED_LEVAR = [
  "Passaporte",
  "Seguro viagem (obrigatório)",
  "Carteira de motorista + Permissão Internacional (carro)",
  "Pesos chilenos / cartão internacional",
  "Casaco/jaqueta impermeável (inverno)",
  "Roupas térmicas / segunda pele",
  "Gorro, luvas e cachecol",
  "Roupa de banho (termas)",
  "Tênis para trilha/cavalgada",
  "Bota impermeável (chuva no sul)",
  "Guarda-chuva / capa de chuva",
  "Carregador + power bank",
  "Adaptador de tomada (Chile)",
  "Protetor solar + hidratante labial",
  "Óculos de sol",
  "Remédios pessoais + necessaire",
  "Câmera / GoPro",
];

// ============================================================
//  CAMADA DE DADOS  (Firebase  ou  localStorage)
// ============================================================
let db = null;
let fs = null; // funções do firestore

async function initDB() {
  if (firebaseAtivo) {
    try {
      const { initializeApp } =
        await import("https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js");
      fs =
        await import("https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js");
      const app = initializeApp(firebaseConfig);
      db = fs.getFirestore(app);
      await semearFirebase();
      assinarLevar(); // sincroniza a lista "o que levar" em tempo real
      return;
    } catch (e) {
      console.error("Falha ao iniciar Firebase:", e);
    }
  }
}

// Escuta a lista "o que levar" no Firebase e atualiza ao vivo em todos os dispositivos.
let levarCache = null;
function assinarLevar() {
  fs.onSnapshot(fs.doc(db, "config", "levar"), (snap) => {
    levarCache = snap.exists() ? snap.data().itens || [] : [];
    // se a tela estiver aberta, re-renderiza com os dados novos
    if (document.querySelector("#view-levar.active")) renderLevar();
  });
}

// --- Firebase: cria os documentos iniciais se ainda não existem ---
async function semearFirebase() {
  const snap = await fs.getDocs(fs.collection(db, "destinos"));
  if (snap.empty) {
    for (const d of SEED_DESTINOS) {
      await fs.setDoc(fs.doc(db, "destinos", d.id), {
        nome: d.nome,
        busca: d.busca || "",
        dias: d.dias,
      });
    }
  }
  const levarRef = fs.doc(db, "config", "levar");
  if (!(await fs.getDoc(levarRef)).exists()) {
    await fs.setDoc(levarRef, { itens: SEED_LEVAR });
  }
}

// --- localStorage helpers ---
const LS = {
  get(key, fallback) {
    try {
      return JSON.parse(localStorage.getItem(key)) ?? fallback;
    } catch {
      return fallback;
    }
  },
  set(key, val) {
    localStorage.setItem(key, JSON.stringify(val));
  },
};
// Reseeda o modo local quando o roteiro-semente muda (bump da versão).
const SEED_VERSION = "2027-08-fotos-pexels";
if (!firebaseAtivo && localStorage.getItem("seedVersion") !== SEED_VERSION) {
  LS.set("destinos", SEED_DESTINOS);
  LS.set("levar", SEED_LEVAR);
  LS.set("seedVersion", SEED_VERSION);
}

// --- API unificada ---
async function getDestinos() {
  if (db) {
    const snap = await fs.getDocs(fs.collection(db, "destinos"));
    return snap.docs.map((d) => ({ id: d.id, ...d.data() }));
  }
  return LS.get("destinos", SEED_DESTINOS);
}

async function getDestino(id) {
  if (db) {
    const d = await fs.getDoc(fs.doc(db, "destinos", id));
    return d.exists() ? { id: d.id, ...d.data() } : null;
  }
  return LS.get("destinos", SEED_DESTINOS).find((d) => d.id === id) || null;
}

// Salva o destino inteiro (usado após alterar as atividades de um dia).
async function saveDestino(dest) {
  if (db) {
    await fs.setDoc(fs.doc(db, "destinos", dest.id), {
      nome: dest.nome,
      busca: dest.busca || "",
      dias: dest.dias,
    });
  } else {
    const dests = LS.get("destinos", SEED_DESTINOS);
    const i = dests.findIndex((d) => d.id === dest.id);
    if (i >= 0) dests[i] = dest;
    else dests.push(dest);
    LS.set("destinos", dests);
  }
}

async function getLevar() {
  if (db) {
    if (levarCache) return levarCache; // mantido atualizado pelo onSnapshot
    const d = await fs.getDoc(fs.doc(db, "config", "levar"));
    return d.exists() ? d.data().itens || [] : [];
  }
  return LS.get("levar", SEED_LEVAR);
}

async function addLevar(texto) {
  if (db) {
    await fs.updateDoc(fs.doc(db, "config", "levar"), {
      itens: fs.arrayUnion(texto),
    });
  } else {
    const l = LS.get("levar", SEED_LEVAR);
    l.push(texto);
    LS.set("levar", l);
  }
}

async function removeLevar(texto) {
  if (db) {
    await fs.updateDoc(fs.doc(db, "config", "levar"), {
      itens: fs.arrayRemove(texto),
    });
  } else {
    LS.set(
      "levar",
      LS.get("levar", SEED_LEVAR).filter((i) => i !== texto),
    );
  }
}

// ============================================================
//  UI / NAVEGAÇÃO
// ============================================================
const $ = (sel) => document.querySelector(sel);

function showView(id) {
  document
    .querySelectorAll(".view")
    .forEach((v) => v.classList.remove("active"));
  $("#" + id).classList.add("active");
  window.scrollTo(0, 0);
}

window.voltarHome = async () => {
  if (emTransicao) return;
  const atual = document.querySelector(".view.active");
  // Sem zoom: já na home ou sem ponto de origem guardado.
  if (!atual || atual.id === "view-home" || !ultimaOrigem) {
    pararSlideshow();
    pausarHeroScroll();
    showView("view-home");
    limparHero();
    return;
  }
  emTransicao = true;
  document.body.classList.add("zooming");
  pararSlideshow();
  pausarHeroScroll(); // congela a altura atual do hero durante a animação de volta

  const { x: cx, y: cy } = ultimaOrigem;
  const home = document.querySelector("#view-home");

  // 1) Tela atual (destino ou levar) encolhe de volta para o ponto do botão.
  const oAtual = origemRelativa(atual, cx, cy);
  const aAtual = atual.animate(
    [
      { transformOrigin: oAtual, transform: "scale(1)", opacity: 1 },
      { transformOrigin: oAtual, transform: "scale(.18)", opacity: 0 },
    ],
    { duration: 320, easing: "cubic-bezier(.4,0,.9,.4)", fill: "forwards" },
  );
  await aAtual.finished;

  // 2) Home reaparece crescendo do mesmo ponto.
  showView("view-home");
  aAtual.cancel();
  limparHero();

  const oHome = origemRelativa(home, cx, cy);
  const aHome = home.animate(
    [
      { transformOrigin: oHome, transform: "scale(4)", opacity: 0 },
      { transformOrigin: oHome, transform: "scale(1)", opacity: 1 },
    ],
    { duration: 420, easing: "cubic-bezier(.2,.7,.3,1)", fill: "none" },
  );
  await aHome.finished;

  document.body.classList.remove("zooming");
  emTransicao = false;
};

// ---------- Countdown ----------
function renderCountdown() {
  const [y, m, d] = DATA_VIAGEM.split("-").map(Number);
  const alvo = new Date(y, m - 1, d); // meia-noite local da data da viagem
  const diff = alvo - new Date();
  if (diff <= 0) {
    $("#countdown-num").textContent = 0;
    $("#countdown-sub").textContent = "A viagem chegou! 🎉";
    return;
  }
  const dias = Math.floor(diff / 86400000);
  const horas = Math.floor((diff % 86400000) / 3600000);
  const minutos = Math.floor((diff % 3600000) / 60000);
  $("#countdown-num").textContent = dias;
  $("#countdown-sub").textContent = `${horas} horas e ${minutos} minutos`;
}

// ---------- Home: botões de destino ----------
async function renderHome() {
  const dests = await getDestinos();
  // Ordena pela sequência da viagem (Santiago → Puerto Varas); extras vão ao fim.
  const ordem = SEED_DESTINOS.map((d) => d.id);
  dests.sort((a, b) => {
    const ia = ordem.indexOf(a.id), ib = ordem.indexOf(b.id);
    return (ia === -1 ? 999 : ia) - (ib === -1 ? 999 : ib);
  });
  const list = $("#dest-list");
  list.innerHTML = "";
  dests.forEach((d) => {
    const btn = document.createElement("button");
    btn.className = "btn btn-light";
    btn.textContent = d.nome;
    btn.onclick = (e) => abrirDestinoZoom(d.id, e.currentTarget);
    list.appendChild(btn);
  });
}

// ---------- Destino (roteiro dia-a-dia) ----------
let destinoAtual = null;
let diaIndex = 0;
let emTransicao = false;
let ultimaOrigem = null; // ponto (x,y) do botão usado na abertura, p/ a volta

// Calcula o transform-origin (em px) de um ponto da tela relativo a um elemento.
function origemRelativa(el, screenX, screenY) {
  const r = el.getBoundingClientRect();
  return `${screenX - r.left}px ${screenY - r.top}px`;
}

// Abre uma tela com zoom partindo do botão clicado.
// preparar(): callback async que carrega o conteúdo e chama showView(targetId).
async function abrirComZoom(btn, targetId, preparar) {
  if (emTransicao) return;
  emTransicao = true;
  document.body.classList.add("zooming");

  const r = btn.getBoundingClientRect();
  const cx = r.left + r.width / 2; // centro do botão na tela
  const cy = r.top + r.height / 2;
  ultimaOrigem = { x: cx, y: cy }; // guarda p/ o zoom de volta

  const home = $("#view-home");
  const target = document.getElementById(targetId);

  // 1) Home dá zoom no ponto do botão e some (forwards: segura o estado).
  const oHome = origemRelativa(home, cx, cy);
  const aHome = home.animate(
    [
      { transformOrigin: oHome, transform: "scale(1)", opacity: 1 },
      { transformOrigin: oHome, transform: "scale(4)", opacity: 0 },
    ],
    { duration: 320, easing: "cubic-bezier(.4,0,.9,.4)", fill: "forwards" },
  );
  await aHome.finished;

  // 2) Mostra a tela alvo e faz ela nascer do mesmo ponto.
  await preparar(); // carrega o conteúdo + showView(targetId)
  aHome.cancel(); // limpa o estado preso da home (já invisível)

  const oT = origemRelativa(target, cx, cy);
  const aT = target.animate(
    [
      { transformOrigin: oT, transform: "scale(.18)", opacity: 0 },
      { transformOrigin: oT, transform: "scale(1)", opacity: 1 },
    ],
    // fill "none": ao terminar, volta ao estado natural (= scale 1) sem pop.
    { duration: 420, easing: "cubic-bezier(.2,.7,.3,1)", fill: "none" },
  );
  await aT.finished;

  document.body.classList.remove("zooming");
  emTransicao = false;
}

// Atalho: abre um destino com zoom.
function abrirDestinoZoom(id, btn) {
  return abrirComZoom(btn, "view-destino", () => abrirDestino(id));
}

async function abrirDestino(id) {
  destinoAtual = await getDestino(id);
  if (!destinoAtual) return;
  if (!Array.isArray(destinoAtual.dias)) destinoAtual.dias = [];
  diaIndex = 0;
  $("#dest-name").textContent = destinoAtual.nome;
  renderDia();
  iniciarSlideshow(); // slideshow roda 1x por destino e não reinicia ao trocar de dia
  showView("view-destino");
  ativarHeroScroll(); // foto começa em 50vh e encolhe conforme rola
}

function diaCorrente() {
  return destinoAtual.dias[diaIndex] || { data: "", foto: "", atividades: [] };
}

// ---------- Hero sticky que encolhe por scroll ----------
const HERO_COLLAPSE = 260; // px de rolagem para encolher por completo
const HERO_MIN = 200;      // altura mínima da imagem (px) quando fixada
let heroRaf = 0;
let heroStickStart = 0;    // scrollY em que a imagem encosta no topo (vira sticky)

// Posição (em scroll) onde o topo da imagem encosta no topo da tela.
function calcStickStart() {
  const c = document.querySelector("#view-destino .carousel");
  if (!c) { heroStickStart = 0; return; }
  // No topo (scroll 0) o rect.top é exato; senão usamos a posição de layout.
  heroStickStart = (window.scrollY || 0) === 0
    ? c.getBoundingClientRect().top
    : c.offsetTop;
}

function ajustarHero() {
  const y = window.scrollY || document.documentElement.scrollTop || 0;
  const inicio = window.innerHeight * 0.5;        // 50vh
  const minimo = Math.min(inicio, HERO_MIN);
  // só encolhe depois que a imagem encosta no topo e fixa
  const p = Math.min(Math.max((y - heroStickStart) / HERO_COLLAPSE, 0), 1);
  const h = inicio + (minimo - inicio) * p;
  document.documentElement.style.setProperty("--photo-h", h + "px");
}

function onScrollHero() {
  if (heroRaf) return;
  heroRaf = requestAnimationFrame(() => {
    heroRaf = 0;
    ajustarHero();
  });
}

function onResizeHero() {
  calcStickStart();
  ajustarHero();
}

function ativarHeroScroll() {
  calcStickStart();
  ajustarHero();
  window.addEventListener("scroll", onScrollHero, { passive: true });
  window.addEventListener("resize", onResizeHero);
}

// Remove os listeners mas mantém a altura atual (p/ não dar salto na volta).
function pausarHeroScroll() {
  window.removeEventListener("scroll", onScrollHero);
  window.removeEventListener("resize", onResizeHero);
  if (heroRaf) {
    cancelAnimationFrame(heroRaf);
    heroRaf = 0;
  }
}

function limparHero() {
  document.documentElement.style.removeProperty("--photo-h");
}

function renderDia() {
  const dia = diaCorrente();
  $("#dest-date").textContent = dia.data || "";
  renderDayNav();
  renderAtividades(dia);
  // Obs: o slideshow de fotos NÃO é tocado aqui — ele roda contínuo por destino.
}

// ---------- Slideshow de fotos (API Pexels) ----------
const photoCache = {}; // "query#n" -> [urls]
let slideTimer = null; // intervalo de troca
let slideUrls = []; // fotos do dia atual
let slideIdx = 0; // índice da foto atual
let slideVisible = 0; // qual camada (0=A, 1=B) está visível

// Busca fotos na API da Pexels (https://www.pexels.com/api/).
async function buscarFotos(query, n = 12) {
  const key = query + "#" + n;
  if (photoCache[key]) return photoCache[key];
  if (!PEXELS_KEY || PEXELS_KEY.startsWith("SUA_")) {
    console.warn("Defina sua chave da Pexels em PEXELS_KEY (app.js).");
    return [];
  }
  try {
    const url =
      "https://api.pexels.com/v1/search" +
      "?query=" +
      encodeURIComponent(query) +
      "&per_page=" +
      n +
      "&orientation=landscape";
    const r = await fetch(url, { headers: { Authorization: PEXELS_KEY } });
    if (!r.ok) throw new Error("HTTP " + r.status);
    const j = await r.json();
    const fotos = (j.photos || [])
      .map((p) => p.src.large2x || p.src.large)
      .filter(Boolean);
    photoCache[key] = fotos;
    return fotos;
  } catch (e) {
    console.warn("Falha ao buscar fotos na Pexels:", e);
    return [];
  }
}

// Termos de culinária por destino (frutos do mar no sul; vinho/asado em Santiago).
function comidaDoDestino(destino) {
  const sul =
    destino.id === "puerto-varas" ||
    /varas|montt|frutillar/i.test(destino.nome);
  return sul
    ? ["seafood platter", "empanadas", "asado barbecue meat"]
    : ["wine vineyard food", "empanadas", "asado barbecue meat"];
}

// Intercala paisagens e comidas: a cada 2 paisagens, entra 1 prato.
function misturarFotos(paisagens, comidas) {
  const out = [];
  let c = 0;
  paisagens.forEach((p, i) => {
    out.push(p);
    if (i % 2 === 1 && c < comidas.length) out.push(comidas[c++]);
  });
  while (c < comidas.length) out.push(comidas[c++]);
  return out;
}

function pararSlideshow() {
  if (slideTimer) {
    clearInterval(slideTimer);
    slideTimer = null;
  }
}

// Crossfade: pré-carrega a imagem e troca a camada visível.
function mostrarSlide(url) {
  const layers = [$("#slide-a"), $("#slide-b")];
  const prox = 1 - slideVisible;
  const img = new Image();
  img.onload = () => {
    layers[prox].style.backgroundImage = `url("${url}")`;
    layers[prox].classList.add("show");
    layers[slideVisible].classList.remove("show");
    slideVisible = prox;
  };
  img.src = url;
}

// Inicia o slideshow do destino atual. Roda 1x por destino — trocar de dia
// NÃO reinicia as fotos (mesmas fotos da cidade em todos os dias).
async function iniciarSlideshow() {
  pararSlideshow();
  const box = $("#carousel-photo");
  const layers = [$("#slide-a"), $("#slide-b")];

  // Reseta camadas e mostra placeholder enquanto carrega.
  layers.forEach((l) => {
    l.classList.remove("show");
    l.style.backgroundImage = "";
  });
  slideVisible = 0;
  box.classList.add("loading");

  // Paisagens da cidade + pratos da culinária regional, intercalados.
  const destino = destinoAtual;
  const termosComida = comidaDoDestino(destino);
  const porPrato = 2; // fotos por termo de comida
  const [paisagens, ...listasComida] = await Promise.all([
    buscarFotos(`${destino.nome} Chile landscape`, 9),
    ...termosComida.map((t) => buscarFotos(t, porPrato)),
  ]);
  const fotos = misturarFotos(paisagens, listasComida.flat());

  // O usuário pode ter saído/trocado de destino enquanto buscava.
  if (destinoAtual !== destino) return;
  box.classList.remove("loading");
  if (!fotos.length) return; // sem fotos: mantém o skeleton (estático)

  slideUrls = fotos;
  slideIdx = 0;
  mostrarSlide(slideUrls[0]);
  slideTimer = setInterval(() => {
    slideIdx = (slideIdx + 1) % slideUrls.length;
    mostrarSlide(slideUrls[slideIdx]);
  }, 5000);
}

// Gera um rótulo curto p/ o chip a partir da data (ex: "Seg · 2 de Agosto 2027" → "Seg 2").
function chipLabel(data, i) {
  if (!data) return `Dia ${i + 1}`;
  const partes = data.split("·");
  if (partes.length < 2) return `Dia ${i + 1}`;
  const semana = partes[0].trim();
  const num = partes[1].trim().split(" ")[0];
  return `${semana} ${num}`;
}

function renderDayNav() {
  const wrap = $("#day-chips");
  wrap.innerHTML = "";
  destinoAtual.dias.forEach((dia, i) => {
    const chip = document.createElement("button");
    chip.className = "chip" + (i === diaIndex ? " active" : "");
    chip.textContent = chipLabel(dia.data, i);
    chip.onclick = () => {
      diaIndex = i;
      renderDia();
    };
    wrap.appendChild(chip);
  });
  // mantém o chip ativo visível ao trocar de dia
  const ativo = wrap.children[diaIndex];
  if (ativo) ativo.scrollIntoView({ inline: "center", block: "nearest" });
}

function trocarDia(delta) {
  const n = destinoAtual.dias.length;
  if (n <= 1) return;
  diaIndex = (diaIndex + delta + n) % n;
  renderDia();
}
$("#arrow-prev").onclick = () => trocarDia(-1);
$("#arrow-next").onclick = () => trocarDia(1);

function renderAtividades(dia) {
  const ul = $("#atividades");
  const ativ = dia.atividades || [];
  if (ativ.length === 0) {
    ul.innerHTML = '<li class="empty">Nenhuma atividade neste dia</li>';
    return;
  }
  ul.innerHTML = "";
  ativ.forEach((a, i) => {
    const li = document.createElement("li");
    li.textContent = a;
    const del = document.createElement("button");
    del.className = "del";
    del.textContent = "×";
    del.onclick = async () => {
      dia.atividades.splice(i, 1);
      await saveDestino(destinoAtual);
      renderAtividades(dia);
    };
    li.appendChild(del);
    ul.appendChild(li);
  });
}

// ---------- O que Levar ----------
async function renderLevar() {
  const itens = await getLevar();
  const ul = $("#lista-levar");
  if (itens.length === 0) {
    ul.innerHTML = '<li class="empty">Lista vazia</li>';
    return;
  }
  ul.innerHTML = "";
  itens.forEach((i) => {
    const li = document.createElement("li");
    li.textContent = i;
    const del = document.createElement("button");
    del.className = "del";
    del.textContent = "×";
    del.onclick = async () => {
      await removeLevar(i);
      renderLevar();
    };
    li.appendChild(del);
    ul.appendChild(li);
  });
}

window.abrirLevar = (btn) =>
  abrirComZoom(btn, "view-levar", async () => {
    await renderLevar();
    showView("view-levar");
  });

// ---------- Modal ----------
let modalCtx = null; // "atividade" | "levar"

function abrirModal() {
  modalCtx = "atividade";
  openModal("Adicionar atividade");
}
function abrirModalLevar() {
  modalCtx = "levar";
  openModal("Adicionar item");
}
window.abrirModal = abrirModal;
window.abrirModalLevar = abrirModalLevar;

function openModal(titulo) {
  $("#modal-title").textContent = titulo;
  $("#modal-input").value = "";
  $("#modal").classList.add("open");
  setTimeout(() => $("#modal-input").focus(), 50);
}
window.fecharModal = () => $("#modal").classList.remove("open");

window.salvarModal = async () => {
  const txt = $("#modal-input").value.trim();
  if (!txt) return;
  if (modalCtx === "atividade") {
    const dia = diaCorrente();
    dia.atividades.push(txt);
    await saveDestino(destinoAtual);
    renderAtividades(dia);
  } else {
    await addLevar(txt);
    renderLevar();
  }
  fecharModal();
};

$("#modal-input").addEventListener("keydown", (e) => {
  if (e.key === "Enter") salvarModal();
});
$("#modal").addEventListener("click", (e) => {
  if (e.target.id === "modal") fecharModal();
});

// ============================================================
//  START
// ============================================================
(async function start() {
  renderCountdown();
  setInterval(renderCountdown, 30000); // mantém horas/minutos atualizados
  await initDB();
  await renderHome();
})();
