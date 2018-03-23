## Flexbox
Flexbox, offiziell "CSS Flexible Box Layout Module Level 1", ist eine neue Art und ein neues Konzept um eindimensionale Layouts auf Webseiten umzusetzen. Früher hat man allen Elementen mit dem Klassen-Selektor fixe Positionen, Maße und Eigenschaften zugewiesen. Mit Id-Selektoren wurden einzelne Elemente weiter modifiziert.
Doch bei Flexbox werden grundlegende Regeln festgelegt, wie sich Elemente innerhalb eines Containers zu verhalten haben. Dies macht das Verhalten der Seite vorhersagbar bei einer Änderung der Bildschirmauflösung. Anschließend ist es dem Browser überlassen, die Breite, Höhe, Position und Anordnung, entsprechend den Regeln, zu wählen. Damit wird die Implementierung von Webseiten, die ihr Design an verschiedene Bildschirmauflösungen anpassen, plattformübergreifender und effizienter. \cite{css_flexible_box_layout}

### Das Konzept
Die Grundidee ist es, dem "Flex-Container" die Möglichkeit zu geben, die Maße der Elemente so zu verändern, dass der Platz auf unterschiedlichen Bildschirmauflösungen bestmöglich ausgenutzt ist. Um das zu erzielen, lässt das Elternelement die Kindelemente je nach Bedarf wachsen oder schrumpfen. Es werden bestimmte Regeln festgelegt, wie z.B. die Mindestbreite der Elemente, die Achse, an der die Objekte ausgerichtet werden oder ob die Elemente in die nächste Zeile wandern sollen, wenn es in einer zu eng wird. \cite{complete_guide_flexbox}

### technische Spezifikation
Innerhalb eines \<div> Tags können die einzelnen Elemente ihre Größe "flexibel" verändern. Sie wachsen, um freien Platz zu verwenden oder schrumpfen, damit mehr Elemente pro Zeile platziert werden können. Weiters achtet Flexbox darauf, dass Elemente innerhalb des Elternobkjekts bleiben und nicht darüber hinauswandern. Der große Vorteil des Flexbox Layouts ist die Möglichkeit, die Achse, an der die Elemente ausgerichtet werden, bei einer Änderung der Auflösung anzupassen. Dadurch ist es sehr flexibel, was Orientierungsänderungen bei mobilen Geräten oder Auflösungsänderungen auf Desktop Geräten betrifft. \cite{basic_concepts_flexbox}

### Erklärung anhand eines realen Beispiels
Auf der Seite soll eine seitliche Navigation angezeigt werden, die auf mobilen Geräten an den unteren Rand des Bildschirms wandert, siehe Abbildung 1. Bei diesem Layout ist entscheidend, dass die Reihenfolge der Elemente unabhängig vom Markup geändert werden kann.

![Flexbox Beispiel Funktionalität](bilder/Dominik/Flexbox_Illustration_1.png){width=90%}

Mithilfe von Flexbox ist dieses Verhalten einfach zu erzielen.
Wie bereits erwähnt gibt es bei Flexbox Elternelemente und Kindelemente. Die Elternelemente, auch "Container" genannt, agieren als Rahmen, in denen die Kindelemente, oder "items", enthalten sind.
Für das Beispiel erstelle ich zunächst einen Container mit den Eigenschaften `"display:flex"`. Dadurch weiß der Browser, dass dieses Element mit Flexbox positioniert werden soll. \cite{basic_concepts_flexbox}

```css
.parent{
  display: flex;
  overflow: hidden;
}
```
Die Kindelemente dieses "Flex-Containers" werden auf der horizontalen X-Achse ausgerichtet. Wenn der Inhalt eines Elements mehr Platz einnimmt als vorhanden, dann überläuft er die Grenzen. Damit dieser Zustand nicht eintritt wird der Überlauf des Flex-Containers mit `"overflow: hidden"` auf der X- und Y- achse ausgeblendet. Die Navigation auf der Seite ist in folgendem Code-Block beschrieben.

Dieses Element ist durch `"order: 1"` das erste Element in der Flexbox, allerdings muss es nicht das erste im Markup sein. Mit Flexbox ist es möglich, die Reihenfolge unabhängig vom HTML-Code zu verändern. Damit die seitliche Navigationsleiste eine fixe Position behält wird ein Hack angewendet. Denn durch das setzen des Attributs `"overflow-y: hidden"` scrollt die Seite nur den restlichen Teil der Flexbox und nicht die Navigationsleiste. Weiters werden die Elemente innerhalb des Containers mit "justify-content: center" und `"align-items: center"` vertikal und horizontal zentriert und sind durch `"flex-direction: column"` entlang der Y-Achse positioniert.

```css
.side-nav{
  display: flex;
  order: 1;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
```
Das Inhaltselement wird wegen dem Attribut `"order: 2"` neben dem ersten Element auf der X-Achse positioniert. 
Weiters wird

```css
.content{
  overflow-y: hidden;
  display: flex;
  justify-content: center;
  flex-direction: column;
  order: 2;
}
```
Damit die Navigation auf mobilen Geräten am unteren Rand positioniert ist, benötigen wir eine "Media Query". Mithilfe dieser können CSS-Stile anhand von verschiedenen Eigenschaften wie z.B. Bildschirmauflösung oder Seitenverhältnis manipuliert werden. Im untenstehenden Code-Block wird dies veranschaulicht. Indem wir die Hauptachse des Flexbox Elternelements mit dem Attribut `"flex-direction: column"` auf die Y-Achse ändern, werden die beiden Kindelemente vertikal verteilt. Damit nun auch die Navigation unter dem Inhalt positioniert ist, ändern wir die Reihenfolge mit dem Attribut "order" auf 2. Weiters müssen die Höhe und Breite angepasst werden, damit das Element die gesamte Breite des Bildschirms einnimmt und nicht mehr die gesamte Höhe.

```css
@media (max-width: 576px){
  .parent{
    flex-direction: column;   //Die Hauptachse des Elternelements auf die Y-Achse ändern
  }

  .side-nav{
      order: 2;		//Reihenfolge des Elements verändern
      width: 100vw;	//gesamte Breite des Bildschirms ausnutzen
      height: 66px;	//Die Höhe fix setzen
    }
  }
```

### Möglichkeiten von Flexbox
"Das Flexible Box Layout Module" eignet sich äußerst gut für die Umsetzung von einzelnen Komponenten, die in sich geschlossen funktionieren müssen. Die Regeln, wie sich Elemente innerhalb eines Containers zu verhalten haben, werden einmal festgelegt. Das erleichtert das Erstellen von Bereichen, in denen dynamisch Inhaltselemente hinzugefügt. Generell ist Flexbox die beste Technik um Teile einer Webseite zu schreiben, wo die Anzahl der Elemente unbekannt ist, beziehungsweise die Anzahl der Kindelemente nicht statisch ist.

Ein weiteres Einsatzgebiet von Flexbox ist die vertikale und horizontale Zentrierung von Inhaltselementen. Das Zentrieren ist in Flexbox eine knifflige Angelegenheit. Text kann mit dem Attribut `"text-align"` zentriert werden. Block Elemente kann man mit margins oder Transformationen zentrieren. Aber das sind alles Hacks in gewisser Weise. Mit Flexbox wird das vertikale und horizontale Zentrieren ein Kinderspiel. Innerhalb eines Flex Containers können Elemente mit der Eigenschaften `"justify-content: center"` horizontal und `"align-items: center"` vertikal zentriert werden. Diese Lösung ist wesentlich eleganter und funktioniert in allen Browsern.
