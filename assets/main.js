(() => {
  "use strict";

  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector("#primary-nav");
  const year = document.querySelector("#year");

  if (year) year.textContent = String(new Date().getFullYear());
  if (!toggle || !nav) return;

  const closeMenu = ({ restoreFocus = false } = {}) => {
    toggle.setAttribute("aria-expanded", "false");
    nav.classList.remove("is-open");
    if (restoreFocus) toggle.focus();
  };

  toggle.addEventListener("click", () => {
    const opening = toggle.getAttribute("aria-expanded") !== "true";
    toggle.setAttribute("aria-expanded", String(opening));
    nav.classList.toggle("is-open", opening);
    if (opening) {
      const firstLink = nav.querySelector("a");
      if (firstLink && window.matchMedia("(max-width: 900px)").matches) firstLink.focus();
    }
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => closeMenu());
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && nav.classList.contains("is-open")) {
      closeMenu({ restoreFocus: true });
    }
  });

  document.addEventListener("click", (event) => {
    if (!nav.classList.contains("is-open")) return;
    if (event.target instanceof Node && !nav.contains(event.target) && !toggle.contains(event.target)) {
      closeMenu();
    }
  });

  window.addEventListener("resize", () => {
    if (window.matchMedia("(min-width: 901px)").matches) closeMenu();
  });
})();
