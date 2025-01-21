document.addEventListener('DOMContentLoaded', function () {
    const navbar = document.querySelector('header'); // Pastikan selector ini sesuai dengan elemen header
    const menuToggle = document.querySelector('.menu-toggle');
    const navigation = document.querySelector('.navigation');
    const closeBtn = document.querySelector('.close-btn'); // Tombol X untuk menutup menu

    // Menambahkan kelas "scrolled" saat scroll
    window.addEventListener('scroll', function() {
        if (window.scrollY > 0) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

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

            // Menutup menu setelah memilih link (untuk tampilan mobile)
            if (navigation.classList.contains('active')) {
                navigation.classList.remove('active');
                menuToggle.classList.remove('active');
            }
        });
    });

    // Toggle menu responsif
    menuToggle.addEventListener('click', function() {
        navigation.classList.toggle('active');
        menuToggle.classList.toggle('active');  // Menambah/ menghapus efek toggle pada icon
    });

    // Menambahkan event listener pada tombol X untuk menutup menu
    closeBtn.addEventListener('click', function() {
        navigation.classList.remove('active');
        menuToggle.classList.remove('active'); // Menghapus efek toggle pada icon
    });
});
