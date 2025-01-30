// Toggle Mobile Menu
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.navigation ul');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Smooth Scroll Effect
document.querySelectorAll('.navigation a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });

        // Close mobile menu after clicking a link
        if (window.innerWidth <= 768) {
            navMenu.classList.remove('active');
        }
    });
});

// Button Click Effects
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', () => {
        alert(`Button '${button.innerText}' clicked!`);
    });
});
