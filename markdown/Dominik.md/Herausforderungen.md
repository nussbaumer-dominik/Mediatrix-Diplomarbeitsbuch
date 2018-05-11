Im Laufe des Projekts tauchten mehrere Herausforderungen auf und bestimmte Entscheidungen mussten getroffen werden. Am Anfang wurden gewisse Grundlagen definiert. Die Frage, ob ein Webapplikationsframework verwendet werden sollte, musste geklärt werden. Außerdem wurde der Umfang des Frontends definiert. Daraus resultierten Probleme, die ich nun genauer beleuchten möchte. 

## Webapplikationsframework

Im Schulunterricht haben wir das Angular-Framework für die Umsetzung von Frontends kennengelernt. Solch ein Framework bietet eine Vielzahl an Vorteilen wie _Two-way-Data-Binding_, _Dependency-Injection_ oder _Services_ \cite{angular_official_docs}. Allerdings habe ich mich dafür entschieden, auf solch ein Framework zu verzichten und stattdessen jQuery für das Manipulieren des DOMs zu verwenden. Wie bereits in Kapitel \ref{jQuery} erwähnt, ist jQuery eine Bibliothek. Im Gegensatz zu einem Framework kann eine Bibliothek verwendet werden, wie man es will. Bei einem Framework muss man einem strikten Muster folgen.
Da der Server ein kleiner Raspberry-Pi ist, wollte ich die Applikation schlank halten. 

Weiters ist Angular sehr umfangreich und enthält viele Funktionen, die mir bei diesem Projekt nicht geholfen hätten. Am Anfang war außerdem der Umfang des Frontends überschaubar. Allerdings wurden im Laufe des Projekts neue Anforderungen gestellt, die mithilfe eines Frameworks effizienter umgesetzt werden hätten können. Jedoch war der Umstieg auf ein Framework wie Angular nicht mehr möglich, da nicht genügend Zeit blieb.

## Kommunikation mit dem Mischpult

Wie bereits im Kapitel \ref{Websocket} angesprochen, war das Kommunizieren mit dem Soundcraft-Mischpult ein großes Problem. Da der Hersteller wollte, dass mit dem Gerät über die proprietäre Oberfläche gesteuert wird, gab es keine öffentlich einsichtliche Dokumentation über das Mischpult. Deswegen war ich auf mich allein gestellt. Ich habe verschiedenste Arten ausprobiert