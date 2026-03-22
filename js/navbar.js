/* =============================================================
   AL-KUNOOZ UNIVERSITY — Shared Navbar Component v2
   Injects the premium navbar into every page.
   Each page sets: window.KU_PAGE, window.KU_NAV_SOLID
   ============================================================= */
(function () {
  'use strict';

  const page = window.KU_PAGE || 'index.html';
  const pfx  = window.KU_ASSET_PREFIX || '';

  const links = [
    {
      href: 'index.html', tKey: 'nav_home', icon: 'fa-house',
    },
    {
      href: 'about.html', tKey: 'nav_about', icon: 'fa-university',
      dropdown: [
        { href: 'about.html#overview', nameAr: 'نظرة عامة',       nameEn: 'Overview',         icon: 'fa-info-circle' },
        { href: 'about.html#vision',   nameAr: 'الرؤية والرسالة', nameEn: 'Vision & Mission',  icon: 'fa-eye' },
        { href: 'about.html#quality',  nameAr: 'ضمان الجودة',     nameEn: 'Quality Assurance', icon: 'fa-award' },
        { href: 'about.html#org',      nameAr: 'الهيكل التنظيمي', nameEn: 'Organization',      icon: 'fa-sitemap' },
      ]
    },
    { href: 'departments.html',     tKey: 'nav_colleges',   icon: 'fa-graduation-cap' },
    { href: 'admin-units.html',     tKey: 'nav_admin',      icon: 'fa-building' },
    { href: 'news.html',            tKey: 'nav_news',       icon: 'fa-newspaper' },
    { href: 'admission.html',       tKey: 'nav_admission',  icon: 'fa-pen-to-square' },
    { href: 'students.html',        tKey: 'nav_students',   icon: 'fa-users' },
    { href: 'downloads.html',       tKey: 'nav_downloads',  icon: 'fa-download' },
    { href: 'gallery.html',         tKey: 'nav_gallery',    icon: 'fa-images' },
    { href: 'contact.html',         tKey: 'nav_contact',    icon: 'fa-phone' },
  ];

  function t(key) {
    if (typeof translations === 'undefined') return key;
    const lang = localStorage.getItem('ku-lang') || 'ar';
    return (translations[lang] && translations[lang][key]) || key;
  }

  function isActive(href) {
    return page === href || page === href.split('#')[0];
  }

  /* ── Desktop menu ── */
  function buildMenu() {
    return links.map(link => {
      const active = isActive(link.href) ? ' active' : '';
      if (link.dropdown) {
        const items = link.dropdown.map(d =>
          `<a href="${pfx}${d.href}">
            <i class="fa-solid ${d.icon}"></i>
            <span data-dd-ar="${d.nameAr}" data-dd-en="${d.nameEn}">${d.nameAr}</span>
          </a>`
        ).join('');
        return `<li class="has-dropdown">
          <a href="${pfx}${link.href}" class="nav-link${active}" data-t="${link.tKey}">
            ${t(link.tKey)}<i class="fa-solid fa-chevron-down" style="font-size:8px;opacity:.6;margin-inline-start:2px;"></i>
          </a>
          <div class="dropdown-menu">${items}</div>
        </li>`;
      }
      return `<li>
        <a href="${pfx}${link.href}" class="nav-link${active}" data-t="${link.tKey}">${t(link.tKey)}</a>
      </li>`;
    }).join('');
  }

  /* ── Mobile menu ── */
  function buildMobile() {
    return links.map(link => {
      const active = isActive(link.href) ? ' active' : '';
      let html = `<a href="${pfx}${link.href}" class="${active.trim()}" data-t="${link.tKey}">
        <i class="fa-solid ${link.icon}"></i>${t(link.tKey)}</a>`;
      if (link.dropdown) {
        link.dropdown.forEach(d => {
          html += `<a href="${pfx}${d.href}" style="padding-inline-start:44px;font-size:13px;opacity:.65;">
            <i class="fa-solid ${d.icon}" style="font-size:12px;width:14px;"></i>
            <span data-dd-ar="${d.nameAr}" data-dd-en="${d.nameEn}">${d.nameAr}</span>
          </a>`;
        });
      }
      return html;
    }).join('');
  }

  const cls = window.KU_NAV_SOLID ? 'solid' : 'transparent';

  const html = `
<nav id="navbar" class="${cls}">
  <div class="container">
    <div class="nav-inner">

      <!-- LOGO -->
      <a href="${pfx}index.html" class="nav-logo">
        <img src="${pfx}image/logo-1copy copy.png" alt="شعار جامعة الكنوز | Al-Kunooz University">
        <div class="nav-logo-text">
          <span class="logo-name-ar" data-t="uni_name_ar">جامعة الكنوز</span>
          <span class="logo-name-en">Al-Kunooz University</span>
        </div>
      </a>

      <!-- DESKTOP MENU -->
      <ul class="nav-menu" id="navMenu">${buildMenu()}</ul>

      <!-- ACTIONS -->
      <div class="nav-actions">
        <div class="lang-switcher" role="group" aria-label="Language">
          <button class="lang-btn" data-lang="ar" aria-label="Arabic">ع</button>
          <button class="lang-btn" data-lang="en" aria-label="English">EN</button>
        </div>
        <a href="${pfx}admission.html" class="btn btn-gold nav-cta" data-t="nav_apply">
          <i class="fa-solid fa-pen-to-square"></i>سجل الآن
        </a>
        <button class="hamburger" id="navToggle" aria-label="Toggle menu" aria-expanded="false">
          <span></span><span></span><span></span>
        </button>
      </div>

    </div>
  </div>
</nav>

<!-- MOBILE NAV -->
<div class="mobile-nav" id="mobileNav" aria-hidden="true">
  <div class="mobile-nav-links">${buildMobile()}</div>
  <div class="mobile-nav-bottom">
    <div class="lang-switcher">
      <button class="lang-btn" data-lang="ar">ع</button>
      <button class="lang-btn" data-lang="en">EN</button>
    </div>
    <a href="${pfx}admission.html" class="btn btn-gold btn-sm" data-t="nav_apply">سجل الآن</a>
  </div>
</div>`;

  /* ── Inject ── */
  const root = document.getElementById('navbar-root');
  if (root) {
    root.outerHTML = html;
  } else {
    document.body.insertAdjacentHTML('afterbegin', html);
  }

  /* ── Update dropdown text on lang change ── */
  document.addEventListener('langchange', e => {
    const isAr = e.detail.lang === 'ar';
    document.querySelectorAll('[data-dd-ar]').forEach(el => {
      el.textContent = isAr ? el.dataset.ddAr : el.dataset.ddEn;
    });
  });
})();
