(function () {
    'use strict';
    var btn = document.querySelector('.more');
    var older = document.querySelectorAll('.role.older');
    if (!btn || !older.length) { return; }
    var label = btn.querySelector('span');

    function set(expanded) {
        older.forEach(function (el) { el.hidden = !expanded; });
        btn.setAttribute('aria-expanded', String(expanded));
        label.textContent = expanded ? 'Show Less' : 'Show More';
    }

    btn.addEventListener('click', function () {
        set(btn.getAttribute('aria-expanded') !== 'true');
    });

    // Older roles start collapsed; without JS everything stays visible.
    set(false);
}());
