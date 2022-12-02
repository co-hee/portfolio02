$(function () {

    $('.mainSlide').slick({
        //slidesToShow: 2,
        //arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHOVER: false,
        pauseOnFocus: false,
        // asNavFor: '.mainSlide',

    });

    $('.mainVisual .slogan').slick({
        asNavFor: '.mainSlide',
        autoplay: true,
        focusOnSelect: true,
        vertical: true,
        arrows: false,
    });











})

