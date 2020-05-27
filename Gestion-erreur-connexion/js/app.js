var app = {
    init: function() {
    // console.log('app.init'); 

        var form = document.querySelector('#login');
        // addEventListener les deux input (un chacun)
        form.addEventListener('submit', app.verifLength);
        form.addEventListener('focus', app.verifBlur);

},
    verifLength: function(event) {
    
    // event.target

    var inputName = document.querySelector('#field-username');
    
    
    var inputValueName = inputName.value.trim();
    var inputLengthName = inputValueName.length;

    // document.querySelector('#errors').innerHTML = '';
    // if(inputName == #field-username') app.afficherMessage('C'est mon message);
    // else if

    var inputPass = document.querySelector('#field-password');
        
    var inputValuePass = inputPass.value.trim();
    var inputLengthPass = inputValuePass.length;
    
    document.querySelector('#errors').innerHTML = '';

    if (inputLengthName < 3) {
        event.preventDefault();
        // document.querySelector('#errors').innerHTML = '';
        // cadreRouge(CSS)
        var errorForm = document.createElement('div');
        errorForm.className = 'redError';
        errorForm.innerHTML = 'Identifiant doit contenir au moins 3 caractères';

        document.querySelector('#errors').appendChild(errorForm);

        inputLengthName.value = '';

    } if (inputLengthPass < 3) {
        event.preventDefault();
        // cadreRouge(CSS)
        var errorForm = document.createElement('div');
        errorForm.className = 'redError';
        errorForm.innerHTML = 'Mot de passe doit contenir au moins 3 caractères';

        document.querySelector('#errors').appendChild(errorForm);

        inputLengthPass.value = '';
    }
    
    },

    verifBlur: function(event) {

        var inputBlur = document.querySelectorAll('.field-input');
    
    
        var inputValueBlur = inputBlur.value.trim();
        var inputLengthBlur = inputValueBlur.length;
    
        // document.querySelector('#errors').innerHTML = '';
        // if(inputName == #field-username') app.afficherMessage('C'est mon message);
        // else if
    
        
        if (inputLengthBlur < 3) {
            event.preventDefault();
            // document.querySelector('#errors').innerHTML = '';
            // cadreRouge(CSS)
            // var errorBlur = document.createElement('div');
            // errorBlur.className = 'redBorder';

            var blur = document.getElementsByClassName('.field-input');
            blur.classList.add('.redBorder');
        }
    }

};

document.addEventListener('DOMContentLoaded', app.init);
