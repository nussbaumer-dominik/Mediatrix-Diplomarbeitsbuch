## CSS Grid

[kommentar]: # 'CSS Grid, offiziell "Grid Layout Module Level 1", ist eine Technik um zweidimensionale Layouts in Form eines Rasters umzusetzen. Dieses Modul ist speziell für anpassungsfähige grafische Benutzeroberflächen optimiert worden. Außerdem erlaubt Grid gravierende Veränderungen des Layouts, ohne das sich diese auch im Markup wiederspiegeln müssen. Dies ist durch die explizite Positionierung der Elemente möglich. Außerdem kann der Autor die Seite mithilfe von Media Queries, in Kombination mit den Attributen des Grid Containers, an Veränderungen des Gerät Formfaktors, der Bildschirmausrichtung und Auflösung anpassen, ohne die semantische Struktur der Webseite zu beeinflussen. \cite{css_grid_layout_module}'

CSS Grid Layout, offiziell "Grid Layout Module Level 1", ist ein zweidimensionales Raster System und wurde vom World Wide Web Consortium(W3C) entwickelt, um die Art Webseiten zu schreiben, komplett zu verändern. Mittlerweile sind viele verschiedene Bildschirmauflösungen und Geräte im Umlauf. Die Anforderungen an Webseiten sind gestiegen und Webapplikationen werden zunehmend komplexer und umfangreicher. Diese Seiten müssen plattformunabhängig auf jedem Gerät und Browser funktionieren. Diese Vielfalt wird mit CSS immer schwerer umzusetzen. Zuerst wurden Tabellen für Layouts verwendet, danach stieg man um auf "floats", anschließend folgten "inline-block" und "positioning", doch all diese Methoden waren in Wirklichkeit Hacks und ihnen fehlten wichtige Funktionen, wie zum Beispiel vertikale Zentrierung. Wie bereits in \kap {Flexbox} erwähnt, wurde mit Flexbox eine neue Methode eingeführt, um moderne, anpassungsfähige Webseiten umzusetzen. Allerdings ist diese nur gedacht für simple, eindimensionale Layouts. Für komplexe zweidimensionale Layouts ist Flexbox umständlich und ineffizient. CSS Grid hingegen ist das erste CSS Modul, dass einzig und allein für die Lösung jeglicher Layout Probleme entwickelt wurde. Den Fokus haben die Entwickler auf grafische Benutzeroberflächen und Webapplikationen gelegt. \cite{css_grid_layout_module}

### Das Konzept

CSS Grid kontrolliert die Größe und Position der Elemente und hält dabei vordefinierte Regeln ein. Im Gegensatz zu Flexbox positioniert das Elternelement die Kindelemente auf zwei Achsen statt einer. Dadurch kann die Position der Elemente genauer bestimmt werden, dies trägt dazu bei, dass Grid besser für komplette Layouts von Webseiten geeignet ist. Weiters sind große Veränderungen, je nach Bildschirmauflösungen, ohne Adaptierung des Markups möglich, da Objekten eine explizite Position zugewiesen werden kann. Man kann somit die gesamte Seite für mobile Geräte umbauen, ohne das HTML-Markup zu berühren. Alles passiert rein mit den "Cascading Stylesheets"(CSS). \cite {css_grid_layout_module}

### technische Spezifikation

Für einen CSS Grid muss zuallererst ein Elternelement mit dem Attribut "display: grid" erstellt werden. Anschließend werden die Anzahl an Reihen mit "grid-template-rows" und die Anzahl an Spalten mit "grid-template-columns" festgelegt. Ähnlich zu Flexbox ist, dass die Reihenfolge der Elemente im HTML-Code egal ist. Mit CSS kann diese beliebig geändert werden, dadurch ist es sehr einfach Elemente mithilfe von Media Queries neu anzuordnen. Deswegen können gesamte Layouts mit minimalem CSS vollkommen umgestaltet werden, um den verfügbaren Platz so effizient wie möglich auszunutzen. Dies macht Grid zu einem der mächtigsten Werkzeuge von CSS aller Zeiten.
CSS Grid ist in den meisten Browsern nativ unterstützt und hat bereits eine globale Kompatibilität von über 87% erreicht. \cite {caniuse}

### Erklärung anhand eines Beispiels

Um die Fähigkeiten von CSS Grid etwas besser zu erläutern habe ich mir ein Beispiel überlegt. Wir wollen eine drei spaltige Webapplikation für Twitter erstellen. Es gibt eine Spalte für Tweets, eine für Nachrichten und eine Suchfunktion. Das Layout sollte aussehen wie Abbildung 4.

```html
<div class="twitter">
  <div class="tweets">Tweets</div>
  <div class="nachrichten">Nachrichten</div>
  <div class="suche">Suche</div>
</div>
```

Das HTML ist recht simpel, das ist auch einer der Vorteile von CSS Grid. Es gibt nur einen "Grid Container". Dieser beinhaltet drei weitere \<div> Elemente. Die eigentliche Action passiert im Stylesheet.

```css
.twitter {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 100vh;
}
```

Zuallererst wird das \<div> Element mit der Klasse ".twitter" selektiert und mit dem Attribut `"display: grid"` als ein Grid Container definiert. Die grid Eigenschaft legt außerdem einen neuen Kontext für das Grid Layout fest. Dieser wird benötigt um mit Grid ein Layout aufzubauen. Dieses Elternelement unterteilt den verfügbaren Raum wegen `"grid-template-columns: 1fr 1fr 1fr"` auf drei gleich große Spalten. `"1 fr"` bedeutet, dass jedes Kindelement einen Bruchteil des verfügbaren Platzes zugewiesen bekommt. Da wir drei Spalten definiert haben, ist jede Spalte 33.33% breit. Zuletzt müssen die Reihen definiert werden. Da unsere Spalten die gesamte Höhe des Browsers.

![Ein dreispaltiges CSS Grid Layout](bilder/Dominik/CSS_Grid_example_1.png){width=90%}

Aus diesem Layout kann mit Grid sehr einfach ein zweispaltiges gemacht werden.

```css
.twitter {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 50vh 50vh;
}
```

Man muss lediglich die Anzahl der Spalten auf zwei ändern. Weiters fügt man eine weitere Zeile mit der halben Höhe hinzu. Das würde wie in Abbildung 5 aussehen.

![Ein zweispaltiges CSS Grid Layout mit zwei Zeilen](bilder/Dominik/CSS_Grid_example_2.png){width=90%}

Damit das Layout auf mobilen Geräten optimal angezeigt wird, können wir Media Queries verwenden.

```css
@media screen and (max-width: 576px) {
  .twitter {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 50vh 50vh;
  }
}
```

Diese Media Query wird aktiviert, wenn die Breite des Bildschirms unter 576 Pixel beträgt. Das heißt diese Ansicht wird auf Smartphones angezeigt.

### Möglichkeiten
