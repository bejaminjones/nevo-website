# Nevo Website Brand Redesign — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rewrite `index.html` to match Nevo's warm, muted, editorial brand identity — replacing the current dark SaaS look.

**Architecture:** Single-file static site. Complete rewrite of `index.html` (CSS + HTML + JS all inline). Images already exist in `images/`. No build step.

**Tech Stack:** HTML, CSS, vanilla JS. Google Fonts (Instrument Serif, DM Sans). Deployed via Cloudflare Pages from GitHub.

**Branch:** `redesign/brand-alignment` (already created)

**Spec:** `docs/superpowers/specs/2026-04-14-website-brand-redesign.md`

---

### Task 1: CSS Foundation — Variables, Reset, Typography

**Files:**
- Modify: `index.html` (full rewrite — start from scratch)

This task creates the `<head>`, CSS custom properties, reset, and typography styles. Everything else builds on this.

- [ ] **Step 1: Write the HTML skeleton with CSS variables and base styles**

Write the full `<head>` section and opening CSS with:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nevo — Intelligent Note-Taking</title>
    <meta name="description" content="Just start writing. Nevo organises your notes with on-device AI into 11 categories. No folders, no tags, no effort. Complete privacy.">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,400&display=swap" rel="stylesheet">
    <style>
        :root {
            --bg: #FAF8F5;
            --bg-surface: #F2EDE7;
            --text: #1A1816;
            --text-secondary: #6B635A;
            --border: #E8E4DF;
            --accent: #B0C4DE;

            --cat-work: #B0C4DE;
            --cat-tasks: #E5C4A5;
            --cat-shopping: #C4DCC0;
            --cat-ideas: #E8D8A8;
            --cat-journal: #D4A5A5;
            --cat-health: #E8B4B4;
            --cat-finance: #C0D8B8;
            --cat-learning: #C8DCE4;
            --cat-writing: #D4A5B5;
            --cat-creative: #B8C4D8;
            --cat-reference: #BDBBB8;
        }

        * { margin: 0; padding: 0; box-sizing: border-box; }
        html { scroll-behavior: smooth; }

        body {
            font-family: 'DM Sans', -apple-system, BlinkMacSystemFont, sans-serif;
            background: var(--bg);
            color: var(--text);
            line-height: 1.6;
            -webkit-font-smoothing: antialiased;
        }

        h1, h2, h3 {
            font-family: 'Instrument Serif', Georgia, serif;
            font-weight: 400;
            line-height: 1.15;
        }
    </style>
</head>
```

- [ ] **Step 2: Save as index.html and open in browser to verify**

Save the file (with empty `<body></body></html>` closing tags) and open in browser. Should show a warm cream blank page with no errors in console.

```bash
cd /Users/benjones/Documents/GitHub/Nevo/website
open index.html
```

- [ ] **Step 3: Commit**

```bash
git add index.html
git commit -m "redesign: CSS foundation with warm palette variables and typography"
```

---

### Task 2: Nav Section

**Files:**
- Modify: `index.html`

Add the sticky navigation bar with real logo, links, and download CTA.

- [ ] **Step 1: Add nav CSS**

Add inside the `<style>` block, after the base styles:

```css
/* ===== NAV ===== */
nav {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
    padding: 1.25rem 3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: background 0.4s ease, backdrop-filter 0.4s ease;
}

nav.scrolled {
    background: rgba(250, 248, 245, 0.85);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border-bottom: 1px solid var(--border);
}

.logo {
    display: flex;
    align-items: center;
    gap: 0.6rem;
    text-decoration: none;
    color: var(--text);
}

.logo img {
    width: 36px;
    height: 36px;
}

.logo span {
    font-family: 'Instrument Serif', serif;
    font-size: 1.4rem;
}

.nav-links {
    display: flex;
    gap: 2rem;
    align-items: center;
}

.nav-links a {
    color: var(--text-secondary);
    text-decoration: none;
    font-size: 0.9rem;
    font-weight: 500;
    transition: color 0.3s ease;
}

.nav-links a:hover {
    color: var(--text);
}

.nav-cta {
    background: var(--text);
    color: var(--bg) !important;
    padding: 0.6rem 1.25rem;
    border-radius: 100px;
    font-weight: 600 !important;
    transition: opacity 0.3s ease;
}

