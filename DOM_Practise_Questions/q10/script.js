// Show a progress bar which shows how much page has been scrolled.

let scrollBar = document.querySelector('.scroll-progress');

window.addEventListener('scroll', function () {
    let scrolledArea = document.documentElement.scrollTop;
    let totalScrollableHeight = document.documentElement.scrollHeight;
    let displayHeight = window.innerHeight;
    let scrolledPercentage = scrolledArea / (totalScrollableHeight - displayHeight) * 100 + '%';
    scrollBar.style.width = scrolledPercentage;
})
