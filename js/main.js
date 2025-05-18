// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - 58;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Active navigation link highlighting
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.pageYOffset >= sectionTop - 30) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === current) {
            link.classList.add('active');
        }
    });
});



// Navbar collapse on mobile
const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
const menuToggle = document.getElementById('navbarNav');



// Add animation on scroll
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.card, .section-title, .btn');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight;
        
        if (elementPosition < screenPosition) {
            element.classList.add('animate__animated', 'animate__fadeInUp');
        }
    });
};

window.addEventListener('scroll', animateOnScroll);

$(document).ready(function() {
    var navbar = document.querySelector('nav')
    window.onscroll = function () {
        // pageYOffset or scrollY
        if (window.pageYOffset > 200) {
            navbar.classList.add('stickyadd')
        } else {
            navbar.classList.remove('stickyadd')
        }
    }
});

