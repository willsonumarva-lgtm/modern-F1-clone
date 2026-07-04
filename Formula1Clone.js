document.addEventListener('DOMContentLoaded', () => {
    // 1. Smooth Scrolling for Navigation Links
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                // Offset calculation for the sticky nav bar
                const navHeight = document.querySelector('.f1-nav').offsetHeight;
                const targetPosition = targetSection.getBoundingClientRect().top + window.scrollY - navHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // 2. Watch Highlights Button Interaction
    const watchBtn = document.querySelector('.f1-btn');
    if (watchBtn) {
        watchBtn.addEventListener('click', () => {
            alert('Loading 2026 Bahrain GP Highlights... (This would launch the video player)');
        });
    }

    // 3. Scroll Reveal Animation for Page Sections
    const sections = document.querySelectorAll('.page-section');
    
    const revealOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('section-visible');
                observer.unobserve(entry.target); // Stops observing once animated
            }
        });
    }, revealOptions);

    sections.forEach(section => {
        // Add initial setup class for animation
        section.classList.add('section-hidden');
        sectionObserver.observe(section);
    });
});
