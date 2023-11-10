

document.addEventListener("DOMContentLoaded", function() {
function myfunction() {
    var one = document.getElementById("nev");
    var ypos = window.pageYOffset;
    var top = document.getElementById("top");
    var timea = document.getElementById("timea");
    
    if( ypos > 5500){
      timea.style.opacity = "0";
    }
     
   
    
    else if (ypos > 900) {
      top.style.opacity = "1";
       top.style.left = "0px";
    } 

      else if (ypos > 150) {
      
      one.style.position = "fixed";
      one.style.background = "rgba(3, 32, 85, 0.95)";
      one.style.boxShadow = "0px 5px 20px rgba(0, 0, 50, 0.9)";
      one.style.transition = ".8s ease";
    } 
  

      else {
      one.style.position = "absolute";
      one.style.background = "Transparent";
      one.style.boxShadow = "none";
      top.style.opacity = "0"; 
      top.style.left =  "200px"; 
      timea.style.opacity = "1";
      
       
     
    }
  }
  
  window.onscroll = function() {
    myfunction();
  };
});
  gsap.to(".main", {
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

function autoSlide() {
  plusSlides(1);
}

// Change slides every 3 seconds (3000 milliseconds)
//setInterval(autoSlide, 3000);

$(document).ready(function(){

$("#qone").click(function(){
  
  $("#aone").slideToggle(1000, function(){
    $(this).animate({ opacity: '1' ,transform: 'translateY(200px)'}, 500);
  });

});

$("#qtwo").click(function(){
  
  $("#atwo").slideToggle(1000, function(){
    $(this).animate({ opacity: '1' ,transform: 'translateY(200px)'}, 500);
  });

});


$("#qthree").click(function(){
  
  $("#athree").slideToggle(1000, function(){
    $(this).animate({ opacity: '1' ,transform: 'translateY(200px)'}, 500);
  });

});


$("#qfour").click(function(){
  
  $("#afour").slideToggle(1000, function(){
    $(this).animate({ opacity: '1' ,transform: 'translateY(200px)'}, 500);
  });

});


$("#qfive").click(function(){
  
  $("#afive").slideToggle(1000, function(){
    $(this).animate({ opacity: '1' ,transform: 'translateY(200px)'}, 500);
  });

});


$("#qsix").click(function(){
  
  $("#asix").slideToggle(1000, function(){
    $(this).animate({ opacity: '1' ,transform: 'translateY(200px)'}, 500);
  });

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
  