function hide(toggle, content, body = null) {
  toggle.setAttribute('aria-expanded', false);
  content.setAttribute('aria-hidden', true);

  if (toggle.classList.contains('is-active')) {
    if (body) {
      body.classList.remove('no-scrolling');
    }
    toggle.classList.remove('is-active');
    content.classList.remove('is-opened');
  }
}

export default hide;
