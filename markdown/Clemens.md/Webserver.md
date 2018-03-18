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
* **mods-enabled:**
* **ports.conf:**
* **sites-available:**
* **sites-enabled:**
* **ssl:**


## Verwendete Module und Konfiguration
