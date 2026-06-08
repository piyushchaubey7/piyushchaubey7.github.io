
$(document).ready(function () {

  $(window).scroll(function () {

    // Sticky Navbar
    if (this.scrollY > 20) {
      $("#nav-menu").addClass("sticky");
    } else {
      $("#nav-menu").removeClass("sticky");
    }

    // Scroll Up Button
    if (this.scrollY > 500) {
      $(".scroll-up-btn").addClass("show");
    } else {
      $(".scroll-up-btn").removeClass("show");
    }

  });

  // Scroll To Top
  $(".scroll-up-btn").click(function () {
    $("html").animate({ scrollTop: 0 });
    $("html").css("scrollBehavior", "auto");
  });

  // Smooth Scroll
  $("#nav-menu .menu li a").click(function () {
    $("html").css("scrollBehavior", "smooth");
  });

  // Mobile Menu Toggle
  $(".menu-btn").click(function () {
    $("#nav-menu .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });

  // Typing Animation
  var typed = new Typed(".typing", {
    strings: [
      "Automation Test Engineer",
      "Selenium Automation Engineer",
      "QA Engineer",
      "Software Tester"
    ],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
  });

  var typed2 = new Typed(".typing-2", {
    strings: [
      "Automation Test Engineer",
      "Selenium Automation Engineer",
      "QA Engineer",
      "Software Tester"
    ],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
  });

  // Owl Carousel
  $(".carousel").owlCarousel({
    margin: 20,
    loop: true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,

    responsive: {
      0: {
        items: 1,
        nav: false
      },

      600: {
        items: 2,
        nav: false
      },

      1000: {
        items: 3,
        nav: false
      }
    }
  });

});

// Resume Button 1
const resumeBtn1 = document.querySelector(".googleDrive");

if (resumeBtn1) {
  resumeBtn1.addEventListener("click", function () {
    window.open(
      "https://drive.google.com/file/d/1CQBobTUFtQv6riQWsiciJeapuTit9jmJ/view?usp=sharing",
      "_blank"
    );
  });
}

// Resume Button 2
const resumeBtn2 = document.querySelector(".Drivegoogle");

if (resumeBtn2) {
  resumeBtn2.addEventListener("click", function () {
    window.open(
      "https://drive.google.com/file/d/1CQBobTUFtQv6riQWsiciJeapuTit9jmJ/view?usp=sharing",
      "_blank"
    );
  });
}
```
