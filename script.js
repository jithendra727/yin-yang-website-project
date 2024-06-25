const images = document.querySelectorAll('.slideshow-image');
let currentIndex = 0;

function showImage(index) {
  images.forEach(image => {
    image.style.display = 'none';
  });

  images[index].style.display = 'block';
}

function changeImage() {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
}

setInterval(changeImage, 3000); // Change image every 3 seconds
