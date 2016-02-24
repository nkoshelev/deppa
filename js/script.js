$(document).ready(function() {
    $('.search_adaptive').on('click', function() {
        $(this).toggleClass('active')
        $('.search_adaptive + form').toggleClass('active');
    });
    $(document).on('click', function(event) {
        if ($(event.target).closest(".search_adaptive").length) return;
        if ($(event.target).closest(".search_adaptive + form").length) return;
        $('.search_adaptive + form').removeClass('active');
        $('.search_adaptive').removeClass('active');
        event.stopPropagation();
    });
    $('.main_tovar_slider').slick({
        slidesToShow: 2,
        slidesToScroll: 2,
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"></button>',
        asNavFor: '.tovar_text_slider',
        variableWidth: true
    });
});