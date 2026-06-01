import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { describe, expect, it, vi } from 'vitest';

vi.mock('next/image', () => ({
  default: ({ src, alt, sizes }: { src: string; alt: string; sizes?: string }) =>
    createElement('img', { src, alt, 'data-sizes': sizes })
}));

import { InfoCard } from '../../components/info-card';
import {
  CARD_IMAGE_SIZES_FOUR_COLUMNS,
  CARD_IMAGE_SIZES_THREE_COLUMNS,
  SUPPORT_LABEL_CLASS
} from '../../lib/image-presentation';

const readProjectFile = (relativePath: string) =>
  readFileSync(resolve(process.cwd(), relativePath), 'utf8');

describe('image presentation constants', () => {
  it('exposes dedicated image sizes for 4-column and 3-column card grids', () => {
    expect(CARD_IMAGE_SIZES_FOUR_COLUMNS).toBe(
      '(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 25vw'
    );

    expect(CARD_IMAGE_SIZES_THREE_COLUMNS).toBe(
      '(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw'
    );
  });

  it('keeps the shared support label typography-only', () => {
    expect(SUPPORT_LABEL_CLASS).toContain('text-leaf');
    expect(SUPPORT_LABEL_CLASS).not.toContain('text-moss');
    expect(SUPPORT_LABEL_CLASS).not.toContain('mb-3');
  });

  it('keeps the 4-column card image size distinct from the default 3-column size', () => {
    expect(CARD_IMAGE_SIZES_FOUR_COLUMNS).not.toBe(CARD_IMAGE_SIZES_THREE_COLUMNS);
  });
});

describe('InfoCard image sizing', () => {
  const baseProps = {
    image: '/images/test.jpg',
    alt: 'Fresh fruit basket',
    title: 'Basket',
    description: 'Seasonal fruit selection'
  };

  it('uses the 3-column image sizes by default', () => {
    const markup = renderToStaticMarkup(createElement(InfoCard, baseProps));

    expect(markup).toContain(`data-sizes=\"${CARD_IMAGE_SIZES_THREE_COLUMNS}\"`);
  });

  it('uses a custom image size override when provided', () => {
    const markup = renderToStaticMarkup(
      createElement(InfoCard, { ...baseProps, sizes: CARD_IMAGE_SIZES_FOUR_COLUMNS })
    );

    expect(markup).toContain(`data-sizes=\"${CARD_IMAGE_SIZES_FOUR_COLUMNS}\"`);
  });
});

describe('hero image priority', () => {
  it('applies explicit high fetch priority to the portada image', () => {
    expect(readProjectFile('app/localized-page.tsx')).toContain('fetchPriority="high"');
  });
});
