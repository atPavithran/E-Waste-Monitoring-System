function toggleSidebar() {
    var sidebar = document.querySelector('.sidebar');
    var hamburger = document.querySelector('.hamburger-menu');
    sidebar.classList.toggle('active');
    if (sidebar.classList.contains('active')) {
        hamburger.innerHTML = '&#10005;'; // Change hamburger to X
    } else {
        hamburger.innerHTML = '&#9776;'; // Change X back to hamburger
    }
}
