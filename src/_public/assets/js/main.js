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
        infinite: true,
        autoplay: true,
        speed: 10000,
        autoplayspeed:1000,
        arrows: false,
        dots: false,
        pauseOnFocus: false,
        pauseOnHover: false,
        slidetoShow:6,
        slidetoScroll:6
    });
    // notify label 
    $(".c-notify__itemlabel").click(function () {
        $(".c-notify__itemlabel").removeClass("is-active");
        $(this).addClass("is-active");
    })
});