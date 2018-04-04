# Gehäuse


Das „Mediatrix-System" besteht aus folgenden Komponenten:

-   Soundcraft UI16 Digitales Tonmischpult

> dient dem Abmischen von verschiedensten Audioquellen, wie Mikrofonen
> oder Line-Signalen.

-   AKG SR420 Funkmikrofone

> erleichtern die Verständlichkeit des Redners bei Präsentationen vor
> großem Publikum.

-   Denon AV-Receiver

> Verteilt, die über HDMI ankommenden Signale auf Lautsprecher und
> Beamer.

-   Behringer PA-Endstufe

> versorgt die vorderen Lautsprecher mit Leistung.

-   Botex 4-Kanal Lichtdimmer

> regelt den Strom der Scheinwerfer, um diese in ihrer Helligkeit
> steuern zu können.

-   Kleinrechner

> dient zum Abspielen von Präsentationen und Multimediainhalten
> jeglicher Art.

Weitere Komponenten:

-   Raspberry Pi 2 Mikrocontroller

> ist der Mittelpunkt des Systems. Er fungiert als Webserver der
> Webapplikation und ist für die Steuerung der Elektronik zuständig.

-   12V-Relais-Platinen

> dienen zur Unterbrechung der Lautsprecherleitungen und der
> Stromversorgung der Geräte.

-   12V-Netzteil

> wandelt 230V AC in 12V DC um.

-   Stepdown-Converter

> konvertiert 12V DC auf 5V DC, um den Raspberry Pi zu betreiben.

-   ENTTEC DMX Interface

> bietet die Schnittstelle zwischen Raspberry Pi und den Scheinwerfern.

Um das System möglichst kompakt und modular zu gestalten, bietet sich
ein Rack-Schrank mit Montageschienen nach 19" - Standard an. Die
Abstände zwischen den Bohrungen an Gerät und Schiene sind genormt,
ebenso wie der Abstand zwischen den Schienen. Das ermöglicht den
einfachen Einbau oder Austausch von 19"- konformen Geräten.

## 19" Racks

Der horizontale Abstand zwischen zwei Montageleisten beträgt genau 19
Zoll (= 48,26 Zentimeter).

