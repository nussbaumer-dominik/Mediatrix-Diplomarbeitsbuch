## Flexbox

Flexbox, offiziell "CSS Flexible Box Layout Module Level 1", ist eine neue Art und ein neues Konzept, um eindimensionale Layouts auf Webseiten umzusetzen. Früher hat man allen Elementen mit dem Klassen-Selektor fixe Positionen, Maße und Eigenschaften zugewiesen. Mit Id-Selektoren wurden einzelne Elemente weiter modifiziert.
Doch bei Flexbox werden grundlegende Regeln festgelegt, wie sich Elemente innerhalb eines Containers zu verhalten haben. Dies macht das Verhalten der Seite auch bei einer Änderung der Bildschirmauflösung vorhersagbar. Anschließend ist es dem Browser überlassen, die Breite, Höhe, Position und Anordnung, entsprechend den vordefinierten Regeln, zu wählen. Damit wird die Implementierung von Webseiten, die ihr Design an verschiedene Bildschirmauflösungen anpassen müssen, plattformübergreifend und effizient. \cite{flexbox_official}

### Das Konzept

Die Grundidee ist es, dem Flex-Container die Möglichkeit zu geben, die Maße der Elemente so zu verändern, dass der Platz bei unterschiedlichen Bildschirmauflösungen bestmöglich ausgenutzt ist. Um das zu erzielen, lässt das Elternelement die Kindelemente je nach Bedarf wachsen oder schrumpfen. Es werden bestimmte Regeln festgelegt, wie zum Beispiel die Mindestbreite der Elemente, die Achse, an der die Objekte ausgerichtet werden oder, ob die Elemente in die nächste Zeile wandern sollen, wenn es in einer zu eng wird. \cite{complete_guide_flexbox}

### Technische Spezifikation

Innerhalb eines Containers können die einzelnen Elemente ihre Größe "flexibel" verändern. Sie wachsen, um freien Platz zu verwenden oder schrumpfen, damit mehr Elemente pro Zeile platziert werden können. Weiters achtet Flexbox darauf, dass Elemente innerhalb des Elternobjekts bleiben und nicht darüber hinauswandern. Der große Vorteil des Flexbox-Layouts ist die Möglichkeit, die Achse, an der die Elemente ausgerichtet werden, bei einer Änderung der Auflösung anzupassen. Dadurch ist das Layout sehr flexibel, was Orientierungsänderungen bei mobilen Geräten oder Auflösungsänderungen auf Desktop-Geräten betrifft. \cite{basic_concepts_flexbox}

### Erklärung anhand eines realen Beispiels

Die Aufgabenstellung: auf der Webseite soll eine Navigation auf der linken Seite angezeigt werden, die auf mobilen Geräten an den unteren Rand des Bildschirms wandert (siehe Abbildung 5.1). Bei diesem Layout ist entscheidend, dass die Reihenfolge der Elemente unabhängig vom Markup geändert werden kann.

![Flexbox-Beispiel Darstellung](bilder/Dominik/Flexbox_Illustration_1.png){width=90%}

Mithilfe von Flexbox ist dieses Verhalten einfach zu erzielen. Wie bereits erwähnt, gibt es bei Flexbox Elternelemente und Kindelemente. Die Elternelemente, auch "Container" genannt, agieren als Rahmen, in dem die Kindelemente, auch "items" genannt, enthalten sind.
Für das aktuelle Beispiel erstelle ich zunächst einen Container mit den Eigenschaften _display:flex_. Dadurch weiß der Browser, dass dieses Element mit Flexbox positioniert werden soll. \cite{basic_concepts_flexbox}

Die Kindelemente dieses Flex-Containers werden standardmäßig auf der horizontalen X-Achse ausgerichtet. Wenn der Inhalt eines Elements mehr Platz einnimmt als vorhanden, dann läuft er über die Grenzen hinaus. Damit dieser Zustand nicht eintritt, wird der Überlauf des Flex-Containers mit _overflow: hidden_ auf der X- und Y- Achse ausgeblendet. Die Navigation auf der Seite ist in folgendem Code-Block beschrieben. \cite{flexbox_official}

```css
.parent {
	display: flex;
	overflow: hidden;
}
```

