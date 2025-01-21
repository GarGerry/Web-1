document.addEventListener('DOMContentLoaded', function () {
    const navbar = document.querySelector('.header');
    const menuToggle = document.querySelector('.menu-toggle');
    const navigation = document.querySelector('.navigation');

    // Menambahkan kelas "scrolled" saat scroll
    window.addEventListener('scroll', function() {
        if (window.scrollY > 0) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    const sections = document.querySelectorAll('.section');
    let currentIndex = 0;
    const totalSections = sections.length;

    // Fungsi untuk scroll ke section tertentu
    function scrollToSection(index) {
        if (index < 0 || index >= totalSections) return;  // Membatasi scroll agar tidak keluar dari index
        const section = sections[index];
        window.scrollTo({
            top: section.offsetTop,
            behavior: 'smooth',  // Scroll dengan smooth
        });
    }

    // Event listener untuk scroll
    let isScrolling = false;  // Menghindari scroll terlalu cepat
    window.addEventListener('wheel', function (e) {
        if (isScrolling) return;  // Menghindari scroll berulang

        isScrolling = true;

        if (e.deltaY > 0 && currentIndex < totalSections - 1) {
            currentIndex++;  // Scroll ke bawah
        } else if (e.deltaY < 0 && currentIndex > 0) {
            currentIndex--;  // Scroll ke atas
        }

        // Scroll ke section yang sesuai
        scrollToSection(currentIndex);

        // Matikan status scrolling setelah animasi selesai
        setTimeout(() => {
            isScrolling = false;
        }, 1000);  // Durasi animasi sekitar 1 detik
    });

    // Fungsi untuk animasi muncul setiap section
    function animateSections() {
        sections.forEach((section) => {
            // Memeriksa apakah section sudah di view port
            const sectionPosition = section.getBoundingClientRect();
            if (sectionPosition.top < window.innerHeight && sectionPosition.bottom >= 0) {
                section.classList.add('visible');
            }
        });
    }

    // Trigger animasi ketika halaman dimuat
    animateSections();

    // Animasi muncul saat scroll
    window.addEventListener('scroll', animateSections);
    
    // Event listener untuk klik pada navbar
    document.querySelectorAll('.navigation ul li a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            // Ambil id dari link
            const targetId = this.getAttribute('href').substring(1);

            // Temukan section yang sesuai
            const targetSection = document.getElementById(targetId);

            // Scroll ke section tersebut dengan transisi halus
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    });

    // Toggle menu responsif
    menuToggle.addEventListener('click', function() {
        navigation.classList.toggle('active');
        menuToggle.classList.toggle('active');  // Menambah/ menghapus efek toggle pada icon
    });
});
