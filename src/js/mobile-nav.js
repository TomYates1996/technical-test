import $ from "jquery";

$(function() {
    $('#open-mobile-nav-js').bind('click keypress', function() {
        $('#mobile-header').addClass('active');
    });

    $('#close-mobile-nav-js').bind('click keypress', function() {
        $('#mobile-header').removeClass('active');
    });

    $('.reveal-child-pages').bind('click keypress', function() {
        $(this).parent().parent().toggleClass('active');
    });
});