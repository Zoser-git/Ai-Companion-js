"use strict";

// Tailwind UI skin map (visual only; game logic unchanged)
var UI_TW_MAP = {
  topbar:
    "min-h-[74px] px-4 py-3 flex items-center gap-3 border-b border-amber-300/20 bg-slate-950/80 backdrop-blur-xl shadow-[0_10px_35px_rgba(0,0,0,0.35)]",
  "topbar-left": "flex items-center gap-3",
  "topbar-center": "flex-1 flex justify-center",
  "topbar-right": "flex items-center gap-2 md:gap-3",
  "topbar-logo":
    "flex items-center gap-2 rounded-full border border-amber-300/25 bg-white/5 px-4 py-2 cursor-pointer transition hover:-translate-y-0.5",
  "logo-text": "font-orbitron tracking-[0.3rem] text-xs",
  "breadcrumb-home":
    "font-orbitron text-[11px] tracking-[0.22rem] rounded-full px-3 py-2 text-slate-300 hover:text-white hover:bg-white/10 cursor-pointer",
  "guest-nudge":
    "flex items-center gap-2 rounded-full border border-amber-300/25 bg-white/5 px-3 py-2 text-[11px] text-slate-300",
  "xp-chip":
    "flex items-center gap-2 rounded-full border border-cyan-300/20 bg-white/5 px-3 py-2",
  "player-chip":
    "flex items-center gap-2 rounded-full border border-cyan-300/20 bg-white/5 px-3 py-2",
  "xp-label": "text-[11px] text-slate-300",
  "xp-pts": "text-[11px] text-slate-300",
  "player-name": "text-[11px] text-slate-300",
  "xp-bar-mini": "h-1.5 w-[72px] overflow-hidden rounded-full bg-white/10",
  "xp-fill-mini":
    "h-full bg-gradient-to-r from-gold to-cyan-300 transition-all duration-500",
  "topbar-btn":
    "h-10 w-10 inline-flex items-center justify-center rounded-xl border border-amber-300/20 bg-white/5 text-slate-100 transition hover:-translate-y-0.5 hover:border-amber-300/45",
  "app-layout": "flex flex-1 min-h-0",
  "game-area":
    "flex-1 min-w-0 overflow-y-auto overflow-x-hidden px-3 pb-3 md:px-4",
  "home-hero":
    "rounded-3xl border border-amber-300/20 bg-[linear-gradient(135deg,rgba(12,19,35,0.96),rgba(8,13,25,0.85))] p-6 md:p-8 shadow-[0_20px_60px_rgba(0,0,0,0.38)]",
  "home-tagline": "mb-3 text-xs tracking-[0.45rem] text-amber-200",
  "home-title":
    "font-orbitron mb-3 text-[clamp(2.2rem,7vw,5rem)] leading-[0.95] tracking-[0.32rem]",
  "home-desc": "text-slate-300 leading-7",
  "stat-card":
    "min-w-[110px] rounded-2xl border border-cyan-300/20 bg-slate-900/70 px-4 py-4 text-center",
  "stat-val": "font-orbitron text-3xl font-bold text-amber-100",
  "stat-lbl": "mt-1 text-[10px] tracking-[0.22rem] text-slate-400",
  "arena-panel":
    "mt-6 rounded-3xl border border-cyan-300/20 bg-slate-950/70 p-5 md:p-6 shadow-[0_20px_60px_rgba(0,0,0,0.38)]",
  "arena-copy": "mx-auto mb-8 max-w-3xl text-center",
  "arena-kicker":
    "inline-flex rounded-full border border-amber-200/30 px-4 py-2 text-xs uppercase tracking-[0.25rem] text-amber-100 font-orbitron",
  "arena-heading":
    "mb-2 text-[clamp(1.35rem,3vw,2rem)] tracking-[0.1rem] font-serifegy",
  "arena-note": "text-slate-300",
  "categories-grid": "grid gap-4",
  "pyramid-nav":
    "rounded-2xl border border-amber-300/25 bg-white/5 text-3xl text-amber-100 transition hover:-translate-y-0.5",
  "cat-game-item":
    "flex items-center gap-3 rounded-xl border border-cyan-300/20 bg-white/5 px-4 py-3 cursor-pointer transition hover:bg-cyan-300/10",
  "cgi-badge":
    "ml-auto rounded-full border border-amber-300/35 bg-amber-300/10 px-2 py-1 text-[10px] tracking-[0.15rem] text-amber-100",
  "game-header":
    "mx-auto my-2.5 flex w-full max-w-5xl flex-wrap items-center justify-between gap-2.5 rounded-2xl border border-cyan-300/20 bg-slate-900/80 p-3 md:my-3 md:p-3.5",
  "back-btn":
    "font-orbitron rounded-xl border border-cyan-300/20 bg-white/5 px-4 py-3 text-slate-100 transition hover:-translate-y-0.5",
  "game-title-hdr": "m-0 text-lg tracking-[0.2rem] font-orbitron",
  "game-hdr-right": "ml-auto",
  "game-badge-hdr":
    "inline-flex rounded-full border border-cyan-300/25 bg-cyan-300/10 px-3 py-1 text-[11px] text-cyan-200 font-orbitron",
  "chat-sidebar":
    "w-0 overflow-hidden flex flex-col border-l border-transparent bg-slate-950/90 transition-all duration-300",
  "sidebar-header": "flex items-center gap-3 border-b border-cyan-300/20 p-4",
  "sidebar-settings": "border-b border-cyan-300/20 p-4",
  "sidebar-messages":
    "flex-1 overflow-y-auto p-4 flex flex-col gap-3 text-[13px]",
  "sidebar-input-row": "border-t border-cyan-300/20 p-4 flex gap-2",
  "sidebar-avatar":
    "inline-flex h-9 w-9 items-center justify-center rounded-full border border-amber-300/25 bg-white/5",
  "sidebar-name": "font-orbitron text-[11px] tracking-[0.2rem]",
  "sidebar-sub": "text-[11px] text-slate-400",
  "sidebar-input":
    "w-full rounded-2xl border border-cyan-300/20 bg-white/5 px-4 py-3 text-[13px] text-slate-100 outline-none",
  "sidebar-send":
    "h-10 w-10 inline-flex items-center justify-center rounded-xl bg-gradient-to-br from-gold to-amber-200 text-slate-900",
  "auth-modal-overlay":
    "fixed inset-0 z-20 flex items-center justify-center bg-black/65 p-4 backdrop-blur",
  "auth-modal-box":
    "relative w-full max-w-[430px] max-h-[90vh] overflow-y-auto rounded-3xl border border-amber-300/25 bg-slate-950/95 p-6",
  "auth-tabs": "grid grid-cols-2 gap-2 mb-4",
  "auth-tab":
    "font-orbitron rounded-xl border border-cyan-300/20 bg-white/5 px-4 py-3 text-sm text-slate-300",
  "auth-form": "flex flex-col gap-3",
  "form-group": "flex flex-col gap-1",
  "form-label": "text-[11px] tracking-[0.18rem] text-amber-200",
  "form-input":
    "w-full rounded-xl border border-cyan-300/20 bg-white/5 px-4 py-3 text-slate-100",
  "auth-btn":
    "font-orbitron rounded-xl bg-gradient-to-br from-gold to-amber-200 px-4 py-3 text-slate-900 font-bold",
  "wordle-status": "text-center text-slate-300 text-sm md:text-[15px] mb-1",
  "wordle-grid": "grid gap-1 mx-auto place-items-center",
  "wordle-row": "grid grid-cols-5 gap-1",
  "wordle-cell":
    "h-10 w-10 rounded-lg border-2 border-cyan-300/20 bg-white/5 flex items-center justify-center font-orbitron text-[17px] sm:h-11 sm:w-11 sm:text-lg",
  "wordle-keyboard":
    "flex flex-col items-center gap-1 w-full max-w-[28rem] mx-auto mt-1",
  "wordle-kb-row": "flex gap-1 flex-wrap justify-center",
  "wordle-key":
    "h-9 min-w-8 rounded-lg border border-cyan-300/20 bg-white/5 px-2 text-[11px] sm:h-10 sm:min-w-9 sm:text-xs",
  "wordle-btn":
    "font-orbitron rounded-xl border border-cyan-300/20 bg-white/5 px-4 py-2.5 text-[12px]",
  "diff-btn":
    "font-orbitron rounded-xl border border-cyan-300/20 bg-white/5 px-3.5 py-2 text-[11px]",
  "spelling-lives": "flex flex-wrap items-center justify-center gap-2",
  "spelling-difficulty": "flex flex-wrap items-center justify-center gap-2",
  "spelling-word-display":
    "w-[176px] h-[176px] sm:w-[196px] sm:h-[196px] rounded-full border-2 border-cyan-300/20 bg-white/5 flex flex-col items-center justify-center gap-2 px-4 text-center mx-auto",
  "spelling-play-btn":
    "w-16 h-16 sm:w-[74px] sm:h-[74px] rounded-full border-2 border-amber-300/45 bg-white/5 text-2xl sm:text-3xl text-amber-200",
  "spelling-word-count": "text-[12px] tracking-[0.12rem] text-slate-300",
  "spelling-score-row": "flex flex-wrap items-center justify-center gap-2",
  "sp-stat":
    "min-w-[82px] rounded-xl border border-cyan-300/20 bg-white/5 p-2.5 md:p-3 text-center",
  "sp-stat-val": "font-orbitron text-amber-100 text-lg md:text-[20px]",
  "spelling-feedback": "text-center text-slate-300 text-[14px] min-h-[1.25rem]",
  "spelling-input-row":
    "mx-auto flex w-full max-w-[420px] items-center justify-center gap-2 md:gap-3",
  "spelling-input":
    "flex-1 rounded-xl border border-cyan-300/20 bg-white/5 px-4 py-3 text-center lowercase text-sm md:text-[15px]",
  "spelling-submit":
    "font-orbitron rounded-xl bg-gradient-to-br from-gold to-amber-200 px-4 py-3 text-slate-900 text-xs md:text-[13px]",
  "reaction-arena":
    "relative mx-auto h-[230px] w-[230px] sm:h-[255px] sm:w-[255px]",
  "reaction-btn":
    "h-full w-full rounded-full border-[3px] border-cyan-300/20 bg-white/5 flex flex-col items-center justify-center gap-1 text-center font-orbitron px-5",
  "reaction-stats": "flex flex-wrap items-center justify-center gap-2",
  "r-stat":
    "min-w-[82px] rounded-xl border border-cyan-300/20 bg-white/5 p-2.5 md:p-3 text-center",
  "reaction-history":
    "flex flex-wrap items-center justify-center gap-2 max-w-[420px]",
  "r-hist-chip":
    "rounded-full border border-cyan-300/20 px-3 py-1 text-xs text-slate-300",
  "chess-status-bar":
    "text-center text-[11px] sm:text-xs tracking-[0.12rem] text-slate-300 px-2",
  "tetris-info-box": "rounded-xl border border-cyan-300/20 bg-white/5 p-2.5",
  "tib-label": "mb-1 text-[11px] tracking-[0.16rem] text-slate-400",
  "tib-val": "text-xl text-amber-100 font-orbitron",
  "tci-row": "flex justify-between gap-3 text-slate-300",
  "tci-key": "text-amber-100 text-xs",
  "tetris-start-overlay":
    "absolute inset-0 z-10 flex flex-col items-center justify-center gap-4 bg-slate-950/90",
  "tetris-overlay-title":
    "font-orbitron text-xl tracking-[0.24rem] text-amber-100",
  "tetris-overlay-btn":
    "font-orbitron rounded-xl bg-gradient-to-br from-gold to-amber-200 px-4 py-3 text-slate-900 text-[13px]",
  "game-shell":
    "mx-auto flex w-full max-w-5xl flex-col items-center justify-center gap-3 text-center md:gap-4",
  "game-shell-compact":
    "mx-auto flex w-full max-w-4xl flex-col items-center justify-center gap-3 text-center md:gap-4",
  "game-stage": "flex w-full flex-col items-center justify-center gap-3",
  "game-stage-split":
    "flex w-full flex-col items-center justify-center gap-3 lg:flex-row lg:items-start lg:justify-center",
  "game-panel":
    "mx-auto rounded-xl border border-cyan-300/20 bg-slate-950/50 p-2",
  "game-side":
    "flex w-full max-w-[240px] flex-col items-center gap-2.5 text-center",
  "chess-board-shell":
    "mx-auto overflow-hidden rounded-xl border border-amber-300/25 bg-[#1a120a] p-0 shadow-[0_18px_45px_rgba(0,0,0,0.45)]",
  "chess-square-light": "bg-[#8d6743]",
  "chess-square-dark": "bg-[#362315]",
  "chess-piece-white":
    "text-[#fff1cf] [text-shadow:0_1px_1px_rgba(0,0,0,0.95),0_0_8px_rgba(255,244,214,0.28)]",
  "chess-piece-black":
    "text-[#050505] [text-shadow:0_0_1px_rgba(255,244,214,1),0_0_3px_rgba(255,244,214,0.95),0_2px_5px_rgba(0,0,0,0.98)]",
};

function applyUiSkin(scope) {
  var root = scope || document;
  var nodes = root.querySelectorAll ? root.querySelectorAll("*") : [];
  for (var i = 0; i < nodes.length; i++) {
    var el = nodes[i];
    if (!el.classList) continue;
    Object.keys(UI_TW_MAP).forEach(function (k) {
      if (el.classList.contains(k)) {
        var tw = UI_TW_MAP[k];
        if (tw) el.classList.add.apply(el.classList, tw.split(" "));
      }
    });
  }
}

// ═══════════════════════════════════════════════════
//  CONFIG — paste your Groq key here
// ═══════════════════════════════════════════════════
var GROQ_KEY = "Available in original file removed from here for safety";

// ═══════════════════════════════════════════════════
//  PLAYER STATE
// ═══════════════════════════════════════════════════
var player = {
  username: "PLAYER",
  xp: 0,
  level: 1,
  wins: 0,
  streak: 0,
  XP_PER_LEVEL: 120,
};

function addXP(amount, reason) {
  player.xp += amount;
  var leveled = false;
  while (player.xp >= player.XP_PER_LEVEL) {
    player.xp -= player.XP_PER_LEVEL;
    player.level++;
    leveled = true;
  }
  updateHUD();
  if (leveled) {
    showToast("UP", "LEVEL UP! Now Level " + player.level);
    aiComment("levelup", "The player just reached level " + player.level + "!");
  } else if (reason) showToast("XP", "+" + amount + " XP — " + reason);
}

function updateHUD() {
  var pct = (player.xp / player.XP_PER_LEVEL) * 100 + "%";
  var e;
  (e = document.getElementById("hud-level")) && (e.textContent = player.level);
  (e = document.getElementById("hud-xp")) && (e.textContent = player.xp);
  (e = document.getElementById("hud-xp-fill")) && (e.style.width = pct);
  (e = document.getElementById("hud-username")) &&
    (e.textContent = player.username.toUpperCase());
  (e = document.getElementById("home-wins")) && (e.textContent = player.wins);
  (e = document.getElementById("home-streak")) &&
    (e.textContent = player.streak);
  (e = document.getElementById("home-level")) && (e.textContent = player.level);
}

// ═══════════════════════════════════════════════════
//  TOAST
// ═══════════════════════════════════════════════════
var toastTimer = null;
function showToast(icon, text) {
  var t = document.getElementById("achievement-toast");
  document.getElementById("achievement-icon").textContent = icon;
  document.getElementById("achievement-text").textContent = text;
  t.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(function () {
    t.classList.remove("show");
  }, 3000);
}

