(() => {
  "use strict";

  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector("#primary-nav");
  const year = document.querySelector("#year");

  if (year) year.textContent = String(new Date().getFullYear());

  const language = (document.documentElement.lang || "en").toLowerCase();
  const ecosystemLabels = { en: "Ecosystem", fr: "Écosystème", ar: "المنظومة" };
  if (nav && !nav.querySelector("[data-ecosystem-nav]")) {
    const ecosystemLink = document.createElement("a");
    ecosystemLink.href = language.startsWith("fr") ? "/fr/ecosystem/" : language.startsWith("ar") ? "/ar/ecosystem/" : "/ecosystem/";
    ecosystemLink.dataset.ecosystemNav = "true";
    ecosystemLink.textContent = ecosystemLabels[language.slice(0, 2)] || ecosystemLabels.en;
    nav.insertBefore(ecosystemLink, nav.firstElementChild);
  }

  const explorer = document.querySelector("[data-ecosystem-explorer]");
  if (explorer) {
    const cards = Array.from(explorer.querySelectorAll("[data-ecosystem-card]"));
    const search = explorer.querySelector("[data-ecosystem-search]");
    const filters = Array.from(explorer.querySelectorAll("[data-ecosystem-filter]"));
    const count = explorer.querySelector("[data-ecosystem-count]");
    const locale = language.slice(0, 2);
    let selectedFilter = "all";
    const normalize = (value) => value.normalize("NFKC").toLocaleLowerCase();

    const announceCount = (visible) => {
      if (!count) return;
      if (locale === "fr") {
        count.textContent = visible === 1 ? "1 dépôt affiché" : visible + " dépôts affichés";
      } else if (locale === "ar") {
        count.textContent = "المعروض: " + visible + " من أصل " + cards.length + " مستودعات";
      } else {
        count.textContent = visible + " of " + cards.length + " repositories shown";
      }
    };

    const updateCards = () => {
      const query = search ? normalize(search.value.trim()) : "";
      let visible = 0;
      cards.forEach((card) => {
        const categoryMatches = selectedFilter === "all" || card.dataset.category === selectedFilter;
        const textMatches = !query || normalize(card.textContent).includes(query);
        const show = categoryMatches && textMatches;
        card.hidden = !show;
        if (show) visible += 1;
      });
      announceCount(visible);
    };

    filters.forEach((button) => {
      button.addEventListener("click", () => {
        selectedFilter = button.dataset.ecosystemFilter || "all";
        filters.forEach((item) => item.setAttribute("aria-pressed", String(item === button)));
        updateCards();
      });
    });
    if (search) search.addEventListener("input", updateCards);
    explorer.classList.add("is-enhanced");
    updateCards();
  }
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
