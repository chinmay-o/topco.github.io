
$(window).on('load', function(){
    $('#preloder').delay(1000).fadeOut('slow', function(){
        $("#content").removeClass("hidden");
    });
});

(function() {

if(!('ontouchend' in document)) return;
var pageX, pageY, newX, newY, linked;

jQuery('.rev_slider').on('touchstart', function(event) {

    newX = newY = false;

    var target = jQuery(event.target),
    clas = target.attr('class');
    event = event.originalEvent;

    if(event.touches) event = event.touches[0];
    pageX = event.pageX;
    pageY = event.pageY;

    if(target.is('a') || target.closest('a').length) linked = target;

}).on('touchmove', function(event) {

    event = event.originalEvent;
    if(event.touches) event = event.touches[0];

    newX = event.pageX;
    newY = event.pageY;
    if(Math.abs(pageX - newX) > 10) event.preventDefault();

}).on('touchend', function(event) {

    if(newX !== false && Math.abs(pageX - newX) > 30) {

        eval('revapi' + jQuery(this).closest('.rev_slider_wrapper').attr('id').split('rev_slider_')[1].split('_')[0])[pageX > newX ? 'revnext' : 'revprev']();

    }
    else if((linked && newY === false) || (linked && Math.abs(pageY - newY) < 10)) {

        linked = linked.is('a') ? linked : linked.closest('a');
        if(linked.length) {

            if(linked.attr('target') === '_blank') {
                window.open(linked.attr('href'));
            }
            else {
                window.location = linked.attr('href');
            }

        }

    }

    linked = newX = false;

});})();

function goldRateScroll() {

  $('html, body').animate({
    scrollTop: $("#goldRate-content").offset().top - 240
  }, 1000);
}

function collectionScroll() {

  $('html, body').animate({
    scrollTop: $("#collection-content").offset().top - 240
  }, 1000);
}

function productScroll() {

  $('html, body').animate({
    scrollTop: $("#product-content").offset().top - 240
  }, 1000);
}

function contactScroll() {

  $('html, body').animate({
    scrollTop: $("#contact-content").offset().top - 240
  }, 1000);
}
