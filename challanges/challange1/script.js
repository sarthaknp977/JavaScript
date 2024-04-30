let circle1 = document.querySelector('.circle1');
let circle2 = document.querySelector('.circle2');

let max = 300;
let min = 20;


let count = 0;

let btn = document.querySelector('.btn');

let body = document.querySelector('body');


body.addEventListener('click', function (details) {
    let randomRadius = Math.random() * (max - min) + min;
    let top = details.clientY;
    let left = details.clientX;
    console.log(top, left);
    if (count % 2 == 0) {
        circle1.style.width = randomRadius + 'px';
        circle1.style.height = randomRadius + 'px';
        circle1.style.top = (top - randomRadius / 2) + 'px';
        circle1.style.left = (left - randomRadius / 2) + 'px';
        count++;
        console.log(count);
    }
    else {
        circle2.style.width = randomRadius + 'px';
        circle2.style.height = randomRadius + 'px';
        circle2.style.top = (top - randomRadius / 2) + 'px';
        circle2.style.left = (left - randomRadius / 2) + 'px';
        count++;
        console.log(count);
    }
})

