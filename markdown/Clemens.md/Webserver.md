Ein Webserver ist einen Anwendung, die Inhalte eines Computers einem Netzwerk zur Verfügung stellt unter verwendung diverser Netzwerkprotokolle, wie zum Beispiel HTTP. 
Die Software hat weiters die Aufgabe die Datenablage und den zugriff zu regeln.
Als Webserver wurde das Opensource-Projekt Apache verwendet. 
Apache ist ein weitverbreitete Anwendung und auf fast allen Plattformen verfügbar.
Viele Linux-Distributionen, auch Raspbian, haben Apache bereits standardmäßig vorinstalliert.\cite[S. 663 bis 664]{jurzik_debian_2013}

## Aufbau Apache
Der Apache Webserver ist in Modulen aufgebaut. jedes Modul stellt dabei eine Funktionalität dar.
Standardmäßig werden eineige Module beim Installieren des Webservers aktieviert, um die Grundfunktionalität zu gewährleisten.
Weitere Module werden durch LoadModule in der Konfigurationsdatei geladen. 
Meist wird diese Anweisung in eine eigene .load Datei ausgelagert.

Ein weiteres Feature von Apache sind Virtual Hosts. 
Ein Webserver kann dadurxch mehrere Webseiten gleichzeitig aktiviert haben. 
Dabei gibt es zwei Arten von Virtual Hosts: namensbasierte und Ip-Adressen-basierte Hosts. 
Die Konfiguration eines solchen Virtual Hosts wird im Konfigurations-Datei mit der Direktive VirtualHost vorgenommen.
Meist wird diese Konfiguration in einen extra Datei ausgelagert, die dann in dem Ordner sites-enabled abgelegt wird. 

Die Konfiguration ist in mehrere Konfigurationsdateien auf gespalten. Die Hauptkonfigurationsdatei ist /etc/apache2/apache2.conf. 
In dieser befinden sich Voreinstellungen und Erklärunfgen über die Konfigurationsmöglichkeiten. 
Weiters werden am Ende die weiteren Dateien eingebunden.\cite[S. 665 bis 672]{jurzik_debian_2013} 

Nachfolgend werden die wichtigsten Dateien und Ordner im Konfigurationsverzeichnis /etc/apach2 beschrieben.


\dirtree{%
.1 /etc/apache2.
.2 apache2.conf.
.2 envvars.
.2 mods-available.
.2 mods-enabled.
.3 ...
.3 php7.0.conf.
.3 php7.0.load.
.3 proxy.conf.
.3 proxy.load.
.3 ...
.2 ports.conf.
.2 sites-available.
.2 sites-enabled.
.3 000-default.conf.
.3 000-default-ssl.conf.
.2 ssl.
.3 server.crt.
.3 server.key.
}


* **mods-available:**
Enthält alle verfügbaren Module in der Form von .load Dateien.
* **mods-enabled:**
Enthält Symbolische Links auf die Modul Dateien in mods-available. 
Nur die in diesem Ordner verlinkten Module werden auch beim Start des Webservers geladen.
* **ports.conf:**
In dieser Datei wird definiert auf welchen Ports der Webserver lauschen soll.
* **sites-available:**
Enthält alle verfügbaren Virtual Hosts in der Form von Konfigurations-Dateien.
* **sites-enabled:**
Enthält Symbolische Links auf die Virtual Hqsts Dateien in sites-available. 
Nur die in diesem Ordner verlinkten Hosts werden auch beim Start des Webservers geladen.
* **ssl:**
Dieser Ordner enthält die Zertifikate für die SSL-Verbindung (\siehe{ssl}).


## Verwendete Module und Konfiguration
In diesem Projekt wurden neben den Standard-Modulen, die Module: SSL, Proxy mit Proxy_WS und Rewrite verwendet.

**SSL:**
Diese Module stellt die Verwendung von SSL-gesichertem  Http zur verfügung (Https). 
Für die verwendung wird ein SSL Zertifikat benötigt, diese kann entweder mit Hilfe der Software OpenSSL selbst erstellt werden,
oder von einer offiziellen Stelle verifiziert werden. \cite{noauthor_mod_ssl_nodate}
Bei diesem Projekt wurde das Zertifikat selbst erzeugt, da offizielle registrierte Zertifikate nur kostenpflichtig zu erhalten sind.

**Proxy und Proxy WS:**
Diese Modul stellt die Funktion eines Proxy-Servers zur Verfügung.
Unter einem Proxy Server versteht man einen Server, der als einen Art Vermittler auftritt. Er leitet Anfragen von einem Netz in ein anderes 
und erledigt somit die Anfrage an den Ziel Host für den anfragenden Client.\cite{noauthor_was_nodate}
Die Erweiterung Proxy WS ermöglicht es auch Websocket-Verbindungen über einen Proxy in ein anderes Netz aufzubauen.
Dies war in diesem Projekt notwendig, da Ratchet (\siehe{Ratchet}) keinen verschlüsselten Websocket-Verbindungen (WSS) unterstützt.
Um trotzdem die Verbindung zu verschlüsseln wurde ein proxy auf den localhost ein gerichtet, dadur ist die Verbindung zum Webserver verschlüsset und 
wird nur Server-intern auf einen nicht verschlüsselte Verbindung umgelegt.

**Rewrite:**
Dieses Modul stellt ermöglicht es die URL der Anfrage während der Laufzeit zu ändern.
Dies geschieht mittels eines Regulärenausdrucks und einer "RewriteRule" (Umschreibungsregel).\cite{noauthor_mod_rewrite_nodate}
Diese Modul wurde eingesetzt, um jede Anfrage, die eine ungesicherte Verbindung herstellen will, automatisch auf einen gesicherte Verbindung umzuleiten.