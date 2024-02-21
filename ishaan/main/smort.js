// document.addEventListener('DOMContentLoaded', function() {
//     var playButton = document.querySelector('.bottom .middle .up .play img');
//     playButton.addEventListener('click', function() {
//         if (this.src.endsWith('icons8-play-96.png')) {
//             this.src = './main/img/icon/icons8-pause-60.png';
//         } else {
//             this.src = './main/img/icon/icons8-play-96.png';
//         }
//     });
// });

console.log('smort.js loaded');



document.addEventListener('DOMContentLoaded', function() {
    var playButton = document.querySelector('.bottom .middle .up .play');
    var playButtonImg = playButton.querySelector('img');
    var rightInput = document.querySelector('.down input');

    playButton.addEventListener('click', function() {
        if (playButtonImg.src.endsWith('icons8-play-96.png')) {
            playButtonImg.src = './main/img/icon/icons8-pause-60.png';
        } else {
            playButtonImg.src = './main/img/icon/icons8-play-96.png';
        }

        var currentValue = parseInt(rightInput.value, 10);
        currentValue += 10; // Change this value to control how much the input should move forward
        if (currentValue > 100) currentValue = 100; // Ensure the value doesn't exceed the maximum
        rightInput.value = currentValue;
    });
});