var app = {
    init: function() {

        app.generateButtons();

        app.loadRandomModel();
    },
    generateButtons: function () {
        var nav = document.querySelector('nav');
        // Le for…in permet de parcourir un tableau ou un objet
        // La variable qu'on crée dans la boucle (ici modelName) prend pour valeur l'index dans le tableau ou la propriété dans l'objet
        for (var modelName in map.models) {
            // console.log(modelName);

            // On crée un bouton en JS, c'est un élément de DOM complêtement vide et qui n'existe pas encore dans la page
            var buttonElement = document.createElement('button');

            // On ajout un dataset au bouton pour l'utiliser lors du clic
            buttonElement.dataset.model = modelName;

            // On met la première lettre en majuscule
            modelName = modelName[0].toUpperCase() + modelName.slice(1);

            // On précise le texte dans le bouton
            buttonElement.textContent = modelName;

            // On ajoute ce bouton comme enfant de la nav
            nav.appendChild(buttonElement);

            // On ajoute une écouteur d'événement sur chaque bouton pour un clic
            buttonElement.addEventListener('click', app.handleModel);
        }
    },
    handleModel: function(event) {
        // On obtient le nom du modèle cliqué
        // var modelNameClicked = event.target.textContent;
        var modelNameClicked = event.target.dataset.model;

        // On recupère le tableau du modèle à partir de son nom
        // On utilise ici aussi la forme d'écriture avec les crochets qui permet d'obtenir la propriété d'un objet
        // modelToLoad est le tableau de strings de notre dessin
        var modelToLoad = map.models[modelNameClicked];

        // On envoie ce tableau dans app.showModel pour afficher le dessin
        app.showModel(modelToLoad);

    },
    loadRandomModel: function () {
        // Object.keys() va nous permettre d'obtenir sous forme de tableau toutes les propriétés de map.models
        var modelList = Object.keys(map.models);

        // On a donc un tableau indexé et on va chercher un entier au hasard qui correspond à l'un de ces index
        var randomIndex = Math.floor(Math.random() * modelList.length);
        // console.log(randomIndex);
        // On donc utiliser cet index dans modeList
        var randomModelName = modelList[randomIndex];

        // On peut utiliser randnomModelName pour charger un model comme on l'a fait dans app.handleModel
        var modelToLoad = map.models[randomModelName];
        app.showModel(modelToLoad);
    },
    showModel: function (model) {
        // la variable model correspond au tableau de chaines de caractères qui forment notre dessin
        // var model = map.models.deadhead;

        // On sélectionne la div#invader dans le DOM pour y ajouter tous les pixels qui forment le dessins
        var renderBox = document.querySelector('#invader');
        // On précise la largeur de la zone de rendu du dessin avant d'ajouter toutes les div de pixels
        // Cette largeur c'est la taille d'un pixel (20px) multiplié par le nombre de pixel d'une ligne
        // On prend la première ligne, nîmporte quelle autre aurait suffit
        renderBox.style.width = (20 * model[0].length) + 'px';

        // Avant d'ajouter des pixels, on s'assure que la zone de rendu est vide !
        renderBox.innerHTML = '';

        // On utilise deux boucles imbriquées pour parcourir tout le dessin et obtenir chaque des symboles/caractères du dessin
        for(var row = 0; row < model.length; row += 1) {
            for(var col = 0; col < model[row].length; col += 1) {
                // console.log(model[row][col]);
                // On récupére un symboel à la fois de cette façon
                // symbol vaut soit 'x', 'o', '8' ou '-'
                var symbol = model[row][col];

                // On crée une nouvelle div à laquele on ajoute la classe CSS square et square--UNTRUC
                // UNTRUC sera déterminé en fonction du symbole trouvé dans la boucle
                var newPixelElement = document.createElement('div');
                newPixelElement.classList.add('square', 'square--' + map.types[symbol]);

                // On ajoute cette nouvelle div à notre zone de rendu
                renderBox.appendChild(newPixelElement);
            }
        }

    }
};

document.addEventListener('DOMContentLoaded', app.init);