.nav-cta:hover {
    opacity: 0.85;
}
```

- [ ] **Step 2: Add nav HTML**

Add inside `<body>`:

```html
<nav id="navbar">
    <a href="#" class="logo">
        <img src="images/nevo-logo.png" alt="Nevo" />
        <span>Nevo</span>
    </a>
    <div class="nav-links">
        <a href="#how-it-works">Features</a>
        <a href="#categories">Categories</a>
        <a href="#privacy">Privacy</a>
        <a href="#download" class="nav-cta">Download</a>
    </div>
</nav>
```

- [ ] **Step 3: Verify in browser**

Reload `index.html`. Nav should be visible at top with logo, links, and dark download pill. No console errors.

- [ ] **Step 4: Commit**

```bash
git add index.html
git commit -m "redesign: add sticky nav with real logo and warm CTA"
```

---

### Task 3: Hero Section

**Files:**
- Modify: `index.html`

The centrepiece — headline, subheadline, single CTA, and phone mockup with real screenshot.

- [ ] **Step 1: Add hero + phone mockup CSS**

```css
/* ===== HERO ===== */
.hero {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 8rem 2rem 4rem;
}

.hero-content {
    max-width: 700px;
}

.hero h1 {
    font-size: clamp(3rem, 7vw, 5rem);
    letter-spacing: -0.03em;
    margin-bottom: 1.25rem;
    color: var(--text);
}

.hero-subtitle {
    font-size: 1.15rem;
    color: var(--text-secondary);
    max-width: 520px;
    margin: 0 auto 2.5rem;
    line-height: 1.7;
}

.btn-primary {
    display: inline-flex;
    align-items: center;
    gap: 0.6rem;
    background: var(--text);
    color: var(--bg);
    padding: 0.9rem 1.75rem;
    border-radius: 100px;
    font-weight: 600;
    font-size: 1rem;
    text-decoration: none;
    transition: opacity 0.3s ease;
}

.btn-primary:hover {
    opacity: 0.85;
}

.btn-primary svg {
    width: 18px;
    height: 18px;
}

/* ===== PHONE MOCKUP ===== */
.hero-visual {
    margin-top: 4rem;
    width: 100%;
    max-width: 900px;
}

.phone-mockup {
    position: relative;
    margin: 0 auto;
    width: 300px;
    height: 640px;
    background: var(--text);
    border-radius: 48px;
    padding: 10px;
    box-shadow:
        0 40px 80px rgba(26, 24, 22, 0.15),
        0 0 0 1px rgba(26, 24, 22, 0.08);
}

.phone-screen {
    width: 100%;
    height: 100%;
    border-radius: 40px;
    overflow: hidden;
}

.phone-screen img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top;
    border-radius: 40px;
}
```

- [ ] **Step 2: Add hero HTML**

```html
<section class="hero">
    <div class="hero-content">
        <h1>Just start writing.</h1>
        <p class="hero-subtitle">
            Nevo figures out where it belongs. On-device AI organises your notes
            into 11 categories — no folders, no tags, no effort.
        </p>
        <a href="#download" class="btn-primary">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
            Download for iOS
        </a>
    </div>

    <div class="hero-visual">
        <div class="phone-mockup">
            <div class="phone-screen">
                <img src="images/screenshot-notes-grid.png" alt="Nevo notes grid showing categorised notes" />
            </div>
        </div>
    </div>
</section>
```

- [ ] **Step 3: Verify in browser**

Reload. Should see warm cream page, "Just start writing." headline in Instrument Serif, subtitle in DM Sans, dark pill CTA, and the phone mockup with the real notes grid screenshot below.

- [ ] **Step 4: Commit**

```bash
git add index.html
git commit -m "redesign: hero section with warm copy and real screenshot"
```

---

### Task 4: How It Works Section

**Files:**
- Modify: `index.html`

Three numbered steps in a horizontal row.

- [ ] **Step 1: Add how-it-works CSS**

```css
/* ===== HOW IT WORKS ===== */
.how-it-works {
    padding: 6rem 2rem;
}

.section-header {
    text-align: center;
    max-width: 600px;
    margin: 0 auto 4rem;
}

.section-label {
    font-family: 'DM Sans', sans-serif;
    font-size: 0.85rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    color: var(--text-secondary);
    margin-bottom: 0.75rem;
}

.section-title {
    font-size: clamp(2rem, 4vw, 3rem);
    letter-spacing: -0.02em;
}

