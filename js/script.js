$(document).ready(function() {
    // Mask Input
    if($("#pers_phone").length){
        $("#pers_phone").mask("+7 (999) 999 - 99 - 99");
    }
    if($("#buy_phone").length){
        $("#buy_phone").mask("+7 (999) 999 - 99 - 99");
    }
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
        variableWidth: true,
        touchMove: false,
        draggable: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });
    $('.about_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="slick-prev-about"></button>',
        nextArrow: '<button type="button" class="slick-next-about"></button>'
    });
    $('.mid_header.down').click(function() {
        $(this).next().slideToggle();
    });
    // Jobs accordion
    $('.accordion').find('.accordion-toggle').click(function(e){
        e.preventDefault();
        $(this).addClass('open');
        $(this).next().slideToggle();
        $(".accordion-content").not($(this).next()).slideUp();
        $(".accordion-content").not($(this).next()).parents('.accordion-block').find('.accordion-toggle').removeClass('open');
    });
    $(".small-pic").click(function() {
        $('.thumb_mini').removeClass('active');
        $(this).parents('.thumb_mini').addClass('active');
    });
    $('.order_button').click(function(e){
        e.preventDefault();
    });
    // Review open form
    $('.give_recall').click(function(e){
        e.preventDefault();
        $('.write_review').slideToggle();
    });
    $('.favorite_more').click(function() {
        $(this).parent().find('.tovar_list').find('.hidden').slideToggle();
        $(this).toggleClass('active');
        if ($(this).text() != 'Скрыть') $(this).text('Скрыть');
        else $(this).text('Показать все товары');
    });
    $('.add_article_link').click(function(e) {
        e.preventDefault();
        $('.article_form').fadeToggle();
    });
    // Color link
    $('.tovar_block .sel_color .color-link').hover(
        function(event) {
            event.preventDefault();
            $(this).parent().parent().find('a > img').attr('src', $(this).attr('rel'));
        },
        function() {}
    );
    // Form on main page open
    $('.write_us .expand_button').click(function(e){
        e.preventDefault();
        if(!$(this).hasClass('active')){
            $(this).addClass('active');
            $(this).prev().slideDown();
        }else{
            $(this).removeClass('active');
            $(this).prev().slideUp();
        }
        
    });
    // Form on cart page
    $('.say_me').click(function(e){
        e.preventDefault();
        $(".say_me_form").toggle();
    });
    // Dropdown
    $('body').on('click', '.dropdown span', function (e) {
        e.preventDefault();
        $(this).parents('.dropdown').find('.close_list').toggle();
        $(this).parents('.dropdown').find('span').toggleClass('active');
    });
    $('body').on('click', '.dropdown .close_list li', function (e) {
        e.preventDefault();
        var g_ul_li = $(this).html();
        var g_li = $(this).parents('.dropdown').find('span').html();
        g_li = g_li.split('<ul');
        $(this).parents('.dropdown').find('span').html(g_ul_li + ' <ul' + g_li[1]);
        $(this).parents('.dropdown').find('span').removeClass('active');
        $(this).parents('.close_list').hide();
    });
    $(document).bind('click', function (event) {
        if ($(event.target).closest(".dropdown").length) return;
        $('.dropdown span').removeClass('active');
        $('.dropdown .close_list').hide();
    });
    // Change size in basket
    $('.minus').click(function (e) {
        e.preventDefault();
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
    });
    $('.plus').click(function (e) {
        e.preventDefault();
        var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });
    $('.input_amount').change(function(){
        if($(this).val() <= 0) {
            $(this).val(1);
        }
    });
    $('.show-map').click(function(e){
        e.preventDefault();
        var number = $(this).parents('.info').attr("id").substr(7);
        if(!$(this).hasClass('active')){
            $('.maps>div').hide();
            $('.maps>div.map-'+number).show();
            $('.maps>div.map-'+number).find(".tabs-menu").find('li:first-child').find('a').click();
            $('.show-map').not($(this)).removeClass('active');
            $('.show-map').not($(this)).text('Показать на карте');
            $(this).addClass('active');
            $(this).text('Скрыть');
        } else {
            $('.maps>div').hide();
            $(this).removeClass('active');
            $(this).text('Показать на карте');
        }
        if($(window).width()<1190) {
            if($(this).hasClass('active')){
                $('html, body').animate({
                    scrollTop: $('#maps_marker').offset().top
                }, 1000);
            }
        }
    });
    $(".tabs-menu a").click(function(event) {
       event.preventDefault();
       $(this).parent().addClass("current");
       $(this).parent().siblings().removeClass("current");
       var tab = $(this).attr("href");
       $(this).parents('.tabs-menu').next().find(".tab-content").not(tab).css("display", "none");
       $(tab).fadeIn();
    });
    $('.eye').click(function(){
        if($(this).prev().is( "[type=password]" )) {
            $(this).prev().prop("type", "text");
            $(this).addClass('active');
        }else{
            $(this).prev().prop("type", "password");
            $(this).removeClass('active');
        }
    });
    // Personal data change on order page
    $('.edit_fields').click(function(e){
        e.preventDefault();
        if (!$(this).hasClass('active')) {
            $(this).parents('.personal_data').find('.value').attr('contenteditable','true');
            $(this).text('Сохранить');
            $(this).addClass('active');
        }else{
            $(this).parents('.personal_data').find('.value').attr('contenteditable','false');
            $(this).text('Редактировать');
            $(this).removeClass('active');
        }
    });
    // $('.reg_form .inputs_submit .input_submit').click(function(){
    //     $('.step1').addClass('animated fadeOutLeft');
    //     setTimeout(function(){
    //         $('.step1').addClass('display_none');
    //         $('.step2').show();
    //     }, 500);
    //     var animationName = 'fadeInLeft';
    //     var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
    //     $('.step2').addClass('animated ' + animationName).one(animationEnd, function() {
    //          $('.step2').removeClass('animated ' + animationName);
    //     });
    // });
    // $('.next_button').click(function(){
    //     $('.step2').addClass('animated fadeOutLeft');
    //     setTimeout(function(){
    //         $('.step2').addClass('display_none');
    //         $('.step3').show();
    //     }, 500);
    //     $('.step3').addClass('animated fadeInLeft');
    // });
    $('.reg_form .inputs_submit .input_submit, .auth_form .inputs_submit .input_submit').click(function(){
        $('.step1').hide();
        $('.step2').show();
    });
    $('.next_button').click(function(){
        $('.step2').hide();
        $('.step3').show();
    });

    // Формы обратной связи
    $('.md-trigger').click(function(e){
        e.preventDefault();
        var form = $(this).data('modal');
        $('#'+form).addClass('open');
        $('body').addClass('md-show');
    });
    $('.md-modal').click(function(e){
        e.preventDefault();
        if ($(event.target).closest(".md-content").length) return;
        $(this).removeClass('open');
        $('body').removeClass('md-show');
    });
    $('.button_close').click(function(){
        $(this).parents('.md-modal').removeClass('open');
        $('body').removeClass('md-show');
    });
    if($('.cont-tri .info').length) {
        ymaps.ready(init);
        var myMap, 
            myPlacemark;

        function init(){ 

            myMap4 = new ymaps.Map("m4", {
                center: [22.30815,114.225666],
                zoom: 16
            }); 
            
            myPlacemark = new ymaps.Placemark([22.30815,114.225666], {
                hintContent: '',
                balloonContent: 'Коулун, 55 Кинг Йип Стрит, Квун-Тонг'
            });
            
            myMap4.geoObjects.add(myPlacemark);


            myMap3 = new ymaps.Map("m3", {
                center: [51.1476,71.4761],
                zoom: 16
            }); 
            
            myPlacemark = new ymaps.Placemark([51.148162,71.476773], {
                hintContent: '',
                balloonContent: 'Куйши Дина 17, Офис 507'
            });
            
            myMap3.geoObjects.add(myPlacemark);

            myMap2 = new ymaps.Map("m2", {
                center: [53.8743,27.5608],
                zoom: 16
            }); 
            
            myPlacemark = new ymaps.Placemark([53.874737,27.561041], {
                hintContent: '',
                balloonContent: 'ул. Володько 24 - 411'
            });
            
            myMap2.geoObjects.add(myPlacemark);

            myMap = new ymaps.Map("m1", {
                center: [59.9713,30.3020],
                zoom: 16
            }); 
            
            myPlacemark = new ymaps.Placemark([59.9716,30.2997], {
                hintContent: '',
                balloonContent: 'ул. Профессора Попова, д. 37, БЦ "Сенатор", офис 433'
            });
            
            myMap.geoObjects.add(myPlacemark);

            myMap11 = new ymaps.Map("m11", {
                center: [59.7964,30.3686],
                zoom: 16
            }); 
            
            myPlacemark = new ymaps.Placemark([59.797086,30.372453], {
                hintContent: '',
                balloonContent: 'Санкт-Петербург, Новгородский пр., д. 26, корп. 1'
            });
            
            myMap11.geoObjects.add(myPlacemark);

            if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                myMap4.behaviors.disable('drag');
                myMap3.behaviors.disable('drag');
                myMap2.behaviors.disable('drag');
                myMap.behaviors.disable('drag');
                myMap11.behaviors.disable('drag');
            }
        }
    }
});