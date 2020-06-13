namespace Aufgabe07 {
    export interface Turbine {
        img: string;
        name: string;
        beschreibung: string;
        preis: number;
        category: number;
    }
    
    export let turbine: Turbine[];
    loadTurbine("data.json");

    async function loadTurbine(_url: RequestInfo): Promise<void> {
        let response: Response = await fetch(_url);
        let jsonArray: JSON = await Response.json();
        turbine = await JSON.parse(JSON.stringify(jsonArray));
        createTurbine();
    }

}