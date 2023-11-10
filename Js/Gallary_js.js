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
  /*gsap.to(".main", {
    backgroundColor:"#001232",
    scrollTrigger: {
      trigger: "#main",
      scroller: "body",
      // markers: true,
      start: "top -25%",
      end: "top -70%",
      scrub: 2
    }
  });
*/

  


let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) { slideIndex = 1; }
  if (n < 1) { slideIndex = slides.length; }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

//function autoSlide() {
  plusSlides(1);
//}

// Change slides every 3 seconds (3000 milliseconds)
//setInterval(autoSlide, 5000);


/*document.addEventListener('DOMContentLoaded', function() {
  var box = document.querySelectorAll('box');
//var closetwo = document.getElementById('close_videotwo');
  var open_image = document.getElementById('open_image');
var overlay = document.getElementById('overlay');


 function handleClick(event) {

    open_image.style.display = "block";
     overlay.style.display = "block";
  
      });

 //closetwo.addEventListener('click', function() {
 // open_image.style.display = 'none';	
 // overlay.style.display = "none"
  //    });
    //});
    boxa.forEach(box => {
      box.addEventListener('click', handleClick);
    });*/


    document.addEventListener('DOMContentLoaded', function() {
    var boxes = document.getElementsByClassName('box');
    var close_video = document.getElementById("close_video");
    var open_image = document.getElementById('open_image');
    var overlay = document.getElementById('overlay');

for (var i = 0; i < boxes.length; i++) {
  boxes[i].addEventListener('click', function() {
    open_image.style.display = "block";
    overlay.style.display = "block";
  });
};

close_video.addEventListener('click', function() {
  open_image.style.display = 'none';	
 overlay.style.display = "none"

    });

});






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