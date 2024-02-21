document.addEventListener('DOMContentLoaded', function() {
    var imgElement = document.querySelector('.bottom .middle .up .play img');
    var img1 = './main/img/icon/icons8-play-96.png';
    var img2 = './main/img/icon/icons8-pause-60.png';

    imgElement.addEventListener('click', function() {
        if (this.src.endsWith(img1)) {
            this.src = img2;
        } else {
            this.src = img1;
        }
    });
});

console.log('smort.js loaded');