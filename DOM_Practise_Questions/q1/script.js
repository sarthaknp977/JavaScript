// Create an HTML page with a button. When the button is clicked, change the text of a paragraph element.

var btn = document.querySelector('.forTextColor');

btn.addEventListener('click', function () {
    document.querySelector('body').style.color = 'red';
})

