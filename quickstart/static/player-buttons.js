// Function to handle space button press
function handleSpaceButtonPress(event) {
    // the player should not be affect by me edititng something
    if (document.activeElement.tagName === 'INPUT') {
        console.log('An input is focused. Returning from handleSpaceButtonPress.');
        return;
    }

    // Check if the pressed key is the space bar
    if (event.keyCode === 32 || event.key === ' ') {
        event.preventDefault(); // Prevent scrolling the page
        const isPlaying = player.getPlayerState() === YT.PlayerState.PLAYING;

        // If the player is playing, pause it. Otherwise, play it.
        if (isPlaying) {
            player.pauseVideo();
        } else {
            player.playVideo();
        }
    }
}

// Function to handle right and left arrow key press
function handleArrowKeyPress(event) {
    // the player should not be affect by me edititng something
    if (document.activeElement.tagName === 'INPUT') {
        console.log('An input is focused. Returning from handleArrowKeyPress.');
        return;
    }

    // Check if the pressed key is the right arrow
    if (event.keyCode === 39) {
        event.preventDefault(); // Prevent scrolling the page
        player.seekTo(player.getCurrentTime() + 5, true);
    }

    // Check if the pressed key is the left arrow
    if (event.keyCode === 37) {
        event.preventDefault(); // Prevent scrolling the page
        player.seekTo(player.getCurrentTime() - 5, true);

    }
}

document.addEventListener('keydown', handleSpaceButtonPress);
document.addEventListener('keydown', handleArrowKeyPress);