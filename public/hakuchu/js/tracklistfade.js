function loadTracklistFade() {
    var tracklist = document.getElementById('tracklist');
    var trackdl = tracklist.getElementsByTagName('dl');

    function fadein() {
        requestAnimFrame(fadein);
        for (var i = 0; i < trackdl.length; i++) {
            if (trackdl[i].getBoundingClientRect().top < window.innerHeight - 160) {
                trackdl[i].classList.add('show');
            }
        }
    }
    fadein()
}
