console.log('smort.js loaded');


document.addEventListener('DOMContentLoaded', function() {

//! Search bar functionality
let searchOption = document.querySelector('.upbar .option#search');
searchOption.addEventListener('click', function(event) {
    let searchIframe = document.getElementById('searchIframe');
    let playlistIframe = document.getElementById('playlistIframe');
    searchIframe.style.display = 'block';
    playlistIframe.style.display = 'none';
});

//! playlist button functionality
//selecting the playlist
var playlist1 = document.querySelector('#playlists-1');
var playlist2 = document.querySelector('#playlist-1');

// Add a click event listener to playlist
playlist1.addEventListener('click', function(event) {
    let searchIframe = document.getElementById('searchIframe');
    let playlistIframe = document.getElementById('playlistIframe');
    searchIframe.style.display = 'none';
    playlistIframe.style.display = 'block';
});
playlist2.addEventListener('click', function(event) {
    let searchIframe = document.getElementById('searchIframe');
    let playlistIframe = document.getElementById('playlistIframe');
    searchIframe.style.display = 'none';
    playlistIframe.style.display = 'block';
});


//! home reset button functionality
    // Home button functionality
    // Select the .upbar .option element with the id "home"
    let homeOption = document.querySelector('.upbar .option#home');

    // Add a click event listener to the home option
    homeOption.addEventListener('click', function(event) {

        // Select the iframes
        let searchIframe = document.getElementById('searchIframe');
        let playlistIframe = document.getElementById('playlistIframe');

        // Hide the iframes
        searchIframe.style.display = 'none';
        playlistIframe.style.display = 'none';
    });
});