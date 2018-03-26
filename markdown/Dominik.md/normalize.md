## Was ist Normalize.css?
Jeder Browser wendet standardmäßig bestimmte Stile auf jede Seite an. Dadurch werden Elemente wie Formulare oder Scrollbars auf jedem Browser anders dargestellt. Damit die Erfahrung auf Webseiten konsistenter wird, hat Nicolas Gallagher Normalize.css entwickelt. Diese Datei überschreibt einige Stile auf allen Browser, um die voreingestellten Stile gewissermaßen zurückzusetzen.

Nicolas Gallagher zufolge ist der Zweck von Normalize.css:

* sinnvolle Browsereigenschaften zu bewahren
* Stile für eine breite Auswahl an HTML Elemente zurückzusetzen
* Bekannte Fehler und Browser Inkonsistenzen zu beheben
* die Benutzerfreundlichkeit verbessern
* die Änderungen simpel mit Kommentaren zu erklären.

\cite {about_normalize}

### technische Spezifikation

Im Gegensatz zu anderen CSS reset Dateien überschreibt Normalize nicht alle Standardstile der Browser. Sonst müssten alle Typographischen Elemente wie Überschriften und Listen neu definiert werden. Allerdings werden Elemente je nach Browser eine andere Erscheinung haben, versucht normalize diese so konsistent wie möglich zu gestalten.

Bekannte Fehler von Browsern werden auch behoben. Diese beinhalten unter anderem SVG Darstellung in Internet Explorer, Positionierungs Eigenschaften von HTML5 Elementen, Schriftgröße bei bereits formatierten Texten und viele Probleme im Bezug auf Formulare.

Außerdem ist normalize.css modular. Somit können nur die benötigten Module importiert werden, um die Ladegeschwindigkeit weiter zu beschleunigen. \cite {aboutnormalize}

Zusammenfassend kann man sagen, dass durch die Verwendung von normalize.css das Arbeiten mit verschiedenen Browsern und Versionen angenehmer wird. Man kann auf eine einheitliche Basis aufbauen und garantiert eine konsistente Darstellung quer über alle gängigen Browser.