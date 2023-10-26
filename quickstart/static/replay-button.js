document.addEventListener('DOMContentLoaded', function(){
    const replayBtn =  document.getElementById('replayBtn');
    const playBtn =  document.getElementById('playBtn');
    playBtn.addEventListener('click', function(){
        loadYouTubeIframe();
        replayBtn.style.display = 'block';
        playBtn.style.display = 'none'
    });
    replayBtn.addEventListener('click', function(){
        console.log(start);
        player.seekTo(start);
        player.playVideo();
    });
});