OLA (**O**pen **L**ighting **A**rchitecture) ist Teil des Open Ligting Projects, 
welches von Simon Newton 2004 gegründet wurde. 
Das Ziel des Projekts ist es qualitativ hochwärtige, 
Open-Source Software für die Licht- und Unterhaltungsindustrie zu entwickeln.
OLA vereint verschieden DMX-Interfaces und kömmert sich um die Kommunikation mit diesen. 
Weiters werden einen vielzahl von DMX- und DMX-over-IP-Protokollen unterstützt.
Ein Vorteil der Software ist, dass sie auch auf dem im Raspberry Pi verbauten ARM-prozessor läuft.
Des weiteren bietet OLA auch eine C++ Schittstelle, diese wird nachfolgend beschrieben.\cite{noauthor_open_nodate-2}

## C++ Schnittstelle
In diesem Projekt wurde das DMX-Signals über die C++ Schnittstelle der OLA-Software gesteuert.
Um OLA über C++ zu steuern werden zwei Klassen benötigt.
Einerseits der StreamingClient und andererseits der DmxBuffer.

Der **StreamingClient** stellt die eigentliche Kommunikationskomponente zu OLA da. 
Zum Senden von DMX512 muss der Client indiziert und ein Setup durchgeführt werden.
Hierbei können Optionen, wie der automatische Start der OLA Software angegeben werden.
Über die StreamingOptions Klasse werden schon alle Default-Einstellungen geliefert,
welche für unser Projekt ausreichen.
Während des Setups wird die Verbindung zu OLA hergestellt.
Die methode sendDmX sendet einen DMXBUffer an das gegebene Universum.\cite{noauthor_open_nodate-3}

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

Der **DmxBuffer** representiert alle Channels des Universums. 
Der Wert eines Channels kann mit der Methode SetChannel geändert werden.
Beim Erstellen einer Instanz werden alle Kanäle automatisch auf Null gesetzt.
In diesem Projekt werden über die PHP-Extension (\siehe{PHP-Extension}) mehrere Channels mit deren Werten über geben. 
Diese werden dann im Buffer fest geschrieben und mit der SendDmx-Methode an das DMX-Universum gesendet.\cite{noauthor_open_nodate-3}  

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