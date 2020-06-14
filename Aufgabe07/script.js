"use strict";
/* ctrl + shift + b zum überwachen*/
/* Turbine interface*/
var Aufgabe07;
(function (Aufgabe07) {
    function createTurbine() {
        for (let i = 0; i < Aufgabe07.turbine.length; i++) {
            if (Aufgabe07.turbine[i].category == 1) {
                let newDiv = document.createElement("div");
                newDiv.id = "div" + i;
                document.getElementsByClassName("Produkte").item(0)?.appendChild(newDiv);
                newDiv.setAttribute("index", i.toString());
            }
            if (Aufgabe07.turbine[i].category == 2) {
                let newDiv = document.createElement("div");
                newDiv.id = "div" + i;
                document.getElementsByClassName("Produkte").item(1)?.appendChild(newDiv);
                newDiv.setAttribute("index", i.toString());
            }
            let imgElement = document.createElement("img");
            imgElement.src = Aufgabe07.turbine[i].img;
            document.getElementById("div" + i)?.appendChild(imgElement);
            let name = document.createElement("p");
            name.innerHTML = Aufgabe07.turbine[i].name;
            document.getElementById("div" + i)?.appendChild(name);
            let beschreibung = document.createElement("p");
            beschreibung.innerHTML = Aufgabe07.turbine[i].beschreibung;
            document.getElementById("div" + i)?.appendChild(beschreibung);
            let preis = document.createElement("p");
            preis.innerHTML = Aufgabe07.turbine[i].preis + "€";
            document.getElementById("div" + i)?.appendChild(preis);
            let button = document.createElement("button");
            button.innerHTML = "In den Warenkorb";
            button.addEventListener("click", addWarenkorb);
            document.getElementById("div" + i)?.appendChild(button);
            button.setAttribute("preis", Aufgabe07.turbine[i].preis.toString());
        }
    }
    Aufgabe07.createTurbine = createTurbine;
    let summe = 0;
    let warenkorbcount = 0;
    let einkaufswagenDiv = document.createElement("div");
    let cartTurbine = [];
    function addWarenkorb(_event) {
        if (warenkorbcount >= 0) {
            document.getElementById("itemwatchlist")?.appendChild(einkaufswagenDiv);
        }
        warenkorbcount++;
        einkaufswagenDiv.innerHTML = warenkorbcount + "";
        if (_event.currentTarget?.getAttribute("preis")) {
            summe = summe + parseInt(_event.currentTarget?.getAttribute("preis"));
        }
        console.log("Gesamtsumme (inkl. MwSt.) " + summe.toFixed(0) + "€");
        let indexButton = _event.currentTarget.parentElement.getAttribute("index");
        let indexNr = parseInt(indexButton);
        cartTurbine.push(Aufgabe07.turbine[indexNr]);
        localStorage.setItem("turbine_img" + (cartTurbine.length - 1), Aufgabe07.turbine[indexNr].img);
        localStorage.setItem("turbine_name" + (cartTurbine.length - 1), Aufgabe07.turbine[indexNr].name);
        localStorage.setItem("turbine_beschreibung" + (cartTurbine.length - 1), Aufgabe07.turbine[indexNr].beschreibung);
        localStorage.setItem("turbine_preis" + (cartTurbine.length - 1), Aufgabe07.turbine[indexNr].preis.toString());
        localStorage.setItem("turbineAnzahl", cartTurbine.length.toString());
    }
    let alleItems = document.createElement("a");
    alleItems.id = "home";
    alleItems.innerHTML = "Home";
    alleItems.addEventListener("click", ankerSortierer);
    document.getElementById("home")?.appendChild(alleItems);
    let turbinenItems = document.createElement("a");
    turbinenItems.id = "turbinen";
    turbinenItems.innerHTML = "Turbinen";
    turbinenItems.addEventListener("click", ankerSortierer);
    document.getElementById("turbine")?.appendChild(turbinenItems);
    let süffItems = document.createElement("a");
    süffItems.id = "süff";
    süffItems.innerHTML = "Zutaten";
    süffItems.addEventListener("click", ankerSortierer);
    document.getElementById("süff")?.appendChild(süffItems);
    function ankerSortierer(_event) {
        if (_event.currentTarget.getAttribute("id") == "home") {
            document.getElementById("blockTurbine").style.display = "block";
            document.getElementById("blockSüff").style.display = "block";
        }
        if (_event.currentTarget.getAttribute("id") == "turbinen") {
            document.getElementById("blockTurbine").style.display = "block";
            document.getElementById("blockSüff").style.display = "none";
        }
        if (_event.currentTarget.getAttribute("id") == "süff") {
            document.getElementById("blockTurbine").style.display = "none";
            document.getElementById("blockSüff").style.display = "block";
        }
    }
})(Aufgabe07 || (Aufgabe07 = {}));
//# sourceMappingURL=script.js.map