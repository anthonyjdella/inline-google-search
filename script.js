chrome.runtime.onInstalled.addListener(function() {
    chrome.contextMenus.create({
        title: 'Search Inline Google for "%s"',
        contexts: ["selection"],
        id: "myContextMenuId"
    });
});
    
chrome.contextMenus.onClicked.addListener(function(info, tab) {

    // opens new tab
    chrome.tabs.create({  
        url: "http://www.google.com/search?q=" + encodeURIComponent(info.selectionText)
    });

    chrome.action.setBadgeText({
        text: "OFF"
    });

    // search for hardcoded text
    // chrome.search.query({
    //     disposition: "CURRENT_TAB",
    //     text: "%s"
    // });

    // opens inline
})
