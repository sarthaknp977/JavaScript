// Create a page with two images and a button. When the button is clicked, swap the source attribute of the images.

let body = document.querySelector('body');
let img1 = document.createElement('img');
let img2 = document.createElement('img');

body.appendChild(img1);
body.appendChild(img2);

let src1 = 'https://www.hollywoodreporter.com/wp-content/uploads/2012/12/img_logo_blue.jpg?w=1024'
let src2 = 'http://markjkohler.com/wp-content/uploads/2015/01/Website-image.generic.jpg';

img1.src = src1;
img2.src = src2;

let tempSrc = '';

let btn = document.querySelector('.swapImg');
btn.addEventListener('click', function () {
    tempSrc = src1;
    src1 = src2;
    src2 = tempSrc;
    img1.src = src1;
    img2.src = src2;
})

