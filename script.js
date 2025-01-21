document.addEventListener('DOMContentLoaded', function () {
    const navbar = document.querySelector('header');
    const menuToggle = document.querySelector('.menu-toggle');
    const navigation = document.querySelector('.navigation');
    const closeBtn = document.querySelector('.close-btn');

    // Scroll Navbar
    window.addEventListener('scroll', function () {
        if (window.scrollY > 0) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Smooth Scrolling
    document.querySelectorAll('.navigation ul li a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            if (this.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                const targetId = this.getAttribute('href').substring(1);
                const targetSection = document.getElementById(targetId);
                if (targetSection) {
                    targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    navigation.classList.remove('active');
                    menuToggle.classList.remove('active');
                }
            }
        });
    });

    // Toggle Menu
    menuToggle.addEventListener('click', function () {
        navigation.classList.toggle('active');
    });

    // Close Menu
    if (closeBtn) {
        closeBtn.addEventListener('click', function () {
            navigation.classList.remove('active');
        });
    }
});
