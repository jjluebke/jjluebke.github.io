var v = document.querySelectorAll('.demo')
  , playing = null
  , video = null;

for( var i = 0; i < v.length; i++) {
    video = v[i];
    video.addEventListener('play', function(event) {
        var player = event.target;
        player.play();
        playing = player;
    }, false);

    video.onclick = function(event) {
        var player = event.target;
        if (player.paused) {
            player.play();
            if( playing) {
                playing.pause();
            }
            playing = player;
        } else {
            player.pause();
            playing = null;
        }

        return false;
    };
}
