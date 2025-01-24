let index = 0;

function moveSlide() {
    const slides = document.querySelectorAll('.carrousel-item');
    const totalSlides = slides.length;

    index = (index + 1) % totalSlides;  // Passe à l'index suivant, avec une boucle infinie.

    const wrapper = document.querySelector('.carrousel-wrapper');

    // Réinitialise l'opacité de toutes les images
    slides.forEach((slide) => {
        slide.style.opacity = '0'; // Cache toutes les images
    });

    // Affiche l'image active avec un effet de fade-in
    slides[index].style.opacity = '1';

    // Applique la transformation pour déplacer le carrousel
    wrapper.style.transform = `translateX(${-index * 100}%)`;
}
function moveSlide2() {
    const slides = document.querySelectorAll('.carrousel-item2');
    const totalSlides = slides.length;

    index = (index + 1) % totalSlides;  // Passe à l'index suivant, avec une boucle infinie.

    const wrapper = document.querySelector('.carrousel-wrapper2');

    // Réinitialise l'opacité de toutes les images
    slides.forEach((slide) => {
        slide.style.opacity = '0'; // Cache toutes les images
    });

    // Affiche l'image active avec un effet de fade-in
    slides[index].style.opacity = '1';

    // Applique la transformation pour déplacer le carrousel
    wrapper.style.transform = `translateX(${-index * 100}%)`;
}
function moveSlide3() {
    const slides = document.querySelectorAll('.carrousel-item3');
    const totalSlides = slides.length;

    index = (index + 1) % totalSlides;  // Passe à l'index suivant, avec une boucle infinie.

    const wrapper = document.querySelector('.carrousel-wrapper3');

    // Réinitialise l'opacité de toutes les images
    slides.forEach((slide) => {
        slide.style.opacity = '0'; // Cache toutes les images
    });

    // Affiche l'image active avec un effet de fade-in
    slides[index].style.opacity = '1';

    // Applique la transformation pour déplacer le carrousel
    wrapper.style.transform = `translateX(${-index * 100}%)`;
}

// Démarre l'animation automatique
setInterval(moveSlide, 4000); // Change d'image toutes les 4 secondes
setInterval(moveSlide2, 4000); // Change d'image toutes les 4 secondes
setInterval(moveSlide3, 4000); // Change d'image toutes les 4 secondes