.steps {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2.5rem;
    max-width: 960px;
    margin: 0 auto;
}

.step-number {
    font-family: 'Instrument Serif', serif;
    font-size: 3rem;
    color: var(--accent);
    line-height: 1;
    margin-bottom: 0.75rem;
}

.step h3 {
    font-family: 'DM Sans', sans-serif;
    font-size: 1.1rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
}

.step p {
    color: var(--text-secondary);
    font-size: 0.95rem;
    line-height: 1.7;
}
```

- [ ] **Step 2: Add how-it-works HTML**

```html
<section class="how-it-works" id="how-it-works">
    <div class="section-header animate-on-scroll">
        <div class="section-label">How it works</div>
        <h2 class="section-title">Capture, categorise, done</h2>
    </div>

    <div class="steps">
        <div class="step animate-on-scroll">
            <div class="step-number">1</div>
            <h3>Write anything</h3>
            <p>Meeting notes, grocery lists, poems, ideas — just capture the thought.</p>
        </div>
        <div class="step animate-on-scroll">
            <div class="step-number">2</div>
            <h3>Nevo categorises</h3>
            <p>On-device AI reads your note and sorts it into one of 11 research-backed categories.</p>
        </div>
        <div class="step animate-on-scroll">
            <div class="step-number">3</div>
            <h3>Everything in its place</h3>
            <p>Your notes organise themselves. Override anytime — Nevo learns your preferences.</p>
        </div>
    </div>
</section>
```

- [ ] **Step 3: Verify in browser**

Three columns with large blue "1 2 3" numerals, bold titles, and warm grey descriptions. Should stack on mobile (we'll add the responsive CSS later).

- [ ] **Step 4: Commit**

```bash
git add index.html
git commit -m "redesign: three-step how-it-works section"
```

---

### Task 5: Categories Section

**Files:**
- Modify: `index.html`

Two-column layout: phone screenshot left, copy and category pills right.

- [ ] **Step 1: Add categories CSS**

```css
/* ===== CATEGORIES ===== */
.categories {
    padding: 6rem 2rem;
    background: var(--bg-surface);
}

.categories-inner {
    max-width: 1100px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: center;
}

.categories-phone {
    width: 280px;
    height: 580px;
    background: var(--text);
    border-radius: 44px;
    padding: 10px;
    margin: 0 auto;
    box-shadow:
        0 40px 80px rgba(26, 24, 22, 0.12),
        0 0 0 1px rgba(26, 24, 22, 0.06);
}

.categories-phone .phone-screen {
    width: 100%;
    height: 100%;
    border-radius: 36px;
    overflow: hidden;
}

.categories-phone .phone-screen img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top;
    border-radius: 36px;
}

.categories-content .section-label {
    text-align: left;
}

.categories-content .section-title {
    text-align: left;
    font-size: clamp(2rem, 4vw, 2.75rem);
    margin-bottom: 1rem;
}

.categories-description {
    color: var(--text-secondary);
    font-size: 1.05rem;
    line-height: 1.7;
    margin-bottom: 2rem;
    text-align: left;
}

.category-pills {
    display: flex;
    flex-wrap: wrap;
    gap: 0.6rem;
}

.category-pill {
    display: flex;
    align-items: center;
    gap: 0.4rem;
    padding: 0.4rem 0.85rem;
    background: var(--bg);
    border-radius: 100px;
    font-size: 0.85rem;
    font-weight: 500;
    border: 1px solid var(--border);
}

