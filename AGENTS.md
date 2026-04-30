# AGENTS.md

## Project Overview

This project is the public website for **Frutas Salgueiro**, a local business currently hosted as a static GitHub Pages site.

Repository:
https://github.com/frutassalgueiro/frutassalgueiro.github.io

The goal is to **modernize the site design, improve maintainability, and migrate the codebase to Next.js + Tailwind CSS**, keeping it optimized as a mostly static informational website for a local business.

---

## Primary Mission

Redesign and rebuild the website with a modern, trustworthy, fast-loading experience for a local business.

Priority outcomes:

1. Better visual design
2. Better mobile UX
3. Better SEO
4. Better maintainability
5. Better performance
6. Easier content updates
7. Professional local-business credibility

---

## Mandatory Stack

Use these technologies unless explicitly overridden:

- Next.js (App Router preferred)
- Tailwind CSS
- TypeScript
- Static generation where possible
- Vercel-ready deployment
- Responsive-first design

Avoid unnecessary backend complexity.

This is primarily a static business website.

---

## Design Direction

Use as guidance whenever possible:

https://skills.sh/vercel-labs/agent-skills/web-design-guidelines

Apply these principles:

- Strong visual hierarchy
- Clear calls to action
- Excellent spacing
- Readable typography
- Consistent component system
- Clean modern aesthetic
- Fast-loading pages
- Accessible contrast
- Mobile-first layouts
- Trust-building presentation

---

## Business Context

Frutas Salgueiro is a local business.

Likely customer priorities:

- Trust
- Product freshness
- Proximity
- Contact clarity
- Opening hours
- Easy location access
- Fast information lookup
- Professional image

The site should feel:

- Friendly
- Reliable
- Local
- Clean
- Modern
- Honest

---

## Preferred Website Structure

Unless current business content requires otherwise:

### Pages

- `/` Home
- `/productos` Products
- `/events` Events
- `/recipes` Recipes & Advoices
- `/empresa` About
- `/contacto` Contact
- `/legal` Legal / privacy if needed

### Home Page Sections

1. Hero
2. Trust/value proposition
3. Featured products/services
4. Why choose us
5. Local presence
6. Contact CTA
7. Footer

---

## Visual Style

Use a fresh, premium-local-business style.

Recommended palette inspiration:

- Green tones
- Natural neutrals
- White backgrounds
- Warm accents

Use restraint. Avoid noisy gradients unless tasteful.

Typography:

- Modern sans-serif
- High readability
- Strong headings
- Comfortable line spacing

---

## UX Rules

Always optimize for mobile first.

Important:

- Sticky CTA on mobile if useful
- Tap-friendly buttons
- Clear navigation
- Fast contact access
- WhatsApp CTA optional
- Map link prominent
- Phone click-to-call
- Address visible

---

## SEO Rules

Must include:

- Metadata per page
- Open Graph tags
- Local business schema markup
- Semantic headings
- Fast Core Web Vitals
- Proper alt text
- Sitemap
- robots.txt

Focus on local SEO.

Examples:

- frutas en A Coruña
- proveedor fruta local
- distribución fruta Galicia
- Frutas Salgueiro

Adjust once exact business scope is known.

---

## Performance Rules

Prioritize speed.

Use:

- Static rendering
- next/image
- Lazy loading where sensible
- Minimal JS
- Component reuse
- Optimized assets

Avoid:

- Heavy animations
- Large client bundles
- Unnecessary libraries

---

## Content Rules

Tone:

- Clear
- Direct
- Professional
- Warm
- Trustworthy

Avoid generic corporate fluff.

Prefer:

- Real information
- Clear benefits
- Concrete contact details
- Local credibility signals

---

## Accessibility Rules

Required:

- Keyboard navigable
- Contrast compliant
- Semantic HTML
- Proper labels
- Focus states
- Alt text

---

## Code Standards

Use:

- Reusable components
- Clean folder structure
- Typed props
- Small focused components
- Consistent naming

Suggested structure:

/app
/components
/lib
/public
/styles

---

## Migration Guidance

If converting from legacy static HTML:

1. Preserve existing useful content
2. Improve wording
3. Improve structure
4. Replace inline CSS
5. Replace old layout patterns
6. Optimize images
7. Keep URLs when possible

---

## Component Suggestions

Create reusable components:

- Navbar
- Hero
- SectionTitle
- ProductCard
- TrustBadges
- CTASection
- ContactCard
- Footer

---

## Agent Behavior Rules

When making changes:

1. Prefer elegant simplicity
2. Improve design without overengineering
3. Keep business goals above technical novelty
4. Justify major structural changes
5. Preserve deployability on Vercel
6. Keep static-first mindset

---

## If Information Is Missing

Assume best-practice local business website patterns.

But prefer asking for clarification if critical details are unknown:

- Exact products
- Delivery zones
- Contact channels
- Branding colors
- Existing logo assets
- Opening hours

---

## Success Criteria

The redesign is successful if the result feels like:

- A credible modern local company
- Fast and polished
- Easy to contact
- Better than a template
- Easy to maintain
- SEO-ready
- Conversion-oriented

---

## Preferred Output Style

When proposing changes:

- Explain reasoning briefly
- Then provide implementation
- Keep code production-ready
- Favor clean UI over flashy UI