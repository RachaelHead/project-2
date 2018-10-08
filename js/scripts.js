$(document).ready(function(){

  //Init ScrollMagic
  var controller = new ScrollMagic.Controller();

  // scene
  var ourScene = new ScrollMagic.Scene({
    triggerElement: '#timeline01'
  })
  .setClassToggle('#timeline01', 'fade-in') //add class to project01
  .addIndicators({
    name: 'timeline element 1 fade scene'
  })
  .addTo(controller);

  // scene
  var ourScene = new ScrollMagic.Scene({
    triggerElement: '#timeline02'
  })
  .setClassToggle('#timeline02', 'fade-in') //add class to project01
  .addIndicators({
    name: 'timeline element 2 fade scene'
  })
  .addTo(controller);

  // scene
  var ourScene = new ScrollMagic.Scene({
    triggerElement: '#timeline03'
  })
  .setClassToggle('#timeline03', 'fade-in') //add class to project01
  .addIndicators({
    name: 'timeline element 3 fade scene'
  })
  .addTo(controller);

  // scene
  var ourScene = new ScrollMagic.Scene({
    triggerElement: '#timeline04'
  })
  .setClassToggle('#timeline04', 'fade-in') //add class to project01
  .addIndicators({
    name: 'timeline element 4 fade scene'
  })
  .addTo(controller);

  TweenMax.to('.logo', 2, {left:600});

});
