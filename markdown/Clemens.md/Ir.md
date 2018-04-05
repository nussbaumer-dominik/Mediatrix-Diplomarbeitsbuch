Infrarot bezeichnet elektromagnetische Wellen im Bereich zwischen 780 Nanometer und einem Millimeter.\cite{noauthor_baua_nodate} 
Der Name leitet sich von dem lateinischen Präfix „Infra“, was „unterhalb“ bedeutet, und dem Wort „Rot“ ab und bedeutet somit „unter Rot“. 
Das soll beschreiben, dass die Wellenlänge unterhalb der von Rot, also dem niedrigsten noch sichtbaren Bereich, liegt (\abb{elektroWellen}). 
Da Infrarot vom Menschlichen Auge nicht wahrgenommen wird, wird es zur Steuerung von unterschiedlichsten Geräten verwendet. 
Die Steuerung über Infrarot ist in Produkten der Elektronikbranche sehr verbreitet, jedoch wurde kein einheitlicher Standard geschaffen. 
Die verschiedenen Standards funktionieren jedoch nach ähnlichen Prinzipien.
Einer der verbreitetsten ist der RC-5 Standard, auf welchen im folgenden Kapitel näher eingegangen wird. \cite{noauthor_sb-projects_nodate}

![Darstellung des elektromagnetischem Spektrums\label{elektroWellen} \quelle\url{https://bit.ly/2EkbfLV}](bilder/Clemens/Optikspectrum.png){width=90%}

## Funktionsweise des Protokolls (RC-5)
Der RC-5-Code hat eine Gesamtlänge von 14 Bit. Ursprünglich waren diese Bit folgendermaßen aufgeteilt: zwei Startbit, ein Togglebit, fünf Adressbits und sechs Kommandobits.
Die Startbits dienen zur Synchronisation zwischen Sender und Empfänger.
Das Togglebit wird bei jedem Tastendruck geändert, somit kann zwischen dem Gedrückthalten und dem Öftersdrücken eines Knopfs der Infrarotfernbedienung unterschieden werden.
Die Adressbits enthalten die Geräte-Adresse. Mit diesen 5 Adressbits können somit 32 Geräte gesteuert werden.
Abschließend werden noch die Kommandobits gesendet, welche den Code des Kommandos, das an das Gerät übermittelt wird, enthält. 
Mit den 6 Bit können 64 verschiedene Kommandos an ein Gerät geschickt werden.
Da 64 Bit für die Steuerung von Geräten oft nicht ausrreichen, wurde der RC-5 Standard nachträglich geändert.
So kann das zweite Startbit ebenfalls als Kommandobit verwendet werden.

Für die Übertragung wird eine 36 kHz Trägerfrequenz verwendet. 
Um ein Bit mit dem Wert "1" zu übertragen, wird für 889 \textmu s wiederholt ein ungefähr 6 \textmu s langer Impuls, gefolgt von einer 20 \textmu s langen Pause, übertragen.
Anschließend wird 889 \textmu s nichts gesendet.
Um den Wert "0" zu übertragen, wird genau das Gegenteil gesendet: Zuerst wird 889 \textmu s nicht gesendet und erst dann wird der Implus wiederholt für 889 \textmu s übertragen.
Daraus ergibt sich für ein Bit eine Übertragungsdauer von 1,778 ms und somit einen Gesamtübertragungsdauer eines RC-5-Codes von 24,889 ms (\abb{infra}). \cite{noauthor_elektronik:_nodate-3}

![Darstellung eines RC-5-Codes\label{infra} \quelle\url{http://www.sprut.de/electronic/ir/rc5.htm}](bilder/Clemens/ir.png){width=90%}

## Anwendung in diesem Projekt 
Die Kommunikation mit dem AV-Receiver und dem Beamer wird in diesem Projekt mittels Infrarot gesteuert. 
Infrarot bietet die größte Kompatibilität, da sowohl bei Beamern als auch bei AV-Receivern die Bedienung mittels Infrarotfernbedienung Branchenstandard ist. 
Zum Senden der Signale wird der Infrarotsender über eine C++-Schnittstelle angesprochen.
Der Administrator muss bei der Installation des Systems, alle benötigten Infrarotcodes über das in PHP programmierte Konsolenprogramm einlesen.

Der Vorteil von Infrarot für dieses Projekt besteht darin, dass sich die Steuerung nicht herstellerspezifisch ändert, sondern nur die verwendeten Codes und Protokolle. 
Dadurch kann jeder Beamer und AV-Receiver in das System integriert werden.

Ein großer Nachteil des Infrarotprotokolls ist, dass nur eine einseitige Kommunikation stattfindet und
somit die Anwendung keine Rückmeldung über den Status und den Erfolg eines Befehls auslesen kann. 