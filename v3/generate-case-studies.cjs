// Generates v3/case-studies/{slug}.html from v3/data/case-studies.json.
// Run with: node generate-case-studies.js
// Re-run any time the JSON data changes — output files are fully regenerated.

const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, 'data', 'case-studies.json');
const outDir = path.join(__dirname, 'case-studies');
const studies = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

const esc = (s) => String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

const NAV = (active) => `
<nav class="nav">
  <div class="nav-inner">
    <a href="../index.html" class="nav-brand">
      <img src="../assets/logo/b-mark-nav.png" alt="BHANIXS" />
      <span>BHANIXS</span>
    </a>
    <div class="nav-links">
      <div class="nav-item-dropdown">
        <a href="../what-we-do.html">What We Do</a>
        <div class="nav-dropdown">
          <a href="../what-we-do.html#ai"><strong>AI &amp; Intelligent Systems</strong><small>Making your operations impossible to replicate</small></a>
          <a href="../what-we-do.html#blockchain"><strong>Blockchain Infrastructure</strong><small>Building trust you own rather than rent</small></a>
          <a href="../what-we-do.html#spatial"><strong>Spatial Computing</strong><small>Physical and digital — one defensible layer</small></a>
          <a href="../what-we-do.html" class="dropdown-cta">See all capabilities →</a>
        </div>
      </div>
      <a href="../how-we-work.html">How We Work</a>
      <a href="../our-work.html" class="${active === 'work' ? 'active' : ''}">Our Work</a>
      <a href="../about.html">About</a>
    </div>
    <div class="nav-cta">
      <a href="../contact.html" class="btn btn-outline">Start a Conversation</a>
      <button class="nav-toggle" aria-label="Open menu">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
      </button>
    </div>
  </div>
</nav>

<div class="mobile-drawer">
  <button class="mobile-drawer-close" aria-label="Close menu">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
  </button>
  <nav>
    <a href="../what-we-do.html">What We Do</a>
    <a href="../how-we-work.html">How We Work</a>
    <a href="../our-work.html">Our Work</a>
    <a href="../about.html">About</a>
    <a href="../contact.html">Contact</a>
  </nav>
  <a href="../contact.html" class="btn btn-primary btn-full btn-lg">Start a Conversation</a>
</div>`;

const FOOTER = `
<footer class="site-footer">
  <div class="container">
    <div class="footer-top">
      <div class="footer-brand">
        <img src="../assets/logo/wordmark-dark-1200.png" alt="BHANIXS" style="height:24px;width:auto;" />
        <p>Technology Firm</p>
      </div>
      <div class="footer-cols">
        <div class="footer-col">
          <h5>About</h5>
          <a href="../what-we-do.html">What We Do</a>
          <a href="../how-we-work.html">How We Work</a>
          <a href="../about.html">About Bhanixs</a>
          <a href="../about.html#team">The Team</a>
        </div>
        <div class="footer-col">
          <h5>Work</h5>
          <a href="../our-work.html">Case Studies</a>
          <a href="../how-we-work.html">Our Approach</a>
          <a href="../about.html#ip">IP &amp; Patents</a>
        </div>
        <div class="footer-col">
          <h5>Contact</h5>
          <a href="../contact.html">Start a Conversation</a>
          <a href="mailto:engage@bhanixs.com">engage@bhanixs.com<span class="placeholder-flag">placeholder</span></a>
          <a href="https://linkedin.com" target="_blank" rel="noopener">LinkedIn</a>
        </div>
        <div class="footer-col">
          <h5>Locations</h5>
          <span>Bengaluru (HQ)</span>
          <span>Dubai</span>
          <span>Singapore</span>
          <span>London</span>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <p>© 2026 Bhanixs Group. All rights reserved.</p>
      <div class="legal-links">
        <a href="#">Privacy Policy</a>
        <a href="#">Terms</a>
      </div>
    </div>
    <p class="footer-legal-entity">Bhanixs Group — registered in India<span class="placeholder-flag">registration ref pending</span></p>
  </div>
</footer>`;

