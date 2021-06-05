/********************
    Update related
********************/

var updateIndex = 1;
    showSlides(updateIndex);

function plusSlides(n) {
    showSlides(updateIndex += n);
}

function currentSlide(n) {
    showSlides(updateIndex = n);
}

//controls slides on site
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("updateCard");

    if (n > slides.length) { updateIndex = 1 }
    if (n < 1) { updateIndex = slides.length }

    for (i = 0; i < slides.length; i++) 
    {
        slides[i].style.display = "none";
    }

    slides[updateIndex-1].style.display = "block";
}

updateSlideShow();

//Updates the slideshow to have a new update every few seconds
function updateSlideShow()
{
    setTimeout(updateSlideShow, 5500); //update every 5.5 seconds

    plusSlides(1);
}

/********************
    Gallery related
********************/

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");

    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length}

    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }

    x[slideIndex-1].style.display = "block";
}

var myIndex = 0;
carousel();

//updates gallery to have a new image every several seconds
function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");

    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }

    myIndex++;
    if (myIndex > x.length) { myIndex = 1 }
    x[myIndex-1].style.display = "block";

    setTimeout(carousel, 10000); // Change image every 10 seconds
}