// ═══════════════════════════════════════════════════
//  AUTH
// ═══════════════════════════════════════════════════
function handleLogin(e) {
  e.preventDefault();
  var username = document.getElementById("login-username").value.trim();
  var password = document.getElementById("login-password").value;
  var err = document.getElementById("login-error");
  err.textContent = "";
  if (!username || !password) {
    err.textContent = "All fields are required.";
    return;
  }

  fetch("Database/login.php", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username: username, password: password }),
  })
    .then(function (r) {
      return r.json();
    })
    .then(function (data) {
      if (data.success) {
        player.username = data.username;
        player.xp = data.xp || 0;
        player.level = data.level || 1;
        player.wins = data.wins || 0;
        player.streak = data.streak || 0;
        enterApp();
      } else {
        err.textContent = data.error || "Login failed.";
      }
    })
    .catch(function (e) {
      err.textContent =
        window.location.protocol === "file:"
          ? "Open via http://localhost/NileMind — not as a file."
          : "Could not reach server. Check XAMPP is running.";
    });
}

function handleRegister(e) {
  e.preventDefault();
  var username = document.getElementById("reg-username").value.trim();
  var email = document.getElementById("reg-email").value.trim();
  var pass = document.getElementById("reg-password").value;
  var confirm = document.getElementById("reg-confirm").value;
  var err = document.getElementById("reg-error");
  err.textContent = "";
  if (!username || !email || !pass) {
    err.textContent = "All fields are required.";
    return;
  }
  if (pass !== confirm) {
    err.textContent = "Passwords do not match.";
    return;
  }

  fetch("Database/register.php", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username: username, email: email, password: pass }),
  })
    .then(function (r) {
      return r.json();
    })
    .then(function (data) {
      if (data.success) {
        player.username = data.username;
        player.xp = 0;
        player.level = 1;
        player.wins = 0;
        player.streak = 0;
        enterApp();
      } else {
        err.textContent = data.error || "Registration failed.";
      }
    })
    .catch(function (e) {
      err.textContent =
        window.location.protocol === "file:"
          ? "Open via http://localhost/NileMind — not as a file."
          : "Could not reach server. Check XAMPP is running.";
    });
}

function enterApp() {
  closeAuthModal();
  var gn = document.getElementById("guest-nudge"),
    ab = document.getElementById("auth-topbar-btn"),
    lb = document.getElementById("logout-btn");
  if (gn) gn.style.display = "none";
  if (ab) ab.classList.add("hidden");
  if (lb) lb.classList.remove("hidden");
  updateHUD();
}

function handleLogout() {
  fetch("Database/logout.php", { method: "POST" }).catch(function () {});
  player.username = "GUEST";
  player.xp = 0;
  player.level = 1;
  player.wins = 0;
  player.streak = 0;
  var gn = document.getElementById("guest-nudge"),
    ab = document.getElementById("auth-topbar-btn"),
    lb = document.getElementById("logout-btn");
  if (gn) gn.style.display = "";
  if (ab) ab.classList.remove("hidden");
  if (lb) lb.classList.add("hidden");
  goHome();
  updateHUD();
}

// ═══════════════════════════════════════════════════
//  NAVIGATION
// ═══════════════════════════════════════════════════
var currentView = "home";
var categoryCards = [];
var activeCategoryIndex = 0;
var categoryFlipDir = 1;

function showView(id) {
  document.querySelectorAll(".view").forEach(function (v) {
    v.style.display = "none";
    v.classList.remove("active");
  });
  var el = document.getElementById(id + "-screen");
  if (el) {
    el.style.display = "block";
    el.classList.add("active");
    currentView = id;
  }
  if (id === "home") syncCategoryArena();
}
function goHome() {
  stopTetris();
  stopReaction();
  stopChess();
  stopSudoku();
  showView("home");
  updateHUD();
  syncCategoryArena();
}
function launchGame(game) {
  showView(game);
  setTimeout(function () {
    if (game === "wordle") initWordle();
    else if (game === "spelling") initSpelling();
    else if (game === "tetris") initTetris();
    else if (game === "reaction") initReaction();
    else if (game === "chess") initChess();
    else if (game === "sudoku") initSudoku();
  }, 60);
}
function initCategoryArena() {
  categoryCards = Array.prototype.slice.call(
    document.querySelectorAll(".pyramid-face"),
  );
  if (!categoryCards.length) return;
  var found = categoryCards.findIndex(function (card) {
    return card.classList.contains("is-active");
  });
  activeCategoryIndex = found >= 0 ? found : 0;
  syncCategoryArena();
}
function syncCategoryArena() {
  if (!categoryCards.length) return;
  var faces = ["front", "right", "back", "left"];
  categoryCards.forEach(function (card, index) {
    var relative =
      (index - activeCategoryIndex + categoryCards.length) %
      categoryCards.length;
    var face = faces[relative];
    var isActive = relative === 0;
    var wasHovered = card.classList.contains("is-hovered");
    var wasOpen = card.classList.contains("games-open");
    card.dataset.face = face;
    card.classList.remove(
      "face-front",
      "face-right",
      "face-back",
      "face-left",
      "is-active",
    );
    card.classList.remove("pyr-enter-left", "pyr-enter-right");
    card.classList.add("face-" + face);
    if (isActive) {
      card.classList.add("is-active");
      card.classList.add(
        categoryFlipDir > 0 ? "pyr-enter-right" : "pyr-enter-left",
      );
      (function (el) {
        setTimeout(function () {
          el.classList.remove("pyr-enter-left", "pyr-enter-right");
        }, 520);
      })(card);
    }
    if (!isActive) {
      card.classList.remove("is-hovered", "games-open");
    } else {
      if (wasHovered) card.classList.add("is-hovered");
      if (wasOpen) card.classList.add("games-open");
    }
    card.setAttribute("aria-current", isActive ? "true" : "false");
    card.setAttribute("aria-hidden", isActive ? "false" : "true");
    var list = card.querySelector(".cat-games-list");
    if (list) {
      var open =
        isActive &&
        (card.classList.contains("is-hovered") ||
          card.classList.contains("games-open"));
      list.setAttribute("aria-hidden", open ? "false" : "true");
    }
  });
}
function setActiveCategory(index) {
  if (!categoryCards.length) return;
  var old = activeCategoryIndex;
  activeCategoryIndex = (index + categoryCards.length) % categoryCards.length;
  var rawDiff = activeCategoryIndex - old;
  if (rawDiff === 0) rawDiff = 1;
  if (Math.abs(rawDiff) > 1) rawDiff = rawDiff > 0 ? -1 : 1;
  categoryFlipDir = rawDiff > 0 ? 1 : -1;
  syncCategoryArena();
}
function shiftCategory(step) {
  if (!categoryCards.length) initCategoryArena();
  setActiveCategory(activeCategoryIndex + step);
}
function handleCatClick(card) {
  if (!card || !categoryCards.length) return;
  var cardIndex = categoryCards.indexOf(card);
  if (cardIndex >= 0 && cardIndex !== activeCategoryIndex) return;
  if (window.innerWidth <= 768) {
    var willOpen = !card.classList.contains("games-open");
    categoryCards.forEach(function (item) {
      item.classList.remove("games-open", "is-hovered");
    });
    if (willOpen) card.classList.add("games-open");
    syncCategoryArena();
  }
}
function showCatGames(card) {
  if (!card || !categoryCards.length) return;
  var cardIndex = categoryCards.indexOf(card);
  if (cardIndex >= 0 && cardIndex !== activeCategoryIndex) return;
  categoryCards.forEach(function (item) {
    item.classList.remove("is-hovered");
  });
  if (card.classList.contains("is-active")) card.classList.add("is-hovered");
  syncCategoryArena();
}
function hideCatGames(card) {
  if (!card) return;
  card.classList.remove("is-hovered");
  syncCategoryArena();
}

// ═══════════════════════════════════════════════════
//  CHAT SIDEBAR
// ═══════════════════════════════════════════════════
var sidebarOpen = false,
  chatHistory = [],
  chatWaiting = false;

var NERU_SYSTEM =
  "You are Neru, an AI companion on NileMind. Talk like a real person — casual,  no fluff. " +
  "Games on the site: Wordle, Spelling Bee, Tetris, Sudoku, Reaction Test, Chess. " +
  "In Wordle, Spelling Bee, Tetris, Sudoku, and Reaction Test you are a spectator only. Never say you guessed, played, or took a turn. React to what the player does. " +
  "In Chess you are the AI opponent. Comment on moves naturally, like someone who actually plays. " +
  "When a game state is given, use it — be casual and friendly. " +
  "When the user makes a mistake or does something impressive make fun of them or praise like a close friend would." +
  "Never say the user did always refer to the user with you/your unless they ask otherwise." +
  "Outside games, talk about whatever the user wants. Normal conversation, questions, anything. " +
  "No hype, no cringe, no bullet points, no fake enthusiasm. " +
  "Keep it to 4-10 words when the user is playing a game. " +
  "When not in a game reply in 1-4 sentences max.";

function toggleChatSidebar() {
  sidebarOpen = !sidebarOpen;
  document.getElementById("chat-sidebar").classList.toggle("open", sidebarOpen);
}

// ── Groq API ──────────────────────────────────────
function callAI(userText, hist) {
  if (!GROQ_KEY || GROQ_KEY === "PASTE_YOUR_GROQ_KEY_HERE")
    return Promise.reject(new Error("No Groq API key set in app.js"));
  var payload = [{ role: "system", content: NERU_SYSTEM }];
  (hist || []).forEach(function (m) {
    payload.push({
      role: m.role === "model" ? "assistant" : "user",
      content: m.parts[0].text,
    });
  });
  payload.push({ role: "user", content: userText });
  return fetch("https://api.groq.com/openai/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + GROQ_KEY,
    },
    body: JSON.stringify({
      model: "llama-3.1-8b-instant",
      messages: payload,
      max_tokens: 120,
    }),
  }).then(function (res) {
    return res.json().then(function (data) {
      if (!res.ok)
        throw new Error(
          "Groq: " +
            ((data.error && data.error.message) || "HTTP " + res.status),
        );
      return data.choices[0].message.content;
    });
  });
}

// ── Message rendering ─────────────────────────────
function appendSMsg(text, sender, isError) {
  var wrap = document.getElementById("sidebar-messages");
  var div = document.createElement("div");
  div.className = "s-msg " + (sender === "user" ? "user" : "bot");
  var isBot = sender !== "user";
  var replayBtn = "";
  if (isBot && !isError) {
    var safe = text
      .replace(/\\/g, "\\\\")
      .replace(/'/g, "\\'")
      .replace(/"/g, '\\"');
    replayBtn =
      '<button class="replay-tts-btn" title="Replay" onclick="replayLastTTS(\'' +
      safe +
      "')\">🔊</button>";
  }
  div.innerHTML =
    '<div class="s-avatar ' +
    (isBot ? "bot" : "user") +
    '">' +
    (isBot ? "𓅃" : "𓂋") +
    "</div>" +
    '<div class="s-bubble ' +
    (isError ? "error" : sender) +
    '">' +
    (isBot && !isError
      ? '<div class="s-name">NERU ' + replayBtn + "</div>"
      : "") +
    esc(text) +
    "</div>";
  wrap.appendChild(div);
  wrap.scrollTop = wrap.scrollHeight;
  if (isBot && !isError) speakText(text);
}
function showSTyping() {
  var wrap = document.getElementById("sidebar-messages");
  var div = document.createElement("div");
  div.className = "s-msg bot";
  div.id = "s-typing";
  div.innerHTML =
    '<div class="s-avatar bot">𓅃</div><div class="s-bubble bot"><div class="s-name">NERU</div><div class="s-typing"><div class="s-dot"></div><div class="s-dot"></div><div class="s-dot"></div></div></div>';
  wrap.appendChild(div);
  wrap.scrollTop = wrap.scrollHeight;
}
function removeSTyping() {
  var t = document.getElementById("s-typing");
  if (t) t.remove();
}

function sendChat() {
  var inp = document.getElementById("sidebar-input");
  var text = inp.value.trim();
  if (!text || chatWaiting) return;
  if (!sidebarOpen) toggleChatSidebar();
  inp.value = "";
  rateLimited(function () {
    chatWaiting = true;
    appendSMsg(text, "user");
    chatHistory.push({ role: "user", parts: [{ text: text }] });
    showSTyping();
    // Attach current game state to user message for context
    var stateCtx = getGameStateContext();
    var fullMsg = stateCtx
      ? "[GAME STATE: " + stateCtx + "]\n\nPlayer says: " + text
      : text;
    callAI(fullMsg, chatHistory.slice(0, -1))
      .then(function (reply) {
        chatHistory.push({ role: "model", parts: [{ text: reply }] });
        removeSTyping();
        appendSMsg(reply, "bot");
      })
      .catch(function (e) {
        removeSTyping();
        chatHistory.pop();
        appendSMsg(e.message, "bot", true);
      })
      .then(function () {
        chatWaiting = false;
      });
  });
}

// aiComment — game sends event + full state, Neru reacts
// gameContext: string describing what just happened + current board/state
function aiComment(event, gameContext) {
  if (!GROQ_KEY || GROQ_KEY === "PASTE_YOUR_GROQ_KEY_HERE" || chatWaiting)
    return;
  scheduledAfterTTS(function () {
    if (chatWaiting) return;
    rateLimited(function () {
      chatWaiting = true;
      if (sidebarOpen) showSTyping();
      var stateCtx = getGameStateContext();
      var fullMsg =
        "[EVENT: " +
        event +
        "]\n[GAME STATE: " +
        (gameContext || stateCtx || "unknown") +
        "]\nReact to this as a spectator watching the player.";
      callAI(fullMsg, chatHistory.slice(-4))
        .then(function (reply) {
          removeSTyping();
          if (sidebarOpen) appendSMsg(reply, "bot");
          else speakText(reply);
          chatHistory.push({ role: "model", parts: [{ text: reply }] });
        })
        .catch(function () {
          removeSTyping();
        })
        .then(function () {
          chatWaiting = false;
        });
    });
  });
}

// Build a live game state string from whatever is currently running
function getGameStateContext() {
  if (currentView === "wordle" && W && W.answer) {
    var guessDescs = W.guesses.map(function (g, i) {
      return (
        "Guess " +
        (i + 1) +
        ": " +
        g.letters.join("") +
        " (" +
        g.colors
          .map(function (c, ci) {
            return g.letters[ci] + "=" + c;
          })
          .join(", ") +
        ")"
      );
    });
    return (
      "Wordle. Answer is hidden. Attempt " +
      (W.guesses.length + 1) +
      "/6. " +
      (guessDescs.length
        ? "Previous guesses: " + guessDescs.join(" | ")
        : "No guesses yet.") +
      " Current input: " +
      (W.current || "(empty)") +
      ". Over: " +
      W.over +
      (W.over ? " Won: " + W.won + " Answer: " + W.answer : "")
    );
  }
  if (currentView === "spelling" && SP && SP.diff) {
    return (
      "Spelling Bee. Difficulty: " +
      SP.diff +
      ". Score: " +
      SP.score +
      ". Streak: " +
      SP.streak +
      ". Lives: " +
      SP.lives +
      "/3. Total words: " +
      SP.total +
      (SP.current
        ? ". Current word to spell: (hidden from you). Hint: " + SP.current.h
        : ". Waiting for next word.")
    );
  }
  if (currentView === "tetris" && TS) {
    return (
      "Tetris. Score: " +
      TS.score +
      ". Level: " +
      TS.level +
      ". Lines cleared: " +
      TS.lines +
      ". Paused: " +
      TS.paused +
      ". Game over: " +
      TS.over +
      ". Current piece: " +
      (TS.piece ? TS.piece.key : "none") +
      ". Next piece: " +
      (TS.next ? TS.next.key : "none")
    );
  }
  if (currentView === "reaction" && RS) {
    return (
      "Reaction Test. Phase: " +
      RS.phase +
      ". Best time: " +
      (RS.best ? RS.best + "ms" : "none") +
      ". Attempts: " +
      RS.history.length +
      (RS.history.length
        ? ". Last 5 times: " + RS.history.slice(-5).join("ms, ") + "ms"
        : "")
    );
  }
  if (currentView === "chess" && CG && CG.board) {
    return (
      "Chess. You (Neru) are Black, player is White. Turn: " +
      CG.turn +
      ". Difficulty: " +
      CG.difficulty +
      ". Moves played: " +
      CG.moveCount +
      ". In check: " +
      inCheck(CG.board, CG.turn === "white") +
      ". Last moves: " +
      (CG.moveHistory.slice(-4).join(", ") || "none") +
      ". Player captures: " +
      CG.capturedByPlayer
        .map(function (p) {
          return PIECE_UNICODE[p];
        })
        .join("") +
      ". AI captures: " +
      CG.capturedByAI
        .map(function (p) {
          return PIECE_UNICODE[p];
        })
        .join("")
    );
  }
  return "Player is on the home screen.";
}

// TTS queue — ensures word TTS finishes before AI speaks
var ttsQueue = [],
  ttsCallbackPending = false;
function scheduledAfterTTS(fn) {
  ttsQueue.push(fn);
  drainTtsQueue();
}
function drainTtsQueue() {
  if (ttsCallbackPending || !ttsQueue.length) return;
  if (ttsAudio && !ttsAudio.paused) {
    ttsCallbackPending = true;
    ttsAudio.addEventListener("ended", function onEnd() {
      ttsAudio.removeEventListener("ended", onEnd);
      ttsCallbackPending = false;
      var fn = ttsQueue.shift();
      if (fn) fn();
      drainTtsQueue();
    });
    return;
  }
  if ("speechSynthesis" in window && window.speechSynthesis.speaking) {
    ttsCallbackPending = true;
    var check = setInterval(function () {
      if (!window.speechSynthesis.speaking) {
        clearInterval(check);
        ttsCallbackPending = false;
        var fn = ttsQueue.shift();
        if (fn) fn();
        drainTtsQueue();
      }
    }, 300);
    return;
  }
  var fn = ttsQueue.shift();
  if (fn) fn();
  drainTtsQueue();
}

function esc(s) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/\n/g, "<br>");
}
function mk(tag, cls) {
  var e = document.createElement(tag);
  if (cls) {
    e.className = cls;
    cls.split(" ").forEach(function (name) {
      var tw = UI_TW_MAP[name];
      if (tw) e.classList.add.apply(e.classList, tw.split(" "));
    });
  }
  return e;
}

