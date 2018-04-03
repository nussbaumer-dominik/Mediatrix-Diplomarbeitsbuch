WiringPi ist einen C-Library, mit der die Pins am Raspberry Pi (auch GPIO) gesteuert werden können.
Die Befehlsstruktur ist sehr der Programmierung eines Arduion nachempfunden und
macht es somit einfach aus einem C++-Programm die GPIOs zu steuern und zu lesen.
Weiters wird auch eine Kommandozeilentool mit ausgeliefert, welches ebenfalls erlaubt Pins des Raspberry Pis zu bedienen.
Das erlaubt die Steuerung der GPIOs aus höheren Programmiersprachen wie PHP, was in diesem Projekt für die Überprüfung der
Leistung an AV-Receiver und Beamer notwendig ist.
Eine weitere Funktionalität, die WiringPi mit sich bringt, ist, eine Library zur seriellen Kommunikation, welche für das Steuern des Infrarot-Moduls verwendet wird.\cite{noauthor_wiringpi_nodate}
Nachfolgend wird das Ansteuern der Pins und die serielle Kommunikation näher erläutert.

## Serielle Steuerung

Zur Kommunikation mit dem Infrarot-Modul wurde die _Serial Library_ verwendet.
Um die Library zu verwenden, muss zuerst die Header-Datei wiringSerial.h eingebunden werden.
Mit der Funktion _serialOpen_ wird die Verbindung zu dem Gerät hergestellt und initialisiert.
Danach kann mit den Methoden _serialPrintf_, _serialFlush_, _serialDataAvail_ und _serialGetchar_ mit dem Gerät kommuniziert werden.
Geschlossen wird die Verbindung mit _serialClose_.

Um Daten an das Infrarot-Modul zu senden, wird zuerst einen Verbindung aufgebaut und
anschließend werden mit Hilfe von _serialPrintf_ Daten an das Gerät gesendet.
_SerialPrintf_ ist eine Nachbildung der _printf_-Funktion des Systems und
nimmt somit _strings_ und _char_ entgegen.
Um sicher zu stellen, dass die Daten an das Gerät gesendet werden und nicht in einem Zwischenspeicher liegen,
muss nach jedem Kommando die Methode _serialFlush_ ausgeführt werden.
Weiters ist zu beachten, dass die Übertragung der Daten und das Auswerten durch das serielle Gerät Zeit benötigt.
Das muss auch im Programm am Raspberry Pi berücksichtigt werden.
Hier für bietet sich die Methode _sleep_ aus der WiringPi-Library an.
Um diese zu nutzen muss der Header wiringPi.h inkludiert werden.\cite{noauthor_wiringpi_nodate}
Der nachstehende Code zeigt einen einfachen Sendevorgang, wie er in diesem Projekt integriert ist.

```cpp
#include <wiringPi.h>
#include <wiringSerial.h>

//open serial connection to IR-Device
int fd = serialOpen(IR::dev, 9600);

delay(200);

//reset the IR-Device
serialPrintf(fd,":~:");
serialFlush(fd);
delay(200);

//send code to IR-Device
serialPrintf(fd,("p"+code+"]:").c_str());
serialFlush(fd);
delay(300);

//close the connection
serialClose(fd);
```

Zum Empfangen von Daten werden die Methoden _serialDataAvail_ und _serialGetchar_ verwendet.
Wenn _SerialDataAvail_ aufgerufen wird, wird eine Boolean zurückgegeben, welcher anzeigt,
ob Daten vom Gerät zum Lesen bereitstehen.
Mit der Methode _serialGetchar_ wird ein _char_ von der seriellen Verbindung eingelesen.
Wenn kein Zeichen vorhanden ist, blockiert diese Methode das Programm um bis zu zehn Sekunden.
Somit muss vor jedem Versuch ein Zeichen zu lesen, geprüft werden, ob überhaupt eines zur Verfügung steht.\cite{noauthor_wiringpi_nodate}
Der nachstehende Code zeigt einen einfachen Lesevorgang, wie er in diesem Projekt integriert ist.

```cpp
#include <wiringSerial.h>

//open serial connection to IR-Device
int fd = serialOpen(IR::dev, 9600);

//initialise read string
string read = "";

//as long as data is available, add char to string
while (serialDataAvail (fd))
{
    read += serialGetchar (fd);
}
```

## Pin Steuerung

Um festzustellen, ob der AV-Receiver und der Beamer eingeschalten sind und nicht im Standby-Modus laufen,
wurde einen Leistungsmessung integriert, welche über einen GPIO-Pin abgefragt werden kann.
Liegt an einem Pin Spannung an (HIGH) dann ist Gerät eingeschalten, liegt keinen Spannung an (LOW) ist es im Standby-Modus.
Vor dem Senden von Infrarotbefehlen kann somit festgestellt werden, ob das Gerät auch eingeschalten ist und diese Empfangen kann.
Um den Status, HIGH oder LOW, eines Pins festzustellen, wurde das Kommandozeilentool von WiringPi über PHP aufgerufen.
Das Tool wird mit dem Befehl _gpio_ aufgerufen und bietet einen sehr großen Funktionsumfang.\cite{noauthor_wiringpi_nodate}
Die für diese Projekt wichtigen Optionen sind:

*   gpio **-g**:
    Die Option -g stellt die Nummerierung der Pins auf die GPIO-Nummern ein.\cite{noauthor_wiringpi_nodate}

*   gpio **mode \<pin\> in/out**:
    Mit dem Befehl _mode_ wird definiert, ob ein Pin ein Eingangs- (in) oder eine Ausgangspin (out) ist.
    Einem Pin muss immer zuerst ein Mode zugewiesen werden, bevor er verwendet werden kann\cite{noauthor_wiringpi_nodate}

*   gpio **read \<pin\>**:
    Mit dem Befehl _read_ wird der aktuelle Status eines Eingangspins festgestellt, liegt Spannung an (HIGH), wird Eins zurück geliefert.
    Wenn keine Spannung an liegt (LOW), liefer _read_ Null.

Der _gpio_-Befehl wird mit der Methode exec aufgerufen.
Im nachfolgenden Codesegment wird ein Pin zuerst auf in gesetzt und dann der aktuelle Wert gelesen.
Diese Logik ist auch im Mediatrix-System integriert.

```php
//Set Pin mode
exec('gpio -g mode '.$gpio.' in');

//Read status of Pin and check if high
if(exec('gpio -g read '.$this->gpio) == 1){
...
}
```
