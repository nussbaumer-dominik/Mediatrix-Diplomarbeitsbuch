## Gegenüberstellung von CSS-Grid und Flexbox

Vor ein paar Jahren wurde Flexbox eingeführt. Es ist speziell für anpassungsfähige Webseiten entwickelt worden. Flexbox macht das Ausrichten von Elementen und deren Inhalt einfacher, sodass flüssige, flexible und dynamische Seiten erstellt werden können. Diese funktionieren mit wenig CSS-Code in einem breiten Katalog von Geräten. Dank Flexbox sind Webseiten, die sich an verschiedene Geräte anpassen müssen, machbarer und effizienter geworden. Ohne diese Technik würden Webseiten auch heute noch nicht perfekt in allen Bildschirmauflösungen dargestellt werden können.

Allerdings ist ein neuer Konkurrent am Spielfeld erschienen - CSS-Grid. Diese Technik hat einige ähnliche Eigenschaften wie Flexbox. Obwohl so gut wie jedes Layout sowohl mit Flexbox als auch CSS-Grid umsetzbar ist, haben beide Techniken ihre speziellen Einsatzgebiete. Deswegen stellt sich natürlich die Frage, welche Positionierungstechnik gerade besser ist, beziehungsweise wann welche Technik zum Einsatz kommen sollte. \cite{complete_guide_grid}

### Eine versus zwei Richtungen

Der wohl gravierendste Unterschied zwischen Flexbox und Grid ist die Anzahl an Richtungen, die gleichzeitig von der "Rendering Engine" des Browsers beachtet werden können (siehe \abb{grundlegender_Unterschied}). Beim "Flexible Box Layout" kann nur eine Richtung beachtet werden, entweder die X-Achse oder die Y-Achse. Dadurch ist es sehr gut geeignet für Anwendungen, in denen Elemente nur auf einer Achse positioniert werden sollen. Ein häufiges Beispiel hierfür wäre eine Navigationsleiste, solange diese nur in einer Richtung ausgerichtet wird. Es ist egal, ob am oberen Rand - entlang der X-Achse oder am linken Rand - entlang der Y-Achse. Flexbox macht diese Leiste bei Veränderungen flexibler, da die Elemente beliebig auf der Achse bewegt werden können. Außerdem ist weniger Code für die Umsetzung notwendig, somit ist dieses Element simpler und leichter zu warten. Wie bereits in Kapitel 5.2.1 Flexbox erwähnt, ist Flexbox ausgelegt für Container, bei denen die Anzahl an Kindelementen unbekannt ist. \cite[S.65, S.66]{responsive_design}

Bei CSS-Grid wird hingegen eine fixe Anzahl von Reihen und Spalten definiert. Die Maße und die Anordnung dieser können variieren, aber die Anzahl sollte beibehalten werden. \cite{flexbox_official}

![grundlegender Unterschied zwischen CSS-Grid und Flexbox \label{grundlegender_Unterschied}](bilder/Dominik/Grid_vs_Flexbox.pdf){width=90%}

### Dynamisch versus statisch

Da bei Flexbox im CSS für den Browser genau definiert wird, wie Elemente innerhalb eines Containers anzuordnen sind, können beliebig viele Elemente dynamisch hinzugefügt werden. Diese Eigenschaft habe ich bei der Umsetzung der Benutzeroberfläche mehrmals verwendet.
Erstens befinden sich die Module für die Steuerung der einzelnen Geräte in einem Flex-Container. Da diese per Klick dynamisch hinzugefügt werden können, hat sich hier Flexbox angeboten. Beim Betätigen eines Knopfes wird das entsprechende Modul an den \<div> angehängt. Wenn die Gesamtbreite der Elemente die Breite des Bildschirms übersteigt, wird eine Scrollbar auf der X-Achse eingeblendet. Weiters habe ich Flexbox bei der Darstellung der vordefinierten Presets verwendet. Obwohl diese Elemente in Form eines Rasters angeordnet sind, war CSS-Grid nicht geeignet. Denn bei diesem werden fixe Reihen und Spalten festgelegt. Allerdings hat mir das Probleme bereitet, da die Anzahl der Presets zum Zeitpunkt der Entwicklung nicht bekannt war. \cite{flexbox_vs_grid}

### Erklärung der Unterschiede anhand eines Beispiels

Ein weiterer Unterschied zwischen Flexbox und CSS-Grid ist, dass die Basis von Flexbox der Inhalt der Seite ist, aber bei Grid das Layout die Basis ist. Um dies genauer zu erläutern, habe ich ein Beispiel vorbereitet. \cite{flexbox_vs_grid}

```html
<header>
  <div>Über Uns</div>
  <div>Das Team</div>
  <div>Impressum</div>
  <div>Ausloggen</div>
</header>
```

Bevor das \<header> Element durch das Attribut _display: flex_ zu einem Flex-Container wird, sieht das derzeitige Markup aus wie in \abb{ohne_flex}. \cite{flexbox_official}

![derzeitige Darstellung ohne Flexbox \label{ohne_flex}](bilder/Dominik/Flexbox_example_1.pdf){width=90%}

Damit der Ausloggen-Knopf auf der rechten Seite des Bildschirms positioniert ist, wird dieser mit einem CSS-Selektor ausgewählt und durch das Setzen von _margin-left: auto_ an das Ende des Containers geschoben (siehe \abb{mit_flex}).

![Layout mit _display: flex_ \label{mit_flex}](bilder/Dominik/Flexbox_example_2.pdf){width=90%}

