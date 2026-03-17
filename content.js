// Block everything before it loads
window.stop();

const iconUrl = chrome.runtime.getURL("icon.png");

// Aggressive Favicon replacement
function applyYmalBranding() {
    // 1. Change Title
    document.title = "Ymal Edu - Access Blocked";

    // 2. Change Favicon
    let link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/png';
    link.rel = 'shortcut icon';
    link.href = iconUrl;
    document.getElementsByTagName('head')[0].appendChild(link);
}

// Write the new UI to the document
document.write(`
<!DOCTYPE html>
<html>
<head>
    <title>Ymal Edu - Access Blocked</title>
    <style>
        html, body {
            background-color: #0f172a !important;
            height: 100% !important;
            width: 100% !important;
            margin: 0 !important;
            padding: 0 !important;
            display: flex !important;
            justify-content: center !important;
            align-items: center !important;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif !important;
            overflow: hidden !important;
        }
        .container {
            text-align: center;
            background: rgba(30, 41, 59, 0.9) !important;
            padding: 50px !important;
            border-radius: 24px !important;
            border: 2px solid #ef4444 !important;
            box-shadow: 0 0 40px rgba(0, 0, 0, 0.8) !important;
            max-width: 500px;
            width: 90%;
        }
        .logo {
            width: 120px !important;
            height: 120px !important;
            margin-bottom: 20px !important;
            border-radius: 20px !important;
        }
        h1 {
            color: #ef4444 !important;
            font-size: 32px !important;
            margin: 0 0 10px 0 !important;
            text-transform: uppercase !important;
        }
        p {
            color: #ffffff !important;
            font-size: 20px !important;
            margin-bottom: 30px !important;
        }
        .brand {
            background: #ef4444 !important;
            color: white !important;
            padding: 10px 20px !important;
            border-radius: 50px !important;
            font-weight: bold !important;
            display: inline-block !important;
        }
    </style>
</head>
<body>
    <div class="container">
        <img src="${iconUrl}" class="logo">
        <h1>Access Blocked!</h1>
        <p>"You're not allowed to use AI in any time."</p>
        <div class="brand">YMAL.SPACE EDU SYSTEM</div>
    </div>
</body>
</html>
`);

document.close();
applyYmalBranding();

// Persistence: Watch for sites that try to revert the icon
const observer = new MutationObserver(applyYmalBranding);
observer.observe(document.documentElement, { childList: true, subtree: true });
