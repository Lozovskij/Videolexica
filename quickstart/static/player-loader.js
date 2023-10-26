// const data = {
//     start: 494
// };

var tag = document.createElement('script');


tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '390',
        width: '640',
        // videoId: '75d_29QWELk',
        videoId: videoId,
        playerVars: {
            'playsinline': 1,
            'start': start
        },
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}

function onPlayerReady(event) {
    // event.target.playVideo();
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