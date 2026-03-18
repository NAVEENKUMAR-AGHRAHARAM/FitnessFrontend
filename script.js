/**
 * IRON PUMP - Professional Fitness Solutions
 * Minimalist Script
 */

document.addEventListener('DOMContentLoaded', () => {
    /* --- CONTACT FORM HANDLER --- */
    const contactForm = document.getElementById('contactForm');
    const formFeedback = document.getElementById('formFeedback');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalBtnText = submitBtn.textContent;
            
            // UI Feedback
            submitBtn.disabled = true;
            submitBtn.textContent = 'SENDING...';
            
            // Simulate API Call
            setTimeout(() => {
                submitBtn.textContent = 'INQUIRY SENT';
                formFeedback.textContent = 'Thank you for your interest. Our administration will contact you within 24 hours.';
                formFeedback.style.color = '#fff';
                
                contactForm.reset();
                
                // Reset button state
                setTimeout(() => {
                    submitBtn.disabled = false;
                    submitBtn.textContent = originalBtnText;
                    formFeedback.textContent = '';
                }, 4000);
            }, 1000);
        });
    }
});

