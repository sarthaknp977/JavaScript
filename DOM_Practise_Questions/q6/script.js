// Create a tabbed interface where clicking on tabs displays different content sections without page reload.

let tab1 = document.querySelector('.tab1');
let tab2 = document.querySelector('.tab2');

let content1 = document.querySelector('.content1');
let content2 = document.querySelector('.content2');

tab1.addEventListener('click', function () {
    hideOther();
    content1.style.display = 'block';
})

tab2.addEventListener('click', function () {
    hideOther();
    content2.style.display = 'block';
})


function hideOther() {
    content1.style.display = 'none';
    content2.style.display = 'none';
}

