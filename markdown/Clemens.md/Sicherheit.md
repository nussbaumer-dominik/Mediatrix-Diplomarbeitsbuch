Die Sicherheit spielt in diesem Projekt natürlich auch einen zentrale Rolle. 
Dafür wurde auf Ebene des Betriebssystems der Fokus auf Verschlüsselte Verbindungen und einen Firewall gelegt.

## SSL und TLS
SSL \bzw TLS (im weiteren als SSL bezeichnet) wurde in diesem Projekt durch 
HTTPS (Hypertext Transfer Protokoll Secure) und WSS (Websocket Secure)integriert.

SSL(**S**ecure **S**ockets **L**ayer) beschreibt ein Verfahren,
bei dem unsichere Protokolle wie HTTP und WS in eine verschlüsselte Kommunikation eingebettete werden 
und weiters auch eine Authentifizierung von Server und Client ermöglicht. Das Verfahren arbeitet mit 
öffentlichen und privaten Schlüsseln. Das Prinzip der Schlüsselpaare funktioniert folgendermaßen:
Wollen zwei oder mehrere Geräte miteinander über ein öffentliches Netz verschlüsselt kommunizieren, 
erstellt sich jeder Teilnehmer ein Schlüsselpaar, bestehend aus privaten und öffentlichem Schlüssel.
Will nun Gerät mit dem Server Gerät B verschlüssselt kommunizieren, wird ihm vom Server sein öffentlicher Schlüssel zugeschickt. 
Alle weiteren Nachrichten werden mit diesem öffentlchen Schlüssel verschlüsselt.
Die Nachrichten, die gesendet werden, sind nun nicht mehr lesbar und 
können nur mehr mit dem privaten Schlüssel vom Server entschlüsselt werden.
Um die Authentifizierung des Servers zu gewährleisten, sollten die öffentlichen Schlüssel (Zertifikate) von einer
offiziellen Stelle beglaubigt werden.\cite[S. 675 und f.]{wenz_php_2017}

## Firewall

\begin{quote}
    "Einen Paketfilter-Firewall analysiert den Datenverkehr im Netzwerk, indem sie dies Header der pakete betrachtet. 
    Anhand von festgelegten Filterregeln wird entschieden, ob ein Paket geblockt und verworfen wird oder seinen Weg fortsetzen darf."\cite[S. 288]{noauthor_neue_1991}
\end{quote}

In Linux wird bereits einen Firewall namens Netfilter/IPTables mit ausgeliefert. 
Währen Netfilter die Kernel-komponente die die Filterung vornimmt darstsellt, 
ist IPTables das Programm, das diese steuert.

Die Konfiguration vonIPTables gliedert sich in Tabellen und Listen. Generell können die Tabellen filter, 
nat und mangle bearbeitet werden. 
Die beiden Letzteren sind für die Grundfunktion der Firewall nicht notwendig 
und werden deshalb auch nicht weiter ausgeführt.
Jede tabelle enthält Listen in denen Regel stehen, wie Pakete behandelt werden sollen.
Die Regeln werden nacheinander abgearbeitet und sobald eine Regel zu trifft wird keinen weitere mehr angewandt.
Die filter-Tabelle gliedert sich in 3 vordefinierte Listen: INPUT, OUTPUT und FORWARD.
* INPUT ist einen Liste von Regeln, die bei Ankommenden Paketen angewandt werden. 
* Die Regeln der Liste OUTPUT werden bei ausgehenden paketen angewandt
* FORWARD wird nur angewandt wenn der Server als Router fungiert. 

Um das verwalten der Firewall zu vereinfache wurde in diessem Projekt ufw (Uncomplicated Firewall) verendet.
Ufw ist ein Programm das die Verwendung der IPTables unter Lunix vereinfacht.\cite{noauthor_uncomplicated_nodate}

Es wurden Regel für die Verwendung von HTTPS, SSH nd HTTP erstellt, alle anderen Ports wurden geblockt. (siehe \abb{ufw})

![Die konfigurierten UFW-Regeln\label{ufw}](bilder/Clemens/ufw.png){width=90%}