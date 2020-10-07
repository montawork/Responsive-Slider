const slides = Array.from(document.querySelectorAll('.slide'));
const next = document.getElementById('next');
const prev = document.getElementById('prev');
const auto = true;
const intervaleTime = 5000;
let slideInterval;

const nextSlide = () => {
  const current = document.querySelector('.current');
  current.classList.remove('current');
  if (current.nextElementSibling) {
    current.nextElementSibling.classList.add('current');
  } else {
    slides[0].classList.add('current');
  }
  //setTimeout(() => current.classList.remove('current'), 200);
};

const prevSlide = () => {
  const current = document.querySelector('.current');
  current.classList.remove('current');
  if (current.previousElementSibling) {
    current.previousElementSibling.classList.add('current');
  } else {
    slides[slides.length - 1].classList.add('current');
  }
};

next.addEventListener('click', () => {
  nextSlide();
  clearInterval(slideInterval);
  if (auto) {
    slideInterval = setInterval(nextSlide, intervaleTime);
  }
});

prev.addEventListener('click', () => {
  prevSlide();
  clearInterval(slideInterval);
  if (auto) {
    slideInterval = setInterval(nextSlide, intervaleTime);
  }
});

if (auto) {
  slideInterval = setInterval(nextSlide, intervaleTime);
}
