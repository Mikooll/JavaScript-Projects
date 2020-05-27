<?php

function startSessionSystem() {
    global $sessionData;
  
    // On initialise la variable contenant toutes les données en "Session"
    $sessionData = [];
  
    // Si session existante, on la récupère
    if (!empty($_COOKIE['oSessionId'])) {
      // en option, on peut tester que le fichier existe
      // On charge le fichier correspondant (dans /sessions)
      $serializedData = file_get_contents(__DIR__.'/../sessions/'.$_COOKIE['oSessionId']);
      // On désérialise
      $sessionData = unserialize($serializedData);
    }
    // Sinon, on crée la session
    else {
      // On génère un id de session aléatoire et encodé
      $sessionId = md5(time().'oclock-MaPromo'.getmypid().mt_rand(0,4000));
      // On le met en cookie
      setcookie('oSessionId', $sessionId);
      // Et au cas où, on place l'info dans le tableau $_COOKIE
      $_COOKIE['oSessionId'] = $sessionId;
      saveSessionSystem();
    }
}

function setDataToSessionSystem($name, $data) {
    global $sessionData;
  
    // Le nom de la donnée est la clé/index du tableau $sessionData
    // $data sera la valeur correspondante, quelque soit son type
    $sessionData[$name] = $data;
  
    // On sauvegarde le tableau dans le fichier
    saveSessionSystem();
}

function saveSessionSystem() {
    global $sessionData;
  
    // On serialise les donnés pour pouvoir les stocker dans un fichier
    $fileContent = serialize($sessionData);
  
    // On définit le nom du fichier (dans /sessions) par rapport à la session courante (ID de session)
    $fileName = __DIR__.'/../sessions/'.$_COOKIE['oSessionId'];
    // Pour mon cas (Djyp) ici __DIR__ == '/var/www/html/Sirius/s03-e05-challenge-ologin-cookies-Djyp/inc'
  
    // On sauvegarde dans le fichier
    file_put_contents($fileName, $fileContent);
}

function getDataFromSessionSystem($name) {
    global $sessionData;

    // Si la variable existe
    if (array_key_exists($name, $sessionData)) {
        return $sessionData[$name];
    }

    // Si on a pas réussi à retourner la valeur, on retourne false
    return false;
}
  