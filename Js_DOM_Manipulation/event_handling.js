var clicked = document.querySelector('#four');
var hovered = document.querySelector('#five');

clicked.addEventListener('click', function () {
    alert();
});

hovered.addEventListener('mouseover', function () {
    hovered.style.color = 'red';
})
hovered.addEventListener('mouseleave', function () {
    hovered.style.color = 'black';
})

var jk = document.createElement('div');
jk.classList.add('circle');
var circle = document.querySelector('.circle');

document.querySelector('body').appendChild(jk);

document.querySelector('body').addEventListener('mousemove', function (details) {
    // console.log(details);
    jk.style.left = (details.clientX - 10) + 'px';
    jk.style.top = (details.clientY - 10) + 'px';
    // document.querySelector('body').style.backgroundColor = 'black';
});





