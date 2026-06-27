/* ============================================================
   alertas.js — conecta a página de Alertas à API do mini-Foundry
   (projeto 11). Lê /stats e /alertas do banco central (Supabase
   ou SQLite local). Base configurável: persiste em localStorage.
   ============================================================ */
(function () {
  "use strict";

  // Resolução da base da API: localStorage → window.EOS_API_BASE → default.
  const DEFAULT_BASE = "http://127.0.0.1:8000";
  function getBase() {
    return (
      localStorage.getItem("eosApiBase") ||
      window.EOS_API_BASE ||
      DEFAULT_BASE
    ).replace(/\/+$/, "");
  }
  function setBase(url) {
    localStorage.setItem("eosApiBase", url.replace(/\/+$/, ""));
  }

  const CAMADA = {
    risco: { label: "Risco", cls: "badge-status-development", dot: "#ffc500" },
    hipotese: { label: "Hipótese", cls: "badge-amber", dot: "#ff6b35" },
    evidencia: { label: "Evidência", cls: "badge-status-active", dot: "#00ff88" },
  };

  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"]/g, (c) => ({
      "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;",
    }[c]));
  }

  async function fetchJSON(path) {
    const res = await fetch(getBase() + path, { headers: { Accept: "application/json" } });
    if (!res.ok) throw new Error("HTTP " + res.status);
    return res.json();
  }

  function renderStats(stats) {
    const el = document.getElementById("alertas-stats");
    const c = stats.por_camada || {};
    el.innerHTML = `
      <div class="kpi"><span class="kpi-num">${stats.total_alertas ?? 0}</span><span class="kpi-label">Alertas</span></div>
      <div class="kpi"><span class="kpi-num">${stats.total_entidades ?? 0}</span><span class="kpi-label">Entidades</span></div>
      <div class="kpi"><span class="kpi-num" style="color:#00ff88">${c.evidencia ?? 0}</span><span class="kpi-label">Evidência</span></div>
      <div class="kpi"><span class="kpi-num" style="color:#ff6b35">${c.hipotese ?? 0}</span><span class="kpi-label">Hipótese</span></div>
      <div class="kpi"><span class="kpi-num" style="color:#ffc500">${c.risco ?? 0}</span><span class="kpi-label">Risco</span></div>
    `;
  }

  function renderAlerts(list) {
    const el = document.getElementById("alertas-list");
    if (!list.length) {
      el.innerHTML = `<p class="alertas-empty">Nenhum alerta para os filtros atuais.</p>`;
      return;
    }
    el.innerHTML = list.map((a) => {
      const cam = CAMADA[a.camada] || { label: a.camada, cls: "badge-cyan", dot: "#00f5ff" };
      const score = typeof a.score === "number" ? a.score.toFixed(2) : a.score;
      return `
      <article class="alerta-card card">
        <div class="alerta-head">
          <span class="alerta-dot" style="background:${cam.dot}"></span>
          <h3 class="alerta-tipo">${esc(a.tipo)}</h3>
          <span class="badge ${cam.cls}">${esc(cam.label)}</span>
          <span class="alerta-score">score ${score}</span>
        </div>
        <p class="alerta-ent"><strong>Entidade:</strong> ${esc(a.entidade)}</p>
        <p class="alerta-regra">${esc(a.regra)}</p>
        <p class="alerta-fonte">📚 ${esc(a.fonte)} · ${esc(a.data_ref)}</p>
        <p class="alerta-limit">⚠️ <em>${esc(a.limitacao)}</em></p>
      </article>`;
    }).join("");
  }

  function setStatus(msg, kind) {
    const el = document.getElementById("alertas-status");
    el.textContent = msg;
    el.className = "alertas-status" + (kind ? " " + kind : "");
  }

  async function load() {
    const minScore = document.getElementById("flt-score").value;
    const entidade = document.getElementById("flt-entidade").value.trim();
    setStatus("Carregando de " + getBase() + " …", "");
    try {
      const [stats, alerts] = await Promise.all([
        fetchJSON("/stats"),
        fetchJSON(
          "/alertas?limit=100" +
            (minScore ? "&min_score=" + encodeURIComponent(minScore) : "") +
            (entidade ? "&entidade=" + encodeURIComponent(entidade) : "")
        ),
      ]);
      renderStats(stats);
      renderAlerts(alerts);
      setStatus(`${alerts.length} alerta(s) · fonte: ${getBase()}`, "ok");
    } catch (err) {
      renderStats({ total_alertas: "—", total_entidades: "—", por_camada: {} });
      document.getElementById("alertas-list").innerHTML = "";
      setStatus(
        "Não foi possível conectar à API (" + getBase() + "). " +
          "Suba a API (uvicorn api:app) ou ajuste a URL acima. Detalhe: " + err.message,
        "erro"
      );
    }
  }

  document.addEventListener("DOMContentLoaded", function () {
    const baseInput = document.getElementById("api-base");
    baseInput.value = getBase();
    document.getElementById("api-save").addEventListener("click", function () {
      setBase(baseInput.value || DEFAULT_BASE);
      load();
    });
    document.getElementById("flt-aplicar").addEventListener("click", load);
    load();
  });
})();
