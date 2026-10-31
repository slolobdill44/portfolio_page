(function () {
    'use strict';
    var btn = document.querySelector('.more');
    var older = document.querySelectorAll('.hop.older');
    if (!btn || !older.length) { return; }
    var label = btn.querySelector('span');

    function set(expanded) {
        older.forEach(function (li) { li.hidden = !expanded; });
        btn.setAttribute('aria-expanded', String(expanded));
        label.textContent = expanded ? 'Show Less' : 'Show More';
    }

    btn.addEventListener('click', function () {
        set(btn.getAttribute('aria-expanded') !== 'true');
    });

    // Older hops start collapsed; without JS everything stays visible.
    set(false);
}());
