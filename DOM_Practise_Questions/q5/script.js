// Build a countdown timer that starts when a button is clicked and updates the display in real-time.
let countDownArea = document.querySelector('.countdown');

let time = document.querySelector('#time');


let timer;
let startTimer = document.querySelector('.startTimer');

startTimer.addEventListener('click', function () {
    let countDownTime = time.valueAsNumber;

    timer = setInterval(function () {
        countDownTime--;
        countDownArea.textContent = countDownTime + 's';

        if (countDownTime <= 0) {
            alert("Time's up");
            clearInterval(timer);
        }

    }, 1000)


})

let stopTimer = document.querySelector('.stopTimer');

stopTimer.addEventListener('click', function () {
    clearInterval(timer);
})

