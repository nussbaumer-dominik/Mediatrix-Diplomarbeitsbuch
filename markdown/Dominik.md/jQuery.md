## Was ist jQuery

jQuery ist eine Bibliothek, die von John Resig erfunden wurde, um das Programmieren mit Javascript zu vereinfachen. Diese vereinfacht Frontend Entwicklung durch das simplifizieren von Javascript Funktionen Animationen, AJAX(Asynchronous Javascript and XML), Dom Manipulation, das Arbeiten mit Events und vieles mehr. Dadurch schreibt man weniger Zeilen an Code und kann mehr in kurzer Zeit entwickeln.

### Mehr schreiben in weniger Zeit

Zeit ist Geld. Mit jQuery spart man sich hier und da 30 Sekunden an Arbeit. Diese zeitlichen Ersparnisse summieren sich mit der Zeit zu Stunden gesparter Zeit auf. Man kann seine Zeit effizienter und produktiver Nutzen, da diese Bibliothek Teile der Arbeit übernimmt und für uns arbeitet. Selbst wenn man nicht für einen Kunden arbeitet, lohnt es sich etwas Zeit zu sparen, die man besser nutzen könnte als Funktionen zu programmieren, die bereits jemand anderer für uns ausformuliert hat.

### Browser Kompatibilität

Ein weitere Vorteil von jQuery ist Browser Unabhängigkeit. Da eine Bibliothek eine Datei ist, die beim Öffnen der Webseite geladen wird, sind alle Funktionen automatisch in allen Browsern verfügbar. Dadurch kann man sicherstellen, dass der Code quer über alle Browser funktioniert. Es gibt einige Javascript Funktionen die nativ für manche Browser sind. Das umgeht man mit jQuery.

### Simplifizierung von Javascript Funktionen

Die Skriptsprache Javascript ist sehr umfangreich und enthält eine Menge an komplizierten Funktionen. Die Entwickler von jQuery haben einige dieser vereinfacht. Zum Beispiel wird eine gut geschriebene und browserunabhängige Implementierung von HTTP(Hypertext Transfer Protokoll) Anfragen in form von AJAX Anfragen bereitgestellt. Diese Funktion alleine ist ein Grund jQuery zu importieren.

### Gewappnet für die Zukunft

Mit jQuery ist man zukunftssicher unterwegs. Funktionen wie `".indexOf()"` oder `".bind()"` sind zwar bereits nativ in Javascript implementiert, allerdings noch nicht in allen Browsern verfügbar. Jedoch können die dementsprechenden jQuery Alternativen bereits heute in allen Browsern verwendet werden.

### Zeit Sparpotential

Um das Potential von jQuery näher zu erläutern habe ich ein gängiges Beispiel vorbereitet. Im untenstehenden Code Block ist eine `"Fade-In"` Animation mit Javascript umgesetzt.

```javascript
function fadeIn() {
    var element = document.getElementById("element");
    var transparenz = parseFloat(el.style.opacity);
    var timer = setInterval(function () {
        if(transparenz >= 1.0) clearInterval(timer);
        transparenz += 0.1;
        element.style.opacity = transparenz;
    }, 50);
}
fadeIn(element);
```

Das ist sehr aufwendig. Man muss das Element selektieren. Dann benötigt man einen Timer, der die Transparenz langsam anhebt, bis das Element vollkommen sichtbar ist. Nun im Gegensatz dazu die Umsetzung mithilfe von jQuery.

```javascript
$(element).fadeIn();
```

In jQuery sind bereits herkömmliche Animationen implementiert. Dadurch können komplizierte Code Segmente wie im obigen Beispiel oft auf eine Zeile gekürzt werden.

### Nachteile

Allerdings hat alles auch Nachteile, bei jQuery ist es nicht anders. Der erste negative Aspekt dieser Bibliothek ist der leichte Einstieg und die niedrige Lernkurve. Dadurch hat sich über Jahre eine gigantische Gemeinschaft aufgebaut. Darunter hat zum Beispiel die Qualität von Open Source Plugins im Internet stark gelitten. Der zweite Nachteil ist, dass es einfach ist, ineffizienten Code zu schreiben, wenn das Javascript Wissen begrenzt ist. Die Performanz von jQuery kann verbessert werden, wenn man sich besser in Javascript auskennt. Manchmal ist es schneller eine normale Schleife zu verwenden als auf die jQuery Alternative zurückzugreifen. Das letzte und wohl größte Problem von jQuery ist der Overhead. Man muss eine 97kB große Datei importieren, verwendet aber meistens nur eine kleine Auswahl der verfügbaren Funktionen.

Zu guter letzt kann ich sagen, dass so gut wie jedes größere Projekt von der Einbindung von jQuery profitiert. Nichtsdestotrotz sollte man zuerst reines Javascript lernen, um eine grundlegende Basis aufzubauen. Denn jQuery ist keine Garantie für guten Code, um das Aneignen von Programmierkenntnissen führt kein Weg herum.