// ═══════════════════════════════════════════════════
//  BG CANVAS
// ═══════════════════════════════════════════════════
function startBgCanvas() {
  var canvas = document.getElementById("bg-canvas"),
    ctx = canvas.getContext("2d");
  var glyphs = ["𓂀", "𓅃", "𓆙", "𓋹", "𓂋", "𓏏", "𓊖", "✦", "*", "+"];
  var pts = [];
  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener("resize", resize);
  for (var i = 0; i < 30; i++)
    pts.push({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      vy: -(0.15 + Math.random() * 0.35),
      vx: (Math.random() - 0.5) * 0.15,
      size: 10 + Math.random() * 14,
      op: 0.03 + Math.random() * 0.06,
      g: glyphs[Math.floor(Math.random() * glyphs.length)],
      w: Math.random() * Math.PI * 2,
    });
  (function loop() {
    requestAnimationFrame(loop);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    pts.forEach(function (p) {
      p.y += p.vy;
      p.w += 0.012;
      p.x += p.vx + Math.sin(p.w) * 0.1;
      if (p.y < -30) {
        p.y = canvas.height + 10;
        p.x = Math.random() * canvas.width;
      }
      ctx.save();
      ctx.globalAlpha = p.op;
      ctx.font = p.size + "px serif";
      ctx.fillStyle = "#c9a227";
      ctx.fillText(p.g, p.x, p.y);
      ctx.restore();
    });
  })();
}

// ═══════════════════════════════════════════════════
//  WORDLE
// ═══════════════════════════════════════════════════
var WORDS = [
  "CRANE",
  "SLATE",
  "AUDIO",
  "PLANT",
  "EARTH",
  "FLAME",
  "GHOST",
  "IVORY",
  "JOUST",
  "KNAVE",
  "LYRIC",
  "MARCH",
  "NYMPH",
  "OXIDE",
  "PRISM",
  "QUILL",
  "RAVEN",
  "SOLAR",
  "TITHE",
  "UMBRA",
  "VENOM",
  "WALTZ",
  "BLAZE",
  "CLOAK",
  "DELTA",
  "EMBER",
  "FLINT",
  "GRAVE",
  "HEDGE",
  "INERT",
  "JEWEL",
  "KARMA",
  "LEECH",
  "MANOR",
  "NOBLE",
  "OASIS",
  "PIXEL",
  "QUEEN",
  "REMIT",
  "SMITE",
  "TIGER",
  "VIVID",
  "WRATH",
  "EXPEL",
  "YIELD",
  "BRAVE",
  "SWORD",
  "STONE",
  "TOWER",
  "MAGIC",
];
var W = {};

function initWordle() {
  document.removeEventListener("keydown", wordleKey);
  W = {
    answer: WORDS[Math.floor(Math.random() * WORDS.length)],
    guesses: [],
    current: "",
    over: false,
    won: false,
    keyMap: {},
  };
  buildWordleUI();
  document.addEventListener("keydown", wordleKey);
  aiComment(
    "wordle_start",
    "New Wordle game started. Player is about to make their first guess. 5-letter word, 6 attempts.",
  );
}

function buildWordleUI() {
  var root = document.getElementById("wordle-root");
  root.innerHTML = "";
  root.className = "game-shell-compact";
  root.style.cssText = "padding:4px 0 0;";
  var status = mk("div", "wordle-status");
  status.id = "w-status";
  status.textContent = W.over
    ? W.won
      ? "CORRECT — " + W.answer
      : "The word was: " + W.answer
    : "Guess " + (W.guesses.length + 1) + " of 6";
  root.appendChild(status);

  var grid = mk("div", "wordle-grid");
  for (var r = 0; r < 6; r++) {
    var row = mk("div", "wordle-row");
    for (var c = 0; c < 5; c++) {
      var cell = mk("div", "wordle-cell");
      if (r < W.guesses.length) {
        cell.textContent = W.guesses[r].letters[c];
        cell.classList.add(W.guesses[r].colors[c]);
      } else if (r === W.guesses.length && !W.over && c < W.current.length) {
        cell.textContent = W.current[c];
        cell.classList.add("filled");
      }
      row.appendChild(cell);
    }
    grid.appendChild(row);
  }
  root.appendChild(grid);

  var kb = mk("div", "wordle-keyboard");
  [
    ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
    ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
    ["ENTER", "Z", "X", "C", "V", "B", "N", "M", String.fromCharCode(8592)],
  ].forEach(function (keys) {
    var krow = mk("div", "wordle-kb-row");
    keys.forEach(function (k) {
      var btn = mk("button", "wordle-key" + (k.length > 1 ? " wide" : ""));
      btn.textContent = k === String.fromCharCode(8592) ? "⌫" : k;
      if (W.keyMap[k]) btn.classList.add(W.keyMap[k]);
      (function (kk) {
        btn.onclick = function () {
          wInput(kk);
        };
      })(k);
      krow.appendChild(btn);
    });
    kb.appendChild(krow);
  });
  root.appendChild(kb);

  if (W.over) {
    var btn = mk("button", "wordle-btn primary");
    btn.textContent = "NEW GAME";
    btn.onclick = initWordle;
    btn.style.marginTop = "10px";
    root.appendChild(btn);
  }
  applyUiSkin(root);
}

function wordleKey(e) {
  if (currentView !== "wordle") return;
  if (e.key === "Enter") wInput("ENTER");
  else if (e.key === "Backspace") wInput("⌫");
  else if (/^[a-zA-Z]$/.test(e.key)) wInput(e.key.toUpperCase());
}

function wInput(k) {
  if (W.over) return;
  if (k === "⌫") W.current = W.current.slice(0, -1);
  else if (k === "ENTER") {
    wSubmit();
    return;
  } else if (W.current.length < 5) W.current += k;
  buildWordleUI();
}

function wSubmit() {
  if (W.current.length < 5) return;
  var guess = W.current,
    ans = W.answer;
  var colors = ["absent", "absent", "absent", "absent", "absent"];
  var ansArr = ans.split(""),
    gArr = guess.split("");
  gArr.forEach(function (l, i) {
    if (l === ansArr[i]) {
      colors[i] = "correct";
      ansArr[i] = null;
      gArr[i] = null;
    }
  });
  gArr.forEach(function (l, i) {
    if (!l) return;
    var j = ansArr.indexOf(l);
    if (j !== -1) {
      colors[i] = "present";
      ansArr[j] = null;
    }
  });
  W.guesses.push({ letters: guess.split(""), colors: colors });
  W.current = "";
  var priority = { correct: 3, present: 2, absent: 1 };
  guess.split("").forEach(function (l, i) {
    if (!W.keyMap[l] || priority[colors[i]] > priority[W.keyMap[l]])
      W.keyMap[l] = colors[i];
  });

  var won = colors.every(function (c) {
    return c === "correct";
  });
  var correctCount = colors.filter(function (c) {
    return c === "correct";
  }).length;
  var presentCount = colors.filter(function (c) {
    return c === "present";
  }).length;
  var stateDesc =
    "Wordle. Guess " +
    W.guesses.length +
    '/6 was "' +
    guess +
    '". Result: ' +
    colors
      .map(function (c, i) {
        return guess[i] + "=" + c;
      })
      .join(", ") +
    ". Correct letters in right spot: " +
    correctCount +
    ". Letters present but wrong spot: " +
    presentCount +
    ".";

  if (won) {
    W.over = true;
    W.won = true;
    player.wins++;
    player.streak++;
    addXP(
      Math.max(10, 60 - W.guesses.length * 8),
      "Wordle in " + W.guesses.length + "!",
    );
    aiComment(
      "wordle_win",
      stateDesc +
        " Player WON in " +
        W.guesses.length +
        " guesses! The answer was " +
        ans +
        ".",
    );
  } else if (W.guesses.length === 6) {
    W.over = true;
    W.won = false;
    player.streak = 0;
    addXP(5, "Good effort!");
    aiComment(
      "wordle_lose",
      stateDesc +
        " Player LOST. The answer was " +
        ans +
        ". They used all 6 guesses.",
    );
  } else {
    aiComment(
      "wordle_guess",
      stateDesc +
        " " +
        W.guesses.length +
        " guesses used, " +
        (6 - W.guesses.length) +
        " remaining.",
    );
  }
  buildWordleUI();
}

// ═══════════════════════════════════════════════════
//  SPELLING BEE
// ═══════════════════════════════════════════════════
var SPELL_WORDS = {
  easy: [
    { w: "apple", h: "A red or green fruit" },
    { w: "brave", h: "Showing courage" },
    { w: "cloud", h: "Seen in the sky" },
    { w: "dance", h: "Move to music" },
    { w: "earth", h: "Our planet" },
    { w: "flame", h: "Part of fire" },
    { w: "grace", h: "Elegant movement" },
    { w: "heart", h: "Pumps blood" },
    { w: "ivory", h: "A pale white color" },
    { w: "jewel", h: "A precious gem" },
    { w: "light", h: "Illumination" },
    { w: "money", h: "Currency" },
    { w: "night", h: "When stars shine" },
    { w: "ocean", h: "Large body of water" },
    { w: "peace", h: "Absence of conflict" },
  ],
  medium: [
    { w: "ancient", h: "Very old" },
    { w: "balance", h: "Stability" },
    { w: "captain", h: "Leader of a ship" },
    { w: "diamond", h: "The hardest gemstone" },
    { w: "eclipse", h: "Moon blocks the sun" },
    { w: "fortune", h: "Luck or wealth" },
    { w: "glacier", h: "Slow-moving mass of ice" },
    { w: "horizon", h: "Where sky meets land" },
    { w: "imagine", h: "Create in your mind" },
    { w: "justice", h: "Fairness and law" },
    { w: "lantern", h: "A portable light" },
    { w: "mystery", h: "An unsolved puzzle" },
    { w: "phantom", h: "A ghost" },
    { w: "silence", h: "Complete quiet" },
    { w: "thunder", h: "Sound after lightning" },
  ],
  hard: [
    { w: "archaeology", h: "Study of ancient civilizations" },
    { w: "bureaucracy", h: "Complex administration" },
    { w: "catastrophe", h: "A great disaster" },
    { w: "deteriorate", h: "To get worse" },
    { w: "exaggerate", h: "To overstate something" },
    { w: "fascinate", h: "To strongly attract" },
    { w: "guarantee", h: "A firm promise" },
    { w: "hierarchy", h: "A ranked system" },
    { w: "illuminate", h: "To light something up" },
    { w: "labyrinth", h: "A complex maze" },
    { w: "magnificent", h: "Impressively great" },
    { w: "necessary", h: "Needed or required" },
    { w: "opportunity", h: "A favorable moment" },
    { w: "phenomenon", h: "An observable event" },
    { w: "acknowledge", h: "To recognize or admit" },
  ],
};
var SP = {};

function initSpelling() {
  SP = {
    diff: "easy",
    pool: shuffleArr([].concat(SPELL_WORDS.easy)),
    current: null,
    score: 0,
    streak: 0,
    lives: 3,
    total: 0,
    idx: 0,
    over: false,
    lastResult: null,
  };
  buildSpellingUI();
  aiComment(
    "spelling_start",
    "Spelling Bee started. Difficulty: easy. Player will hear a word and must type it correctly.",
  );
}
function shuffleArr(arr) {
  for (var i = arr.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var t = arr[i];
    arr[i] = arr[j];
    arr[j] = t;
  }
  return arr;
}

function buildSpellingUI() {
  var root = document.getElementById("spelling-root");
  root.innerHTML = "";
  root.className = "game-shell-compact";
  root.style.cssText = "padding:2px 0 0;";

  var diffRow = mk("div", "spelling-difficulty");
  ["easy", "medium", "hard"].forEach(function (d) {
    var b = mk("button", "diff-btn " + d + (SP.diff === d ? " active" : ""));
    b.textContent = d.toUpperCase();
    (function (dd) {
      b.onclick = function () {
        setSpellDiff(dd);
      };
    })(d);
    diffRow.appendChild(b);
  });
  root.appendChild(diffRow);

  var livesRow = mk("div", "spelling-lives");
  for (var i = 0; i < 3; i++) {
    var h = mk("span", "life-heart" + (i >= SP.lives ? " lost" : ""));
    h.textContent = "❤️";
    livesRow.appendChild(h);
  }
  root.appendChild(livesRow);

  var circle = mk("div", "spelling-word-display");
  var playBtn = mk("button", "spelling-play-btn");
  playBtn.id = "spell-play-btn";
  playBtn.innerHTML = "🔊";
  playBtn.onclick = function () {
    if (!SP.current) nextSpellWord();
    else speakWord(SP.current.w, null);
  };
  circle.appendChild(playBtn);
  var lbl = mk("div", "spelling-word-count");
  lbl.textContent = SP.current
    ? "WORD " + SP.idx + " — " + SP.diff.toUpperCase()
    : "PRESS 🔊 TO START";
  circle.appendChild(lbl);
  if (SP.current) {
    var hint = mk("div", "");
    hint.style.cssText =
      "font-size:12px;color:var(--text-dim);font-style:italic;margin-top:6px;text-align:center;padding:0 12px;line-height:1.4;";
    hint.textContent = "Hint: " + SP.current.h;
    circle.appendChild(hint);
  }
  root.appendChild(circle);

  var sr = mk("div", "spelling-score-row");
  sr.innerHTML =
    '<div class="sp-stat"><div class="sp-stat-val">' +
    SP.score +
    '</div><div class="sp-stat-lbl">SCORE</div></div><div class="sp-stat"><div class="sp-stat-val">' +
    SP.streak +
    '</div><div class="sp-stat-lbl">STREAK</div></div><div class="sp-stat"><div class="sp-stat-val">' +
    SP.total +
    '</div><div class="sp-stat-lbl">WORDS</div></div>';
  root.appendChild(sr);

  var fb = mk("div", "spelling-feedback");
  fb.id = "spell-fb";
  if (SP.lastResult) {
    fb.style.color = SP.lastResult.ok ? "var(--green)" : "var(--red)";
    fb.textContent = SP.lastResult.msg;
  }
  root.appendChild(fb);

  if (SP.current && !SP.over) {
    var row = mk("div", "spelling-input-row");
    var inp = mk("input", "spelling-input");
    inp.id = "spell-inp";
    inp.placeholder = "Type the word...";
    inp.autocomplete = "off";
    inp.spellcheck = false;
    inp.addEventListener("keydown", function (e) {
      if (e.key === "Enter") checkSpelling();
    });
    var sub = mk("button", "spelling-submit");
    sub.textContent = "CHECK";
    sub.onclick = checkSpelling;
    row.appendChild(inp);
    row.appendChild(sub);
    root.appendChild(row);
    var rep = mk("button", "wordle-btn");
    rep.textContent = "🔊 Repeat Word";
    rep.style.marginTop = "4px";
    rep.onclick = function () {
      speakWord(SP.current.w, null);
    };
    root.appendChild(rep);
    setTimeout(function () {
      var ii = document.getElementById("spell-inp");
      if (ii) ii.focus();
    }, 80);
  }
  if (SP.over) {
    var over = mk("div", "");
    over.style.textAlign = "center";
    var msg = mk("p", "");
    msg.style.cssText =
      "font-family:Cinzel,serif;font-size:14px;color:var(--gold2);letter-spacing:3px;margin-bottom:14px;";
    msg.textContent = "GAME OVER — Score: " + SP.score;
    var btn2 = mk("button", "wordle-btn primary");
    btn2.textContent = "PLAY AGAIN";
    btn2.onclick = initSpelling;
    over.appendChild(msg);
    over.appendChild(btn2);
    root.appendChild(over);
  }
  applyUiSkin(root);
}

