# Quiz

On va monter un petit jeu de quiz en Javascript :heart_eyes:

## Code fourni

- `index.html` le fichier HTML contenant le Quiz qui inclut :
    - `css/style.css` le fichier des styles CSS à agrémenter au besoin
    - `js/questions.js` le fichier contenant toutes les questions (et leur réponse) de notre Quiz
    - `js/app.js` le fichier principal de notre code Javascript

## Challenge

### Etape 1 - Première question

- créer une fonction s'occupant de poser une question fournie en paramètre/argument, par exemple : `askQuestion(questionToAsk)`
- à la fin du fichier JS, appeler cette fonction avec la première question du fichier `js/questions.js`
    - la variable `questions` créée dans ce fichier est disponible dans tout le code JavaScript
    - on va donc utiliser cette variable pour accéder à la première question du tableau

### Etape 2 - Première réponse

- modifier la fonction `askQuestion` pour récupérer la réponse et la retourner
- au moment de l'appel à cette fonction, récupérer la réponse retournée
- puis afficher la valeur dans la console

### Etape 3 - Vérifier la réponse

- créer une fonction s'occupant de vérifier la réponse à une question, par exemple : `checkResponse(questionId, userResponse)`
- récupérer la réponse attendue pour la question posée
    - la variable `responses` créée est disponible dans tout le code JavaScript
    - les index/clés de ce tableau sont les mêmes que pour le tableau `questions`
    - autrement dit, la réponse à question ayant l'index 2, se trouve dans le tableau `responses`, à l'index 2
- comparer la réponse attendue avec la réponse effectuée
- retourner vrai si la réponse est correcte, faux sinon
- appeler cette fonction `checkResponse` après avoir récupéré la réponse de l'internaute pour la première question
    - afficher dans la console "exact" ou "mauvaise réponse"

<details><summary>Rappel sur les tableaux (PHP, JS, etc)</summary>

Le premier index n'est pas `1`, mais  `0` :wink:

</details>

### Etape 4 - Modifier le DOM

- si la réponse est correcte, ajouter la question dans la liste verte, sinon, dans la liste rouge

### Etape 5 - On boucle ! :muscle:

- on ne va plus se contenter de la première question !
- à la fin du fichier JS, on appelle une fonction `playQuiz()`
  - cette fonction n'existe pas encore => il faut la coder :wink:
- cette fonction boucle sur le tableau de question
- pour chaque question :
    - on demande une réponse à l'internaute
    - on récupère sa réponse
    - on vérifie si la réponse est bonne
    - on ajoute la question dans la liste verte ou rouge si ok ou ko

<details><summary>Rappel: parcourir un tableau en JS</summary>

```js
// Un tableau contenant 3 éléments
var monTableau = [
    'Riri',
    'Fifi',
    'Loulou',
];
// Boucle "for in" permettant de parcourir ce tableau 1 à 1
var currentValue; // Je déclare la variable que je vais affecter dans la boucle
for (var currentIndex in monTableau) {
    // Je récupère la valeur pour l'élément "courant"
    currentValue = monTableau[currentIndex];

    // J'affiche la valeur dans la console
    console.log('index='+ currentIndex +' & valeur='+currentValue);
}
```

</details>

## Bonus :rainbow:

- on compte les bonnes réponses et les mauvaises réponses
- on affiche le nombre de bonnes et mauvaises réponses à la fin des balises `<h2>`
- on ajoute d'autres questions :nerd_face:

## Bonus :boom:

- on utilise désormais `createElement` pour créer un élément : https://developer.mozilla.org/fr/docs/Web/API/Document/createElement
- puis on ajoute cet élément dans le DOM avec `appendChild` : https://developer.mozilla.org/fr/docs/Web/API/Node/appendChild
