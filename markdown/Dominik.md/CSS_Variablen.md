## Was sind CSS-Variablen?

Wenn man eine Webseite entwickelt ist es üblich, eine einheitliche Farbpalette zu erstellen, um das Erscheinungsbild der Seite konsistent zu halten. Unglücklicherweise ist das andauernde Wiederholen der unterschiedlichen Farben quer durch die CSS-Datei nicht nur anstrengend, sondern auch sehr fehleranfällig. Falls eine dieser Farben verändert werden muss, könnte man versuchen mithilfe von Suchen-und-Ersetzen alle Werte zu aktualisieren. Jedoch kann dies bei großen Dateien schnell zu Fehlern führen. \cite{css_variables}

Wie bereits in Kapitel 5.3 erwähnt, hat man mithilfe von CSS-Präprozessoren die Möglichkeit, Variablen zu definieren. Obwohl diese Funktion sehr praktisch für Frontend-Entwickler ist, hat die Implementation von SASS einen großen Nachteil. Sie ist nämlich statisch, d.h. beim Kompilieren der SASS-Datei werden die Werte der Variablen ausgelesen und an die Stellen, wo sie verwendet werden, eingesetzt. Damit verliert man die Fähigkeit, die Variablen dynamisch auf der Webseite zu ändern. Mit den neuen "CSS Custom Properties" ist es jedoch möglich, globale Variablen für den Browser zu definieren, die dynamisch auf der Seite geändert werden können. Das ermöglicht Funktionen wie zum Beispiel das Ändern der Farbpalette oder der Zeilenhöhe. \cite{css_variables}

### Technische Spezifikation
