"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.A08Server = void 0;
const Http = require("http");
var A08Server;
(function (A08Server) {
    //Konsolenausgabe
    console.log("Starting server");
    //port Variable von Typ Number erstellt und zugewiesen
    let port = Number(process.env.PORT);
    if (!port)
        port = 8100;
    let server = Http.createServer();
    server.addListener("request", handleRequest);
    server.addListener("listening", handleListen);
    //Server hört dem Port zu für Anfragen
    server.listen(port);
    //Konsolenausgabe
    function handleListen() {
        console.log("Listening");
    }
    function handleRequest(_request, _response) {
        //Konsolenausgabe
        console.log("I hear voices!");
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        //Ausgabe URL
        _response.write(_request.url);
        //Konsolenausgabe
        console.log(_request.url);
        //Response Ende
        _response.end();
    }
})(A08Server = exports.A08Server || (exports.A08Server = {}));
//# sourceMappingURL=server.js.map