$(function(){

    $('.top__slider').slick({
        arrows: false,
        dots: true,
        autoplay: true,
        fade: true,
        responsive: [
            {
                breakpoint: 1200,
                settings:{
                    dots: false,
                }
            }
        ]
    });

    $('.reviews__slider').slick({
        arrows: false,
        dots: true,
        slidesToScroll: 1,
        slidesToShow: 4,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1141,
                settings:{
                    dots: false,
                    slidesToShow:3,
                }
            },
            {
                breakpoint: 846,
                settings:{
                    slidesToShow:2,
                }
            },
            {
                breakpoint: 585,
                settings:{
                    slidesToShow:1,
                }
            }
        ]
    });

    $('.menu__btn').on('click', function(){
        $('.menu__list').toggleClass('menu__list--active');
    })

});