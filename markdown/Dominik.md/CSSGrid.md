## CSS Grid

[Kommentar]: # (CSS Grid, offiziell "Grid Layout Module Level 1", ist eine Technik um zwei-dimensionale Layouts in Form eines Rasters umzusetzen. Dieses Modul ist speziell für anpassungsfähige grafische Benutzeroberflächen optimiert worden. Außerdem erlaubt Grid gravierende Veränderungen des Layouts, ohne das sich diese auch im Markup wiederspiegeln müssen. Dies ist durch die explizite Positionierung der Elemente möglich. Außerdem kann der Autor die Seite mithilfe von Media Queries, in Kombination mit den Attributen des Grid Containers, an Veränderungen des Gerät Formfaktors, der Bildschirmausrichtung und Auflösung anpassen, ohne die semantische Struktur der Webseite zu beeinflussen. \cite{css_grid_layout_module})

CSS Grid Layout, offiziell "Grid Layout Module Level 1", ist ein zwei-dimensionales Raster System und wurde vom World Wide Web Consortium entwickelt, um die Art Webseiten zu schreiben, komplett zu verändern. Mittlerweile sind viele verschiedene Bildschirmauflösungen und Geräte im Umlauf. Die Anforderungen an Webseiten sind gestiegen. Diese müssen plattformunabhängig auf jedem Gerät und Browser funktionieren. Diese Vielfalt wird mit CSS immer schwerer umzusetzen. Zuerst wurden Tabellen für Layouts verwendet, danach stieg man um auf "floats", anschließend folgten "inline-block" und "positioning", doch all diese Methoden waren in Wirklichkeit Hacks und ihnen fehlten wichtige Funktionen, wie zum Beispiel vertikale Zentrierung. Wie bereits in \kap {Flexbox} erwähnt, wurde mit Flexbox eine neue Methode eingeführt, um moderne anpassungsfähige Webseiten umzusetzen. Allerdings ist diese nur gedacht für simple, ein-dimensionale Layouts. Für komplexe zwei-dimensionale Layouts ist Flexbox umständlich und ineffizient. CSS Grid hingegen ist das erste CSS Modul, dass einzig und allein für die Lösung jeglicher Layout Probleme, entwickelt wurde. Den Fokus haben die Entwickler auf grafische Benutzeroberflächen gelegt. \cite{css_grid_layout_module}

### Das Konzept
CSS Grid kontrolliert die Größe und Position der Elemente und hält dabei vordefinierte Regeln ein. Im Gegensatz zu Flexbox positioniert das Elternelement die Kindelemente auf zwei Achsen statt einer. Dadurch kann die Position der Elemente genauer bestimmt werden, dies trägt dazu bei, dass Grid besser für komplette Layouts von Webseiten geeignet ist. Weiters sind große Veränderungen, je nach Bildschirmauflösungen, ohne Adaptierung des Markups möglich, da Objekten eine explizite Position zugewiesen werden kann. Man kann somit die gesamte Seite für mobile Geräte umbauen, ohne das HTML-Markup zu berühren. Alles passiert rein mit den "Cascading Stylesheets"(CSS). \cite {css_grid_layout_module}

### technische Spezifikation
Für einen CSS Grid muss zuallererst ein Elternelement mit dem Attribut "display: grid" erstellt werden. Anschließend werden die Anzahl an Reihen mit "grid-template-rows" und die Anzahl an Spalten mit "grid-template-columns" festgelegt. Ähnlich zu Flexbox ist, dass die Reihenfolge der Elemente im HTML-Code egal ist. Mit CSS kann diese beliebig geändert werden, dadurch ist es sehr einfach Elemente mithilfe von Media Queries neu anzuordnen. Deswegen können gesamte Layouts mit minimalem CSS vollkommen umgestaltet werden, um den verfügbaren Platz so effizient wie möglich auszunutzen. Dies macht Grid zu einem der mächtigsten Werkzeuge von CSS aller Zeiten.
CSS Grid ist in den meisten Browsern nativ unterstützt und hat bereits eine globale Kompatibilität von über 87% erreicht. \cite {caniuse}

### Erklärung anhand eines realen Beispiels


```css
.parent{
  display: grid;
  grid-template: 20% / 4fr;
}
```


### Möglichkeiten