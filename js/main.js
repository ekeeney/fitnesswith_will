// ========================================
// Fitness With Will - Main JavaScript
// ========================================

// Smooth scroll for navigation links
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

// Handle contact form submission
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Get form data
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const message = document.getElementById('message').value;

        // Validate email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showFormMessage('Please enter a valid email address.', 'error');
            return;
        }

        // Simple client-side validation
        if (!name.trim() || !message.trim()) {
            showFormMessage('Please fill in all required fields.', 'error');
            return;
        }

        // Here you would typically send the form data to a server
        // For now, we'll just show a success message
        showFormMessage('Thank you for reaching out! Will will get back to you soon.', 'success');

        // Reset form
        contactForm.reset();

        // Clear message after 5 seconds
        setTimeout(() => {
            document.getElementById('formMessage').style.display = 'none';
        }, 5000);
    });
}

function showFormMessage(message, type) {
    const messageElement = document.getElementById('formMessage');
    messageElement.textContent = message;
    messageElement.className = `form-message ${type}`;
    messageElement.style.display = 'block';
}

// Update active nav link on scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    // Add any initialization code here
    console.log('Fitness With Will - Ready to help you transform!');
});
