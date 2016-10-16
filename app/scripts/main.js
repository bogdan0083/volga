$(document).ready(function () {

    $(function() {
        var pull = $('#pull');
        menu = $('nav ul');
        menuHeight	= menu.height();

        $(pull).on('click', function(e) {
            e.preventDefault();
            menu.slideToggle();
        });

        $(window).resize(function(){
            var w = $(window).width();
            if(w > 320 && menu.is(':hidden')) {
                menu.removeAttr('style');
            }
        });
    });

    $('.nav-trigger').on('click', function(e) {
        e.preventDefault();

        $(this).toggleClass('active');

        $('.mobile-menu').toggleClass('active');
        $('.page-wrapper').toggleClass('active');
    });
    
    /*
     $('.news_block .news_link').hover(
     function() {
     $(this).parent('li').css('background-image','url(./images/news_h.png)')
     }, function() {
     $(this).parent('li').css('background-image','url(./images/news.png)')
     }
     );
     */

    /*------------------Листание цифр в инпуте-----------------------*/
    (function($) {
        $.fn.spinner = function() {
            this.each(function() {
                var el = $(this);
                // add elements
                el.wrap('<span class="spinner"></span>');
                el.before('<span class="sub"></span>');
                el.after('<span class="add"></span>');
                // substract
                el.parent().on('click', '.sub', function () {
                    if (el.val() > parseInt(el.attr('min')))
                        el.val( function(i, oldval) { return --oldval; });
                });
                // increment
                el.parent().on('click', '.add', function () {
                    if (el.val() < parseInt(el.attr('max')))
                        el.val( function(i, oldval) { return ++oldval; });
                });
            });
        };
    })(jQuery);

    $('input[type=number]').spinner();

    /*------------------в корзину-----------------------*/

    $('.product_block .product_add_to_basket').click(function(){
        $(this).parent().addClass('product_in_basket');
        $(this).parent().find('.product_add_to_basket, span.spinner').css("display","block").fadeOut();
        $(this).parent().find('.number_in_basket, .edit_in_basket').css("display","none").fadeIn().css("display","block");
        return false;
    });

//-----------------Скроллбар---------------------

    $(function($){$('.scrollbar').scrollbar();});

//----------------Задаём необходимый размер выпадающему каталогу---------------------

    $(function() {
        var catalogHeight = $('#catalog_menu').outerHeight();

        $('.calatog_list').each(function() {

            
            var elements_height = $(this).find('.scrollbar .column:first-child').height();
            if (elements_height > catalogHeight && elements_height < (catalogHeight * 2) ) $(this).attr('class', 'calatog_list').addClass('two_column');
            if (elements_height > (catalogHeight * 2) ) $(this).attr('class', 'calatog_list').addClass('three_column');
        });

        salvattore.rescanMediaQueries();

        $('#catalog_button #catalog_menu').css({
            'display' : 'none',
            'height' : 'auto',
            'overflow' : 'visible'
        });

        $('.middle > #catalog_menu .calatog_list').css('opacity','1');

        $('#catalog_menu .calatog_list').hide();

        $("#catalog_menu >li").hover(
            function() {
                $(this).find('.calatog_list').fadeIn().css('z-index', '15');

                $('.calatog_list').css('width', parseInt($('.middle').width() - $('#catalog_menu').width()));

            }, function() {
                $(this).find('.calatog_list').css('z-index', '10').delay(200).fadeOut();
            }
        );
    });

    $('#catalog_button').click(function(e){
        e.preventDefault();
        e.stopPropagation();
        $(this).toggleClass('catalog_opened');
        $('.catalog-menu-wrapper').toggleClass('js-active');
        $('body').toggleClass('body_clickable');
    });

    // $('body').click(function(){
    //     if ($(this).hasClass('body_clickable')) {
    //         $('#catalog_menu').slideUp();
    //         $('body').removeClass('body_clickable');
    //         $('div#catalog_button').removeClass('catalog_opened');
    //     }
    // });



//-----------------Кнопка наверх---------------------
    $(function() {
        $.fn.scrollToTop = function() {
            $(this).hide().removeAttr("href");
            if ($(window).scrollTop() >= "300") $(this).fadeIn("fast")
            var scrollDiv = $(this);
            $(window).scroll(function() {
                if ($(window).scrollTop() <= "300") $(scrollDiv).fadeOut("fast")
                else $(scrollDiv).fadeIn("fast")
            });
            $(this).click(function() {
                $("html, body").animate({scrollTop: 0}, "fast")
            })
        }
    });

    $(function() {
        $("#go_top").scrollToTop();
    });

    var $megaSlider = $('.mega-slider'),
        $offersSlider = $('.special-offers-slider'),
        $incomeDateSlider = $('.income-date-slider'),
        $newsSliderFirst = $('.news-slider-first'),
        $newsSliderSecond = $('.news-slider-secondary'),
        $brandsSlider = $('.brands-slider');

    $megaSlider.find('.wrapper').slick({
        autoplay: true,
        infinite: true,
        dots: true,
        prevArrow: $('.slider_controls').find('#prev'),
        nextArrow: $('.slider_controls').find('#next')
    });


    $offersSlider.find('.items-row').slick({
        autoplay: true,
        infinite: true,
        dots: false,
        prevArrow: $('.special-offers').find('.arrow-left'),
        nextArrow: $('.special-offers').find('.arrow-right'),
        variableWidth: true,
        slidesToShow: 4,
        responsive: [
            {
                breakpoint: 880,
                settings: {
                    centerMode: true,
                    slidesToShow: 3,
                    arrows: true
                }
            }
        ]
    });

    $incomeDateSlider.slick({
        dots: false,
        infinite: false,
        prevArrow: $('.income-items').find('.arrow-left'),
        nextArrow: $('.income-items').find('.arrow-right'),
        variableWidth: true,
        slidesToShow: 9
        // responsive: [
        //     {
        //         breakpoint: 880,
        //         settings: {
        //             centerMode: true,
        //             slidesToShow: 3
        //         }
        //     }
        // ]
    });

    $newsSliderFirst.slick({
        dots: false,
        infinite: true,
        draggable: false,
        prevArrow: $('.news').find('.arrow-left'),
        nextArrow: $('.news').find('.arrow-right'),
        slidesToScroll: 1
    });

    $newsSliderSecond.slick({
        dots: false,
        infinite: true,
        draggable: false,
        prevArrow: $('.news').find('.arrow-right'),
        nextArrow: $('.news').find('.arrow-left')
    });

    $brandsSlider.slick({
        autoplay: true,
        infinite: true,
        dots: false,
        prevArrow: $('.brands').find('.arrow-left'),
        nextArrow: $('.brands').find('.arrow-right'),
        slidesToShow: 6,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });


    $('.show-hidden').click(function (e) {
        e.preventDefault();

        $(this).toggleClass('active').prev().toggleClass('filter-hidden');

        if ($(this).hasClass('active')) {
            $(this).text('скрыть');

        } else {
            $(this).text('показать все');
        }
    });

    $("#range").ionRangeSlider({
        type: "double",
        grid: false,
        min: 0,
        max: 40000,
        from: 75,
        to: 25000,
        step: 50,
        hide_min_max: true,
        hide_from_to: true,
        onStart: function(data) {
            $('.price-range-min').val(data.from);
            $('.price-range-max').val(data.to);
        },
        onChange: function(data) {
            $('.price-range-min').val(data.from);
            $('.price-range-max').val(data.to);
        }
    });

    $.widget( "custom.iconselectmenu", $.ui.selectmenu, {
        _renderItem: function( ul, item ) {
            var li = $( "<li>" ),
                wrapper = $( "<div>", { text: item.label } );

            if ( item.disabled ) {
                li.addClass( "ui-state-disabled" );
            }

            wrapper.addClass(item.element.data('class'));

            return li.append( wrapper ).appendTo( ul );
        }
    });

    $('.select').iconselectmenu();

});