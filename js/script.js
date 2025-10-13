// Scroll
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const seccion = document.querySelector(this.getAttribute('href'));
        seccion.scrollIntoView({ behavior: 'smooth' });
    });
});