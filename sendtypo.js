/*
"Tyop" Alpha by Kellen Fujimoto (http://kellenfujimoto.com/)

Copyright (c) 2013, Kellen Fujimoto
All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

$(document).ready(function() {
// Add HTML to document (yes, it's ugly)
$("h1").before('<div id="typo" style="position:fixed;top:5px;left:5px"><button name="send" type="submit" value="Send Typo" id="sendTypo" style="padding:1.5em;font:inherit;background:white;color:rgb(10,10,10);border: 1px solid rgb(10,10,10);border-radius:3px;-webkit-border-radius:3px;">Send Feedback</button></div>');

// Hide button
$("#typo").fadeOut(250);
// Catching selection of text to display send button
$("p").mouseup(function() {
    if (window.getSelection() != "") {
        $("#typo").fadeIn(750);
    }
});

$("html").mouseup(function() {
    if (window.getSelection() == "") {
        $("#typo").fadeOut(1750);
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