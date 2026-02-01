(() => {
  const header = document.querySelector(".header");
  const toggle = document.querySelector(".header__toggle");
  const nav = document.querySelector("#primary-nav");

  if (!header || !toggle || !nav) return;

  const open = () => {
    document.body.classList.add("is-nav-open");
    toggle.setAttribute("aria-expanded", "true");
    toggle.setAttribute("aria-label", "Fechar menu");
  };

  const close = () => {
    document.body.classList.remove("is-nav-open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Abrir menu");
  };

  const isOpen = () => document.body.classList.contains("is-nav-open");

  toggle.addEventListener("click", () => {
    isOpen() ? close() : open();
  });

  // Fecha ao clicar em link
  nav.addEventListener("click", (e) => {
    const link = e.target.closest("a");
    if (link) close();
  });

  // Fecha ao clicar fora (considerando header OU nav)
  document.addEventListener("click", (e) => {
    if (!isOpen()) return;

    const clickedInside =
      header.contains(e.target) || nav.contains(e.target);

    if (!clickedInside) close();
  });

  // Fecha com ESC
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") close();
  });

  close();
})();

(() => {
  const viewport = document.querySelector("[data-portfolio-viewport]");
  const prev = document.querySelector("[data-portfolio-prev]");
  const next = document.querySelector("[data-portfolio-next]");

  if (!viewport || !prev || !next) return;

  const scrollAmount = () => viewport.clientWidth * 0.9;

  prev.addEventListener("click", () => {
    viewport.scrollBy({ left: -scrollAmount(), behavior: "smooth" });
  });

  next.addEventListener("click", () => {
    viewport.scrollBy({ left: scrollAmount(), behavior: "smooth" });
  });
})();

// Step cards - toggle no mobile
(() => {
  const cards = document.querySelectorAll(".step-card");

  if (!cards.length) return;

  cards.forEach((card) => {
    card.addEventListener("click", () => {
      // Remove active de todos os outros
      cards.forEach((c) => {
        if (c !== card) c.classList.remove("is-active");
      });
      // Toggle no card clicado
      card.classList.toggle("is-active");
    });
  });

  // Fecha ao clicar fora
  document.addEventListener("click", (e) => {
    if (!e.target.closest(".step-card")) {
      cards.forEach((c) => c.classList.remove("is-active"));
    }
  });
})();
