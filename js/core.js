var main = function () {
  $('#dropdown-toggle').click(function() {
    $('#dropdown-menu').toggle();
  });
    $(document).click(function(event) {
  if (!$(event.target).closest('#dropdown-toggle').length) {
    $('#dropdown-menu').hide();
  }
  });
    $('#nav-toggle').click(function(event) {
        $('#nav-collapse ul').toggle();
    });
    $('.arrow-next').click(function() {
        var currentSlide=$('.active-slide');
        var nextSlide=currentSlide.next();
        if(nextSlide.length===0) nextSlide=$('.slide').first();
        currentSlide.fadeOut(100).removeClass('active-slide');
        nextSlide.fadeIn(100).addClass('active-slide'); 
        var currentDot = $('.active-dot');
        var nextDot = currentDot.next();
        if(nextDot.length===0) nextDot = $('.dot').first();
        currentDot.removeClass('active-dot');
        nextDot.addClass('active-dot');
    });
    $('.arrow-prev').click(function() {
        var currentSlide=$('.active-slide');
        var prevSlide=currentSlide.prev();
        if(prevSlide.length===0) prevSlide=$('.slide').last();
        currentSlide.fadeOut(100).removeClass('active-slide');
        prevSlide.fadeIn(100).addClass('active-slide'); 
        var currentDot = $('.active-dot');
        var prevDot = currentDot.prev();
        if(prevDot.length===0) prevDot = $('.dot').last();
        currentDot.removeClass('active-dot');
        prevDot.addClass('active-dot');
    });
};
$(document).ready(main);
