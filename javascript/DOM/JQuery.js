  // @ts-nocheck
  /**
  Реализуйте логику слайдера в функции экспортированной по умолчанию.

Постройте свою логику так, чтобы она позволила использовать на одной странице любое количество компонентов carousel с любым количеством картинок внутри.
  */

  import $ from 'jquery';

  export default () => { // my soluiton
    // BEGIN (write your solution here)
    const nextButtons = document.querySelectorAll('.carousel-control-next');
    nextButtons.forEach((el) => {
      const id = el.getAttribute('href');
      const container = document.querySelector(id);
      const carouselInner = container.querySelector('.carousel-inner');
      let currentSlide;
      const maxSlide = carouselInner.children.length - 1;
      el.addEventListener('click', () => {
        const activeElement = carouselInner.querySelector('.active');
        const childs = Array.from(carouselInner.children);
        currentSlide = childs.indexOf(activeElement);
        activeElement.classList.remove('active');
        if (currentSlide === maxSlide) {
          currentSlide = 0;
          carouselInner.children[currentSlide].classList.add('active');
        } else {
          currentSlide += 1;
          carouselInner.children[currentSlide].classList.add('active');
        }
      });
    });
    const prevButtons = document.querySelectorAll('.carousel-control-prev');
    prevButtons.forEach((el) => {
      const id = el.getAttribute('href');
      const container = document.querySelector(id);
      const carouselInner = container.querySelector('.carousel-inner');
      let currentSlide;
      const maxSlide = carouselInner.children.length - 1;
      el.addEventListener('click', () => {
        const activeElement = carouselInner.querySelector('.active');
        const childs = Array.from(carouselInner.children);
        currentSlide = childs.indexOf(activeElement);
        activeElement.classList.remove('active');
        if (currentSlide === 0) {
          currentSlide = maxSlide;
          carouselInner.children[currentSlide].classList.add('active');
        } else {
          currentSlide -= 1;
          carouselInner.children[currentSlide].classList.add('active');
        }
      });
    });
    // END
  };

// teachers solution 
  // BEGIN
  $('a[data-slide]').click((e) => {
    const carousel = e.target.closest('[data-ride="carousel"]');
    const active = $('.carousel-item.active', carousel);
    const direction = e.target.dataset.slide;
    const map = {
      next: active.next().length > 0 ? active.next() : active.siblings().first(),
      prev: active.prev().length > 0 ? active.prev() : active.siblings().last(),
    };
    const newActive = map[direction];
    active.removeClass('active');
    newActive.addClass('active');
  });
  // END
