// Navigacijos juostos fono keitimas skrolinant
const navbar = document.querySelector('.navbar');

window.onscroll = function () {
    if (window.scrollY > 80) {
        navbar.style.background = 'rgba(0, 0, 0, 0.98)';
        navbar.style.boxShadow = '0 5px 20px rgba(0,0,0,0.5)';
    } else {
        navbar.style.background = 'rgba(0, 0, 0, 0.9)';
        navbar.style.boxShadow = 'none';
    }
}