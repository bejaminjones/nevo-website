# Nevo Website Brand Redesign

**Date:** 2026-04-14
**Status:** Approved
**Branch:** `redesign/brand-alignment`

## Goal

Redesign nevonotes.app to match Nevo's actual brand identity. The current site is a dark, generic SaaS landing page with fake testimonials and gradient text. The app itself is warm, muted, thoughtful, and quiet. The website should reflect that.

## Design Decisions

| Decision | Choice |
|---|---|
| Direction | Elevated editorial — warm palette with magazine-like polish |
| Base | Light — warm cream background |
| Copy tone | Warm and explanatory — friendly, concise, approachable |
| Testimonials | Removed entirely — add real reviews when available |

## Color Palette

All colors sourced from the app's actual palette.

### Base Colors

| Role | Hex | Description |
|---|---|---|
| Background | `#FAF8F5` | Warm cream |
| Surface | `#F2EDE7` | Card/section backgrounds |
| Text primary | `#1A1816` | Warm black |
| Text secondary | `#6B635A` | Warm grey |
| Border | `#E8E4DF` | Subtle warm border |

### Category Colors (from app)

| Category | Hex |
|---|---|
| Work | `#B0C4DE` |
| Tasks | `#E5C4A5` |
| Shopping | `#C4DCC0` |
| Ideas | `#E8D8A8` |
| Journal | `#D4A5A5` |
| Health | `#E8B4B4` |
| Finance | `#C0D8B8` |
| Learning | `#C8DCE4` |
| Writing | `#D4A5B5` |
| Creative | `#B8C4D8` |
| Reference | `#BDBBB8` |

## Typography

Keep the existing font pairing — it works well for the editorial direction.

- **Headlines:** Instrument Serif, 400 weight (editorial warmth)
- **Body:** DM Sans, 400/500/600 weight (clean readability)
- **Hero headline:** `clamp(3rem, 7vw, 5rem)` — large but not screaming
- **Body text:** `1.1rem` — comfortable reading size

## Page Structure

Six sections, top to bottom. Significantly simpler than the current seven.

### 1. Nav

- Logo (real `nevo-logo.png`) + "Nevo" text
- Links: Features, Categories, Privacy, Download
- Download CTA button with warm dark background (`#1A1816`)
- Sticky on scroll with subtle backdrop blur

### 2. Hero

**Headline:** "Just start writing."
**Subheadline:** "Nevo figures out where it belongs. On-device AI organises your notes into 11 categories — no folders, no tags, no effort."
**CTA:** Single "Download for iOS" button (Apple icon + text)
**Visual:** Notes grid screenshot (`screenshot-notes-grid.png`) in phone mockup frame, centred below copy.

No floating category pills. No secondary CTA. Clean and focused.

### 3. How It Works

Three-step horizontal layout (stacks vertically on mobile).

1. **Write anything** — "Meeting notes, grocery lists, poems, ideas — just capture the thought."
2. **Nevo categorises** — "On-device AI reads your note and sorts it into one of 11 research-backed categories."
3. **Everything in its place** — "Your notes organise themselves. Override anytime — Nevo learns your preferences."

Each step has a large numeral (1, 2, 3) in the category accent colour `#B0C4DE`, a bold title, and a short description. No icons or emojis — the numbers provide visual rhythm.

### 4. Categories

Two-column layout (image left, text right; stacks on mobile).

- **Left:** Category picker screenshot (`screenshot-categories.png`) in phone mockup frame
- **Right:**
  - Label: "11 Categories"
  - Headline: "Based on how people actually think"
  - Copy: "Not how filing cabinets work. Eleven categories grounded in the PARA method and cognitive load research — enough for meaningful organisation, few enough to remember. Create custom categories when you need them."
  - Category pills: all 11 with real app colors and names

### 5. Privacy

Centred card with subtle background distinction.

- Headline: "Everything stays on your device"
- Copy: "Nevo uses Apple's on-device AI — your notes never touch a server. Sync across devices with iCloud, encrypted end-to-end."
- Three badges: On-device processing, iCloud sync, No data collection

### 6. CTA

- Headline: "Start writing."
- Single download button
- Clean, final, minimal

### 7. Footer

- Logo + "Nevo"
- Links: Privacy Policy, Terms of Service, Support
- Copyright: "2025 Nevo"
- Minimal, single row

## What's Removed

- **Fake testimonials section** — dishonest, doesn't match brand
- **Feature cards with emojis** — replaced by "how it works" narrative
- **Floating category pill animations** — unnecessary motion
- **Gradient text on hero heading** — replaced by warm black text
- **Noise texture overlay** — clean and quiet instead
- **"See how it works" secondary CTA** — one button, one action
- **Dark colour scheme** — replaced by warm cream light base
- **Ambient gradient blob animations** — removed for calm

## What's Kept

- **Instrument Serif + DM Sans** font pairing
- **Phone mockup frame** with real screenshots inside
- **Scroll fade-in animations** — refined, subtle
- **Real Nevo logo** (`nevo-logo.png`)
- **Real app screenshots** from Xcode previews
- **Responsive design** with mobile breakpoints

## Visual Style Notes

- Generous whitespace — let the content breathe
- Rounded corners on cards/sections (`20-24px`)
- Subtle borders (`1px solid #E8E4DF`) rather than heavy shadows
- No gradients on text. Colour accents come from category pills only.
- Phone mockup frame: warm dark bezel matching `#1A1816`

## Files Changed

Only `index.html` needs to be rewritten — it's a single-file static site. The `images/` directory already has all needed screenshots and logo assets.

## Assets Available

| File | Usage |
|---|---|
| `images/screenshot-notes-grid.png` | Hero phone mockup |
| `images/screenshot-categories.png` | Categories section phone mockup |
| `images/screenshot-onboarding.png` | Available if needed |
| `images/screenshot-settings.png` | Available if needed |
| `images/nevo-logo.png` | Nav + footer logo (transparent bg) |
| `images/nevo-appicon.png` | Available if needed |
