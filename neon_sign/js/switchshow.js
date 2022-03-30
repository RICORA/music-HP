function loadSwitchShow() {
    var content = document.getElementsByClassName('switch');


    function switching() {
        requestAnimFrame(switching);
        for (var i = 0; i < content.length; i++) {

                content[i].classList.add('show');

        }
    }
    switching()
}