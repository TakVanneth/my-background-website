// script.js

const cursor = document.querySelector('.cursors');
const navLinks = document.querySelectorAll('.navbar a');

document.addEventListener('mousemove', e => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

document.addEventListener('mouseleave', () => {
    cursor.style.opacity = '0';
});

document.addEventListener('mouseenter', () => {
    cursor.style.opacity = '.5';
});

navLinks.forEach(link => {
    link.addEventListener('mouseleave', () => {
        cursor.style.boxShadow = 'none';
        cursor.style.transform = 'scale(1)';
        link.style.zIndex = '1';
    });

    link.addEventListener('mouseenter', () => {
        link.style.zIndex = '2'; // Raise the link above other elements
    });
});

// spinner

document.addEventListener("DOMContentLoaded", function () {
// Add a delay of 5 seconds (5000 milliseconds)
setTimeout(function () {
// Hide the spinner
document.querySelector(".spinner-container").style.display = "none";
// Show the content
document.querySelector(".about-content").classList.add("show");
}, 1000);
})

