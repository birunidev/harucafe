$(document).ready(function () {

    if ($(window).width() < 992) {
        $('.nav-list').css('display', 'none');
    } else {
        $('.nav-list').css('display', 'block');

    }


    $('.toogle').click(function () {
        $(".nav-list").slideToggle("slow");
    });
});