function setSpellDiff(d) {
  SP.diff = d;
  SP.pool = shuffleArr([].concat(SPELL_WORDS[d]));
  SP.current = null;
  SP.score = 0;
  SP.streak = 0;
  SP.lives = 3;
  SP.total = 0;
  SP.idx = 0;
  SP.over = false;
  SP.lastResult = null;
  buildSpellingUI();
}

function nextSpellWord() {
  if (!SP.pool.length) SP.pool = shuffleArr([].concat(SPELL_WORDS[SP.diff]));
  SP.current = SP.pool.pop();
  SP.idx++;
  SP.lastResult = null;
  buildSpellingUI();
  // FIX: speak word fully first, then AI comments after word TTS ends
  setTimeout(function () {
    speakWord(SP.current.w, function () {
      // word has fully finished — now Neru can comment
      var stateDesc =
        "Spelling Bee. Word #" +
        SP.idx +
        " just played out loud. Difficulty: " +
        SP.diff +
        '. Hint: "' +
        SP.current.h +
        '". Score: ' +
        SP.score +
        ". Lives: " +
        SP.lives +
        "/3.";
      aiComment(
        "spelling_new_word",
        stateDesc + " Player needs to type the word they just heard.",
      );
    });
  }, 400);
}

// speakWord: speaks word via browser TTS, calls onEnd when finished
function speakWord(word, onEnd) {
  if (!("speechSynthesis" in window)) {
    var fb = document.getElementById("spell-fb");
    if (fb) {
      fb.style.color = "var(--text-dim)";
      fb.textContent = "TTS not supported.";
    }
    if (onEnd) onEnd();
    return;
  }
  window.speechSynthesis.cancel();
  var utt = new SpeechSynthesisUtterance(word);
  utt.rate = 0.75;
  utt.pitch = 1.0;
  utt.lang = "en-US";
  var voices = window.speechSynthesis.getVoices();
  var v =
    voices.find(function (v) {
      return v.lang.startsWith("en") && v.localService;
    }) ||
    voices.find(function (v) {
      return v.lang.startsWith("en");
    });
  if (v) utt.voice = v;
  var btn = document.getElementById("spell-play-btn");
  if (btn) {
    btn.classList.add("playing");
    utt.onend = function () {
      btn.classList.remove("playing");
      if (onEnd) onEnd();
    };
  } else {
    utt.onend = function () {
      if (onEnd) onEnd();
    };
  }
  window.speechSynthesis.speak(utt);
}

function checkSpelling() {
  if (!SP.current || SP.over) return;
  var inp = document.getElementById("spell-inp");
  if (!inp) return;
  var answer = inp.value.trim().toLowerCase(),
    correct = SP.current.w.toLowerCase();
  SP.total++;
  if (answer === correct) {
    var pts = SP.diff === "hard" ? 30 : SP.diff === "medium" ? 20 : 10;
    SP.score += pts;
    SP.streak++;
    SP.lastResult = { ok: true, msg: "CORRECT! +" + pts + " pts" };
    if (SP.streak === 3) showToast("🔥", "3 Word Streak!");
    if (SP.streak === 5) {
      showToast("⚡", "5 Streak BONUS!");
      SP.score += 20;
      addXP(20, "Streak bonus!");
    }
    addXP(12, "Correct spelling!");
    var stateDesc =
      'Spelling Bee. Player correctly spelled "' +
      correct +
      '". Difficulty: ' +
      SP.diff +
      ". Score now: " +
      SP.score +
      ". Streak: " +
      SP.streak +
      ". Lives: " +
      SP.lives +
      "/3.";
    aiComment("spelling_correct", stateDesc);
    SP.current = null;
    buildSpellingUI();
    setTimeout(nextSpellWord, 800);
  } else {
    SP.lives--;
    SP.streak = 0;
    SP.lastResult = { ok: false, msg: 'Wrong! The word was "' + correct + '"' };
    var stateDesc2 =
      'Spelling Bee. Player typed "' +
      answer +
      '" but correct answer was "' +
      correct +
      '". Lives remaining: ' +
      SP.lives +
      "/3. Score: " +
      SP.score +
      ".";
    if (SP.lives <= 0) {
      SP.over = true;
      player.streak = 0;
      addXP(SP.score > 0 ? 10 : 2, "Spelling Bee ended");
      aiComment(
        "spelling_gameover",
        stateDesc2 + " Player ran out of lives! Game over.",
      );
      buildSpellingUI();
    } else {
      aiComment("spelling_wrong", stateDesc2);
      buildSpellingUI();
      setTimeout(nextSpellWord, 1400);
    }
  }
}

// ═══════════════════════════════════════════════════
//  TETRIS
// ═══════════════════════════════════════════════════
var TETS = {
  I: { shape: [[1, 1, 1, 1]], color: "#4fc3f7" },
  O: {
    shape: [
      [1, 1],
      [1, 1],
    ],
    color: "#ffee58",
  },
  T: {
    shape: [
      [0, 1, 0],
      [1, 1, 1],
    ],
    color: "#ce93d8",
  },
  S: {
    shape: [
      [0, 1, 1],
      [1, 1, 0],
    ],
    color: "#a5d6a7",
  },
  Z: {
    shape: [
      [1, 1, 0],
      [0, 1, 1],
    ],
    color: "#ef9a9a",
  },
  J: {
    shape: [
      [1, 0, 0],
      [1, 1, 1],
    ],
    color: "#90caf9",
  },
  L: {
    shape: [
      [0, 0, 1],
      [1, 1, 1],
    ],
    color: "#ffcc80",
  },
};
var TK_KEYS = Object.keys(TETS),
  CELL = 20,
  COLS = 10,
  ROWS = 20;
var TS = null,
  tetInterval = null,
  tetCvs,
  tetCtx2,
  nextCvs,
  nextCtx2;

function stopTetris() {
  clearInterval(tetInterval);
  tetInterval = null;
  document.removeEventListener("keydown", tetKey);
}

function initTetris() {
  var root = document.getElementById("tetris-root");
  root.innerHTML = "";
  root.className = "game-shell";
  root.style.cssText = "padding-top:2px;";
  var stage = mk("div", "game-stage-split");
  var wrap = mk("div", "game-panel");
  wrap.style.cssText = "position:relative;overflow:hidden;";
  tetCvs = mk("canvas", "");
  tetCvs.width = COLS * CELL;
  tetCvs.height = ROWS * CELL;
  tetCtx2 = tetCvs.getContext("2d");
  wrap.appendChild(tetCvs);
  stage.appendChild(wrap);
  var side = mk("div", "game-side");
  function ib(lbl, id, val) {
    var b = mk("div", "tetris-info-box");
    b.innerHTML =
      '<div class="tib-label">' +
      lbl +
      '</div><div class="tib-val" id="' +
      id +
      '">' +
      val +
      "</div>";
    return b;
  }
  side.appendChild(ib("SCORE", "tet-score", "0"));
  side.appendChild(ib("LEVEL", "tet-level", "1"));
  side.appendChild(ib("LINES", "tet-lines", "0"));
  var nb = mk("div", "tetris-info-box");
  nb.innerHTML = '<div class="tib-label">NEXT</div>';
  nextCvs = mk("canvas", "");
  nextCvs.width = 4 * CELL;
  nextCvs.height = 4 * CELL;
  nextCtx2 = nextCvs.getContext("2d");
  nb.appendChild(nextCvs);
  side.appendChild(nb);
  var cl = mk("div", "tetris-info-box");
  cl.innerHTML =
    '<div class="tib-label" style="margin-bottom:8px">CONTROLS</div><div class="tci-row"><span class="tci-key">← →</span><span class="tci-act">Move</span></div><div class="tci-row"><span class="tci-key">↑</span><span class="tci-act">Rotate</span></div><div class="tci-row"><span class="tci-key">↓</span><span class="tci-act">Soft drop</span></div><div class="tci-row"><span class="tci-key">SPC</span><span class="tci-act">Hard drop</span></div><div class="tci-row"><span class="tci-key">P</span><span class="tci-act">Pause</span></div>';
  side.appendChild(cl);
  stage.appendChild(side);
  root.appendChild(stage);
  applyUiSkin(root);
  showTetOverlay(wrap, "TETRIS", "START GAME", function () {
    startTetris(wrap);
  });
}

function showTetOverlay(wrap, title, btnTxt, cb) {
  var old = wrap.querySelector(".tet-overlay");
  if (old) old.remove();
  var ov = mk("div", "tet-overlay tetris-start-overlay");
  ov.innerHTML = '<div class="tetris-overlay-title">' + title + "</div>";
  var b = mk("button", "tetris-overlay-btn");
  b.textContent = btnTxt;
  b.onclick = cb;
  ov.appendChild(b);
  wrap.appendChild(ov);
}

function startTetris(wrap) {
  var old = wrap.querySelector(".tet-overlay");
  if (old) old.remove();
  TS = {
    board: Array.from({ length: ROWS }, function () {
      return Array(COLS).fill(null);
    }),
    score: 0,
    level: 1,
    lines: 0,
    piece: null,
    next: null,
    paused: false,
    over: false,
    wrap: wrap,
    lastComment: 0,
  };
  TS.next = randTet();
  spawnTet();
  document.addEventListener("keydown", tetKey);
  clearInterval(tetInterval);
  tetInterval = setInterval(tetTick, 600);
  drawTet();
  drawNext();
  aiComment(
    "tetris_start",
    "Tetris game started. Player is beginning. Score: 0, Level: 1. First piece: " +
      TS.piece.key +
      ". Neru is watching as a spectator.",
  );
}

function randTet() {
  var k = TK_KEYS[Math.floor(Math.random() * TK_KEYS.length)];
  return {
    key: k,
    color: TETS[k].color,
    shape: TETS[k].shape.map(function (r) {
      return [].concat(r);
    }),
    x: 3,
    y: 0,
  };
}

function spawnTet() {
  TS.piece = {
    color: TS.next.color,
    shape: TS.next.shape.map(function (r) {
      return [].concat(r);
    }),
    x: 3,
    y: 0,
  };
  TS.next = randTet();
  if (!validTet(TS.piece, 0, 0)) {
    TS.over = true;
    clearInterval(tetInterval);
    document.removeEventListener("keydown", tetKey);
    addXP(Math.floor(TS.score / 10), "Tetris ended");
    player.streak = 0;
    aiComment(
      "tetris_gameover",
      "Tetris game over! Player stack hit the top. Final score: " +
        TS.score +
        ", Level: " +
        TS.level +
        ", Lines: " +
        TS.lines +
        ".",
    );
    setTimeout(function () {
      showTetOverlay(
        TS.wrap,
        "GAME OVER — " + TS.score,
        "PLAY AGAIN",
        function () {
          startTetris(TS.wrap);
        },
      );
    }, 300);
  }
  drawNext();
}

function validTet(piece, dx, dy, shp) {
  shp = shp || piece.shape;
  return shp.every(function (row, r) {
    return row.every(function (v, c) {
      if (!v) return true;
      var nx = piece.x + c + dx,
        ny = piece.y + r + dy;
      return nx >= 0 && nx < COLS && ny < ROWS && (ny < 0 || !TS.board[ny][nx]);
    });
  });
}
function rotateTet(shp) {
  var rows = shp.length,
    cols = shp[0].length,
    rot = Array.from({ length: cols }, function () {
      return Array(rows).fill(0);
    });
  for (var r = 0; r < rows; r++)
    for (var c = 0; c < cols; c++) rot[c][rows - 1 - r] = shp[r][c];
  return rot;
}

function lockTet() {
  var p = TS.piece;
  p.shape.forEach(function (row, r) {
    row.forEach(function (v, c) {
      if (v && p.y + r >= 0) TS.board[p.y + r][p.x + c] = p.color;
    });
  });
  var cleared = 0;
  for (var r = ROWS - 1; r >= 0; r--) {
    if (
      TS.board[r].every(function (c) {
        return c;
      })
    ) {
      TS.board.splice(r, 1);
      TS.board.unshift(Array(COLS).fill(null));
      cleared++;
      r++;
    }
  }
  if (cleared) {
    var pts = [0, 100, 300, 500, 800][cleared] * TS.level;
    TS.score += pts;
    TS.lines += cleared;
    TS.level = Math.floor(TS.lines / 10) + 1;
    clearInterval(tetInterval);
    tetInterval = setInterval(tetTick, Math.max(80, 600 - (TS.level - 1) * 50));
    var s = document.getElementById("tet-score");
    if (s) s.textContent = TS.score;
    var lv = document.getElementById("tet-level");
    if (lv) lv.textContent = TS.level;
    var ln = document.getElementById("tet-lines");
    if (ln) ln.textContent = TS.lines;
    if (cleared === 4) {
      showToast("🔥", "TETRIS! 4 Lines!");
      addXP(50, "Tetris!");
    }
    var now = Date.now();
    if (now - TS.lastComment > 7000) {
      TS.lastComment = now;
      aiComment(
        "tetris_lines_cleared",
        "Tetris: player cleared " +
          cleared +
          " line" +
          (cleared > 1 ? "s" : "") +
          " at once! Score: " +
          TS.score +
          ", Level: " +
          TS.level +
          ", Total lines: " +
          TS.lines +
          "." +
          (cleared === 4 ? " TETRIS — 4 lines!" : ""),
      );
    }
  }
  spawnTet();
}

function tetTick() {
  if (!TS || TS.over || TS.paused) return;
  if (validTet(TS.piece, 0, 1)) TS.piece.y++;
  else lockTet();
  drawTet();
}

