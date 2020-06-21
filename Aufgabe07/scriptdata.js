"use strict";
var Aufgabe07;
(function (Aufgabe07) {
    loadTurbine("array.json");
    async function loadTurbine(_url) {
        let response = await fetch(_url);
        let jsonArray = await response.json();
        Aufgabe07.turbine = await JSON.parse(JSON.stringify(jsonArray));
        Aufgabe07.createTurbine();
    }
})(Aufgabe07 || (Aufgabe07 = {}));
//# sourceMappingURL=scriptdata.js.map