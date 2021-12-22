chrome.runtime.onInstalled.addListener(function() {
    chrome.contextMenus.create({
        "title": 'Search Inline Google for "%s"',
        "contexts": ["selection"],
        "id": "myContextMenuId"
    });
});
    
chrome.contextMenus.onClicked.addListener(function(info, tab) {
    chrome.tabs.create({  
        url: "http://www.google.com/search?q=" + encodeURIComponent(info.selectionText)
    });
})
