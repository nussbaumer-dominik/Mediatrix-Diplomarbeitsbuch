## Was ist ein CSS Präprozessor?

Ein Browser verwendet CSS um DOM Elemente visuell zu bearbeiten und zu rendern. CSS selbst hat seine eigene Auswahl an Funktionen, welche manchmal allerdings nicht ausreichen um saubere und wiederverwendbare Regeln zu schreiben. Aufgrund dieser Einschränkungen ist das Konzept eines CSS Präprozessors entstanden. Diese bieten einen erweiterten Funktionsumfang, der die Grundfunktionalität erweitert. Anschließend wird die Datei zu herkömmlichen CSS kompiliert, da der Browser nur reines CSS interpretieren kann.

Es gibt verschiedene CSS Präprozessoren wie SASS, LESS oder Stylus. All diese bieten verschiedene Funktionen an, ich persönlich habe mich aus mehreren Gründen für SASS entschieden.

Um die Vorteile von CSS Präprozessoren zu verstehen zeige ich erstmal ein paar der Mängel von reinem CSS auf.

*   Keine Möglichkeiten um allgemeine Stilregeln wiederzuverwenden
*   Dateien werden schnell sehr groß
*   ordentliches Arbeiten erfordert großen Zeitaufwand

Präprozessoren haben für all diese Probleme eine Lösung parat.

### Partielle CSS Dateien

Aufgrund der ständig komplexer werdenden Frontend Entwicklung, werden CSS Dateien immer größer und enthalten oft tausende Zeilen an Code. Umso länger diese Dateien sind, desto unhandlicher und verwirrender werden sie. Dafür bietet SASS bereits eine Lösung. CSS Dateien können auf mehrere partielle Dateien aufgeteilt werden. Dadurch kann man seine Stylesheets besser organisieren und modularisieren. Es ist wesentlich einfacher mehrere kleine Dateien zu schreiben, warten und erweitern, als eine große mit tausenden Zeilen. Mithilfe der erweiterten `"@import"` Funktion des Präprozessors können die einzelnen Dateien beim Speichern zu einer zusammengefasst werden.

Die `"@import"` Regel ist schon sehr lange ein Teil von CSS. Allerdings ist sie nicht besonders beliebt, da jeder Import eine eigene HTTP Anfrage ausführt, was in einer langsamen Seite resultiert. Was passiert wenn man diese Funktion mit SASS verwendet? Hoffentlich haben Sie nie damit aufgehört über den Namen "Präprozessor" nachzudenken.

> "Ein Präprozessor ist ein Computerprogramm, das Eingabedaten vorbereitet und zur weiteren Bearbeitung an ein anderes Programm weitergibt.” — Wikipedia \cite {Präprozessor}

Wenn man dieses Konzept nun auf die `"@import"` Regel anwendet, fällt einem auf, dass der Import von SASS erledigt wird. Die CSS und SASS Dateien werden zu einem zusammengefasst und am Ende bleibt eine Datei über. Der Browser des Benutzers muss nur eine Anfrage ausführen und bloß eine Datei hinunterladen. Das Projekt könnte aus einer Vielzahl an CSS Dateien zusammengesetzt sein.

### Variablen

Die meisten Artikel über SASS fangen an es wegen der Implementation von Variablen zu loben. Der gebräuchlichste Einsatzzweck ist eine wiederverwendbare Farbpalette. Es passiert immer wieder, dass Farben mehrmals definiert werden, aber man trifft meistens nicht die selbe Farbe. Das resultiert in vielen verschiedenen Abstufungen einer Farbe. Aber in SASS können Variablen mit fast jeder Einheit definiert werden. Ein großer Vorteil dieser Funktion ist, dass alle Farben an einem Ort gesammelt sind. Das erleichtert zum Beispiel die Veränderung der Palette bei einer Veränderung des Corporate Designs. Außerdem sparen Variablen Zeit, da man nicht die gesamte Datei nach bestimmten Farben oder Werten durchsuchen muss.

### Sauberer Code dank Verschachtelung der Regeln

