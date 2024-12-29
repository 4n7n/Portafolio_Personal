document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.fade-in');
    sections.forEach((section) => {
        section.classList.add('visible');
    });
});