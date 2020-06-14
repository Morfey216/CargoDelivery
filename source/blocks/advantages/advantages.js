/* global Swiper */

export default () => {
  const container = document.querySelector('.advantages__container');
  if (!container) return;

  const wrapper = container.querySelector('.advantages__wrapper');
  const slides = container.querySelectorAll('.advantages__slide');

  function initializeAdvantages() {
    container.classList.add('swiper-container');
    wrapper.classList.add('swiper-wrapper');
    slides.forEach((slide) => {
      slide.classList.add('swiper-slide');
    });

    const swiperAdvantages = new Swiper(container, {
      direction: 'horizontal',
      loop: true,
      preloadImages: true,
      loadPrevNext: true,
      loadPrevNextAmount: 2,
      slidesPerView: 1,
      spaceBetween: 20,
      slidesOffsetBefore: 0,
      slidesOffsetAfter: 0,
      breakpoints: {},
      navigation: {
        nextEl: '.advantages__navigation-btn-next',
        prevEl: '.advantages__navigation-btn-prev',
      },
      pagination: {
        el: '.advantages__pagination',
        type: 'bullets',
        bulletElement: 'span',
        bulletClass: 'pagination-bullet',
        bulletActiveClass: 'pagination-bullet--active',
        clickable: true,
      },
    });
  }

  initializeAdvantages();
};
