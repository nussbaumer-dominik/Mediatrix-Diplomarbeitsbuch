## Was ist jQuery?

jQuery ist eine Bibliothek, die von John Resig erfunden wurde, um das Programmieren mit Javascript zu vereinfachen. Diese vereinfacht die Frontend-Entwicklung durch das Simplifizieren von Javascript-Funktionen, Animationen, AJAX(Asynchronous Javascript and XML), Dom-Manipulation, sowie das Arbeiten mit Events. Dadurch spart man Zeit und muss weniger Code-Zeilen schreiben. \cite{jquery.org}

### Mehr schreiben in weniger Zeit

Zeit ist Geld. Mit jQuery spart man hier und da an Arbeit. Diese zeitliche Ersparnis summiert sich zu vielen Stunden an gesparter Zeit auf. Man kann seine Arbeitszeit effizienter und produktiver nutzen, da diese Bibliothek Teile der Arbeit übernimmt und somit für uns arbeitet. Selbst wenn man nicht für einen Kunden arbeitet, lohnt es sich, etwas Zeit zu sparen, die man besser nutzen könnte, als Funktionen zu programmieren, die bereits jemand anderer für uns ausformuliert hat. \cite{jquery.org}

### Browser-Kompatibilität

Ein weiterer Vorteil von jQuery ist die Browser-Unabhängigkeit. Da eine Bibliothek eine Datei ist, die beim Öffnen der Webseite geladen wird, sind alle Funktionen automatisch in allen Browsern verfügbar. Dadurch kann man sicherstellen, dass der Code quer über alle Browser funktioniert. Es gibt einige Javascript-Funktionen, die spezifisch für manche Browser sind. Das umgeht man mit jQuery. \cite{jquery.org}

### Simplifizierung von Javascript-Funktionen

Die Skriptsprache Javascript ist sehr umfangreich und enthält eine Menge an komplizierten Funktionen. Die Entwickler von jQuery haben einige dieser vereinfacht. So wird zum Beispiel eine gut geschriebene und browserunabhängige Implementierung von HTTP-Anfragen (Hypertext Transfer Protokoll) in Form von AJAX-Anfragen bereitgestellt. Schon alleine diese Funktion ist ein Grund, um jQuery zu importieren. \cite{jquery.org}

### Gewappnet für die Zukunft

Mit jQuery ist man zukunftssicher unterwegs. Funktionen wie _.indexOf()_ oder _.bind()_, sind zwar bereits nativ in Javascript implementiert, allerdings noch nicht in allen Browsern verfügbar. Jedoch können die dementsprechenden jQuery-Alternativen bereits heute in allen Browsern verwendet werden. \cite{jquery.org}

### Potential für Zeitersparnis

Um das Potential von jQuery näher zu erläutern, habe ich ein gängiges Beispiel vorbereitet. Im untenstehenden Code-Block ist eine _Fade-In-Animation_ mit Javascript umgesetzt.

```javascript
function fadeIn() {
	var element = document.getElementById("element");
	var transparenz = parseFloat(element.style.opacity);
	var timer = setInterval(function() {
		if (transparenz >= 1.0) clearInterval(timer);
		transparenz += 0.1;
		element.style.opacity = transparenz;
	}, 50);
}
fadeIn(element);
```

Diese Vorgehensweise ist sehr aufwendig. Zuerst muss man das Element selektieren. Dann benötigt man einen Timer, der die Transparenz langsam anhebt, bis das Element vollkommen sichtbar ist. Nun im Gegensatz dazu die Umsetzung mithilfe von jQuery.

```javascript
$(element).fadeIn();
```

In jQuery sind bereits herkömmliche Animationen implementiert. Dadurch können komplizierte Code-Segmente wie im obigen Beispiel oft auf eine Zeile gekürzt werden.

### Nachteile

Allerdings hat vieles auch Nachteile, bei jQuery ist es nicht anders. Der erste negative Aspekt dieser Bibliothek ist der leichte Einstieg und die niedrige Lernkurve. Dadurch hat sich über die Jahre eine gigantische Gemeinschaft an unprofessionellen Entwicklern aufgebaut. Darunter hat zum Beispiel die Qualität von Open Source Plugins im Internet stark gelitten. Der zweite Nachteil ist, dass es einfach ist, ineffizienten Code zu schreiben, wenn das Javascript Wissen begrenzt ist. Die Performanz von jQuery kann verbessert werden, wenn man sich besser in Javascript auskennt. Manchmal ist es schneller, eine normale Schleife zu verwenden, als auf die jQuery-Alternative zurückzugreifen. Das letzte und wohl größte Problem von jQuery ist der Overhead. Man muss eine \SI{97}{\kilo\byte}-große Datei importieren, verwendet aber meistens nur eine kleine Auswahl der verfügbaren Funktionen. \cite{jquery.org}
Zu guter Letzt kann ich sagen, dass so gut wie jedes größere Projekt durch die Einbindung von jQuery profitieren könnte. Nichtsdestotrotz sollte man zuerst reines Javascript erlernen, um eine grundlegende Basis aufzubauen. Denn jQuery ist keine Garantie für sauberen Code und am Aneignen von Programmierkenntnissen führt kein Weg vorbei.
