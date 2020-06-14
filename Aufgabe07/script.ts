/* ctrl + shift + b zum überwachen*/
/* Turbine interface*/
namespace Aufgabe07 {

    
export function createTurbine(): void {

    for (let i: number = 0; i < turbine.length; i++) {
        if (turbine[i].category == 1) {
            let newDiv: HTMLDivElement = document.createElement("div");
            newDiv.id = "div" + i;
            document.getElementsByClassName("Produkte").item(0)?.appendChild(newDiv);
            newDiv.setAttribute("index", i.toString());
        }
        if (turbine[i].category == 2) {
            let newDiv: HTMLDivElement = document.createElement("div");
            newDiv.id = "div" + i;
            document.getElementsByClassName("Produkte").item(1)?.appendChild(newDiv);
            newDiv.setAttribute("index", i.toString());
        }

        let imgElement: HTMLImageElement = document.createElement("img");
        imgElement.src = turbine[i].img;
        document.getElementById("div" + i)?.appendChild(imgElement);

        let name: HTMLParagraphElement = document.createElement("p");
        name.innerHTML = turbine[i].name;
        document.getElementById("div" + i)?.appendChild(name);

        let beschreibung: HTMLParagraphElement = document.createElement("p");
        beschreibung.innerHTML = turbine[i].beschreibung;
        document.getElementById("div" + i)?.appendChild(beschreibung);

        let preis: HTMLElement = document.createElement("p");
        preis.innerHTML = turbine[i].preis + "€";
        document.getElementById("div" + i)?.appendChild(preis);

        let button: HTMLButtonElement = document.createElement("button");
        button.innerHTML = "In den Warenkorb";
        button.addEventListener("click", addWarenkorb);
        document.getElementById("div" + i)?.appendChild(button);
        button.setAttribute("preis", turbine[i].preis.toString());

    }   
} 
let summe: number = 0;
let warenkorbcount: number = 0;
let einkaufswagenDiv: HTMLDivElement = document.createElement("div");
let cartTurbine: Turbine[] = [];

function addWarenkorb(_event: Event): void {
    if (warenkorbcount >= 0) {
        document.getElementById("itemwatchlist")?.appendChild(einkaufswagenDiv);
    }
    warenkorbcount ++;
    einkaufswagenDiv.innerHTML = warenkorbcount + "";

    if ((<HTMLButtonElement>_event.currentTarget)?.getAttribute("preis")) {
        summe = summe + parseInt ((<HTMLButtonElement>_event.currentTarget)?.getAttribute("preis")!);
    }
    console.log("Gesamtsumme (inkl. MwSt.) " + summe.toFixed(0) + "€");

    let indexButton: string  = (<HTMLDivElement>(<HTMLElement>_event.currentTarget).parentElement).getAttribute("index")!;
    let indexNr: number = parseInt(indexButton);
    
    cartTurbine.push(turbine[indexNr]);
    localStorage.setItem("turbine_img" + (cartTurbine.length - 1), turbine[indexNr].img);
    localStorage.setItem("turbine_name" + (cartTurbine.length - 1), turbine[indexNr].name);
    localStorage.setItem("turbine_beschreibung" + (cartTurbine.length - 1), turbine[indexNr].beschreibung);
    localStorage.setItem("turbine_preis" + (cartTurbine.length - 1), turbine[indexNr].preis.toString());
    localStorage.setItem("turbineAnzahl", cartTurbine.length.toString());

    
}

let alleItems: HTMLAnchorElement = document.createElement ("a");
alleItems.id = "home";
alleItems.innerHTML = "Home";
alleItems.addEventListener("click", ankerSortierer);
document.getElementById("home")?.appendChild(alleItems);

let turbinenItems: HTMLAnchorElement = document.createElement("a");
turbinenItems.id = "turbinen";
turbinenItems.innerHTML = "Turbinen";
turbinenItems.addEventListener("click", ankerSortierer);
document.getElementById("turbine")?.appendChild(turbinenItems);

let süffItems: HTMLAnchorElement = document.createElement ("a");
süffItems.id = "süff";
süffItems.innerHTML = "Zutaten";
süffItems.addEventListener("click", ankerSortierer);
document.getElementById("süff")?.appendChild(süffItems);

function ankerSortierer(_event: Event): void {
    if ((<HTMLDivElement>_event.currentTarget).getAttribute("id") == "home") {
        (<HTMLDivElement>document.getElementById("blockTurbine")).style.display = "block";
        (<HTMLDivElement>document.getElementById("blockSüff")).style.display = "block";
    }
    if ((<HTMLDivElement>_event.currentTarget).getAttribute("id") == "turbinen") {
        (<HTMLDivElement>document.getElementById("blockTurbine")).style.display = "block";
        (<HTMLDivElement>document.getElementById("blockSüff")).style.display = "none";
    }
    if ((<HTMLDivElement>_event.currentTarget).getAttribute("id") == "süff") {
        (<HTMLDivElement>document.getElementById("blockTurbine")).style.display = "none";
        (<HTMLDivElement>document.getElementById("blockSüff")).style.display = "block";
    }

}
}