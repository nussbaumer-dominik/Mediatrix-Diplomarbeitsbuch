## Client - Server Kommunikation

Das Internet wurde um das Konzept, dass ein Client Daten vom Server anfordert und ein Server diese Anfragen bearbeitet, konstruiert. Daran hat sich für lange Zeit nichts geändert bis 2005 Webseiten durch AJAX dynamischer wurden. Mit AJAX können Client und Server eine bidirektionale Verbindung aufbauen, das heißt beide Seiten haben die Möglichkeit gleichzeitig Daten zu senden und zu empfangen. \cite{websocket_official}

Webapplikationen wurden stetig komplexer und benötigten mehr Daten als jemals zuvor. Eine herkömmliche HTTP-Anfrage hat einen sehr großen Overhead, da bei jeder Anfrage ein header und cookies zum Server übermittelt werden müssen. Dadurch vergrößert sich die Latenz und der Benutzer muss länger warten. Das größte Problem ist, dass die meisten der Header und Cookies nicht nötig sind, um die Anfrage zu bearbeiten.

Diese Probleme können mit WebSockets gelöst werden. \cite{einfuehrung_websockets}

### Technische Spezifikation - Nuss

Die WebSocket-Spezifikation ermöglicht eine persistente "socket"-Verbindung zwischen einem Webbrowser und einem Server. Beide Seiten können, wann sie wollen, mit dem Senden von Daten beginnen. Der Client baut eine Verbindung durch einen Prozess namens `"WebSocket-Handshake"` auf. Dieser Prozess beginnt mit einer normalen HTTP-Anfrage an den Server. Ein Upgrade-Header muss in der Anfrage enthalten sein, damit der Server weiß, dass der Client eine WebSocket-Verbindung aufbauen möchte. \cite{websocket_official}

```javascript
var verbindung = new WebSocket("ws://mediatrix.at/ws");

verbindung.onopen = () => {
	verbindung.send("Das WebSocket ist offen");
};

verbindung.onmessage = nachricht => {
	console.log("Nachricht" + nachricht + "erhalten");
};
```

Eine WebSocket-Verbindung wird geöffnet, indem man den WebSocket-Konstruktor aufruft um ein neues Objekt zu erstellen. \cite{websockets_official}

Das URL-Schema fängt im Gegensatz zu herkömmlichen URLs nicht mit `"http://"` sondern mit `"ws://"` an. Allerdings gibt es auch bei WebSockets eine verschlüsselte Variante mit dem Schema `"wss://"`. Damit können sichere Verbindungen zwischen Browsern und Servern aufgebaut werden. Weiters stehen verschiedene Ereignis-Handler zur Verfügung, um auf das Eintreten bestimmter Ereignisse reagieren zu können. Dadurch weiß der Client zum Beispiel, ob die Verbindung erfolgreich geöffnet werden konnte oder ob eine Nachricht eingegangen ist. \cite{websocket_events}

Sobald eine Verbindung zum Server erfolgreich aufgebaut wurde, kann der Client sofort anfangen mit der `".send()"` Methode Nachrichten an den Server zu übermitteln. Bisher konnten nur Strings versendet werden, aber seit der neuesten Spezifikation ist es auch möglich binäre Daten zu senden. Der Server hat ebenfalls die Möglichkeit jederzeit Mitteilungen zu senden. Tritt dieser Fall ein, wird das `".onmessage"`-Event ausgelöst. Dieses Ereignis übergibt ein Ereignisobjekt, mit dem auf die Nachricht zugegriffen werden kann. \cite{websocket_spec}

### Kommunikation mit dem Mischpult - Nuss

### Ratchet

\renewcommand{\kapitelautor}{Autor: Clemens Scharwitzl}

\input{markdown/Clemens.md/ratchet.md}