if (window.top === window.self) {
    const iconUrl = chrome.runtime.getURL("icon.png");
    
    document.documentElement.innerHTML = `
    <html>
    <head>
        <title>Ymal Edu | Blocked</title>
        <style>
            :root { --primary: #ef4444; --bg: #030712; }
            body {
                background: var(--bg);
                background-image: 
                    radial-gradient(at 0% 0%, rgba(239, 68, 68, 0.15) 0px, transparent 50%),
                    radial-gradient(at 100% 100%, rgba(30, 64, 175, 0.15) 0px, transparent 50%);
                height: 100vh; margin: 0; display: flex; align-items: center; justify-content: center;
                font-family: 'Inter', system-ui, -apple-system, sans-serif;
                color: white; overflow: hidden;
            }
            .glass-card {
                background: rgba(255, 255, 255, 0.03);
                backdrop-filter: blur(20px);
                -webkit-backdrop-filter: blur(20px);
                border: 1px solid rgba(255, 255, 255, 0.1);
                border-radius: 32px;
                padding: 60px 40px;
                text-align: center;
                box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
                max-width: 480px; width: 90%;
                animation: slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1);
            }
            @keyframes slideUp {
                from { opacity: 0; transform: translateY(30px); }
                to { opacity: 1; transform: translateY(0); }
            }
            .logo {
                width: 100px; height: 100px;
                border-radius: 24px; margin-bottom: 30px;
                box-shadow: 0 0 30px rgba(239, 68, 68, 0.2);
                object-fit: contain;
            }
            h1 { font-size: 2.5rem; font-weight: 800; margin: 0; letter-spacing: -0.02em; }
            p { color: #94a3b8; font-size: 1.1rem; margin: 20px 0 40px; line-height: 1.6; }
            .badge {
                display: inline-flex; align-items: center;
                background: rgba(239, 68, 68, 0.1);
                color: var(--primary);
                padding: 8px 20px; border-radius: 100px;
                font-size: 0.875rem; font-weight: 700; text-transform: uppercase;
                border: 1px solid rgba(239, 68, 68, 0.2);
            }
        </style>
    </head>
    <body>
        <div class="glass-card">
            <img src="${iconUrl}" class="logo" onerror="this.src='https://ymal.space/favicon.ico'">
            <h1>Access Denied</h1>
            <p>"You're not allowed to use AI at any time."</p>
            <div class="badge">YMAL.SPACE EDU SYSTEM</div>
        </div>
    </body>
    </html>`;

    // Force update the tab favicon
    const link = document.createElement('link');
    link.rel = 'icon';
    link.href = iconUrl;
    document.head.appendChild(link);
}
