// smooth scroll between sections
$('a[href^="#"]').on('click', function (event) {

    var $target = $(this.getAttribute('href'));

    if ($target.length) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: $target.offset().top
        }, 750, 'easeInOutQuad');
    }
});

// TOGGLE HAMBURGER & COLLAPSE NAV
$('.nav-toggle').on('click', function () {
    $(this).toggleClass('open');
    $('.menu').toggleClass('collapse');
});
// REMOVE X & COLLAPSE NAV ON ON CLICK
$('.menu li a').on('click', function () {
    $('.nav-toggle').removeClass('open');
    $('.menu').removeClass('collapse');
});

// back to top
$('.logo').on('click', function (e) {
    e.preventDefault();
    $('.nav-toggle').removeClass('open');
    $('.menu').removeClass('collapse');
    $('html, body').animate({
        scrollTop: 0
    }, 750, 'easeInOutQuad')
});

// SHOW/HIDE NAV

// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('nav').outerHeight();

$(window).scroll(function (event) {
    didScroll = true;
});

setInterval(function () {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();

    // Make sure they scroll more than delta
    if (Math.abs(lastScrollTop - st) <= delta)
        return;

    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight) {
        // Scroll Down
        $('nav').removeClass('show-nav').addClass('hide-nav');
        $('.nav-toggle').removeClass('open');
        $('.menu').removeClass('collapse');
    } else {
        // Scroll Up
        if (st + $(window).height() < $(document).height()) {
            $('nav').removeClass('hide-nav').addClass('show-nav');
        }
    }

    lastScrollTop = st;
}
