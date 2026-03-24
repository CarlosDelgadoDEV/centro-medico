document.addEventListener('DOMContentLoaded', () => {
    const carousels = document.querySelectorAll('.hero-side');
    
    carousels.forEach(carousel => {
        const images = carousel.querySelectorAll('.carousel-img');
        let currentIndex = 0;

        setInterval(() => {
            images[currentIndex].classList.remove('active');
            currentIndex = (currentIndex + 1) % images.length;
            images[currentIndex].classList.add('active');
        }, 4000); // Cambia cada 4 segundos
    });
});
