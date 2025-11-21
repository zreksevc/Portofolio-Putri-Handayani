// --- assets/js/main.js ---

document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. Loader & Page Load ---
    const loader = document.getElementById('loader');
    if (loader) {
        document.body.style.overflow = 'hidden'; 
        setTimeout(() => {
            loader.style.opacity = '0';
            setTimeout(() => {
                loader.style.display = 'none';
                document.body.style.overflow = 'auto'; 
            }, 500);
        }, 1500); 
    }

    // --- 2. Hamburger Menu Toggle ---
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // --- 3. Theme Toggle (Mode Terang/Gelap) ---
    const themeToggle = document.getElementById('themeToggle');
    const body = document.body;

    const currentTheme = localStorage.getItem('theme') || 'dark';
    body.classList.add(currentTheme + '-mode');
    themeToggle.innerHTML = currentTheme === 'dark' ? '<span class="icon">☀️</span>' : '<span class="icon">🌙</span>';

    themeToggle.addEventListener('click', () => {
        const isDark = body.classList.contains('dark-mode');
        body.classList.remove(isDark ? 'dark-mode' : 'light-mode');
        body.classList.add(isDark ? 'light-mode' : 'dark-mode');
        localStorage.setItem('theme', isDark ? 'light' : 'dark');
        themeToggle.innerHTML = isDark ? '<span class="icon">🌙</span>' : '<span class="icon">☀️</span>';
    });


    // --- 4. Typed Text Effect Inisialisasi ---
    const typedElement = document.querySelector('.typed-text');
    // Pastikan fungsi typeText ada (dari animations.js)
    if (typedElement && typeof typeText === 'function') {
        const textArray = ["Web3 Developer", "Blockchain Enthusiast", "Smart Contract Auditor", "UI/UX Designer"];
        typeText(typedElement, textArray); 
    }
    
    // --- 5. Animasi Scroll (animate-on-scroll) ---
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1 
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); 
            }
        });
    }, observerOptions);

    document.querySelectorAll('.animate-on-scroll').forEach(element => {
        observer.observe(element);
    });

    // --- 6. Web3 Wallet Connection ---
    const connectBtn = document.getElementById('connectWalletBtn');
    // Pastikan fungsi connectWallet ada (dari utils.js)
    if (connectBtn && typeof connectWallet === 'function') {
        connectBtn.addEventListener('click', connectWallet);
    }
});