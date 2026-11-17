const image = document.querySelectorAll(".gellery-item img");

const lightbox =document.getElementById("lightbox");
const lightboximg =document.getElementById("lightbox-img");

const closeBtn = document.getElementById("close");
const prevBtn =document.getElementById("prev");
const nextBtn =document.getElementById("next");

let curretindex =0;

images.forEach((image, index) => {
    image.addEventListener("click", () => {
        currentIndex = index;
        showImage();
        lightbox.classList.add("active");
    });
});

