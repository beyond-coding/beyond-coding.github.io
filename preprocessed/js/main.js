//---------------------------------------------------------------------------------------
// engagement animation

var backgroundScale = function() {
    $('#engagement .background').addClass('scale');
}
window.setTimeout(backgroundScale, 0);

var outAnimation = 'animated fadeOutDown';
var inAnimation = 'animated fadeInDown';
var animationEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
var highlights = $('#engagement h1 strong');

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
// navigation menu

// $('#menu').click(function() {
//     var icon = $(this).children('i');
//     var text = icon.text();
//     console.log('icon text: ' + text);
//     var nextText = 'menu';
//     if (text === 'menu') {
//         nextText = 'close';
//     }
//     icon.text(nextText);
// });


// $('div.overlay').addClass('close');
//
// function openMenu(menu) {
//     $(menu).removeClass('close');
//     $(menu).addClass('open');
//     $('#menu').hide();
// }
//
// function closeMenu(menu) {
//     $(menu).removeClass('open');
//     $(menu).addClass('close');
//     $('.overlay-open').show();
//     $('#menu').show();
// }
//
// $('.overlay-open').click(function() {
//     $('.overlay-open').hide();
//     var element = $(this);
//     var target = element.attr('data-target');
//     openMenu(target);
//     sendCharacterEvent(element);
//     return false;
// });
// $('.overlay-close').click(function() {
//     var overlay = $(this).closest('.overlay');
//     closeMenu(overlay);
//     return false;
// });
// $('.overlay-scale nav a').click(function() {
//     var parent = $(this).parent('.overlay');
//     closeMenu(parent);
// });
// $('.overlay-scale nav a.scroll').click(function() {
//     var overlay = $(this).closest('.overlay');
//     closeMenu(overlay);
//     scrollTo(this.hash);
//     return false;
// });
// $('#menu a.scroll').click(function() {
//     scrollTo(this.hash);
//     return false;
// });

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
