var app = {
    init: function () {
        // console.log('app.init');

        app.playQuiz();
    },
    askQuestion: function (questionToAsk) {
        // On pose la question questionToAsk grâcé à un prompt()
        // On déclare une varaible pour récupérer la réponse
        var response = prompt(questionToAsk);

        // On retourne la réponse !
        return response;
        // On aurait aussi pu écrire : return prompt(questionToAsk);
    },
    checkResponse: function (questionId, userResponse) {
        // questionId correspond à l'index de la question dans le tableau questions
        // userResponse correspond à la réponse donnée par l'utilisateur grâcé à askQuestion
        // Ça veut dire qu'on utilisera cette fonction de cette façon : checkReponse(0, userResponse)

        // La question posée est celle à l'index questionId du tableau questions
        // La réponse attendue est donc au même index
        var expectedAnswer = responses[questionId];

        // On compare la réponse attendue et la réponse effectuée et, selon le résultat, on retourne true ou false
        // On applique la méthode toLowerCase() à la réponse pour la mettre entièrement en minuscules
        // On applique ensuite la méthode trim() pour enlever les espaces superflus au début et à la fin de la string
        if (expectedAnswer == userResponse.toLowerCase().trim()) {
            return true;
        } else {
            return false;
        }
        // On aurait aussi pu écrire : return (expectedAnswer == userResponse);

        // Toute cette fonction aurait pur 'etre réduite à une seule ligne :
        // return (responses[questionId] == userResponse);
    },
    playQuiz: function() {
        // On reprend tout ce qu'on avait mis dans app.init et on boucle sur les questions pour toutes les poser

        // Au début de la partie, on initialise les deux UL pour les vider
        document.querySelector('#right ul').innerHTML = '';
        document.querySelector('#wrong ul').innerHTML = '';
        var counterRight = 0;
        var counterWrong = 0;

        // Pour une boucle for...in on déclare une variable qui correspond à l'index dans le tableau
        // On peut le lire «pour cette boucle, on déclare une variable indexQuestion qui prendra pour valeur chacun des index du talbeau questions»
        // On doit utiliser cet index pour récupérer la question à traiter dans une itération de la boucle
        // Ici indexQuestion aura pour valeur 0 puis 1 puis 2…
        for (var indexQuestion in questions) {
            var userResponse = app.askQuestion(questions[indexQuestion]);  
            
            // console.log(userResponse);

            
            var newLi = document.createElement('li');
            newLi.textContent = questions[indexQuestion];
            if (app.checkResponse(indexQuestion, userResponse)) {
                // console.log('exact');
                // document.querySelector('#right ul').innerHTML += '<li>' + questions[indexQuestion] + '</li>';
                document.querySelector('#right ul').appendChild(newLi);
                counterRight += 1;
            } else {
                // console.log('mauvaise réponse');
                // document.querySelector('#wrong ul').innerHTML += '<li>' + questions[indexQuestion] + '</li>';
                document.querySelector('#wrong ul').appendChild(newLi);
                counterWrong += 1;
            }
        }

        /*
        // Pour parcourir le tableau on aurait aussi pu faire un une boucle for plus classqique
        for (var indexQuestion = 0; indexQuestion < questions.length; indexQuestion += 1) {
            // IcI le même code que pour la boucle for…in
        }

        // Même boucle mais avec un do…while
        var indexQuestion = 0
        do {
            // Ici le même code que pour la boucle for…in
            indexQuestion += 1;
        } while (indexQuestion < questions.length)

        // Encore mais ici avec la méthode .forEach()
        questions.forEach(function(question, indexQuestion) {
            // Ici le même code que le for…inva fonctionner tout pareil
        });
        */

        // Après la boucle, on affiche le nombre de bonnes et de mauvaises réponse dans le h2
        document.querySelector('#right > h2').textContent += ': ' + counterRight;
        document.querySelector('#wrong > h2').textContent += ': ' + counterWrong;

    }
};

// Cette ligne permet d'exécuter app.init() dès que la page est chargée
// On ne peut pas la comprendre tout de suite mais c'est le sujet du jour
document.addEventListener('DOMContentLoaded', app.init);





// Il n'y a aucune différence à déclarer nos fonctions de l'une ou l'autre de ces façons 
// La première est juste un peu plus plus logique, notamment parce qu'on est obligé de l'utiliser si on déclare notre fonction dans un objet :{ méthode: function() {…} }

// var checkResponse = function() {
    // code
// };

// function checkReponse() {
    // code
// }