# Image Optimization Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Reduce Lighthouse image-delivery warnings while preserving visual quality for the hero and basket cards.

**Architecture:** Keep the existing static-export Next.js setup and fix the problem at the source: smaller high-quality WebP assets plus accurate responsive hints in the UI. Extract the responsive image sizing and support-label color into a tiny config module so those decisions can be covered with focused tests before wiring them into components.

**Tech Stack:** Next.js App Router, TypeScript, Tailwind CSS, Vitest, WebP image assets

---

## File structure

- Create: `lib/image-presentation.ts` — centralizes card image `sizes` and small support-label class names.
- Create: `tests/lib/image-presentation.test.ts` — covers responsive sizing and contrast-oriented label class decisions.
- Modify: `package.json` — adds a `test` script and Vitest dev dependency.
- Modify: `components/info-card.tsx` — uses the shared responsive `sizes` string.
- Modify: `app/localized-page.tsx` — uses the shared support-label class.
- Modify: `components/where-map.tsx` — uses the shared support-label class.
- Replace: `public/img/cesta.webp` — resized high-quality WebP.
- Replace: `public/img/cesta2.webp` — resized high-quality WebP.
- Replace: `public/img/cesta4.webp` — resized high-quality WebP.
- Replace: `public/img/portada.webp` — resized high-quality WebP for the hero.

### Task 1: Add a minimal test seam for image presentation decisions

**Files:**
- Create: `lib/image-presentation.ts`
- Create: `tests/lib/image-presentation.test.ts`
- Modify: `package.json`

- [ ] **Step 1: Write the failing test**

```ts
import { describe, expect, it } from 'vitest';
import { CARD_IMAGE_SIZES, SUPPORT_LABEL_CLASS } from '@/lib/image-presentation';

describe('image presentation config', () => {
  it('uses responsive card sizes for mobile, tablet, and four-column desktop layouts', () => {
    expect(CARD_IMAGE_SIZES).toBe('(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 25vw');
  });

  it('uses the darker leaf text token for small support labels on white backgrounds', () => {
    expect(SUPPORT_LABEL_CLASS).toContain('text-leaf');
    expect(SUPPORT_LABEL_CLASS).not.toContain('text-moss');
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npm test -- --run tests/lib/image-presentation.test.ts`

Expected: FAIL because `vitest` is not installed and `@/lib/image-presentation` does not exist yet.

- [ ] **Step 3: Write the minimal implementation**

```ts
export const CARD_IMAGE_SIZES = '(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 25vw';

export const SUPPORT_LABEL_CLASS = 'text-sm font-semibold uppercase tracking-[0.18em] text-leaf';
```

Update `package.json`:

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build --webpack",
    "start": "next start",
    "lint": "next lint",
    "test": "vitest run"
  },
  "devDependencies": {
    "@types/node": "22.15.18",
    "@types/react": "19.0.12",
    "@types/react-dom": "19.0.5",
    "autoprefixer": "10.4.21",
    "postcss": "8.5.3",
    "tailwindcss": "3.4.17",
    "typescript": "5.8.3",
    "vitest": "^3.2.4"
  }
}
```

- [ ] **Step 4: Run test to verify it passes**

Run: `npm install && npm test -- --run tests/lib/image-presentation.test.ts`

Expected: PASS with 2 tests passing.

- [ ] **Step 5: Commit**

```bash
git add package.json package-lock.json lib/image-presentation.ts tests/lib/image-presentation.test.ts
git commit -m "test: cover image presentation config"
```

### Task 2: Wire the tested config into the UI

**Files:**
- Modify: `components/info-card.tsx:1-46`
- Modify: `app/localized-page.tsx:1-506`
- Modify: `components/where-map.tsx:1-104`
- Test: `tests/lib/image-presentation.test.ts`

- [ ] **Step 1: Write the failing test**

Extend `tests/lib/image-presentation.test.ts`:

```ts
import fs from 'node:fs';
import path from 'node:path';

it('keeps card image sizes sourced from the shared config', () => {
  const file = fs.readFileSync(path.join(process.cwd(), 'components/info-card.tsx'), 'utf8');
  expect(file).toContain('sizes={CARD_IMAGE_SIZES}');
});

