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

const searchToggle = document.querySelector('.js-search-toggle');
const searchContent = document.querySelector('.js-search-menu');

const show = () => {
  searchToggle.setAttribute('aria-expanded', true);
  searchContent.setAttribute('aria-hidden', false);

  searchToggle.classList.add('is-active');
  searchContent.classList.add('is-opened');
};

const hide = () => {
  searchToggle.setAttribute('aria-expanded', false);
  searchContent.setAttribute('aria-hidden', true);

  searchToggle.classList.remove('is-active');
  searchContent.classList.remove('is-opened');
};

searchToggle.addEventListener('click', (event) => {
  event.stopPropagation();

  // eslint-disable-next-line no-unused-expressions
  JSON.parse(searchToggle.getAttribute('aria-expanded')) ? hide() : show();
});

const handleClosure = event => !searchContent.contains(event.target) && hide();

window.addEventListener('click', handleClosure);
window.addEventListener('focusin', handleClosure);
