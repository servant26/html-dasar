const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const carousel = document.querySelector('.carousel');
const slides = document.querySelectorAll('.slide');
const slideWidth = slides[0].offsetWidth;
let currentIndex = 0;
const slideCount = slides.length;
const maxIndex = slideCount - 1;

prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateCarousel();
    }
});

nextBtn.addEventListener('click', () => {
    if (currentIndex < maxIndex) {
        currentIndex++;
        updateCarousel();
    }
});

function updateCarousel() {
    const offset = -currentIndex * slideWidth;
    carousel.style.transform = `translateX(${offset}px)`;
}

// Inisialisasi awal
updateCarousel();