Infrarot bezeichnet elektromagnetische Wellen im Bereich zwischen 780 Nanometer und einem Millimeter.\cite{noauthor_baua_nodate} 
Der Name leitet sich von dem lateinischen Präfix "Infra", was unterhalb bedeute, und dem Wort "Rot" ab und bedeutet somit "unter Rot". 
Das soll beschreiben, dass die Wellenlänge unterhalb der von Rot, also dem niedrigsten noch sichtbaren Bereich, liegt (\abb{elektroWellen}). 
Da Infrarot vom Menschlichen Auge nicht wahrgenommen wird, wird es zur Steuerung von unterschiedlichsten Geräten verwendet. 
Die Steuerung über Infrarot ist bei Elektronikherstellern sehr verbreitet, jedoch wurde kein einheitlicher Standard geschaffen. 
Das nachfolgende Kapitel beschreibt daher den sehr verbreiteten RC-5 Standard.\cite{noauthor_sb-projects_nodate}

![Darstellung des elektromagnetischem Spektrums\label{elektroWellen}](bilder/Clemens/Optikspectrum.png){width=90%}

## Funktionsweise des Protokolls (RC-5)


## Anwendung in diesem Projekt 
Die Kommunikation mit dem AV-Receiver und dem Beamer wird in diesem Projekt mittels Infrarot gesteuert. 
Infrarot bietet die größte Kompatibilität, da sowohl bei Beamern, als auch bei AV-Receiver die Bedienung mittels Infrarotfernbedienung Branchenstandard ist. 
Zum Senden der Signale wird der bereits erwähnte Infrarotsender (\siehe[Infrarotsender]) über eine C++-Schnittstelle angesprochen.
Der Administrator muss bei der Installation des Systems, alle benötigten Infrarotcodes über das in PHP programmierte Konsolenprogramm einlesen.

Der Vorteil für dieses Projekt besteht darin, dass sich die Steuerung nicht Hersteller spezifisch nicht ändert, sondern nur die Verwendeten Codes und Protokolle. 
Dadurch kann jeder Beamer und AV-Receiver in das system integriert werden.

Ein großer Nachteil des Infrarotprotokolls ist, dass nur eine einseitige Kommunikation stattfindet und somit die Anwendung keine Rückmeldung über den Status und den erfolg eines Befehls auslesen kann. 
Aus diesem Grund musste, um die Lautstärke des AV-Receivers zu rägeln, beim Start des Servers ein Mechanismus integriert werden, der die Lautstärke zu erst ganz hinunter regelt. 
Anschließend kann durch das Schicken einer bestimmten anzahl an Infrarotsignalen ein Initialwert eingestellt werden.