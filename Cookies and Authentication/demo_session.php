<?php

// var_dump($_SESSION);

session_start();

var_dump($_SESSION);

$_SESSION['user'] = 'Kevin';
$_SESSION['ville'] = 'Nantes';

var_dump($_SESSION);


// Pour la déconnexion, il faut «casser» le lien entre le cookie et la session
// Un bon moyen de le faire c'est de supprimer les informations dans la sessions

// session_unset();
// session_unset() permet de vider $_SESSION
// Cette fonction conserve le cookie et le fichier associé
// C'est, je pense, la façon la plus propre de faire une déconnexion

// Il est uassi possible d'utiliser session_destroy()
// Cette fonction va détruire le fichier, va conserver le cookie et va conserver $_SESSION jusqu'à la fin de l'exécution du code
// Cette fonction est moins propre que session_unset()