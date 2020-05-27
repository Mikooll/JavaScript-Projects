// On a codé directement avec un module app
// var app = {
//     init: function () {
//         var buttonYes = document.querySelector('#yes');
//         var buttonNo = document.querySelector('#no');

//         buttonYes.addEventListener('click', app.addYes);
//         buttonNo.addEventListener('click', app.addNo);

//     },
//     addYes: function () {
//         var count = document.querySelector('#counter-yes').textContent;
//         count++;
//         document.querySelector('#counter-yes').textContent = count;
//     },
//     addNo: function () {
//         var count = document.querySelector('#counter-no').textContent;
//         count++;
//         document.querySelector('#counter-no').textContent = count;
//     }
// };
// document.addEventListener('DOMContentLoaded', app.init);


// Voici quasimenet le même module mais une seule fonction qui compte
var app = {
    init: function () {
        var buttonYes = document.querySelector('#yes');
        var buttonNo = document.querySelector('#no');

        buttonYes.addEventListener('click', app.addCounter);
        buttonNo.addEventListener('click', app.addCounter);

    },
    addCounter: function (event) {
        // event est toujours envoyé à une fonction exécutée grâce à un eventListener
        // L'objet qui décrit l'évenement a pleeeiiiinn de propriété
        // event.target nous donnera toujours l'élément du DOM concerné par l'évenement
        // Si je clique sur Yes, event.target correspond au bouton Yes du DOM
        // Si je clique sur No, event.target correspond au bouton No du DOM
        // console.log(event.target);

        var count = event.target.querySelector('span').textContent;
        count++;
        event.target.querySelector('span').textContent = count;

        // Oui, il semble y avoir un bug quand on clique sur le chiffre dans le bouton, c'est parce qu'à ce moment event.target pointe vers le span et non vers le button. Écrit comme on vient de le faire, il n'y a pas d'enfant span à notre span… donc on ne peut obtenir la propriété textContent d'une valeur null
    }
};
document.addEventListener('DOMContentLoaded', app.init);