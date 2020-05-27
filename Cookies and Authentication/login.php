<?php
// include 'inc/functions.php';
// startSessionSystem();

// Pour utiliser une session, il est impératif d'exécuter la fonction session_start() avant de s'en servir
// La bonne pratique, c'est d'appeler cette fonction au début de tous nos fichiers
session_start();

// Ici, on souhaite traiter les données du formulaire pour créer un cookie si le login et le mot de passe sont bons

if (isset($_POST['username']) && isset($_POST['password'])) {
    // var_dump($_POST);
    $username = $_POST['username'];
    $password = $_POST['password'];

    // Comme on reçoit bien des données en POST, on inclut le tableau des users
    include 'inc/users.php';
    // On a désormais accès à la variable $users

    // Il y avait deux moyens de tester si le username reçu par le formulaire existait dans $users :
    // isset($users[$username])
    // array_key_exists($username, $users)
    if (isset($users[$username])) {
        // Le username est le bon, on peut tester le mot de passe !
        if (password_verify($password, $users[$username]['pass'])) {
        //if ($users[$username]['pass'] == $password) {
            // Si tout est bon, on crée un cookie !
            //setcookie('user', $username, strtotime('now + 1 month'));
            // setDataToSessionSystem('username', $username);
            $_SESSION['username'] = $username;

            // Pour éviter de remontrer le formulaire de connexion à l'utilisateur alors qu'il avait entré le bon username et le bon mot de passe associé, on le redirige vers la page index.php
            // La fonction header envoie une information dans l'en-tête de réponse HTTP du serveur. Le navigateur reçoit donc cette information. Ici "Location: index.php" indique au navigateur de se rediriger vesr index.php
            header('Location: index.php');
        }
    }
}

// On crée une variable qui indique à PHP d'ajouter notre script JS
$addScript = true;

include 'inc/templates/header.php';
include 'inc/templates/login-form.php';
include 'inc/templates/footer.php';

