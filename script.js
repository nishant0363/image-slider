let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelector('.slides');
    const totalSlides = slides.children.length;
    if (index >= totalSlides) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = totalSlides - 1;
    } else {
        currentSlide = index;
    }
    const offset = -currentSlide * 100;
    slides.style.transform = `translateX(${offset}%)`;
}

function moveSlides(step) {
    showSlide(currentSlide + step);
}

// Initial display
showSlide(currentSlide);
