// Show a progress bar which shows how much page has been scrolled.

let scrollBar = document.querySelector('.scroll-progress');

window.addEventListener('scroll', function () {
    let scrollTop = document.documentElement.scrollTop;
    let scrollHeight = document.documentElement.scrollHeight;
    let scrolledPercentage = scrollTop / (scrollHeight - window.innerHeight) * 100 + '%';
    scrollBar.style.width = scrolledPercentage;

})
