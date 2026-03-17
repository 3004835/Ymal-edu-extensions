// West Scranton Intermediate School - Extension Hider
(function() {
  'use strict';
  
  console.log('WSIS Clean Browser loaded');
  
  // Function to aggressively hide extensions
  function hideAllExtensions() {
    // Target all possible extension elements
    const selectors = [
      '[id*="extension"]',
      '[class*="extension"]',
      '[id*="Extension"]', 
      '[class*="Extension"]',
      '[data-extension-id]',
      '[data-extension-name]',
      '[data-extension]',
      '[data-blocksi]',
      '[extension]',
      'extension-item',
      'extension-view',
      'extensions-manager',
      'extensions-toolbar',
      '[role="button"][aria-label*="extension"]',
      '[aria-label*="extension"][role="button"]'
    ];
    
    // Hide all matching elements
    selectors.forEach(selector => {
      document.querySelectorAll(selector).forEach(el => {
        if (!el.closest('#main-content') && !el.closest('.main')) {
          el.style.setProperty('display', 'none', 'important');
          el.style.setProperty('visibility', 'hidden', 'important');
          el.style.setProperty('opacity', '0', 'important');
          el.style.setProperty('pointer-events', 'none', 'important');
          el.style.setProperty('width', '0', 'important');
          el.style.setProperty('height', '0', 'important');
          el.style.setProperty('position', 'absolute', 'important');
          el.style.setProperty('top', '-9999px', 'important');
          el.style.setProperty('left', '-9999px', 'important');
        }
      });
    });
    
    // Specifically target Blocksi
    const blocksiElements = document.querySelectorAll('[class*="blocksi"], [id*="blocksi"], [class*="Blocksi"], [id*="Blocksi"]');
    blocksiElements.forEach(el => {
      el.style.setProperty('opacity', '0.15', 'important');
      el.style.setProperty('transform', 'scale(0.3)', 'important');
      el.style.setProperty('width', '20px', 'important');
      el.style.setProperty('height', '20px', 'important');
      el.style.setProperty('position', 'fixed', 'important');
      el.style.setProperty('bottom', '2px', 'important');
      el.style.setProperty('right', '2px', 'important');
      el.style.setProperty('z-index', '999999', 'important');
      el.style.setProperty('border-radius', '50%', 'important');
      el.style.setProperty('overflow', 'hidden', 'important');
    });
  }
  
  // Function to hide Chrome's extension button
  function hideChromeExtensionButton() {
    // Look for Chrome's extension button
    const possibleButtons = [
      '#extensions-button',
      '#extensions-menu-button', 
      '#unified-extensions-button',
      '#unified-extensions-view',
      '[aria-label="Extensions"]',
      '[tooltip="Extensions"]',
      '[title="Extensions"]'
    ];
    
    possibleButtons.forEach(selector => {
      document.querySelectorAll(selector).forEach(el => {
        el.style.setProperty('display', 'none', 'important');
      });
    });
  }
  
  // Function to inject CSS into the page
  function injectCSS() {
    const style = document.createElement('style');
    style.textContent = `
      /* Additional hiding rules for Chrome UI */
      extensions-manager, extensions-toolbar, extension-view {
        display: none !important;
      }
      
      /* Hide any element that might be an extension */
      [class*="extension"]:not(body):not(html):not(div):not(span),
      [id*="extension"]:not(body):not(html):not(div):not(span) {
        display: none !important;
      }
      
      /* Blocksi specific */
      .blocksi-indicator, .blocksi-overlay, [data-blocksi] {
        opacity: 0.15 !important;
        transform: scale(0.3) !important;
        width: 20px !important;
        height: 20px !important;
        border-radius: 50% !important;
      }
    `;
    document.head.appendChild(style);
  }
  
  // Run immediately
  hideAllExtensions();
  hideChromeExtensionButton();
  injectCSS();
  
  // Create observer to watch for new elements
  const observer = new MutationObserver(function(mutations) {
    let shouldRun = false;
    
    // Check if mutations added new nodes
    for (let mutation of mutations) {
      if (mutation.addedNodes.length > 0) {
        shouldRun = true;
        break;
      }
    }
    
    if (shouldRun) {
      hideAllExtensions();
      hideChromeExtensionButton();
    }
  });
  
  // Start observing
  if (document.body) {
    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ['class', 'id', 'style']
    });
  }
  
  // Also observe document.documentElement for early changes
  observer.observe(document.documentElement, {
    childList: true,
    subtree: true,
    attributes: true
  });
  
  // Run again after page fully loads
  window.addEventListener('load', function() {
    hideAllExtensions();
    hideChromeExtensionButton();
    
    // Keep running periodically
    setInterval(function() {
      hideAllExtensions();
      hideChromeExtensionButton();
    }, 1000);
  });
  
  // Additional cleanup for Chrome's UI
  setTimeout(hideAllExtensions, 500);
  setTimeout(hideAllExtensions, 1000);
  setTimeout(hideAllExtensions, 2000);
  
})();
