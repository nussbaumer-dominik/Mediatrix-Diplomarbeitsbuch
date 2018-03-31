WiringPi ist einen C-Library, mit der die Pins am Raspberry Pi (auch GPIO) gesteuert werden können.
Die Befehlsstruktur ist sehr der Programmierung eines Arduion nach empfunden und 
macht es somit einfach aus C++ die GPIOs zu steuern und zu lesen.
Weiters wird auch eine Kommandozeilentool mit ausgeliefert, welches ebenfalls erlaubt Pins des Raspberry Pis zu bedienen.
Das erlaubt Steuerung der GPIOs aus höheren Programmiersprachen wie PHP, was in diesem Projekt für die überprüfung der 
Leistung an AV-Receiver und Beamer notwendig war.
Eine weitere Funktionalität, die WiringPi mit sich bringt, ist, 
eine Library zur seriellen Kommunikation, welche für das Steuern des Infarrotmoduls verwendet wird.\cite{noauthor_wiringpi_nodate}
Nachfolgend wird das ansteuern der Pins und die serielle Kommunikation näher erläutert.

## Serielle Steuerung
Zur Kommunikation mit dem Infrarotmodul wurde die Serial Library verwendet.
Um die Library zu verwenden muss zuerst die Header-Datei wiringSerial.h eingebunden werden.
Mit der Funktion serialOpen wird die Verbindung zu dem Gerät hergestellt und initialisiert.
Danach kann mit den Methoden serialPrintf, serialFlush, serialDataAvail und serialGetchar mit dem Gerät kommuniziert werden.
Geschlossen wird die Verbindung mit serialClose.

Um Daten an das Infrarotmodul zu senden wird zuerst einen Verbindung aufgebaut und 
anschließend werden mit Hilfe von serialPrintf Daten an das Gerät gesendet.
SerialPrintf ist eine Nachbildung der printf Funktion des Systems und 
nimmt somit strings und char entgegen.
Um sicher zu stellen, dass die Daten an das Gerät gesendet werden und nicht in einem Buffer liegen, 
muss nach jedem Kommando die Methode serialFlush ausgeführt werden.
Weiters ist zu beachten, dass die Übertragung der daten und das auswerten durch das Serielle gerät Zeit benötigt.
Das muss auch im Programm am Raspberry Pi berücksichtigt werden. 
Hier für bietet sich die Methode sleep aus der WiringPi Library an.
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

Zum Empfangen von Daten werden die Methoden serialDataAvail und serialGetchar verwendet.
Wenn SerialDataAvail aufgerufen wird, wird eine Boolean zurückgegeben, welcher anzeigt, 
ob Daten vom Gerät zum lesen bereitstehen.
Mit der Methode serialGetchar wird ein char vom der seriellen Verbindung eingelesen.
Wenn kein Zeichen vorhanden ist blockiert diese Methode das Programm um bis zu zehn Sekunden.
Somit muss vor jedem Versuch ein Zeichen zu lesen, geprüft werden, ob überhaupt einens zur verfügung steht.\cite{noauthor_wiringpi_nodate}
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
Um festzustellen, ob der AV-Receiver und der Beamer eingeschalten sind und nicht im standby Modus laufen,
wurde einen Leistungsmessung integriert, welche über einen GPIO Pin abgefragt werden kann.
Liegt an einem Pin Spannung an (HIGH) dann ist Gerät eingeschalten, liegt keinen Spannung an (LOW) ist es im Standby-Modus.
Vor dem Senden von Infrarot-befehlen kann somit festgestellt werdenob das Gerät auch eingeschalten ist und diese Empfangen kann.
Um den Status, HIGH oder LOW , eines Pins festzustellen, wurde das Kommandozeilentool von WiringPi über PHP aufgerufen.
Das Tool wird mit dem Befehl gpio aufgerufen und bietet einen sehr großen Funktionsumfang.\cite{noauthor_wiringpi_nodate}
Die für diese Projekt wichtigen Optionen sind:

* gpio **-g**:
    Die Option -g stellt die Nummerierung der Pins auf die GPIO-Nummern ein.\cite{noauthor_wiringpi_nodate}

* gpio **mode \<pin\> in/out**:
    Mit dem Befehl mode wird definiert, ob ein PIn einen Eingangs- (in) oder eine Ausgangspin (out) ist.
    Einem pin muss immer zuerst ein Mode zugewiesen werden, bevor er verwendet werden kann\cite{noauthor_wiringpi_nodate}

* gpio **read \<pin\>**:
    Mit dem Read Befehl read wird der aktuelle Status eines Eingangspins festgestellt, liegt Spannung an (HIGH), wird eins zurück geliefert.
    Wenn keine Spannung an liegt (LOW) liefer read 0.

Der gpio-Befehl wird mit der Methode exec Aufgerufen.
Im nachfolgenden Codesegment wird ein Pin zuerst auf iin gesetzt und dann der aktuelle Wert gelesen.
Diese Logik ist auch im Mediatrix-System integriert.

```php
//Set Pin mode
exec('gpio -g mode '.$gpio.' in');

//Read status of Pin and check if high
if(exec('gpio -g read '.$this->gpio)== 1){
...
}
```