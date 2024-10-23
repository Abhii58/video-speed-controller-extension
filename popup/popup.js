document.addEventListener('DOMContentLoaded', () => {
    if (typeof chrome === 'undefined' || typeof chrome.storage === 'undefined') {
      console.error('Chrome storage API is not available.');
      return;
    }
  
    const applySpeedButton = document.getElementById('applySpeed');
    const speedInput = document.getElementById('speedInput');
  
    applySpeedButton.addEventListener('click', () => {
      const speed = parseFloat(speedInput.value);
      
      if (isNaN(speed) || speed <= 0) {
        console.error('Invalid speed value:', speedInput.value);
        return;
      }
  
      chrome.storage.local.set({ videoSpeed: speed }, () => {
        console.log('Speed saved:', speed);
      });
    });
  });
  