Bei diesem Beispiel ist zu erwähnen, dass der Browser selber entscheidet, wie die Elemente zu positionieren sind. Es wurde lediglich das Kommando erteilt, Flexbox als Positionierungstechnik zu verwenden. Das ist einer der Kernunterschiede zwischen Flexbox und CSS-Grid. Obwohl Grid nicht für eindimensionale Layouts wie einen Header gedacht ist, werde ich dieses Element nun mit Grid nachbauen. Der HTML-Code kann beibehalten werden. Im CSS-Code wären dafür mehrere Änderungen notwendig.

```css
header {
	display: grid;
	grid-template-columns: repeat(10, 1fr);
}
div:nth-child(1) {
	grid-column: 1 / 2;
}
div:nth-child(2) {
	grid-column: 2 / 3;
}
div:nth-child(3) {
	grid-column: 10 / 11;
}
```

Durch das Setzen von _display: grid_ wird das \<header>-Element zu einem CSS-Grid. Die Anzahl der Spalten wird mit dem Attribut _grid-template-columns_ definiert. Der Hauptunterschied bei diesem Ansatz ist, dass die Spalten, also das Layout, zuerst definiert werden mussten. Man benötigt Spalten, um dort Inhalt zu platzieren. In diesem Fall erstellt man zehn Spalten zu je einem "fr", also einem Bruchteil der Seite. Diese Einheit signalisiert dem Browser, dass er den verfügbaren Platz auf alle Spalten gleichmäßig aufteilen soll. Nun weisen wir jedem einzelnen \<div>-Element eine Spalte zu. Damit der Ausloggen-Knopf am rechten Rand positioniert ist, wird er explizit in die zehnte Spalte mit _grid-column: 10 / 11_ geschoben. Dieser Ansatz zwingt uns, die Anzahl der Spalten festzulegen. Sofern der Grid nicht verändert wird, hat er zehn Spalten. Dies ist eine eindeutige Begrenzung, die in Flexbox nicht vorhanden wäre. \cite{flexbox_official}

### Kombination von CSS-Grid und Flexbox

Wie bereits erwähnt, haben beide dieser Technologien ihre Vor- und Nachteile. Demnach gibt es verschiedene Anwendungsfälle für sie. Allerdings sollten diese Module vorzugsweise zusammen verwendet werden. Mithilfe von CSS-Grid kann ein Raster-System für das Layout der gesamten Webseite erstellt werden. Innerhalb der einzelnen Inhaltselemente hat man dann mit Flexbox mehr Möglichkeiten, wie zum Beispiel das dynamische Hinzufügen von Elementen. Um zu zeigen, wie so ein Anwendungsfall aussehen könnte, habe ich die beiden obigen Beispiele verbunden. \cite{CSS_Grid_Official}

```html
<div class="container">
  <header>Kopfzeile</header>
  <aside>Menü</aside>
  <main>Inhalt</main>
  <footer>Fußzeile</footer>
</div>
```

Das HTML-Markup ist weiterhin sehr simpel. Die Kopfzeile soll die gesamte Breite der Seite einnehmen und am oberen Rand platziert sein. Das Menü ist schmal und am linken Rand der Seite. Der Inhalt soll den restlichen horizontalen Platz einnehmen. Am unteren Rand soll es noch eine Fußzeile geben. Das Layout ist in \abb{Kombination} zu sehen.

```css
.container {
	display: grid;
	grid-template-columns: repeat(12, 1fr);
	grid-template-rows: 50px 350px 50px;
}
header {
	grid-column: span 12;
	display: flex;
}
header > div:nth-child(3) {
	margin-left: auto;
}
aside {
	grid-column: span 2;
}
main {
	grid-column: span 10;
}
footer {
	grid-column: span 12;
}
```

![Layout-Kombination von Flexbox und CSS-Grid \label{Kombination}](bilder/Dominik/Flexbox_and_grid_example.pdf){width=90%}

In diesem CSS-Code passiert eine Menge. Das Elternelement wird zu einem Grid-Container gemacht. Weiters werden zwölf Spalten mit einem gleich großen Anteil des verfügbaren Platzes erstellt. Außerdem gibt es drei Reihen mit unterschiedlichen Höhen. Die Kopfzeile erstreckt sich wegen der Eigenschaft _grid-column: span 12_ über alle zwölf Spalten. Wegen des Attributes _display: flex_ ist der Header ein Flex-Container. Dieser ist aufgebaut wie im obigen Beispiel zu Flexbox erläutert. Durch _grid-column: span 2_ nimmt das Menü nur zwei Spalten ein. Dem Inhalt wird der restliche Platz zugewiesen. Die Fußzeile ist aufgebaut wie die Kopfzeile und ist ebenfalls so breit wie der Bildschirm. \cite{CSS_Grid_Official}

### Flexbox oder CSS-Grid?

Welches dieser beiden Module das Bessere ist, ist die falsche Frage. Sie sollte eher lauten, wann welches System besser geeignet ist. Am besten werden sie allerdings gemeinsam eingesetzt. Man kann die Vorteile von Flexbox, wie zum Beispiel Dynamik oder Flexibilität, mit den Vorteilen von CSS-Grid, wie zum Beispiel explizite Positionierung und Layout-Unabhängigkeit, verbinden.

Da auf dem Dashboard von Mediatrix verschiedenste Daten dynamisch geladen werden, habe ich mich dafür entschieden, die komplette Seite mit Flexbox aufzubauen. Ein weiterer Grund für diese Entscheidung war die Browser-Kompatibilität, da Flexbox bereits zu über 95% unterstützt wird und CSS-Grid erst 87% erreicht hat. Außerdem habe ich Flexbox im Unterricht gelernt und hatte deswegen bereits ein grundsätzliches Verständnis der Technologie. \cite{browser_support_flex, browser_support_grid}
