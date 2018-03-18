## CSS Grid
CSS Grid, offiziell "Grid Layout Module Level 1", ist eine Technik um zwei-dimensionale Layouts in Form eines Rasters umzusetzen. Dieses Modul ist speziell für responsive grafische Benutzeroberflächen optimiert. In Kombination mit Flexbox wird CSS Grid zu einem mächtigen Werkzeug. Mit diesem können komplexe Webseiten, die sich an verschiedene Bildschirmauflösungen und -verhältnisse anpassen, erstellt werden. Das World Wide Web Consortium(W3C) entwickeltdiese Derzeit wird sie nur in den neuesten Versionen der Browser unterstützt.

### Das Konzept
CSS Grid kontrolliert die Größe und Position der Elemente nach vordefinierten Regeln. Im Gegensatz zu Flexbox positioniert das Elternelement die Kindelemente auf zwei Achsen statt einer. Dadurch kann die Position der Elemente genauer bestimmt werden, was dazu beiträgt, dass Grid besser für komplette Webseiten Layouts geeignet ist. Weiters sind drastische Veränderungen, je nach Bildschirmauflösungen, ohne Adaptierung des Markups möglich, da Objekten eine explizite Position zugewiesen werden kann. Man kann somit die gesamte Seite für mobile Geräte umbauen, ohne das HTML-Markup zu berühren, alles passiert mittels der CSSs.

### technische Spezifikation
Für einen CSS Grid muss Ein Elternelement erstellt werden mit dem display-Attribut grid.

### Erklärung anhand eines realen Beispiels


```css
.parent{
  display: grid;
  grid-tempalte: 20% / 4fr;
}
```


### Möglichkeiten
