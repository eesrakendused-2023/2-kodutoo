new fullpage('#fullpage', {
    sectionsColor: ['yellow', 'green', 'blue', 'red', 'orange', 'white', 'green'],
    anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'fifthPage', 'sixthPage', 'seventhPage', 'lastPage'],
    navigation: true,
    slidesNavPosition: 'bottom',
    menu: '#myMenu',
    css3:true
  });

$(document).ready(function() {
    var currentSlide = 0;
    var slideCount = $('.slide').length;
  
    $('#next').click(function() {
      if (currentSlide < slideCount - 1) {
        currentSlide++;
        moveSlide();
      }
    });
  
    $('#prev').click(function() {
      if (currentSlide > 0) {
        currentSlide--;
        moveSlide();
      }
    });
  
    function moveSlide() {
      var slideWidth = $('.slide').width();
      var distance = -1 * currentSlide * slideWidth;
      $('#slider').animate({ left: distance });
    }
  });