(function ($) {
    'use strict';
    // ========= Common ===========
    // Variables
    var waitForFinalEvent = (function () {
        var timers = {};
        return function (callback, ms, uniqueId) {
            if (!uniqueId) {
                uniqueId = "Don't call this twice without a uniqueId";
            }
            if (timers[uniqueId]) {
                clearTimeout(timers[uniqueId]);
            }
            timers[uniqueId] = setTimeout(callback, ms);
        };
    })();

    var backdrop = $('<div class="modal-backdrop in"></div>');


    function mainSlider() {
        // var prev = $('.main-slider .slider-controls .btn-switch.prev');
        // var next = $('.main-slider .slider-controls .btn-switch.next');
        $('.main-slider').each(function () {
            $(this).slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                // prevArrow: prev,
                // nextArrow: next,
                autoplay: false,
                autoplaySpeed: 5000,
            });
        });
    }

    // Initializing all scripts
    $(document).ready(function () {
        mainSlider();
    });
})(jQuery);