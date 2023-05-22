//this is done to first load the document and then apply the functions
$(document).ready(function () {
  console.log($);
  console.log(jQuery);
  // $('selector').action()

  //clicks on all the p elements (element selector)
//   $("p").click(); //click on p
  $("p").click(function () {
    //do this when click on p
    console.log("you clicked on p", this);
    // $(this).hide(); //hides only the one where we clicked
  });

//   $("p").dblclick(function () {
//     //do this when click on p
//     console.log("you double clicked on p", this);
//     // $(this).hide(); //hides only the one where we clicked
//   });

//   $("p").mouseenter(function () {
//     //do this when click on p
//     console.log("you entered", this);
//     // $(this).hide(); //hides only the one where we clicked
//   });

//   $("p").mouseleave(function () {
//     //do this when click on p
//     console.log("you entered", this);
//     // $(this).hide(); //hides only the one where we clicked
//   });
//   $("p").mousedown(function () { //whenn we click 
//     //do this when click on p
//     console.log("you mouse down", this);
//     // $(this).hide(); //hides only the one where we clicked
//   });
//   $("p").hover(function () { //whenn we click using mouse
//     //do this when click on p
//     console.log("you hovered on", this);
//     // $(this).hide(); //hides only the one where we clicked
//   },
//   function(){
//     console.log("thanks for coming")
//   });


//demoing the on method
$('p').on(
    {
        click: function(){
        console.log('Thanks for clicking',this);
    },
    mouseleave:function(){
        console.log('mouseleave',this);
    }
})

// $('#wiki').hide(1000,function(){ //it will take 1000ms to hide and once done the function gets called
//   console.log("hidden")
// });
   
// $('#but').click(1000,function(){ //it will take 1000ms to hide and once done the function gets called
//    $('#wiki').toggle(1000);
// });

$('#but').click(1000,function(){ //it will take 1000ms to hide and once done the function gets called
  $('#wiki').fadeOut(1000);
}); 

//slideUp,slideDown,slideToggle ->for animations
// fadeIn(), fadeOut() , fadeToggle(),fadeTo()

// $('#wiki').animate({
//   opacity:0.3,
//   height:'150px',
//   width:'350px'
// },2000)

$('#wiki').animate({opacity:0.3},4000);
$('#wiki').animate({opacity:0.9},1000);
$('#wiki').animate({width:'350px'},12000); 


  //id selector
//   $("#fourth").click();
  //class selector
//   $("odd").click();
 


  //events in jquery
  //mouse events -> click,dblclick,mousenter,mouseleave,mouseup
//   keyboard events -> keypress,keydown,MediaKeyStatusMap,
//   form events -> SubmitEvent,change,focus,blur
//   document events-> load,resize,scroll,unload
   
});

//three selector -> id,element,class selector
