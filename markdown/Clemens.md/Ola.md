OLA (Open Lighting Architecture) ist Teil des Open Lighting Projects, 
welches von Simon Newton 2004 gegründet wurde. 
Das Ziel des Projekts ist es, qualitativ hochwertige 
Open-Source Software für die Licht- und Unterhaltungsindustrie zu entwickeln.
OLA vereint verschiedene DMX-Interfaces und kümmert sich um die Kommunikation mit diesen. 
Weiters werden eine Vielzahl von DMX- und DMX-over-IP-Protokollen unterstützt.
Ein Vorteil der Software ist, dass sie auch auf dem im Raspberry Pi verbauten ARM-Prozessor läuft.
Des Weiteren bietet OLA auch eine C++-Schnittstelle, diese wird im folgenden Kapitel beschrieben. \cite{noauthor_open_nodate-2}

## C++-Schnittstelle
In diesem Projekt wurde das DMX-Signal über die C++-Schnittstelle der OLA gesteuert.
Um OLA über C++ zu steuern, werden zwei Klassen benötigt.
Einerseits der *StreamingClient* und andererseits der *DmxBuffer*.

Der *StreamingClient* stellt die eigentliche Kommunikationskomponente zu OLA dar. 
Zum Senden von DMX512 muss der Client indiziert und ein Setup durchgeführt werden.
Hierbei können Optionen, wie der automatische Start der OLA-Software angegeben werden.
Über die *StreamingOptions*-Klasse werden schon alle Default-Einstellungen geliefert,
welche für unser Projekt ausreichen.
Während des Setups wird die Verbindung zu OLA hergestellt.
Die Methode *sendDmx* sendet einen *DmxBuffer* an das gegebene Universum.\cite{noauthor_open_nodate-3}

```cpp
// Create a new client.
ola::client::StreamingClient ola_client(
    (ola::client::StreamingClient::Options()));

// Setup the client, this connects to the server
if (!ola_client.Setup()) {
    cerr << "Setup failed" << endl;
    exit(1);
}

//send DMX-Buffer to universe
if (!ola_client.SendDmx(UNIVERSE, buffer)) {
    cerr << "Send DMX failed" << endl;
    exit(1);
}
``` 

Der *DmxBuffer* representiert alle Channels des Universums. 
Der Wert eines Channels kann mit der Methode *SetChannel* geändert werden.
Beim Erstellen einer Instanz werden alle Kanäle automatisch auf Null gesetzt.
In diesem Projekt werden über die PHP-Extension (\siehe{PHP-Extension}) mehrere Channels mit deren Werten übergeben. 
Diese werden dann im Buffer festgeschrieben und mit der *SendDmx*-Methode an das DMX-Universum gesendet.\cite{noauthor_open_nodate-3}  

```c++
//Create new DmxBuffer
ola::DmxBuffer buffer;

//set all channels which are not 0 in buffer
for(unsigned int i = 0; i < sizeof(channels)/sizeof(channels[0]); i++){
    if(channels[i] > 0){
        buffer.SetChannel(i,channels[i]);
    }
}
```