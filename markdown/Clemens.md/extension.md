Um die in C++ programmierte Steuerung der DMX-Schnittstelle, sowie das Infrarot-Modul in PHP verwenden zu können, 
wurde in diesem Projekt je eine PHP-Extension für DMX bzw. Infrarot entwickelt.
PHP bietet die Möglichkeit Erweiterungen (Extensions) zu entwickeln und einzubinden.
Bei Extensions müssen zwei Typen unterschieden werden PEAR- und PECL-Pakete.
PEAR steht für "PHP Extension and Application Repository" und enthält Extension, die in PHP programmiert wurden.
Hingegen steht PECL für "PHP Extension Community Library", deren Extensions in C programmiert sind.
PECL-Erweiterungen müssen auf dem Server vor der Verwendung kompiliert und 
in der Konfigurationsdatei von PHP eingebunden werden. \cite[S. 74]{wenz_php_2017}

Da die Steuerung der DMX-Schnittstelle und des Infrarot-Moduls in C++ programmiert ist, war bei diesem Projekt eine 
PECL-Extension notwendig.
Diese wurde mit Hilfe der Library PHP-CPP erstellt, da diese den Aufwand eine Erweiterung zu entwickeln stark verringert.

## PHP-CPP
PHP-CPP bieten den Vorteil, dass Extensions entwickelt werden können,
ohne ein detailliertes Wissen über PHP-Extensions und die Zend-Engine zu haben.
Diese Library erlaubt es ganze C++-Klassen über Extensions auch in PHP aufrufbar zu machen.
Hierbei sind drei Dateien essentiell: die *C++-Datei*, die *INI-Datei* und das *Makefile*. \cite{noauthor_php-cpp_nodate}

### C++-Datei
Diese Datei enthält die C++-Klasse und die *get_module*-Methode, die jede PHP-Extension besitzen muss.
Durch das Einbinden der Library wird die Klasse *Php* verfügbar.
Diese stellt Methoden, sowie zusätzliche Datentypen zur Verfügung.
Wenn nun eine C++-Klasse für eine PHP-Extension verwendet werden soll, 
muss diese von der Klasse *Php::Base* abgeleitet werden.
So werden einer Methode immer Parameter des Typen Php::Parameters übergeben und
als Rückgabewert wird *Php::Value* erwartet.
Die *get_module*-Methode muss immer in einem *extern "c"* Block definiert werden, da sie sonst nicht von
PHP, das in C programmiert ist, verwendet werden kann.
Innerhalb der *get_module*-Methode erstellt man eine neue statische Instanz der *Php::Extension*-Klasse und der *Php::Class*-Klasse.
*Php::Extension* repräsentiert die Extension und *Php::Class* die selbst programmierte C++-Klasse.
Der *Php::Class* werden nun der Reihe nach die Methoden der C++-Klasse zugewiesen.
Weiters wird auch spezifiziert, wie diese Methode in PHP heißen soll und 
welche Parameter welches Datentypes sie haben soll.
Am Ende wird die *Php::Class* an die *Php::Extension* angehängt und die Php::Extension an die Library zurück geliefert.\cite{noauthor_php-cpp_nodate}
Nachstehend ist ein Code-Beispiel für eine C++-Extension für PHP dargestellt, wie sie auch in diesem Projekt integriert ist.

```cpp
#include <phpcpp.h>

//create new class DMX , which is a child of Php::Base
class DMX : public Php::Base {
   
   public:
   
        //define the methode with sendChannel
        static Php::Value sendChannel(Php::Parameters &params){ . . . }

        //define the methode with blackout
        static Php::Value blackout(){ . . . }
}

/**
 *  tell the compiler that the get_module is a pure C function
 */
extern "C" {

    //define the get_module methode
    PHPCPP_EXPORT void *get_module()
    {
        //create new Extension object
        static Php::Extension extension("DMX", "1.0");

        //create new Php::Class-object
        Php::Class<DMX> dmx("DMX");
        
        /** 
         *  add the Methode sendChannel to the dmx object, 
         *  with the name sendChannel
         *  the methode has one paramter with the name channels 
         *  and is an Array 
         */
        dmx.method<&DMX::sendChannel> ("sendChannel", {
            Php::ByVal("channels", Php::Type::Array)
        });
        
        /**
         *  add the Methode blackout to the dmx object, 
         *  with the name blackout
         */
        dmx.method<&DMX::blackout> ("blackout");

        // add the class to the extension
        extension.add(std::move(dmx));

        // return the extension
        return extension;
    }
}

```

### INI-Datei und Makefile
Die INI-Datei enthält eine Zeile, in der wie in der php.ini die Extension geladen wird.
Hierfür wird der im Makefile definierte Name verwendet.
Diese Datei wird dann in das Konfigurationsverzeichnis von PHP geladen und bei jedem Start von PHP aufgerufen.
Nachstehend ist der Inhalt der INI-Datei dargestellt, wie er in diesem Projekt verwendet wurde. \cite{noauthor_php-cpp_nodate}

```ìni
extension=DMX.so
```

Das Makefile enthält alle Anweisungen, die für den Kompiliervorgang wichtig sind.
Hier kann der Name der Extension, sowie das Konfigurationsverzeichnis von PHP eingestellt werden.
Weiters können auch noch Optionen, wie die Verwendung von anderen Libraries,
wie Ola (\siehe{ola}) oder WiringPi (\siehe{WiringPi}), fürs Kompilieren hinzugefügt werden.
Dieses Makefile wird dann verwendet, um die C++-Datei zu kompilieren und 
die so entstandenen Dateien, sowie die INI-Datei, an die richtigen Stellen in der PHP-Konfiguration zu kopieren. \cite{noauthor_php-cpp_nodate}



