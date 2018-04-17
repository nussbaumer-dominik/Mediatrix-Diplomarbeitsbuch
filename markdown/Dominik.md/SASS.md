## Was ist ein CSS-Präprozessor?

Ein Browser verwendet CSS, um DOM-Elemente visuell zu bearbeiten und zu rendern. CSS selbst hat seine eigene Auswahl an Funktionen, welche manchmal allerdings nicht ausreichen, um saubere und wiederverwendbare Regeln zu schreiben. Aufgrund dieser Einschränkungen ist das Konzept eines CSS-Präprozessors entstanden. Dieser bietet einen vergrößerten Funktionsumfang, der die Grundfunktionalität erweitert. Anschließend wird die Datei zu herkömmlichen CSS kompiliert, da der Browser nur reines CSS interpretieren kann. \cite{SASS_REFERENCE}

Es gibt verschiedene CSS-Präprozessoren wie SASS, LESS oder Stylus. All diese bieten verschiedene Funktionen an. Ich persönlich habe mich aus mehreren Gründen für die Verwendung von SASS entschieden.

Um die Vorteile von CSS-Präprozessoren zu verstehen, zeige ich zuerst ein paar der Mängel von reinem CSS auf.

*   keine Möglichkeit, allgemeine Stilregeln wiederzuverwenden
*   Dateien werden schnell sehr groß
*   ordentliches Arbeiten erfordert großen Zeitaufwand

Präprozessoren haben für all diese Probleme eine Lösung parat. \cite{SASS_REFERENCE}

### Partielle CSS-Dateien

Aufgrund der ständig komplexer werdenden Frontend-Entwicklung werden CSS-Dateien immer größer und enthalten oft tausende Zeilen an Code. Umso länger diese Dateien sind, desto unhandlicher und verwirrender werden sie. Dafür bietet SASS bereits eine Lösung. CSS-Dateien können auf mehrere partielle Dateien aufgeteilt werden. Dadurch kann man seine Style-Sheets besser organisieren und modularisieren. Es ist wesentlich einfacher, mehrere kleine Dateien zu schreiben, zu warten und zu erweitern, als eine große Datei mit tausenden Zeilen. Mithilfe der erweiterten _@import_-Funktion des Präprozessors können die einzelnen Dateien beim Speichern zu einer zusammengefasst werden. \cite{SASS_REFERENCE}

Die _@import_-Regel ist schon sehr lange ein Teil von CSS. Allerdings ist sie nicht besonders beliebt, da jeder Import eine eigene HTTP-Anfrage ausführt, was zu einer langsamen Webseite führt. Was passiert, wenn man diese Funktion mit SASS verwendet? Hoffentlich haben Sie nie damit aufgehört, über den Namen "Präprozessor" nachzudenken. \cite{SASS_REFERENCE}

> "Ein Präprozessor ist ein Computerprogramm, das Eingabedaten vorbereitet und zur weiteren Bearbeitung an ein anderes Programm weitergibt.” — Wikipedia \cite{preprocessor_wiki}

Wenn man dieses Konzept nun auf die _@import_-Regel anwendet, fällt einem auf, dass der Import von SASS damit erledigt wird. Die CSS- und SASS-Dateien werden zusammengefasst und am Ende bleibt nur eine Datei über. Der Browser des Benutzers muss nur eine Anfrage ausführen und bloß eine Datei hinunterladen. Das Projekt könnte aus einer Vielzahl an CSS-Dateien zusammengesetzt sein. \cite{SASS_REFERENCE}

### Variablen in SASS

Die meisten Artikel über SASS beginnen damit, das System wegen der Implementierung von Variablen zu loben. Der häufigste Einsatzzweck ist die wiederverwendbare Farbpalette. Es passiert immer wieder, dass Farben mehrmals definiert werden, aber man trifft meistens nicht den selben Farbton. Das resultiert in vielen verschiedenen Abstufungen einer Farbe. Aber in SASS können Variablen mit fast jeder Einheit definiert werden. Ein großer Vorteil dieser Funktion ist, dass alle Farben an einem Ort gesammelt sind. Das erleichtert zum Beispiel die Veränderung der Palette bei einer Veränderung des Corporate-Designs. Außerdem sparen Variablen Zeit, da man nicht die gesamte Datei nach bestimmten Farben oder Werten durchsuchen muss. \cite{SASS_REFERENCE}

