'use strict';

// Mobile menu toggle
const toggle = document.querySelector('.nav-toggle');
const menu = document.querySelector('[data-menu]');
if (toggle && menu) {
  toggle.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });
}

// Smooth scroll for anchor links
const links = document.querySelectorAll('a[href^="#"]');
for (const link of links) {
  link.addEventListener('click', (e) => {
    const href = link.getAttribute('href');
    if (!href || href.length < 2) return;
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      if (menu && menu.classList.contains('open')) {
        menu.classList.remove('open');
        toggle?.setAttribute('aria-expanded', 'false');
      }
    }
  });
}

// Footer year
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Contact form: open mailto (no database)
const form = document.getElementById('contact-form');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const email = encodeURIComponent(data.get('email'));
    const type = encodeURIComponent(data.get('type'));
    const desc = encodeURIComponent(data.get('description'));

    const subject = encodeURIComponent(`New ${type || 'Project'} inquiry – CHJK Studios`);
    const body = encodeURIComponent(`Email: ${data.get('email')}
Project type: ${data.get('type')}
\nDetails:\n${data.get('description')}`);

    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  });
}
