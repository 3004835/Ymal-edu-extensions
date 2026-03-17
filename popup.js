document.addEventListener('DOMContentLoaded', async function() {
  const statusMessage = document.getElementById('statusMessage');
  const timerDisplay = document.getElementById('timerDisplay');
  
  // Check current unblock status
  async function updateStatus() {
    const result = await chrome.storage.local.get(['unblockUntil']);
    if (result.unblockUntil && Date.now() < result.unblockUntil) {
      const timeLeft = Math.round((result.unblockUntil - Date.now()) / 1000 / 60);
      statusMessage.textContent = `✅ Sites temporarily unblocked (${timeLeft} minutes remaining)`;
      statusMessage.style.color = '#4caf50';
      
      // Update timer
      const expiryDate = new Date(result.unblockUntil);
      timerDisplay.textContent = `Unblock expires at: ${expiryDate.toLocaleTimeString()}`;
    } else {
      statusMessage.textContent = '🔒 Blocking active';
      statusMessage.style.color = '#f44336';
      timerDisplay.textContent = '';
      
      // Clear expired unblock
      if (result.unblockUntil) {
        await chrome.storage.local.remove('unblockUntil');
      }
    }
  }
  
  await updateStatus();
  
  // Handle unblock button click
  document.getElementById('popupUnblockBtn').addEventListener('click', async function() {
    const password = document.getElementById('popupPassword').value;
    const errorMsg = document.getElementById('popupErrorMessage');
    
    if (password === 'unblock123') {
      const unblockUntil = Date.now() + (60 * 60 * 1000);
      await chrome.storage.local.set({ unblockUntil });
      await updateStatus();
      document.getElementById('popupPassword').value = '';
      errorMsg.textContent = '';
      
      // Close popup after successful unblock
      setTimeout(() => {
        window.close();
      }, 1500);
    } else {
      errorMsg.textContent = 'Incorrect password';
      document.getElementById('popupPassword').value = '';
    }
  });
});
