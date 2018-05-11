Um einen Websocket-Server auf Seiten des Backends aufzusetzen, wurde die PHP Library Ratchet verwendet.
Ratchet erlaubt es sehr einfach einen ereignisbasierten (event based) Websocket-Server aufzusetzen.
Für die Erstellung eines Servers auf Ratchet basis ist die Application-Klasse das wichtigste Element,
diese enthält die Methoden *onOpen*, *onMessage*, *onClose* und *onError*.
Die *Application-Class* wird in \kap{application}, näher beschrieben.
Diese vier Methoden enthalten die eigentliche Logik des Servers.
Wenn nun ein Websocket-Server initialisiert werden soll, muss die nachstehende Struktur eingehalten werden.

\renewcommand{\kapitelautor}{Autoren: Dominik Nußbaumer, Clemens Scharwitzl}

```php
$server = IoServer::factory(
      new HttpServer(
          new WsServer(
              new Application()
          )
      )
  );
```

Wie der obige Code zeigt, muss zuerst ein *IoServer* erstellt werden, welcher einen *HttpServer* benötigt.
Der *HttpServer* wiederum benötigt einen *WsServer*, welchem die *Application-Class* übergeben wird. \cite{noauthor_ratchet_nodate}
Diese Server-Klassen werden nachfolgen kurz beschrieben:

* **IoServer:** Diese Klasse stellt die Basis dar. 
Sie kümmert sich um den Verbindungsaufbau und -abbau und um alle Fehler, die im Programm auftreten.
Weiters sendet und empfängt sie auch Daten vom Client. \cite{noauthor_ratchet_nodate}

* **HttpServer:** Diese Klasse behandelt die HTTP-Requests, die der Server empfängt.
Sie wartet bis ein kompletter Request übertragen wurde und gibt ihn dann erst weiter. \cite{noauthor_ratchet_nodate}

* **WsServer:** Diese Komponente verarbeitet die Websocket-Verbindungen mit den Browsern nach dem W3C Websocket Standard. \cite{noauthor_ratchet_nodate}

\renewcommand{\kapitelautor}{Autor: Clemens Scharwitzl}

### *Application-Class* \label{application}

Diese Klasse beinhaltet die eigentliche Logik des Websocket-Servers.
Das *MessageComponentInterface* gibt hier die vier Methoden, die von Ratchet verlangt werden, vor und muss implementiert werden. \cite{noauthor_ratchet_nodate}
Diese vier Methoden sind:

* **onClose:** Diese Methode wird von Ratchet aufgerufen, wenn eine Websocket-Verbindung geschlossen wird.
Als Argument wird die Websocket-Verbindung übergeben. \cite{noauthor_ratchet_nodate}

* **onOpen:** Diese Methode wird aufgerufen, wenn eine Verbindung mit dem Websocket-Server hergestellt wird.
Als Argument wird die Websocket-Verbindung übergeben. \cite{noauthor_ratchet_nodate}

* **onError:** Wenn ein Error mit der Websocket-Verbindung auftritt wird diese Methode von Ratchet aufgerufen.
Hier wird zusätzlich auch die aufgetretene Exception mit übergeben. \cite{noauthor_ratchet_nodate}

* **onMessage:** Immer, wenn eine Nachricht über Websocket von einem Client an den Server übermittelt wird, wird diese Methode aufgerufen.
Als Argumente werden die Websocket-Verbindung, von der die Nachricht kommt, und die Nachricht übergeben. \cite{noauthor_ratchet_nodate}

Nachstehend folgt ein Beispiel für eine *Application-Class*, 
nach deren Prinzip auch die *Application-Class* in diesem Projekt gestaltet ist.

```php
class Application implements MessageComponentInterface {
    private $client;

    public function onOpen(ConnectionInterface $conn) {
        //save the connection
        $this->client = $conn;
    }

    public function onMessage(ConnectionInterface $from, $msg) {
        //json_decode the Message of the client
        $commands = json_decode($msg);

        //check if DMX command is set
        if (isset($commands["dmx"])) { . . . }
    }

    public function onClose(ConnectionInterface $conn) {
        // remove the connection
        $this->client = null;
    }

    public function onError(ConnectionInterface $conn, \Exception $e) {
        //close the connection
        $conn->close();
    }
}
```