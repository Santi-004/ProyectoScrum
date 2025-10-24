const tabla = document.querySelector("#tabla tbody");

// Datos predefinidos de cada metodología
const metodologias = {
  Cascada: [
    "Cascada (Waterfall)",
    "Tradicional",
    "Modelo secuencial donde cada fase debe completarse antes de iniciar la siguiente.",
    "Requisitos → Diseño → Implementación → Verificación → Mantenimiento",
    "Baja",
    "Larga",
    "Mediano a grande",
    "Alta (manuales, especificaciones, planes)",
    "Claridad y estructura; fácil control del progreso; ideal para proyectos estables",
    "Poco adaptable; errores tardíos son costosos; escasa retroalimentación del usuario",
    "Cuando los requisitos están bien definidos y no cambiarán."
  ],
  Espiral: [
    "Espiral",
    "Híbrido (Prototipos + Tradicional)",
    "Combina desarrollo iterativo con evaluación continua de riesgos.",
    "Identificación → Evaluación de riesgos → Desarrollo → Prueba → Planificación",
    "Media-Alta",
    "Media a larga",
    "Mediano a grande",
    "Alta",
    "Permite manejar riesgos y ajustar objetivos durante el desarrollo",
    "Complejo y costoso; requiere experiencia y gestión de riesgos",
    "Proyectos grandes o críticos donde la seguridad o fiabilidad es clave (como sistemas bancarios o aeroespaciales)."
  ],
  Prototipos: [
    "Prototipos",
    "Ágil",
    "Crea versiones preliminares del producto para validar requerimientos con el usuario.",
    "Análisis → Diseño → Creación de prototipo → Evaluación → Refinamiento",
    "Alta",
    "Corta a media",
    "Pequeño a mediano",
    "Media",
    "Aumenta la satisfacción del cliente; permite detectar errores temprano",
    "El prototipo puede generar confusión o no ser reutilizable",
    "Cuando los requisitos no están claros o el cliente necesita visualizar el producto."
  ],
  RUP: [
    "RUP (Rational Unified Process)",
    "Híbrido orientado a objetos",
    "Marco metodológico adaptable basado en fases iterativas.",
    "Inicio → Elaboración → Construcción → Transición",
    "Media",
    "Media",
    "Mediano a grande",
    "Alta",
    "Enfoque sistemático; mejora la calidad y trazabilidad",
    "Complejidad en su aplicación; requiere personal especializado",
    "Proyectos corporativos con múltiples equipos y roles definidos."
  ],
  Incremental: [
    "Incremental",
    "Ágil",
    "Desarrolla el sistema en partes (incrementos) funcionales y entregables.",
    "Planificación → Análisis → Diseño → Implementación → Pruebas → Entrega",
    "Alta",
    "Variable (iterativa)",
    "Pequeño a mediano",
    "Media",
    "Entregas tempranas; retroalimentación constante; mejor manejo del cambio",
    "Puede generar integración compleja entre módulos",
    "Cuando se requiere entregar funcionalidades parciales de forma rápida."
  ],
  Interactivo: [
    "Modelo Interactivo",
    "Ágil / Colaborativo",
    "Favorece la interacción constante entre desarrollador y usuario con entregas frecuentes.",
    "Planificación → Diseño → Implementación → Pruebas → Evaluación",
    "Alta",
    "Media",
    "Mediano",
    "Media",
    "Mejora continua del producto; gran participación del usuario",
    "Exige comunicación constante; requiere tiempo de los usuarios",
    "Ideal para proyectos donde la colaboración cliente-desarrollador es esencial."
  ],
  Evolutivo: [
    "Modelo Evolutivo",
    "Ágil",
    "Crea versiones funcionales que se van refinando hasta alcanzar la versión final.",
    "Desarrollo inicial → Pruebas → Retroalimentación → Versiones mejoradas",
    "Alta",
    "Variable",
    "Pequeño a mediano",
    "Baja",
    "Gran adaptabilidad; útil cuando el producto evoluciona según el mercado",
    "Puede derivar en un proyecto interminable si no se fijan límites",
    "Cuando se requiere adaptarse a requisitos cambiantes o exploratorios."
  ],
  RAD: [
    "DRA (Desarrollo Rápido de Aplicaciones / RAD)",
    "Ágil",
    "Prioriza la velocidad de desarrollo mediante prototipos rápidos y participación del usuario.",
    "Planificación → Diseño del sistema → Construcción → Transición",
    "Alta",
    "Corta",
    "Pequeño",
    "Baja a Media",
    "Entregas rápidas; se adapta al cambio; fomenta la productividad",
    "No apta para proyectos grandes o distribuidos; requiere usuarios disponibles",
    "Ideal para sistemas pequeños o medianos con plazos cortos."
  ],
  V: [
    "Modelo en V",
    "Tradicional",
    "Extiende el modelo en cascada agregando validación y verificación paralelas.",
    "Requisitos ↔ Pruebas de aceptación; Diseño ↔ Pruebas unitarias",
    "Baja",
    "Larga",
    "Mediano a grande",
    "Alta",
    "Alta calidad y trazabilidad; pruebas planificadas desde el inicio",
    "Poca flexibilidad; costos altos ante cambios tardíos",
    "Cuando la calidad y la validación son prioridades (sistemas médicos, industriales)."
  ],
  Componentes: [
    "Por Componentes",
    "Híbrido",
    "Basado en ensamblar y reutilizar componentes preexistentes de software.",
    "Análisis → Diseño → Integración → Pruebas → Implementación",
    "Media-Alta",
    "Variable",
    "Mediano a grande",
    "Media",
    "Reutilización de código; reduce tiempo y costos; favorece la modularidad",
    "Requiere componentes compatibles y bien documentados",
    "En entornos donde se pueden reutilizar módulos o librerías comunes."
  ]
};

