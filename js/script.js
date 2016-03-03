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
    $(".small-pic").click(function() {
        $('.thumb_mini').removeClass('active');
        $(this).parents('.thumb_mini').addClass('active');
    });
    $('.order_button').click(function(e){
        e.preventDefault();
    });
    $('.favorite_more').click(function() {
        $(this).parent().find('.tovar_list').find('.hidden').slideToggle();
        $(this).toggleClass('active');
        if ($(this).text() != 'Скрыть') $(this).text('Скрыть');
        else $(this).text('Показать все товары');
    });
    $('.add_article_link').click(function() {
        $('.article_form').fadeToggle();
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
       $(".tab-content").not(tab).css("display", "none");
       $(tab).fadeIn();
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
        }
    }
});