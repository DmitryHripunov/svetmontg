const tabBtn = $('.js-tabs-btn');

// eslint-disable-next-line func-names
tabBtn.on('click', function (e) {
  e.preventDefault();
  const href = $(this).attr('href');

  $('.js-tabs-content').removeClass('is-active');
  $('.js-tabs-btn').removeClass('is-active');

  $(this).addClass('is-active');
  $(href).addClass('is-active');
});
