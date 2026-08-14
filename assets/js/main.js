/* François HU. Site behaviour: theme, nav, filters, reveal. */
(function () {
  'use strict';

  /* ---- Colour theme ----------------------------------------------------- */
  var root = document.documentElement;
  var toggle = document.getElementById('theme-toggle');

  function currentTheme() {
    var attr = root.getAttribute('data-theme');
    if (attr) return attr;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  if (toggle) {
    toggle.addEventListener('click', function () {
      var next = currentTheme() === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      try { localStorage.setItem('theme', next); } catch (e) {}
      toggle.setAttribute('aria-label', next === 'dark' ? 'Switch to light theme' : 'Switch to dark theme');
    });
  }

  /* ---- Mobile navigation ------------------------------------------------ */
  var navToggle = document.getElementById('nav-toggle');
  if (navToggle) {
    navToggle.addEventListener('click', function () {
      var open = document.body.classList.toggle('nav-open');
      navToggle.setAttribute('aria-expanded', String(open));
      navToggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    });
    document.querySelectorAll('#site-nav a').forEach(function (link) {
      link.addEventListener('click', function () {
        document.body.classList.remove('nav-open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ---- Sticky header shadow --------------------------------------------- */
  var header = document.getElementById('site-header');
  if (header) {
    var onScroll = function () {
      header.classList.toggle('is-stuck', window.scrollY > 8);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  /* ---- Filterable lists --------------------------------------------------
     Markup contract:
       <div data-filter-group="pubs"> … buttons with data-filter="value" … </div>
       <input data-filter-search="pubs">
       <ul data-filter-target="pubs"> items with data-category / data-topics / data-tags / data-title </ul>
       <p data-filter-empty="pubs">
  ------------------------------------------------------------------------- */
  document.querySelectorAll('[data-filter-target]').forEach(function (list) {
    var name = list.getAttribute('data-filter-target');
    var group = document.querySelector('[data-filter-group="' + name + '"]');
    var search = document.querySelector('[data-filter-search="' + name + '"]');
    var empty = document.querySelector('[data-filter-empty="' + name + '"]');
    var items = Array.prototype.slice.call(list.children);
    var active = 'all';

    function haystack(el) {
      return [
        el.getAttribute('data-category') || '',
        el.getAttribute('data-topics') || '',
        el.getAttribute('data-tags') || '',
        el.getAttribute('data-kind') || '',
        el.getAttribute('data-year') || '',
        el.textContent || ''
      ].join(' ').toLowerCase();
    }

    function apply() {
      var query = search && search.value ? search.value.trim().toLowerCase() : '';
      var shown = 0;

      items.forEach(function (item) {
        var facets = (
          (item.getAttribute('data-category') || '') + ',' +
          (item.getAttribute('data-topics') || '') + ',' +
          (item.getAttribute('data-tags') || '') + ',' +
          (item.getAttribute('data-kind') || '')
        ).toLowerCase().split(',').map(function (s) { return s.trim(); });

        var matchesFilter = active === 'all' || facets.indexOf(active) !== -1;
        var matchesQuery = !query || haystack(item).indexOf(query) !== -1;
        var visible = matchesFilter && matchesQuery;

        item.classList.toggle('is-hidden', !visible);
        if (visible) shown++;
      });

      if (empty) empty.classList.toggle('is-hidden', shown !== 0);
    }

    if (group) {
      group.querySelectorAll('[data-filter]').forEach(function (btn) {
        btn.addEventListener('click', function () {
          active = btn.getAttribute('data-filter').toLowerCase();
          group.querySelectorAll('[data-filter]').forEach(function (b) {
            b.classList.toggle('is-active', b === btn);
            b.setAttribute('aria-pressed', String(b === btn));
          });
          apply();
        });
      });
    }

    if (search) search.addEventListener('input', apply);
    apply();
  });

  /* ---- Reveal on scroll -------------------------------------------------- */
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var revealables = document.querySelectorAll('.section, .hero__text, .hero__media, .cta__inner');

  if (reduce || !('IntersectionObserver' in window)) {
    revealables.forEach(function (el) { el.classList.add('is-visible'); });
  } else {
    revealables.forEach(function (el) { el.classList.add('reveal'); });
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.05 });
    revealables.forEach(function (el) { observer.observe(el); });
  }
})();
