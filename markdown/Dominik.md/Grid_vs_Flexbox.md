## Gegenüberstellung von CSS Grid und Flexbox

Vor ein paar Jahren wurde Flexbox eingeführt. Es ist speziell für anpassungsfähige Webseiten entwickelt worden. Flexbox macht das Ausrichten von Elementen und deren Inhalt einfacher, so dass flüssige, flexible und dynamische Seiten erstellt werden können. Diese funktionieren mit wenig CSS in einem breiten Katalog von Geräten. Dank Flexbox sind Webseiten, die sich an verschiedene Geräte anpassen machbarer und effizienter geworden. Ohne diese Technik würden Webseiten auch heute noch nicht perfekt auf allen Bildschirmauflösungen dargestellt werden.

Allerdings ist ein neuer Konkurrent am Spielfeld erschienen - CSS Grid. Diese Technik hat einige ähnliche Eigenschaften wie Flexbox. Obwohl so gut wie jedes Layout sowohl mit Flexbox als auch CSS Grid umsetzbar ist, haben beide ihre Spezialgebiete. Deswegen stellt sich natürlich die Frage, welche Positionierungstechnik besser ist, beziehungsweise wann welche zum Einsatz kommen sollte. \cite{The ultimate {CSS} battle}

### Eine Dimension versus zwei

Der wohl gravierendste Unterschied zwischen Flexbox und Grid ist die Anzahl an Richtungen die gleichzeitig von der "Rendering Engine" des Browsers beachtet werden können, siehe Abbildung 2. Beim "Flexible Box Layout" kann nur eine Richtung beachtet werden, entweder die X-Achse oder die Y-Achse. Dadurch ist es sehr gut geeignet für Situationen, wo Elemente nur auf einer Achse positioniert werden sollen. Ein übliches Beispiel hierfür wäre eine Navigationsleiste, solange diese nur in einer Richtung ausgerichtet wird. Es ist egal, ob am oberen Rand - entlang der X-Achse oder am linken Rand - entlang der Y-Achse. Flexbox macht diese Leiste flexibler bei Veränderungen, da die Elemente beliebig auf der Achse bewegt werden können. Außerdem ist weniger Code für die Umsetzung notwendig, somit ist dieses Element simpler und leichter zu warten. Wie bereits in Kapitel \kap{Flexbox} erwähnt, ist Flexbox ausgelegt für Container, wo die Anzahl an Kindelemente unbekannt ist.
Bei CSS Grid wird hingegen eine fixe Anzahl von Reihen und Spalten definiert. Die Maße und Anordnung dieser können variieren, aber die Anzahl sollte beibehalten werden.

![grundlegender Unterschied zwischen CSS Grid und Flexbox](bilder/Dominik/Grid_vs_Flexbox.png){width=90%}

### Dynamisch versus statisch

Da bei Flexbox im CSS für den Browser genau definiert wird, wie Elemente innerhalb eines Containers anzuordnen sind, können beliebig viele Elemente dynamisch hinzugefügt werden. Diese Eigenschaft habe ich bei der Umsetzung der Benutzeroberfläche mehrmals verwendet.
Erstens befinden sich die Module für die Steuerung der einzelnen Geräte in einem Flex-Container. Da diese per Klick dynamisch hinzugefügt werden hat sich Flexbox angeboten. Beim Betätigen eines Knopfes, wird das entsprechende Modul an den \<div> angehängt. Wenn die Gesamtbreite der Elemente die Breite des Bildschirms übersteigt, wird eine Scrollbar auf der X-Achse eingeblendet.
Weiters habe ich Flexbox bei der Darstellung der vordefinierten Presets verwendet. Obwohl diese Elemente in Form eines Rasters angeordnet sind, war CSS Grid nicht geeignet. Denn bei diesem werden fixe Reihen und Spalten festgelegt. Allerdings hat mir das Probleme bereitet, da die Anzahl der Presets nicht bekannt ist.

### Erklärung der Unterschiede anhand eines Beispiels

Ein weiterer Unterschied zwischen Flexbox und CSS Grid ist, dass die Basis von Flexbox der Inhalt der Seite ist im Gegensatz zu Grid, wo die Basis das Layout ist. Um dies genauer zu erläutern habe ich ein Beispiel vorbereitet.

```html
<header>
  <div>Über Uns</div>
  <div>Das Team</div>
  <div>Ausloggen</div>
</header>
```

Bevor das \<header> Element durch das Attribut `"display: flex"` zu einem Flex-Container wird würde das derzeitige Markup aussehen wie in der Abbildung 3.

Bild

Damit der "Ausloggen" Knopf auf der rechten Seite positioniert ist, wird dieser mit einem Css-Selektor ausgewählt und durch das Setzen von `"margin-left: auto"` auf das Ende des Containers geschoben, \ref {Abbildung 3}

Bild

Bei diesem Beispiel ist zu erwähnen, dass der Browser selber entscheidet, wie die Elemente zu positionieren sind. Es wurde lediglich das Kommando erteilt, Flexbox als Positionierungstechnik zu verwenden. Das ist einer der Kernunterschiede zwischen Flexbox und CSS Grid. Obwohl Grid nicht für ein-dimensionale Layouts wie einen Header gedacht ist, werde ich dieses Element nun mit Grid nachbauen. Der HTML Code kann beibehalten werden. Im Css sind mehrere Änderungen notwendig.

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

Durch das Setzen von `"display: grid"` wird das \<header> Element zu einem CSS Grid. Die Anzahl der Spalten wird mit dem Attribut `"grid-template-columns"` definiert. In diesem Fall erstellen wir 10 Spalten zu je einer "fraction", also einen Bruchteil der Seite. Diese Einheit signalisiert dem Browser, das er den verfügbaren Platz auf alle Spalten gleich aufteilen soll. Nun weisen wir jedem einzelnen \<div> Element eine Spalte zu. Damit der "Ausloggen" Knopf am rechten Rand ist wird er explizit in die zehnte Spalte mit `"grid-column: 10 / 11"` positioniert.
