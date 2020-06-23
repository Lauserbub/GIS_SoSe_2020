import * as Http from "http";

export namespace A08Server {
    //Konsolenausgabe
  console.log("Starting server");
  //port Variable von Typ Number erstellt und zugewiesen
  let port: number = Number(process.env.PORT);
  if (!port)
    port = 8100;

  let server: Http.Server = Http.createServer();
  server.addListener("request", handleRequest);
  server.addListener("listening", handleListen);
  //Server hört dem Port zu für Anfragen
  server.listen(port);

  //Konsolenausgabe
  function handleListen(): void {
    console.log("Listening");
  }

  function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void {
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
}
