var tag = document.createElement('script');


tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;


var thumbnail = document.getElementById('thumbnail');
thumbnail.style.backgroundImage= `url(${"https://img.youtube.com/vi/" + videoId + "/hqdefault.jpg"})`;

function loadYouTubeIframe() {
    thumbnail.style.display = "none"; // Hide the thumbnail
    document.getElementById('player').style.display = "block"; // Show the player

    // Replace the thumbnail with the YouTube iframe
    player = new YT.Player('player', {
        // height: '390',
        // width: '640',
        videoId: videoId,
        playerVars: {
            'playsinline': 1,
            'start': start // for some reason that start often doesn't work
        },
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}

// function onYouTubeIframeAPIReady() {
//     player = new YT.Player('player', {
//         height: '390',
//         width: '640',
//         // videoId: '75d_29QWELk',
//         videoId: videoId,
//         playerVars: {
//             'playsinline': 1,
//             'start': start
//         },
//         events: {
//             'onReady': onPlayerReady,
//             'onStateChange': onPlayerStateChange
//         }
//     });
// }

function onPlayerReady(event) {
    player.seekTo(start);
    event.target.playVideo();
}

function onPlayerStateChange(event) {
    // if (event.data !== YT.PlayerState.PLAYING) {
    //     return window.clearInterval(handle)
    // }
    // handle = window.setInterval(() => {
    //     const time = player.getCurrentTime();
    //     showCaption(time);
    // }, 100);
}
function stopVideo() {
    // player.stopVideo();
}