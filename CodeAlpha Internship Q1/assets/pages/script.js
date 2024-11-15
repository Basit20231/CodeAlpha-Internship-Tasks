let currentIndex = 0;

const images = document.querySelectorAll('.gallery-image');

function navigateGallery(direction)
 {


    images[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + direction + images.length) % images.length;
    images[currentIndex].classList.add('active');

    
}


