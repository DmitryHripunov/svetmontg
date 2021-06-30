import show from '../helpers/show';
import hide from '../helpers/hide';

const filterBtn = document.querySelector('.js-open-filter');
const filterContent = document.querySelector('.category-item__filter');
const closePopupEl = document.querySelector('.js-close-filter');
const bodyEl = document.body;

if (filterBtn) {
  filterBtn.addEventListener('click', (event) => {
    event.stopPropagation();

    // eslint-disable-next-line no-unused-expressions
    JSON.parse(filterBtn.getAttribute('aria-expanded')) ? hide(filterBtn, filterContent, bodyEl) : show(filterBtn, filterContent, bodyEl);
  });

  closePopupEl.addEventListener('click', (event) => {
    event.stopPropagation();

    // eslint-disable-next-line no-unused-expressions
    JSON.parse(filterBtn.getAttribute('aria-expanded')) ? hide(filterBtn, filterContent, bodyEl) : show(filterBtn, filterContent, bodyEl);
  });

  const handleClosure = event =>
    !filterContent.contains(event.target) && hide(filterBtn, filterContent, bodyEl);

  window.addEventListener('click', handleClosure);
  window.addEventListener('focusin', handleClosure);
}
