chrome.runtime.onInstalled.addListener(function() {
    chrome.contextMenus.create({
        title: 'Search Inline Google for "%s"',
        contexts: ["selection"],
        id: "myContextMenuId"
    });
});

chrome.contextMenus.onClicked.addListener(function(info, tab) {
    chrome.tabs.create({  
        url: "http://www.google.com/search?q=" + encodeURIComponent(info.selectionText)
    });

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
//     chrome.tabs.sendMessage(tab.id,"toggle");
//     console.log('message sent');
// });

// var tab = chrome.tabs.get()

function injectedIframe() {
    console.log("injecting iframe")
    var iframe = document.createElement('iframe'); 
    console.log(iframe)
    console.log("after iframe")
    iframe.style.background = "green";
    iframe.style.height = "100%";
    iframe.style.width = "0px";
    iframe.style.position = "fixed";
    iframe.style.top = "0px";
    iframe.style.right = "0px";
    iframe.style.zIndex = "9000000000000000000";
    iframe.style.border = "0px"; 
    iframe.src = chrome.runtime.getURL("/popup/popup.html")

    document.body.appendChild(iframe);
}

function toggle() {
    console.log("toggle");
    if(iframe.style.width == "0px"){
        iframe.style.width="400px";
    }
    else{
        iframe.style.width="0px";
    }
}

chrome.runtime.onMessage.addListener(function(msg, sender){
    if(msg == "pageActionClicked"){
        chrome.tabs.query({
            active: true,
            currentWindow:true
        }, function(tabs) {
            var currentTab = tabs[0];
            if (currentTab) {
                chrome.scripting.executeScript({
                    target: {tab: currentTab.id, allFrames: true},
                    func: injectedIframe
                });
            }
        });
        // chrome.scripting.executeScript({
        //     target: {tab: tab.id, allFrames: true},
        //     func: injectedIframe
        // });

        console.log("message received, about to toggle");
        toggle();
    }
});
