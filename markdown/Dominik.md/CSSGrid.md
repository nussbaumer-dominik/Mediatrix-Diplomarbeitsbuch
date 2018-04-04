## CSS-Grid

CSS-Grid-Layout, offiziell "Grid Layout Module Level 1", ist ein zweidimensionales Raster-System und wurde vom World Wide Web Consortium(W3C) entwickelt, um die Art, Webseiten zu schreiben, komplett zu verändern. Mittlerweile sind viele verschiedene Bildschirmauflösungen und Geräte im Umlauf. Die Anforderungen an Webseiten sind gestiegen und Webapplikationen werden zunehmend komplexer und umfangreicher. Derartige Seiten müssen plattformunabhängig auf jedem Gerät und Browser funktionieren. Diese Vielfalt wurde mit CSS immer schwerer umzusetzen. Zuerst wurden Tabellen für Layouts verwendet, danach stieg man auf "floats" um, anschließend folgten "inline-block" und "positioning", doch all diese Methoden waren in Wirklichkeit nichts anderes als Hacks, denen wichtige Funktionen fehlten, wie zum Beispiel die vertikale und horizontale Zentrierung. Wie bereits in Kapitel 5.2.1 Flexbox erwähnt, wurde mit Flexbox eine neue Methode eingeführt, um moderne, anpassungsfähige Webseiten umzusetzen. Allerdings ist diese Anwendung nur für simple, eindimensionale Layouts gedacht. Für komplexe zweidimensionale Layouts ist Flexbox umständlich und ineffizient. CSS-Grid hingegen ist das erste CSS-Modul, das einzig und allein für die Lösung jeglicher Layout-Probleme entwickelt wurde. Den Fokus haben die Entwickler auf grafische Benutzeroberflächen und Webapplikationen gelegt. \cite{CSS_Grid_Official}

### Das Konzept

CSS-Grid kontrolliert die Größe und Position der Elemente und hält dabei vordefinierte Regeln ein. Im Gegensatz zu Flexbox positioniert das Elternelement die Kindelemente auf zwei Achsen anstatt auf einer. Dadurch kann die Position der Elemente genauer bestimmt werden. Dies trägt dazu bei, dass Grid besser für komplette Layouts von Webseiten geeignet ist. Weiters sind große Veränderungen, je nach Bildschirmauflösung, ohne Adaptierung des Markups möglich, da Objekten eine explizite Position zugewiesen werden kann. Somit ist es möglich die gesamte Seite für mobile Geräte umzubauen, ohne das HTML-Markup berühren zu müssen. Alles passiert ausschließlich mit den Cascading-Style-Sheets(CSS). \cite{CSS_Grid_Mozilla}

### Technische Spezifikation

Für einen CSS-Grid muss zuallererst ein Elternelement mit dem Attribut _display: grid_ erstellt werden. Anschließend wird die Anzahl an Reihen mit _grid-template-rows_ und die Anzahl an Spalten mit _grid-template-columns_ festgelegt. Ähnlich zu Flexbox ist, dass die Reihenfolge der Elemente im HTML-Code egal ist. Mit CSS kann diese Anordnung beliebig geändert werden. Dadurch ist es sehr einfach, Elemente mithilfe von Media-Queries neu anzuordnen. Deswegen können gesamte Layouts mit minimalem CSS vollkommen umgestaltet werden, um den verfügbaren Platz so effizient wie möglich auszunutzen. Dies macht Grid zu einem der mächtigsten CSS-Werkzeuge aller Zeiten. \cite{CSS_Grid_Official}

CSS-Grid ist in den meisten Browsern nativ unterstützt und hat bereits eine globale Kompatibilität von über 87% erreicht. \cite{browser_support_grid}

### Erklärung anhand eines Beispiels

Um die Fähigkeiten von CSS-Grid etwas besser zu erläutern, habe ich ein Beispiel vorbereitet. Die Aufgabe ist es, eine dreispaltige Webapplikation für Facebook zu erstellen. Es gibt eine Spalte für Posts, eine für Nachrichten und eine Suchfunktion. Das Layout sollte aussehen wie in \abb{css-grid_eineSpalte} dargestellt. \cite{CSS_Grid_Official}

