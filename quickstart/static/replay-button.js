document.addEventListener('DOMContentLoaded', function(){
    // const playerDiv = document.getElementById('player');
    const replayBtn =  document.getElementById('replayBtn');
    replayBtn.addEventListener('click', function(){
        console.log(start);
        player.seekTo(start);
        player.playVideo();
    });
});