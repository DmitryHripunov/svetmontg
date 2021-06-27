import show from '../helpers/show';
import hide from '../helpers/hide';

const searchToggleBtn = document.querySelectorAll('.js-search-top-toggle');
const searchContent = document.querySelector('.js-search-menu');
const searchInput = document.querySelector('.search-top__input');

searchToggleBtn.forEach((toggleBtn) => {
  const handleBtn = (event) => {
    event.stopPropagation();
    // eslint-disable-next-line no-unused-expressions
    JSON.parse(toggleBtn.getAttribute('aria-expanded')) ? hide(toggleBtn, searchContent, null) : show(toggleBtn, searchContent, null, searchInput);
  };

  toggleBtn.addEventListener('click', handleBtn);

  const handleClosure = event =>
    !searchContent.contains(event.target) && hide(toggleBtn, searchContent, null);

  window.addEventListener('click', handleClosure);
  window.addEventListener('focusin', handleClosure);
});

