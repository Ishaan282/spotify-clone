document.addEventListener('DOMContentLoaded', function() {
    var playButton = document.querySelector('.bottom .middle .up .play img');
    playButton.addEventListener('click', function() {
        if (this.src.endsWith('icons8-play-96.png')) {
            this.src = './main/img/icon/icons8-pause-60.png';
        } else {
            this.src = './main/img/icon/icons8-play-96.png';
        }
    });
});

console.log('smort.js loaded');



document.querySelector('.play').addEventListener('click', function() {
    var input = document.querySelector('.right input');
    var currentValue = parseInt(input.value, 10);
    currentValue += 10; // Change this value to control how much the input should move forward
    if (currentValue > 100) currentValue = 100; // Ensure the value doesn't exceed the maximum
    input.value = currentValue;
});