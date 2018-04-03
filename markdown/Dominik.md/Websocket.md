## Client - Server Kommunikation

Das Internet wurde um das Konzept, dass ein Client Daten vom Server anfordert und ein Server diese Anfragen bearbeitet, konstruiert. Daran hat sich für lange Zeit nichts geändert bis 2005 Webseiten durch AJAX dynamischer wurden. Mit AJAX können Client und Server eine bidirektionale Verbindung aufbauen, das heißt beide Seiten haben die Möglichkeit gleichzeitig Daten zu senden und zu empfangen. \cite{websocket_official}

Webapplikationen wurden stetig komplexer und benötigten mehr Daten als jemals zuvor. Eine herkömmliche HTTP-Anfrage hat einen sehr großen Overhead, da bei jeder Anfrage ein header und cookies zum Server übermittelt werden müssen. Dadurch vergrößert sich die Latenz und der Benutzer muss länger warten. Das größte Problem ist, dass die meisten der Header und Cookies nicht nötig sind, um die Anfrage zu bearbeiten. \cite{einfuehrung_websockets}

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

Eine WebSocket-Verbindung wird geöffnet, indem man den WebSocket-Konstruktor aufruft um ein neues Objekt zu erstellen. \cite{websocket_official}

Das URL-Schema fängt im Gegensatz zu herkömmlichen URLs nicht mit `"http://"` sondern mit `"ws://"` an. Allerdings gibt es auch bei WebSockets eine verschlüsselte Variante mit dem Schema `"wss://"`. Damit können sichere Verbindungen zwischen Browsern und Servern aufgebaut werden. Weiters stehen verschiedene Ereignis-Handler zur Verfügung, um auf das Eintreten bestimmter Ereignisse reagieren zu können. Dadurch weiß der Client zum Beispiel, ob die Verbindung erfolgreich geöffnet werden konnte oder ob eine Nachricht eingegangen ist. \cite{websocket_events}

Sobald eine Verbindung zum Server erfolgreich aufgebaut wurde, kann der Client sofort anfangen mit der `".send()"` Methode Nachrichten an den Server zu übermitteln. Bisher konnten nur Strings versendet werden, aber seit der neuesten Spezifikation ist es auch möglich, binäre Daten zu senden. Der Server hat ebenfalls die Möglichkeit jederzeit Mitteilungen zu senden. Tritt dieser Fall ein, wird das `".onmessage"`-Event ausgelöst. Dieses Ereignis übergibt ein Ereignisobjekt, mit dem auf die Nachricht zugegriffen werden kann. \cite{websocket_spec}

### Kommunikation mit dem Mischpult - Nuss

Im Lern- und Informationszentrum wird ein Soundcraft Ui16 als Mischpult für die Mikrofone und den Audio-Eingang verwendet. Dieses verfügt über eine proprietäre Benutzeroberfläche. Der Hersteller hat sich sehr viel Mühe gegeben, dieses System abzusichern, sodass es nur mit der hauseigenen Software bedient werden kann. \cite{soundcraft_official}

Ich habe den Aufbau und die Verhaltensweise des Mischpults analysiert, um herauszufinden, wie ich darauf zugreifen kann, um es über die Mediatrix-Oberfläche ansteuern zu können. Dabei habe ich erkannt, dass auf dem Mischpult ein Socket.io-Server läuft. Socket-io ist eine JavaScript Bibliothek für Echtzeit-Webapplikationen. Das Mischpult verwendet die von Socket-io implementierte Funktion zur Generierung von Session-Ids. Eine Session-Id ist eine einzigartige Kennzahl, die der Server benötigt, um die Anfragen den jeweiligen Clients zuordnen zu können. Weiters weiß der Server mithilfe der Identifikationsnummern, wieviele einzigartige Clients verbunden sind. Dadurch ist es möglich, dass mehrere Clients gleichzeitig mit dem Server verbunden sind. Genauso funktioniert das Soundcraft Ui16. \cite{socket_io}

Um eine Verbindung aufzubauen, muss zuerst eine Session-Id angefragt werden. Sobald der Server diese bereitstellt, kann die Verbindung geöffnet werden. Der Server wartet ein paar Sekunden nach dem Senden der Id, ob ein Client sich verbinden möchte. Ist dies nicht der Fall, wird die erstellte Session-Id wieder verworfen. Weiters muss die Verbindung mit dem Mischpult am Leben gehalten werden. Das bedeutet, dass alle paar Sekunden eine Nachricht, im Falle des Soundcraft Ui16 lautet die Nachricht `"3:::ALIVE"`, gesendet werden muss. Ansonsten wird die Verbindung vom Server geschlossen.

Bevor ich damit anfangen konnte, Befehle an das Mischpult zu senden, musste ich erstmal die Befehlsstruktur analysieren. Dabei ist mir aufgefallen, dass Befehle des Clients mit `"3:::"` beginnen müssen. Nachrichten vom Server fangen hingegen mit `"2:::"` an. Die Befehle sind logisch aufgebaut. sie fangen mit `"3:::"` an anschließend folgt der Befehl. Um Werte wie Lautstärke zu setzen ist folgender Befehl notwendig `"3:::SETD^i.0.mix^Wert"`. Nach dem i steht die Nummer des Kanals und nach dem mix^ wird der gewünschte Wert platziert. Die Lautstärke kann einen Dezimalwert zwischen Null und Eins haben.

Zuerst habe ich mit JavaScript einen Prototypen entwickelt um die Befehle auszuprobieren. Allerdings sollten alle Geräte über den Raspberry Pi gesteuert werden, deswegen musste die Kommunikation mit dem Mischpult am Server umgesetzt werden. Dieser Server baut eine Client-Verbindung zum Socket.io-Server auf. Zuerst wird eine Session-Id mit der cURL-Funktion von PHP angefragt. Mit cURL können HTTP-Anfragen in PHP gemacht werden. Der Server sendet eine Session-Id zurück und die WebSocket-Verbindung auf das Mischpult kann geöffnet werden. Wenn nun auf der Benutzeroberfläche zum Beispiel ein Regler eines Mikrofons betätigt wird, sendet der Client dem Server die Daten und dieser generiert das passende Kommando, um sie weiter an den Server zu senden. \cite{curl_official}

Dank WebSockets ist die Latenz minimal, obwohl die Befehle über zwei Verbindungen geschickt werden müssen.

### Ratchet

\renewcommand{\kapitelautor}{Autor: Clemens Scharwitzl}

\input{markdown/Clemens.md/ratchet.md}