Verschachtelung ist wahrscheinlich die zweitbekannteste Funktion von SASS. Durch sie kann ein Stylesheet besser organisiert werden. Dadurch wirkt es ordentlicher und ist leichter zu lesen. Weiters wird die Hierarchie der Regeln auf einen Blick ersichtlich und die Abhängigkeiten der Elemente sind eindeutig.

### Wiederholungen vermeiden

Beim schreiben von CSS ist das mehrfache Definieren von Elemente fast unumgänglich. Allerdings bietet SASS auch hier Abhilfe. `"mixins"` und `"extends"` sind zwei mächtige Funktionen. Die Möglichkeiten dieser scheinen fast endlos zu sein. Mit `"mixins"` können parametrisierte CSS Funktionen erstellt werden, die im gesamten Dokument wiederverwendbar sind. Ein kurzes Beispiel um mixins genauer zu beleuchten.

Man stelle sich den Schatten eines Elements vor. So ein Schatten hat mehrere Eigenschaften, die bei jeder Verwendung gesetzt werden müssen. Hier bietet sich ein `"mixin"` an. Eine Funktion wird einmal mit den einzelnen Eigenschaften als Parameter definiert. Diese kann nun im gesamten Dokument eingesetzt und angepasst werden.

```css
@mixin box-shadow($top, $left, $blur, $color, $inset: false) {
	@if $inset {
		-webkit-box-shadow: inset $top $left $blur $color;
		-moz-box-shadow: inset $top $left $blur $color;
		box-shadow: inset $top $left $blur $color;
	} @else {
		-webkit-box-shadow: $top $left $blur $color;
		-moz-box-shadow: $top $left $blur $color;
		box-shadow: $top $left $blur $color;
	}
}
```

`"extends"` sind sehr ähnlich, da man mit ihnen Eigenschaften mit anderen Selektoren teilen kann. Anstatt jedoch mehrere Deklarationen auszugeben, geben sie eine Liste von Klassen aus, ohne die Eigenschaften zu wiederholen. Dadurch werden Wiederholungen von Code in der Ausgabedatei vermieden.

### Funktionen um Farben zu modifizieren

SASS erweitert CSS mit Funktionen. Wenn man Funktionen hört, denkt man ans Programmieren. Die in SASS implementierten sind aber eine einfache Möglichkeit um Farben abzustufen oder zu modifizieren.

```css
lighten($color, $amount)
darken($color, $amount)
grayscale($color)
complement($color, $alpha)
```

In all diesen Funktion müssen Parameter übergeben werden. Alle benötigen eine Farbe, diese kann hexadezimal, rgb oder hsl sein. Weiters benötigen wir einen Faktor um die Farbe zu verändern.
Mit der `"lighten()"` Funktion können Farben um einen Faktor aufgehellt werden. Die `"darken()"` Funktion macht genau das Gegenteil.
Mithilfe von `"grayscale()"` können Farben in Graustufen konvertiert werden.
Eine weitere hilfreiche Funktion ist `"complement()"`. Diese gibt die Komplementärfarbe zurück.

### Nachteile von CSS Präprozessoren

Wie beim Lernen von jeder anderen Technologie, werden Designer auch bei SASS mit einigen Hürden konfrontiert.

*   Für Designer ist der Terminal nicht immer ein beliebtes Werkzeug. Um Präprozessoren zu verwenden wird jedoch ein gewisses Grundwissen vorausgesetzt.
*   Da SASS einige Konzepte aus der Programmierung ausborgt, kommt man um das Erlernen dieser nicht herum.
*   Die Syntax kann für einen Anfänger etwas verwirrend scheinen, da sie stark von der normalen CSS-Syntax abweicht.
*   Wenn man nicht vorsichtig mit der Gruppierung von Selektoren umgeht, können diese schnell komplex und tief werden, was die Wartbarkeit verschlechtert.

### Verwenden oder nicht verwenden?

Wenn man sich noch nicht sicher ist, ob man einen CSS Präprozessor verwenden sollte, habe ich ein paar Tipps parat. Der beste Weg das herauszufinden ist es zu verwenden. Man muss die Argumente dafür und dagegen in Hinblick auf die eigenen Ansprüche abwägen und sich seine eigene Meinung bilden.

Der Umstieg kann schwer und langsam werden aber ich glaube, dass er es wert ist.
