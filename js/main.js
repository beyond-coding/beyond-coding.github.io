//---------------------------------------------------------------------------------------
// engagement animation

var backgroundScale = function() {
    $('.engage .background').addClass('scale');
}
window.setTimeout(backgroundScale, 0);

var outAnimation = 'animated fadeOutDown';
var inAnimation = 'animated fadeInDown';
var animationEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
var highlights = $('.engage h1 strong');

highlights.not(':first').hide();
var titleAnimation = function() {
    highlights.eq(0).addClass(outAnimation).one(animationEvents, function() {
        $(this).hide();
        $(this).removeClass(outAnimation);
        highlights.eq(1).show();
        highlights.eq(1).addClass(inAnimation).one(animationEvents, function() {
            $(this).removeClass(inAnimation);
            highlights.eq(1).addClass(outAnimation).one(animationEvents, function() {
                $(this).hide();
                $(this).removeClass(outAnimation);
                highlights.eq(2).show();
                highlights.eq(2).addClass(inAnimation).one(animationEvents, function() {
                    $(this).removeClass(inAnimation);
                });
            });
        });
    });
};

window.setTimeout(titleAnimation, 1500);

//---------------------------------------------------------------------------------------
// referral activation

$('.referral').slick({
  dots: false,
  arrows: false,
  infinite: true,
  draggable: true,
  mobileFirst: true,
  slidesToShow: 1,
  slidesPerRow: 1,
  autoplay: true,
  autoplaySpeed: 2000
});

//---------------------------------------------------------------------------------------
// scroll effect

var scrollSpeed = 500;

function scrollTo(element) {
    $('html, body').animate({
        scrollTop: $(element).offset().top
    }, scrollSpeed);
}

//---------------------------------------------------------------------------------------
// google analytics

$('.analytics-event').on('click', function() {
    var label = $(this).attr('data-label');
    var value = $(this).attr('data-value');
    ga('send', 'event', label, 'click', value);
});
