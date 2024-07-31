// scripts.js

function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");

}

document.addEventListener('DOMContentLoaded', () => {
    const scrollToTopButton = document.getElementById('scrollToTop');

    // Show or hide the button based on scroll position
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) { // Show button after scrolling 300px
            scrollToTopButton.style.display = 'block';
        } else {
            scrollToTopButton.style.display = 'none';
        }
    });

    // Smooth scroll to top
    scrollToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.element');

    // Create an IntersectionObserver instance
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    }, {
        threshold: 0.3  // Trigger the callback when 10% of the element is visible
    });

    // Observe each element
    elements.forEach(element => {
        observer.observe(element);
    });
});

