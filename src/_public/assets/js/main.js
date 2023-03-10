$(document).ready(function () {
    AOS.init({
        duration: 1000,
    });
    new universalParallax().init({
        speed: 8.0
      });
    //backtotop
    function PageTopAnime() {
        var scroll = $(window).scrollTop();
        $('.c-header').removeClass("is-scroll");
        $('.c-header__logo').removeClass("is-scroll");
        $('.c-fixed').removeClass("is-fixed");
        if ($(window).width() < 768 && scroll >= 100) {
            $('.c-fixed').addClass("is-fixed");
        }
        if (scroll >= 100) {
            $('.c-header').addClass("is-scroll");
            $('.c-header__logo').addClass("is-scroll");
        }
        if (scroll >= 200) {
            $('.c-backtotop').removeClass('is-down');
            $('.c-backtotop').addClass('is-up');
        }
        else {
            if ($('.c-backtotop').hasClass('is-up')) {
                $('.c-backtotop').removeClass('is-up');
                $('.c-backtotop').addClass('is-down');
            }
        }

        var wH = window.innerHeight;
        var footerPos = $('.c-footer').offset().top;
        var mainvisual = ($('.c-mainvisual').offset().top + $('.c-mainvisual').height())/2;
        if (scroll + wH >= (footerPos + 10)) {
            var pos = (scroll + wH) - footerPos + 20;
            $('.c-backtotop').css('bottom', pos);
        }
        else {
            if ($('.c-backtotop').hasClass('is-up')) {
                $('.c-backtotop').css('bottom', '10px');
            }
            if ($('.c-backtotop').hasClass('is-up')&& $(window).width() < 768 && scroll > mainvisual) {
                $('.c-backtotop').css('bottom', '90px');
            }
        }
    }

    $(window).scroll(function () {
        PageTopAnime();
    });

    $(window).on('load', function () {
        PageTopAnime();
    });

    $('.c-backtotop').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 1000);
        return false;
    });
    //----------slick slider------------
    $('.c-mainvisual__slider').slick({
        infinite: true,
        fade: true,
        autoplay: true,
        autoplayspeed: 3000,
        speed: 2000,
        arrows: false,
        dots: true,
        pauseOnFocus: false,
        pauseOnHover: false,
        cssEase: 'linear'
    });
    $('.c-home__slides').slick({
        speed: 5000,
        autoplay: true,
        autoplaySpeed: 0,
        cssEase: 'linear',
        slidesToShow: 5,
        slidesToScroll: 1,
        infinite: true,
        swipeToSlide: true,
        centerMode: true,
        focusOnSelect: true,
        arrows: false,
        dots: false,
        responsive: [
            {
                breakpoint: 1023,
                settings: {
                    speed: 8000,
                    slidesToShow: 3,
                    centerMode: false
                }
            },
            {
                breakpoint: 540,
                settings: {
                    slidesToShow: 1,
                    autoplaySpeed: 0,
                    speed: 8000,
                    centerMode: true
                }
            }
        ]
    });
    // notify label 
    $(".c-notify__itemlabel").click(function () {
        var tab_id = $(this).attr('data-id');
        console.log(tab_id);
        $(".c-notify__itemlabel").removeClass('is-active');
        $(".c-notify__list").removeClass('is-active');

        $(this).addClass('is-active');
        $("#" + tab_id).addClass('is-active');
    })
    //btn scroll
    $(".c-mainvisual__btntxt").click(function () {
        var tag = $(this).attr("href");
        var top = tag.offsetTop;
        $('html, body').animate({ scrollTop: $(tag).position().top - 100 }, 800);
        return false;
    });

    //animation text
    $(window).scroll(function () {
        $(".c-home__scroll").each(function () {
            var position = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > position - windowHeight) {
                $(this).addClass('is-active');
            }
        });
    });
    //data bachground fixed
    if ($(window).width() < 768) {
        $('.parallax').attr("data-parallax-image", "./assets/img/bgfixedsp.jpg");
        $('.parallax').css("background-image", "url('./assets/img/bgfixedsp.jpg')");
        //trim text notify 
        $(".c-notify__desc").each(function () {
            var text = $(this).html();
            var sliced = text.trim().slice(0, 17);
            $(this).html(sliced + "<span>???<span>");
        });
    }
    //---------menu mobile------------
    $(".c-header__iconmenu").click(function () {
        if ($(window).scrollTop() < 30) {
            $(".c-header").toggleClass("is-scroll");
            $('.c-backtotop').removeClass("is-scroll");
        }
        $(".c-header__gnavmb").toggleClass("is-open");
        $(this).toggleClass("is-open");
        $(".c-header__left").toggleClass("is-open");
        $(".c-header__itemmb").removeClass("is-show");
        $(".c-header__subgnavmb").removeClass("is-click");
        $('body').toggleClass("is-fixed");
    });
    var parent = $(".c-header__linkmb").next();
    if (parent) {
        parent.parent().addClass("is-parent");
    }
    $(".c-top").click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 1000);
        return false;
    });
    $(".c-header__linkmb").click(function () {
        var item = $(this).next();
        if (item.length > 0) {
            $(this).next().toggleClass("is-click");
            $(this).parent().toggleClass("is-show");
        }
        else {
            $(".c-header__itemmb").removeClass("is-show");
            $(".c-header__subgnavmb").removeClass("is-click");
            $(".c-header__gnavmb").toggleClass("is-open");
            $(".c-header__iconmenu").toggleClass("is-open");
            $(".c-header__left").toggleClass("is-open");
            var parent = $(this).parent();
            if (parent.siblings().not('.is-parent')) {
                $('body').toggleClass("is-fixed");
            }
        }
    });
    $(".c-header__btninner").click(function () {
        $(".c-header__subgnavmb").removeClass("is-click");
        $(".c-header__gnavmb").toggleClass("is-open");
        $(".c-header__iconmenu").toggleClass("is-open");
        $(".c-header__left").toggleClass("is-open");
        $('body').toggleClass("is-fixed");
    })
    $(".c-header__sublinkmb").click(function () {
        $(".c-header__subgnavmb").removeClass("is-click");
        $(".c-header__gnavmb").toggleClass("is-open");
        $(".c-header__iconmenu").toggleClass("is-open");
        $(".c-header__left").toggleClass("is-open");
        $('body').toggleClass("is-fixed");
    });
    //accordian footer
    var parentft = $(".c-footer__link a").next();
    if (parentft) {
        parentft.parent().addClass("is-parent");
    }
    $(".c-footer__linkmain").click(function () {
        var item = $(this).next();
        if (item.length > 0) {
            $(this).next().toggleClass("is-click");
            $(this).parent().toggleClass("is-show");
        }
        return false;
    });
    $('.c-footer__linktop').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 1500);
        return false;
    });
});