function tetKey(e) {
  if (currentView !== "tetris" || !TS || TS.over) return;
  if (e.key === "p" || e.key === "P") {
    TS.paused = !TS.paused;
    drawTet();
    return;
  }
  if (TS.paused) return;
  var p = TS.piece;
  if (e.key === "ArrowLeft") {
    if (validTet(p, -1, 0)) {
      p.x--;
      drawTet();
    }
  } else if (e.key === "ArrowRight") {
    if (validTet(p, 1, 0)) {
      p.x++;
      drawTet();
    }
  } else if (e.key === "ArrowDown") {
    if (validTet(p, 0, 1)) {
      p.y++;
      TS.score++;
      drawTet();
    } else lockTet();
  } else if (e.key === "ArrowUp") {
    var rot = rotateTet(p.shape);
    if (validTet(p, 0, 0, rot)) {
      p.shape = rot;
      drawTet();
    } else if (validTet(p, 1, 0, rot)) {
      p.shape = rot;
      p.x++;
      drawTet();
    } else if (validTet(p, -1, 0, rot)) {
      p.shape = rot;
      p.x--;
      drawTet();
    }
  } else if (e.key === " ") {
    while (validTet(p, 0, 1)) {
      p.y++;
      TS.score += 2;
    }
    lockTet();
    drawTet();
  }
  e.preventDefault();
}

function drawTetCell(ctx, col, row, color) {
  ctx.fillStyle = color;
  ctx.fillRect(col * CELL + 1, row * CELL + 1, CELL - 2, CELL - 2);
  ctx.fillStyle = "rgba(255,255,255,0.22)";
  ctx.fillRect(col * CELL + 1, row * CELL + 1, CELL - 2, 3);
  ctx.fillStyle = "rgba(0,0,0,0.22)";
  ctx.fillRect(col * CELL + 1, (row + 1) * CELL - 4, CELL - 2, 3);
}

function drawTet() {
  if (!tetCtx2) return;
  var ctx = tetCtx2;
  ctx.fillStyle = "#080604";
  ctx.fillRect(0, 0, COLS * CELL, ROWS * CELL);
  ctx.strokeStyle = "rgba(107,79,16,0.12)";
  ctx.lineWidth = 0.5;
  for (var r = 0; r <= ROWS; r++) {
    ctx.beginPath();
    ctx.moveTo(0, r * CELL);
    ctx.lineTo(COLS * CELL, r * CELL);
    ctx.stroke();
  }
  for (var c = 0; c <= COLS; c++) {
    ctx.beginPath();
    ctx.moveTo(c * CELL, 0);
    ctx.lineTo(c * CELL, ROWS * CELL);
    ctx.stroke();
  }
  TS.board.forEach(function (row, r) {
    row.forEach(function (col, c) {
      if (col) drawTetCell(ctx, c, r, col);
    });
  });
  if (TS.piece && !TS.over) {
    var p = TS.piece,
      gy = p.y;
    while (validTet(p, 0, gy - p.y + 1)) gy++;
    p.shape.forEach(function (row, r) {
      row.forEach(function (v, c) {
        if (v && gy + r !== p.y + r) {
          ctx.fillStyle = "rgba(255,255,255,0.05)";
          ctx.fillRect(
            (p.x + c) * CELL + 1,
            (gy + r) * CELL + 1,
            CELL - 2,
            CELL - 2,
          );
        }
      });
    });
    p.shape.forEach(function (row, r) {
      row.forEach(function (v, c) {
        if (v) drawTetCell(ctx, p.x + c, p.y + r, p.color);
      });
    });
  }
  if (TS.paused) {
    ctx.fillStyle = "rgba(8,6,4,0.72)";
    ctx.fillRect(0, 0, COLS * CELL, ROWS * CELL);
    ctx.fillStyle = "#c9a227";
    ctx.font = "bold 20px Cinzel,serif";
    ctx.textAlign = "center";
    ctx.fillText("PAUSED — Press P", (COLS * CELL) / 2, (ROWS * CELL) / 2);
    ctx.textAlign = "left";
  }
}

function drawNext() {
  if (!nextCtx2 || !TS) return;
  var ctx = nextCtx2;
  ctx.fillStyle = "#0f0c05";
  ctx.fillRect(0, 0, 4 * CELL, 4 * CELL);
  var n = TS.next,
    ox = Math.floor((4 - n.shape[0].length) / 2),
    oy = Math.floor((4 - n.shape.length) / 2);
  n.shape.forEach(function (row, r) {
    row.forEach(function (v, c) {
      if (v) drawTetCell(ctx, ox + c, oy + r, n.color);
    });
  });
}

// ═══════════════════════════════════════════════════
//  REACTION TEST
// ═══════════════════════════════════════════════════
var RS = null;
function stopReaction() {
  if (RS && RS.timer) clearTimeout(RS.timer);
  RS = null;
}

function initReaction() {
  RS = { phase: "idle", startTime: 0, best: null, history: [], timer: null };
  buildReactionUI();
  aiComment(
    "reaction_start",
    "Reaction test started. Player needs to click when the circle turns green. Testing their reflexes!",
  );
}

function buildReactionUI() {
  var root = document.getElementById("reaction-root");
  root.innerHTML = "";
  root.className = "game-shell-compact";
  root.style.cssText = "padding-top:2px;";
  var arena = mk("div", "reaction-arena");
  var btn = mk("button", "reaction-btn idle");
  btn.id = "r-btn";
  btn.innerHTML = "<span>TAP TO START</span>";
  btn.onclick = handleReaction;
  arena.appendChild(btn);
  root.appendChild(arena);
  var stats = mk("div", "reaction-stats");
  var avg = RS.history.length
    ? Math.round(
        RS.history.reduce(function (a, b) {
          return a + b;
        }, 0) / RS.history.length,
      ) + "ms"
    : "—";
  stats.innerHTML =
    '<div class="r-stat"><div class="r-stat-val" id="r-best">' +
    (RS.best ? RS.best + "ms" : "—") +
    '</div><div class="r-stat-lbl">BEST</div></div><div class="r-stat"><div class="r-stat-val" id="r-last">—</div><div class="r-stat-lbl">LAST</div></div><div class="r-stat"><div class="r-stat-val" id="r-avg">' +
    avg +
    '</div><div class="r-stat-lbl">AVG</div></div>';
  root.appendChild(stats);
  if (RS.history.length) {
    var hist = mk("div", "reaction-history");
    RS.history.slice(-8).forEach(function (ms) {
      var chip = mk("div", "r-hist-chip" + (ms === RS.best ? " best" : ""));
      chip.textContent = ms + "ms";
      hist.appendChild(chip);
    });
    root.appendChild(hist);
  }
  applyUiSkin(root);
}

function handleReaction() {
  var btn = document.getElementById("r-btn");
  if (!btn || !RS) return;
  if (RS.phase === "idle") {
    RS.phase = "waiting";
    btn.className = "reaction-btn wait";
    btn.innerHTML =
      '<span>WAIT...</span><span class="reaction-sub">Don\'t click yet!</span>';
    scheduleGo();
  } else if (RS.phase === "waiting") {
    clearTimeout(RS.timer);
    RS.phase = "idle";
    btn.className = "reaction-btn wait";
    btn.innerHTML =
      '<span>TOO EARLY! 😂</span><span class="reaction-sub">Wait for GREEN</span>';
    aiComment(
      "reaction_early",
      "Player clicked too early in reaction test! They need to wait for green.",
    );
    setTimeout(function () {
      btn.className = "reaction-btn idle";
      btn.innerHTML = "<span>TAP TO START</span>";
      RS.phase = "idle";
    }, 1500);
  } else if (RS.phase === "go") {
    var ms = Math.round(performance.now() - RS.startTime);
    RS.history.push(ms);
    var isNew = !RS.best || ms < RS.best;
    if (isNew) RS.best = ms;
    RS.phase = "idle";
    var rating =
      ms < 180
        ? "LEGENDARY!"
        : ms < 250
          ? "BLAZING!"
          : ms < 350
            ? "SOLID"
            : ms < 500
              ? "DECENT"
              : "SLOW";
    btn.className = "reaction-btn idle";
    btn.innerHTML =
      "<span>" +
      ms +
      'ms</span><span class="reaction-sub">' +
      rating +
      (isNew ? " NEW BEST!" : "") +
      "</span>";
    var bl = document.getElementById("r-best");
    if (bl) bl.textContent = RS.best + "ms";
    var ll = document.getElementById("r-last");
    if (ll) ll.textContent = ms + "ms";
    var al = document.getElementById("r-avg");
    if (al)
      al.textContent =
        Math.round(
          RS.history.reduce(function (a, b) {
            return a + b;
          }, 0) / RS.history.length,
        ) + "ms";
    if (isNew) {
      player.wins++;
      player.streak++;
      addXP(25, "New reaction record!");
    } else addXP(8, "Reaction attempt");
    var avg2 = Math.round(
      RS.history.reduce(function (a, b) {
        return a + b;
      }, 0) / RS.history.length,
    );
    aiComment(
      "reaction_result",
      "Reaction test result: " +
        ms +
        "ms (" +
        rating +
        "). " +
        (isNew ? "NEW PERSONAL BEST!" : "") +
        " Previous best: " +
        (RS.best || ms) +
        "ms. Average across " +
        RS.history.length +
        " attempts: " +
        avg2 +
        "ms.",
    );
    updateHUD();
    setTimeout(function () {
      buildReactionUI();
    }, 2200);
  }
}

function scheduleGo() {
  var fake = Math.random() < 0.28,
    delay = 1300 + Math.random() * 3200;
  RS.timer = setTimeout(function () {
    var btn = document.getElementById("r-btn");
    if (!btn || RS.phase !== "waiting") return;
    if (fake) {
      RS.phase = "idle";
      btn.className = "reaction-btn wait";
      btn.innerHTML =
        '<span>PSYCHE! 😈</span><span class="reaction-sub">Click to try again</span>';
      setTimeout(function () {
        btn.className = "reaction-btn idle";
        btn.innerHTML = "<span>TAP TO START</span>";
      }, 1400);
    } else {
      RS.phase = "go";
      RS.startTime = performance.now();
      btn.className = "reaction-btn go";
      btn.innerHTML =
        '<span>GO!</span><span class="reaction-sub">Click NOW!</span>';
    }
  }, delay);
}

// ═══════════════════════════════════════════════════
//  CHESS ENGINE
// ═══════════════════════════════════════════════════
var CG = {};
function stopChess() {
  CG = {};
}
var PIECE_VALUES = { p: 100, n: 320, b: 330, r: 500, q: 900, k: 20000 };
var PST = {
  p: [
    0, 0, 0, 0, 0, 0, 0, 0, 50, 50, 50, 50, 50, 50, 50, 50, 10, 10, 20, 30, 30,
    20, 10, 10, 5, 5, 10, 25, 25, 10, 5, 5, 0, 0, 0, 20, 20, 0, 0, 0, 5, -5,
    -10, 0, 0, -10, -5, 5, 5, 10, 10, -20, -20, 10, 10, 5, 0, 0, 0, 0, 0, 0, 0,
    0,
  ],
  n: [
    -50, -40, -30, -30, -30, -30, -40, -50, -40, -20, 0, 0, 0, 0, -20, -40, -30,
    0, 10, 15, 15, 10, 0, -30, -30, 5, 15, 20, 20, 15, 5, -30, -30, 0, 15, 20,
    20, 15, 0, -30, -30, 5, 10, 15, 15, 10, 5, -30, -40, -20, 0, 5, 5, 0, -20,
    -40, -50, -40, -30, -30, -30, -30, -40, -50,
  ],
  b: [
    -20, -10, -10, -10, -10, -10, -10, -20, -10, 0, 0, 0, 0, 0, 0, -10, -10, 0,
    5, 10, 10, 5, 0, -10, -10, 5, 5, 10, 10, 5, 5, -10, -10, 0, 10, 10, 10, 10,
    0, -10, -10, 10, 10, 10, 10, 10, 10, -10, -10, 5, 0, 0, 0, 0, 5, -10, -20,
    -10, -10, -10, -10, -10, -10, -20,
  ],
  r: [
    0, 0, 0, 0, 0, 0, 0, 0, 5, 10, 10, 10, 10, 10, 10, 5, -5, 0, 0, 0, 0, 0, 0,
    -5, -5, 0, 0, 0, 0, 0, 0, -5, -5, 0, 0, 0, 0, 0, 0, -5, -5, 0, 0, 0, 0, 0,
    0, -5, -5, 0, 0, 0, 0, 0, 0, -5, 0, 0, 0, 5, 5, 0, 0, 0,
  ],
  q: [
    -20, -10, -10, -5, -5, -10, -10, -20, -10, 0, 0, 0, 0, 0, 0, -10, -10, 0, 5,
    5, 5, 5, 0, -10, -5, 0, 5, 5, 5, 5, 0, -5, 0, 0, 5, 5, 5, 5, 0, -5, -10, 5,
    5, 5, 5, 5, 0, -10, -10, 0, 5, 0, 0, 0, 0, -10, -20, -10, -10, -5, -5, -10,
    -10, -20,
  ],
  k: [
    -30, -40, -40, -50, -50, -40, -40, -30, -30, -40, -40, -50, -50, -40, -40,
    -30, -30, -40, -40, -50, -50, -40, -40, -30, -30, -40, -40, -50, -50, -40,
    -40, -30, -20, -30, -30, -40, -40, -30, -30, -20, -10, -20, -20, -20, -20,
    -20, -20, -10, 20, 20, 0, 0, 0, 0, 20, 20, 20, 30, 10, 0, 0, 10, 30, 20,
  ],
};

function initChessBoard() {
  return [
    ["r", "n", "b", "q", "k", "b", "n", "r"],
    ["p", "p", "p", "p", "p", "p", "p", "p"],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    ["P", "P", "P", "P", "P", "P", "P", "P"],
    ["R", "N", "B", "Q", "K", "B", "N", "R"],
  ];
}
function copyBoard(b) {
  return b.map(function (r) {
    return r.slice();
  });
}
function isWhite(p) {
  return p && p === p.toUpperCase();
}
function isBlack(p) {
  return p && p === p.toLowerCase();
}
function sameColor(a, b) {
  return (isWhite(a) && isWhite(b)) || (isBlack(a) && isBlack(b));
}

