$(document).ready(function() {
// Add HTML to document (yes, it's ugly)
$("h1").before('<div id="typo" style="position:fixed;top:5px;left:5px"><button name="send" type="submit" value="Send Typo" id="sendTypo" style="width:100px;height:33px;font:inherit;background:white;color:rgb(10,10,10);border: 1px solid rgb(10,10,10);border-radius:3px;-webkit-border-radius:3px;">Send Typo</button></div>');

// Hide button
$("#typo").fadeOut(250);
// Catching selection of text to display send button
$("p").mouseup(function() {
    if (window.getSelection) {
        $("#typo").fadeIn(1500);
    }
});

$("p").mouseup(function() {
    if (!window.getSelection) {
        $("#typo").fadeOut(3000);
    }
});
// The function to send the typo in an email
$("#sendTypo").click(function() {
    var selectedText = String(window.getSelection());
    if (selectedText == "") {
        alert("Please select your typo first.");
    }
    else {
        var recipient = "contact@kellenfujimoto.com";
        var subject = "I%20found%20a%20correction";
        var typo = selectedText.replace(" ","%20");
        var location = document.URL;
        var body = "Here's%20the%20typo%20I've%20found:%20"+typo+". Found at "+location;
        window.open("mailto:"+recipient+"?subject="+subject+"&body="+body);
    }
});
});