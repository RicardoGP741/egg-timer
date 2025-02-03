(function() {
    const queryParams = new URLSearchParams(window.location.search);
    const minutes = parseInt(queryParams.get('time')) || 3;
    let totalSeconds = minutes * 60;
  
    const timerDisplay = document.getElementById('timer-display');
    const cancelBtn = document.getElementById('cancel-btn');
  
    const interval = setInterval(() => {
      const min = Math.floor(totalSeconds / 60);
      const sec = totalSeconds % 60;
      timerDisplay.textContent = `${String(min).padStart(2,'0')}:${String(sec).padStart(2,'0')}`;
      if (totalSeconds <= 0) {
        clearInterval(interval);
        window.location.href = 'done.html';
      } else {
        totalSeconds--;
      }
    }, 1000);
  
    cancelBtn.addEventListener('click', () => {
      clearInterval(interval);
      window.location.href = 'select.html';
    });
  })();
  