// Toggle navbar for mobile view
const menuToggle = document.querySelector('.menu-toggle');
const navbar = document.querySelector('.navbar ul');

menuToggle.addEventListener('click', () => {
    navbar.classList.toggle('show');
});

// Contact Form Submission
const form = document.getElementById('contact-form');
const messageDiv = document.getElementById('message');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    messageDiv.textContent = "Thank you for contacting me. I'll get back to you soon!";
    messageDiv.style.color = 'green';
    form.reset();
});
