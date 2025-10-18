// =====================================================
// Scroll Progress Bar
// =====================================================
const scrollProgress = document.getElementById('scrollProgress');

function updateScrollProgress() {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight - windowHeight;
    const scrolled = (window.pageYOffset / documentHeight) * 100;
    scrollProgress.style.width = scrolled + '%';
}

window.addEventListener('scroll', updateScrollProgress);

// =====================================================
// Floating Navigation
// =====================================================
const floatingNav = document.getElementById('floatingNav');
const navItems = document.querySelectorAll('.nav-item');
const sections = document.querySelectorAll('section[id]');

// Show floating nav after scrolling past hero
window.addEventListener('scroll', () => {
    if (window.scrollY > window.innerHeight * 0.3) {
        floatingNav.classList.add('visible');
    } else {
        floatingNav.classList.remove('visible');
    }

    updateActiveNavItem();
});

// Update active nav item based on scroll position
function updateActiveNavItem() {
    const scrollPosition = window.scrollY + 100;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            navItems.forEach(item => {
                item.classList.remove('active');
                if (item.getAttribute('data-section') === sectionId) {
                    item.classList.add('active');
                }
            });
        }
    });
}

// =====================================================
// Back to Top Button
// =====================================================
const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        backToTop.classList.add('visible');
    } else {
        backToTop.classList.remove('visible');
    }
});

backToTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// =====================================================
// Dark Mode Toggle
// =====================================================
const darkModeToggle = document.getElementById('darkModeToggle');
const htmlElement = document.documentElement;

// Check for saved theme preference or default to light mode
const currentTheme = localStorage.getItem('theme') || 'light';

// Apply the saved theme on page load
if (currentTheme === 'dark') {
    document.body.classList.add('dark-mode');
}

// Toggle dark mode
darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    // Save the user's preference
    const theme = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
    localStorage.setItem('theme', theme);
});

// =====================================================
// Smooth Scroll for Anchor Links
// =====================================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            const offset = 80;
            const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// =====================================================
// Particle Background Animation
// =====================================================
const canvas = document.getElementById('particleCanvas');
const ctx = canvas.getContext('2d');

// Set canvas size
function resizeCanvas() {
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

// Particle class
class Particle {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 1;
        this.speedX = Math.random() * 2 - 1;
        this.speedY = Math.random() * 2 - 1;
        this.opacity = Math.random() * 0.5 + 0.2;
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvas.width || this.x < 0) {
            this.speedX *= -1;
        }
        if (this.y > canvas.height || this.y < 0) {
            this.speedY *= -1;
        }
    }

    draw() {
        ctx.fillStyle = `rgba(37, 99, 235, ${this.opacity})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

// Create particles
const particles = [];
const particleCount = 80;

for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
}

// Animate particles
function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach(particle => {
        particle.update();
        particle.draw();
    });

    // Draw connections
    particles.forEach((a, i) => {
        particles.slice(i + 1).forEach(b => {
            const dx = a.x - b.x;
            const dy = a.y - b.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 120) {
                ctx.strokeStyle = `rgba(37, 99, 235, ${0.15 * (1 - distance / 120)})`;
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.moveTo(a.x, a.y);
                ctx.lineTo(b.x, b.y);
                ctx.stroke();
            }
        });
    });

    requestAnimationFrame(animateParticles);
}

animateParticles();

// =====================================================
// Intersection Observer for Animations
// =====================================================
const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections and cards for fade-in animation
const animateElements = document.querySelectorAll(
    '.tech-category, .timeline-item, .project-card, .education-card, .contact-card'
);

animateElements.forEach((el, index) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = `opacity 0.6s ease-out ${index * 0.1}s, transform 0.6s ease-out ${index * 0.1}s`;
    observer.observe(el);
});

// =====================================================
// Enhanced Parallax Effect on Hero Section
// =====================================================
const heroContent = document.querySelector('.hero-content');
let lastScrollTop = 0;

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Only apply parallax when in hero section
    if (scrollTop < window.innerHeight) {
        const parallaxSpeed = 0.3;
        heroContent.style.transform = `translateY(${scrollTop * parallaxSpeed}px)`;
        heroContent.style.opacity = 1 - (scrollTop / window.innerHeight) * 0.6;
    }

    lastScrollTop = scrollTop;
});

// =====================================================
// Project Card 3D Tilt Effect
// =====================================================
const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
    card.addEventListener('mousemove', function(e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = (y - centerY) / 15;
        const rotateY = (centerX - x) / 15;

        this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
    });

    card.addEventListener('mouseleave', function() {
        this.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
        this.style.transition = 'transform 0.5s ease';
    });

    card.addEventListener('mouseenter', function() {
        this.style.transition = 'none';
    });
});

// =====================================================
// Enhanced Tech Item Interactions
// =====================================================
const techItems = document.querySelectorAll('.tech-item');

techItems.forEach(item => {
    item.addEventListener('mouseenter', function() {
        // Create ripple effect
        const ripple = document.createElement('span');
        ripple.classList.add('tech-ripple');
        this.appendChild(ripple);

        setTimeout(() => ripple.remove(), 600);
    });
});

// Add tech ripple animation style
const techStyle = document.createElement('style');
techStyle.textContent = `
    .tech-item {
        position: relative;
        overflow: hidden;
    }

    .tech-ripple {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 0;
        height: 0;
        border-radius: 50%;
        background: rgba(37, 99, 235, 0.3);
        transform: translate(-50%, -50%);
        animation: tech-ripple-animation 0.6s ease-out;
    }

    @keyframes tech-ripple-animation {
        to {
            width: 200px;
            height: 200px;
            opacity: 0;
        }
    }
`;
document.head.appendChild(techStyle);

// =====================================================
// Enhanced Timeline Animation
// =====================================================
const timeline = document.querySelector('.timeline');
const timelineItems = document.querySelectorAll('.timeline-item');

window.addEventListener('scroll', () => {
    if (timeline) {
        const timelineRect = timeline.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        timelineItems.forEach((item, index) => {
            const itemRect = item.getBoundingClientRect();

            if (itemRect.top < windowHeight * 0.8) {
                item.style.opacity = '1';
                item.style.transform = 'translateX(0)';
            }
        });
    }
});

// Set initial state for timeline items
timelineItems.forEach((item, index) => {
    item.style.opacity = '0';
    item.style.transform = 'translateX(-30px)';
    item.style.transition = `opacity 0.6s ease-out ${index * 0.15}s, transform 0.6s ease-out ${index * 0.15}s`;
});

// =====================================================
// Add Ripple Effect to Buttons
// =====================================================
const buttons = document.querySelectorAll('.btn, .contact-card');

buttons.forEach(button => {
    button.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');

        this.appendChild(ripple);

        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// Add ripple styles
const rippleStyle = document.createElement('style');
rippleStyle.textContent = `
    .btn, .contact-card {
        position: relative;
        overflow: hidden;
    }

    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.5);
        transform: scale(0);
        animation: ripple-animation 0.6s ease-out;
        pointer-events: none;
    }

    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(rippleStyle);

