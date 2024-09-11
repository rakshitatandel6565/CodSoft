

// scripts.js

// Add event listener to newsletter form
document.getElementById('newsletterForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    var email = document.getElementById('email').value;
    alert('Thank you for subscribing with ' + email + '!');
});

// Add event listener to add-to-cart buttons
var addToCartButtons = document.querySelectorAll('.product-card .btn');
addToCartButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        var product = button.parentNode.parentNode;
        var productName = product.querySelector('h3').textContent;
        alert('Added ' + productName + ' to cart!');
    });
});

// Smooth scrolling for navigation links
var navLinks = document.querySelectorAll('nav ul li a');
navLinks.forEach(function(link) {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        var targetId = link.getAttribute('href');
        var targetElement = document.querySelector(targetId);
        targetElement.scrollIntoView({ behavior: 'smooth' });
    });
});