### Sauberer Code dank Verschachtelung der Regeln

Verschachtelung ist wahrscheinlich die zweitbekannteste Funktion von SASS. Durch sie kann ein Stylesheet besser organisiert werden. Dadurch wirkt es ordentlicher, übersichtlicher und ist leichter zu lesen. Weiters wird die Hierarchie der Regeln auf einen Blick ersichtlich und die Abhängigkeiten der Elemente sind eindeutig. \cite{SASS_REFERENCE}

### Wiederholungen vermeiden

Beim Schreiben von CSS ist das mehrfache Definieren von Elementen fast unumgänglich. Allerdings schafft SASS auch hier Abhilfe. _mixins_ und _extends_ sind zwei mächtige Funktionen. Die Möglichkeiten dieser scheinen fast endlos zu sein. Mit _mixins_ können parametrisierte CSS-Funktionen erstellt werden, die im gesamten Dokument wiederverwendbar sind. Hier ein kurzes Beispiel, um _mixins_ genauer zu beleuchten. \cite{SASS_REFERENCE}

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

Man stelle sich den Schatten eines Elements vor. So ein Schatten hat mehrere Eigenschaften, die bei jeder Verwendung gesetzt werden müssen. Hier bietet sich ein _mixin_ an. Eine Funktion wird zuerst mit den einzelnen Eigenschaften als Parameter definiert. Diese kann nun im gesamten Dokument eingesetzt und angepasst werden. \cite{SASS_REFERENCE}

_extends_ sind sehr ähnlich, da man mit ihnen Eigenschaften mit anderen Selektoren teilen kann. Anstatt jedoch mehrere Deklarationen auszugeben, gibt man eine Liste von Klassen aus, ohne die Eigenschaften zu wiederholen. Dadurch werden Code-Wiederholungen in der Ausgabedatei vermieden. \cite{SASS_REFERENCE}

### Funktionen, um Farben zu modifizieren

SASS erweitert CSS mit zusätzlichen Funktionen. Wenn man Funktionen hört, denkt man ans Programmieren. Die in SASS implementierten Funktionen bieten eine einfache Möglichkeit, um Farben abzustufen oder zu modifizieren. \cite{SASS_REFERENCE}

```css
lighten($farbe, $faktor)
darken($farbe, $faktor)
grayscale($farbe)
complement($farbe, $alpha)
```

In all diesen Funktionen müssen Parameter übergeben werden. Alle benötigen eine Farbe, die hexadezimal, rgb oder hsl sein kann. Weiters benötigt man einen Faktor, um die Farbe zu verändern.
Mit der _lighten()_-Funktion können Farben um einen Faktor aufgehellt werden. Die _darken()_-Funktion macht genau das Gegenteil.
Mithilfe von _grayscale()_ können Farben in Graustufen konvertiert werden.
Eine weitere hilfreiche Funktion ist _complement()_. Diese findet die Komplementärfarbe heraus und setzt sie ein. \cite{SASS_REFERENCE}

### Nachteile von CSS-Präprozessoren

Wie beim Lernen jeder anderen Technologie werden Designer auch bei SASS mit einigen Hürden konfrontiert.

*   Für Designer ist der Terminal nicht immer ein beliebtes Werkzeug. Um Präprozessoren zu verwenden, wird jedoch ein gewisses Grundwissen vorausgesetzt.
*   Da SASS einige Konzepte aus der Programmierung ausborgt, kommt man um das Erlernen dieser nicht herum.
*   Die Syntax kann für einen Anfänger etwas verwirrend erscheinen, da sie stark von der normalen CSS-Syntax abweicht.
*   Wenn man nicht vorsichtig mit der Gruppierung von Selektoren umgeht, können diese schnell komplex und tief werden, was die Wartbarkeit verschlechtert.

\cite{SASS_REFERENCE}

### Verwenden oder nicht verwenden?

Wenn man sich noch nicht sicher ist, ob man einen CSS-Präprozessor verwenden sollte, habe ich ein paar Tipps parat. Der beste Weg, das herauszufinden, ist, es einfach zu verwenden. Man muss die Argumente dafür und dagegen im Hinblick auf die eigenen Ansprüche abwägen und sich seine eigene Meinung bilden. \cite{SASS_REFERENCE}

Der Umstieg kann schwierig und zeitraubend sein, aber, wenn man vor hat , öfter damit zu arbeiten, is es den Aufwand wert.
