// Create an unordered list. Allow users to add and remove list items dynamically using buttons.

let unorderedlist = document.querySelector('ul');

let btn = document.querySelector('button');

btn.addEventListener('click', function () {
    let newItem = document.createElement('li');
    newItem.textContent = '$';
    unorderedlist.appendChild(newItem);
})

