// 1. Kill the original page request immediately
window.stop();

const iconUrl = chrome.runtime.getURL("icon.png");
const blockHTML = `
<div class="container">
    <img src="${iconUrl}" class="logo">
    <h1>Access Blocked!</h1>
    <p>You're not allowed to use AI in any time.</p>
    <div class="brand">YMAL.SPACE EDU SYSTEM</div>
</div>`;

const blockCSS = `
<style>
    html, body { 
        background-color: #0f172a !important; 
        margin: 0 !important; 
        height: 100vh !important; 
        display: flex !important; 
        justify-content: center !important; 
        align-items: center !important; 
        font-family: sans-serif !important;
        overflow: hidden !important;
    }
    .container { 
        text-align: center; 
        background: #1e293b !important; 
        padding: 50px !important; 
        border-radius: 24px !important; 
        border: 2px solid #ef4444 !important; 
        box-shadow: 0 20px 50px rgba(0,0,0,0.5) !important;
        max-width: 450px;
    }
    .logo { width: 120px; height: 120px; border-radius: 20px; margin-bottom: 20px; }
    h1 { color: #ef4444 !important; font-size: 32px !important; margin: 0 0 10px 0 !important; }
    p { color: #f8fafc !important; font-size: 18px !important; }
    .brand { background: #ef4444 !important; color: white !important; padding: 8px 20px !important; border-radius: 50px !important; font-weight: bold !important; margin-top: 20px; display: inline-block; }
</style>`;

// 2. Wipe and Rewrite
function enforceBlock() {
    document.documentElement.innerHTML = `<head>${blockCSS}<title>Ymal Edu - Blocked</title></head><body>${blockHTML}</body>`;
    
    // Set Favicon
    let link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/png';
    link.rel = 'shortcut icon';
    link.href = iconUrl;
    document.head.appendChild(link);
}

// Initial execution
enforceBlock();

// 3. The "Anti-Bypass" Observer
// This triggers if the website's background scripts try to clear the screen
const observer = new MutationObserver(() => {
    if (!document.querySelector('.brand')) {
        enforceBlock();
    }
});

observer.observe(document.documentElement, { childList: true, subtree: true });
