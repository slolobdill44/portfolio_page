(function () {
    'use strict';
    var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) { return; }

    // Pointer glow on the hero
    var hero = document.getElementById('hero');
    if (hero) {
        hero.addEventListener('pointermove', function (e) {
            var r = hero.getBoundingClientRect();
            hero.style.setProperty('--mx', (e.clientX - r.left) + 'px');
            hero.style.setProperty('--my', (e.clientY - r.top) + 'px');
            hero.classList.add('glow');
        });
        hero.addEventListener('pointerleave', function () { hero.classList.remove('glow'); });
    }

    // Count-up for stat numerals when they scroll into view
    var nums = document.querySelectorAll('.num[data-to]');
    if (!('IntersectionObserver' in window)) { return; }

    function run(el) {
        var to = parseFloat(el.dataset.to);
        var dec = parseInt(el.dataset.decimals || '0', 10);
        var suffix = el.dataset.suffix || '';
        var start = null;
        var dur = 1200;
        function tick(t) {
            if (start === null) { start = t; }
            var p = Math.min((t - start) / dur, 1);
            var eased = 1 - Math.pow(1 - p, 3);
            el.textContent = (to * eased).toFixed(dec) + suffix;
            if (p < 1) { requestAnimationFrame(tick); }
            else { el.textContent = to.toFixed(dec) + suffix; }
        }
        requestAnimationFrame(tick);
    }

    var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                io.unobserve(entry.target);
                run(entry.target);
            }
        });
    }, { threshold: 0.6 });
    nums.forEach(function (n) { io.observe(n); });
}());
