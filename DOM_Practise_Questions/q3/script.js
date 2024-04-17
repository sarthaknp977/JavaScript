// Create a form with input fields and a submit button. Use JavaScript to validate the form and display an error message if the input is invalid.
let p = document.querySelector('p');
let inputs = document.querySelectorAll('input[type="text"]');
let form = document.querySelector('form');

form.addEventListener('submit', function (details) {
    details.preventDefault();
    for (let i = 0; i < inputs.length; i++) {

        if (inputs[i].value.trim() === '') {
            p.textContent = 'Error!!'
            break;
        }
        else {
            p.textContent = '';
        }
    }

})
