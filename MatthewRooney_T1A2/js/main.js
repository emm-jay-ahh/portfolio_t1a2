$(document).ready(function(){

    $nav = $('.nav');
    $toggleCollapse = $('.toggle-collapse');


    // On event toggle menu
    $toggleCollapse.click(function(){
        $nav.toggleClass('collapse');
    })


    // owl-carousel for blog page
    $('.owl-carousel').owlCarousel();

})