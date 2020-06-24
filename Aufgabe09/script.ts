namespace Aufgabe09 {
    let formData: FormData;

    let buttonHtml: HTMLButtonElement = <HTMLButtonElement>document.getElementById("buttonHtml");
    buttonHtml.addEventListener("click", communicateHTML);

    let buttonJson: HTMLButtonElement = <HTMLButtonElement>document.getElementById("buttonJson");
    buttonJson.addEventListener("click", communicateJSON);

    async function communicateHTML(): Promise<void> {
        formData = new FormData(document.forms[0]);
        let url: string = "https://loginsose2020.herokuapp.com";
        url += "/html";
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        url += "?" + query.toString();

        let response: Response = await fetch(url);
        let responseText: string = await response.text();
        let serverResponse: HTMLElement = <HTMLElement> document.getElementById("serverResponse");
        serverResponse.innerHTML = responseText;

    }

    async function communicateJSON(): Promise<void> {
        formData = new FormData(document.forms[0]);
        let url: string = "https://loginsose2020.herokuapp.com";
        url += "/json";
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        url += "?" + query.toString();

        let response: Response = await fetch(url);
        let responseText: string = await response.json();
        console.log(responseText);

    }
}