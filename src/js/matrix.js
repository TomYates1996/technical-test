import $ from "jquery";
import { Fancybox } from "@fancyapps/ui";

$(function() {
    $('.accordion-js').bind('click keypress', function() {
        if ($(this).parent().hasClass('active') === false) {
            $('.accordion-group-js').removeClass('active');
            $('.accordion-js').attr('aria-expanded', false);

            $(this).parent().addClass('active');
            $(this).attr('aria-expanded', true);
        } else {
            $(this).parent().removeClass('active');
            $(this).attr('aria-expanded', false);
        }

        $('.accordion-content-js').css('max-height', '0px');

        let accordionContent = $(this).parent().find('.accordion-content-js');

        // If max-height is defined - accordion is open - close it, otherwise, get it's height and apply it
        if (accordionContent.css('max-height') !== '0px') {
            accordionContent.css('max-height', '0px');
        } else {
            accordionContent.css('max-height', accordionContent.prop('scrollHeight') + 'px');
        }
    });
});