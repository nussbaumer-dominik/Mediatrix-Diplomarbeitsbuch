## Client - Server Kommunikation

Das Internet wurde um das Konzept, dass ein Client Daten vom Server anfordert und ein Server diese Anfragen erfüllt, konstruiert. Daran hat sich lange nichts verändert bis 2005 Webseiten durch AJAX dynamischer wurden. Mit AJAX können Client und Server eine bidirektionale Verbindung aufbauen, das heißt beide können gleichzeitig Daten senden und empfangen.

Webapplikationen wurden stetig komplexer und benötigten mehr Daten als jemals zuvor. Eine herkömmliche HTTP Anfrage hat einen sehr großen Overhead, da bei jeder Anfrage ein header und cookies zum Server übermittelt werden müssen. Dadurch vergrößert sich die Latenz und der Benutzer muss länger warten. Das größte Problem ist, dass die meisten der header und cookies nicht nötig sind, um die Anfrage zu bearbeiten.

Diese Probleme können mit WebSockets gelöst werden.

### technische Spezifikation - Nuss

WebSockets ermöglichen eine persistente Verbindung zwischen Client und Server. Beide Seiten können sowohl senden als auch empfangen, wann sie wollen.
Der Client baut eine Verbindung durch einen Prozess namens "WebSocket handshake" auf. Dieser Prozess beginnt mit einer normalen HTTP Anfrage an den Server. Ein Upgrade header muss in der Anfrage enthalten sein, damit der Server weiß, dass der Client eine WebSocket VErbindung aufbauen möchte.

### Kommunikation mit dem Mischpult - Nuss

### Ratchet - Clement
