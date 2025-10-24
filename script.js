// Counter Animation for Stats
document.addEventListener('DOMContentLoaded', function() {
    const stats = document.querySelectorAll('[data-count]');

    const animateCount = (element) => {
        const target = parseInt(element.getAttribute('data-count'));
        const duration = 2000;
        const step = target / (duration / 16);
        let current = 0;

        const updateCount = () => {
            current += step;
            if (current < target) {
                element.textContent = Math.floor(current);
                requestAnimationFrame(updateCount);
            } else {
                element.textContent = target;
            }
        };

        updateCount();
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCount(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    stats.forEach(stat => observer.observe(stat));
});

// FAQ Accordion Toggle
function initFAQ() {
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            const answer = this.nextElementSibling;
            const isActive = this.classList.contains('active');

            // Close all FAQs
            document.querySelectorAll('.faq-question').forEach(q => {
                q.classList.remove('active');
                q.nextElementSibling.classList.remove('show');
            });

            // Open clicked FAQ if it wasn't active
            if (!isActive) {
                this.classList.add('active');
                answer.classList.add('show');
            }
        });

        // Keyboard accessibility
        question.addEventListener('keypress', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
    });
}

// Filter functionality for Student Life page
function initFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const newsCards = document.querySelectorAll('.news-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');

            // Update active button
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');

            // Filter cards
            newsCards.forEach(card => {
                const category = card.getAttribute('data-category');
                if (filter === 'all' || category === filter) {
                    card.style.display = 'block';
                    card.style.animation = 'fadeIn 0.5s ease';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
}

// Form Validation for Registration
function initRegistrationForm() {
    const form = document.getElementById('registrationForm');
    if (!form) return;

    const inputs = form.querySelectorAll('input, select');

    // Real-time validation
    inputs.forEach(input => {
        input.addEventListener('blur', () => validateField(input));
        input.addEventListener('input', () => {
            if (input.classList.contains('is-invalid')) {
                validateField(input);
            }
        });
    });

    // Form submission
    form.addEventListener('submit', function(e) {
        e.preventDefault();

        let isValid = true;
        inputs.forEach(input => {
            if (!validateField(input)) {
                isValid = false;
            }
        });

        if (isValid) {
            showSuccessMessage();
            form.reset();
            inputs.forEach(input => {
                input.classList.remove('is-valid', 'is-invalid');
            });
        } else {
            // Focus first invalid field
            const firstInvalid = form.querySelector('.is-invalid');
            if (firstInvalid) {
                firstInvalid.focus();
            }
        }
    });
}

function validateField(field) {
    const value = field.value.trim();
    const fieldName = field.name;
    let isValid = true;
    let message = '';

    // Clear previous validation
    field.classList.remove('is-valid', 'is-invalid');
    const feedback = field.nextElementSibling;
    if (feedback && feedback.classList.contains('invalid-feedback')) {
        feedback.remove();
    }

    // Validation rules
    switch(fieldName) {
        case 'fullName':
            if (value.length < 3) {
                isValid = false;
                message = 'Full name must be at least 3 characters';
            }
            break;

        case 'email':
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(value)) {
                isValid = false;
                message = 'Please enter a valid email address';
            }
            break;

        case 'phone':
            const phonePattern = /^\+?[\d\s\-()]{10,}$/;
            if (!phonePattern.test(value)) {
                isValid = false;
                message = 'Please enter a valid phone number';
            }
            break;

        case 'program':
            if (!value) {
                isValid = false;
                message = 'Please select a program';
            }
            break;

        case 'studyMode':
            if (!value) {
                isValid = false;
                message = 'Please select a study mode';
            }
            break;

        case 'intake':
            if (!value) {
                isValid = false;
                message = 'Please select an intake date';
            }
            break;

        case 'password':
            if (value.length < 8) {
                isValid = false;
                message = 'Password must be at least 8 characters';
            }
            break;

        case 'confirmPassword':
            const password = document.querySelector('[name="password"]').value;
            if (value !== password) {
                isValid = false;
                message = 'Passwords do not match';
            }
            break;

        case 'terms':
            if (!field.checked) {
                isValid = false;
                message = 'You must accept the terms and conditions';
            }
            break;
    }

    // Apply validation state
    if (field.type === 'checkbox') {
        const formCheck = field.closest('.form-check');
        if (isValid) {
            formCheck.classList.remove('is-invalid');
            formCheck.classList.add('is-valid');
        } else {
            formCheck.classList.remove('is-valid');
            formCheck.classList.add('is-invalid');
            const feedbackDiv = document.createElement('div');
            feedbackDiv.className = 'invalid-feedback d-block';
            feedbackDiv.textContent = message;
            formCheck.appendChild(feedbackDiv);
        }
    } else {
        if (isValid && value) {
            field.classList.add('is-valid');
        } else if (!isValid) {
            field.classList.add('is-invalid');
            const feedbackDiv = document.createElement('div');
            feedbackDiv.className = 'invalid-feedback';
            feedbackDiv.textContent = message;
            field.parentNode.appendChild(feedbackDiv);
        }
    }

    return isValid;
}

function showSuccessMessage() {
    const successAlert = document.createElement('div');
    successAlert.className = 'alert alert-success alert-custom mt-3';
    successAlert.innerHTML = '<i class="fas fa-check-circle me-2"></i><strong>Success!</strong> Your registration has been submitted. We will contact you shortly.';

    const form = document.getElementById('registrationForm');
    form.parentNode.insertBefore(successAlert, form);

    setTimeout(() => {
        successAlert.style.transition = 'opacity 0.5s ease';
        successAlert.style.opacity = '0';
        setTimeout(() => successAlert.remove(), 500);
    }, 5000);

    // Scroll to success message
    successAlert.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

// Contact Form Validation
function initContactForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const name = form.querySelector('[name="name"]');
        const email = form.querySelector('[name="email"]');
        const subject = form.querySelector('[name="subject"]');
        const message = form.querySelector('[name="message"]');

        let isValid = true;

        // Validate all fields
        [name, email, subject, message].forEach(field => {
            field.classList.remove('is-invalid', 'is-valid');
            const feedback = field.nextElementSibling;
            if (feedback && feedback.classList.contains('invalid-feedback')) {
                feedback.remove();
            }
        });

        // Name validation
        if (name.value.trim().length < 2) {
            isValid = false;
            name.classList.add('is-invalid');
            addFeedback(name, 'Name must be at least 2 characters');
        } else {
            name.classList.add('is-valid');
        }

        // Email validation
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email.value)) {
            isValid = false;
            email.classList.add('is-invalid');
            addFeedback(email, 'Please enter a valid email');
        } else {
            email.classList.add('is-valid');
        }

        // Subject validation
        if (subject.value.trim().length < 3) {
            isValid = false;
            subject.classList.add('is-invalid');
            addFeedback(subject, 'Subject must be at least 3 characters');
        } else {
            subject.classList.add('is-valid');
        }

        // Message validation
        if (message.value.trim().length < 10) {
            isValid = false;
            message.classList.add('is-invalid');
            addFeedback(message, 'Message must be at least 10 characters');
        } else {
            message.classList.add('is-valid');
        }


        if (isValid) {
            showContactSuccess();
            form.reset();
            form.querySelectorAll('.is-valid, .is-invalid').forEach(el => {
                el.classList.remove('is-valid', 'is-invalid');
            });
        }
    });
}

