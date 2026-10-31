(function () {
  'use strict';
  var root = document.documentElement;
  root.classList.add('js');

  var reduce = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;

  var start = document.getElementById('press-start');
  var exp = document.getElementById('experience');
  if (start && exp) {
    start.addEventListener('click', function (e) {
      e.preventDefault();
      exp.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
      exp.setAttribute('tabindex', '-1');
      exp.focus({ preventScroll: true });
    });
  }

  var btn = document.getElementById('more-btn');
  var list = document.getElementById('levels');
  if (btn && list) {
    btn.addEventListener('click', function () {
      var open = list.classList.toggle('is-open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
      btn.textContent = open ? 'Show Less' : 'Show More';
    });
  }
})();
