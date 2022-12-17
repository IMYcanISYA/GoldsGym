
const headerNav = document.querySelector('.header-nav');

window.onscroll = () => {
  let height = headerNav.offsetHeight;
  console.log(height)
  if (window.scrollY >= height) {
    headerNav.classList.add("_active");
  } else headerNav.classList.remove("_active");
}

const modal = document.querySelector('.header__modal');
const modalCloseBtn = modal.querySelector('.modal-header__btn');
const modalOpenBtn = document.querySelector('.play-btn');
let modalVideo;

function onYouTubePlayerAPIReady() {
  player = new YT.Player('Youtube', {
    events: {'onReady': onPlayerReady}
  });
}
function onPlayerReady(event) {
  modalCloseBtn.onclick = () => {
  	player.pauseVideo();
  }
}


modalOpenBtn.addEventListener('click', () => {
	modal.classList.add("_active");
})
modalCloseBtn.addEventListener("click", () => {
	modal.classList.remove("_active");
})


/*-----------------------SLIDERS-------------------------*/

const trainersSlides = document.querySelectorAll('.slide-trainers');

const servicesSlider = new Swiper(".slider-services", {
  navigation: {
    prevEl: '.slider-services__btn._prev',
    nextEl: '.slider-services__btn._next',
  },
  simulateTouch: true,
  slidesPerView: "auto",
  spaceBetween: 30,
})

const trainersSlider = new Swiper(".slider-trainers", {
  navigation: {
    prevEl: '.slider-trainers__btn._prev',
    nextEl: '.slider-trainers__btn._next',
  },
  simulateTouch: true,
  slidesPerView: 1,
  spaceBetween: 30,

  on: {
    slideChange: function(swiper) {
      let activeSlide = swiper.realIndex;
      trainersSlides.forEach(item => {
        item.classList.remove('_left');
        item.classList.remove('_center');
        item.classList.remove('_right');
      })
      if (document.documentElement.clientWidth >= 1024) {
        trainersSlides[activeSlide].classList.add('_left');
        trainersSlides[activeSlide+1].classList.add('_center');
        trainersSlides[activeSlide+2].classList.add('_right');
         
      } else if (document.documentElement.clientWidth < 1024 && document.documentElement.clientWidth >= 640) {
          trainersSlides[activeSlide].classList.add('_left');
          trainersSlides[activeSlide+1].classList.add('_right');
      }
    },
  },

  breakpoints: {
    1024: {
      slidesPerView: 3,
    },
    640: {
      slidesPerView: 2,
    },
  },

})

const testimonialImagesSlider = new Swiper('.testimonial__img-slider', {
  simulateTouch: false,
  allowTouchMove: false,
  speed: 1000,
  
  effect: 'fade',
  fadeEffect: {
      crossFade: true,
  },
})

const testimonialSlider = new Swiper(".testimonial__slider", {
  navigation: {
    prevEl: '.testimonial__btn._prev',
    nextEl: '.testimonial__btn._next',
  },
  allowTouchMove: false,
  speed: 1000,
  effect: 'fade',
  fadeEffect: {
      crossFade: true,
  },
  thumbs: {
    swiper: testimonialImagesSlider,
  },
});



/*-----------------------/SLIDERS-------------------------*/

window.addEventListener("DOMContentLoaded", () => {
  trainersSlides.forEach(item => {
        item.classList.remove('_left');
        item.classList.remove('_center');
        item.classList.remove('_right');
      })
  if (document.documentElement.clientWidth >= 1024) {
        trainersSlides[0].classList.add('_left');
        trainersSlides[1].classList.add('_center');
        trainersSlides[2].classList.add('_right');
        console.log(document.documentElement.clientWidth)
         
      } else if (document.documentElement.clientWidth < 1024 && document.documentElement.clientWidth >= 640) {
          trainersSlides[0].classList.add('_left');
          trainersSlides[1].classList.add('_right');
          console.log(trainersSlides[0], trainersSlides[1])
      }
})
window.onresize = () => {
  trainersSlides.forEach(item => {
        item.classList.remove('_left');
        item.classList.remove('_center');
        item.classList.remove('_right');
      })
  if (document.documentElement.clientWidth >= 1024) {
        trainersSlides[0].classList.add('_left');
        trainersSlides[1].classList.add('_center');
        trainersSlides[2].classList.add('_right');
        console.log(document.documentElement.clientWidth)
         
      } else if (document.documentElement.clientWidth < 1024 && document.documentElement.clientWidth >= 640) {
          trainersSlides[0].classList.add('_left');
          trainersSlides[1].classList.add('_right');
          console.log(trainersSlides[0], trainersSlides[1])
      }
}



const burgerBtn = document.querySelector(".burger-btn");
const burgerMenu = document.querySelector(".nav-menu");

burgerBtn.addEventListener("click", () => {
	burgerMenu.classList.toggle("_active");
	burgerBtn.classList.toggle("_active");
	document.body.classList.toggle('_lock');
})