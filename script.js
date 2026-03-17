document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Simple Form Submission (Mock)
    const contactForm = document.getElementById('contactForm');
    const feedback = document.getElementById('formFeedback');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Show loading state
            const btn = contactForm.querySelector('button');
            const originalText = btn.textContent;
            btn.textContent = 'Sending...';
            btn.disabled = true;

            // Simulate API call
            setTimeout(() => {
                btn.textContent = originalText;
                btn.disabled = false;
                
                feedback.style.color = '#00ff88';
                feedback.textContent = 'Thanks! We will get back to you soon.';
                
                contactForm.reset();

                // Clear feedback after 5 seconds
                setTimeout(() => {
                    feedback.textContent = '';
                }, 5000);
            }, 1500);
        });
    }

    // Header Scroll Effect
    const header = document.querySelector('.glass-nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.padding = '10px 30px';
            header.style.backgroundColor = 'rgba(10, 10, 12, 0.95)';
        } else {
            header.style.padding = '15px 40px';
            header.style.backgroundColor = 'rgba(20, 20, 24, 0.8)';
        }
    });
});
