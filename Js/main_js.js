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
    top.style.left = "200px";

  }
}

window.onscroll = function () {
  myfunction();
};
gsap.to(".main", {
  backgroundColor: "#001232",
  scrollTrigger: {
    trigger: "#main",
    scroller: "body",
    // markers: true,
    start: "top -25%",
    end: "top -70%",
    scrub: 2
  }
});

var about = gsap.timeline();
gsap.from(".discovery h3", {
  y: 200,
  opacity: 0,
  scrollTrigger: {
    trigger: ".discovery",
    scroller: "body",
    start: "top 80%",
    end: "top 25%",
    scrub: 2
  }
});

gsap.from(".discovery .content", {
  y: 400,
  opacity: 0,

  scrollTrigger: {
    trigger: ".discovery",
    scroller: "body",
    start: "top 60%",
    end: "top 25%",
    scrub: 2,
    // markers: true,
  }
});

gsap.from(".About .btn", {
  y: 200,
  opacity: 0,
  scrollTrigger: {
    trigger: ".About",
    scroller: "body",
    start: "top 40%",
    end: "top 25%",
    scrub: true,
    // markers: true,
  }
});

gsap.from(".abouthubble h2", {
  y: 400,
  opacity: 0,
  scrollTrigger: {
    trigger: ".abouthubble",
    scroller: "body",
    start: "top 90%",
    end: "top 50%",
    scrub: 2,

    // markers: true,
  }
});

gsap.from(".abouthubble .firstp", {
  y: 200,
  opacity: 0,
  scrollTrigger: {
    trigger: ".abouthubble .firstp",
    scroller: "body",
    duration: 5,
    stagger: 5,
    start: "top 100%",
    end: "top 90%",
    scrub: 4,
    //markers: true,
  }
});
gsap.from(".abouthubble .secondtp", {
  y: 200,
  opacity: 0,
  scrollTrigger: {
    trigger: ".abouthubble .secondtp",
    scroller: "body",
    duration: 5,
    stagger: 5,
    start: "top 90%",
    end: "top 80%",
    scrub: 2,
    //markers: true,
  }
});

gsap.from(".abouthubble img", {
  y: 200,
  opacity: 0,
  scrollTrigger: {
    trigger: ".abouthubble img",
    scroller: "body",
    duration: 5,
    stagger: 5,
    start: "top 100%",
    end: "top 90%",
    scrub: 2,
    // markers: true,
  }
});

gsap.from(".abouthubble figcaption", {
  y: 200,
  opacity: 0,
  scrollTrigger: {
    trigger: ".abouthubble figcaption",
    scroller: "body",
    duration: 5,
    stagger: 5,
    start: "top 100%",
    end: "top 95%",
    scrub: 2,
    //markers: true,
  }
});

gsap.from(".abouthubble .thirddtp", {
  y: 200,
  opacity: 0,
  scrollTrigger: {
    trigger: ".abouthubble .thirddtp",
    scroller: "body",
    duration: 5,
    stagger: 5,
    start: "top 100%",
    end: "top 90%",
    scrub: 2,
    //  markers: true,
  }
});



gsap.from(".Partners h2", {
  y: 400,
  opacity: 0,
  scrollTrigger: {
    trigger: ".Partners",
    scroller: "body",
    start: "top 80%",
    end: "top 25%",
    scrub: 2,
    // markers: true,
  }
});
gsap.from(".Partners .partners_box", {
  y: 200,
  opacity: 0,
  scrollTrigger: {
    trigger: ".Partners",
    scroller: "body",
    start: "top 60%",
    end: "top 25%",
    scrub: true,
    //markers: true,
  }
});

var about_science = gsap.timeline();
gsap.from(".about_science h3", {
  y: 400,
  opacity: 0,
  scrollTrigger: {
    trigger: ".about_science",
    scroller: "body",
    start: "top 60%",
    end: "top 40%",
    scrub: true,
    //markers: true,
  }
});
gsap.from(".about_science .first_one", {
  y: 200,
  opacity: 0,
  scale: 0,
  scrollTrigger: {
    trigger: ".about_science .first_one",
    scroller: "body",
    start: "top 80%",
    end: "top 50%",
    scrub: true,
    //markers: true,

  }
});
gsap.from(".about_science .first_two", {
  y: 200,
  opacity: 0,
  scale: 0,
  scrollTrigger: {
    trigger: ".about_science .first_two",
    scroller: "body",
    start: "top 80%",
    end: "top 50%",
    scrub: true,
    // markers: true,

  }
});
gsap.from(".about_science .first_three", {
  y: 200,
  opacity: 0,
  scale: 0,
  scrollTrigger: {
    trigger: ".about_science .first_three",
    scroller: "body",
    start: "top 80%",
    end: "top 50%",
    scrub: true,
    //markers: true,

  }
});
gsap.from(".about_science .first_four", {
  y: 200,
  opacity: 0,
  scale: 0,
  scrollTrigger: {
    trigger: ".about_science .first_four",
    scroller: "body",
    start: "top 80%",
    end: "top 50%",
    scrub: true,
    //markers: true,

  }
});

