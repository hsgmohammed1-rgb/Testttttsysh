function createStars() {
    const starsContainer = document.querySelector('.stars-container');
    const numberOfStars = window.innerWidth < 768 ? 100 : 200;

    // Create regular stars
    for (let i = 0; i < numberOfStars; i++) {
        const star = document.createElement('div');
        
        // Random size
        const sizeRandom = Math.random();
        if (sizeRandom < 0.6) {
            star.className = 'star small';
        } else if (sizeRandom < 0.9) {
            star.className = 'star medium';
        } else {
            star.className = 'star large';
        }
        
        // Random position
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        
        // Random twinkle duration
        const duration = Math.random() * 6 + 2;
        star.style.animation = `twinkle ${duration}s infinite ease-in-out`;
        
        starsContainer.appendChild(star);
    }

    // Create shooting stars
    setInterval(() => {
        const shootingStar = document.createElement('div');
        shootingStar.className = 'shooting-star';
        
        // Random position and angle
        const startY = Math.random() * 50;
        const angle = Math.random() * 20 - 10;
        
        shootingStar.style.top = `${startY}%`;
        shootingStar.style.setProperty('--rotation-angle', `${angle}deg`);
        shootingStar.style.setProperty('--shooting-duration', `${Math.random() * 2 + 1}s`);
        
        starsContainer.appendChild(shootingStar);
        
        // Remove shooting star after animation
        setTimeout(() => {
            shootingStar.remove();
        }, 3000);
    }, 4000);
}

// Initialize stars when document loads
document.addEventListener('DOMContentLoaded', createStars);
