Als Datenbank wurde in diesem Projekt Sqlite gewählt.
Bei Sqlite handelt es sich um eine Datei basierte Datenbank,
das bedeutet, dass im Hintergrund eine C-Library arbeitet
und die Daten in einem File im dateisystem abölegt.
Im Vergleich zu anderen Datenbanksystem wie MySql
ist hier kein zusätzlicher Datenbank-Server notwendig.
Der Zugriff auf die Datenbank ist, wie man es von anderen Datenbanken gewohnt ist, mit SQL möglich.
Ein Problem von Sqlite ist, dass bei jedem Schreibvorgang die gesmate Datenbank-Datei neu geschrieben wird.
Somit ist das einfügen von Daten in die datenbank sehr langsam.
Weiters sollte auch beachtet werde, dass Dateien auf dem Webserver meist öffentlich einsehbar sind.
Das sollte bei SQlite zumindest für das Datenbankverzeichnis verhindert werden,
da sonst die gesmate Datenbank von einem Client heruntergeladen werden kann.
Ein Vorteil hingegen entsteht beim Lesen von Daten.
Da im Hintergrund keine Verbindung hergestellt werden muss,
ist der Lesevorgang schneller als bei herkömmlichen Datenbanken.\cite[S. 617]{wenz_php_2017}

## Vorteile für diese Projekt
SQlite bringt für dieses Projekt einen großen Vorteil, da die Datenbank als Datei abgelegt werden kann
und kein eigener datenbank-Server betrieben werden muss.
Das bringt eine reduktion der verwendeten Ressourcen, 
die durch den Raspberry Pi nur sehr knapp bemessen zur Verfügung stehen.
Weiters finden auch sehr selten Schreibzugriffe statt, 
weswegen die etwas langsamere Geschwindigkeit hierbei keine Rolle spielt.
Ein Vorteil gegen über eines einfachen JSON-Files, in das die daten abgespeichert werden, ist,
dass auch Relationen abgebildet werden können.
