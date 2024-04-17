// Build a character counter for a text area or input field, which updates in real-time as user types and enforces a character limit.

let writtenchars = document.querySelector('.noOfchars');
let count = 0;

let textArea = document.querySelector('textarea');

textArea.addEventListener('input', function () {
    writtenchars.textContent = textArea.value.trim().length;
})

