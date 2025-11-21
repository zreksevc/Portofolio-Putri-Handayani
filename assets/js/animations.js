// --- assets/js/animations.js ---

/**
 * Fungsi untuk efek mengetik (Typed Text Effect)
 */
function typeText(element, words, delay = 100, pause = 1500) {
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
        const currentWord = words[wordIndex];
        
        if (isDeleting) {
            charIndex--;
        } else {
            charIndex++;
        }

        element.textContent = currentWord.substring(0, charIndex);

        let typeSpeed = delay;

        if (isDeleting) {
            typeSpeed /= 2; 
        }

        if (!isDeleting && charIndex === currentWord.length) {
            typeSpeed = pause;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            typeSpeed = delay;
        }

        setTimeout(type, typeSpeed);
    }
    
    type();
}