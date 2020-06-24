"use strict";
var Aufgabe09;
(function (Aufgabe09) {
    let formData;
    let buttonHtml = document.getElementById("buttonHtml");
    buttonHtml.addEventListener("click", communicateHTML);
    let buttonJson = document.getElementById("buttonJson");
    buttonJson.addEventListener("click", communicateJSON);
    async function communicateHTML() {
        formData = new FormData(document.forms[0]);
        let url = "https://loginsose2020.herokuapp.com";
        url += "/html";
        let query = new URLSearchParams(formData);
        url = url + "?" + query.toString();
        let response = await fetch(url);
        let responseText = await response.text();
        let serverResponse = document.getElementById("serverResponse");
        serverResponse.innerHTML = responseText;
    }
    async function communicateJSON() {
        formData = new FormData(document.forms[0]);
        let url = "https://loginsose2020.herokuapp.com";
        url += "/json";
        let query = new URLSearchParams(formData);
        url = url + "?" + query.toString();
        let response = await fetch(url);
        let responseText = await response.json();
        console.log(responseText);
    }
})(Aufgabe09 || (Aufgabe09 = {}));
//# sourceMappingURL=script.js.map