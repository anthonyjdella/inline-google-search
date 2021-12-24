document.addEventListener("DOMContentLoaded", function() {

    function getSaved() {
        chrome.storage.local.get(["key"], function(result) {
            console.log("Value currently is " + result.key);
            if (result.key == undefined) {
                chrome.storage.local.set({
                    key: "U"
                }, function () {
                    console.log("Value currently is " + result.key);
                });
            } else {
                document.getElementById("key").value = result.key;
            }
        });
    }

    getSaved();

    document.getElementById("save").addEventListener("click", function() {
        var keyBind = document.getElementById("key").value;
        chrome.storage.local.set({
            key: keyBind
        }, function () {
            console.log("Value is set to " + keyBind);
            successAlert("Settings saved!");
        });
    });

    document.getElementById('restore').addEventListener("click", function() {
        document.getElementById("key").value = "U";
        chrome.storage.local.set({
            key: "U"
        }, function () {
            console.log("Value is restored to " + key.value);
            successAlert("Default setting restored!");
        });
    });

    function successAlert(msg) {
        document.getElementById("success").style.display = "block";
        document.getElementById("success").style.opacity = "1";
        document.getElementById("successMsg").innerText = msg;
    }

    var closeButton = document.getElementsByClassName("closeButton");
    for (let i = 0; i < closeButton.length; i++) {
        closeButton[i].addEventListener("click", function() {
            var div = this.parentNode;
            div.style.opacity = "0"
            setTimeout(function () {
                div.style.display = "none";
            }, 500);
        });
    }

});