'use client';

import { useMemo, useState } from 'react';
import { marketLocations } from '@/lib/market-locations';

const weekdays = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];

export function WhereMap() {
  const [activeIndex, setActiveIndex] = useState(0);

  const active = marketLocations[activeIndex];
  const mapEmbed = useMemo(
    () => `https://www.google.com/maps?q=${active.lat},${active.lng}&z=14&output=embed`,
    [active.lat, active.lng]
  );

  return (
    <div className="mt-6 grid gap-5 lg:grid-cols-[1.1fr_1.4fr]">
      <div className="card p-5">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-moss">Ruta semanal</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {weekdays.map((day) => {
            const activeDay = active.days.includes(day);
            return (
              <span
                key={day}
                className={`rounded-full px-3 py-1 text-xs font-medium ${
                  activeDay ? 'bg-emerald-100 text-emerald-900' : 'bg-neutral-100 text-neutral-400'
                }`}
              >
                {day}
              </span>
            );
          })}
        </div>

        <div className="mt-5 space-y-2">
          {marketLocations.map((location, index) => {
            const isActive = index === activeIndex;
            return (
              <button
                key={location.name}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`w-full rounded-2xl border px-4 py-3 text-left transition ${
                  isActive
                    ? 'border-emerald-300 bg-emerald-50'
                    : 'border-emerald-100 hover:border-emerald-200 hover:bg-emerald-50/50'
                }`}
              >
                <p className="font-semibold text-leaf">{location.name}</p>
                <p className="mt-1 text-sm text-neutral-700">{location.schedule}</p>
              </button>
            );
          })}
        </div>
      </div>

      <div className="overflow-hidden rounded-3xl border border-emerald-100/60 shadow-sm lg:h-full">
        <div className="relative h-full">
          <iframe
            title={`Mapa de ${active.name}`}
            src={mapEmbed}
            loading="lazy"
            className="block h-[340px] w-full border-0 sm:h-[420px] lg:h-full"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <div className="absolute left-3 top-3 max-w-[260px] rounded-2xl border border-red-200 bg-white/95 p-3 shadow-lg backdrop-blur">
            <p className="inline-flex items-center gap-1.5 text-sm font-semibold text-red-600">
              <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden>
                <path d="M12 2a7 7 0 0 0-7 7c0 4.4 5.1 10.6 6.2 11.9a1 1 0 0 0 1.6 0C13.9 19.6 19 13.4 19 9a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5Z" />
              </svg>
              {active.name}
            </p>
            <p className="mt-1 text-xs text-neutral-700">{active.schedule}</p>
            <a
              href={active.mapUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-block text-xs font-semibold text-red-600 hover:underline"
            >
              Cómo llegar
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
