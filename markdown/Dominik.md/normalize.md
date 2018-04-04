## Normalize.css

Jeder Browser wendet standardmäßig bestimmte Stile auf jede Seite an. Dadurch werden Elemente wie Formulare oder Scrollbars auf jedem Browser anders dargestellt. Damit das Verhalten und die Darstellung von Webseiten konsistenter wird, hat Nicolas Gallagher Normalize.css entwickelt. Diese Datei überschreibt einige Stile auf allen Browsern, um die voreingestellten Stile gewissermaßen zurückzusetzen.

Nicolas Gallagher zufolge ist die Aufgabe von Normalize.css:

*   sinnvolle Browsereigenschaften zu bewahren
*   Stile für eine breite Auswahl an HTML-Elementen zurückzusetzen
*   bekannte Fehler und Browser-Inkonsistenzen zu beheben
*   die Benutzerfreundlichkeit zu verbessern
*   die Änderungen simpel mithilfe von Kommentaren zu erklären

\cite{about_normalize}

### Technische Spezifikation

Im Gegensatz zu anderen CSS-Reset-Dateien überschreibt Normalize.css nicht alle Standardstile der Browser, da sonst alle typographischen Elemente wie Überschriften und Listen neu definiert werden müssten. Allerdings werden Elemente je nach Browser eine andere Erscheinung haben, deshalb versucht Normalize.css diese so konsistent wie möglich zu gestalten.

Auch bekannte Fehler von Browsern werden behoben. Diese beinhalten unter anderem die Darstellung von SVGs im Internet Explorer, Positionierungs-Eigenschaften von HTML5-Elementen, Schriftgröße bei bereits formatierten Texten und viele weitere Probleme im Bezug auf Formulare.

Außerdem ist Normalize.css modular. Somit können nur die benötigten Module importiert werden, um die Ladegeschwindigkeit weiter zu beschleunigen. \cite{about_normalize}

Zusammenfassend kann man sagen, dass durch die Verwendung von Normalize.css das Arbeiten mit verschiedenen Browsern und Versionen angenehmer wird. Man kann auf einer vereinheitlichten Basis aufbauen und garantiert eine konsistente Darstellung quer über alle gängigen Browser.
