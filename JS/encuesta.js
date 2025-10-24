function calculateMethodology() {
      let total = 0;
      for (let i = 1; i <= 10; i++) {
        const radios = document.getElementsByName('q' + i);
        for (const radio of radios) {
          if (radio.checked) {
            total += parseInt(radio.value);
          }
        }
      }

      let methodology = "";
      let explanation = "";

      if (total >= 25) {
        methodology = "Modelo en Cascada o Modelo en V";
        explanation = "Requisitos claros y estables, alta criticidad, entregas finales, planificación estricta y documentación completa.";
      } else if (total >= 18) {
        methodology = "Incremental / Iterativo";
        explanation = "Entregas por módulos, algunos cambios posibles, pruebas por fases, adaptable a mejoras graduales.";
      } else if (total >= 10){
        methodology = "Scrum / Kanban / XP";
        explanation = "Requisitos cambiantes, feedback constante, entregas frecuentes, equipos pequeños o medianos, metodologías ágiles.";
      }

      document.getElementById('result').innerHTML = 
        `Metodología recomendada: <strong>${methodology}</strong><br>${explanation}`;
    }