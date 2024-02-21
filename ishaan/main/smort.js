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
    var timeDisplay = document.querySelector('.down .time1');
    var intervalId = null;

    playButton.addEventListener('click', function() {
        if (playButtonImg.src.endsWith('icons8-play-96.png')) {
            playButtonImg.src = './main/img/icon/icons8-pause-60.png';
            intervalId = setInterval(function() {
                var currentValue = parseFloat(rightInput.value);
                currentValue += 0.5556; // Change this value to control how much the input should move forward
                if (currentValue > 100) {
                    currentValue = 0; // Reset to the beginning when it reaches the end
                    clearInterval(intervalId); // Stop when it reaches the end
                    playButtonImg.src = './main/img/icon/icons8-play-96.png'; // Change the pause button back to the play button
                }
                rightInput.value = currentValue.toFixed(4);

                // Update the time display
                var minutes = Math.floor(currentValue / (100/3));
                var seconds = Math.floor((currentValue / (100/3) - minutes) * 60);
                timeDisplay.textContent = minutes.toString().padStart(2, '0') + ':' + seconds.toString().padStart(2, '0');
            }, 1000); // Update the slider every second
        } else {
            playButtonImg.src = './main/img/icon/icons8-play-96.png';
            clearInterval(intervalId); // Stop the movement when the button is clicked again
        }
    });
});