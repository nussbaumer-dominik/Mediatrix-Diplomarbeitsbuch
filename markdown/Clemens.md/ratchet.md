Um einen WebSocket-Server auf Seiten des Backends aufzusetzen, wurde die PHP Library Ratchet verwendet.
Diese erlaubt es, sehr einfach einen ereignisbasierten (event based) WebSocket-Server aufzusetzen.
Für die Erstellung eines Servers auf Ratchet-Basis ist die Application-Klasse das wichtigste Element,
denn diese enthält die Methoden _onOpen_, _onMessage_, _onClose_ und _onError_.
Die Application-Klasse wird in \kap{application}, näher beschrieben.
Diese vier Methoden enthalten die eigentliche Logik des Servers.
Wenn nun ein WebSocket-Server initialisiert werden soll, muss die nachstehende Struktur eingehalten werden.

```php
$server = IoServer::factory(
      new HttpServer(
          new WsServer(
              new Application()
          )
      )
  );
```

Wie der obige Code zeigt, muss zuerst ein _IoServer_ erstellt werden, welcher einen _HttpServer_ benötigt.
Der _HttpServer_ wiederum benötigt einen _WSServer_, welchem die Application-Klasse übergeben wird.\cite{noauthor_ratchet_nodate}
Diese Server-Klassen werden nachfolgen kurz beschrieben:

*   **IoServer:** Diese Klasse stellt die Basis dar.
    Sie kümmert sich um den Verbindungsaufbau und -abbau und um alle Fehler, die im Programm auftreten.
    Weiters sendet und empfängt sie auch Daten vom Client.\cite{noauthor_ratchet_nodate}

*   **HttpServer:** Diese Klasse behandelt die Http-Request, die der Server empfängt.
    Sie wartet bis ein kompletter Request übertragen wurde und gibt ihn dann erst weiter.\cite{noauthor_ratchet_nodate}

*   **WsServer:** Diese Komponente verarbeitet die WebSocket-Verbindungen mit den Browsern nach dem W3C Webscoket Standard.\cite{noauthor_ratchet_nodate}

#### Application-Klasse \label{application}

Diese Klasse beinhaltet die eigentliche Logik des WebSocket-Servers.
Das _MessageComponentInterface_ gibt hier die vier Methoden, die von Ratchet verlangt werden, vor und muss implementiert werden.\cite{noauthor_ratchet_nodate}
Diese vier Methoden sind:

*   **onClose:** Diese Methode wird von Ratchet aufgerufen, wenn eine WebSocket-Verbindung geschlossen wird.
    Als Argument wird die WebSocket-Verbindung übergeben.\cite{noauthor_ratchet_nodate}

*   **onOpen:** Diese Methode wird aufgerufen, wenn eine Verbindung mit dem WebSocket-Server hergestellt wird.
    Als Argument wird die WebSocket-Verbindung übergeben.\cite{noauthor_ratchet_nodate}

*   **onError:** Wenn ein Error mit der WebSocket-Verbindung auftritt wird diese Methode von Ratchet aufgerufen.
    Hier wird zusätzlich auch die aufgetretene Exception mit übergeben.\cite{noauthor_ratchet_nodate}

*   **onMessage:** Immer wenn eine Nachricht über WebSocket von einem Client an den Server übermittelt wird, wird diese Methode aufgerufen.
    Als Argumente werden die WebSocket-Verbindung, von der die Nachricht kommt, und die Nachricht übergeben.\cite{noauthor_ratchet_nodate}

Nachstehend folgt ein Beispiel für eine Application-Klasse,
nach deren Prinzip auch die Application-Klasse in diesem Projekt gestaltet ist.

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
