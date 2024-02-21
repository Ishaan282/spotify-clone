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