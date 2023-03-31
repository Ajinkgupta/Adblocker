const defaultFilters = [
    "*://*.doubleclick.net/*",
    "*://partner.googleadservices.com/*",
    "*://*.googlesyndication.com/*",
    "*://*.google-analytics.com/*",
    "*://creative.ak.fbcdn.net/*",
    "*://*.adbrite.com/*",
    "*://*.exponential.com/*",
    "*://*.quantserve.com/*",
    "*://*.scorecardresearch.com/*",
    "*://*.zedo.com/*",
    "*://*.googletagmanager.com/*",
    "*://*.pubmatic.com/*",
    "*://*.openx.net/*",
    "*://*.criteo.net/*",
    "*://*.rubiconproject.com/*",
    "*://*.appnexus.com/*",
];

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
        console.log("Blocked request to " + details.url);
        return { cancel: true };
    },
    { urls: defaultFilters },
    ["blocking"]
);