function pieceMoves(board, r, c, enPassant, castling) {
  var p = board[r][c];
  if (!p) return [];
  var moves = [],
    type = p.toLowerCase(),
    white = isWhite(p);
  function addMove(tr, tc, extra) {
    if (tr < 0 || tr > 7 || tc < 0 || tc > 7) return;
    if (sameColor(p, board[tr][tc])) return;
    moves.push({ from: [r, c], to: [tr, tc], extra: extra || null });
  }
  function slide(dr, dc) {
    var tr = r + dr,
      tc = c + dc;
    while (tr >= 0 && tr <= 7 && tc >= 0 && tc <= 7) {
      if (board[tr][tc]) {
        if (!sameColor(p, board[tr][tc]))
          moves.push({ from: [r, c], to: [tr, tc], extra: null });
        break;
      }
      moves.push({ from: [r, c], to: [tr, tc], extra: null });
      tr += dr;
      tc += dc;
    }
  }
  if (type === "p") {
    var dir = white ? -1 : 1,
      startRow = white ? 6 : 1,
      promRow = white ? 0 : 7;
    if (!board[r + dir] || !board[r + dir][c]) {
      var isPromo = r + dir === promRow;
      if (isPromo) {
        ["Q", "R", "B", "N"].forEach(function (pr) {
          moves.push({
            from: [r, c],
            to: [r + dir, c],
            extra: { promo: white ? pr : pr.toLowerCase() },
          });
        });
      } else {
        moves.push({ from: [r, c], to: [r + dir, c], extra: null });
        if (r === startRow && !board[r + 2 * dir][c])
          moves.push({
            from: [r, c],
            to: [r + 2 * dir, c],
            extra: { doublePush: true },
          });
      }
    }
    [-1, 1].forEach(function (dc) {
      var tc = c + dc,
        tr = r + dir;
      if (tc < 0 || tc > 7) return;
      var isPromo2 = tr === promRow;
      if (board[tr][tc] && !sameColor(p, board[tr][tc])) {
        if (isPromo2) {
          ["Q", "R", "B", "N"].forEach(function (pr) {
            moves.push({
              from: [r, c],
              to: [tr, tc],
              extra: { promo: white ? pr : pr.toLowerCase() },
            });
          });
        } else moves.push({ from: [r, c], to: [tr, tc], extra: null });
      }
      if (enPassant && tr === enPassant[0] && tc === enPassant[1])
        moves.push({ from: [r, c], to: [tr, tc], extra: { enPassant: true } });
    });
  }
  if (type === "n") {
    [
      [-2, -1],
      [-2, 1],
      [-1, -2],
      [-1, 2],
      [1, -2],
      [1, 2],
      [2, -1],
      [2, 1],
    ].forEach(function (d) {
      addMove(r + d[0], c + d[1]);
    });
  }
  if (type === "b") {
    [
      [-1, -1],
      [-1, 1],
      [1, -1],
      [1, 1],
    ].forEach(function (d) {
      slide(d[0], d[1]);
    });
  }
  if (type === "r") {
    [
      [-1, 0],
      [1, 0],
      [0, -1],
      [0, 1],
    ].forEach(function (d) {
      slide(d[0], d[1]);
    });
  }
  if (type === "q") {
    [
      [-1, -1],
      [-1, 1],
      [1, -1],
      [1, 1],
      [-1, 0],
      [1, 0],
      [0, -1],
      [0, 1],
    ].forEach(function (d) {
      slide(d[0], d[1]);
    });
  }
  if (type === "k") {
    [
      [-1, -1],
      [-1, 0],
      [-1, 1],
      [0, -1],
      [0, 1],
      [1, -1],
      [1, 0],
      [1, 1],
    ].forEach(function (d) {
      addMove(r + d[0], c + d[1]);
    });
    if (castling) {
      if (white) {
        if (
          castling.wK &&
          !board[7][5] &&
          !board[7][6] &&
          board[7][7] === "R" &&
          !squareAttacked(board, 7, 4, false) &&
          !squareAttacked(board, 7, 5, false) &&
          !squareAttacked(board, 7, 6, false)
        )
          moves.push({ from: [7, 4], to: [7, 6], extra: { castleK: true } });
        if (
          castling.wQ &&
          !board[7][3] &&
          !board[7][2] &&
          !board[7][1] &&
          board[7][0] === "R" &&
          !squareAttacked(board, 7, 4, false) &&
          !squareAttacked(board, 7, 3, false) &&
          !squareAttacked(board, 7, 2, false)
        )
          moves.push({ from: [7, 4], to: [7, 2], extra: { castleQ: true } });
      } else {
        if (
          castling.bK &&
          !board[0][5] &&
          !board[0][6] &&
          board[0][7] === "r" &&
          !squareAttacked(board, 0, 4, true) &&
          !squareAttacked(board, 0, 5, true) &&
          !squareAttacked(board, 0, 6, true)
        )
          moves.push({ from: [0, 4], to: [0, 6], extra: { castleK: true } });
        if (
          castling.bQ &&
          !board[0][3] &&
          !board[0][2] &&
          !board[0][1] &&
          board[0][0] === "r" &&
          !squareAttacked(board, 0, 4, true) &&
          !squareAttacked(board, 0, 3, true) &&
          !squareAttacked(board, 0, 2, true)
        )
          moves.push({ from: [0, 2], to: [0, 2], extra: { castleQ: true } });
      }
    }
  }
  return moves;
}

function squareAttacked(board, r, c, byWhite) {
  for (var rr = 0; rr < 8; rr++)
    for (var cc = 0; cc < 8; cc++) {
      var p = board[rr][cc];
      if (!p) continue;
      if (byWhite ? !isWhite(p) : !isBlack(p)) continue;
      if (
        pieceMoves(board, rr, cc, null, null).some(function (m) {
          return m.to[0] === r && m.to[1] === c;
        })
      )
        return true;
    }
  return false;
}

function applyMove(board, move) {
  var nb = copyBoard(board),
    piece = nb[move.from[0]][move.from[1]];
  nb[move.to[0]][move.to[1]] = piece;
  nb[move.from[0]][move.from[1]] = null;
  if (move.extra) {
    if (move.extra.promo) nb[move.to[0]][move.to[1]] = move.extra.promo;
    if (move.extra.enPassant) {
      var epDir = isWhite(piece) ? 1 : -1;
      nb[move.to[0] + epDir][move.to[1]] = null;
    }
    if (move.extra.castleK) {
      var cr = move.from[0];
      nb[cr][5] = nb[cr][7];
      nb[cr][7] = null;
    }
    if (move.extra.castleQ) {
      var cr2 = move.from[0];
      nb[cr2][3] = nb[cr2][0];
      nb[cr2][0] = null;
    }
  }
  return nb;
}

function findKing(board, white) {
  var king = white ? "K" : "k";
  for (var r = 0; r < 8; r++)
    for (var c = 0; c < 8; c++) if (board[r][c] === king) return [r, c];
  return null;
}
function inCheck(board, white) {
  var kpos = findKing(board, white);
  if (!kpos) return true;
  return squareAttacked(board, kpos[0], kpos[1], !white);
}

function getLegalMoves(board, white, enPassant, castling) {
  var moves = [];
  for (var r = 0; r < 8; r++)
    for (var c = 0; c < 8; c++) {
      var p = board[r][c];
      if (!p) continue;
      if (white ? !isWhite(p) : !isBlack(p)) continue;
      pieceMoves(board, r, c, enPassant, castling).forEach(function (m) {
        var nb = applyMove(board, m);
        if (!inCheck(nb, white)) moves.push(m);
      });
    }
  return moves;
}

function evaluateBoard(board) {
  var score = 0;
  for (var r = 0; r < 8; r++)
    for (var c = 0; c < 8; c++) {
      var p = board[r][c];
      if (!p) continue;
      var type = p.toLowerCase(),
        val = PIECE_VALUES[type] || 0;
      var pstIdx = isWhite(p) ? (7 - r) * 8 + c : r * 8 + c;
      var pstVal = PST[type] ? PST[type][pstIdx] : 0;
      score += isWhite(p) ? -(val + pstVal) : val + pstVal;
    }
  return score;
}

function minimax(board, depth, alpha, beta, maximizing, enPassant, castling) {
  var white = !maximizing;
  var moves = getLegalMoves(board, white, enPassant, castling);
  if (depth === 0 || !moves.length) {
    if (!moves.length) {
      if (inCheck(board, white))
        return maximizing ? -100000 + depth : 100000 - depth;
      return 0;
    }
    return evaluateBoard(board);
  }
  if (maximizing) {
    var best = -Infinity;
    for (var i = 0; i < moves.length; i++) {
      var nb = applyMove(board, moves[i]);
      var ep =
        moves[i].extra && moves[i].extra.doublePush
          ? [
              moves[i].to[0] +
                (isWhite(board[moves[i].from[0]][moves[i].from[1]]) ? 1 : -1),
              moves[i].to[1],
            ]
          : null;
      var v = minimax(nb, depth - 1, alpha, beta, false, ep, castling);
      if (v > best) best = v;
      if (v > alpha) alpha = v;
      if (beta <= alpha) break;
    }
    return best;
  } else {
    var best2 = Infinity;
    for (var j = 0; j < moves.length; j++) {
      var nb2 = applyMove(board, moves[j]);
      var ep2 =
        moves[j].extra && moves[j].extra.doublePush
          ? [
              moves[j].to[0] +
                (isWhite(board[moves[j].from[0]][moves[j].from[1]]) ? 1 : -1),
              moves[j].to[1],
            ]
          : null;
      var v2 = minimax(nb2, depth - 1, alpha, beta, true, ep2, castling);
      if (v2 < best2) best2 = v2;
      if (v2 < beta) beta = v2;
      if (beta <= alpha) break;
    }
    return best2;
  }
}

var DIFFICULTY_DEPTH = { novice: 1, warrior: 3, god: 5 },
  DIFFICULTY_MISTAKES = { novice: 0.45, warrior: 0.15, god: 0 };

function getAIMove(board, enPassant, castling, difficulty) {
  var depth = DIFFICULTY_DEPTH[difficulty] || 2,
    mistakeRate = DIFFICULTY_MISTAKES[difficulty] || 0;
  var moves = getLegalMoves(board, false, enPassant, castling);
  if (!moves.length) return null;
  if (Math.random() < mistakeRate)
    return moves[Math.floor(Math.random() * moves.length)];
  var best = null,
    bestScore = -Infinity;
  moves.forEach(function (m) {
    var nb = applyMove(board, m);
    var ep = m.extra && m.extra.doublePush ? [m.to[0] + 1, m.to[1]] : null;
    var score = minimax(
      nb,
      depth - 1,
      -Infinity,
      Infinity,
      false,
      ep,
      castling,
    );
    if (score > bestScore) {
      bestScore = score;
      best = m;
    }
  });
  return best;
}

var PIECE_UNICODE = {
  K: "♔",
  Q: "♕",
  R: "♖",
  B: "♗",
  N: "♘",
  P: "♙",
  k: "♚",
  q: "♛",
  r: "♜",
  b: "♝",
  n: "♞",
  p: "♟",
};
function squareName(r, c) {
  return String.fromCharCode(97 + c) + (8 - r);
}
function moveName(move, board) {
  var piece = board[move.from[0]][move.from[1]],
    captured = board[move.to[0]][move.to[1]],
    name =
      (piece && piece.toLowerCase() !== "p" ? piece.toUpperCase() : "") +
      squareName(move.from[0], move.from[1]) +
      (captured ? "x" : "-") +
      squareName(move.to[0], move.to[1]);
  if (move.extra && move.extra.promo)
    name += "=" + move.extra.promo.toUpperCase();
  if (move.extra && move.extra.castleK) name = "O-O";
  if (move.extra && move.extra.castleQ) name = "O-O-O";
  return name;
}

function initChess() {
  CG = {
    board: initChessBoard(),
    turn: "white",
    selected: null,
    legalMoves: [],
    enPassant: null,
    castling: { wK: true, wQ: true, bK: true, bQ: true },
    difficulty: "warrior",
    over: false,
    aiThinking: false,
    moveHistory: [],
    capturedByAI: [],
    capturedByPlayer: [],
    moveCount: 0,
    lastAIComment: 0,
    lastMove: null,
    result: null,
  };
  buildChessUI();
}

function buildChessUI() {
  var root = document.getElementById("chess-root");
  if (!root) return;
  root.innerHTML = "";
  root.className = "game-shell";
  root.style.cssText = "padding:0;";

  // Difficulty row
  var diffRow = mk("div", "chess-diff-row");
  var dlbl = mk("span", "");
  dlbl.style.cssText =
    "font-family:Orbitron,sans-serif;font-size:9px;letter-spacing:2px;color:#4a5568;margin-right:6px;";
  dlbl.textContent = "DIFFICULTY:";
  diffRow.appendChild(dlbl);
  ["novice", "warrior", "god"].forEach(function (d) {
    var b = mk(
      "button",
      "diff-btn " + d + (CG.difficulty === d ? " active" : ""),
    );
    b.textContent =
      d === "novice" ? "NOVICE" : d === "warrior" ? "WARRIOR" : "GOD MODE";
    b.style.cssText = "padding:5px 12px;font-size:10px;";
    (function (dd) {
      b.onclick = function () {
        CG.difficulty = dd;
        buildChessUI();
      };
    })(d);
    diffRow.appendChild(b);
  });
  root.appendChild(diffRow);

  // Status bar
  var statusBar = mk("div", "chess-status-bar");
  statusBar.id = "chess-status";
  statusBar.textContent = CG.over
    ? CG.result || "GAME OVER"
    : CG.aiThinking
      ? "⚙ NERU IS THINKING..."
      : CG.turn === "white"
        ? "YOUR TURN — SELECT A PIECE"
        : "";
  root.appendChild(statusBar);

  // Main layout
  var layout = mk("div", "chess-layout");

  // ── Board column ──────────────────────────────────
  var boardCol = mk("div", "chess-board-col");

  // AI captured pieces (top)
  var aiLabel = mk("div", "chess-player-label");
  aiLabel.textContent = "NERU A.I.";
  boardCol.appendChild(aiLabel);
  var aiCap = mk("div", "chess-captured-strip ai-strip");
  aiCap.textContent = CG.capturedByAI.length
    ? CG.capturedByAI
        .map(function (p) {
          return PIECE_UNICODE[p];
        })
        .join("")
    : "—";
  boardCol.appendChild(aiCap);

  // Board
  var boardWrap = mk("div", "chess-board-shell");
  boardWrap.style.cssText = "position:relative;";
  var boardEl = mk("div", "chess-board");
  for (var r = 0; r < 8; r++)
    for (var c = 0; c < 8; c++) {
      (function (rr, cc) {
        var sq = mk("div", "chess-sq");
        var isLight = (rr + cc) % 2 === 0;
        sq.classList.add(isLight ? "chess-square-light" : "chess-square-dark");
        var baseBg = isLight ? "#c8a07a" : "#7a4f2e"; // darker than chess.com — our scheme
        sq.style.cssText =
          "width:var(--chess-cell);height:var(--chess-cell);display:flex;align-items:center;justify-content:center;position:relative;cursor:pointer;font-size:var(--chess-piece-size);line-height:1;user-select:none;margin:0;transition:background 0.1s;background:" +
          baseBg +
          ";";
        if (CG.selected && CG.selected[0] === rr && CG.selected[1] === cc)
          sq.style.background = "rgba(20,85,30,0.6)";
        var isTarget = CG.legalMoves.some(function (m) {
          return m.to[0] === rr && m.to[1] === cc;
        });
        if (isTarget) {
          var dot = mk("div", "");
          var isCapture = !!CG.board[rr][cc];
          dot.style.cssText = isCapture
            ? "position:absolute;inset:0;border:4px solid rgba(20,85,30,0.7);border-radius:1px;pointer-events:none;z-index:3;"
            : "position:absolute;width:32%;height:32%;border-radius:50%;background:rgba(20,85,30,0.5);pointer-events:none;z-index:3;top:50%;left:50%;transform:translate(-50%,-50%);";
          sq.appendChild(dot);
        }
        if (
          CG.lastMove &&
          ((CG.lastMove.from[0] === rr && CG.lastMove.from[1] === cc) ||
            (CG.lastMove.to[0] === rr && CG.lastMove.to[1] === cc))
        )
          sq.style.background = isLight
            ? "rgba(185,190,80,0.72)"
            : "rgba(145,152,48,0.72)";
        var piece = CG.board[rr][cc];
        if (piece) {
          var pe = mk(
            "span",
            isWhite(piece) ? "chess-piece-white" : "chess-piece-black",
          );
          pe.textContent = PIECE_UNICODE[piece] || piece;
          pe.style.cssText =
            "position:relative;z-index:2;text-shadow:" +
            (isWhite(piece)
              ? "0 1px 3px rgba(0,0,0,0.5)"
              : "0 1px 3px rgba(0,0,0,0.8)") +
            ";";
          sq.appendChild(pe);
        }
        // Rank labels (left edge)
        if (cc === 0) {
          var rl = mk("span", "");
          rl.textContent = 8 - rr;
          rl.style.cssText =
            "position:absolute;top:2px;left:3px;font-size:9px;font-family:Cinzel,serif;color:" +
            (isLight ? "#7a4f2e" : "#c8a07a") +
            ";line-height:1;pointer-events:none;z-index:4;";
          sq.appendChild(rl);
        }
        // File labels (bottom edge)
        if (rr === 7) {
          var fl = mk("span", "");
          fl.textContent = String.fromCharCode(97 + cc);
          fl.style.cssText =
            "position:absolute;bottom:2px;right:3px;font-size:9px;font-family:Cinzel,serif;color:" +
            (isLight ? "#7a4f2e" : "#c8a07a") +
            ";line-height:1;pointer-events:none;z-index:4;";
          sq.appendChild(fl);
        }
        sq.addEventListener("mouseenter", function () {
          if (CG.selected && CG.selected[0] === rr && CG.selected[1] === cc)
            return;
          if (
            !isTarget &&
            !(
              CG.lastMove &&
              ((CG.lastMove.from[0] === rr && CG.lastMove.from[1] === cc) ||
                (CG.lastMove.to[0] === rr && CG.lastMove.to[1] === cc))
            )
          )
            sq.style.background = isLight
              ? "rgba(200,160,122,0.85)"
              : "rgba(122,79,46,0.85)";
        });
        sq.addEventListener("mouseleave", function () {
          if (CG.selected && CG.selected[0] === rr && CG.selected[1] === cc) {
            sq.style.background = "rgba(20,85,30,0.6)";
            return;
          }
          if (isTarget) return;
          if (
            CG.lastMove &&
            ((CG.lastMove.from[0] === rr && CG.lastMove.from[1] === cc) ||
              (CG.lastMove.to[0] === rr && CG.lastMove.to[1] === cc))
          ) {
            sq.style.background = isLight
              ? "rgba(185,190,80,0.72)"
              : "rgba(145,152,48,0.72)";
            return;
          }
          sq.style.background = baseBg;
        });
        sq.onclick = function () {
          handleChessClick(rr, cc);
        };
        boardEl.appendChild(sq);
      })(r, c);
    }
  boardWrap.appendChild(boardEl);
  boardCol.appendChild(boardWrap);

  // Player captured pieces (bottom)
  var playerLabel = mk("div", "chess-player-label");
  playerLabel.style.marginTop = "4px";
  playerLabel.textContent = "YOU";
  boardCol.appendChild(playerLabel);
  var playerCap = mk("div", "chess-captured-strip");
  playerCap.textContent = CG.capturedByPlayer.length
    ? CG.capturedByPlayer
        .map(function (p) {
          return PIECE_UNICODE[p];
        })
        .join("")
    : "—";
  boardCol.appendChild(playerCap);

  layout.appendChild(boardCol);

  // ── Side panel ────────────────────────────────────
  var side = mk("div", "chess-side-panel");

  // Opponent card
  var diffColor =
    CG.difficulty === "novice"
      ? "#4ade80"
      : CG.difficulty === "warrior"
        ? "#f6c453"
        : "#f87171";
  var oppCard = mk("div", "chess-info-card");
  oppCard.innerHTML =
    '<div class="chess-info-card-title">OPPONENT</div><div style="font-family:Cinzel,serif;font-size:15px;color:#f6c453;margin-bottom:6px;">NERU A.I.</div><div style="font-family:Orbitron,sans-serif;font-size:10px;color:' +
    diffColor +
    ';">● ' +
    (CG.difficulty === "novice"
      ? "NOVICE"
      : CG.difficulty === "warrior"
        ? "WARRIOR"
        : "GOD MODE") +
    "</div>";
  side.appendChild(oppCard);

  // Move history card
  if (CG.moveHistory.length) {
    var mhCard = mk("div", "chess-info-card");
    mhCard.style.flex = "1";
    mhCard.style.overflow = "hidden";
    mhCard.style.display = "flex";
    mhCard.style.flexDirection = "column";
    mhCard.innerHTML = '<div class="chess-info-card-title">MOVE HISTORY</div>';
    var mhList = mk("div", "chess-movelist");
    var history = CG.moveHistory;
    for (var i = 0; i < history.length; i += 2) {
      var mrow = mk(
        "div",
        "chess-movelist-row" + (i >= history.length - 2 ? " latest" : ""),
      );
      var num = mk("span", "move-num");
      num.textContent = Math.floor(i / 2) + 1 + ".";
      var wm = mk("span", "move-w");
      wm.textContent = history[i] || "";
      var bm = mk("span", "move-b");
      bm.textContent = history[i + 1] || "";
      mrow.appendChild(num);
      mrow.appendChild(wm);
      mrow.appendChild(bm);
      mhList.appendChild(mrow);
    }
    // scroll to bottom
    setTimeout(function () {
      mhList.scrollTop = mhList.scrollHeight;
    }, 0);
    mhCard.appendChild(mhList);
    side.appendChild(mhCard);
  }

  // New game button
  if (CG.over || CG.moveCount > 0) {
    var ngBtn = mk("button", "wordle-btn primary");
    ngBtn.textContent = "NEW GAME";
    ngBtn.style.cssText = "width:100%;margin-top:auto;padding:10px;";
    ngBtn.onclick = function () {
      CG.board = initChessBoard();
      CG.turn = "white";
      CG.selected = null;
      CG.legalMoves = [];
      CG.enPassant = null;
      CG.castling = { wK: true, wQ: true, bK: true, bQ: true };
      CG.over = false;
      CG.aiThinking = false;
      CG.moveHistory = [];
      CG.capturedByAI = [];
      CG.capturedByPlayer = [];
      CG.moveCount = 0;
      CG.lastMove = null;
      CG.result = null;
      buildChessUI();
      aiComment(
        "chess_new_game",
        "New chess game. Player is White, Neru AI is Black. Difficulty: " +
          CG.difficulty,
      );
    };
    side.appendChild(ngBtn);
  }

  layout.appendChild(side);
  root.appendChild(layout);
  applyUiSkin(root);
  if (CG.moveCount === 0 && !CG.over)
    setTimeout(function () {
      aiComment(
        "chess_start",
        "Chess starting. Player is White, Neru AI is Black. Difficulty: " +
          CG.difficulty +
          ".",
      );
    }, 600);
}

