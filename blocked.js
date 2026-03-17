document.addEventListener('DOMContentLoaded', function() {
  // Get the blocked site from URL parameters
  const urlParams = new URLSearchParams(window.location.search);
  const blockedSite = urlParams.get('site') || 'Unknown site';
  
  // Display the blocked site
  document.getElementById('blockedSite').textContent = blockedSite;
  
  // Handle unblock button click
  document.getElementById('unblockBtn').addEventListener('click', async function() {
    const password = document.getElementById('passwordInput').value;
    const errorMsg = document.getElementById('errorMessage');
    
    // Check password (you can change this to your desired password)
    if (password === 'unblock123') {
      // Set temporary unblock for 1 hour
      const unblockUntil = Date.now() + (60 * 60 * 1000); // 1 hour in milliseconds
      await chrome.storage.local.set({ unblockUntil });
      
      // Redirect to the previously attempted site
      const previousSite = 'https://' + blockedSite;
      window.location.href = previousSite;
    } else {
      errorMsg.textContent = 'Incorrect password. Please try again.';
      document.getElementById('passwordInput').value = '';
    }
  });
  
  // Allow pressing Enter to submit
  document.getElementById('passwordInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
      document.getElementById('unblockBtn').click();
    }
  });
});
