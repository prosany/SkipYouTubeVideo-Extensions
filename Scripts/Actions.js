chrome.action.setBadgeText({ text: "ON" });
chrome.action.setBadgeBackgroundColor({ color: "#4688F1" });
chrome.action.setBadgeTextColor({ color: "#FFFFFF" });
chrome.action.setBadgeIcon({ tabId: -1, path: "icons/icon-48.png" });
chrome.action.setPopup({ popup: "popup.html" });
chrome.action.setIcon({ tabId: -1, path: "icons/icon-48.png" });
chrome.action.setTitle({ tabId: -1, title: "ON" });

chrome.action.onClicked.addListener(function (tab) {
  chrome.action.setTitle({ tabId: tab.id, title: "You are on tab:" + tab.id });
});
