const abrirMenuBtn = document.getElementById("abrirMenu");
const nav = document.getElementById("nav");

abrirMenuBtn.addEventListener("click", () => {
  nav.classList.toggle("active");         
  abrirMenuBtn.classList.toggle("open");   
});

document.addEventListener("click", (event) => {
  if (!nav.contains(event.target) && !abrirMenuBtn.contains(event.target)) {
    nav.classList.remove("active");         
    abrirMenuBtn.classList.remove("open");  
  }
});