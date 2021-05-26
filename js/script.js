// プラン一覧のスライダー
$(function(){
    $("#plan-list").slick({
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 2000,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: '100px',
    infinite: true,
    // dots: true,
    // fade: true


    // the magic
    responsive: [{
  
        breakpoint: 767,
        settings: {
        slidesToShow: 1,
        infinite: true,
        centerMode: true,
        centerPadding: '0px',
        arrows: false,
        }

    }]


    });

    $('.js-menu__item__link').each(function(){
        $(this).on('click',function(){
            $("+.submenu",this).slideToggle();
            return false;
        });
    });

    $('#js-buttonHamburger').click(function () {
        $('body').toggleClass('is-drawerActive');
    
        if ($(this).attr('aria-expanded') == 'false') {
            $(this).attr('aria-expanded', true);
            $(".hide-menu").fadeIn();
        } else {
            $(this).attr('aria-expanded', false);
            $(".hide-menu").fadeOut();
        }
    });

});