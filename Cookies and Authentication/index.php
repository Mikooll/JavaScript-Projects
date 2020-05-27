<?php
// include 'inc/functions.php';
// startSessionSystem();
session_start();

// Le but c'est de déterminer si l'utilisateur est connecté ou non
// «Connecté», en fait ça veut dire que j'arrive à identifier l'utilisateur grâce à un cookie. Sans cette identification, je ne sais pas à qui j'ai affaire donc je ne peux pas personnaliser la page poru cet utilisateur
// Pour savoir si l'utilisateur est bien connecté, on vérifie que le cokkie nommé "user" existe bien dans $_COOKIE
// if (isset($_COOKIE['user'])) {
// if (getDataFromSessionSystem('username') != false) {
if (isset($_SESSION['username'])) {
        // Le cookie existe, on affichera la page personnalisé 
    // Tout ce qu'on connait de l'utilisateur pour le moment, c'est son username qui est dans le cookie
    // On va se servir de cette information pour récupérer toutes les données de l'utilisateur grâce à users.php
    include 'inc/users.php';

    // On récupére les informations de l'utilisateur connecté
    // $username = $_COOKIE['user'];
    // $username = getDataFromSessionSystem('username');
    $username = $_SESSION['username'];
    $connectedUser = $users[$username]['data'];
    // On rajoute dans $connectedUser une clé username pour avoir toutes les donnes de l'utilisateur dans une seule variable
    $connectedUser['username'] = $username;

    // var_dump($connectedUser);


} else {
    // Le cookie n'existe pas, on ne sait pas comment personnaliser la page, on n'a pas non plus de page par défaut qui invite à se connecter ou même à s'inscrire.
    // On va donc rediriger l'utilisateur vers la page de login
    header('Location: login.php');
}


include 'inc/templates/header.php';
include 'inc/templates/home-connected.php';
include 'inc/templates/footer.php';

// Le bonus de la déconnexion est relativement simple.
// Le plus compliqué c'est d'avoir un lien «Déconnexion» dans la navigation qui n'apparait que si on est connecté ! (ie : que si $connecteUser est défini)

// Pour faire une déconnexion. il faudrait créer un fichier qui ne fait que ça : logout.php
// Ce fichier créer un cookie (setcookie) avec le même nom mais sans valeur et avec une date d'expiration antérieure à maintenant. Puis il redirige vers login.php