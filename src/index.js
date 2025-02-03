// ESPERAR A QUE EL DOM CARGUE !E
document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".egg-button"); // OBTENEMOS LOS BOTONES !E
  const timerDisplay = document.getElementById("timer-display"); // ÁREA PARA MOSTRAR TIEMPO !E

  let timerInterval; // VARIABLE PARA GUARDAR INTERVALO !E

  // RECORREMOS CADA BOTÓN PARA ASIGNAR EVENTOS !E
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      // LIMPIAMOS EL INTERVALO ANTERIOR SI EXISTE !E
      clearInterval(timerInterval);

      // OBTENEMOS LOS MINUTOS DEL BOTÓN !E
      const minutes = parseInt(button.dataset.minutes);
      let timeInSeconds = minutes * 60;

      // INICIAMOS UN TEMPORIZADOR QUE SE ACTUALIZA CADA SEGUNDO !E
      timerInterval = setInterval(() => {
        // CALCULAMOS MINUTOS Y SEGUNDOS !E
        const displayMinutes = Math.floor(timeInSeconds / 60);
        const displaySeconds = timeInSeconds % 60;

        // ACTUALIZAMOS EL TEXTO DEL TEMPORIZADOR !E
        timerDisplay.textContent = `TIEMPO RESTANTE: ${displayMinutes}M ${displaySeconds}S`;

        // CUANDO LLEGA A 0, MOSTRAMOS EL MENSAJE FINAL !E
        if (timeInSeconds <= 0) {
          clearInterval(timerInterval);
          timerDisplay.textContent = "¡HUEVOS LISTOS!";
        } else {
          timeInSeconds--;
        }
      }, 1000);
    });
  });
});
