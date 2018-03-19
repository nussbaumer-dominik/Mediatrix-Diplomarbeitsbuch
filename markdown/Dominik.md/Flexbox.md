## Flexbox
Flexbox, offiziell "CSS Flexible Box Layout Module Level 1", ist eine neue Art und ein neues Konzept um eindimensionale Layouts auf Webseiten umzusetzen. Früher hat man allen Elementen mit dem Klassen-Selektor fixe Positionen, Maße und Eigenschaften zugewiesen. Mit Id-Selektoren wurden einzelne Elemente weiter modifiziert.
Doch bei Flexbox werden grundlegende Regeln festgelegt, wie sich Elemente innerhalb eines Containers zu verhalten haben. Dies macht das Verhalten der Seite vorhersagbar bei einer Änderung der Bildschirmauflösung. Anschließend ist es dem Browser überlassen, die Breite, Höhe, Position und Anordnung, entsprechend den Regeln, zu wählen. Damit wird die Implementierung von Webseiten, die ihr Design an verschiedene Bildschirmauflösungen anpassen, plattformübergreifender und effizienter.

### Das Konzept
Die Grundidee ist es, dem "Flex-Container" die Möglichkeit zu geben, die Maße der Elemente so zu verändern, dass der Platz auf unterschiedlichen Bildschirmauflösungen bestmöglich ausgenutzt ist. Um das zu erzielen, lässt das Elternelement die Kindelemente je nach Bedarf wachsen oder schrumpfen. Es werden bestimmte Regeln festgelegt, wie z.B. die Mindestbreite der Elemente, die Achse, an der die Objekte ausgerichtet werden oder ob die Elemente in die nächste Zeile wandern sollen, wenn es in einer zu eng wird.

### technische Spezifikation
Innerhalb eines \<div> Tags können die einzelnen Elemente ihre Größe "flexibel" verändern. Sie wachsen, um freien Platz zu verwenden oder schrumpfen, damit mehr Elemente pro Zeile platziert werden können.Weiters achtet Flexbox darauf, dass Elemente innerhalb des Elternobkjekts bleiben und nicht darüber hinauswandern. Der große Vorteil des Flexbox Layouts ist die Möglichkleit, die Achse, an der die Elemente ausgerichtet werden, bei einer Änderung der Auflösung anzupassen. Dadurch ist es sehr flexibel, was Orientierungsänderungen bei mobilen Geräten oder Auflösungsänderungen auf Desktop Geräten betrifft.

### Erklärung anhand eines realen Beispiels
Auf der Seite soll eine seitliche Navigation angezeigt werden, die auf mobilen Geräten an den unteren Rand des Bildschirms wandert, siehe Abbildung 1. Bei diesem Layout ist entscheidend, dass die Reihenfolge der Elemente unabhängig vom Markup geändert werden kann.

![Flexbox Beispiel Funktionalität](bilder/Dominik/Flexbox_Illustration_1.png){width=90%}

Mithilfe von Flexbox ist dieses Verhalten einfach zu erzielen.
Ich erstelle ein Elternelement mit folgenden Eigenschaften:

```css
.parent{
  display: flex;
  overflow: hidden;
}
```
Durch "display:flex" verwendet dieser \<div> Flexbox als Positionierungsmethode. Die Kindelemente dieses Flex-Containers werden auf der horizontalen Achse ausgerichtet. Der Overflow auf der X- und Y-Achse wird ausgeblendet. Die Navigation auf der Seite ist in folgendem Code-Block beschrieben.

Dieses Element ist durch "order:1" das erste Element in der Flexbox, aber es muss nicht das erste im Markup sein. Es ist mit Flexbox möglich die Reihenfolge unabhängig vom HTML zu ändern. Der Overflow auf der Y-Achse ist versteckt, damit die Leiste beim Scrollen eine fixe Position behält. Weiters werden die Elemente innerhalb des Containers mit "justify-content: center" und "align-items: center" vertikal und horizontal zentriert und sind durch "flex-direction: column" entlang der Y-Achse positioniert.

```css
.side-nav{
  display: flex;
  order: 1;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
```
Das Inhaltselement hat order:2 damit es neben dem ersten auf der X-Achse positioniert wird. Ebenso ist der Overflow auf der Y-Achse versteckt.

```css
.content{
  overflow-y: hidden;
  display: flex;
  justify-content: center;
  flex-direction: column;
  order: 2;
}
```
Damit die Navigation auf mobilen Geräten am unteren Rand positioniert ist, benötigen wir eine Media Query. Mithilfe dieser können CSS-Stile anhand von verschiedenen Eigenschaften wie z.B. Bildschirmauflösung oder Seitenverhältnis manipuliert werden. Im untenstehenden Code-Block wird dies veranschaulicht. Indem wir die Hauptachse des Flexbox Elternelements auf die Y-Achse ändern, werden die beiden Kindelemente nun vertikal verteilt. Damit nun auch die Navigation unter dem Inhalt positioniert ist ändern wir die order auf 2. Weiters müssen die Höhe und Breite angepasst werden.

```css
@media (max-width: 576px){
  .parent{
    flex-direction: column;	//changed
  }

  .side-nav{
      order: 2;				//changed
      width: 100vw;			//changed
      height: 66px;			//changed
    }
  }
```

### Möglichkeiten
"Das Flexible Box Layout Module" eignet sich sehr gut für die Umsetzung von einzelnen Komponenten, die in sich geschlossen funktionieren sollen. Die Regeln, wie sich Elemente eines Containers zu verhalten haben, werden einmal festgelegt. Das erleichtert einem das Erstellen von Bereichen, in denen dynamisch Inhaltselemente hinzugefügt werden können´
