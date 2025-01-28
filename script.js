let index = 0;

function moveSlides() {
    // Liste des sélecteurs de carrousels
    const carrousels = [
        { items: '.carrousel-item', wrapper: '.carrousel-wrapper' },
        { items: '.carrousel-item2', wrapper: '.carrousel-wrapper2' },
        { items: '.carrousel-item3', wrapper: '.carrousel-wrapper3' },
        { items: '.carrousel-item4', wrapper: '.carrousel-wrapper4' },
        { items: '.carrousel-item5', wrapper: '.carrousel-wrapper5' },
        { items: '.carrousel-item6', wrapper: '.carrousel-wrapper6' },
        { items: '.carrousel-item7', wrapper: '.carrousel-wrapper7' }

    ];

    index = (index + 1); // Passe à l'index suivant.

    carrousels.forEach((carrousel) => {
        const slides = document.querySelectorAll(carrousel.items);
        const totalSlides = slides.length;

        const currentIndex = index % totalSlides; // Boucle infinie dans les limites des slides
        const wrapper = document.querySelector(carrousel.wrapper);

        // Réinitialise l'opacité de toutes les images
        slides.forEach((slide) => {
            slide.style.opacity = '0'; // Cache toutes les images
        });

        // Affiche l'image active avec un effet de fade-in
        slides[currentIndex].style.opacity = '1';

        // Applique la transformation pour déplacer le carrousel
        wrapper.style.transform = `translateX(${-currentIndex * 100}%)`;
    });
}

// Démarre l'animation automatique pour tous les carrousels
setInterval(moveSlides, 4000); // Change d'image toutes les 4 secondes
