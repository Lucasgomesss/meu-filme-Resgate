var menu = document.querySelector('header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        menu.classList.add('fixo');
    } else {
        menu.classList.remove('fixo');
    }
});