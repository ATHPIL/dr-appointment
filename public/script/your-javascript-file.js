document.addEventListener('DOMContentLoaded', function () {
    let menuBtn = document.querySelector('.menu-btn');
    let navbar = document.querySelector('.navbar');

    // Toggle menu button and navbar on click
    menuBtn.addEventListener('click', function (event) {
        event.stopPropagation();
        menuBtn.classList.toggle('fa-times');
        navbar.classList.toggle('active'); // Toggle the 'active' class
    });

    // Close the menu when clicking outside of it or on a menu item
    document.addEventListener('click', function (event) {
        if (!navbar.contains(event.target) && !menuBtn.contains(event.target)) {
            closeMenu();
        }
    });

    // Close the menu when a menu item is clicked
    navbar.addEventListener('click', function (event) {
        if (event.target.tagName === 'A') {
            closeMenu();
        }
    });

    // Function to close the menu
    function closeMenu() {
        menuBtn.classList.remove('fa-times');
        navbar.classList.remove('active');
    }
});
