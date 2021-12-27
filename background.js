chrome.runtime.onInstalled.addListener(function() {
    console.log("onInstalled");

    chrome.contextMenus.create({
        title: 'Search Inline Google for "%s"',
        contexts: ["selection"],
        id: "myContextMenuId"
    });
});

chrome.contextMenus.onClicked.addListener(function(info, tab) {
    chrome.tabs.create({
        url: "http://www.google.com/search?q=" + encodeURIComponent(info.selectionText)
    }, function () {
        console.log("Google search for '" + info.selectionText + "' completed");
    });

    chrome.tabs.sendMessage(tab.id, "contextMenuClicked");
    console.log("Message sent");

    // chrome.action.setBadgeText({
    //     text: "OFF"
    // });

    // search for hardcoded text
    // chrome.search.query({
    //     disposition: "CURRENT_TAB",
    //     text: "%s"
    // });

    // opens inline
});

// chrome.action.onClicked.addListener(tab => {
//     chrome.tabs.sendMessage(tab.id, "pageActionClicked");
//     console.log('message sent');
// });
