$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 3
        }
    }
});

$('.owl-item').on('mouseenter',function(){
    $(this).closest('.owl-carousel').trigger('stop.owl.autoplay');
});
$('.owl-item').on('mouseleave',function(){
    $(this).closest('.owl-carousel').trigger('play.owl.autoplay',[500]);
});

$('.parallax-window').parallax({imageSrc: 'img/coffee2.jpg'});