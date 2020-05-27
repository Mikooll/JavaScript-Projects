var exo4 = {

    init: function () {

        var form = document.querySelector('#colors-form');
        form.addEventListener('submit', exo4.addItem);
    },

    addItem: function (event) {

        event.preventDefault();

        var input = document.querySelector('#colors-input');
        var inputValue = input.value.trim();
        var inputLength = inputValue.length;

        if (inputValue.charAt(0) == '#' && (inputLength == 4 || inputLength == 7)) {

            var newItem = document.createElement('li');

            newItem.textContent = inputValue;

            document.querySelector('#colors-list').appendChild(newItem);

            input.value = '';

            input.blur();

        } else {
            var error = document.createElement('li');

            error.textContent = 'ceci n\'est pas une couleur';

            document.querySelector('#colors-error').appendChild(error);

            input.value = '';
        }
    }

};

document.addEventListener('DOMContentLoaded', exo4.init);