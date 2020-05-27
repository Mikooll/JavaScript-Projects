var app = {
    init: function() {
      console.log('app.init');
      // Cette fonction permet d'initialiser les fonctionnalités
      // C'est ici qu'on associe les éléments du DOM à des écouteurs d'événements (eventListeners)
  
      // On associe ici les deux input à un écouteur d'événement
      // Première méthode, on les associe en les ciblant séparément
      // var inputUsername = document.querySelector('#field-username');
      // inputUsername.addEventListener('blur', app.isInputValid);
      // var inputPassword = document.querySelector('#field-password');
      // inputPassword.addEventListener('blur', app.isInputValid);
  
      // Deuxième méthode, on les associe grâce à une boucle
      app.inputFields = document.querySelectorAll('.field-input');
      for (var fieldIndex = 0; fieldIndex < app.inputFields.length; fieldIndex += 1) {
        var field = app.inputFields[fieldIndex];
        field.addEventListener('blur', app.isInputValid);
      }
  
      // Étape 3 : on associe d'abord le formulaire à un écouteur d'événement
      var form = document.querySelector('#login-form');
      form.addEventListener('submit', app.isFormValid);
    },
    checkInput: function (testingInput) {
      // Cette fontion sert à tester si la longueur du value d'un input est bonne
      // Elle retournera un boolén pour dire si le champs est valide ou non
      // testIngInput c'est un element du DOM, c'est l'un des input du formulaire
      var fieldText = testingInput.value;
      if (fieldText.length >= 3) {
          return true;
      } else {
          return false;
      }
    },
    isFormValid: function (evt) {
        // Le paramètre de ma fonction peut être nommé comme je le veux
        // Ici on ne peut pas utiliser evt.target pour récupérer un champs
        // L'événement est associé au formulaire donc evt.target fera toujours référence au formulaire
        // On doit donc récupérer les deux champs séparément (avec app.inputFields)
  
        // Avant la boucle, on vide la zone de messages d'erreurs de ses messages
        var errorArea = document.querySelector('#errors');
        errorArea.innerHTML = ''; // On aurait pu utiliser removeChild mais c'était pas le but du bonus et c'était un peu plus compliqué
  
        for (var fieldIndex = 0; fieldIndex < app.inputFields.length; fieldIndex += 1) {
          var field = app.inputFields[fieldIndex];
          if (!app.checkInput(field)) {
              // On empêche l'envoi du formulaire et on affiche un message d'erreur
              evt.preventDefault();
              var newPElement = document.createElement('p');
              newPElement.classList.add('error');
              newPElement.textContent = field.placeholder + ' doit contenir au moins 3 caractères';
              errorArea.appendChild(newPElement);
              // errorArea.innerHTML += '<p class="error">' + field.placeholder + ' doit contenir au moins 3 caractères</p>';
              // errorArea.innerHTML = errorArea.innerHTML + '<p class="error">' + field.placeholder + ' doit contenir au moins 3 caractères</p>';
          }
        }
    },
    isInputValid: function (event) {
      // event est toujorus envoyé par JS lorsqu'il exécute cette fonction depuis un écouteur d'événemnt
      // L'objet event contient plein d'information sur l'événement qui a déclenché cette fonction
      // Sa propriété .target permet d'obtenir l'élément de DOM concerné par l'événement
      // Donc event.target fait référence soir à l'input du username ou l'input du password selon le cas
      if (app.checkInput(event.target)) {
          // event.target.className = "field-input valid";
          event.target.classList.add('valid');
          event.target.classList.remove('invalid');
      } else {
          // event.target.className = "field-input invalid";
          event.target.classList.add('invalid');
          event.target.classList.remove('valid');
      }
    }
  };
  
  document.addEventListener('DOMContentLoaded', app.init);