function handleChessClick(r, c) {
  if (CG.over || CG.aiThinking || CG.turn !== "white") return;
  var piece = CG.board[r][c];
  if (CG.selected) {
    var matchMove = CG.legalMoves.find(function (m) {
      return m.to[0] === r && m.to[1] === c;
    });
    if (matchMove) {
      executePlayerMove(matchMove);
      return;
    }
    if (piece && isWhite(piece)) {
      CG.selected = [r, c];
      CG.legalMoves = getLegalMoves(
        CG.board,
        true,
        CG.enPassant,
        CG.castling,
      ).filter(function (m) {
        return m.from[0] === r && m.from[1] === c;
      });
      buildChessUI();
      return;
    }
    CG.selected = null;
    CG.legalMoves = [];
    buildChessUI();
    return;
  }
  if (piece && isWhite(piece)) {
    CG.selected = [r, c];
    CG.legalMoves = getLegalMoves(
      CG.board,
      true,
      CG.enPassant,
      CG.castling,
    ).filter(function (m) {
      return m.from[0] === r && m.from[1] === c;
    });
    buildChessUI();
  }
}

function executePlayerMove(move) {
  var captured = CG.board[move.to[0]][move.to[1]],
    movStr = moveName(move, CG.board);
  CG.board = applyMove(CG.board, move);
  CG.lastMove = move;
  CG.moveHistory.push(movStr);
  CG.moveCount++;
  CG.enPassant =
    move.extra && move.extra.doublePush ? [move.to[0] + 1, move.to[1]] : null;
  if (move.from[0] === 7 && move.from[1] === 4) {
    CG.castling.wK = false;
    CG.castling.wQ = false;
  }
  if (move.from[0] === 7 && move.from[1] === 0) CG.castling.wQ = false;
  if (move.from[0] === 7 && move.from[1] === 7) CG.castling.wK = false;
  if (captured) CG.capturedByPlayer.push(captured);
  CG.selected = null;
  CG.legalMoves = [];
  CG.turn = "black";
  var blackMoves = getLegalMoves(CG.board, false, CG.enPassant, CG.castling);
  if (!blackMoves.length) {
    CG.over = true;
    if (inCheck(CG.board, false)) {
      CG.result = "♔ CHECKMATE — YOU WIN!";
      addXP(100, "Chess Checkmate!");
      player.wins++;
      player.streak++;
      aiComment(
        "chess_checkmate",
        "Chess: CHECKMATE! Player won with " +
          movStr +
          "! Neru AI is in checkmate. Total moves: " +
          CG.moveCount +
          ". Player captured: " +
          CG.capturedByPlayer
            .map(function (p) {
              return PIECE_UNICODE[p];
            })
            .join(""),
      );
    } else {
      CG.result = "STALEMATE — DRAW";
      addXP(40, "Chess Draw");
      aiComment(
        "chess_stalemate",
        "Chess: Stalemate! Draw after " + CG.moveCount + " moves.",
      );
    }
    buildChessUI();
    return;
  }
  var now = Date.now();
  if (now - CG.lastAIComment > 4000 || captured || inCheck(CG.board, false)) {
    CG.lastAIComment = now;
    var chessState =
      "Chess move " +
      CG.moveCount +
      ": Player (White) played " +
      movStr +
      ". " +
      (captured ? "Captured Neru's " + PIECE_UNICODE[captured] + "." : "") +
      " " +
      (inCheck(CG.board, false) ? "Neru is NOW IN CHECK!" : "") +
      " Player total captures: " +
      CG.capturedByPlayer
        .map(function (p) {
          return PIECE_UNICODE[p];
        })
        .join("") +
      ". AI total captures: " +
      CG.capturedByAI
        .map(function (p) {
          return PIECE_UNICODE[p];
        })
        .join("") +
      ". Moves history (last 4): " +
      CG.moveHistory.slice(-4).join(", ") +
      ". Neru is thinking of reply.";
    aiComment("chess_player_move", chessState);
  }
  buildChessUI();
  setTimeout(function () {
    CG.aiThinking = true;
    var statusEl = document.getElementById("chess-status");
    if (statusEl) statusEl.textContent = "⚙ NERU IS THINKING...";
    setTimeout(
      function () {
        var aiMove = getAIMove(
          CG.board,
          CG.enPassant,
          CG.castling,
          CG.difficulty,
        );
        CG.aiThinking = false;
        if (!aiMove) {
          CG.over = true;
          if (inCheck(CG.board, true)) {
            CG.result = "♚ CHECKMATE — NERU WINS";
            addXP(20, "Tough game!");
            player.streak = 0;
            aiComment(
              "chess_ai_checkmates",
              "Chess: Neru AI wins by checkmate!",
            );
          } else {
            CG.result = "STALEMATE — DRAW";
            addXP(40, "Draw");
            aiComment("chess_stalemate2", "Chess: Stalemate — draw.");
          }
          buildChessUI();
          return;
        }
        var aiCaptured = CG.board[aiMove.to[0]][aiMove.to[1]],
          aiMovStr = moveName(aiMove, CG.board);
        CG.board = applyMove(CG.board, aiMove);
        CG.lastMove = aiMove;
        CG.moveHistory.push(aiMovStr);
        CG.moveCount++;
        CG.enPassant =
          aiMove.extra && aiMove.extra.doublePush
            ? [aiMove.to[0] - 1, aiMove.to[1]]
            : null;
        if (aiMove.from[0] === 0 && aiMove.from[1] === 4) {
          CG.castling.bK = false;
          CG.castling.bQ = false;
        }
        if (aiMove.from[0] === 0 && aiMove.from[1] === 0)
          CG.castling.bQ = false;
        if (aiMove.from[0] === 0 && aiMove.from[1] === 7)
          CG.castling.bK = false;
        if (aiCaptured) CG.capturedByAI.push(aiCaptured);
        CG.turn = "white";
        var playerMoves = getLegalMoves(
          CG.board,
          true,
          CG.enPassant,
          CG.castling,
        );
        if (!playerMoves.length) {
          CG.over = true;
          if (inCheck(CG.board, true)) {
            CG.result = "♚ CHECKMATE — NERU WINS";
            addXP(20, "Tough game!");
            player.streak = 0;
            aiComment(
              "chess_ai_wins_checkmate",
              "Chess: Neru AI wins with " +
                aiMovStr +
                "! Player is in checkmate after " +
                CG.moveCount +
                " moves.",
            );
          } else {
            CG.result = "STALEMATE — DRAW";
            addXP(40, "Draw");
            aiComment(
              "chess_stalemate3",
              "Stalemate after AI played " + aiMovStr + ".",
            );
          }
          buildChessUI();
          return;
        }
        var aiNow = Date.now();
        if (aiNow - CG.lastAIComment > 2500) {
          CG.lastAIComment = aiNow;
          var aiChessState =
            "Chess: Neru AI (Black) just played " +
            aiMovStr +
            " (move " +
            CG.moveCount +
            "). " +
            (aiCaptured
              ? "Captured player's " + PIECE_UNICODE[aiCaptured] + "."
              : "") +
            " " +
            (inCheck(CG.board, true) ? "Player (White) is NOW IN CHECK!" : "") +
            " " +
            (aiMove.extra && aiMove.extra.castleK
              ? "Castled kingside!"
              : aiMove.extra && aiMove.extra.castleQ
                ? "Castled queenside!"
                : "") +
            " AI total captures: " +
            CG.capturedByAI
              .map(function (p) {
                return PIECE_UNICODE[p];
              })
              .join("") +
            ". Player's turn now.";
          aiComment("chess_ai_move", aiChessState);
        }
        buildChessUI();
      },
      CG.difficulty === "god" ? 800 : CG.difficulty === "warrior" ? 400 : 200,
    );
  }, 300);
}

// ═══════════════════════════════════════════════════
//  SUDOKU
// ═══════════════════════════════════════════════════
var SDK = null;

function stopSudoku() {
  SDK = null;
}

function initSudoku() {
  var root = document.getElementById("sudoku-root");
  root.innerHTML = "";
  root.className = "game-shell";
  root.style.cssText = "padding-top:4px;";

  var stage = mk("div", "game-stage-split");

  // Left: board
  var boardWrap = mk("div", "game-panel");
  boardWrap.style.cssText = "position:relative;padding:8px;";
  var boardEl = mk("div", "sudoku-board");
  boardEl.id = "sdk-board";
  boardWrap.appendChild(boardEl);
  stage.appendChild(boardWrap);

  // Right: side panel
  var side = mk("div", "game-side");

  function ib(lbl, id, val) {
    var b = mk("div", "tetris-info-box");
    b.innerHTML =
      '<div class="tib-label">' +
      lbl +
      '</div><div class="tib-val" id="' +
      id +
      '">' +
      val +
      "</div>";
    return b;
  }
  side.appendChild(ib("TIME", "sdk-time", "0:00"));
  side.appendChild(ib("ERRORS", "sdk-errors", "0 / 3"));
  side.appendChild(ib("DIFFICULTY", "sdk-diff-lbl", "MEDIUM"));

  // Number pad
  var numpad = mk("div", "sudoku-numpad");
  for (var n = 1; n <= 9; n++) {
    (function (num) {
      var btn = mk("button", "sdk-num-btn");
      btn.textContent = num;
      btn.onclick = function () {
        sdkInputNum(num);
      };
      numpad.appendChild(btn);
    })(n);
  }
  var eraseBtn = mk("button", "sdk-num-btn sdk-erase-btn");
  eraseBtn.textContent = "✕";
  eraseBtn.title = "Erase";
  eraseBtn.onclick = function () {
    sdkInputNum(0);
  };
  numpad.appendChild(eraseBtn);
  side.appendChild(numpad);

  // Note toggle
  var noteRow = mk("div", "tetris-info-box");
  noteRow.style.cssText = "text-align:center;cursor:pointer;";
  noteRow.id = "sdk-note-toggle";
  noteRow.innerHTML =
    '<div class="tib-label">NOTES MODE</div><div class="tib-val" style="font-size:14px" id="sdk-note-val">OFF</div>';
  noteRow.onclick = function () {
    if (!SDK) return;
    SDK.noteMode = !SDK.noteMode;
    document.getElementById("sdk-note-val").textContent = SDK.noteMode
      ? "ON"
      : "OFF";
    noteRow.style.borderColor = SDK.noteMode ? "rgba(102,204,255,0.6)" : "";
  };
  side.appendChild(noteRow);

  // Difficulty selector
  var diffBox = mk("div", "tetris-info-box");
  diffBox.innerHTML =
    '<div class="tib-label" style="margin-bottom:6px">NEW GAME</div>';
  var diffRow = mk("div", "");
  diffRow.style.cssText =
    "display:flex;gap:4px;flex-wrap:wrap;justify-content:center;";
  ["EASY", "MEDIUM", "HARD"].forEach(function (d) {
    var b = mk("button", "sdk-diff-btn");
    b.textContent = d;
    b.dataset.diff = d;
    b.onclick = function () {
      startSudoku(d);
    };
    diffRow.appendChild(b);
  });
  diffBox.appendChild(diffRow);
  side.appendChild(diffBox);

  stage.appendChild(side);
  root.appendChild(stage);
  applyUiSkin(root);

  startSudoku("MEDIUM");
}

