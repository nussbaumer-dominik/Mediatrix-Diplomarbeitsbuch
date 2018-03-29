## Client - Server Kommunikation

Das Internet wurde zusammen mit HTTP konstruiert.
Im Großen und Ganzen wurde das Internet um das sogenannte Anforderungs- und Antwortmuster von HTTP konstruiert. Ein Client lädt eine Webseite hoch und nichts passiert, bis der Nutzer auf die nächste Seite klickt. Ungefähr im Jahr 2005 sorgte AJAX dafür, dass das Internet dynamischer wirkte. Dennoch wurde die gesamte HTTP-Kommunikation vom Client gesteuert. Dieser benötigte zum Laden neuer Daten vom Server die Interaktion der Nutzer oder periodische Abrufaktionen.

Seit einiger Zeit gibt es Technologien, durch die der Server Daten im selben Moment an den Client sendet, in dem bekannt wird, dass diese verfügbar sind. Diese Technologien werden "Push" oder "Comet" genannt. Einer der häufigsten Hacks, der den Anschein einer vom Server initiierten Verbindung gibt, wird als lange Abfrage (long polling) bezeichnet. Bei langen Abfragen öffnet der Client eine HTTP-Verbindung mit dem Server. Sie bleibt geöffnet, bis die Antwort gesendet wird. Sobald der Server über neue Daten verfügt, sendet er die Antwort. Bei anderen Methoden sind Flash, XHR-Multipart-Anforderungen und sogenannte htmlfiles erforderlich. Lange Abfragen und die anderen Methoden funktionieren ziemlich gut. Sie kommen täglich zum Einsatz, beispielsweise beim Chat in Google Mail.

Alle diese Behelfslösungen beruhen jedoch auf demselben Problem: Sie nutzen das aufwendige HTTP, was sie nicht besonders für Anwendungen mit geringer Latenz qualifiziert. Denken Sie an Shooter-Spiele mit mehreren Mitspielern im Browser oder an andere Online-Spiele mit Echtzeitkomponenten.

### technische Spezifikation - Nuss

### Kommunikation mit dem Mischpult - Nuss

### Ratchet - Clement
