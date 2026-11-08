// ============================================================
// BADAAMI — shared behaviour
// ============================================================
const WHATSAPP_NUMBER = "9779709132802";
const DEFAULT_MESSAGE = "Namaste! I'd like to order some Badaami chocolate.";

document.addEventListener("DOMContentLoaded", () => {
  // mobile nav toggle
  const toggle = document.querySelector(".nav-toggle");
  const links = document.querySelector(".nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", () => {
      links.classList.toggle("open");
      toggle.setAttribute(
        "aria-expanded",
        links.classList.contains("open") ? "true" : "false"
      );
    });
  }

  // WhatsApp popover
  const fab = document.querySelector(".wa-fab");
  const panel = document.querySelector(".wa-panel");
  const closeBtn = document.querySelector(".wa-panel-close");
  const sendBtn = document.querySelector(".wa-send");
  const textarea = document.querySelector(".wa-message");

  if (textarea) textarea.value = DEFAULT_MESSAGE;

  function openPanel() {
    panel.classList.add("open");
    fab.setAttribute("aria-expanded", "true");
    textarea?.focus();
  }
  function closePanel() {
    panel.classList.remove("open");
    fab.setAttribute("aria-expanded", "false");
  }

  const openTriggers = document.querySelectorAll(".wa-fab, .wa-open-trigger");
  if (panel && openTriggers.length) {
    openTriggers.forEach((trigger) => {
      trigger.addEventListener("click", (e) => {
        e.preventDefault();
        panel.classList.contains("open") ? closePanel() : openPanel();
      });
    });
    closeBtn?.addEventListener("click", closePanel);
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closePanel();
    });
  }

  sendBtn?.addEventListener("click", () => {
    const msg = encodeURIComponent(textarea?.value || DEFAULT_MESSAGE);
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`;
    window.open(url, "_blank", "noopener");
  });

  // any element with data-wa-quick opens whatsapp directly with its own message
  document.querySelectorAll("[data-wa-quick]").forEach((el) => {
    el.addEventListener("click", (e) => {
      e.preventDefault();
      const msg = encodeURIComponent(el.getAttribute("data-wa-quick") || DEFAULT_MESSAGE);
      window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, "_blank", "noopener");
    });
  });
});
