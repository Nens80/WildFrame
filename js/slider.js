    let currentIndex = 0;
    const slides = document.querySelectorAll('.slider img');

    function showNextSlide() {
        slides[currentIndex].classList.remove('active');
        
        currentIndex = (currentIndex + 1) % slides.length;

        slides[currentIndex].classList.add('active');
    }
    slides[0].classList.add('active');

    setInterval(showNextSlide, 3000);