.category-pill-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
}
```

- [ ] **Step 2: Add categories HTML**

```html
<section class="categories" id="categories">
    <div class="categories-inner">
        <div class="animate-on-scroll">
            <div class="categories-phone">
                <div class="phone-screen">
                    <img src="images/screenshot-categories.png" alt="Nevo category picker showing all 11 built-in categories" />
                </div>
            </div>
        </div>

        <div class="categories-content animate-on-scroll">
            <div class="section-label">11 Categories</div>
            <h2 class="section-title">Based on how people actually think</h2>
            <p class="categories-description">
                Not how filing cabinets work. Eleven categories grounded in the PARA method
                and cognitive load research — enough for meaningful organisation, few enough to
                remember. Create custom categories when you need them.
            </p>
            <div class="category-pills">
                <div class="category-pill"><span class="category-pill-dot" style="background: var(--cat-work)"></span> Work</div>
                <div class="category-pill"><span class="category-pill-dot" style="background: var(--cat-tasks)"></span> Tasks</div>
                <div class="category-pill"><span class="category-pill-dot" style="background: var(--cat-shopping)"></span> Shopping</div>
                <div class="category-pill"><span class="category-pill-dot" style="background: var(--cat-ideas)"></span> Ideas</div>
                <div class="category-pill"><span class="category-pill-dot" style="background: var(--cat-journal)"></span> Journal</div>
                <div class="category-pill"><span class="category-pill-dot" style="background: var(--cat-health)"></span> Health</div>
                <div class="category-pill"><span class="category-pill-dot" style="background: var(--cat-finance)"></span> Finance</div>
                <div class="category-pill"><span class="category-pill-dot" style="background: var(--cat-learning)"></span> Learning</div>
                <div class="category-pill"><span class="category-pill-dot" style="background: var(--cat-writing)"></span> Writing</div>
                <div class="category-pill"><span class="category-pill-dot" style="background: var(--cat-creative)"></span> Creative</div>
                <div class="category-pill"><span class="category-pill-dot" style="background: var(--cat-reference)"></span> Reference</div>
            </div>
        </div>
    </div>
</section>
```

- [ ] **Step 3: Verify in browser**

Two columns on warm surface background. Phone with category picker screenshot on left, headline + description + 11 coloured pills on right.

- [ ] **Step 4: Commit**

```bash
git add index.html
git commit -m "redesign: categories section with real screenshot and app colours"
```

---

### Task 6: Privacy Section

**Files:**
- Modify: `index.html`

Centred card with privacy messaging and three badges.

- [ ] **Step 1: Add privacy CSS**

```css
/* ===== PRIVACY ===== */
.privacy {
    padding: 6rem 2rem;
}

.privacy-card {
    max-width: 800px;
    margin: 0 auto;
    background: var(--bg-surface);
    border-radius: 24px;
    padding: 4rem;
    text-align: center;
    border: 1px solid var(--border);
}

.privacy-card h2 {
    font-size: clamp(2rem, 4vw, 2.75rem);
    margin-bottom: 1rem;
}

.privacy-card > p {
    font-size: 1.1rem;
    color: var(--text-secondary);
    max-width: 500px;
    margin: 0 auto 2.5rem;
    line-height: 1.7;
}

.privacy-badges {
    display: flex;
    justify-content: center;
    gap: 2rem;
    flex-wrap: wrap;
}

.privacy-badge {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: var(--text-secondary);
    font-size: 0.9rem;
    font-weight: 500;
}

.privacy-badge svg {
    width: 20px;
    height: 20px;
    color: var(--accent);
}
```

- [ ] **Step 2: Add privacy HTML**

```html
<section class="privacy" id="privacy">
    <div class="privacy-card animate-on-scroll">
        <h2>Everything stays on your device</h2>
        <p>
            Nevo uses Apple's on-device AI — your notes never touch a server.
            Sync across devices with iCloud, encrypted end-to-end.
        </p>
        <div class="privacy-badges">
            <div class="privacy-badge">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>
                On-device processing
            </div>
            <div class="privacy-badge">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
                iCloud sync
            </div>
            <div class="privacy-badge">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"/></svg>
                No data collection
            </div>
        </div>
    </div>
</section>
```

- [ ] **Step 3: Verify in browser**

Centred card on cream background. Headline, description, three badges with blue SVG icons.

- [ ] **Step 4: Commit**

```bash
git add index.html
git commit -m "redesign: privacy section with honest messaging"
```

---

### Task 7: CTA + Footer

**Files:**
- Modify: `index.html`

Final download CTA and minimal footer.

- [ ] **Step 1: Add CTA + footer CSS**

```css
/* ===== CTA ===== */
.cta {
    padding: 6rem 2rem;
    text-align: center;
}

.cta h2 {
    font-size: clamp(2.5rem, 5vw, 3.5rem);
    margin-bottom: 1.5rem;
    font-style: italic;
}

/* ===== FOOTER ===== */
footer {
    padding: 3rem 2rem;
    border-top: 1px solid var(--border);
}

.footer-content {
    max-width: 1100px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 1.5rem;
}

