	/**********************/
	/*	Client carousel   */
	/**********************/
	document.addEventListener('DOMContentLoaded', function () {
        const slides = document.querySelectorAll('.carousel-client');
        let currentIndex = 0;
       
        function hideAllSlides() {
           slides.forEach(slide => {
             slide.style.display = 'none';
           });
        }
       
        function showSlide(index) {
           slides[index].style.display = 'block';
        }
       
        function nextSlide() {
           hideAllSlides();
           currentIndex = (currentIndex + 1) % slides.length;
           showSlide(currentIndex);
        }
       
        function startCarousel() {
           nextSlide();
           setInterval(nextSlide, 3000); // Change slide every 3 seconds
        }
       
        startCarousel();
       });