it('uses the shared support label class in hero and map sections', () => {
  const localizedPage = fs.readFileSync(path.join(process.cwd(), 'app/localized-page.tsx'), 'utf8');
  const whereMap = fs.readFileSync(path.join(process.cwd(), 'components/where-map.tsx'), 'utf8');

  expect(localizedPage).toContain('className={SUPPORT_LABEL_CLASS}');
  expect(whereMap).toContain('className={SUPPORT_LABEL_CLASS}');
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npm test -- --run tests/lib/image-presentation.test.ts`

Expected: FAIL because the components still contain inline `sizes` and `text-moss` classes.

- [ ] **Step 3: Write the minimal implementation**

Update `components/info-card.tsx`:

```ts
import Image from 'next/image';
import { CARD_IMAGE_SIZES } from '@/lib/image-presentation';

// ...component body unchanged...

<Image
  src={image}
  alt={alt}
  fill
  className="object-cover transition duration-500 group-hover:scale-105"
  sizes={CARD_IMAGE_SIZES}
/>
```

Update `app/localized-page.tsx` imports and support labels:

```ts
import { SUPPORT_LABEL_CLASS } from '@/lib/image-presentation';

<p className={SUPPORT_LABEL_CLASS}>{dict.home.heroKicker}</p>
// ...
<p className={SUPPORT_LABEL_CLASS}>{dict.home.directSupport}</p>
```

Update `components/where-map.tsx`:

```ts
import { SUPPORT_LABEL_CLASS } from '@/lib/image-presentation';

<p className={SUPPORT_LABEL_CLASS}>{routeWeeklyLabel}</p>
```

- [ ] **Step 4: Run test to verify it passes**

Run: `npm test -- --run tests/lib/image-presentation.test.ts && npm run lint`

Expected: PASS for the Vitest file and a clean lint run.

- [ ] **Step 5: Commit**

```bash
git add components/info-card.tsx app/localized-page.tsx components/where-map.tsx lib/image-presentation.ts tests/lib/image-presentation.test.ts
git commit -m "feat: tune responsive image presentation"
```

### Task 3: Replace oversized assets with smaller high-quality WebP files

**Files:**
- Modify: `public/img/cesta.webp`
- Modify: `public/img/cesta2.webp`
- Modify: `public/img/cesta4.webp`
- Modify: `public/img/portada.webp`
- Test: manual browser inspection + Lighthouse rerun

- [ ] **Step 1: Write the failing test**

Create a temporary verification checklist in your working notes before editing assets:

```text
FAIL conditions to reproduce:
- Lighthouse reports oversized image savings for /img/cesta.webp, /img/cesta2.webp, /img/cesta4.webp, and /img/portada.webp
- Basket images are larger than the rendered card slot on desktop
- Hero image still ships more bytes than needed for the background treatment
```

- [ ] **Step 2: Run verification to confirm the problem exists**

Run after exporting/building the site in the normal project workflow and confirm the audit still flags the four images above.

Expected: The same assets appear in the Lighthouse “Improve image delivery” section.

- [ ] **Step 3: Replace the assets with minimal high-quality variants**

Use a conservative re-encode strategy:

```text
public/img/cesta.webp   -> target width around 700px, high-quality WebP
public/img/cesta2.webp  -> target width around 700px, high-quality WebP
public/img/cesta4.webp  -> target width around 700px, high-quality WebP
public/img/portada.webp -> target width around 1600px, high-quality WebP
```

Rules:

```text
- Preserve aspect ratio.
- Prefer high visual quality over maximum compression.
- Do not blur, oversharpen, or change framing.
- Keep the same filenames so content references stay unchanged.
```

- [ ] **Step 4: Run verification to confirm the change works**

Run: `npm run lint`

Then manually verify:

```text
1. Open the home page on desktop and mobile widths.
2. Confirm the basket cards still look sharp.
3. Confirm the hero image still looks clean with the opacity overlay.
4. Rerun Lighthouse and compare the “Improve image delivery” findings.
```

Expected: No code regressions, images remain visually sharp, and Lighthouse reports materially lower savings for the replaced files.

- [ ] **Step 5: Commit**

```bash
git add public/img/cesta.webp public/img/cesta2.webp public/img/cesta4.webp public/img/portada.webp
git commit -m "perf: resize homepage images"
```

## Self-review

- Spec coverage: the plan covers asset resizing, responsive `sizes`, and the support-label contrast fix. It intentionally excludes CDN migration and broader JS refactors.
- Placeholder scan: no `TODO`, `TBD`, or “similar to previous task” shortcuts remain.
- Type consistency: `CARD_IMAGE_SIZES` and `SUPPORT_LABEL_CLASS` are introduced once and reused consistently across the plan.
