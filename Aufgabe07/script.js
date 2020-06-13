"use strict";
/* ctrl + shift + b zum überwachen*/
/* Turbine interface*/
var Aufgabe07;
(function (Aufgabe07) {
    /* Turbine*/
    let artikel1 = { img: "Flugzeugturbine.jpg", name: "Flugzeugturbine ", beschreibung: "Eine Flugzeugturbine", preis: 10, category: 1 };
    let artikel2 = { img: "Windturbine.jpg", name: "Windturbine", beschreibung: "Eine Windturbine", preis: 20, category: 1 };
    let artikel3 = { img: "2Flugzeugturbinen.jpg", name: "2 FLugzeugturbinen Typ A", beschreibung: "Zwei Flugzeugturbins", preis: 50, category: 1 };
    let artikel4 = { img: "Turbinencar.jpg", name: "Turbinen Auto ", beschreibung: "Ein freshes car mit dem Elton John durch die Everglades slided", preis: 10000, category: 1 };
    let artikel5 = { img: "WindturbineB.jpg", name: "Windturbine Typ B", beschreibung: "Mashallah sag einfach die Hübsche Turbine", preis: 1, category: 1 };
    let artikel6 = { img: "Wasserturbine.jpg", name: "Alte Wasserturbine", beschreibung: "Blick is leer", preis: 750, category: 1 };
    let artikel7 = { img: "Doppelkorn2.jpg", name: "Doppelkorn", beschreibung: "Es", preis: 5, category: 2 };
    let artikel8 = { img: "Doppelkorn1.jpg", name: "Doppelkorn Premium", beschreibung: "geht", preis: 9.99, category: 2 };
    let artikel9 = { img: "Schneebesen.jpg", name: "Schneebesen", beschreibung: "wieder", preis: 6.95, category: 2 };
    let artikel10 = { img: "Eistee.jpg", name: "Eisteemischung", beschreibung: "los", preis: 4.99, category: 2 };
    let artikel11 = { img: "Kochtopf.jpg", name: "Kochtopf", beschreibung: "los", preis: 12, category: 2 };
    let artikel12 = { img: "Wasserleitung.jpg", name: "Funktionierende Wasserleitung", beschreibung: "los", preis: 100, category: 2 };
    let artikel13 = { img: "50cent.jpg", name: "Jemand der laut \"Es geht wieder los los los los los!\" schreit", beschreibung: "los", preis: 0.5, category: 2 };
    /* Turbinen Array*/
    let artikelTurbine = [artikel1, artikel2, artikel3, artikel4, artikel5, artikel6, artikel7, artikel8, artikel9, artikel10, artikel11, artikel12, artikel13];
    for (let i = 0; i < artikelTurbine.length; i++) {
        if (artikelTurbine[i].category == 1) {
            let newDiv = document.createElement("div");
            newDiv.id = "div" + i;
            document.getElementsByClassName("Produkte").item(0)?.appendChild(newDiv);
        }
        if (artikelTurbine[i].category == 2) {
            let newDiv = document.createElement("div");
            newDiv.id = "div" + i;
            document.getElementsByClassName("Produkte").item(1)?.appendChild(newDiv);
        }
        let imgElement = document.createElement("img");
        imgElement.src = artikelTurbine[i].img;
        document.getElementById("div" + i)?.appendChild(imgElement);
        let name = document.createElement("p");
        name.innerHTML = artikelTurbine[i].name;
        document.getElementById("div" + i)?.appendChild(name);
        let beschreibung = document.createElement("p");
        beschreibung.innerHTML = artikelTurbine[i].beschreibung;
        document.getElementById("div" + i)?.appendChild(beschreibung);
        let preis = document.createElement("p");
        preis.innerHTML = artikelTurbine[i].preis + "€";
        document.getElementById("div" + i)?.appendChild(preis);
        let button = document.createElement("button");
        button.innerHTML = "In den Warenkorb";
        button.addEventListener("click", addWarenkorb);
        document.getElementById("div" + i)?.appendChild(button);
        button.setAttribute("preis", artikelTurbine[i].preis.toString());
    }
    let summe = 0;
    let warenkorbcount = 0;
    let einkaufswagenDiv = document.createElement("div");
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