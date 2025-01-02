let slideIndex = 1;
        showSlides(slideIndex);

        function changeSlide(n) {
            showSlides(slideIndex += n);
        }

        function currentSlide(n) {
            showSlides(slideIndex = n);
        }

        function showSlides(n) {
            const slides = document.querySelectorAll(".slides");
            const dots = document.querySelectorAll(".dot");
            if (n > slides.length) slideIndex = 1;
            if (n < 1) slideIndex = slides.length;
            slides.forEach(slide => slide.style.display = "none");
            dots.forEach(dot => dot.classList.remove("active"));
            slides[slideIndex - 1].style.display = "block";
            dots[slideIndex - 1].classList.add("active");
        }
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
