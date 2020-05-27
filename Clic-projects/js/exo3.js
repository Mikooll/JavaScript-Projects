// On nomme un module comme on veut, souvent il vaut mieux que ça aie du sens
// On l'appellera souvent app mais ici, par exemple, on peut l'appeler exo3
var exo3 = {
    init: function () {
        // On souhaite ajouter ce qui a été écrit dans l'input en tant que nouvelle élément de la liste UL
        // Quand c'est fait, on supprime ce qui se trouve dans l'input
        // chose importante, il faudra empêcher l'envoi du formulaire !
        
        var form = document.querySelector('#shop-item-form');
        form.addEventListener('submit', exo3.addItem);
    },
    addItem: function (event) {
        // Grâce à event.preventDefault() on peut empếcher l'envoi du formulaire
        event.preventDefault();

        // On récupère la donnée dans l'input
        var input = document.querySelector('#shop-item-input');
        
        var inputValue = input.value.trim();
        var inputLength = inputValue.length;
        if (inputLength > 0) {
            // On ajoute notre nouvel élément à la liste
            var newItem = document.createElement('li');
            newItem.textContent = inputValue;
            document.querySelector('#shop-items').appendChild(newItem);

            // On peut vider l'input en changeant sa value ;
            input.value = '';
            input.blur();
        } else {
            // On affiche un message d'erreur
            console.error('Le champs input est vide');
        }
    }
};
document.addEventListener('DOMContentLoaded', exo3.init);