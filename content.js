let DEFAULT_TIMEOUT_INTERVAL = 10000;

setTimeout(function() {
    chrome.runtime.sendMessage({}, function() {});
}, DEFAULT_TIMEOUT_INTERVAL);