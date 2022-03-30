function loadLoading() {
    var element = document.getElementById('loading');

    //�ҋ@����(s)
    var waitTime = 2;
    var fadeTime = 1;

    element.style.transition = "opacity " + fadeTime + "s ease";

    function fadeout() {
        requestAnimFrame(fadeout);
        if (performance.now() > waitTime * 1000) {
            element.classList.add('hide');
        }
        if (performance.now() > ( waitTime + fadeTime) * 1000) {
            element.style.display = "none";
        }
    }
    fadeout()
}