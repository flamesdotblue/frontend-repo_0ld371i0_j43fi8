import React from 'react';

export default function About() {
  return (
    <section id="about" className="relative bg-rose-50 py-16 md:py-24">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_20%_10%,rgba(244,63,94,0.08),transparent_40%),radial-gradient(circle_at_80%_20%,rgba(244,63,94,0.06),transparent_35%)]"></div>
      <div className="relative max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold text-rose-900">Crafted with Calm</h2>
            <p className="mt-4 text-rose-800/80 leading-relaxed">
              Our pieces draw from the minimalist grace of the red spider lily. Each bouquet is composed to highlight negative space, gentle movement, and soft light.
            </p>
            <ul className="mt-6 space-y-3 text-rose-900/90">
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-rose-500"></span>
                Hand-tied arrangements with premium stems
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-rose-500"></span>
                Thoughtful packaging with recycled materials
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-rose-500"></span>
                Same-day local delivery in select cities
              </li>
            </ul>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] w-full rounded-3xl bg-gradient-to-br from-rose-100 to-rose-300/70 border border-rose-200 shadow-sm"></div>
            <div className="pointer-events-none absolute -bottom-6 -left-6 h-24 w-24 rounded-full bg-rose-200/60 blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
