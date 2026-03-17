// Background script for WSIS Clean Browser
chrome.runtime.onInstalled.addListener(() => {
  console.log('West Scranton Intermediate School theme installed');
});

// Function to check if we're in a school environment
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === 'complete') {
    // You can add additional school-specific features here
    console.log('Tab updated:', tab.url);
  }
});
