"use strict";
var Aufgabe07;
(function (Aufgabe07) {
    let anzahl = parseInt(localStorage.getItem("anzahlArtikel"));
    let preis = 0;
    let gesamtpreis = document.createElement("p");
    for (let index = 0; index <= anzahl - 1; index++) {
        let newDiv = document.createElement("div");
        document.getElementById("blockWarenkorb").appendChild(newDiv);
        newDiv.id = "div" + index;
        console.log("div" + index);
        let imgElement = document.createElement("img");
        imgElement.src = localStorage.getItem("turbine_bild" + index);
        newDiv.appendChild(imgElement);
        console.log(imgElement);
        let name = document.createElement("p");
        name.innerHTML = localStorage.getItem("turbine_name" + index);
        newDiv.appendChild(name);
        console.log(name);
        let beschreibung = document.createElement("p");
        beschreibung.innerHTML = localStorage.getItem("turbine_beschreibung" + index);
        newDiv.appendChild(beschreibung);
        console.log(beschreibung);
        let preis = document.createElement("p");
        preis.innerHTML = localStorage.getItem("artikel_preis" + index) + "€";
        newDiv.setAttribute("preis", preis.innerHTML);
        newDiv.appendChild(preis);
        console.log(preis);
        let button = document.createElement("button");
        button.innerHTML = "Entfernen";
        button.addEventListener("click", deleteWarenkorb);
        newDiv.appendChild(button);
        preis = preis + parseFloat(preis.innerHTML);
        gesamtpreis.innerHTML = "Gesamtpreis: " + preis.toFixed(0) + "€";
        document.getElementById("cartValue")?.appendChild(gesamtpreis);
    }
    function deleteWarenkorb(_event) {
        let preisFunk = _event.currentTarget.parentElement.getAttribute("preis");
        preis = preis - parseFloat(preisFunk);
        gesamtpreis.innerHTML = "Gesamtpreis" + preis.toFixed(0) + "€";
        (_event.currentTarget.parentElement).remove();
    }
    let deleteButton = document.getElementById("deleteButton");
    deleteButton.addEventListener("click", deleteAll);
    function deleteAll(_event) {
        gesamtpreis.innerHTML = "Gesamtpreis: " + 0 + "€";
        localStorage.clear();
        for (let index = 0; index <= anzahl; index++) {
            document.getElementById("div" + index).remove();
        }
    }
})(Aufgabe07 || (Aufgabe07 = {}));
//# sourceMappingURL=cart.js.map