```html
<div class="facebook">
  <div class="Posts">Posts</div>
  <div class="nachrichten">Nachrichten</div>
  <div class="suche">Suche</div>
</div>
```

Das HTML-Markup ist recht simpel, was auch einer der Vorteile von CSS-Grid ist. Es gibt nur einen Grid-Container. Dieser beinhaltet drei weitere \<div>-Elemente. Der spannende Teil ist allerdings im Style sheet. \cite{CSS_Grid_Official}

```css
.facebook {
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	grid-template-rows: 100vh;
}
```

Zuallererst wird das \<div>-Element mit der Klasse ".facebook" selektiert und mit dem Attribut _display: grid_ als ein Grid-Container definiert. Die Grid-Eigenschaft legt außerdem einen neuen Kontext für das Grid-Layout fest. Dieser wird benötigt, um mit Grid ein Layout aufzubauen. Dieses Elternelement unterteilt den verfügbaren Raum mit dem Befehl _grid-template-columns: 1fr 1fr 1fr_ auf drei gleich große Spalten. _1 fr_ bedeutet, dass jedes Kindelement einen Teil des verfügbaren Platzes zugewiesen bekommt. Da drei Spalten definiert sind, ist jede Spalte 33.33% breit. Zuletzt müssen die Reihen definiert werden. Da unsere Spalten die gesamte Höhe des Browsers einnehmen sollen, muss mit _grid-template-rows_ eine Zeile mit 100% der Höhe definiert werden. \cite{CSS_Grid_Official}

![Ein dreispaltiges CSS-Grid-Layout mit einer Zeile \label{css-grid_eineSpalte}](bilder/Dominik/CSS_Grid_example_1.pdf){width=90%}

Dieses Layout kann mit Grid sehr einfach verändert werden, zum Beispiel in ein einspaltiges.

```css
.facebook {
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: 1fr 1fr 1fr;
}
```

Man muss lediglich die Anzahl der Spalten auf eine ändern. Weiters fügt man zwei weitere Zeilen hinzu. Der vorhandene Platz soll gleichmäßig aufgeteilt werden(siehe \abb{einspaltiges-Layout}).

![Ein einspaltiges CSS-Grid-Layout mit drei Zeilen \label{einspaltiges-Layout}](bilder/Dominik/CSS_Grid_example_2.pdf){width=90%}

Damit das Layout auf mobilen Geräten optimal angezeigt wird, können Media-Queries verwendet werden.

```css
@media screen and (max-width: 576px) {
	.facebook {
		grid-template-columns: 1fr 1fr;
		grid-template-rows: 50vh 50vh;
	}
}
```

Diese Media-Query wird aktiviert, wenn die Breite des Bildschirms unter 576 Pixel beträgt. Diese Ansicht wird somit nur auf Smartphones verwendet. \cite[S.21]{responsive_design}

### Weitere Möglichkeiten von CSS-Grid

Die größte Stärke von CSS-Grid ist die explizite Positionierung auf zwei Achsen. Deswegen eignet sich dieses Modul hervorragend für komplette Webseitenlayouts. Die Grundstruktur einer Seite sollte mit CSS-Grid aufgebaut sein. Solange die Anzahl der Elemente statisch ist, funktioniert das Raster-System sehr gut. Die Kindelemente können bei einer Änderung der Bildschirmauflösung vollkommen neu angeordnet werden. Innerhalb der einzelnen Elemente kann man Flexbox verwenden, da es sehr gut für die Umsetzung von Komponenten eingesetzt werden kann. \cite{CSS_Grid_Official}

Im Großen und Ganzen ist CSS-Grid eines der spannendsten und mächtigsten Module, das CSS derzeit zu bieten hat. Das W3C hat sich hohe Ziele für diese neue Positionierungsart gesetzt und ich glaube, dass CSS-Grid diese übertreffen kann.
