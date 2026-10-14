function aplicarTema() {
  const raiz = document.documentElement;
  const guardado = localStorage.getItem("tema");
  const prefiereOscuro = window.matchMedia(
    "(prefers-color-scheme: dark)",
  ).matches;

  if (guardado === "oscuro" || (guardado === null && prefiereOscuro)) {
    raiz.setAttribute("data-theme", "dark");
  } else {
    raiz.setAttribute("data-theme", "light");
  }

  const boton = document.getElementById("cambiar-tema");
  if (boton && !boton.dataset.bound) {
    boton.dataset.bound = "1";
    boton.addEventListener("click", () => {
      const actual = raiz.getAttribute("data-theme");
      const nuevo = actual === "dark" ? "light" : "dark";
      raiz.setAttribute("data-theme", nuevo);
      localStorage.setItem("tema", nuevo === "dark" ? "oscuro" : "claro");
    });
  }
}
