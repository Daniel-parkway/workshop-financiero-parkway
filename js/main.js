/* ============================================================
   WORKSHOP FINANCIERO — LÓGICA DEL FUNNEL
   No requiere edición: toda la config editable vive en config.js
   ============================================================ */

(function () {
  "use strict";

  const state = {
    step: 1,
    fechaId: null,
    nombre: "",
    email: "",
    telefono: ""
  };

  const els = {};

  document.addEventListener("DOMContentLoaded", init);

  function init() {
    cacheEls();
    renderYear();
    renderFechas();
    renderPricing();
    renderAuthority();
    wireOptionalImages();
    wireWhatsapp();
    wireOpenClose();
    wireStepNav();
    wireFechaSelection();
    wireContactForm();
    wirePagoButton();
    wireReveal();
  }

  function cacheEls() {
    els.overlay = document.getElementById("registroOverlay");
    els.fechaList = document.getElementById("fechaList");
    els.btnStep1Next = document.getElementById("btnStep1Next");
    els.contactoForm = document.getElementById("contactoForm");
    els.btnIrPago = document.getElementById("btnIrPago");
    els.registroStatus = document.getElementById("registroStatus");
    els.year = document.getElementById("year");
    els.whatsappFloat = document.getElementById("whatsappFloat");
    els.authorityGrid = document.getElementById("authorityGrid");
    els.brandLogoBadge = document.getElementById("brandLogoBadge");
    els.resourcesImage = document.getElementById("resourcesImage");
  }

  /* ---------------- IMÁGENES OPCIONALES ----------------
     Si el archivo aún no existe en assets/, se ocultan solas
     sin romper el layout. En cuanto agregues el archivo con el
     nombre correcto, aparecen automáticamente. */

  function wireOptionalImages() {
    showImageIfExists(els.brandLogoBadge, CONFIG.brand && CONFIG.brand.logo);
    showImageIfExists(els.resourcesImage, CONFIG.resourcesImage);
  }

  function showImageIfExists(imgEl, src) {
    if (!imgEl || !src) return;
    const probe = new Image();
    probe.onload = () => {
      imgEl.src = src;
      imgEl.hidden = false;
    };
    probe.onerror = () => {
      imgEl.hidden = true;
    };
    probe.src = src;
  }

  /* ---------------- AUTORIDAD (FABIO & ANDRÉS) ---------------- */

  function renderAuthority() {
    if (!els.authorityGrid || !CONFIG.brand || !CONFIG.brand.instructors) return;
    els.authorityGrid.innerHTML = CONFIG.brand.instructors
      .map((p, i) => authorityCardHTML(p, i))
      .join("");

    CONFIG.brand.instructors.forEach((p, i) => {
      const photoWrap = document.getElementById(`authorityPhoto-${i}`);
      if (!photoWrap || !p.photo) return;
      const probe = new Image();
      probe.onload = () => {
        photoWrap.style.backgroundImage = `url("${p.photo}")`;
        photoWrap.classList.add("has-photo");
        photoWrap.textContent = "";
      };
      probe.src = p.photo;
    });
  }

  function authorityCardHTML(p, i) {
    const initials = (p.name || "").slice(0, 2).toUpperCase();
    return `
      <article class="authority-card reveal">
        <div class="authority-photo-wrap">
          <div class="authority-photo authority-photo--placeholder" id="authorityPhoto-${i}" aria-hidden="true">${initials}</div>
        </div>
        <h3 class="authority-name">${p.name}</h3>
        <p class="authority-role">${p.role}</p>
        <p class="authority-bio">${p.bio}</p>
      </article>
    `;
  }

  function renderYear() {
    if (els.year) els.year.textContent = new Date().getFullYear();
  }

  /* ---------------- REVEAL AL HACER SCROLL ---------------- */

  function wireReveal() {
    const targets = document.querySelectorAll(".reveal");
    if (!targets.length) return;
    if (!("IntersectionObserver" in window)) {
      targets.forEach((el) => el.classList.add("is-visible"));
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );
    targets.forEach((el) => observer.observe(el));
  }

  function renderPricing() {
    const old = document.getElementById("priceOld");
    const now = document.getElementById("priceNew");
    const note = document.getElementById("priceNote");
    if (old) old.textContent = CONFIG.pricing.originalPrice;
    if (now) now.textContent = CONFIG.pricing.offerPrice;
    if (note) note.textContent = `${CONFIG.pricing.currencyNote} · Cupos limitados por fecha`;
  }

  function wireWhatsapp() {
    if (!els.whatsappFloat) return;
    const number = (CONFIG.whatsapp.number || "").replace(/[^\d]/g, "");
    const msg = encodeURIComponent(CONFIG.whatsapp.defaultMessage || "");
    els.whatsappFloat.href = `https://wa.me/${number}?text=${msg}`;
  }

  /* ---------------- FECHAS (STEP 1) ---------------- */

  function renderFechas() {
    if (!els.fechaList) return;
    els.fechaList.innerHTML = CONFIG.workshopDates
      .map((f) => fechaCardHTML(f))
      .join("");
  }

  function fechaCardHTML(f) {
    const spots =
      f.spotsLeft != null
        ? `<span class="fecha-spots">${f.spotsLeft} cupos</span>`
        : "";
    return `
      <div class="fecha-card" data-fecha-id="${f.id}" role="button" tabindex="0" aria-pressed="false">
        <div class="fecha-date">
          <span class="day">${f.day}</span>
          <span class="month">${f.month}</span>
        </div>
        <div class="fecha-info">
          <div class="fecha-weekday">${f.weekday} · ${f.time}</div>
          <div class="fecha-meta">${f.city}</div>
        </div>
        ${spots}
        <div class="fecha-radio"></div>
      </div>
    `;
  }

  function wireFechaSelection() {
    if (!els.fechaList) return;
    els.fechaList.addEventListener("click", (e) => {
      const card = e.target.closest(".fecha-card");
      if (!card) return;
      selectFecha(card.dataset.fechaId);
    });
    els.fechaList.addEventListener("keydown", (e) => {
      if (e.key !== "Enter" && e.key !== " ") return;
      const card = e.target.closest(".fecha-card");
      if (!card) return;
      e.preventDefault();
      selectFecha(card.dataset.fechaId);
    });
  }

  function selectFecha(id) {
    state.fechaId = id;
    els.fechaList.querySelectorAll(".fecha-card").forEach((card) => {
      const isSelected = card.dataset.fechaId === id;
      card.classList.toggle("is-selected", isSelected);
      card.setAttribute("aria-pressed", String(isSelected));
    });
    if (els.btnStep1Next) els.btnStep1Next.disabled = false;
  }

  /* ---------------- MODAL OPEN / CLOSE ---------------- */

  function wireOpenClose() {
    document.querySelectorAll(".js-open-registro").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        openRegistro();
      });
    });
    document.querySelectorAll(".js-close-registro").forEach((btn) => {
      btn.addEventListener("click", closeRegistro);
    });
    els.overlay.addEventListener("click", (e) => {
      if (e.target === els.overlay) closeRegistro();
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && els.overlay.classList.contains("is-open")) {
        closeRegistro();
      }
    });
  }

  function openRegistro() {
    els.overlay.classList.add("is-open");
    document.body.style.overflow = "hidden";
    goToStep(1);
  }

  function closeRegistro() {
    els.overlay.classList.remove("is-open");
    document.body.style.overflow = "";
  }

  /* ---------------- STEP NAVIGATION ---------------- */

  function wireStepNav() {
    document.querySelectorAll(".js-next-step").forEach((btn) => {
      btn.addEventListener("click", () => {
        const next = parseInt(btn.dataset.next, 10);
        goToStep(next);
      });
    });
    document.querySelectorAll(".js-prev-step").forEach((btn) => {
      btn.addEventListener("click", () => {
        const prev = parseInt(btn.dataset.prev, 10);
        goToStep(prev);
      });
    });
  }

  function goToStep(n) {
    state.step = n;
    document.querySelectorAll(".registro-step").forEach((panel) => {
      panel.classList.toggle("is-active", parseInt(panel.dataset.step, 10) === n);
    });
    document.querySelectorAll(".registro-step-dot").forEach((dot) => {
      const dotStep = parseInt(dot.dataset.stepDot, 10);
      dot.classList.toggle("is-active", dotStep === n);
      dot.classList.toggle("is-done", dotStep < n);
    });
    if (n === 3) populateResumen();
    const modal = document.getElementById("registro");
    if (modal) modal.scrollTop = 0;
  }

  /* ---------------- STEP 2: CONTACT FORM ---------------- */

  function wireContactForm() {
    if (!els.contactoForm) return;
    els.contactoForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const nombre = document.getElementById("inputNombre");
      const email = document.getElementById("inputEmail");
      const telefono = document.getElementById("inputTelefono");

      [nombre, email, telefono].forEach((el) => el.classList.add("touched"));

      if (!els.contactoForm.checkValidity()) return;

      state.nombre = nombre.value.trim();
      state.email = email.value.trim();
      state.telefono = telefono.value.trim();

      goToStep(3);
    });
  }

  /* ---------------- STEP 3: RESUMEN + PAGO ---------------- */

  function populateResumen() {
    const fecha = CONFIG.workshopDates.find((f) => f.id === state.fechaId);
    setText("resumenFecha", fecha ? `${fecha.label} · ${fecha.time}` : "—");
    setText("resumenNombre", state.nombre || "—");
    setText("resumenEmail", state.email || "—");
    setText("resumenTelefono", state.telefono || "—");
    setText("resumenPrecio", CONFIG.pricing.offerPrice);
  }

  function setText(id, value) {
    const el = document.getElementById(id);
    if (el) el.textContent = value;
  }

  function wirePagoButton() {
    if (!els.btnIrPago) return;
    els.btnIrPago.addEventListener("click", async () => {
      els.btnIrPago.disabled = true;
      setStatus("Guardando tu registro...", false);

      try {
        await submitLead();
        setStatus("¡Listo! Redirigiendo a Mercado Pago...", false);
        setTimeout(() => {
          window.location.href = CONFIG.mercadoPagoLink;
        }, 500);
      } catch (err) {
        setStatus(
          "No pudimos guardar tu registro, pero puedes continuar al pago igualmente.",
          true
        );
        setTimeout(() => {
          window.location.href = CONFIG.mercadoPagoLink;
        }, 1200);
      }
    });
  }

  function setStatus(msg, isError) {
    if (!els.registroStatus) return;
    els.registroStatus.textContent = msg;
    els.registroStatus.classList.toggle("is-error", !!isError);
  }

  async function submitLead() {
    const fecha = CONFIG.workshopDates.find((f) => f.id === state.fechaId);
    const lead = {
      fecha: fecha ? fecha.label : state.fechaId,
      fechaId: state.fechaId,
      nombre: state.nombre,
      email: state.email,
      telefono: state.telefono,
      precio: CONFIG.pricing.offerPrice,
      timestamp: new Date().toISOString()
    };

    saveLeadLocally(lead);

    const endpoint = CONFIG.googleSheetsEndpoint;
    const isConfigured =
      endpoint && !endpoint.startsWith("REEMPLAZAR");

    if (!isConfigured) return;

    await fetch(endpoint, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(lead)
    });
  }

  function saveLeadLocally(lead) {
    try {
      const key = "parkway_leads";
      const existing = JSON.parse(localStorage.getItem(key) || "[]");
      existing.push(lead);
      localStorage.setItem(key, JSON.stringify(existing));
    } catch (e) {
      /* localStorage no disponible, no es crítico */
    }
  }
})();
