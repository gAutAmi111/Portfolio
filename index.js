const menuIcon = document.querySelector('.menu-icon');
const nav = document.querySelector('nav');

// Toggle the navigation menu when the menu icon is clicked
menuIcon.addEventListener('click', () => {
    nav.classList.toggle('active');
});

// Close the menu when clicked outside (optional)
window.addEventListener('click', (event) => {
    if (!nav.contains(event.target) && !menuIcon.contains(event.target)) {
        nav.classList.remove('active');
    }
});
