const boton = document.getElementById("boton");
const sliderWrapper = document.getElementById("slider-wrapper");
const track = document.getElementById("track");
const slides = document.querySelectorAll(".slide");
const siguiente = document.getElementById("siguiente");
const anterior = document.getElementById("anterior");

let index = 0;

function actualizar() {
  track.style.transform = `translateX(-${index * 100}%)`;
}

boton.addEventListener("click", () => {
  const activo = sliderWrapper.classList.toggle("activo");
  boton.textContent = activo
    ? "Ocultar mis juegos favoritos"
    : "Mostrar mis juegos favoritos";

  // Reinicia al primer slide al abrir
  if (activo) {
    index = 0;
    actualizar();
  }
});

siguiente.addEventListener("click", () => {
  index = (index + 1) % slides.length;
  actualizar();
});

anterior.addEventListener("click", () => {
  index = (index - 1 + slides.length) % slides.length;
  actualizar();
});
