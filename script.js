const menuToggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#primary-navigation');

// Set this to the GA4 Measurement ID supplied from Google Analytics before launch.
const GA_MEASUREMENT_ID = 'G-9T35CTNRDM';
if (GA_MEASUREMENT_ID) {
  const gtagScript = document.createElement('script');
  gtagScript.async = true;
  gtagScript.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(gtagScript);
  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() { window.dataLayer.push(arguments); };
  window.gtag('js', new Date());
  window.gtag('config', GA_MEASUREMENT_ID, { allow_google_signals: false, allow_ad_personalization_signals: false });
  document.querySelectorAll('a[href]').forEach((link) => {
    link.addEventListener('click', () => {
      const href = link.getAttribute('href') || '';
      if (href.includes('/work/')) window.gtag('event', 'select_content', { content_type: 'work_navigation' });
      if (href.includes('/about/')) window.gtag('event', 'select_content', { content_type: 'about_navigation' });
      if (href.includes('/contact/')) window.gtag('event', 'contact_cta');
    });
  });
}

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

function decorateOutboundLinks() {
  document.querySelectorAll('a[href]').forEach((link) => {
    const href = link.getAttribute('href') || '';
    let destination;
    try { destination = new URL(href, document.baseURI); } catch { return; }
    if (!/^https?:$/.test(destination.protocol) || destination.origin === window.location.origin || link.dataset.outboundTracked) return;
    const content = (link.textContent || destination.hostname).trim().toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 40) || destination.hostname;
    destination.searchParams.set('utm_source', 'shantnu.in');
    destination.searchParams.set('utm_medium', 'referral');
    destination.searchParams.set('utm_campaign', 'personal_site');
    destination.searchParams.set('utm_content', content);
    link.href = destination.toString();
    link.dataset.outboundTracked = 'true';
    link.addEventListener('click', () => {
      if (window.gtag) window.gtag('event', 'outbound_click', { link_url: destination.toString(), link_domain: destination.hostname, link_text: content });
    });
  });
}

decorateOutboundLinks();

document.querySelectorAll('[data-filter]').forEach((filter) => {
  filter.addEventListener('click', () => {
    const selected = filter.getAttribute('data-filter');
    if (window.gtag) window.gtag('event', 'filter_notes', { category: selected });
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
