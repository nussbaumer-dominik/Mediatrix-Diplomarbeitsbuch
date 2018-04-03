Ein Webserver ist eine Anwendung, die Inhalte eines Computers einem Netzwerk zur Verfügung stellt, unter Verwendung diverser Netzwerkprotokolle, wie zum Beispiel HTTP. 
Die Software hat weiters die Aufgabe die Datenablage und den Zugriff zu regeln.
Als Webserver wurde das Opensource-Projekt Apache verwendet. 
Apache ist eine weitverbreitete Anwendung und auf fast allen Plattformen verfügbar.
Viele Linux-Distributionen, auch Raspbian, haben Apache bereits standardmäßig vorinstalliert.\cite[S. 663 bis 664]{jurzik_debian_2013}

## Aufbau von Apache
Der Apache Webserver ist in Modulen aufgebaut. Jedes Modul stellt dabei eine Funktion des Webservers dar.
Standardmäßig werden einige Module beim Installieren des Webservers aktiviert, um die Grundfunktionalität zu gewährleisten.
Weitere Module werden durch die Directive *LoadModule* in der Konfigurationsdatei geladen. 
Meist wird diese Anweisung in eine eigene .load-Datei ausgelagert.

Ein weiteres Feature von Apache sind Virtual-Hosts. 
Ein Webserver kann dadurch mehrere Webseiten gleichzeitig aktiviert haben. 
Dabei gibt es zwei Arten von Virtual-Hosts: namensbasierte und Ip-Adressen-basierte Hosts. 
Die Konfiguration eines solchen Virtual Hosts wird in der Konfigurations-Datei mit der Direktive VirtualHost vorgenommen.
Meist wird diese in eine extra Datei ausgelagert, die dann in dem Ordner *sites-enabled* abgelegt wird. 

Die Konfiguration ist in mehrere Konfigurationsdateien aufgeteilt. Die Hauptkonfigurationsdatei ist */etc/apache2/apache2.conf*. 
In dieser befinden sich Voreinstellungen und Erklärungen über die Konfigurationsmöglichkeiten. 
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
Enthält symbolische Links auf die Modul-Dateien in *mods-available*. 
Nur die in diesem Ordner verlinkten Module werden auch beim Start des Webservers geladen.
* **ports.conf:**
In dieser Datei wird definiert auf welchen Ports der Webserver angesprochen werden kann.
* **sites-available:**
Enthält alle verfügbaren Virtual-Hosts, in der Form von Konfigurationsdateien.
* **sites-enabled:**
Enthält symbolische Links auf die Virtual-Hosts-Dateien in *sites-available*. 
Nur die in diesem Ordner verlinkten Hosts werden auch beim Start des Webservers geladen.
* **ssl:**
Dieser Ordner enthält die Zertifikate für die SSL-Verbindung (\siehe{ssl-und-tls}).


## Verwendete Module und Konfiguration
In diesem Projekt wurden neben den Standard-Modulen, die Module: SSL, Proxy mit der Erweiterung Proxy_WS und Rewrite verwendet.

**SSL:**
Dieses Modul stellt die Verwendung von SSL-gesichertem  Http zur Verfügung (Https). 
Für die Verwendung wird ein SSL-Zertifikat benötigt, dieses kann entweder mit Hilfe der Software OpenSSL selbst erstellt werden,
oder von einer offiziellen Stelle verifiziert werden. \cite{noauthor_mod_ssl_nodate}
Bei diesem Projekt wurde das Zertifikat selbst erzeugt, da offizielle registrierte Zertifikate nur kostenpflichtig zu erhalten sind.

**Proxy und Proxy WS:**
Dieses Modul stellt die Funktion eines Proxy-Servers zur Verfügung.
Unter einem Proxy-Server versteht man einen Server, der als eine Art Vermittler auftritt. Er leitet Anfragen von einem Netz in ein anderes 
und erledigt somit die Anfrage an den Ziel-Host für den anfragenden Client.\cite{noauthor_was_nodate}
Die Erweiterung Proxy WS ermöglicht es Websocket-Verbindungen über einen Proxy in ein anderes Netz aufzubauen.
Dies war in diesem Projekt notwendig, da Ratchet (\siehe{ratchet}) keinen verschlüsselte Websocket-Verbindungen (WSS) unterstützt.
Um trotzdem die Verbindung zu verschlüsseln, wurde ein Proxy auf dem localhost eingerichtet, dadurch ist die Verbindung zum Webserver verschlüsselt und 
wird nur Server-Intern auf eine nicht verschlüsselte Verbindung umgelegt.

**Rewrite:**
Dieses Modul ermöglicht es, die URL der Anfrage während der Laufzeit zu ändern.
Dies geschieht mittels eines Regulärenausdrucks und einer "RewriteRule" (Umschreibungsregel).\cite{noauthor_mod_rewrite_nodate}
Dieses Modul wurde eingesetzt, um jede Anfrage, die eine ungesicherte Verbindung herstellen will, automatisch auf einen gesicherte Verbindung umzuleiten.