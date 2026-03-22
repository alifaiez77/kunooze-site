/* =============================================================
   AL-KUNOOZ UNIVERSITY — Main Interactive Script v3
   Language switching, animations, counters, lightbox, tabs
   ============================================================= */
(function () {
  'use strict';

  /* ===== LANGUAGE ===================================== */
  let currentLang = localStorage.getItem('ku-lang') || 'ar';

  function applyLanguage(lang) {
    currentLang = lang;
    const isAr = lang === 'ar';
    const html = document.documentElement;
    html.setAttribute('lang', lang);
    html.setAttribute('dir', isAr ? 'rtl' : 'ltr');
    localStorage.setItem('ku-lang', lang);

    /* Translate all [data-t] elements */
    if (typeof translations !== 'undefined' && translations[lang]) {
      document.querySelectorAll('[data-t]').forEach(el => {
        const key = el.getAttribute('data-t');
        const val = translations[lang][key];
        if (val !== undefined) {
          if (el.tagName === 'INPUT' && el.placeholder) {
            /* skip inputs that need manual placeholder mapping */
          } else {
            el.textContent = val;
          }
        }
      });
    }

    /* Update lang buttons */
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    /* Dispatch custom event for navbar dropdown text */
    document.dispatchEvent(new CustomEvent('langchange', { detail: { lang } }));
  }

  /* Bind lang buttons (delegated — catches both navbars) */
  document.addEventListener('click', e => {
    const btn = e.target.closest('.lang-btn[data-lang]');
    if (btn) applyLanguage(btn.dataset.lang);
  });

  /* ===== NAVBAR ======================================= */
  function initNavbar() {
    const navbar = document.getElementById('navbar');
    if (!navbar) return;

    /* Scroll behaviour */
    function onScroll() {
      navbar.classList.toggle('scrolled', window.scrollY > 40);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    /* Hamburger */
    const toggle   = document.getElementById('navToggle');
    const mobileNav = document.getElementById('mobileNav');
    if (toggle && mobileNav) {
      toggle.addEventListener('click', () => {
        const open = toggle.classList.toggle('open');
        mobileNav.classList.toggle('open', open);
        toggle.setAttribute('aria-expanded', open);
        mobileNav.setAttribute('aria-hidden', !open);
        document.body.style.overflow = open ? 'hidden' : '';
      });
    }

    /* Close mobile nav on link click */
    document.querySelectorAll('.mobile-nav-links a').forEach(a => {
      a.addEventListener('click', () => {
        toggle?.classList.remove('open');
        mobileNav?.classList.remove('open');
        document.body.style.overflow = '';
      });
    });

    /* Close on outside click */
    document.addEventListener('click', e => {
      if (mobileNav?.classList.contains('open') &&
          !mobileNav.contains(e.target) &&
          !toggle?.contains(e.target)) {
        toggle?.classList.remove('open');
        mobileNav.classList.remove('open');
        document.body.style.overflow = '';
      }
    });
  }

  /* ===== SCROLL REVEAL ================================ */
  function initReveal() {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('revealed');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('.reveal, .reveal-l, .reveal-scale').forEach((el, i) => {
      /* Stagger within same container by 80ms increments */
      const siblings = el.parentElement.querySelectorAll('.reveal, .reveal-l, .reveal-scale');
      let idx = 0;
      siblings.forEach((s, si) => { if (s === el) idx = si; });
      el.style.transitionDelay = (idx * 80) + 'ms';
      io.observe(el);
    });
  }

  /* ===== COUNTER ANIMATION ============================ */
  function animateCounter(el, target, duration) {
    let start = null;
    function step(ts) {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3); /* ease-out-cubic */
      el.textContent = Math.round(ease * target).toLocaleString();
      if (progress < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  function initCounters() {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          const el    = e.target;
          const num   = parseInt(el.dataset.count, 10);
          const plus  = el.querySelector('.plus');
          if (!isNaN(num)) {
            if (plus) plus.textContent = '';
            animateCounter(el, num, 2000);
            if (plus) setTimeout(() => { plus.textContent = '+'; }, 2000);
          }
          io.unobserve(el);
        }
      });
    }, { threshold: 0.5 });

    document.querySelectorAll('.stat-num[data-count]').forEach(el => io.observe(el));
  }

  /* ===== TABS (downloads / dept-single) =============== */
  function initTabs() {
    document.querySelectorAll('.tabs-nav').forEach(nav => {
      nav.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          const tabId = btn.dataset.tab;
          if (!tabId) return;
          /* Deactivate all */
          nav.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
          const section = nav.closest('section') || nav.parentElement;
          section.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
          /* Activate selected */
          btn.classList.add('active');
          const panel = document.getElementById(tabId);
          if (panel) panel.classList.add('active');
        });
      });
    });
  }

  /* ===== FAQ ACCORDION ================================ */
  function initFAQ() {
    document.querySelectorAll('.faq-item').forEach(item => {
      const q = item.querySelector('.faq-q');
      if (!q) return;
      q.addEventListener('click', () => {
        const open = item.classList.contains('open');
        document.querySelectorAll('.faq-item.open').forEach(x => x.classList.remove('open'));
        if (!open) item.classList.add('open');
      });
    });
  }

  /* ===== GALLERY MASONRY FILTER ====================== */
  function initGalleryFilter() {
    document.querySelectorAll('.filter-btn[data-filter]').forEach(btn => {
      btn.addEventListener('click', () => {
        const filter = btn.dataset.filter;
        btn.closest('.filter-bar').querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        document.querySelectorAll('[data-cat]').forEach(item => {
          const match = filter === 'all' || item.dataset.cat === filter;
          item.style.transition = 'opacity .3s ease, transform .3s ease';
          item.style.opacity = match ? '1' : '0.15';
          item.style.transform = match ? 'scale(1)' : 'scale(0.96)';
          item.style.pointerEvents = match ? '' : 'none';
        });
      });
    });
  }

  /* ===== LIGHTBOX ===================================== */
  function initLightbox() {
    const lb    = document.getElementById('lightbox');
    if (!lb) return;

    const box   = lb.querySelector('.lb-img');
    const close = lb.querySelector('.lb-close');
    const overlay = lb.querySelector('.lb-overlay');
    const prev  = lb.querySelector('.lb-prev');
    const next  = lb.querySelector('.lb-next');

    let images   = [];
    let current  = 0;

    function open(src, idx) {
      box.src = src;
      current = idx;
      lb.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
    function closeLb() {
      lb.classList.remove('active');
      document.body.style.overflow = '';
    }
    function showNav(dir) {
      current = (current + dir + images.length) % images.length;
      box.src = images[current];
    }

    /* Collect gallery images */
    document.querySelectorAll('.gallery-item img, .gallery-masonry .gallery-item img').forEach((img, idx) => {
      images.push(img.src);
      img.closest('.gallery-item')?.addEventListener('click', () => open(img.src, idx));
    });

    close?.addEventListener('click', closeLb);
    overlay?.addEventListener('click', closeLb);
    prev?.addEventListener('click', () => showNav(-1));
    next?.addEventListener('click', () => showNav(1));
    document.addEventListener('keydown', e => {
      if (!lb.classList.contains('active')) return;
      if (e.key === 'Escape') closeLb();
      if (e.key === 'ArrowLeft')  showNav(currentLang === 'ar' ? 1 : -1);
      if (e.key === 'ArrowRight') showNav(currentLang === 'ar' ? -1 : 1);
    });
  }

  /* ===== FORM SUBMIT MOCK ============================= */
  function initForms() {
    document.querySelectorAll('[data-form-submit]').forEach(form => {
      form.addEventListener('submit', e => {
        e.preventDefault();
        const btn = form.querySelector('[type=submit]');
        const origText = btn.innerHTML;
        btn.disabled = true;
        btn.innerHTML = '<i class="fa-solid fa-circle-notch fa-spin"></i>';
        setTimeout(() => {
          btn.innerHTML = '<i class="fa-solid fa-circle-check"></i>' +
            (currentLang === 'ar' ? ' تم الإرسال بنجاح!' : ' Sent Successfully!');
          btn.style.background = 'linear-gradient(135deg,#16a34a,#22c55e)';
          setTimeout(() => {
            btn.disabled = false;
            btn.innerHTML = origText;
            btn.style.background = '';
            form.reset();
          }, 3500);
        }, 1800);
      });
    });
  }

  /* ===== SMOOTH HASH SCROLL =========================== */
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(a => {
      a.addEventListener('click', e => {
        const target = document.querySelector(a.getAttribute('href'));
        if (target) {
          e.preventDefault();
          const offset = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-h'));
          const top = target.getBoundingClientRect().top + window.scrollY - offset - 16;
          window.scrollTo({ top, behavior: 'smooth' });
        }
      });
    });
  }

  /* ===== INIT ========================================= */
  document.addEventListener('DOMContentLoaded', () => {
    applyLanguage(currentLang);
    initNavbar();
    initReveal();
    initCounters();
    initTabs();
    initFAQ();
    initGalleryFilter();
    initLightbox();
    initForms();
    initSmoothScroll();
  });
})();