// =====================================================
// Mouse Cursor Trail Effect (Optional Enhancement)
// =====================================================
let cursorTrail = [];
const trailLength = 20;

document.addEventListener('mousemove', (e) => {
    cursorTrail.push({ x: e.clientX, y: e.clientY, time: Date.now() });

    if (cursorTrail.length > trailLength) {
        cursorTrail.shift();
    }
});

// =====================================================
// Typing Effect for Code Block (Subtle Enhancement)
// =====================================================
const codeBlock = document.querySelector('.code-content code');
if (codeBlock) {
    const originalText = codeBlock.innerHTML;
    let charIndex = 0;

    // Store original and start with empty
    const startTyping = () => {
        if (charIndex < originalText.length) {
            codeBlock.innerHTML = originalText.substring(0, charIndex + 1);
            charIndex++;
            setTimeout(startTyping, 20);
        }
    };

    // Trigger when code block is in view
    const codeObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && charIndex === 0) {
                codeBlock.innerHTML = '';
                startTyping();
                codeObserver.disconnect();
            }
        });
    }, { threshold: 0.5 });

    codeObserver.observe(codeBlock);
}

// =====================================================
// Performance: Reduce animations on low-end devices
// =====================================================
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.querySelectorAll('*').forEach(el => {
        el.style.animation = 'none';
        el.style.transition = 'none';
    });
}

// =====================================================
// Console Easter Egg
// =====================================================
console.log(
    '%c👋 Hey there, fellow developer!',
    'font-size: 20px; font-weight: bold; color: #2563eb;'
);
console.log(
    '%cInterested in working together? Let\'s connect!',
    'font-size: 14px; color: #6b7280;'
);
console.log(
    '%c📧 safeer1073@gmail.com',
    'font-size: 14px; color: #2563eb;'
);
console.log(
    '%c💼 https://www.linkedin.com/in/safeerahmad-sa',
    'font-size: 14px; color: #2563eb;'
);

// =====================================================
// Loading Animation Complete
// =====================================================
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
    console.log('%c✨ Portfolio loaded successfully!', 'font-size: 14px; color: #10b981;');

    // Trigger initial scroll updates
    updateScrollProgress();
    updateActiveNavItem();
});

// =====================================================
// Keyboard Navigation Enhancement
// =====================================================
document.addEventListener('keydown', (e) => {
    // Press 'T' to scroll to top
    if (e.key === 't' || e.key === 'T') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Press 'D' to toggle dark mode
    if (e.key === 'd' || e.key === 'D') {
        darkModeToggle.click();
    }
});

// =====================================================
// Page Visibility API - Pause animations when tab is hidden
// =====================================================
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        // Pause heavy animations when tab is not visible
        canvas.style.display = 'none';
    } else {
        canvas.style.display = 'block';
    }
});
