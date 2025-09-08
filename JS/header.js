const abrirMenuBtn = document.getElementById("abrirMenu");
const nav = document.getElementById("nav");

// Función para abrir y cerrar el menú lateral al hacer clic en el botón
abrirMenuBtn.addEventListener("click", () => {
  nav.classList.toggle("active"); // Alterna la clase 'active' para mostrar/ocultar el menú
});

// Cerrar el menú si el usuario hace clic fuera de él
document.addEventListener("click", (event) => {
  if (!nav.contains(event.target) && !abrirMenuBtn.contains(event.target)) {
    nav.classList.remove("active"); // Cierra el menú si se hace clic fuera
  }
});