document.addEventListener('DOMContentLoaded', function () {

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
        document.getElementById("content").style.display = "none";
        document.getElementById("contact").style.display = "block";
        document.getElementById("contact").style.opacity = 1;
    });

    document.getElementById("close").addEventListener("click", function () {
        document.getElementById("content").style.display = "block";
        document.getElementById("contact").style.display = "none";
        document.getElementById("contact").style.opacity = 0;
    });

    document.getElementById("close").addEventListener("click", function () {
        this.parentNode.style.display = 'none';
        this.parentNode.style.opacity = 0;
    });

});
