
function myfunction() {
    var one = document.getElementById("nev");
    var ypos = window.pageYOffset;
    var top = document.getElementById("top");
    
    if (ypos > 1080) {
      top.style.opacity = "1";
       top.style.left = "0px";  
    } 
      
      else if (ypos > 150) {
      
      one.style.position = "fixed";
      one.style.backgroundColor = "rgba(3, 32, 85, 0.95)";
      one.style.boxShadow = "0px 5px 20px rgba(0, 0, 50, 0.9)";
      one.style.transition = "1s ease";
    } 
      else {
      one.style.position = "absolute";
      one.style.background = "Transparent";
      one.style.boxShadow = "none";
      top.style.opacity = "0"; 
      top.style.left =  "200px"; 
     
    }
  }
  
  window.onscroll = function() {
    myfunction();
  };


  var scrollY = 0;
  var distance = 40;
  var speed = 20;
  
  function autoScrollTo(el) {
      var currentY = window.pageYOffset;
      var targetY = document.getElementById(el).offsetTop;
      var bodyHeight = document.body.offsetHeight;
      var yPos = currentY + window.innerHeight;
      var animator = setTimeout(function() {
          autoScrollTo(el);
      }, speed);
      if (yPos > bodyHeight) {
          clearTimeout(animator);
      } else {
          if (currentY < targetY - distance) {
              scrollY = currentY + distance;
              window.scroll(0, scrollY);
          } else {
              clearTimeout(animator);
          }
      }
  }



  gsap.to(".header h1",{
    transform:"translateX(-100%)",
    fontWeight:"100",
    scrollTrigger:{
        trigger:".header",
        scroller:"body",
        // markers:true,
        start:"top 0",
        end:"top -200%",
        scrub:3,
        pin: true,
        pinSpecing : true
       
        
    }
})










$(document).ready(function(){
  $("#menuone").click(function(){
    $(".openmenu").slideDown(function(){
      $("#menuone").hide();
      $("#menutw").show();
    });
  });



  $("#menutw").click(function(){
    $(".openmenu").slideUp(function(){
      $("#menutw").hide();
      $("#menuone").show();
      
    });
  });

}); 