$(document).ready(function(){
  
  var controller = new ScrollMagic.Controller();

  
  $('.hobby').each(function(){
   
    var tween = TweenMax.from($(this), 0.5, {
        opacity: 0,
        y: 100,
        rotation: -45,
        scaleX: 0.5,
        scaleY: 1.5,
        ease: Power1.easeOut
    });
    
    
    var scene = new ScrollMagic.Scene({
        triggerElement: this,
        triggerHook: "onCenter",
        reverse: false,
        onLeave: function(){
            controller.removeScene(scene);
            controller.addScene(scene);
        }
    })
    .setTween(tween)
    .addTo(controller);
  });
  
  
  controller.scrollTo(function(target) {
    TweenMax.to(window, 0.5, {
      scrollTo: {
        y: target,
        offsetY: 80,
      },
      onComplete: function() {
        $(window).trigger('resize');
        controller.updateScene(controller.info("scrollPos"));
      }
    });
  });
  
  
  $('.hobby').hover(function(){
    TweenMax.to($(this), 0.5, {scale: 1.2});
  }, function(){
    TweenMax.to($(this), 0.5, {scale: 1});
  });
});


