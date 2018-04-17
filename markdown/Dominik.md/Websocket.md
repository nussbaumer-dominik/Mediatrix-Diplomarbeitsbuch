Das Internet wurde um das Konzept, dass ein Client Daten vom Server anfordert und ein Server diese Anfragen bearbeitet, konstruiert. Daran hat sich für lange Zeit nichts geändert, bis im Jahr 2005 Webseiten durch AJAX dynamischer wurden. Mit AJAX können Client und Server Daten asynchron austauschen. Dadurch ist es möglich, Teile einer Seite zu aktualisiern, ohne die gesamte Seite neu laden zu müssen. \cite{websocket_official}

\renewcommand{\kapitelautor}{Autor: Dominik Nußbaumer}

Webapplikationen wurden stetig komplexer und benötigten mehr Daten als jemals zuvor. Eine herkömmliche HTTP-Anfrage hat einen sehr großen Overhead, da bei jeder Anfrage ein Header und Cookies zum Server übermittelt werden müssen. Dadurch vergrößert sich die Latenz und der Benutzer muss länger warten. Das größte Problem ist, dass die meisten Header und Cookies nicht nötig sind, um die Anfrage zu bearbeiten. \cite{einfuehrung_websockets}

Diese Probleme können mit WebSockets gelöst werden. \cite{einfuehrung_websockets}

## Technische Spezifikation

Die WebSocket-Spezifikation ermöglicht eine persistente bidirektionale _Socket_-Verbindung zwischen einem Webbrowser und einem Server. Beide Seiten können, wann sie wollen, mit dem Senden von Daten beginnen. Der Client baut eine Verbindung durch einen Prozess namens `"WebSocket-Handshake"` auf. Dieser Prozess beginnt mit einer normalen HTTP-Anfrage an den Server. Ein Upgrade-Header muss in der Anfrage enthalten sein, damit der Server weiß, dass der Client eine WebSocket-Verbindung aufbauen möchte. \cite{websocket_official}

```javascript
var verbindung = new WebSocket("ws://mediatrix.at/ws");

verbindung.onopen = () => {
	verbindung.send("Der WebSocket ist offen");
};

verbindung.onmessage = nachricht => {
	console.log("Nachricht" + nachricht + "erhalten");
};
```

Eine WebSocket-Verbindung wird geöffnet, indem man den WebSocket-Konstruktor aufruft, um ein neues Objekt zu erstellen. \cite{websocket_official}

Das URL-Schema fängt im Gegensatz zu herkömmlichen URLs nicht mit _http\:\//_, sondern mit _ws\:\//_ an. Allerdings gibt es auch bei WebSockets eine verschlüsselte Variante mit dem Schema _wss\:\//_. Damit können sichere Verbindungen zwischen Browser und Server aufgebaut werden. Weiters stehen verschiedene Ereignis-Handler zur Verfügung, um auf das Eintreten bestimmter Ereignisse reagieren zu können. Dadurch weiß der Client zum Beispiel, ob die Verbindung erfolgreich geöffnet werden konnte oder ob eine Nachricht eingegangen ist. \cite{websocket_events}

Sobald eine Verbindung zum Server erfolgreich aufgebaut wurde, kann der Client sofort damit anfangen mit der _.send()_-Methode Nachrichten an den Server zu übermitteln. Bisher konnten nur Strings versendet werden, aber seit der neuesten Spezifikation ist es auch möglich, binäre Daten zu senden. Der Server hat ebenfalls die Möglichkeit, jederzeit Mitteilungen zu senden. Tritt dieser Fall ein, wird das _.onmessage_-Event ausgelöst. Dieses Ereignis übergibt ein Ereignisobjekt, mit dem auf die Nachricht zugegriffen werden kann. \cite{websocket_spec}

## Kommunikation mit dem Mischpult

