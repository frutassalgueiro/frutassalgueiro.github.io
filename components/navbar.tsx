'use client';

import { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { Dictionary, Locale, locales } from '@/lib/i18n';

const flagByLocale: Record<Locale, string> = {
  es: '/flags/es.svg',
  gl: '/flags/gl.svg',
  en: '/flags/gb.svg',
  pt: '/flags/pt.svg'
};

type NavbarProps = {
  locale: Locale;
  dictionary: Dictionary;
};

export function Navbar({ locale, dictionary }: NavbarProps) {
  const [open, setOpen] = useState(false);
  const [isSwitchingLocale, setIsSwitchingLocale] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    if (!isSwitchingLocale) {
      return;
    }

    const timer = window.setTimeout(() => {
      setIsSwitchingLocale(false);
    }, 260);

    return () => window.clearTimeout(timer);
  }, [pathname, isSwitchingLocale]);

  function switchLocale(nextLocale: Locale) {
    if (nextLocale === locale) {
      return;
    }

    const hash = typeof window !== 'undefined' ? window.location.hash : '';
    const target = `/${nextLocale}${hash}`;

    setIsSwitchingLocale(true);

    const docWithTransition = document as Document & {
      startViewTransition?: (cb: () => void) => { finished: Promise<void> };
    };

    if (typeof docWithTransition.startViewTransition === 'function') {
      docWithTransition.startViewTransition(() => {
        router.push(target);
      });
      return;
    }

    window.setTimeout(() => {
      router.push(target);
    }, 90);
  }

  const links = [
    { href: '#cestas', label: dictionary.nav.baskets },
    { href: '#eventos', label: dictionary.nav.events },
    { href: '#donde-estamos', label: dictionary.nav.where },
    { href: '#recetas-consejos', label: dictionary.nav.recipes },
    { href: '#contacto', label: dictionary.nav.contact }
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200/70 bg-white/90 backdrop-blur">
      <nav className="container-shell py-3">
        <div className="flex items-center justify-between gap-3">
          <a href="#inicio" className="text-lg font-semibold tracking-tight text-leaf">
            Frutas Salgueiro
          </a>

          <button
            type="button"
            aria-label={dictionary.nav.openMenu}
            aria-expanded={open}
            onClick={() => setOpen((prev) => !prev)}
            className="inline-flex h-10 w-10 flex-col items-center justify-center rounded-full border border-emerald-200 text-leaf transition hover:bg-emerald-50 sm:hidden"
          >
            <span className={`menu-line ${open ? 'translate-y-[6px] rotate-45' : ''}`} />
            <span className={`menu-line ${open ? 'opacity-0' : ''}`} />
            <span className={`menu-line ${open ? '-translate-y-[6px] -rotate-45' : ''}`} />
          </button>

          <div className="hidden items-center gap-2 text-sm font-medium text-neutral-700 sm:flex sm:gap-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-full px-3 py-1.5 transition hover:bg-emerald-50 hover:text-leaf"
              >
                {link.label}
              </a>
            ))}
            <div className="ml-1 flex items-center gap-1 rounded-full border border-emerald-200 bg-emerald-50/50 p-1">
              {locales.map((code) => (
                <button
                  key={code}
                  type="button"
                  aria-label={code}
                  onClick={() => switchLocale(code)}
                  className={`rounded-full px-2 py-1 text-xs font-semibold transition ${
                    locale === code ? 'bg-leaf text-white' : 'text-leaf hover:bg-emerald-100'
                  }`}
                >
                  <img src={flagByLocale[code]} alt="" aria-hidden className="mr-1 inline h-3 w-4 rounded-[2px] object-cover" />
                  {code.toUpperCase()}
                </button>
              ))}
            </div>
            <a
              href="tel:+34617384147"
              className="rounded-full bg-leaf px-3 py-1.5 text-white transition hover:bg-emerald-700"
            >
              {dictionary.nav.call}
            </a>
          </div>
        </div>

        <div
          className={`${open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden transition-all duration-300 sm:hidden`}
        >
          <div className="mt-3 space-y-2 rounded-2xl border border-emerald-100 bg-white p-3">
            <div className="mb-2 flex flex-wrap gap-2">
              {locales.map((code) => (
                <button
                  key={code}
                  type="button"
                  onClick={() => {
                    setOpen(false);
                    switchLocale(code);
                  }}
                  className={`rounded-full px-3 py-1 text-xs font-semibold ${
                    locale === code ? 'bg-leaf text-white' : 'bg-emerald-50 text-leaf'
                  }`}
                >
                  <img src={flagByLocale[code]} alt="" aria-hidden className="mr-1 inline h-3 w-4 rounded-[2px] object-cover" />
                  {code.toUpperCase()}
                </button>
              ))}
            </div>
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-3 py-2 text-sm font-medium text-neutral-700 transition hover:bg-emerald-50 hover:text-leaf"
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:+34617384147"
              className="mt-2 inline-flex w-full justify-center rounded-xl bg-leaf px-3 py-2 text-sm font-semibold text-white"
            >
              {dictionary.nav.call}
            </a>
          </div>
        </div>
      </nav>
      <div
        aria-hidden
        className={`pointer-events-none fixed inset-0 z-[60] bg-white transition-opacity duration-300 ${
          isSwitchingLocale ? 'opacity-100' : 'opacity-0'
        }`}
      />
    </header>
  );
}
