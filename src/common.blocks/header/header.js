function setHeader() {
  const topPos = $('html').scrollTop();
  if (topPos > 350) {
    $('.header').addClass('is-moved');
  } else {
    $('.header').removeClass('is-moved');
  }
}

setHeader();

$(window).scroll(() => {
  setHeader();
});

