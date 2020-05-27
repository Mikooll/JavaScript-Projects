# oLogin : Connexion

On ajoute la connexion des utilisateurs à notre oLogin :tada:

![Résultat](resultat.gif)

## Objectifs

1. Repartir de l'atelier oLogin : Front
2. Restructurer le projet pour utiliser le fichier `users.php`
3. si le couple identifiant / mot de passe est correct
    - Stocker l'identifiant de l'utilisateur en cookies
    - Prévoir une page dédiée pour l'utilisateur affichant `Bienvenue, XXX`

## BONUS

### ... fun

Ajouter un bouton pour révéler le mot de passe "👁".

![reveal](toggle-password.gif)

Le clic sur le bouton "👁" doit passer le champ mot de passe en texte ou texte en mot de passe.

### ... qui pique

Si le couple identifiant / mot de passe est incorrect, réafficher la page de connexion avec un message d'erreur en HTML

### ... de la mort

- Dans la page de l'utiliateur authentifié, prévoir un bouton de déconnexion pour quitter son espace.
- Réafficher la page de connexion avec un message dans le HTML indiquant la déconnexion
 