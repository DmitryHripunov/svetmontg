function show(toggle, content, body = null, focus = null) {
  toggle.setAttribute('aria-expanded', true);
  content.setAttribute('aria-hidden', false);

  if (body) {
    body.classList.add('no-scrolling');
  }
  toggle.classList.add('is-active');
  content.classList.add('is-opened');
  if (focus) {
    focus.focus();
  }
}

export default show;
