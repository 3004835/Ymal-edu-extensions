// List of AI websites to block
const AI_WEBSITES = [
  '*://*.chat.openai.com/*',
  '*://*.openai.com/*',
  '*://*.claude.ai/*',
  '*://*.anthropic.com/*',
  '*://*.bard.google.com/*',
  '*://*.gemini.google.com/*',
  '*://*.deepseek.com/*',
  '*://*.chat.deepseek.com/*',
  '*://*.midjourney.com/*',
  '*://*.stability.ai/*',
  '*://*.huggingface.co/*',
  '*://*.perplexity.ai/*',
  '*://*.you.com/*',
  '*://*.copy.ai/*',
  '*://*.jasper.ai/*',
  '*://*.writesonic.com/*',
  '*://*.character.ai/*',
  '*://*.replika.com/*',
  '*://*.poe.com/*'
];

// Google Docs/Sheets/Slides patterns
const GOOGLE_PRODUCTS = [
  '*://docs.google.com/document/*',
  '*://docs.google.com/spreadsheets/*',
  '*://docs.google.com/presentation/*',
  '*://docs.google.com/*/document/*',
  '*://docs.google.com/*/spreadsheets/*',
  '*://docs.google.com/*/presentation/*'
];

// Combine all blocked sites
const BLOCKED_SITES = [...AI_WEBSITES, ...GOOGLE_PRODUCTS];

// Check if site is blocked
function isSiteBlocked(url) {
  return BLOCKED_SITES.some(pattern => {
    const regexPattern = pattern
      .replace(/\*/g, '.*')
      .replace(/\./g, '\\.');
    const regex = new RegExp(`^${regexPattern}$`);
    return regex.test(url);
  });
}

// Check if temporary unblock is active
async function isTemporarilyUnblocked() {
  const result = await chrome.storage.local.get(['unblockUntil']);
  if (result.unblockUntil && Date.now() < result.unblockUntil) {
    return true;
  }
  // Clear expired unblock
  if (result.unblockUntil && Date.now() >= result.unblockUntil) {
    await chrome.storage.local.remove('unblockUntil');
  }
  return false;
}

// Handle navigation
chrome.webNavigation.onBeforeNavigate.addListener(async (details) => {
  // Only check main frames
  if (details.frameId !== 0) return;
  
  const url = details.url;
  
  // Skip if it's our blocked page
  if (url.includes(chrome.runtime.getURL('blocked.html'))) return;
  
  // Check if temporarily unblocked
  const unblocked = await isTemporarilyUnblocked();
  if (unblocked) return;
  
  // Check if site should be blocked
  if (isSiteBlocked(url)) {
    // Get the hostname for display
    const urlObj = new URL(url);
    const siteName = urlObj.hostname;
    
    // Redirect to blocked page
    chrome.tabs.update(details.tabId, {
      url: chrome.runtime.getURL(`blocked.html?site=${encodeURIComponent(siteName)}`)
    });
  }
}, { url: [{ schemes: ['http', 'https'] }] });
