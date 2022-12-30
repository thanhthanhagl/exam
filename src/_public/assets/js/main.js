$(document).ready(function () {
    //-----------------open menu mobile -------
    $(".c-header__iconmenu").click(function () {
        if ($(window).scrollTop() < 30) {
            $(".c-header").toggleClass("is-scroll");
        }
        $(".c-header__navmb").toggleClass("is-open");
        $(".c-header__icon").toggleClass("is-open");
        $('body').toggleClass("is-fixed");
    });
    $(".c-header__itemmb").click(function () {
        $(".c-header__navmb").toggleClass("is-open");
        $(".c-header__icon").toggleClass("is-open");
        $('body').toggleClass("is-fixed");
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
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2
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


    //backtotop
    function PageTopAnime() {
        var scroll = $(window).scrollTop();
        $('.c-backtotop').css('opacity', '0');
        $('.c-header').removeClass("is-scroll");
        $('.c-header__logo').removeClass("is-scroll");
        if (scroll >= 100) {
            $('.c-header').addClass("is-scroll");
            $('.c-header__logo').addClass("is-scroll");
        }
        if (scroll >= 200) {
            $('.c-backtotop').removeClass('is-down');
            $('#page-top').addClass('is-up');
            $('.c-backtotop').css('opacity', '1');
        } else {
            if ($('.c-backtotop').hasClass('is-up')) {
                $('.c-backtotop').removeClass('is-up');
                $('.c-backtotop').addClass('is-down');
                $('.c-backtotop').css('opacity', '1');
            }
        }

        var wH = window.innerHeight;
        var footerPos = $('.c-footer').offset().top;
        if (scroll + wH >= (footerPos + 10)) {
            var pos = (scroll + wH) - footerPos + 10
            $('.c-backtotop').css('bottom', pos);
        } else {
            if ($('.c-backtotop').hasClass('is-up')) {
                $('.c-backtotop').css('bottom', '10px');
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
        }, 500);
        return false;
    });
    $('.c-footer__linktop').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
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
      });
      var parent = $(".c-header__linkmb").next();
      if (parent) {
        parent.parent().addClass("is-parent");
      }
      $(".c-header__linkmb").click(function () {
        $(".c-header__submenumb").removeClass("is-click");
        $(".c-header__gnavmb").toggleClass("is-open");
          $(".c-header__iconmenu").toggleClass("is-open");
          $('body').toggleClass("is-fixed");
          $(".c-header__left").toggleClass("is-open");
      });
});