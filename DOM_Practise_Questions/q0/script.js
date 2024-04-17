var circle = document.querySelector('.redcircle');

document.querySelector('body').addEventListener('mousemove', function (details) {
    circle.style.left = (details.clientX - 15) + 'px';
    circle.style.top = (details.clientY - 15) + 'px';
})