// Objeto para guardar filas existentes
const filasActuales = {};

// Función para agregar o eliminar una fila
function toggleFila(nombreKey) {
  if (filasActuales[nombreKey]) {
    // Si ya existe, eliminar fila
    filasActuales[nombreKey].remove();
    delete filasActuales[nombreKey];
  } else {
    // Agregar fila
    const fila = document.createElement("tr");
    metodologias[nombreKey].forEach(dato => {
      const celda = document.createElement("td");
      celda.textContent = dato;
      fila.appendChild(celda);
    });
    tabla.appendChild(fila);
    filasActuales[nombreKey] = fila;
  }
}

// Asignar eventos a los botones
document.getElementById("btnCascada").onclick = () => toggleFila("Cascada");
document.getElementById("btnEspiral").onclick = () => toggleFila("Espiral");
document.getElementById("btnPrototipos").onclick = () => toggleFila("Prototipos");
document.getElementById("btnRUP").onclick = () => toggleFila("RUP");
document.getElementById("btnIncremental").onclick = () => toggleFila("Incremental");
document.getElementById("btnInteractivo").onclick = () => toggleFila("Interactivo");
document.getElementById("btnEvolutivo").onclick = () => toggleFila("Evolutivo");
document.getElementById("btnRAD").onclick = () => toggleFila("RAD");
document.getElementById("btnV").onclick = () => toggleFila("V");
document.getElementById("btnComponentes").onclick = () => toggleFila("Componentes");

// Botón para reiniciar toda la tabla
const btnReiniciar = document.createElement("button");
btnReiniciar.textContent = "Reiniciar Tabla";
btnReiniciar.style.marginLeft = "10px";
btnReiniciar.style.backgroundColor = "#ef233c";
btnReiniciar.style.color = "white";
btnReiniciar.style.padding = "8px 12px";
btnReiniciar.style.border = "none";
btnReiniciar.style.borderRadius = "5px";
btnReiniciar.style.cursor = "pointer";

btnReiniciar.onclick = () => {
  tabla.innerHTML = "";
  for (let key in filasActuales) delete filasActuales[key];
};

document.querySelector(".botones").appendChild(btnReiniciar);
