function setHeader() {
  const topPos = $('html').scrollTop();
  if (topPos > 90) {
    $('.header').addClass('is-moved');
  } else {
    $('.header').removeClass('is-moved');
  }
}

setHeader();

$(window).scroll(() => {
  setHeader();
});

