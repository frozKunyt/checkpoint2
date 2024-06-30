let clocks = [
    { running: false, time: 0 },
    { running: false, time: 0 }
  ];
  
  function formatTime(seconds) {
    let mm = Math.floor(seconds / 60).toString().padStart(2, '0');
    let ss = (seconds % 60).toString().padStart(2, '0');
    return `${mm}:${ss}`;
  }
  
  function updateClockView(index) {
    const clock = document.getElementsByClassName('clock')[index];
    const clockTime = clock.getElementsByClassName('clock-time')[0];
    clockTime.textContent = formatTime(clocks[index].time);
  }
  
  function startClock(index) {
    if (!clocks[index].running) {
      clocks[index].running = true;
      clocks[index].timer = setInterval(() => {
        clocks[index].time++;
        updateClockView(index);
      }, 1000);
    }
  }
  
  function stopClock(index) {
    if (clocks[index].running) {
      clearInterval(clocks[index].timer);
      clocks[index].running = false;
      clocks[index].time = 0;
      updateClockView(index);
    }
  }
  
  function stopAllClocks() {
    clocks.forEach((clock, index) => {
      if (clock.running) {
        clearInterval(clock.timer);
        clock.running = false;
        clock.time = 0;
        updateClockView(index);
      }
    });
  }
  