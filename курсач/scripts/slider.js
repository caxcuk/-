

const sliders = document.getElementsByClassName("swiper");


let mySwiper = new Swiper(sliders[0], {
  pagination: {
    el: document.getElementsByClassName("swiper-pagination")[0],
    type: 'bullets'
  },
  navigation: {
    nextEl: document.getElementsByClassName('swiper-button-next')[0],
    prevEl: document.getElementsByClassName('swiper-button-prev')[0]
  },
  loop: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: true
  },
  

});

console.log(document.getElementsByClassName('swiper-button-next'));

setTimeout(function () {

for (let i = 1; i <= sliders.length - 1; i++) {

  
  let mySecondSwiper = new Swiper(sliders[i], {
  loop: true,
  autoplay: {
    delay: 1000,
    disableOnInteraction: true
  }
}
);
}},2000);




