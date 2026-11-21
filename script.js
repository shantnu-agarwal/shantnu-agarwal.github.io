const menuToggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#primary-navigation');

function closeMenu() {
  navigation?.classList.remove('is-open');
  menuToggle?.setAttribute('aria-expanded', 'false');
}

menuToggle?.addEventListener('click', () => {
  const isOpen = navigation?.classList.toggle('is-open') ?? false;
  menuToggle.setAttribute('aria-expanded', String(isOpen));
});

navigation?.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', (event) => { if (event.key === 'Escape') closeMenu(); });

// Keep the footer consistent without duplicating it across every static page.
const homeLink = document.querySelector('.wordmark')?.getAttribute('href') || 'index.html';
const routeBase = homeLink.replace(/index\.html$/, '');
const footerMarkup = `<div class="footer-contact"><a href="mailto:shantnu@shantnu.in">shantnu@shantnu.in</a><a href="https://www.linkedin.com/in/shantnuagarwal/" target="_blank" rel="noreferrer">LinkedIn ↗</a></div>`;
const existingFooter = document.querySelector('.site-footer');
if (existingFooter) {
  const footerBrand = existingFooter.firstElementChild;
  if (footerBrand && !footerBrand.querySelector('.footer-contact')) footerBrand.insertAdjacentHTML('beforeend', footerMarkup);
} else {
  document.body.insertAdjacentHTML('beforeend', `<footer class="site-footer container"><div><a class="wordmark" href="${homeLink}">shantnu.in</a><p>Always something new to explore.</p>${footerMarkup}</div><nav aria-label="Footer navigation"><a href="${routeBase}notes/">Notes</a><a href="${routeBase}work/">Work</a><a href="${routeBase}about/">About</a><a href="${routeBase}life/">Life</a><a href="${routeBase}contact/">Contact</a></nav></footer>`);
}

// Browsers do not resolve directory URLs to index.html when previewing via file://.
// Static hosts can keep the clean directory URLs; this fallback only affects local files.
if (window.location.protocol === 'file:') {
  document.querySelectorAll('a[href$="/"]').forEach((link) => {
    const href = link.getAttribute('href') || '';
    const isExternal = /^(?:[a-z]+:|\/\/)/i.test(href);
    if (!isExternal) link.setAttribute('href', `${href}index.html`);
  });
}

document.querySelectorAll('[data-filter]').forEach((filter) => {
  filter.addEventListener('click', () => {
    const selected = filter.getAttribute('data-filter');
    document.querySelectorAll('[data-filter]').forEach((item) => {
      const active = item === filter;
      item.classList.toggle('is-active', active);
      item.setAttribute('aria-pressed', String(active));
    });
    document.querySelectorAll('[data-category]').forEach((card) => {
      card.hidden = selected !== 'all' && card.getAttribute('data-category') !== selected;
    });
  });
});