.footer-logo {
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.footer-logo img {
    width: 28px;
    height: 28px;
}

.footer-logo span {
    font-family: 'Instrument Serif', serif;
    font-size: 1.15rem;
}

.footer-links {
    display: flex;
    gap: 1.5rem;
}

.footer-links a {
    color: var(--text-secondary);
    text-decoration: none;
    font-size: 0.85rem;
    transition: color 0.3s ease;
}

.footer-links a:hover {
    color: var(--text);
}

.footer-copyright {
    color: var(--text-secondary);
    font-size: 0.8rem;
}
```

- [ ] **Step 2: Add CTA + footer HTML**

```html
<section class="cta" id="download">
    <h2>Start writing.</h2>
    <a href="#" class="btn-primary">
        <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
        Download for iOS
    </a>
</section>

<footer>
    <div class="footer-content">
        <div class="footer-logo">
            <img src="images/nevo-logo.png" alt="Nevo" />
            <span>Nevo</span>
        </div>
        <div class="footer-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Support</a>
        </div>
        <div class="footer-copyright">© 2025 Nevo. All rights reserved.</div>
    </div>
</footer>
```

- [ ] **Step 3: Verify in browser**

Italic "Start writing." headline with download button. Footer with logo, links, and copyright in a single row.

- [ ] **Step 4: Commit**

```bash
git add index.html
git commit -m "redesign: CTA and footer sections"
```

---

### Task 8: Responsive + Scroll Animations + JS

**Files:**
- Modify: `index.html`

Add mobile breakpoints, scroll-triggered fade-in animations, and the nav scroll effect.

- [ ] **Step 1: Add responsive CSS**

```css
/* ===== RESPONSIVE ===== */
@media (max-width: 1024px) {
    .categories-inner {
        grid-template-columns: 1fr;
        gap: 3rem;
    }

    .categories-content .section-label,
    .categories-content .section-title,
    .categories-description {
        text-align: center;
    }

    .category-pills {
        justify-content: center;
    }
}

@media (max-width: 768px) {
    nav { padding: 1rem 1.5rem; }
    .nav-links a:not(.nav-cta) { display: none; }
    .hero { padding: 7rem 1.5rem 3rem; }
    .steps { grid-template-columns: 1fr; gap: 2rem; text-align: center; }
    .step-number { font-size: 2.5rem; }
    .privacy-card { padding: 2.5rem 1.5rem; }
    .privacy-badges { flex-direction: column; align-items: center; }
    .phone-mockup { width: 260px; height: 554px; }
    .categories-phone { width: 240px; height: 500px; }
    .footer-content { flex-direction: column; text-align: center; }
}

/* ===== SCROLL ANIMATIONS ===== */
.animate-on-scroll {
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 0.7s ease, transform 0.7s ease;
}

.animate-on-scroll.visible {
    opacity: 1;
    transform: translateY(0);
}
```

- [ ] **Step 2: Add JavaScript before closing `</body>`**

```html
<script>
    // Nav scroll effect
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        navbar.classList.toggle('scrolled', window.scrollY > 50);
    });

    // Scroll animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));

    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });
</script>
```

- [ ] **Step 3: Test in browser**

Full test:
1. Scroll down — nav should get backdrop blur and border
2. Sections fade in as they enter viewport
3. Click "Features" nav link — smooth scrolls to How It Works
4. Resize to mobile width — steps stack, nav links hide, phone mockups shrink
5. No console errors

- [ ] **Step 4: Commit**

```bash
git add index.html
git commit -m "redesign: responsive breakpoints, scroll animations, nav JS"
```

---

### Task 9: Visual Polish + Push

**Files:**
- Modify: `index.html`

Final pass — verify everything looks right, then push to trigger Cloudflare deploy.

- [ ] **Step 1: Full visual review in browser**

Open `index.html` and scroll through the full page. Check:
- Warm cream background throughout (no dark sections remaining)
- Instrument Serif on all headlines, DM Sans on body
- Real screenshots in both phone mockups (notes grid + categories)
- Real logo in nav and footer
- No fake testimonials anywhere
- Category pills show correct 11 categories with real app colours
- Mobile view looks good (resize to 375px width)

- [ ] **Step 2: Push branch to GitHub**

```bash
cd /Users/benjones/Documents/GitHub/Nevo/website
git push -u origin redesign/brand-alignment
```

This triggers a Cloudflare Pages preview deploy. Check the preview URL from Cloudflare to verify the live site.

- [ ] **Step 3: Verify preview deploy**

Check the Cloudflare Pages deployment status via API or dashboard. The preview URL should show the redesigned site.