function page(study, others) {
  const logoImg = study.logo
    ? `<img src="../${study.logo}" alt="${esc(study.company)}" style="height:40px;width:auto;background:#fff;border-radius:8px;padding:6px 10px;" />`
    : `<div class="mono-label" style="font-size:var(--text-sm);">${esc(study.company)}</div>`;

  const solutions = study.solutions
    .map(
      (s, i) => `
      <div class="solution-card reveal">
        <div class="gnum">${String(i + 1).padStart(2, '0')}</div>
        <h4>${esc(s.title)}</h4>
        <p>${esc(s.description)}</p>
      </div>`
    )
    .join('');

  const stats = study.stats
    .map(
      (s) => `
      <div class="stat-tile">
        <div class="stat-k">${esc(s.k)}</div>
        <div class="stat-v">${esc(s.v)}</div>
      </div>`
    )
    .join('');

  const tools = study.tools.map((t) => `<div class="tool-chip">${esc(t)}</div>`).join('');

  const feedback = study.feedback
    ? `
<section class="section section-bg-elevated">
  <div class="container" style="max-width: 760px;">
    <div class="feedback-block reveal">
      <blockquote>&ldquo;${esc(study.feedback.quote)}&rdquo;</blockquote>
      <div class="who"><strong>${esc(study.feedback.name)}</strong><br>${esc(study.feedback.role)}</div>
    </div>
  </div>
</section>`
    : '';

  const moreCards = others
    .slice(0, 3)
    .map(
      (o) => `
      <div class="case-card card-hover">
        <div class="client-name">${esc(o.company)}</div>
        <span class="tag-pill">${esc(o.category)}</span>
        <h4>${esc(o.headline)}</h4>
        <a href="${o.slug}.html" class="link-teal">Read →</a>
      </div>`
    )
    .join('');

  return `<!doctype html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>${esc(study.company)} — BHANIXS Case Study</title>
<meta name="description" content="${esc(study.headline)}" />
<meta property="og:title" content="${esc(study.company)} — BHANIXS Case Study" />
<meta property="og:description" content="${esc(study.headline)}" />
<meta property="og:image" content="../assets/logo/og-image.jpg" />
<link rel="icon" type="image/png" href="../assets/logo/favicon-32.png" />
<link rel="apple-touch-icon" href="../assets/logo/favicon-180.png" />
<link rel="stylesheet" href="../css/design-system.css" />
<link rel="stylesheet" href="../css/main.css" />
</head>
<body>
${NAV('work')}

<header class="case-detail-hero">
  <div class="container">
    <a href="../our-work.html" class="back-link">← All work</a>
    <div class="case-meta">
      <span class="tag-pill">${esc(study.company)}</span>
      <span class="tag-pill">${esc(study.domainTag)}</span>
      <span class="tag-pill">${esc(study.category)}</span>
    </div>
    ${logoImg}
    <h1 class="reveal" style="margin-top: var(--space-6);">${esc(study.headline)}</h1>
    <p class="sub reveal">${esc(study.sub)}</p>
    <dl class="meta-row">
      <div><dt>Timeline</dt><dd>${esc(study.timeline)}</dd></div>
      <div><dt>Year</dt><dd>${esc(study.year)}</dd></div>
      <div><dt>Domain</dt><dd>${esc(study.domainTag)}</dd></div>
    </dl>
  </div>
</header>

<section class="section section-bg-elevated">
  <div class="container" style="max-width: 820px;">
    <div class="eyebrow reveal">The Challenge</div>
    <p class="reveal" style="font-size: var(--text-xl); line-height: var(--leading-relaxed); color: var(--text-secondary);">${esc(study.challenge)}</p>
  </div>
</section>

<section class="section section-bg-primary">
  <div class="container">
    <div class="section-header reveal">
      <div class="eyebrow">Solutions</div>
      <h2>${esc(study.solutionsIntro)}</h2>
    </div>
    <div class="solutions-grid">
      ${solutions}
    </div>
  </div>
</section>

<section class="section section-bg-elevated">
  <div class="container">
    <div class="section-header center reveal">
      <div class="eyebrow">Impact</div>
      <h2>What changed.</h2>
    </div>
    <div class="stat-grid reveal-stagger">
      ${stats}
    </div>
  </div>
</section>

<section class="section section-bg-primary">
  <div class="container">
    <div class="section-header reveal">
      <div class="eyebrow">Tool Stack</div>
      <h2>What powered the build.</h2>
    </div>
    <div class="tools-grid reveal-stagger">
      ${tools}
    </div>
  </div>
</section>
${feedback}

<section class="section section-bg-elevated">
  <div class="container">
    <div class="section-header reveal">
      <div class="eyebrow">More Work</div>
      <h2>Other engagements.</h2>
    </div>
    <div class="more-work-grid reveal-stagger">
      ${moreCards}
    </div>
  </div>
</section>

<section class="vision" style="padding: var(--space-24) 0;">
  <div class="vision-inner reveal">
    <blockquote style="font-size: var(--text-3xl);">Ready to build something your competitors can't replicate?</blockquote>
    <a href="../contact.html" class="btn btn-primary btn-lg" style="margin-top: var(--space-8);">Start a Conversation</a>
  </div>
</section>

${FOOTER}

<script src="../js/analytics.js"></script>
<script src="../js/main.js"></script>
</body>
</html>
`;
}

if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

for (const study of studies) {
  const others = studies.filter((s) => s.slug !== study.slug);
  fs.writeFileSync(path.join(outDir, `${study.slug}.html`), page(study, others), 'utf8');
  console.log('wrote', `case-studies/${study.slug}.html`);
}
