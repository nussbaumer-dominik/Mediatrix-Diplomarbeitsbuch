## Was sind CSS-Variablen?

Wenn man eine Webseite entwickelt ist es üblich, eine einheitliche Farbpalette zu erstellen, um das Erscheinungsbild der Seite konsistent zu halten. Unglücklicherweise ist das andauernde Wiederholen der unterschiedlichen Farben quer durch die CSS-Datei nicht nur anstrengend, sondern auch sehr fehleranfällig. Falls eine dieser Farben verändert werden muss, könnte man versuchen mithilfe von Suchen-und-Ersetzen alle Werte zu aktualisieren. Jedoch kann dies bei großen Dateien schnell zu Fehlern führen. \cite{css_variables}

Wie bereits in Kapitel 5.3 erwähnt, hat man mithilfe von CSS-Präprozessoren die Möglichkeit, Variablen zu definieren. Obwohl diese Funktion sehr praktisch für Frontend-Entwickler ist, hat die Implementation von SASS einen großen Nachteil. Sie ist nämlich statisch, d.h. beim Kompilieren der SASS-Datei werden die Werte der Variablen ausgelesen und an die Stellen, wo sie verwendet werden, eingesetzt. Damit verliert man die Fähigkeit, die Variablen dynamisch auf der Webseite zu ändern. Mit den neuen "CSS Custom Properties" ist es jedoch möglich, globale Variablen für den Browser zu definieren, die dynamisch auf der Seite geändert werden können. Das ermöglicht Funktionen wie zum Beispiel das Ändern der Farbpalette oder der Zeilenhöhe. \cite{css_variables}

### Technische Spezifikation

Variablen fügen CSS zwei neue Funktionen zu.

*   Einen Behälter für einen Wert zu definieren, der im Quelltext durch einen Namen bezeichnet wird.
*   Die _var()_ funktion, die es dem Entwickler erlaubt, die Werte in jeglichen Eigenschaften zu verwenden.

\cite{css_variables}

### Erklärung anhand eines Beispiels

```css
:root  {
	--Primär-Farbe: #ed4e53;
}

h1  {
	color: var(--Primär-Farbe);
}
```

In diesem CSS-Block haben wir eine Variable mit dem Namen _Primär-Farbe_ und dem Hexwert _#ED4E53_ erstellt. Wichtig ist hier, dass diese Farbe im _root_-Kontext definiert wurde. Deswegen ist sie im ganzen Dokument verfügbar. Weiters ist anzumerken, dass der Name einer Variablen am Anfang zwei Bindestriche haben muss. \cite{css_variables}

Mithilfe der _var()_-Funktion wird der Wert ausgelesen und eingesetzt. Im Beispiel wird die Schriftfarbe einer Überschrift dementsprechend gesetzt. \cite{css_variables}

Bei Mediatrix habe ich CSS-Variablen verwendet, um verschiedene Designs des Dashboards anzubieten. Der Benutzer kann zwischen verschiedenen Farbpaletten wechseln, je nachdem, welche ihm besser gefällt. Ohne diese Spezifikation wäre die Umsetzung dieser Funktion sehr umständlich gewesen.

Auf die CSS-Variablen kann mit Javascript zugegriffen werden. Sie können ausgelesen und gesetzt werden. Der Benutzer kann aus mehreren Farbpaletten wählen. Beim Klick auf eine der Paletten werden alle Variablen der Seite überschrieben.

```javascript
let root = document.querySelector(":root");

root.style.setProperty("--Primär-Farbe", "#000000");
```

Man muss zuerst alle Farben des Root Elements laden. Anschließend können alle Variablen neu gesetzt werden.

CSS-Variablen sind bereits in den aktuellen Versionen der gängigen Browser verfügbar. \cite{browser_support_variables}
