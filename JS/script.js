// navbar hide with scroll
// var prevScrollpos = window.pageYOffset;
// window.onscroll = function () {
//   var currentScrollPos = window.pageYOffset;
//   if (prevScrollpos > currentScrollPos) {
//     document.getElementById("myTopnav").style.top = "0";
//   } else {
//     document.getElementById("myTopnav").style.top = "-50px";
//   }
//   prevScrollpos = currentScrollPos;
// };

// responsive navbar
// function myFunction() {
//   var x = document.getElementById("myTopnav");
//   if (x.className === "navbar") {
//     x.className += " responsive";
//   } else {
//     x.className = "navbar";
//   }
// }

// skills slider
// var slideIndex = 0;
// carousel();

// function carousel() {
//   var i;
//   var x = document.getElementsByClassName("mySlides");
//   for (i = 0; i < x.length; i++) {
//     x[i].style.display = "none";
//   }
//   slideIndex++;
//   if (slideIndex > x.length) {
//     slideIndex = 1;
//   }
//   x[slideIndex - 1].style.display = "block";
//   setTimeout(carousel, 3000);
// }

// Preload Start
// Preload fade
$(window).on("load", function () {
  $(".loader-wrapper").fadeOut("slow");
});

// Preload End

// Skills carousel Start
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

// Skills carousel End

// smooth transition

// Tabs Start
const tabs = document.querySelectorAll("[data-tab-target]");
const tabContents = document.querySelectorAll("[data-tab-content]");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.tabTarget);
    tabContents.forEach((tabContent) => {
      tabContent.classList.remove("active");
    });
    tabs.forEach((tab) => {
      tab.classList.remove("active");
    });
    tab.classList.add("active");
    target.classList.add("active");
  });
});

// Tabs End