![Abstand bei 19-Zoll-Schienen\quelle\url{https://bit.ly/2GZvy6y}](bilder/Florian/19zoll.png){width="1.2125in"}

Die minimale Höhe eines 19"- konformen Geräts beträgt 1,75" oder 44,45mm.
Dieser Abstand wird als eine Höheneinheit (1HE) bezeichnet. Darum werden
bei Geräten aus den Bereichen Tontechnik oder Großrechner und Server die
Maße der Geräte oftmals in 19" und Anzahl der Höheneinheiten angegeben.
Die Tiefe der Geräte kann jedoch variieren und wird darum meist in
Millimetern angegeben.

In unserem Fall haben das Tonmischpult, die Funkmikrofone und die
Endstufe konforme Maße, um in ein 19"- Rack eingebaut zu werden. Der
AV-Receiver ist mittels Rack-Wanne im Rack platziert.
\cite[S.101]{wirsum_praktische_1991}

# Mediatrix-Modul


Die elektronischen Komponenten, wie der Raspberry Pi, die Relais und das
12V-Netzteil, galt es ebenfalls sicher und kompakt in dem Rack zu
platzieren. Dazu fiel die Entscheidung auf ein 19"- Gehäuse mit drei
Höheneinheiten. Es wurde ein Leergehäuse angeschafft und mit allen
notwendigen Buchsen bestückt. An der Rückseite des Gehäuses sind alle
benötigten Anschlüsse ausgeführt.

Innerhalb des Gehäuses sind alle Komponenten befestigt, um sie gegen
Verrutschen und sich daraus ergebende Beschädigungen, zu schützen. Die
Platinen sind mit Abstandhaltern vom Gehäuseboden abgehoben, um
Kurzschlüsse zu vermeiden.

![Innenansicht des Mediatrix-Moduls\label{innenansicht}](bilder/Florian/Innenansicht.jpg){width=90%}

## Das Anschlusspanel

Da alle Lautsprecherleitungen mittels Relais unterbrochen werden können
sollen, müssen alle Ausgänge des AV-Receivers mit dem Mediatrix-Modul
verbunden sein. Um das vom AV-Receiver bereitgestellte 7.2.- Signal
auch ausgeben zu können, sind insgesamt sieben, bereits verstärkte
Lautsprecherausgänge vorhanden.

![Anschlussblende des Mediatrix-Moduls\label{anschlussblende}](bilder/Florian/Anschlussblende.jpg){width=90%}

Diese werden mit Patchkabeln an das Mediatrix-Modul angeschlossen. In
diesem befindet sich die geregelte Unterbrechungsschaltung. Die beiden
unverstärkten Subbass-Ausgänge sind mit einer Stereo-DI-Box verbunden.
Die DI-Box symmetriert das asymmetrische Signal und gibt dieses mittels
XLR-Leitungen an die Subwoofer weiter. Durch die Symmetrierung des
Signals werden Einstreuungen abgeschwächt.

**Symmetrierung von Audiosignalen**


\begin{quote}
„Bei der symmetrischen Kopplung führen beide Adern einer
Verbindungsleitung eine amplitudengleiche, jedoch aber gegenphasige
Signalspannung gegenüber der Erde (bzw. Masse). Beide Adern sind
gegenüber der Erde galvanisch getrennt. Durch die Gegenphasigkeit wird
bei der symmetrischen Kopplung eine hohe Störsicherheit erreicht. Bei
idealen Voraussetzungen, d.h. bei vollkommener Symmetrie und gleicher
Einwirkung eines Störfeldes auf die beiden Adern wird die Störspannung
durch Kompensation aufgehoben."\cite[S.100]{wirsum_praktische_1991}
\end{quote}



Die Kompensation, oder
Auslöschung ergibt sich aus der 180° Phasenverschiebung zwischen den
beiden Tonadern.\cite{henle_tonstudio_1993}

Für diese Art der Übertragung ist also eine Leitung mit zwei
Signalleitern notwendig. Masse und Schirm sind voneinander getrennt.
Nicht so bei der asymmetrischen Übertragung: „Bei der asymmetrischen,
meist übertragerlosen Kopplung ist eine Ader geerdet, so daß Fremdfelder
Störspannungen erzeugen und bei nicht einwandfreien Erdungsverhältnissen
Brummschleifen entstehen können."\cite[S.100]{wirsum_praktische_1991}
Bei kurzen
Leitungslängen treten solche Störspannungen selten auf. Allerdings
sollte bei langen Strecken eine symmetrische Verbindung verwendet
werden.

Die Leitungen zu den Subwoofern sind zwar in diesem Fall nicht lang,
jedoch parallel zu Stromleitungen, die Einstreuungen verursachen können,
verlegt. Aus diesem Grund fieldie Entscheidung symmetrische
Signalübertragung zu verwenden.

Ein weiterer Vorteil von symmetrischen XLR-Leitungen, gegenüber
asymmetrischer Cinch-Leitungen ist die Möglichkeit, Kabel ohne jeglichen
Adapter zusammenzustecken und somit die Leitung zu verlängern.

## Anschlüsse für Lautsprecher

In diesem Fall sind als Ein- und Ausgangsschnittstelle der
Lautsprecherleitungen Bananenbuchsen im Mediatrix-Modul verbaut. Diese
werden ebenfalls bei gängigen AV-Receivern verwendet. Zum Verbinden
können daher handelsübliche Patch-Kabel mit Bananensteckern an beiden
Enden verwendet werden. Das bietet mehr Kompatibilität mit verschiedenen
AV-Receivern.

Weiters haben die verbauten Buchsen einen Schraubanschluss, mit dem
alternativ zu den Bananensteckern auch ein blankes Kabel an den Kontakt
geklemmt werden kann.

Die Ausgänge zu den Lautsprechern sind als vierpolige Speakon-Buchsen
ausgeführt. So lassen sich jeweils 2 Lautsprecher mit einer Buchse
verbinden. Die Lautsprecherpaare sind in die Ausgänge „Center, Front,
Side und Back" unterteilt.

Ein separater Power-Ausgang ermöglicht die Anwendung der
Lautsprecherschutzschaltung auf die Aktiv-Subwoofer. Das Unterbrechen
des unverstärkten Signals würde zu Störgeräuschen führen. Aus diesem
Grund wird die Stromversorgung der Subwoofer mittels Relais geschalten.
Die Verbindung ist zudem eindeutig von üblichen Schutzkontaktsteckern zu
unterscheiden, was das korrekte Anschließen erheblich erleichtert und
Fehlern vorbeugt.

## Anschlüsse für Gehäuseelektronik

Zur Verbindung von Lüfter, Power-Taster und Öffnungskontakten mit dem
Raspberry Pi ist eine DIN-Buchse verbaut. Die Anschlusskabel dieser
Komponenten laufen in einen DIN-Stecker zusammen und können somit alle
gleichzeitig an- und abgesteckt werden. Vertauschen von Anschlüssen ist
folglich unmöglich.

## Anschlüsse für Netzwerkschnittstellen

Der Raspberry Pi stellt den Webserver des Systems zur Verfügung und muss
darum über eine Netzwerkverbindung verfügen. Zudem führt eine
Netzwerkleitung direkt zum Soundcraft UI16, um die systeminterne
Kommunikation gegen böswillige Einwirkungen durch Hacker zu schützen.
Diese beiden Leitungen sind als RJ-45 Buchsen aus dem Mediatrix-Modul
herausgeführt.

## Anschlüsse für Lichtsteuerung

Bei der Lichtsteuerung wurde auf den Branchenstandard, das DMX-Protokoll
gesetzt. Dieses wird mittels drei- oder fünfpoliger XLR-Steckern
übertragen. Im semiprofessionellen Sektor sind dreipolige Anschlüsse
üblicher, darum ist ein solcher eingebaut. Intern ist diese Buchse mit
dem ENTTEC DMX-Interface verbunden.

## Anschlüsse für Infrarotsteuerung

Um die Richtung des Infrarotsignals gezielt auf die zu steuernden Geräte
ausrichten zu können, kann eine IR-Diode mittels BNC-Connector
angeschlossen und außerhalb des Racks platziert werden. Eine weitere
IR-Diode ist in das Frontpanel des Mediatrix-Moduls eingebaut, um die im
Rack eingebauten Infrarotgeräte, wie den AV-Receiver ansteuern zu
können. Oberhalb von ihr befinden sich zudem noch eine Status LED, die
blinkt, wenn Signale gesendet werden und eine Diode zum Einlesen von
neuen IR-Befehlen.

## Anschlüsse für Zustandserkennung

Der Einschaltzustand des AV-Receivers wird über den Trigger-Output
überprüft. Für den Anschluss an das Mediatrix-Modul ist eine 3,5mm
Klinkenbuchse verwendet worden. Da der Beamer über keinen Trigger-Output
verfügt, wird die Induktionsspannung an einem PowerCon-Ausgang
überwacht.

## Anschlüsse für Stromversorgung

Das Mediatrix-Modul wird mittels PowerCon-Kabel mit 230V versorgt. Diese
werden im Gehäuse intern verteilt und an z.B. den steuerbaren
PowerCon-Ausgang an die Geräte im Rack weitergegeben.

## Anfertigung des Anschlusspanels

Um zu garantieren, dass es keine Verwechslungen beim Anschließen der
Geräte an das Mediatrix-Modul gibt, sind verschiedene Typen von Buchsen
verwendet worden. Zur Bohrung der Löcher in das Stahlblech des Gehäuses
wurde ein Stufenbohrer verwendet. Anschließend wurden alle Buchsen
eingebaut. Die BNC und die Klinkenbuchse verfügen über Muttern und
Gewinde, mit denen sie befestigt wurden. Die restlichen Anschlüsse
wurden mit Blindnieten vernietet.

## Das Frontpanel

Das Frontpanel ist sehr schlicht gehalten. Es beinhaltet einen Schalter,
der die Stromversorgung des Mediatrix-Moduls unterbricht und Infrarot
Sender, Empfänger und Status LED. Weiters sind noch drei Status LEDs für
„Stromversorgung AN", „Raspberry Pi hochgefahren" und
„Lautsprecherleitungen freigegeben" verbaut. Das Frontpanel kann für
Wartungsarbeiten, genauso wie der Deckel leicht abgenommen werden. Die
Kabel zum Schalter sind durch Öffnen zweier Federklemmen vom
Mediatrix-Modul trennbar. Die Status LEDs können durch Lösen der
Steckverbindung von der Platine separiert werden.

## Einbau der Geräte in das Mediatrix-Modul

Der Großteil der Elektronik befindet sich im Mediatrix-Modul. Aus
Platzgründen sind der Raspberry Pi und die Infrarotplatine an den
Seitenteilen des Gehäuses montiert.
Am Boden befinden sich zwei Relais-Platinen mit jeweils acht Relais.
Eine Platine für die Lautsprecherleitungen, die andere für die
Stromverteilung. Weiters sind auf einer Lochrasterplatine alle
notwendigen Schaltungen und Verbindungen zum Raspberry Pi aufgebaut. Das
Netzteil und der Stepdown-Converter, so wie auch alle bereits genannten
Komponenten sind fest mit der Bodenplatte verschraubt. Das DMX-Interface
ist mit doppelseitigem Klebeband befestigt, da es nahezu kein Gewicht
hat und so platziert ist, dass nichts beschädigt werden kann.

## Anfertigung der Hauptplatine

Für die Hauptplatine wurde eine Lochrasterplatine verwendet. Die
Schaltungen wurden als Prototypen bereits auf Laborsteckbrettern
aufgebaut und getestet. Schließlich wurden alle auf die
Lochrasterplatine übertragen und verlötet.

**Steckverbindungen**

Um die Platine oder andere angeschlossene Komponenten möglichst einfach
ausbauen oder austauschen zu können, sind die Verbindungen als
verpolungssichere Stecker ausgeführt. Alle Pins des Raspberry Pis sind
mit einem IDE-Kabel an eine Stiftleiste auf der Platine angeschlossen.
Das System kann somit je nach Bedarf um zusätzliche Funktionen erweitert
werden.

**Vorteile**

Im Gegensatz zu einer geätzten Platine kann eine Lochrasterplatine
nachträglich um Bauteile erweitert werden. Weiters ist das Anfertigen
nicht so zeitaufwendig wie das Ätzen einer Platine.

## Anschluss der Relais-Platine

Da die Relais eine Schaltspannung von 12V DC benötigen, erfolgt die
Versorgung über ein 12V-Netzteil. Diese sind mit JD-VCC und GND
verbunden. Der VCC Pin an dieser Steckleiste dient der Stromversorgung
der Optokoppler.

Die zweite Steckleiste verfügt über einen GND, ein VCC 5V und 8 Pins für
die jeweiligen Relais. Bezogen wird die 5V-Spannung vom Raspberry Pi.
Jeder Relais-Pin kann mit einem GPIO-Pin des Raspberry Pis verbunden und
somit einzeln angesteuert werden. In diesem Anwendungsfall werden für
die Lautsprecherabschaltung 7 Relais mit einem GPIO-Pin geschalten, da
eine Differenzierung der Leitungen nicht notwendig ist. Gleichzeitig
wird der Strom zu den Subwoofern über zwei Relais auf der anderen
Platine geschalten. Ein weiterer GPIO-Pin ist für die Steuerung der
Versorgungsspannung der anderen Geräte im Rack zuständig.

# Raspberry Pi


Der Raspberry Pi ist ein Mikroprozessor, der von „The Raspberry Pi
Foundation" entwickelt wurde, um Menschen auf der ganzen Welt einen
Zugang zur digitalen Welt zu ermöglichen. Der Mikroprozessor ist für
nahezu jeden leistbar, verfügt aber über alle Funktionen eines
vollwertigen PCs. Zusätzlich sind Dokumentationen und Anleitungen zum
Raspberry Pi gratis online verfügbar.
\cite{noauthor_raspberry_nodate-5}

Mittlerweile finden sich im Internet verschiedenste Blogs und Videos zu
Projekten mit Raspberry Pis, die von jedem nachgebaut werden können.
Aufgrund seines Preises und seiner geringen Größe wird der
Mikroprozessor gerne für Internet-Of-Things verwendet.

## Funktionen und Spezifikationen

Je nach Modell verfügt der Raspberry Pi über verschiedene
Spezifikationen. Grundlegend sind jedoch alle ähnlich aufgebaut.

Raspberry Pi 2 Model B:

-   A 900MHz quad-core ARM Cortex-A7 CPU

-   1GB RAM


-   4 USB ports

-   40 GPIO pins

-   Full HDMI port

-   Ethernet port

-   Combined 3.5mm audio jack and composite video

-   Camera interface (CSI)

-   Display interface (DSI)

-   Micro SD card slot

-   VideoCore IV 3D graphics core

\cite{noauthor_raspberry_nodate-4}

## Eignung für dieses Projekt

Durch den Preis, die Größe und Möglichkeit, elektronische Schaltungen
und Komponenten anschließen zu können, ist der Raspberry Pi 2 Model B
sehr gut auf die Anforderungen des Projekts zugeschnitten. Mittels
USB-Schnittstellen können die Infrarotplatine und das USB-DMX-Interface
angeschlossen werden. Die restliche Elektronik lassen sich mit den
„General-Input-Output-Pins" (GPIO-Pins) verbinden. Da eine vollwertige
CPU verbaut ist, können auch komplexere Programme ausgeführt werden.

## Mögliche Alternativen

Am Markt gibt es zahlreiche Mikroprozessoren mit verschiedensten Vor-
und Nachteilen. Der „Banana Pi M2" oder der „Odroid C1+" verfügen
beispielsweise über eine Gigabit-Ethernet-Schnittstelle. Das
„Cubieboard" ist dem Raspberry Pi leistungsmäßig deutlich überlegen,
kostet allerdings dreimal so viel. Für dieses Projekt passt das
Preis/Leistungsverhältnis des Raspberry Pis am besten.
\cite{wolski_besten_2016}

# Anschlüsse für Anwender


##  Anforderungen

Der Hauptanwendungszweck des Systems sind Präsentationen von
Schülerinnen und Schülern und Lehrerinnen und Lehrern. Deren Anforderung
ist es, mit geringstem Aufwand, alle technischen Geräte, die für die
Präsentation benötigt werden, verwenden zu können.
Im Regelfall wird ein Anschluss für Bildübertragung von Laptops auf den
Beamer, ein Audioanschluss und in manchen Fällen auch ein Mikrofon
benötigt.
Für die bestmögliche Kompatibilität mit gängigen Laptops und anderen
Abspielgeräten, sind eine HDMI-Buchse, zwei Cinchbuchsen und eine
XLR-Female-Buchse verbaut. Zusätzlich sind eine Schutzkontaktsteckdose,
für mitgebrachte Geräte und eine USB-Buchse für den, im Rack
verbauten Kleinrechner vorhanden.

Die Variante, Buchsen statt Kabeln zu verbauen, hat sich als
praktikabler erwiesen als die temporäre Lösung mit Kabeln, die sich
nicht bewährt hat.

Die Kabel waren im Rack an die Geräte angeschlossen und durch eine
Öffnung an der Oberseite des Racks herausgeführt. Unglücklicherweise
haben Schüler mehrmals, kräftig an ihnen angezogen. Beschädigungen an
Kabeln, sowie an Geräten waren die Folge.

Um solche Fälle in Zukunft zu vermeiden, sind die Buchsen für Anwender
gut zugänglich montiert. Die benötigten Kabel befinden sich im
Präsentationskoffer, der von den Anwendern beim Portier ausgeborgt
werden kann.

## Nutzerfreundlichkeit

Zur Vermeidung von lauten Geräuschen, die beim Anstecken auf die
Lautsprecher übertragen werden, wird mittels Reedkontakt festgestellt,
ob die Plexiglasabdeckung der Buchsen oder die Rack-Tür geöffnet sind.
Wenn dies der Fall ist, greift die Lautsprecherabschaltung und der
Signalfluss zu den Lautsprechern wird unterbrochen bis die Abdeckung und
die Tür wieder geschlossen sind. Dies ist nur bei der XLR- und der
Klinkenbuchse notwendig, da bei HDMI-Schnittstellen keine Störgeräusche
auftreten, ebenso bei der USB-Schnittstelle. Auch der Einschalttaster
befindet sich unter der Abdeckung, um unbeabsichtigtes Ausschalten des
Systems zu verhindern.

Die Buchsen sind an der Seitenwand des Racks eingebaut, da auf der
Oberseite Platz für Laptops oder einen Bildschirm vorhanden sein soll.
Damit der Seitenteil für Wartungsarbeiten vollständig ausgebaut werden
kann, sind alle Elemente durch Steckverbindungen vom Rest des Racks
trennbar.

## Technische Umsetzung

Der Reedkontakt in der Abdeckung ist mit dem zweiten Kontakt in der
Rack-Tür seriell verbunden. Via GPIO-Pin werden beide vom Raspberry Pi
ausgelesen. Wenn einer der beiden Kontakte offen ist, erhalten die
Relais ein Signal und die Lautsprecherleitungen werden unterbrochen.

Der Signalaustausch zwischen Mediatrix-Modul und Anschlussfeld erfolgt
über eine fünfpolige Leitung mit DIN-Steckverbindern an beiden Enden. An
der Innenseite des Anschlussfeldes befindet sich ein DIN-Female-Stecker.
Das durch diesen Stecker ankommende Signal wird auf einer
Lochrasterplatine in einem Kunststoffgehäuse auf die verschiedenen
Komponenten verteilt.

# Ein- und Ausschaltverzögerung der Lautsprecher


Audio ist ein wesentlicher Teil von Multimedia. Darum wird es auch sehr
gerne in Präsentationen eingebunden. Produktvideos, Soundeffekte oder
Musik tragen oftmals zum Erfolg einer Präsentation bei. Das darf durch
Störgeräusche beim Einschalten von Audiogeräten in keinem Fall
zunichtegemacht werden. Aus diesem Grund ist ein Lautsprecherschutz
implementiert. Dieser unterbindet solche Geräusche, durch Unterbrechung
der Lautsprecherleitungen.

Beim Einschalten von Verstärkern und Mischpulten kommt es zu knackenden
Geräuschen, die auf die Lautsprecher übertragen werden. Diese können
dadurch beschädigt werden. Zudem ist es für Zuhörende sehr unangenehm.
Gängige Verstärker unterbinden dies, indem sie erst nachdem sie
vollständig hochgefahren sind, die Lautsprecherleitungen freigeben.
Mischpulte verfügen in der Regel über keine ähnliche Funktion. Hier
liegt es in der Verantwortung des Anwenders, die Ausgangslautstärke des
Pults auf das Minimum einzustellen, bevor das Pult eingeschalten wird.
Im Fall von Schülerinnen und Schülern kann nicht davon ausgegangen
werden, dass dies beachtet wird. Darum muss das Unterbrechen zu gewissen
Ereignissen folgendermaßen passieren:

Beim Druck des Einschalttasters wird dem Raspberry Pi ein Signal
übermittelt. In Folge schaltet dieser das Relais ein, das die anderen
Geräte im Rack mit Strom versorgt. Nach 20 Sekunden werden die
Lautsprecherleitungen freigegeben. Zuletzt wird die Stromzufuhr für die
Subwoofer geöffnet.

1.  Einschalter wird gedrückt

    a.  Raspberry Pi bekommt Signal

    b.  Raspberry Pi schaltet Strom für Geräte ein

    c.  Raspberry Pi wartet 20sek.

    d.  Raspberry Pi schaltet Lautsprecher ein

    e.  Raspberry Pi schaltet Sub Strom ein

2.  Buchsenabdeckung wird geöffnet

    a.  Raspberry Pi schaltet Lautsprecher ab

    b.  Raspberry Pi schaltet Sub Strom ab

3.  Buchsenabdeckung wird geschlossen

    a.  Raspberry Pi schaltet Lautsprecher ein

    b.  Raspberry Pi schaltet Sub Strom ein

4.  Rack-Tür wird geöffnet

    a.  Raspberry Pi schaltet Lautsprecher ab

    b.  Raspberry Pi schaltet Sub Strom ab

5.  Rack-Tür wird geschlossen

    a.  Raspberry Pi schaltet Lautsprecher ein

    b.  Raspberry Pi schaltet Sub Strom ein

6.  Ausschalter wird gedrückt

    a.  Raspberry Pi bekommt Signal

    b.  Raspberry Pi schaltet Lautsprecher ab

    c.  Raspberry Pi schaltet Sub Strom ab

    d.  Raspberry Pi wartet eine Sekunde

    e.  Raspberry Pi schaltet Strom für Geräte ab

# Stromversorgung


## Stromzufuhr zum System

Die im System verbauten Komponenten benötigen entweder 230V, 12V oder
5V.
Die Stromzuleitung zum Rack erfolgt mit 230V mittels PowerCon-Kabel
und versorgt das Mediatrix-Modul dauerhaft mit Strom. Das Kabel ist
durch die Kabelöffnung in der Rückwand zum Mediatrix-Modul geführt. Vom
Mediatrix-Modul ist eine, durch den Raspberry Pi gesteuerte
PowerCon-Buchse zu einer zu einer Steckerleiste verbunden. An dieser
Leiste sind die im Rack eingebauten und die Steckdose an der Seitenwand
des Racks angeschlossen.

Die Variante, eine PowerCon-Verbindung zu verwenden bietet sich
hervorragend dafür an, da sich der Stecker nicht unbeabsichtigt lösen
kann. Um diesen abzustecken muss ein Sicherungsschieber am Stecker nach
hinten gezogen und der Stecker nach links gedreht werden.

## Stromverteilung im Mediatrix-Modul

Die Phase der ankommenden 230V wird direkt durch eine Sicherung
geschickt, bevor sie in eine Federklemme geleitet wird. Der Nullleiter
und die Erdung werden jeweils direkt in eine Federklemme geleitet. Von
den Federklemmen der Phase und des Nullleiters gehen jeweils zwei
Leitungen in ein Relais. An der anderen Seite der Relais sind die
PowerCon-Ausgänge für die Subwoofer und die Steckerleiste der Geräte
angeschlossen. Die Erdung wird nicht geschalten und ist von der
Federklemme zu den Buchsen verbunden. Das Netzteil ist an die
Nullleiter-Klemme und an die Phasen-Klemme angeschlossen, da es über
keinen Kaltgerätestecker verfügt. Das Gehäuse ist mit einem Kabel mit
Öse, die am Boden verschraubt ist, geerdet.

Mit dem Schalter an der Front des Mediatrix-Moduls sollte der Raspberry
Pi, im Falle eines Fehlers, durch Abschaltung des Stroms neugestartet
werden können. Aus diesem Grund war geplant, die Phase direkt nach der
Sicherung über den Schalter zu leiten. Bei einem Test stellte sich
jedoch heraus, dass das Netzteil noch für eine halbe Minute nach
Betätigung des Schalters Spannung liefert. Diese Wartezeit wäre zu lang
gewesen. Bei einem erneuten Versuch mit angehängter Last verkürzte sich
diese Zeit jedoch auf unter fünf Sekunden. Falls sich die Wartezeit
trotz Last nicht verkürzt hätte, wäre der Schalter zwischen Netzteil und
Stepdown-Converter gehängt worden.

Bei erneuten Test stellte sich heraus, dass die Relais, beim Schalten so
viel Strom benötigen, sodass der Raspberry Pi kurzzeitig unterversorgt
ist. Das führt zu unkontrolliertem Schalten der Relais. Die Lösung für
dieses Problem ist ein Kondensator. Dieser ist parallel zum Raspberry Pi
mit dem Ausgang des Stepdown-Converters verbunden. Bei kurzzeitigem
Strommangel wird der Raspberry Pi vom Kondensator versorgt.

## Spannungswandlung

Da der Raspberry Pi allerdings eine Versorgungsspannung von 5V benötigt,
müssen die 12V DC nochmals gewandelt werden. Dies geschieht mit Hilfe
eines Stepdown-Converters. Parallel dazu ist ein Kabel, das zur
Hauptplatine führt an den Gleichrichter angeschlossen.

Aufgrund des benötigten Stromes von mindestens 3A war eine Versorgung
mittels Transformators geplant. Der Transformator sollte 12V
Wechselspannung liefern, die mittels Brückengleichrichter auf 12V
Gleichspannung umgewandelt werden sollten. Im Zuge von Testmessungen
stellte sich jedoch heraus, dass die Spannung nach dem Gleichrichter mit
17V zu hoch war. In einem Versuch wurde eine Last von 0,6A
angeschlossen, woraufhin die Spannung auf 14V zurückging. Mit diesem
Verhalten konnte das System nicht ordnungsgemäß betrieben werden. Aus
diesem Grund wurde schlussendlich ein getaktetes Netzteil mit 4,1A bei
12V eingebaut.

## Die Hauptplatine

Auf der Hauptplatine werden die 12V DC auf verschiedene Komponenten
verteilt, beispielsweise die Relais-Platinen, Status LEDs und den
Lüfter. Da der Raspberry Pi nur in der Lage ist Spannungen von 3,3V zu
schalten, werden für die Status LEDs und der Lüfter MOSFETs verwendet.

### MOSFET

Bei einem MOSFET handelt es sich um einen
Metall-Oxid-Halbleiter-Feldeffekttransistor.

\begin{quote}
„Ein Transistor ist ein Halbleiter-Bauelement aus drei
aufeinanderfolgenden Halbleiterschichten, also npn- oder pnp-Schichten.
Er hat somit zwei pn-Übergänge, in deren Grenzgebieten sich
Sperrschichten ausbilden."\cite[S. 372]{krikava_grundlagen_1981}
\end{quote}

Der MOSFET verfügt über drei Pins:

-   Gate

-   Drain

-   Source

Angeschlossen ist der MOSFET wie folgt:

Der Gate-Kontakt ist mit dem IO-Pin des Raspberry Pis verbunden.
Zwischen Drain-Kontakt und 12V ist die Last angeschlossen. Weiters ist
eine Freilaufdiode in Flussrichtung von GND zu Drain eingebaut, um den
MOSFET vor Überspannungen zu schützen. Source-Kontakt ist auf GND
geführt.

## Einschalten des Systems

Per Druck auf den am Rack angebrachten Taster schaltet der Raspberry Pi
ein 12V Relais, das den anderen Geräten die Stromzufuhr öffnet. Jenes
12V Netzteil betreibt die Relais und muss daher, wie der Raspberry Pi,
zu jeder Zeit mit Strom versorgt werden. Wenn alle Geräte den
Startvorgang abgeschlossen haben, gibt der Mikroprozessor auch die
Lautsprecherleitungen frei (siehe Ein- und Ausschaltverzögerung).

Die Verwendung von Relais für diese Anwendung hat sich bewährt, da der
Raspberry Pi nicht in der Lage ist Spannungen von 230V zu schalten, aber
mit 3,3V Steuerbefehle an ein Relais senden kann.

# Verkabelung


## Vorgang

Die Verkabelung innerhalb des Racks ist auf die eingebauten Geräte
angepasst und optimiert. Alle Kabel sind etwas länger bemessen, als
benötigt, um nach dem Austausch eines Geräts oder einer Neuanordnung der
Geräte im Rack weiterhin verwendbar zu sein.

## Lautsprecherleitungen

Für die Leitungen zwischen AV-Receiver, dem Mediatrix-Modul und den
Lautsprechern sind Lautsprecherkabel mit einem Leitungsquerschnitt von
2,5mm² verbaut. Die zwei jeweils zusammengehörigen Leitungen sind
miteinander verschweißt.
Auch im Mediatrix-Modul sind alle Lautsprecherleitungen von den Buchsen
zu den Relais und zu den Ausgangsbuchsen mit diesen Kabeln verbunden.

## Anschlüsse für User

Die für den User notwendigen Anschlussbuchsen sind an der Seite des
Rack-Schranks eingebaut.

Die HDMI-Buchse ist an der Rückseite, wie an der Vorderseite mit einer
HDMI-Buchse ausgestattet. Dies ermöglicht die Verwendung eines üblichen
HDMI-Kabels, das an einen HDMI-Input des AV-Receivers angeschlossen ist.

Die XLR-Buchse ist mit einem 90cm langen XLR-Kabel mit einem
Mikrofoneingang des Mischpults verbunden.

Die Cinch-Buchsen führen zum Line-Input des Mischpults. Das Kabel ist
mit den Buchsen verlötet.

Die USB-Buchse ist mit einem USB 2.0 Druckerkabel an den Rechner
angeschlossen.

Eine Schutzkontaktsteckdose ist an den Verteiler der anderen Geräte
angeschlossen und wird nach Einschalten des Systems mit Strom versorgt.
Zur Verkabelung wurden handelsübliche 1,5mm² Stromkabel verwendet.

# Gehäusebelüftung


Da die im Rack verbauten Geräte im Betrieb Wärme produzieren, ist ein
Kühlsystem vorhanden. Ein 12V Lüfter sorgt für eine Zirkulation der Luft
im Rack. Durch eine von der Temperatur abhängigen Drehzahlregelung
werden Störgeräusche durch den Lüfter minimiert. Es wird dafür gesorgt,
dass der Lüfter nur bei Bedarf eingeschalten ist und auch nur mit einer
angemessenen Drehzahl betrieben wird.

Im Zeitabstand von zwei Sekunden misst der Raspberry Pi die Temperatur
im Inneren des Gehäuses und regelt demnach die Drehzahl des Lüfters. Für
die Messung wird ein digitaler Temperatursensor mit der Bezeichnung
„DS1820" eingesetzt.

## Digitaler Temperatursensor

Ein digitaler Temperatursensor bietet die Möglichkeit, im Vergleich zu
einem temperaturabhängigen Widerstand, die Temperatur direkt in Grad
Celsius auszulesen. Somit sind keine Umrechnungen von Ohm-werten auf
Grad Celsius mehr notwendig.

## Integration

Damit der Temperatursensor ausgelesen werden kann, muss er zunächst mit
dem Raspberry Pi verbunden werden. Dazu werden ein GPIO-Pin, eine 3,3V
Versorgung und der GND folgendermaßen an die Konnektoren des DS1820
angeschlossen:

![Schaltplan DS1820 Raspberry Pi\quelle{https://bit.ly/2q76mR5}](bilder/Florian/Tempsensor.png){width="2.5in"}

## Aufgetretene Probleme:

Laut des Tutorials sollte eine ID angezeigt werden, die dem Format
`28-00000XXXXXXXX` entspricht. Doch in dem Versuchsaufbau erschienen
mehrere IDs, die das Format `00-XX00000000000` haben. Keine von diesen
IDs beinhaltete das File `w1_slave`. Dies hatte zur Folge, dass der
Messwert des Temperatursensors nicht ausgelesen werden konnte.

Bei einem erneuten Versuch wurde nach folgendem Tutorial gearbeitet:

\url{<https://www.raspberrypi-spy.co.uk/2013/03/raspberry-pi-1-wire-digital-thermometer-sensor/>}

Zudem wurde die Schaltung neu aufgebaut, um sicherzustellen, dass diese
kein Problem darstellt.

![Putty-Ausgabe inkorrekt](bilder/Florian/Putty1.png){width=90%}

In dieser Anleitung wird eine notwendige Konfiguration im
`/boot/config.txt` beschrieben. Folgende Codezeile musste eingefügt
werden:

`dtoverlay=w1-gpio,gpiopin=4`

Nach der Änderung im `/boot/config.txt` File und einem darauffolgenden
reboot, schien zum ersten Mal eine plausible Seriennummer auf.

![Putty-Ausgabe korrekt](bilder/Florian/Putty2.png){width=90%}

Das Wechseln in das Verzeichnis der Seriennummer funktionierte ohne
Probleme und das „w1\_slave" File ließ sich anzeigen. Nun konnte man mit
der Variable „t" die Temperatur in Grad Celsius ablesen. Der Wert
`t=21125` entspricht 21,125°C.

![Putty-Ausgabe Temperatur wird angezeigt](bilder/Florian/Putty3.png){width=90%}

Auch Erwärmung durch Reiben wurde erkannt und der Temperaturwert änderte
sich auf 25,062°C.

Nachdem die Temperatur nun manuell ausgelesen werden konnte, galt es
dies auch automatisch zu bewerkstelligen. Dazu benötigte ich ein
Programm, das diese Aufgabe übernahm und in gewissen Zeitabständen die
Temperatur abfragte.

Dies kann in den Programmiersprachen „C" oder „PYTHON" gelöst werden.\
Aufgrund des Rates von Herrn Professor August Hörandl fiel die
Entscheidung bei der Wahl der Programmiersprache auf PYTHON:

\begin{quote}„Raspberry Pi" steht für „Raspberry Python Interpreter", d.h. der
„Raspberry Pi" verfügt über einen integrierten Interpreter für die
Programmiersprache Python. Das spart zusätzlichen Aufwand, wie das
Kompilieren von „C"-Programmen.\cite{hoerandl_august}
\end{quote}

Weiters gibt es im Internet zahlreiche Anleitungen, wie ein Programm für
diesen Anwendungsfall aussehen kann. Als Grundlage wurde das
Beispielprogramm, aus dem bereits erwähnten Tutorial zur Hand genommen
und angepasst.

```python
def gettemp(id):
    try:
        mytemp = ''
        filename = 'w1\_slave'
        f = open('/sys/bus/w1/devices/' + id + '/' + filename, 'r')
        line = f.readline() # read 1st line
        crc = line.rsplit(' ',1)
        crc = crc[1].replace('\n', '')
        if crc=='YES':
            line = f.readline() # read 2nd line
            mytemp = line.rsplit('t=',1)
        else:
            mytemp = 99999
        f.close()
        return int(mytemp[1])
    except:
        return 99999
```
In Folge wurde die Logik für die Umwandlung von der gemessenen
Temperatur in einen Prozentwert zur Bestimmung des PWM-Duty-Cycles
integriert.

```python
def fanCon(mt):
    st = 35.0 #Solltemperatur in Grad Celsius (Temperaturraum 35-55 Grad)
    maxspeed = 3800 #Maximale Geschwindigkeit des Luefters in RPM
    prozent = 0
    if mt > st:
        rpm=(mt-st)*190 #Umdrehungen Pro Minute
        prozent=(mt-st)/5 #Prozent der Drehzahl
        if prozent > 100:
            prozent = 100
    return prozent
```
Dieser Prozentwert wird an die PWM-Methode weitergegeben.

```python
def pwm():

    import RPi.GPIO as GPIO
    from time import sleep

    PWMpin = 33 # PWM pin zum Anschluss des Luefters (PWM1 33,35)
    GPIO.setwarnings(False)
    GPIO.setmode(GPIO.BOARD) #Pinnummerierung setzen
    GPIO.setup(PWMpin,GPIO.OUT)
    fan_pwm = GPIO.PWM(PWMpin,100) #PWM Instanz mit Frequenz von 100Hz
    erzeugen
    fan_pwm.start(0)
    while True:


        #Auslesen der Temperatur
        id = '10-000801a96106'
        mt = gettemp(id)/float(1000) #Momentantemperatur
        print "Momentantemperatur : " + '{:.3f}'.format(mt)
        prozent = fanCon(mt)

        print "Prozent: " + '{:.3f}'.format(prozent)

        if prozent > 20:
            fan_pwm.ChangeDutyCycle(prozent)
            sleep(2)

        if prozent < 20:
            fan_pwm.ChangeDutyCycle(0)
            sleep(2)

    return
```

Bei einem Duty-Cycle-Wert unter 15-20% erhält der Motor des Lüfters
nicht genug Leistung um zu starten. Zur Vermeidung von Schäden am
Lüfter, ist der minimale Duty-Cycle-Wert bei 20% der maximalen Drehzahl
angesetzt. Somit startet und stoppt der Lüfter bei 20%. Die maximale
Drehzahl wird bei 55 Grad Celsius erreicht. Bei höheren Temperaturen
dreht der Lüfter mit dieser Drehzahl weiter.

## Lüftersteuerung mit PWM

Um den Geräuschpegel möglichst gering zu halten, sollen die Lüfter nur
so schnell laufen, wie es zu dem Zeitpunkt notwendig ist. Dafür muss
eine Drehzahlregelung vorgenommen werden.

Dafür gibt es im Allgemeinen zwei Möglichkeiten:

1.  Regelung durch Vermindern und Erhöhen der Spannung am Lüfter

2.  Pulsweitenmodulation

Die Regelung über die Spannung wäre wiederum auf verschiedene Weisen
möglich:

1.  Die einfachste Variante ist sicherlich die Versorgungsspannung des
    Lüfters mittels temperaturabhängigen Widerstands zu regulieren.
    Dafür wäre kein Microprozessor notwendig. Allerdings können
    Zusatzfunktionen, wie eine zeitliche Temperaturstatistik oder
    Benachrichtigungen an den Techniker, bei zu hoher Temperatur nicht
    ergänzt werden.

Falls der Temperaturbereich nachträglich geändert werden soll, bringt
das einen großen Aufwand mit sich.

2.  Wenn man die Versorgungsspannung allerdings mit Hilfe eines
    digitalen Potentiometers reguliert, das aufgrund der Messung des
    digitalen Temperatursensors vom Raspberry Pi konfiguriert wird,
    besteht die Möglichkeit die oben genannten Funktionen zu
    implementieren.

Nachdem der verwendete Lüfter allerdings nur via PWM regelbar ist,
fallen die anderen Varianten in diesem Fall weg.

PWM, oder auch Pulsweitenmodulation, ist ein Verfahren, bei dem

\begin{quote}„[...] das Verhältnis zwischen der Einschaltzeit und Periodendauer
eines Rechtecksignals bei fester Grundfrequenz variiert wird. Das
Verhältnis zwischen der Einschaltzeit $t_{ein}$ und der Periodendauer $T =t_{ein} + t_{aus}$ wird
als das Tastverhältnis $p$ bezeichnet. (laut DIN IEC 60469-1:
Tastgrad) (engl. Duty Cycle, meist abgekürzt DC, nicht zu verwechseln
mit Direct Current = Gleichstrom). "\cite{noauthor_pulsweitenmodulation_nodate}
\end{quote}

![Pulsweite\quelle{https://bit.ly/2w2EfVW}](bilder/Florian/PWM1.png){width=90%}


Das Ganze kann mit einem üblichen Taster und einem Elektromotor
verglichen werden. Ein Druck auf den Taster sorgt dafür, dass der Motor
die maximale Drehzahl erreichen kann. Wird der Taster wieder
losgelassen, stoppt die Stromversorgung und der Motor wird nicht mehr
angetrieben. Allerdings benötigt der Motor eine gewisse Zeit, um auf
Höchstgeschwindigkeit zu beschleunigen und auch um wieder bis zum
Stillstand abzubremsen. Dieses Verhalten kann genutzt werden, um die
Drehzahl zu regulieren.

Betätigt man den Taster schneller und öfter hintereinander, also mit
einer bestimmten Frequenz, so wird der Motor nie seine
Höchstgeschwindigkeit erreichen, aber auch nicht zum Stillstand kommen.
Diese Taster-Betätigungen können auch als High und Low oder Ein und Aus
betrachtet werden. Wenn man den Betätigungsvorgang visualisieren möchte,
eignet sich eine Rechteckschwingung.

Der Bereich zwischen zwei Hochpunkten ist die Periodendauer T. Innerhalb
dieser Periodendauer kann nun, durch verschieben des Ausschaltzeitpunkts
bestimmt werden, wieviel Prozent, der Spannung an den Motor
weitergegeben werden (Siehe Abb.). Der Prozentwert wird als Duty-Cycle
angegeben. 100% des Duty-Cycles entsprechen dem Betrieb mit der gesamten
vorhandenen Spannung und somit der maximalen Drehzahl. Über den
Mikroprozessor kann mit einer hohen Frequenz ein- und ausgeschaltet
werden. Somit dreht sich der Motor (fast) gleichmäßig, jedoch in der
gewünschten Geschwindigkeit.

![Duty-Cycle\quelle{https://bit.ly/2GUZT6w}](bilder/Florian/PWM2.png){width=90%}

## Generieren eines PWM-Signals mit dem Raspberry Pi

Mit PYTHON ist das Generieren eines PWM-Signals schnell geschehen:

```python
GPIO.setup(PWMpin,GPIO.OUT) #Pin als Ausgang definieren
my_pwm = GPIO.PWM(PWMpin,100) #PWM Instanz mit Frequenz von 100Hz erzeugen
my_pwm.start(0) #PWM Instanz starten

my_pwm.ChangeDutyCycle(prozent) #einstellen des Duty-Cycles
```

Nach Eingabe dieser vier Befehle wird ein PWM-Signal mit fixem
Prozentwert erzeugt. Mit Hilfe von Schleifen kann der Wert, je nach
Bedarf variiert werden.

# Quickstart-Guide


User, die das System verwenden wollen, können mit dem Handy oder
Tablet-PC über einen QR-Code zum Login-Dialog navigieren. Für Personen,
die das System auf einem Gerät ohne QR-Code Scanner verwenden wollen,
befindet sich zusätzlich ein Link auf dem Rack. Die ersten Schritte in
der Anwendung werden zudem kurz beschrieben.

# Hardware für Infrarotfunktionalität


Um wirklich alle Geräte des Systems aus einer Hand bedienen zu können
bedarf es einer Steuerung mittels Infrarot. Infrarot ist nach wie vor
Standard für Fernbedienungen für AV-Geräte. Darum war es naheliegend
diesen zu integrieren. Um Infrarotsignale senden zu können, wird eine
Infrarotdiode und ein Konverter benötigt. Der Konverter wandelt den
gespeicherten Befehl in elektrische Impulse um, die von der IR-Diode
ausgegeben werden. Realisiert wurde die Einbindung dieser Komponenten
durch ein Gerät, das vor einigen Jahren, von einem Professor unserer
Schule entwickelt wurde. Ein entscheidender Vorteil dieses Gerätes ist
die Möglichkeit, neue Infrarotbefehle über eine Lesediode einlernen und
abspeichern zu können. Bei Anschaffung eines neuen Beamers können die
Codes in wenigen Minuten ausgetauscht werden. Weiteren Änderungen sind
nicht notwendig.

Bislang wurde das IR-Device noch via Serial-Connector angesteuert und
die Stromversorgung mittels 9V-Batterie gewehrleistet. Da diese
Technologien veraltet sind, wurde auf eine USB Schnittstelle umgerüstet,
die die Signal- und Stromversorgung übernimmt. Die Platine ist mit einem
PIC bestückt, der die Infrarotdioden ansteuert. Um Infrarotsignale in
alle Richtungen senden zu können, ist eine der beiden Infrarotdioden
außerhalb des Racks platziert. Somit kann die Signalrichtung an die
Standorte der zu steuernden Geräte angepasst werden. Die zweite Diode
befindet sich innerhalb des Racks, um Geräte, die im Rack verbaut sind
ansprechen zu können.

![Infrarotplatine](bilder/Florian/IR.jpg){width=30%}

# Status-Erkennung der Geräte


Wenn Geräte mittels Infrarot eingeschaltet werden, erhält der Sender
keine Information, ob das Signal angekommen ist, und ob das Gerät
wirklich läuft. Um dies festzustellen, verfügt das System über einen
Stromausgang, an dem gemessen wird, ob ein gewisser Strom fließt. Wenn
das der Fall ist, erhält der Raspberry Pi ein Signal. Somit kann der
User über den Status der Geräte informiert werden.
In dieser Installation wird so der Einschaltzustand des Beamers
bestimmt.

Anders als der Beamer besitzt der AV-Receiver einen „Trigger-Output". An
jenem liegen 12V an, sobald das Gerät einsatzbereit ist. Via 3,5mm
Klinkenbuchse wird diese Spannung in das Mediatrix-Modul geleitet und
dort auf 3.3V umgewandelt. Der Raspberry Pi ist so in der Lage, die
Spannung auszuwerten.