gsap.from(".science_image img", {

  opacity: 0,
  duration: 3,
  scrollTrigger: {
    trigger: ".science_image",
    scroller: "body",
    start: "top 80%",
    end: "top 40%",
    scrub: true,
    //markers: true
  }
});
gsap.from(".p p", {

  opacity: 0,
  duration: 3,
  scrollTrigger: {
    trigger: ".science_image",
    scroller: "body",
    start: "top 80%",
    end: "top 40%",
    scrub: true,
    //markers: true
  }
});
gsap.from(".p .ic", {
  scale: 0,
  opacity: 0,
  duration: 4,
  scrollTrigger: {
    trigger: ".p .ic",
    scroller: "body",
    start: "top 90%",
    end: "top 80%",
    scrub: 5,
    //markers: true
  }
});



document.addEventListener('DOMContentLoaded', function () {
  var play = document.getElementById('play_video');
  var close = document.getElementById('close_video');
  var video = document.getElementById('vdt');
  var overlay = document.getElementById('overlay');
  var videox = document.getElementById('video-ppp');

  play.addEventListener('click', function () {

    video.style.display = 'block';
    overlay.style.display = "block";

  });

  close.addEventListener('click', function () {
    video.style.display = 'none';
    overlay.style.display = "none"
    videox.pause();
  });
});

document.addEventListener('DOMContentLoaded', function () {
  var playtwo = document.getElementById('play_videotwo');
  var closetwo = document.getElementById('close_videotwo');
  var videotwo = document.getElementById('vdttwo');
  var overlaytwo = document.getElementById('overlaytwo');
  var videoxtwo = document.getElementById('video-ppptwo');

  playtwo.addEventListener('click', function () {

    videotwo.style.display = 'block';
    overlaytwo.style.display = "block";

  });

  closetwo.addEventListener('click', function () {
    videotwo.style.display = 'none';
    overlaytwo.style.display = "none"
    videoxtwo.pause();
  });
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
setInterval(autoSlide, 3000);





$(document).ready(function () {
  $("#menuone").click(function () {
    $(".openmenu").slideDown(function () {
      $("#menuone").hide();
      $("#menutw").show();
    });
  });



  $("#menutw").click(function () {
    $(".openmenu").slideUp(function () {
      $("#menutw").hide();
      $("#menuone").show();

    });
  });

});



var tl = gsap.timeline();

// Function to check screen width
function checkScreenWidth() {
  return window.matchMedia("(min-width: 1150px)").matches;
}

function time() {
  var a = 0;
  setInterval(function () {
    a += Math.floor(Math.random() * 20);
    if (a < 100) {
      document.querySelector("#loader h1").innerHTML = a + "%";
    } else {
      a = 100;
      document.querySelector("#loader h1").innerHTML = a + "%";
    }
  }, 200);
  document.body.style.overflow = "hidden";
}

// Check screen width before applying loader animation

  tl.to("#loader h1", {
    delay: 1,
    duration: 1,
    onStart: time()
  });


tl.to("#loader", {
  top: "-100vh",
  delay: 0.5,
  duration: 1.5,
  onComplete: function () {
    document.body.style.overflow = "auto";
  }
});

// Check screen width before applying the following animations
if (checkScreenWidth()) {
  tl.from(".upnev .uplogo img, .upbt ul a, .upscr", {
    y: 100,
    duration: 0.5,
    opacity: 0,
    stagger: 0.3
  });
}

tl.from(".hero-text, .contentp p", {
  y: 100,
  scale: 0,
  opacity: 0,
  stagger: 0.3,
  duration: 0.5
});

tl.from(".buttonland div ", {
  y: 100,
  scale: 0,
  opacity: 0,
  stagger: 0.3,
  duration: 0.5
});

tl.from(".iconn ul a", {
  y: 100,
  scale: 0,
  opacity: 0,
  stagger: 0.3,
  duration: 0.5
});

tl.from(".heo_video_one", {
  y: -300,
  scale: 0,
  opacity: 0,
  stagger: 0.3,
  duration: 0.7
});

tl.from(".heo_video_two", {
  y: 300,
  scale: 0,
  opacity: 0,
  stagger: 0.3,
  duration: 0.7
});









