(function () {
  'use strict';
  var KEY = 'lobster-channels-collapsed';

  function norm(p) {
    p = p.replace(/index\.html$/, '').replace(/\/+$/, '');
    return p || '/';
  }
  function pad(n) { return (n < 10 ? '0' : '') + n; }
  function getCollapsed() {
    try { return localStorage.getItem(KEY) === '1'; } catch (e) { return false; }
  }
  function setCollapsed(v) {
    try { localStorage.setItem(KEY, v ? '1' : '0'); } catch (e) {}
  }

  var CSS = [
    ':host{all:initial;position:fixed;z-index:2147483647;right:20px;bottom:20px;font:500 14px/1 system-ui,-apple-system,"Segoe UI",Roboto,sans-serif;color:#f4f4f6}',
    '*{box-sizing:border-box}',
    'nav{position:relative}',
    '.bar{display:flex;align-items:center;gap:2px;height:40px;padding:0 4px;background:#0c0c10;background:rgba(12,12,16,.72);color:#f4f4f6;border:1px solid rgba(255,255,255,.14);border-radius:20px;box-shadow:0 8px 24px rgba(0,0,0,.35)}',
    '@supports ((backdrop-filter:blur(1px)) or (-webkit-backdrop-filter:blur(1px))){.bar,.guide,.tab{background:rgba(12,12,16,.72);-webkit-backdrop-filter:blur(12px);backdrop-filter:blur(12px)}}',
    'button,a{font:inherit;color:inherit}',
    'button{display:inline-flex;align-items:center;justify-content:center;min-width:32px;height:32px;padding:0 8px;margin:0;background:none;border:0;border-radius:16px;cursor:pointer;letter-spacing:.02em}',
    'button:hover:not(:disabled){background:rgba(255,255,255,.14)}',
    'button:disabled{opacity:.4;cursor:default}',
    ':focus-visible{outline:2px solid #fff;outline-offset:2px;box-shadow:0 0 0 4px #0c0c10}',
    '.label{font-variant-numeric:tabular-nums;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:200px}',
    'svg{width:16px;height:16px;fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}',
    '.tab{height:40px;min-width:48px;padding:0 14px;background:#0c0c10;background:rgba(12,12,16,.72);border:1px solid rgba(255,255,255,.14);border-radius:20px;box-shadow:0 8px 24px rgba(0,0,0,.35);font-weight:700;letter-spacing:.08em}',
    '.guide{position:absolute;right:0;bottom:48px;min-width:200px;max-width:calc(100vw - 32px);margin:0;padding:6px;list-style:none;background:#0c0c10;border:1px solid rgba(255,255,255,.14);border-radius:14px;box-shadow:0 8px 24px rgba(0,0,0,.35)}',
    '.guide[hidden],.bar[hidden],.tab[hidden]{display:none}',
    '.guide a{display:flex;gap:10px;align-items:center;min-height:36px;padding:0 10px;border-radius:10px;color:#f4f4f6;text-decoration:none;font-variant-numeric:tabular-nums}',
    '.guide a:hover{background:rgba(255,255,255,.14)}',
    '.guide a[aria-current]{background:rgba(255,255,255,.2);font-weight:700}',
    '.flash{position:fixed;inset:0;background:#fff;opacity:0;pointer-events:none}',
    '.flash.on{opacity:.8;transition:opacity 80ms}',
    '@media (max-width:600px){',
    ':host{left:50%;right:auto;translate:-50% 0;bottom:calc(16px + env(safe-area-inset-bottom,0px));max-width:calc(100vw - 32px)}',
    'nav{max-width:calc(100vw - 32px)}',
    '.bar{height:48px;border-radius:24px;max-width:calc(100vw - 32px)}',
    'button{min-width:44px;height:44px;border-radius:22px}',
    '.tab{height:48px;min-width:56px}',
    '.label{max-width:calc(100vw - 200px)}',
    '.guide{right:auto;left:50%;translate:-50% 0;width:max-content;bottom:60px}',
    '.guide a{min-height:44px}',
    '}'
  ].join('');

  var ICON = {
    prev: '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M10 3 5 8l5 5"/></svg>',
    next: '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="m6 3 5 5-5 5"/></svg>',
    min: '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M3 8h10"/></svg>'
  };

  function build(list, idx) {
    var host = document.createElement('lobster-channels');
    var root = host.attachShadow({ mode: 'open' });
    var style = document.createElement('style');
    style.textContent = CSS;
    var nav = document.createElement('nav');
    nav.setAttribute('aria-label', 'Design channels');
    var single = list.length < 2;
    var cur = list[idx];

    nav.innerHTML =
      '<ul class="guide" id="guide" hidden></ul>' +
      '<div class="bar">' +
      '<button type="button" class="prev" aria-label="Previous channel">' + ICON.prev + '</button>' +
      '<button type="button" class="label" aria-haspopup="true" aria-expanded="false" aria-controls="guide"></button>' +
      '<button type="button" class="next" aria-label="Next channel">' + ICON.next + '</button>' +
      '<button type="button" class="min" aria-label="Minimize channel switcher">' + ICON.min + '</button>' +
      '</div>' +
      '<button type="button" class="tab" aria-label="Show design channels" hidden>CH</button>';

    var $ = function (s) { return nav.querySelector(s); };
    var guide = $('.guide'), bar = $('.bar'), tab = $('.tab');
    var label = $('.label'), prev = $('.prev'), next = $('.next');
    label.textContent = 'CH ' + pad(idx + 1) + ' · ' + cur.name;
    prev.disabled = next.disabled = single;

    list.forEach(function (c, i) {
      var li = document.createElement('li');
      var a = document.createElement('a');
      a.href = c.path;
      a.textContent = 'CH ' + pad(i + 1) + ' · ' + c.name;
      if (i === idx) a.setAttribute('aria-current', 'page');
      li.appendChild(a);
      guide.appendChild(li);
    });

    var flash = document.createElement('div');
    flash.className = 'flash';
    flash.setAttribute('aria-hidden', 'true');
    root.append(style, nav, flash);

    function setOpen(o) {
      guide.hidden = !o;
      label.setAttribute('aria-expanded', o ? 'true' : 'false');
    }
    function collapse(v) {
      setCollapsed(v);
      setOpen(false);
      bar.hidden = v;
      tab.hidden = !v;
      (v ? tab : label).focus();
    }
    function go(step) {
      if (single) return;
      var t = list[(idx + step + list.length) % list.length];
      var reduce = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (reduce) { location.href = t.path; return; }
      flash.classList.add('on');
      setTimeout(function () { location.href = t.path; }, 150);
    }

    label.addEventListener('click', function () { setOpen(guide.hidden); });
    prev.addEventListener('click', function () { go(-1); });
    next.addEventListener('click', function () { go(1); });
    $('.min').addEventListener('click', function () { collapse(true); });
    tab.addEventListener('click', function () { collapse(false); });

    document.addEventListener('click', function (e) {
      if (e.composedPath().indexOf(host) < 0) setOpen(false);
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') { if (!guide.hidden) { setOpen(false); label.focus(); } return; }
      if (e.metaKey || e.ctrlKey || e.altKey || e.shiftKey) return;
      if (e.key !== '[' && e.key !== ']') return;
      var t = e.target;
      if (t && (t.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName))) return;
      go(e.key === '[' ? -1 : 1);
    });
    window.addEventListener('pageshow', function () { flash.classList.remove('on'); });

    if (getCollapsed()) { bar.hidden = true; tab.hidden = false; }
    return host;
  }

  function init() {
    fetch('/channels/channels.json', { credentials: 'same-origin' })
      .then(function (r) { return r.ok ? r.json() : null; })
      .then(function (data) {
        var list = data && data.channels;
        if (!Array.isArray(list) || !list.length) return;
        var here = norm(location.pathname), idx = -1;
        list.forEach(function (c, i) { if (idx < 0 && norm(c.path) === here) idx = i; });
        if (idx < 0) return;
        document.body.appendChild(build(list, idx));
      })
      .catch(function () {});
  }

  if (!window.customElements || !Element.prototype.attachShadow) return;
  if (!customElements.get('lobster-channels')) {
    customElements.define('lobster-channels', class extends HTMLElement {});
  }
  if (document.body) init();
  else document.addEventListener('DOMContentLoaded', init);
})();
