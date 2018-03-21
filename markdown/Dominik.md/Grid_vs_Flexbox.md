## CSS Grid und Flexbox - Gegenüberstellung
Vor ein paar Jahren wurde Flexbox eingeführt. Es ist speziell für anpassungsfähige Webseiten entwickelt worden. Flexbox macht das Ausrichten von Elementen und deren Inhalt  einfacher, so dass flüssige, flexible und dynamische Seiten erstellt werden können. Diese funktionieren mit wenig CSS in einem breiten Katalog von Geräten. Dank Flexbox sind Webseiten, die sich an verschiedene Geräte anpassen machbarer und effizienter geworden. Ohne diese Technik würden Webseiten auch heute noch nicht perfekt auf allen Bildschirmauflösungen dargestellt werden.

Allerdings ist ein neuer Konkurrent am Spielfeld erschienen - CSS Grid. Diese Technik hat einige ähnliche Eigenschaften wie Flexbox. Grid verfolgt eine andere Vision und wurde für einen anderen Zweck entworfen. Nun stellt sich natürlich die Frage, welche Positionierungstechnik besser ist, beziehungsweise wann welche eingesetzt werden sollte. \cite{The ultimate {CSS} battle}

### Eine Dimension versus Zwei 
Der wohl gravierendste Unterschied zwischen Flexbox und Grid ist die Anzahl an Richtungen die gleichzeitig von der "Rendering Engine" des Browsers beachtet werden können, siehe Abbildung 2. Beim "Flexible Box Layout" kann nur eine Richtung beachtet werden, entweder die X-Achse oder die Y-Achse. Dadurch ist es sehr gut geeignet für Situationen, wo Elemente nur auf einer Achse positioniert werden sollen. Ein übliches Beispiel hierfür wäre eine Navigationsleiste, solange diese nur in einer Richtung ausgerichtet wird. Es ist egal, ob am oberen Rand - entlang der X-Achse oder am linken Rand - entlang der Y-Achse. Flexbox macht diese Leiste flexibler bei Veränderungen, da die Elemente beliebig auf der Achse bewegt werden können. Außerdem ist weniger Code für die Umsetzung notwendig, somit ist dieses Element simpler und leichter zu warten. Wie bereits in Kapitel \kap{Flexbox} erwähnt, ist Flexbox ausgelegt für Container, wo die Anzahl an Kindelemente unbekannt ist. 
Bei CSS grid hingegen wird eine fixe Anzahl von Reihen und Spalten definiert. Die Maße und Anordnung dieser können variieren, aber die Anzahl sollte beibehalten werden. 

### Dynamisch versus statisch
Da bei Flexbox im CSS für den Browser genau definiert wird, wie Elemente innerhalb eines Containers anzuordnen sind, können beliebig viele Elemente dynamisch hinzugefügt werden. Diese Eigenschaft habe ich bei der Umsetzung der Benutzeroberfläche mehrmals verwendet. 
Erstens befinden sich die Module für die Steuerung der einzelnen Geräte in einem Flex-Container. Da diese per Klick dynamisch hinzugefügt werden hat sich Flexbox angeboten. Beim Betätigen eines Knopfes, wird das entsprechende Modul an den \<div/> angehängt. Wenn die Gesamtbreite der Elemente die Breite des Bildschirms übersteigt, wird eine Scrollbar auf der X-Achse eingeblendet.
Weiters habe ich Flexbox bei der Darstellung der vordefinierten Presets verwendet. Obwohl diese elemente in Form eines Rasters angeordnet sind, war CSS Grid nicht geeignet. Denn bei diesem werden fixe Reihen und 






![grundlegender Unterschied zwischen CSS Grid und Flexbox](bilder/Dominik/Grid_vs_Flexbox.png){width=90%}
