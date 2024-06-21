let slideImg = document.getElementById("slide-img");
let leftBtn = document.getElementById("left-btn");
let rightBtn = document.getElementById("right-btn");

let currentSlide = 0;

const imgGallery = [
    "https://spaceplace.nasa.gov/all-about-pluto/en/pluto_new_horizons.en.png",
    "https://spaceplace.nasa.gov/jupiter/en/jupiter1.en.jpg",
    "https://spaceplace.nasa.gov/jupiter/en/jupiter4.en.jpg",
    "https://spaceplace.nasa.gov/jupiter/en/jupiter5.en.jpg",
]

window.onload = slideImg.src = imgGallery[0];

leftBtn.addEventListener("click", prevSlide);
rightBtn.addEventListener("click", nextSlide);


function prevSlide() {
    if (currentSlide === 0) {
        currentSlide = imgGallery.length - 1;
    } else {
        currentSlide--
    }
    slideImg.src = imgGallery[currentSlide];
}

function nextSlide() {
    if (currentSlide < imgGallery.length - 1){
        currentSlide++
    } else {
        currentSlide = 0;
    }
    slideImg.src=imgGallery[currentSlide];
}