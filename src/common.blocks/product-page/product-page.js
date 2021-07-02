/* eslint-disable */
if (document.querySelector('.product-page__slider') !== null) {
	document.querySelectorAll('.product-page__slider').forEach((slide) => {
		const galleryThumbs = new Swiper(slide.querySelector('.js-product-page-thumbs'), {
			spaceBetween: 16,
			slidesPerView: 'auto',
			loop: true,
			loopedSlides: 'auto'
		});

		const itemSwiper = new Swiper(slide.querySelector('.js-product-page-slide'), {
			speed: 400,
			spaceBetween: 0,
			slidesPerView: 1,
			loop: true,

			thumbs: {
				swiper: galleryThumbs
			}
		});
	});
}
