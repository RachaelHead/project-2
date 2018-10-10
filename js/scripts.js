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

  //image map


  $("#liver-point").click(function(){
    console.log('liver clicked');
    $(".liver-popup").addClass("active");
  });

  $("#liver-close").click(function(){
    console.log('close clicked');
    $(".liver-popup").removeClass("active");
  });

  $("#stomach-point").click(function(){
    console.log('stomach clicked');
    $(".stomach-popup").addClass("active");
  });

  $("#stomach-close").click(function(){
    console.log('close clicked');
    $(".stomach-popup").removeClass("active");
  });






});
