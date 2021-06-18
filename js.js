/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

//Slide Home page

var slideIndex = 0;


function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {
  	slideIndex = 1;
  }    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 3000); // Change image every 2 seconds
}

// Google Maps

/*Google Maps*/

// Initialize and add the map
function initMap() {
  // The location of Uluru
  const uluru = { lat: 53.2707, lng: -9.062691 };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 14,
    center: uluru,
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: uluru,
    map: map,
  });
}

//BUTTONS

document.getElementById("btn-book-now").addEventListener("click", bookNowPage);
document.getElementById("btn-rooms").addEventListener("click", bookNowPage);

  function bookNowPage() {
  window.location.replace("bookNow.html");
}

  function postPage() {
  window.location.replace("postPage.html");
}

  function homepage() {
  window.location.replace("index.html");
}

  function ourRooms() {
  window.location.replace("ourRooms.html");
}




///// OUR ROOMS page

var slideIndexRooms = 1;
showSlidesRooms(slideIndexRooms);

// Next/previous controls
function plusSlides(n) {
  showSlidesRooms(slideIndexRooms += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlidesRooms(slideIndexRooms = n);
}

function showSlidesRooms(n) {
  var i;
  var slides = document.getElementsByClassName("roomSlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndexRooms = 1}
  if (n < 1) {slideIndexRooms = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndexRooms-1].style.display = "block";
  dots[slideIndexRooms-1].className += " active";
  // captionText.innerHTML = dots[slideIndexRooms-1].alt;
}

// Our Rooms customer reviews

var reviewsSlideIndex = 1;
showReviewsSlides(reviewsSlideIndex);

function plusReviewSlides(n) {
  showReviewsSlides(reviewsSlideIndex += n);
}

function reviewsCurrentSlide(n) {
  showReviewsSlides(reviewsSlideIndex = n);
}

function showReviewsSlides(n) {
  var i;
  var slides = document.getElementsByClassName("reviews-Slides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {reviewsSlideIndex = 1}
    if (n < 1) {reviewsSlideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active-review", "");
    }
  slides[reviewsSlideIndex-1].style.display = "block";
  dots[reviewsSlideIndex-1].className += " active";
}


// Contact us form

$(document).ready(function() {
  $("#contact-form").submit(function(event) {

    var is_error = false;
    var error_count = 0;

    var fullname = $("#fname").val();
    if (fullname == "") {
      $("input#fname").css("border-color", "#ff3333");
      is_error = true;
      error_count += 1;
    }

    var email = $("#lname").val();
    if (email == "") {
      $("input#lname").css("border-color", "#ff3333");
      is_error = true;
      error_count += 1;
    }

    var description = $("#description").val();
    if (description == "") {
      $("textarea#description").css("border-color", "#ff3333");
      is_error = true;
      error_count += 1;
    }

    if (is_error == true) {
      $("span#error-count").text(error_count);
      $("p#error-list").css("display", "block");
      event.preventDefault();
    }

    $("#fullname").focusout(function(){
      $("input#fullname").css("border-color", "#dddddd");
    });
    $("#email").focusout(function(){
      $("input#email").css("border-color", "#dddddd");
    });
    $("#description").focusout(function(){
      $("textarea#description").css("border-color", "#dddddd");
    });
  });
});









