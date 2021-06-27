import show from '../helpers/show';
import hide from '../helpers/hide';

const burgerBtn = document.querySelector('.js-burger-btn');
const navContent = document.querySelector('.js-nav');
const bodyEl = document.body;

if (burgerBtn) {
  burgerBtn.addEventListener('click', (event) => {
    event.stopPropagation();

    // eslint-disable-next-line no-unused-expressions
    JSON.parse(burgerBtn.getAttribute('aria-expanded')) ? hide(burgerBtn, navContent, bodyEl) : show(burgerBtn, navContent, bodyEl);
  });

  const handleClosure = event =>
    !navContent.contains(event.target) && hide(burgerBtn, navContent, bodyEl);

  window.addEventListener('click', handleClosure);
  window.addEventListener('focusin', handleClosure);
}

