Ein JSON Web Token (JWT) wird in Webapplikationen eingesetzt,
um die fortlaufende Authentifizierung zu gewährleisten.
Er besteht aus drei Teilen: Header, Payload und Signature.

* Der **Header** enthält den Verschlüsselungsalgorithmus und die Art des Tokens

* Die **Payload** enthält beliebig viele Key-Value-Paare, auch Claim genannt, im JSON-Format.
Hier sind drei Arten von Claims zu unterscheiden.
Die registrieten Claims sind durch den RCF 7519 Standard, welcher JWTs beschreibt, definiert.
Öffentliche Claims müssen bei der IANA (Internet Assigned Numbers Authority) gemeldet werden.
Der dritte Typ sind private Claims, diese können beliebig verbegen und genutzt werden.

* Die **Signature** enthält das Ergebnis, der Verschlüsselung des Headers und der
Payload mit einem geheimen Schlüssel. Für die Verschlüsselung wurden beide Teile base64-Encodiert.

Durch die Signatur des JWTs durch den Server wird sichergestellt, dass jede Änderung der Claims
im Payload erkannt und der JWT dadurch als ungültig angesehen wird.\cite{hoogvliet_json_2016}
In diesem Projekt wurden JWTs für die Authentifizierung der Clients verwendet.
Nach der Anmeldung wird dem Client ein JWT geschickt, welchen er bei jeder weitern Kommunikation mit schicken muss,
da sonst die Verbindung abgebrochen wird.
Dadurch wird sichergestellt, dass nur vom Server autorisierte Clients Zugriff auf das Backend haben.
Um JWTs zu integrieren wurde die Library Firebase-JWT verwendet.

## Firebase-JWT
Durch die Integration der Library wird die *JWT*-Klasse verfügbar.
Um einen JWT zu erstellen müssen zuerst die Claims in einem Array definiert.
In diesem Projekt wurden fünf registrierte Claims und ein Privater verwendet.
Das Array wird anschließend gemeinsam mit dem Schlüssel und 
dem zuverwendenden Algorithmus an die Methode *encode* übergeben, welche den JWT zurück liefert. 
Nachfolgend ist eine Integration der *JWT*-Klasse, wie sie in diesem Projekt getätigt wurde.\cite{noauthor_php-jwt:_2018}

```php
$data = [
    // Issued at: time when the token was generated
    'iat'  => time(),         
    
    // Json Token Id: an unique identifier for the token
    'jti'  => base64_encode(random_bytes(32)),          
    
    // Issuer
    'iss'  => "Mediatrix",   
    
    // Not before    
    'nbf'  => time(),        
    
     // Expire
    'exp'  => time()+$this->expireSec,          
    
    // Data related to the signer used
    'data' => [                 
    
        // User name 
        'userName' => $username 
    ]
];

//genreate JWT
$jwt = JWT::encode($data, $this->key,'HS256');
```

Um zu verifizieren, ob ein JWT gültig ist und um die Daten der Payload zu bekommen,
wird die Methode *decode* verwendet.
Diese Methode wird der JWT, der Schlüssel und der zuverwendenden Algorithmus übergeben.
Zurückgeliefert wird die Payload als Objekt.
Nachstehen ist ein Beispiel für das Decodieren eines JWTs, wie es auch in diesem Projekt integriert ist.\cite{noauthor_php-jwt:_2018}

```php
try {
    //decode JWT
    $jwt = JWT::decode($jwt, $this->key, array("HS256"));

    //Print user
    echo "User: {$jwt->data->userName}";
    
} catch (ExpiredException $ex) {
    
    //Session Expired
    echo 'JWT expired: ' . $ex->getMessage() . "\n";
}

``` 

