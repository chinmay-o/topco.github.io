$(window).on('load', function(){
    $('#preloder').delay(700).fadeOut('slow', function(){
        $("#content").removeClass("hidden");
    });
});

let xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    let data = JSON.parse(this.responseText).feed.entry;

    let date = data[0]["gsx$date"]["$t"];
    let gram = data[0]["gsx$gram"]["$t"];
    let eightGram = gram*8;
    let silver = data[0]["gsx$silver"]["$t"];

    document.getElementById("datePrint").innerHTML += "<h3>" + date + "</h3>";
    document.getElementById("gramPrint").innerHTML += "<span>" + gram + "</span>";
    document.getElementById("eightPrint").innerHTML += "<span>" + eightGram + "</span>";
    document.getElementById("silverPrint").innerHTML += "<span>" + silver + "</span>";

    document.getElementById("gramPrintMobile").innerHTML += "<span>" + gram + "</span>";
    document.getElementById("eightPrintMobile").innerHTML += "<span>" + eightGram + "</span>";
    document.getElementById("silverPrintMobile").innerHTML += "<span>" + silver + "</span>";
  };
};

xmlhttp.open(
  "GET",
  "https://spreadsheets.google.com/feeds/list/1NBmuhKvEgvnfuGZXz7N1DmefHV7c7KaXlk0lFaqx_Mg/od6/public/values?alt=json",
  true
);
xmlhttp.send();

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
