$(document).ready(function(){

    $nav = $('.nav');
    $toggleCollapse = $('.toggle-collapse');


    // On event toggle menu
    $toggleCollapse.click(function(){
        $nav.toggleClass('collapse');
    })


    // owl-carousel for bio page
    $('.owl-carousel').owlCarousel({
        loop: true,
        autoplay: false,
        autoplayTimeout: 4500,
        dots: false,
        nav: true,
        navText: [$('.owl-navigation .owl-nav-prev'),$('.owl-navigation .owl-nav-next')],
    });

});