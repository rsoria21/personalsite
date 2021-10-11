// Preload fade
$(window).on("load", function () {
  $(".loader-wrapper").fadeOut("slow");
});

// Preload End

// Skills carousel Start
let slideIndex = 1;
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

// Start Final Section
$("#slideshow > div:gt(0)").hide();

setInterval(function () {
  $("#slideshow > div:first")
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo("#slideshow");
}, 3000);
// End Final Section

// Start Final Section
$("#slideshow-two > div:gt(0)").hide();

setInterval(function () {
  $("#slideshow-two > div:first")
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo("#slideshow-two");
}, 3000);
// End Final Section
