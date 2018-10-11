$(document).ready(function(){

//animation of carrot
    TweenMax.to('#carrot-down', 1.5, {ease: CustomEase.create("custom", "M0,0 C0.128,0.572 0.257,1.016 0.512,1.09 0.672,1.136 0.838,0 1,0"), y: 10 });

  //Init ScrollMagic
  var controller = new ScrollMagic.Controller();

  // first timeline element
  var ourScene = new ScrollMagic.Scene({
    triggerElement: '#timeline01'
  })
  .setClassToggle('#timeline01', 'fade-in') //add class to project01
  .addIndicators({
    name: 'timeline element 1 fade scene'
  })
  .addTo(controller);

  // second timeline element
  var ourScene = new ScrollMagic.Scene({
    triggerElement: '#timeline02'
  })
  .setClassToggle('#timeline02', 'fade-in') //add class to project01
  .addIndicators({
    name: 'timeline element 2 fade scene'
  })
  .addTo(controller);

  // third timeline element
  var ourScene = new ScrollMagic.Scene({
    triggerElement: '#timeline03'
  })
  .setClassToggle('#timeline03', 'fade-in') //add class to project01
  .addIndicators({
    name: 'timeline element 3 fade scene'
  })
  .addTo(controller);

  // fourth timeline element
  var ourScene = new ScrollMagic.Scene({
    triggerElement: '#timeline04'
  })
  .setClassToggle('#timeline04', 'fade-in') //add class to project01
  .addIndicators({
    name: 'timeline element 4 fade scene'
  })
  .addTo(controller);

  // fifth timeline element
  var ourScene = new ScrollMagic.Scene({
    triggerElement: '#timeline05'
  })
  .setClassToggle('#timeline05', 'fade-in') //add class to project01
  .addIndicators({
    name: 'timeline element 5 fade scene'
  })
  .addTo(controller);

  // sixth timeline element
  var ourScene = new ScrollMagic.Scene({
    triggerElement: '#timeline06'
  })
  .setClassToggle('#timeline06', 'fade-in') //add class to project01
  .addIndicators({
    name: 'timeline element 6 fade scene'
  })
  .addTo(controller);

  // seventh timeline element
  var ourScene = new ScrollMagic.Scene({
    triggerElement: '#timeline07'
  })
  .setClassToggle('#timeline07', 'fade-in') //add class to project01
  .addIndicators({
    name: 'timeline element 7 fade scene'
  })
  .addTo(controller);

  // eighth timeline element
  var ourScene = new ScrollMagic.Scene({
    triggerElement: '#timeline08'
  })
  .setClassToggle('#timeline08', 'fade-in') //add class to project01
  .addIndicators({
    name: 'timeline element 8 fade scene'
  })
  .addTo(controller);

  var ourScene = new ScrollMagic.Scene({
    triggerElement: '#timeline09'
  })
  .setClassToggle('#timeline09', 'fade-in') //add class to project01
  .addIndicators({
    name: 'timeline element 9 fade scene'
  })
  .addTo(controller);

  //image map


  $("#liver-point").click(function(){
    console.log('liver clicked');
    $(".liver-popup").addClass("active");
  });

  $("#liver-close").click(function(){
    console.log('close clicked');
    $(".liver-popup").removeClass("active");
  });

  $("#insomnia-point").click(function(){
    console.log('stomach clicked');
    $(".insomnia-popup").addClass("active");
  });

  $("#insomnia-close").click(function(){
    console.log('close clicked');
    $(".insomnia-popup").removeClass("active");
  });






});
