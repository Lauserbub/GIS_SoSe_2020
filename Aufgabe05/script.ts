/* ctrl + shit + b zum überwachen*/
/* Turbine interface*/
interface Turbine {
    img: string;
    name: string;
    preis: string;
}

/* Turbine*/
let artikel1: Turbine = { img: "Flugzeugturbine.jpg", name: "Flugzeugturbine ", preis: "Zehner" };
let artikel2: Turbine = { img: "Windturbine.jpg", name: "Windturbine", preis: "Zwanni" };
let artikel3: Turbine = { img: "2Flugzeugturbinen.jpg", name: "2 FLugzeugturbinen Typ A", preis: "Machsch n Fuffi" };
let artikel4: Turbine = { img: "Turbinencar.jpg", name: "Turbinen Auto ", preis: "10 Mille" };
let artikel5: Turbine = { img: "WindturbineB.jpg", name: "Windturbine Typ B", preis: "Komm kriegsch gschenkt den Bumms" };
let artikel6: Turbine = { img: "Wasserturbine.jpg", name: "Alte Wasserturbine", preis: "750€ VB" };

/* Turbinen Array*/
let artikelTurbine: Turbine[] = [artikel1, artikel2, artikel3, artikel4, artikel5, artikel6];

/* Süff interface */
interface Süff {
    img: string;
    name: string;
    preis: string;
}

/* Süff */
let artikel7: Süff = { img: "Doppelkorn2.jpg", name: "Doppelkorn", preis: "Fünfer" };
let artikel8: Süff = { img: "Doppelkorn1.jpg", name: "Doppelkorn Premium", preis: "Zehner" };
let artikel9: Süff = { img: "Schneebesen.jpg", name: "Schneebesen", preis: "6,95 Bei Kauf von 2 Doppelkorn und einer Eisteemischung umsonst" };
let artikel10: Süff = { img: "Eistee.jpg", name: "Eisteemischung", preis: "4,99€" };
let artikel11: Süff = { img: "Kochtopf.jpg", name: "Kochtopf", preis: "12€" };
let artikel12: Süff = { img: "Wasserleitung.jpg", name: "Funktionierende Wasserleitung", preis: "Hunni" };
let artikel13: Süff = { img: "50cent.jpg", name: "Jemand der laut \"Es geht wieder los los los los los!\" schreit", preis: "50 Pfennig" };

/* Süff Array */
let artikelSüff: Süff[] = [artikel7, artikel8, artikel9, artikel10, artikel11, artikel12, artikel13];


/* Trubine */
for (let index: number = 0; index < artikelTurbine.length; index++) {
    /* Div*/
    let newDiv: HTMLDivElement = document.createElement("div");
    newDiv.id = "div1" + index;
    document.getElementsByClassName("Produkte").item(0)?.appendChild(newDiv);
    
    /* Image*/
    let imgElement: HTMLImageElement = document.createElement("img");
    imgElement.src = artikelTurbine[index].img;
    document.getElementById("div1" + index)?.appendChild(imgElement);

    /* Name*/
    let name: HTMLParagraphElement = document.createElement("p");
    name.innerHTML = artikelTurbine[index].name;
    document.getElementById("div1" + index)?.appendChild(name);

    /* Preis*/
    let price: HTMLParagraphElement = document.createElement("p");
    price.innerHTML = artikelTurbine[index].preis;
    document.getElementById("div1" + index)?.appendChild(price);

    /* Button*/
    let kaufen: HTMLButtonElement = document.createElement("button");
    kaufen.innerHTML = "In den Warenkorb";
    document.getElementById("div1" + index)?.appendChild(kaufen);
}

/* if index = 6, dann htmlparagraphelemnt = document.createElement ("i);
name.innerHtml = artikelTurbine[index].name;
document.getElemntById("div1"+index)?.appendChild(name); */

/* Süff*/

for (let index: number = 0; index < artikelSüff.length; index++) {
    /* Div*/
    let newDiv: HTMLDivElement = document.createElement("div");
    newDiv.id = "div2" + index;
    document.getElementsByClassName("Produkte").item(1)?.appendChild(newDiv);

    /* Image*/
    let imgElement: HTMLImageElement = document.createElement("img");
    imgElement.src = artikelSüff[index].img;
    document.getElementById("div2" + index)?.appendChild(imgElement);

    /* Name*/
    let name: HTMLParagraphElement = document.createElement("p");
    name.innerHTML = artikelSüff[index].name;
    document.getElementById("div2" + index)?.appendChild(name);

    /* Preis*/
    let price: HTMLParagraphElement = document.createElement("p");
    price.innerHTML = artikelSüff[index].preis;
    document.getElementById("div2" + index)?.appendChild(price);

    /* Button*/
    let kaufen: HTMLButtonElement = document.createElement("button");
    kaufen.innerHTML = "Warenkorb";
    document.getElementById("div2" + index)?.appendChild(kaufen);
}
