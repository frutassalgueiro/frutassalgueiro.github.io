# Optimize image delivery while preserving visual quality

This change reduces Lighthouse image warnings without sacrificing the photographic quality of the site. It focuses on serving more appropriately sized WebP assets for the current layout, correcting responsive image hints, and fixing the small-text contrast issue already flagged in the audit.

## Quick path

1. Replace oversized hero and basket images with smaller high-quality WebP files sized for real display usage.
2. Update responsive `sizes` so the browser chooses closer-to-correct sources for 1, 2, and 4-column layouts.
3. Increase contrast for small uppercase support labels currently using `text-moss`.

## Details

| Topic | Decision |
|-------|----------|
| Image strategy | Keep static export and `next/image`, but reduce source asset dimensions so exported files are no longer oversized for their rendered slots. |
| Visual quality | Prefer conservative compression and dimension reduction over aggressive quality loss. |
| Basket cards | Re-encode `cesta.webp`, `cesta2.webp`, `cesta4.webp` at dimensions aligned to the card layout, preserving enough resolution for large desktop cards and mobile retina screens. |
| Hero image | Re-encode `portada.webp` to a more appropriate size for the hero background while keeping `priority`. |
| Responsive hints | Change card `sizes` to reflect 100vw on mobile, ~50vw on tablet, and ~25vw on large desktop. |
| Accessibility | Replace or darken `text-moss` usage for small uppercase labels on white backgrounds to pass contrast more reliably. |
| Scope | No CDN migration, no custom image loader, no redesign of sections, and no broad JS refactor in this change. |

## Affected areas

- `public/img/portada.webp`
- `public/img/cesta.webp`
- `public/img/cesta2.webp`
- `public/img/cesta4.webp`
- `components/info-card.tsx`
- `app/localized-page.tsx`
- `tailwind.config.ts` or the affected text classes in components

## Verification

- [ ] The updated images are visibly sharp on desktop and mobile.
- [ ] Lighthouse no longer reports the same oversized image savings for the changed assets, or the savings are materially reduced.
- [ ] The LCP hero still loads eagerly.
- [ ] Small uppercase support text has stronger contrast on white backgrounds.

## Next step

Create the implementation plan, then apply the asset and code changes.
