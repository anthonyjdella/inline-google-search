document.addEventListener('DOMContentLoaded', function () {

    console.log("dom loaded")

    document.getElementById("settings").addEventListener("click", function () {
        if (chrome.runtime.openOptionsPage) {
            chrome.runtime.openOptionsPage();
        }
        else {
            window.open(chrome.runtime.getURL("/options/options.html"))
        }
    });

    document.getElementById("author").addEventListener("click", function () {
        chrome.tabs.create({
            url: "https://www.anthonydellavecchia.com"
        });
    });

    document.getElementById("about").addEventListener("click", function () {
        document.getElementById("options").style.display = "none";
        document.getElementById("contact").style.display = "block";
        document.getElementById("contact").style.opacity = 1;
    });

    document.getElementById("close").addEventListener("click", function () {
        document.getElementById("options").style.display = "block";
        document.getElementById("contact").style.display = "none";
        document.getElementById("contact").style.opacity = 0;
    });

    document.getElementById("close").addEventListener("click", function () {
        this.parentNode.style.display = 'none';
        this.parentNode.style.opacity = 0;
    });

    // TESTING 
    chrome.runtime.sendMessage("pageActionClicked");
    console.log('message sent');
});
