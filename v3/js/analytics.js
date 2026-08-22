/*
 * BHANIXS — Analytics loader
 * -----------------------------------------------------------------
 * Wires up GA4 (behavioral/event analytics) and Cloudflare Web
 * Analytics (lightweight, privacy-friendly pageview analytics —
 * pairs naturally since the site is hosted on Cloudflare).
 *
 * ‼ PLACEHOLDER IDS — swap before going live:
 *   - GA4_MEASUREMENT_ID: get from Google Analytics Admin > Data
 *     Streams > Web > Measurement ID (format G-XXXXXXXXXX)
 *   - CF_BEACON_TOKEN: get from Cloudflare dashboard > Analytics &
 *     Logs > Web Analytics > Add a site (copy the `token` value)
 * -----------------------------------------------------------------
 */
(() => {
  'use strict';

  const GA4_MEASUREMENT_ID = 'G-XXXXXXXXXX'; // TODO: replace with real GA4 ID
  const CF_BEACON_TOKEN = 'REPLACE_WITH_CF_BEACON_TOKEN'; // TODO: replace with real Cloudflare token

  const isPlaceholder = (v) => !v || v.includes('XXXX') || v.startsWith('REPLACE_WITH');

  // ---------- GA4 (gtag.js) ----------
  if (!isPlaceholder(GA4_MEASUREMENT_ID)) {
    const s = document.createElement('script');
    s.async = true;
    s.src = `https://www.googletagmanager.com/gtag/js?id=${GA4_MEASUREMENT_ID}`;
    document.head.appendChild(s);

    window.dataLayer = window.dataLayer || [];
    function gtag() { window.dataLayer.push(arguments); }
    window.gtag = gtag;
    gtag('js', new Date());
    gtag('config', GA4_MEASUREMENT_ID, { anonymize_ip: true });
  } else {
    // eslint-disable-next-line no-console
    console.info('[bhanixs analytics] GA4 not configured — set GA4_MEASUREMENT_ID in js/analytics.js');
  }

  // ---------- Cloudflare Web Analytics ----------
  if (!isPlaceholder(CF_BEACON_TOKEN)) {
    const cf = document.createElement('script');
    cf.defer = true;
    cf.src = 'https://static.cloudflareinsights.com/beacon.min.js';
    cf.setAttribute('data-cf-beacon', JSON.stringify({ token: CF_BEACON_TOKEN }));
    document.head.appendChild(cf);
  } else {
    // eslint-disable-next-line no-console
    console.info('[bhanixs analytics] Cloudflare Web Analytics not configured — set CF_BEACON_TOKEN in js/analytics.js');
  }

  // ---------- Unified event tracking helper ----------
  // Fires GA4 custom events for the interactions that matter on a
  // conversion-first site: CTA clicks, nav interactions, form submits,
  // and section-level scroll depth. Cloudflare Web Analytics is
  // pageview-level only and does not accept custom events.
  window.bhanixsTrack = function bhanixsTrack(eventName, params) {
    if (window.gtag) {
      window.gtag('event', eventName, params || {});
    }
    // eslint-disable-next-line no-console
    console.debug('[bhanixs analytics]', eventName, params || {});
  };

  // ---------- Everything below needs the DOM, so wait for it ----------
  document.addEventListener('DOMContentLoaded', () => {
    // Section view tracking
    const sections = document.querySelectorAll('section[id]');
    if ('IntersectionObserver' in window && sections.length) {
      const seen = new Set();
      const sectionObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && !seen.has(entry.target.id)) {
              seen.add(entry.target.id);
              window.bhanixsTrack('section_view', { section: entry.target.id });
            }
          });
        },
        { threshold: 0.4 }
      );
      sections.forEach((el) => sectionObserver.observe(el));
    }

    // CTA / link clicks — any .btn or .link-teal, tagged with label + destination
    document.querySelectorAll('a.btn, button.btn, a.link-teal').forEach((el) => {
      el.addEventListener('click', () => {
        window.bhanixsTrack('cta_click', {
          label: (el.textContent || '').trim().replace(/\s+/g, ' ').slice(0, 80),
          href: el.getAttribute('href') || '',
          page: window.location.pathname,
        });
      });
    });

    // Primary nav clicks
    document.querySelectorAll('.nav-links a, .mobile-drawer nav a').forEach((el) => {
      el.addEventListener('click', () => {
        window.bhanixsTrack('nav_click', { label: (el.textContent || '').trim(), href: el.getAttribute('href') || '' });
      });
    });

    // Contact form submit
    const form = document.getElementById('contact-form');
    if (form) {
      form.addEventListener('submit', () => {
        const need = form.querySelector('input[name="need"]:checked');
        const domain = form.querySelector('input[name="domain"]:checked');
        window.bhanixsTrack('contact_form_submit', {
          need: need ? need.value : '',
          domain: domain ? domain.value : '',
        });
      });
    }

    // Case study card clicks + work-page filter clicks
    document.querySelectorAll('[data-case-slug]').forEach((el) => {
      el.addEventListener('click', () => {
        window.bhanixsTrack('case_study_click', { slug: el.getAttribute('data-case-slug') });
      });
    });
    document.querySelectorAll('[data-filter]').forEach((el) => {
      el.addEventListener('click', () => {
        window.bhanixsTrack('work_filter', { filter: el.getAttribute('data-filter') });
      });
    });

    // Scroll depth (25/50/75/100%), fired once per threshold per page load
    const thresholds = [25, 50, 75, 100];
    const fired = {};
    window.addEventListener(
      'scroll',
      () => {
        const doc = document.documentElement;
        const scrolled = ((window.scrollY + window.innerHeight) / doc.scrollHeight) * 100;
        thresholds.forEach((t) => {
          if (scrolled >= t && !fired[t]) {
            fired[t] = true;
            window.bhanixsTrack('scroll_depth', { percent: t, page: window.location.pathname });
          }
        });
      },
      { passive: true }
    );
  });
})();
