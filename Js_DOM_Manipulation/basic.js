var btn1 = document.querySelector('#one');
var btn2 = document.querySelector('#two');
var btn3 = document.querySelector('#three');


function changeBgColor() {
    document.body.style.backgroundColor = 'red';
}

function changeContentForBtn2() {
    btn2.classList.add("button_hehe");
    btn2.textContent = "Done!!!";
    btn2.classList.remove("button_hehe");
    document.querySelector('body').removeChild(heading1);
}

var heading1 = document.createElement('h1');
heading1.textContent = "heh";

function changeContentForBtn3() {
    document.querySelector('body').appendChild(heading1);
    btn3.style.color = 'red';
}


