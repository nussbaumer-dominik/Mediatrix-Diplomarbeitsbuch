## CSS Grid
CSS Grid, offiziell "Grid Layout Module Level 1", ist eine Technik um zwei-dimensionale Layouts in Form eines Rasters umzusetzen. Dieses Modul ist speziell für anpassungsfähige grafische Benutzeroberflächen optimiert. Außerdem erlaubt Grid eine gravierende Veränderung des Layouts, ohne das das Markup dementsprechend angepasst werden muss. Dies ist durch die explizite Positionierung der Elemente möglich. Außerdem kann der Author die Seite mithilfe von Media Queries, in Kombination mit den Attributen des Grid Containers, das Layout an Veränderungen des Gerät Formfaktors, der Bildschirmausrichtung und Auflösung anpassen, ohne die semantische Struktur der Webseite zu beeinflussen. \cite{css_grid_layout_module}

### Das Konzept
CSS Grid kontrolliert die Größe und Position der Elemente nach vordefinierten Regeln. Im Gegensatz zu Flexbox positioniert das Elternelement die Kindelemente auf zwei Achsen statt einer. Dadurch kann die Position der Elemente genauer bestimmt werden, was dazu beiträgt, dass Grid besser für komplette Webseiten Layouts geeignet ist. Weiters sind drastische Veränderungen, je nach Bildschirmauflösungen, ohne Adaptierung des Markups möglich, da Objekten eine explizite Position zugewiesen werden kann. Man kann somit die gesamte Seite für mobile Geräte umbauen, ohne das HTML-Markup zu berühren, alles passiert mittels der "Cascading Stylesheets"(CSS). \cite {complete_guide_to_Grid}

### technische Spezifikation
Für einen CSS Grid muss ein zuallererst ein Elternelement mit dem Attribut "display: grid" erstellt werden.

### Erklärung anhand eines realen Beispiels


```css
.parent{
  display: grid;
  grid-tempalte: 20% / 4fr;
}
```


### Möglichkeiten
