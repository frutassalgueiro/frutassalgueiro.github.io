'use client';

import { useState } from 'react';

const links = [
  { href: '#cestas', label: 'Cestas' },
  { href: '#eventos', label: 'Eventos' },
  { href: '#donde-estamos', label: 'Dónde estamos' },
  { href: '#recetas-consejos', label: 'Recetas y consejos' },
  { href: '#contacto', label: 'Contacto' }
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200/70 bg-white/90 backdrop-blur">
      <nav className="container-shell py-3">
        <div className="flex items-center justify-between gap-3">
          <a href="#inicio" className="text-lg font-semibold tracking-tight text-leaf">
            Frutas Salgueiro
          </a>

          <button
            type="button"
            aria-label="Abrir menú"
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
            <a
              href="tel:+34617384147"
              className="rounded-full bg-leaf px-3 py-1.5 text-white transition hover:bg-emerald-700"
            >
              Llamar
            </a>
          </div>
        </div>

        <div
          className={`${open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden transition-all duration-300 sm:hidden`}
        >
          <div className="mt-3 space-y-2 rounded-2xl border border-emerald-100 bg-white p-3">
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
              Llamar
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}