function sdkGenBase() {
  // Generate a valid solved sudoku via backtracking
  var grid = Array.from({ length: 9 }, function () {
    return Array(9).fill(0);
  });
  function possible(g, row, col, num) {
    for (var i = 0; i < 9; i++) {
      if (g[row][i] === num || g[i][col] === num) return false;
    }
    var sr = Math.floor(row / 3) * 3,
      sc = Math.floor(col / 3) * 3;
    for (var r = sr; r < sr + 3; r++)
      for (var c = sc; c < sc + 3; c++) if (g[r][c] === num) return false;
    return true;
  }
  function solve(g) {
    for (var row = 0; row < 9; row++) {
      for (var col = 0; col < 9; col++) {
        if (g[row][col] === 0) {
          var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
          // shuffle
          for (var i = nums.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var tmp = nums[i];
            nums[i] = nums[j];
            nums[j] = tmp;
          }
          for (var ni = 0; ni < nums.length; ni++) {
            if (possible(g, row, col, nums[ni])) {
              g[row][col] = nums[ni];
              if (solve(g)) return true;
              g[row][col] = 0;
            }
          }
          return false;
        }
      }
    }
    return true;
  }
  solve(grid);
  return grid;
}

function sdkMakePuzzle(solved, difficulty) {
  var puzzle = solved.map(function (r) {
    return r.slice();
  });
  var remove = difficulty === "EASY" ? 30 : difficulty === "HARD" ? 55 : 42;
  var cells = [];
  for (var i = 0; i < 81; i++) cells.push(i);
  // shuffle
  for (var i = cells.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var t = cells[i];
    cells[i] = cells[j];
    cells[j] = t;
  }
  for (var k = 0; k < remove; k++) {
    var idx = cells[k];
    puzzle[Math.floor(idx / 9)][idx % 9] = 0;
  }
  return puzzle;
}

function startSudoku(difficulty) {
  var solved = sdkGenBase();
  var puzzle = sdkMakePuzzle(solved, difficulty);

  SDK = {
    solved: solved,
    puzzle: puzzle,
    // user grid: each cell is {val, notes:Set, given, error}
    cells: puzzle.map(function (row, r) {
      return row.map(function (v, c) {
        return { val: v, notes: new Set(), given: v !== 0, error: false };
      });
    }),
    selected: null,
    errors: 0,
    maxErrors: 3,
    time: 0,
    timer: null,
    done: false,
    noteMode: false,
    difficulty: difficulty,
  };

  var diffLbl = document.getElementById("sdk-diff-lbl");
  if (diffLbl) diffLbl.textContent = difficulty;

  clearInterval(SDK.timer);
  SDK.timer = setInterval(function () {
    if (!SDK || SDK.done) return;
    SDK.time++;
    var m = Math.floor(SDK.time / 60),
      s = SDK.time % 60;
    var el = document.getElementById("sdk-time");
    if (el) el.textContent = m + ":" + (s < 10 ? "0" : "") + s;
  }, 1000);

  buildSudokuBoard();
  aiComment(
    "sudoku_start",
    "Sudoku game started on " +
      difficulty +
      " difficulty. Player is beginning. Neru is watching.",
  );
}

function buildSudokuBoard() {
  var board = document.getElementById("sdk-board");
  if (!board || !SDK) return;
  board.innerHTML = "";

  for (var r = 0; r < 9; r++) {
    for (var c = 0; c < 9; c++) {
      (function (row, col) {
        var cell = mk("div", "sdk-cell");
        // thick borders for 3x3 boxes
        if (row % 3 === 0) cell.classList.add("sdk-border-top");
        if (col % 3 === 0) cell.classList.add("sdk-border-left");
        if (row === 8) cell.classList.add("sdk-border-bottom");
        if (col === 8) cell.classList.add("sdk-border-right");

        cell.dataset.row = row;
        cell.dataset.col = col;
        cell.onclick = function () {
          sdkSelectCell(row, col);
        };
        board.appendChild(cell);
      })(r, c);
    }
  }
  renderSudokuCells();
}

function renderSudokuCells() {
  if (!SDK) return;
  var cells = document.querySelectorAll(".sdk-cell");
  var sel = SDK.selected;

  cells.forEach(function (cell) {
    var r = parseInt(cell.dataset.row),
      c = parseInt(cell.dataset.col);
    var data = SDK.cells[r][c];
    cell.innerHTML = "";
    cell.className = "sdk-cell";

    // thick borders
    if (r % 3 === 0) cell.classList.add("sdk-border-top");
    if (c % 3 === 0) cell.classList.add("sdk-border-left");
    if (r === 8) cell.classList.add("sdk-border-bottom");
    if (c === 8) cell.classList.add("sdk-border-right");

    if (data.given) cell.classList.add("sdk-given");
    if (data.error) cell.classList.add("sdk-error");

    // Highlight selected cell, row, col, box
    if (sel) {
      var sr = sel[0],
        sc = sel[1];
      var sameBox =
        Math.floor(r / 3) === Math.floor(sr / 3) &&
        Math.floor(c / 3) === Math.floor(sc / 3);
      if (r === sr && c === sc) cell.classList.add("sdk-selected");
      else if (r === sr || c === sc || sameBox) cell.classList.add("sdk-peer");
      // highlight same number
      if (data.val && sel && SDK.cells[sr][sc].val === data.val)
        cell.classList.add("sdk-same-num");
    }

    if (data.val) {
      var span = mk("span", "");
      span.textContent = data.val;
      cell.appendChild(span);
    } else if (data.notes.size > 0) {
      var noteGrid = mk("div", "sdk-notes");
      for (var n = 1; n <= 9; n++) {
        var ns = mk("span", "sdk-note");
        ns.textContent = data.notes.has(n) ? n : "";
        noteGrid.appendChild(ns);
      }
      cell.appendChild(noteGrid);
    }
  });
}

function sdkSelectCell(r, c) {
  if (!SDK || SDK.done) return;
  SDK.selected = [r, c];
  renderSudokuCells();
}

function sdkInputNum(num) {
  if (!SDK || SDK.done || !SDK.selected) return;
  var r = SDK.selected[0],
    c = SDK.selected[1];
  var data = SDK.cells[r][c];
  if (data.given) return;

  if (num === 0) {
    data.val = 0;
    data.notes.clear();
    data.error = false;
  } else if (SDK.noteMode) {
    data.val = 0;
    if (data.notes.has(num)) data.notes.delete(num);
    else data.notes.add(num);
  } else {
    data.notes.clear();
    data.val = num;
    data.error = SDK.solved[r][c] !== num;
    if (data.error) {
      SDK.errors++;
      var errEl = document.getElementById("sdk-errors");
      if (errEl) errEl.textContent = SDK.errors + " / " + SDK.maxErrors;
      if (SDK.errors >= SDK.maxErrors) {
        sdkGameOver(false);
        return;
      }
      aiComment(
        "sudoku_error",
        "Player made an error in Sudoku. Errors: " +
          SDK.errors +
          "/" +
          SDK.maxErrors +
          ". React briefly.",
      );
    } else {
      // Check win
      var complete = SDK.cells.every(function (row) {
        return row.every(function (cell) {
          return cell.val !== 0 && !cell.error;
        });
      });
      if (complete) {
        sdkGameOver(true);
        return;
      }
    }
  }
  renderSudokuCells();
}

function sdkGameOver(won) {
  if (!SDK) return;
  SDK.done = true;
  clearInterval(SDK.timer);
  var m = Math.floor(SDK.time / 60),
    s = SDK.time % 60;
  var timeStr = m + ":" + (s < 10 ? "0" : "") + s;

  if (won) {
    addXP(
      SDK.difficulty === "EASY" ? 30 : SDK.difficulty === "HARD" ? 80 : 50,
      "Sudoku solved!",
    );
    player.wins++;
    showToast("🧩", "PUZZLE SOLVED! " + timeStr);
    aiComment(
      "sudoku_win",
      "Player just solved a " +
        SDK.difficulty +
        " Sudoku in " +
        timeStr +
        " with " +
        SDK.errors +
        " errors. Congratulate them!",
    );
  } else {
    showToast("💀", "TOO MANY ERRORS!");
    aiComment(
      "sudoku_lose",
      "Player failed the Sudoku — 3 errors reached. Tease them lightly.",
    );
  }

  setTimeout(function () {
    var board = document.getElementById("sdk-board");
    if (!board) return;
    var ov = mk("div", "tet-overlay tetris-start-overlay");
    ov.innerHTML =
      '<div class="tetris-overlay-title">' +
      (won ? "SOLVED! 🧩" : "GAME OVER") +
      "</div>" +
      '<div style="color:rgba(200,180,100,0.8);font-size:13px;margin-bottom:8px">' +
      (won ? "Time: " + timeStr : "3 Errors") +
      "</div>";
    var b = mk("button", "tetris-overlay-btn");
    b.textContent = "NEW PUZZLE";
    b.onclick = function () {
      ov.remove();
      startSudoku(SDK ? SDK.difficulty : "MEDIUM");
    };
    ov.appendChild(b);
    board.parentElement.appendChild(ov);
  }, 400);
}

// Keyboard support for sudoku
document.addEventListener("keydown", function (e) {
  if (currentView !== "sudoku" || !SDK || SDK.done || !SDK.selected) return;
  var r = SDK.selected[0],
    c = SDK.selected[1];
  if (e.key === "ArrowUp" && r > 0) {
    SDK.selected[0]--;
    renderSudokuCells();
    e.preventDefault();
  } else if (e.key === "ArrowDown" && r < 8) {
    SDK.selected[0]++;
    renderSudokuCells();
    e.preventDefault();
  } else if (e.key === "ArrowLeft" && c > 0) {
    SDK.selected[1]--;
    renderSudokuCells();
    e.preventDefault();
  } else if (e.key === "ArrowRight" && c < 8) {
    SDK.selected[1]++;
    renderSudokuCells();
    e.preventDefault();
  } else if (e.key >= "1" && e.key <= "9") {
    sdkInputNum(parseInt(e.key));
  } else if (e.key === "Backspace" || e.key === "Delete" || e.key === "0") {
    sdkInputNum(0);
  } else if (e.key === "n" || e.key === "N") {
    SDK.noteMode = !SDK.noteMode;
    var nv = document.getElementById("sdk-note-val");
    if (nv) nv.textContent = SDK.noteMode ? "ON" : "OFF";
    var nt = document.getElementById("sdk-note-toggle");
    if (nt) nt.style.borderColor = SDK.noteMode ? "rgba(102,204,255,0.6)" : "";
  }
});

// ═══════════════════════════════════════════════════
//  BOOT
// ═══════════════════════════════════════════════════
document.addEventListener("DOMContentLoaded", function () {
  applyUiSkin(document);
  initCategoryArena();
  showView("home");
  updateHUD();
  startBgCanvas();

  if ("speechSynthesis" in window) {
    window.speechSynthesis.getVoices();
    window.speechSynthesis.addEventListener("voiceschanged", function () {
      window.speechSynthesis.getVoices();
    });
  }
  // Greet on load
  setTimeout(function () {
    aiComment(
      "app_loaded",
      "Player just opened the Temple of Neru gaming platform. Greet them as Neru and invite them to choose a game.",
    );
  }, 1500);
});

// ═══════════════════════════════════════════════════
//  AUTH MODAL
// ═══════════════════════════════════════════════════
function openAuthModal() {
  var m = document.getElementById("auth-modal");
  if (m) m.classList.remove("hidden");
}
function closeAuthModal() {
  var m = document.getElementById("auth-modal");
  if (m) m.classList.add("hidden");
}
document.addEventListener("click", function (e) {
  var m = document.getElementById("auth-modal");
  if (m && e.target === m) closeAuthModal();
});
function switchAuthTab(tab) {
  document
    .getElementById("tab-login")
    .classList.toggle("active", tab === "login");
  document
    .getElementById("tab-register")
    .classList.toggle("active", tab === "register");
  document
    .getElementById("login-form")
    .classList.toggle("hidden", tab !== "login");
  document
    .getElementById("register-form")
    .classList.toggle("hidden", tab !== "register");
}

// ═══════════════════════════════════════════════════
//  RATE LIMITER
// ═══════════════════════════════════════════════════
var rateBucket = [],
  RATE_LIMIT = 29,
  RATE_WINDOW = 60000;
function rateAllowed() {
  var now = Date.now();
  rateBucket = rateBucket.filter(function (t) {
    return now - t < RATE_WINDOW;
  });
  return rateBucket.length < RATE_LIMIT;
}
function rateConsume() {
  rateBucket.push(Date.now());
}
function rateLimited(fn) {
  if (rateAllowed()) {
    rateConsume();
    fn();
  } else {
    var attempt = function () {
      if (rateAllowed()) {
        rateConsume();
        fn();
      } else setTimeout(attempt, 2000);
    };
    setTimeout(attempt, 2000);
  }
}

// ═══════════════════════════════════════════════════
//  TTS — Groq PlayAI + browser fallback
// ═══════════════════════════════════════════════════
var ttsEnabled = false,
  ttsAudio = null;

function onTtsToggle() {
  ttsEnabled = document.getElementById("tts-enabled").checked;
  if (!ttsEnabled) {
    if (ttsAudio) {
      ttsAudio.pause();
      ttsAudio = null;
    }
    if ("speechSynthesis" in window) window.speechSynthesis.cancel();
  }
}

function speakText(text) {
  if (!ttsEnabled) return;
  var clean = text
    .replace(/<br>/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"');
  rateLimited(function () {
    _doSpeak(clean);
  });
}

function _doSpeak(text) {
  if (GROQ_KEY && GROQ_KEY !== "PASTE_YOUR_GROQ_KEY_HERE") _speakGroq(text);
  else _speakBrowser(text);
}

function _speakGroq(text) {
  if (ttsAudio) {
    ttsAudio.pause();
    ttsAudio = null;
  }
  fetch("https://api.groq.com/openai/v1/audio/speech", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + GROQ_KEY,
    },
    body: JSON.stringify({
      model: "playai-tts",
      input: text,
      voice: "Aria-PlayAI",
      response_format: "mp3",
    }),
  })
    .then(function (res) {
      if (!res.ok) {
        _speakBrowser(text);
        return null;
      }
      return res.blob();
    })
    .then(function (blob) {
      if (!blob) return;
      var url = URL.createObjectURL(blob);
      ttsAudio = new Audio(url);
      ttsAudio.play();
      ttsAudio.onended = function () {
        URL.revokeObjectURL(url);
        ttsAudio = null;
        drainTtsQueue();
      };
    })
    .catch(function () {
      _speakBrowser(text);
    });
}

function _speakBrowser(text) {
  if (!("speechSynthesis" in window)) return;
  window.speechSynthesis.cancel();
  var utt = new SpeechSynthesisUtterance(text);
  utt.rate = 0.95;
  utt.pitch = 1.05;
  utt.lang = "en-US";
  var voices = window.speechSynthesis.getVoices();
  var v =
    voices.find(function (x) {
      return (
        x.name.toLowerCase().includes("samantha") ||
        x.name.toLowerCase().includes("karen")
      );
    }) ||
    voices.find(function (x) {
      return x.lang.startsWith("en") && x.localService;
    }) ||
    voices.find(function (x) {
      return x.lang.startsWith("en");
    });
  if (v) utt.voice = v;
  utt.onend = function () {
    drainTtsQueue();
  };
  window.speechSynthesis.speak(utt);
}

function replayLastTTS(text) {
  if (!ttsEnabled) return;
  rateLimited(function () {
    _doSpeak(text);
  });
}
