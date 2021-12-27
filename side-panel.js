// debugger;
console.log("side-panel script loaded");

chrome.runtime.onMessage.addListener(function (msg, sender) {
    if (msg == "contextMenuClicked") {
        console.log("Message received");
        toggle();
    }
});

function toggle() {
    console.log("Toggling");
    if (iframe.style.width == "0px") {
        iframe.style.width = "400px";
    } else {
        iframe.style.width = "0px";
    }
}

var iframe = document.createElement('sidePanel'); 
iframe.style.background = "green";
iframe.style.height = "100%";
iframe.style.width = "0px";
iframe.style.position = "fixed";
iframe.style.top = "0px";
iframe.style.right = "0px";
iframe.style.zIndex = "9000000000000000000";
iframe.style.border = "0px"; 
iframe.src = chrome.runtime.getURL("/popup/popup.html")
console.log("relative path::::::")
console.log(chrome.runtime.getURL("/popup/popup.html"))

document.body.appendChild(iframe);
