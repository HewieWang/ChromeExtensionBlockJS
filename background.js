chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
        var url = details.url;
        if (url.indexOf("saker.js") != -1||url.indexOf("ideafyi.oss-us-west-1.aliyuncs.com/js/blocker.js")!=-1) {
            return {cancel: true};
        }
    },
    {urls: ["<all_urls>"]},
    ["blocking"]
);
