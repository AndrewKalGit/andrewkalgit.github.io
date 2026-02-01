document.addEventListener("DOMContentLoaded", function() {
  const modal = document.getElementById("carouselModal");
  const btn = document.getElementById("openCarouselBtn");
  const closeBtn = document.querySelector(".close-btn");
  const audio = document.querySelector("audio");

  // Remove autoplay from audio initially
  audio.pause();
  audio.currentTime = 0;

  btn.onclick = function() {
    modal.style.display = "block";
    audio.play().catch(error => {
      console.log("Audio playback failed:", error);
    });
    console.log("Carousel opened");
  }

  closeBtn.onclick = function() {
    modal.style.display = "none";
    audio.pause();
    audio.currentTime = 0;
  }

  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
      audio.pause();
      audio.currentTime = 0;
    }
  }

  let currentSlide = 0;
  const slides = document.querySelectorAll(".carousel-item");

  document.querySelector(".next").onclick = function() {
    slides[currentSlide].classList.remove("active");
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add("active");
  }

  document.querySelector(".prev").onclick = function() {
    slides[currentSlide].classList.remove("active");
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    slides[currentSlide].classList.add("active");
  }
});