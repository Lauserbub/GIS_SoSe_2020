namespace Aufgabe07 {
    let anzahl: number = parseInt(localStorage.getItem("turbineAnzahl")!);
    let preis: number = 0;
    let gesamtpreis: HTMLParagraphElement = document.createElement("p");
    
    for (let index: number = 0; index <= anzahl - 1; index++) {

        let newDiv: HTMLDivElement = document.createElement("div");
        (<HTMLElement>document.getElementById("blockWarenkorb")).appendChild(newDiv);
        newDiv.id = "div" + index;
        newDiv.setAttribute("index", String(index));
        console.log("div" + index);

        let imgElement: HTMLImageElement = document.createElement("img");
        imgElement.src = localStorage.getItem("turbine_img" + index)!;
        newDiv.appendChild(imgElement);
        console.log(imgElement);

        let name: HTMLParagraphElement = document.createElement("p");
        name.innerHTML = localStorage.getItem("turbine_name" + index)!;
        newDiv.appendChild(name);
        console.log(name);

    
        let beschreibung: HTMLParagraphElement = document.createElement("p");
        beschreibung.innerHTML = localStorage.getItem("turbine_beschreibung" + index)!;
        newDiv.appendChild(beschreibung);
        console.log(beschreibung);


        let price: HTMLElement = document.createElement("p");
        price.innerHTML = localStorage.getItem("turbine_preis" + index) + "€"!;
        newDiv.setAttribute("preis", price.innerHTML);
        newDiv.appendChild(price);
        console.log(price);

        let button: HTMLButtonElement = document.createElement("button");
        button.innerHTML = "Entfernen";
        button.addEventListener("click", deleteWarenkorb);
        newDiv.appendChild(button);
    
        preis = preis + parseFloat(price.innerHTML);
        gesamtpreis.innerHTML = "Gesamtpreis: " + preis.toFixed(0) + "€";
        document.getElementById ("cartValue")?.appendChild(gesamtpreis);
    }

    function deleteWarenkorb(_event: Event): void {
        let preisFunk: string = (<HTMLParagraphElement>(<HTMLElement>_event.currentTarget).parentElement).getAttribute("preis")!;
        preis = preis - parseFloat(preisFunk);
        gesamtpreis.innerHTML = "Gesamtpreis" + preis.toFixed(0) + "€";
        let index: string = (<HTMLParagraphElement>(<HTMLElement>_event.currentTarget).parentElement).getAttribute("index")!;
        ((<HTMLDivElement>_event.currentTarget).parentElement!).remove();
        localStorage.removeItem("turbine_img" + index);
        localStorage.removeItem("turbine_beschreibung" + index);
        localStorage.removeItem("turbine_name" + index);
        localStorage.removeItem("turbine_preis" + index);

    }

    let deleteButton: HTMLButtonElement = (<HTMLButtonElement>document.getElementById("deleteButton"));
    deleteButton.addEventListener("click", deleteAll);

    function deleteAll(_event: Event): void {
        gesamtpreis.innerHTML = "Gesamtpreis: " + 0 + "€";
        localStorage.clear();
        for (let index: number = 0; index <= anzahl; index++) {
                (<HTMLDivElement>document.getElementById("div" + index)).remove();
        }
    }
}