//---------------------------------------------------------------------------------------
// navigation menu

$('div.overlay').addClass('close');

function openMenu(menu) {
	$(menu).removeClass('close');
	$(menu).addClass('open');
    $('#menu').hide();
}

function closeMenu(menu) {
	$(menu).removeClass('open');
	$(menu).addClass('close');
	$('.overlay-open').show();
    $('#menu').show();
}

$('.overlay-open').click(function() {
	$('.overlay-open').hide();
    var element = $(this);
    var target = element.attr('data-target');
	openMenu(target);
    sendCharacterEvent(element);
	return false;
});
$('.overlay-close').click(function() {
    var overlay = $(this).closest('.overlay');
	closeMenu(overlay);
	return false;
}); 
$('.overlay-scale nav a').click(function() {
	var parent = $(this).parent('.overlay');
	closeMenu(parent);
});
$('.overlay-scale nav a.scroll').click(function() {
	var overlay = $(this).closest('.overlay');
	closeMenu(overlay);
	scrollTo(this.hash);
	return false;
});
$('#menu a.scroll').click(function() {
	scrollTo(this.hash);
	return false;
});

//---------------------------------------------------------------------------------------
// scroll effect

var scrollSpeed = 500;

function scrollTo(element){
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

function sendCharacterEvent(element){
    if(element.hasClass('personaje')){
        var label = 'personaje';
        var personaje = element.attr('data-character');
        ga('send', 'event', label, 'click', personaje);
    }
}