// Display a progress bar that updates in real-time, showing the progress of a task, download, or form submission.


let downloadBtn = document.querySelector('button');
let progressBar = document.querySelector('.progress');

downloadBtn.addEventListener('click', function () {
    progressBar.style.width = '120px';

})