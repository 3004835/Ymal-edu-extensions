// Immediately stop the page from loading AI content
window.stop();

const iconUrl = chrome.runtime.getURL("icon.png");

// Replace the favicon with your Ymal Edu icon
function updateFavicon() {
    const head = document.head || document.getElementsByTagName('head')[0];
    const existingIcons = document.querySelectorAll('link[rel~="icon"]');
    existingIcons.forEach(icon => icon.remove());

    const newIcon = document.createElement('link');
    newIcon.type = 'image/png';
    newIcon.rel = 'icon';
    newIcon.href = iconUrl;
    head.appendChild(newIcon);
}

// Create the Blocked UI
const blockPage = `
<!DOCTYPE html>
<html>
<head>
    <title>Ymal Edu - Access Blocked</title>
    <style>
        body {
            background-color: #0f172a;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
            color: white;
            overflow: hidden;
        }
        .container {
            text-align: center;
            background: rgba(30, 41, 59, 0.7);
            padding: 3rem;
            border-radius: 24px;
            border: 1px solid rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(12px);
            box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
            max-width: 450px;
            width: 90%;
            animation: fadeIn 0.5s ease-out;
        }
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }
        .logo {
            width: 100px;
            height: 100px;
            margin-bottom: 1.5rem;
            border-radius: 20px;
            object-fit: cover;
            box-shadow: 0 0 20px rgba(255, 107, 107, 0.3);
        }
        h1 {
            color: #ef4444;
            font-size: 2rem;
            margin-bottom: 1rem;
            font-weight: 800;
            text-transform: uppercase;
            letter-spacing: -0.025em;
        }
        p {
            color: #94a3b8;
            font-size: 1.1rem;
            line-height: 1.6;
            margin-bottom: 2rem;
        }
        .brand-badge {
            background: #ef4444;
            color: white;
            padding: 8px 16px;
            border-radius: 100px;
            font-size: 0.8rem;
            font-weight: 700;
            display: inline-block;
            letter-spacing: 0.05em;
        }
    </style>
</head>
<body>
    <div class="container">
        <img src="${iconUrl}" class="logo" alt="Ymal Edu">
        <h1>Access Blocked!</h1>
        <p>"You're not allowed to use AI in any time."</p>
        <div class="brand-badge">YMAL.SPACE EDU SYSTEM</div>
    </div>
</body>
</html>
`;

// Inject the block page and favicon
document.documentElement.innerHTML = blockPage;
updateFavicon();

// Observer to make sure some websites don't try to change the favicon back
const observer = new MutationObserver(updateFavicon);
observer.observe(document.head, { childList: true });