Dieses Element ist durch _order: 1_ das erste Element in der Flexbox, allerdings muss es nicht das erste im HTML-Markup sein. Mit Flexbox ist es möglich, die Reihenfolge unabhängig vom HTML-Code zu verändern. Damit die seitliche Navigationsleiste eine fixe Position behält, wird ein Hack angewendet. Denn durch das Setzen des Attributs _overflow-y: hidden_ scrollt die Seite nur den restlichen Teil der Flexbox und nicht die Navigationsleiste. Weiters werden die Elemente innerhalb des Containers mit _justify-content: center_ und _align-items: center_ horizontal und vertikal zentriert und sind durch _flex-direction: column_ entlang der Y-Achse positioniert. \cite{flexbox_official}

\newPage

```css
.side-nav {
	display: flex;
	order: 1;
	justify-content: center;
	align-items: center;
	flex-direction: column;
}
```

Das Inhaltselement wird wegen des Attributes _order: 2_ neben dem ersten Element auf der X-Achse positioniert.
Weiters wird innerhalb dieses Elements auch mit Flexbox positioniert, wobei der Kontext ein anderer ist. Alle Kindelemente des Inhaltselements werden horizontal mit _justify-content: center_ zentriert. In diesem Rahmen ist die Y-Achse die Hauptachse, das heißt, die Elemente werden vertikal verteilt. \cite{flexbox_official}

```css
.content {
	overflow-y: hidden;
	display: flex;
	justify-content: center;
	flex-direction: column;
	order: 2;
}
```

Damit die Navigation auf mobilen Geräten am unteren Rand positioniert ist, benötigen wir eine Media-Query, also eine Abfrage von bestimmten Eigenschaften. Mithilfe dieser können CSS-Stile anhand von verschiedenen Eigenschaften, wie zum Beispiel Bildschirmauflösung oder Seitenverhältnis, manipuliert werden. Im untenstehenden Code-Block wird dies veranschaulicht. Indem wir die Y-Achse des Flexbox-Elternelements mit dem Attribut _flex-direction: column_ zur Hauptachse machen, werden die beiden Kindelemente vertikal verteilt. Damit nun auch die Navigation unter dem Inhalt positioniert ist, ändern wir die Reihenfolge mit dem Attribut _order: 2_. Dadurch ist dieses Element das zweite in dem Container, obwohl es im HTML-Markup das erste ist. Weiters müssen Höhe und Breite angepasst werden, damit das Element die gesamte Breite des Bildschirms einnimmt und nicht mehr die gesamte Höhe, wie bei der Desktopversion. \cite{flexbox_official, responsive_design}

```css
@media (max-width: 576px) {
	.parent {
	    //Die Y-Achse des Elternelements wird zur Hauptachse.
		flex-direction: column; 
	}

	.side-nav {
		order: 2; //Reihenfolge des Elements verändern
		width: 100vw; //gesamte Breite des Bildschirms ausnutzen
		height: 66px; //Die Höhe fix setzen
	}
}
```

### Weitere Möglichkeiten von Flexbox

"Das Flexible Box Layout Module" eignet sich äußerst gut für die Umsetzung von einzelnen Komponenten, die in sich geschlossen funktionieren müssen. Die Regeln, wie sich Elemente innerhalb eines Containers zu verhalten haben, werden einmal festgelegt. Das erleichtert das Erstellen von Bereichen, in denen dynamisch mit Javascript Inhaltselemente hinzugefügt werden. Generell ist Flexbox die beste Technik, um Teile einer Webseite zu schreiben, bei der die Anzahl der Elemente unbekannt ist, beziehungsweise die Anzahl der Kindelemente nicht statisch ist. \cite{flexbox_official}

Ein weiteres Einsatzgebiet von Flexbox ist die vertikale und horizontale Zentrierung von Inhaltselementen. Das Zentrieren ist in Flexbox eine knifflige Angelegenheit. Text kann mit dem Attribut _text-align_ zentriert werden. Block-Elemente kann man mit Margins oder Transformationen zentrieren. Aber das sind alles in gewisser Weise Hacks, da man Fehler und Bugs von CSS ausnutzt. Das ist natürlich nicht zukunftssicher, da diese Probleme in neuen Versionen behoben werden könnten. Mit Flexbox wird das vertikale und horizontale Zentrieren ein Kinderspiel. Innerhalb eines Flex-Containers können Elemente mit der Eigenschaft _justify-content: center_ horizontal und _align-items: center_ vertikal zentriert werden. Diese Lösung ist wesentlich eleganter und funktioniert quer über alle Browser. \cite{flexbox_official}

Flexbox ist eines der wichtigsten Module von CSS und mittlerweile zu einem fundamentalen Bestandteil moderner Frontend-Entwicklung geworden.
