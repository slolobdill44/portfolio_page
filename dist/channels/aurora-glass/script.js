(function () {
    'use strict';

    document.documentElement.classList.add('js');

    var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    var desktop = window.matchMedia('(min-width: 901px)');
    var canHover = window.matchMedia('(hover: hover) and (pointer: fine)');

    // Experience: Show More / Show Less
    var list = document.getElementById('exp-list');
    var toggle = document.getElementById('exp-toggle');
    if (list && toggle) {
        toggle.addEventListener('click', function () {
            var open = list.classList.toggle('open');
            toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
            toggle.textContent = open ? 'Show Less' : 'Show More';
            if (!open) { list.scrollTo({ left: 0 }); }
            updateButtons();
        });
    }

    // Experience: carousel buttons
    var prev = document.getElementById('exp-prev');
    var next = document.getElementById('exp-next');

    function step(dir) {
        var card = list.querySelector('.role');
        var amount = card ? card.getBoundingClientRect().width + 20 : list.clientWidth;
        list.scrollBy({ left: dir * amount, behavior: reduceMotion.matches ? 'auto' : 'smooth' });
    }

    function updateButtons() {
        if (!list || !prev || !next) { return; }
        var max = list.scrollWidth - list.clientWidth - 2;
        prev.disabled = list.scrollLeft <= 2;
        next.disabled = list.scrollLeft >= max;
    }

    if (list && prev && next) {
        prev.addEventListener('click', function () { step(-1); });
        next.addEventListener('click', function () { step(1); });
        list.addEventListener('scroll', updateButtons, { passive: true });
        window.addEventListener('resize', updateButtons);
        updateButtons();
    }

    // Projects: subtle 3D tilt on hover-capable desktops
    function tiltOn() {
        return desktop.matches && canHover.matches && !reduceMotion.matches;
    }

    document.querySelectorAll('.tilt').forEach(function (card) {
        card.addEventListener('pointermove', function (e) {
            if (!tiltOn()) { return; }
            var r = card.getBoundingClientRect();
            var x = (e.clientX - r.left) / r.width - 0.5;
            var y = (e.clientY - r.top) / r.height - 0.5;
            card.style.setProperty('--ry', (x * 6).toFixed(2) + 'deg');
            card.style.setProperty('--rx', (-y * 6).toFixed(2) + 'deg');
        });
        card.addEventListener('pointerleave', function () {
            card.style.removeProperty('--rx');
            card.style.removeProperty('--ry');
        });
    });
}());