Im Lern- und Informationszentrum wird ein Soundcraft-Ui16 Mischpult für die Mikrofone und den Audio-Eingang verwendet. Dieses verfügt über eine proprietäre Benutzeroberfläche. Der Hersteller hat sich sehr viel Mühe gegeben, dieses System abzusichern, sodass es nur mit der hauseigenen Software bedient werden kann. \cite{soundcraft_official}

Der Aufbau und die Verhaltensweise des Mischpults mussten analysiert werden, um herauszufinden, wie darauf zugegriffen werden könnte, um es über die Mediatrix-Oberfläche ansteuern zu können. Dabei habe ich erkannt, dass auf dem Mischpult ein Socket.io-Server läuft. Socket-io ist eine JavaScript Bibliothek für Echtzeit-Webapplikationen. Das Mischpult verwendet die von Socket-io implementierte Funktion zur Generierung von Session-Ids. Eine Session-Id ist eine einzigartige Kennzahl, die der Server benötigt, um die Anfragen den jeweiligen Clients zuordnen zu können. Weiters weiß der Server, mithilfe der Identifikationsnummern, wieviele einzigartige Clients verbunden sind. Dadurch ist es möglich, dass mehrere Clients gleichzeitig mit dem Server verbunden sind. Genauso funktioniert das Soundcraft-Ui16. \cite{socket_io}

Um eine Verbindung aufzubauen, muss zuerst eine Session-Id angefragt werden. Sobald der Server diese bereitstellt, kann die Verbindung geöffnet werden. Der Server wartet ein paar Sekunden nach dem Senden der Id, ob ein Client sich verbinden möchte. Ist dies nicht der Fall, wird die erstellte Session-Id wieder verworfen. Weiters muss die Verbindung mit dem Mischpult am Leben gehalten werden. Das bedeutet, dass alle paar Sekunden eine Nachricht, im Falle des Soundcraft-Ui16 lautet die Nachricht _3:::ALIVE_, gesendet werden muss. Ansonsten wird die Verbindung vom Server geschlossen.

Um Befehle an das Mischpult senden zu können, musste zuerst die Struktur analysiert werden. Dabei ist mir aufgefallen, dass Befehle des Clients mit _3:::_ beginnen müssen. Nachrichten vom Server fangen hingegen mit _2:::_ an. Die Befehle sind logisch aufgebaut. Sie fangen mit _3:::_ an und anschließend folgt der Befehl. Um Werte wie Lautstärke zu setzen, ist folgender Befehl notwendig: _3:::SETD\^i.0.mix\^Wert_. Nach dem _i_ steht die Nummer des Kanals und nach dem _mix\^_ wird der gewünschte Wert platziert. Die Lautstärke kann einen Dezimalwert zwischen Null und Eins haben.

Zuerst wurde ein Prototyp mit JavaScript entwickelt, um die Befehle auszuprobieren. Allerdings sollten alle Geräte ausschließlich über den Raspberry Pi gesteuert werden, deswegen musste die Kommunikation mit dem Mischpult am Server umgesetzt werden. Dieser Server baut eine Client-Verbindung zum Socket.io-Server auf. Zuerst wird eine Session-Id mit der cURL-Funktion von PHP angefragt. Mit cURL können HTTP-Anfragen in PHP gemacht werden. Der Server sendet eine Session-Id zurück und die WebSocket-Verbindung zum Mischpult kann geöffnet werden. Wenn nun auf der Benutzeroberfläche zum Beispiel ein Regler eines Mikrofons betätigt wird, sendet der Client dem Server die Daten und dieser generiert das passende Kommando, um sie weiter an das Mischpult zu senden. \cite{curl_official}

Dank der WebSocket-Spezifikation ist die Latenz minimal, obwohl die Befehle über zwei Verbindungen geschickt werden müssen. Mit herkömmlichen HTTP-Anfragen wäre die gesamte Kommunikation wesentlich langsamer.

## Die PHP-Library Ratchet

\renewcommand{\kapitelautor}{Autoren: Dominik Nußbaumer, Clemens Scharwitzl}

\input{markdown/Clemens.md/ratchet.md}