function addFeedback(field, message) {
    const feedbackDiv = document.createElement('div');
    feedbackDiv.className = 'invalid-feedback';
    feedbackDiv.textContent = message;
    field.parentNode.appendChild(feedbackDiv);
}

function showContactSuccess() {
    const successAlert = document.createElement('div');
    successAlert.className = 'alert alert-success alert-custom';
    successAlert.innerHTML = '<i class="fas fa-check-circle me-2"></i><strong>Message Sent!</strong> Thank you for contacting us. We will respond within 24 hours.';

    const form = document.getElementById('contactForm');
    form.parentNode.insertBefore(successAlert, form);

    setTimeout(() => {
        successAlert.style.transition = 'opacity 0.5s ease';
        successAlert.style.opacity = '0';
        setTimeout(() => successAlert.remove(), 500);
    }, 5000);

    successAlert.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

// Active navigation link
function setActiveNav() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.classList.remove('active');
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        }
    });
}

function initScrollIndicator() {
    const indicator = document.querySelector('.scroll-indicator');
    const hero = document.querySelector('.hero-section');
    if (!indicator || !hero) return;
    indicator.addEventListener('click', () => {
        // Find the next section after hero
        let next = hero.nextElementSibling;
        while (next && next.tagName.toLowerCase() !== 'section') {
            next = next.nextElementSibling;
        }
        if (next) {
            next.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
}

// Initialize all functions
document.addEventListener('DOMContentLoaded', function() {
    setActiveNav();
    initFAQ();
    initFilters();
    initRegistrationForm();
    initContactForm();
    initScrollIndicator();

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
});