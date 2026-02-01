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
