document.querySelectorAll('.quote__item').forEach((n) => {
  // eslint-disable-next-line no-unused-vars
  const quoteSwiper = new Swiper(n.querySelector('.js-quote-container'), {
    pagination: {
      el: n.querySelector('.quote__pagination'),
    },
    slidesPerView: 1,
    spaceBetween: 0,
  });
});
