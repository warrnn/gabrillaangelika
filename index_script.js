$(document).ready(function () {
    let gab1 = $("#gab1");
    let textTransition = $(".textTransition");

    window.addEventListener('scroll', function() {
        let value = window.scrollY;

        gab1.css('top', value * 0.6 + 'px');
        textTransition.css('color', 'rgba(27,38,44,' + value * 0.005 + ')');
    })
})