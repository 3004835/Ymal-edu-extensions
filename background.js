const blockedDomains = [
    "chatgpt.com", "openai.com", "claude.ai", "gemini.google.com", 
    "perplexity.ai", "copilot.microsoft.com", "meta.ai"
];

// This blocks the connection before the site even starts loading
chrome.declarativeNetRequest.updateDynamicRules({
    addRules: blockedDomains.map((domain, index) => ({
        id: index + 1,
        priority: 1,
        action: { type: "block" },
        condition: { urlFilter: domain, resourceTypes: ["main_frame"] }
    })),
    removeRuleIds: blockedDomains.map((_, index) => index + 1)
});
