import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero3D() {
  return (
    <section className="relative w-full h-[85vh] overflow-hidden bg-rose-50">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/Tu-wEVxfDuICpwJI/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient vignette that doesn't block interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-rose-50/40 via-rose-50/0 to-rose-50"></div>

      {/* Content overlay */}
      <div className="relative z-10 h-full max-w-6xl mx-auto flex items-center px-6">
        <div className="pointer-events-none select-none">
          <p className="uppercase tracking-[0.3em] text-sm text-rose-500/80 mb-3">Minimalist Floral Atelier</p>
          <h1 className="font-[600] leading-tight text-4xl sm:text-5xl md:text-6xl text-rose-900">
            Lilium — The 3D Flower Shop
          </h1>
          <p className="mt-4 max-w-xl text-rose-800/80 text-base md:text-lg">
            Serene stems and glowing petals. Discover artful bouquets inspired by the red spider lily — crafted to feel calm, modern, and a little bit magical.
          </p>

          <div className="pointer-events-auto mt-8 flex flex-wrap gap-3">
            <a
              href="#collection"
              className="inline-flex items-center justify-center rounded-full bg-rose-600 text-white px-5 py-2.5 text-sm font-medium shadow-sm hover:bg-rose-700 transition-colors"
            >
              Shop Bouquets
            </a>
            <a
              href="#about"
              className="inline-flex items-center justify-center rounded-full bg-white/80 backdrop-blur px-5 py-2.5 text-sm font-medium text-rose-900 ring-1 ring-rose-200 hover:bg-white transition"
            >
              Explore Story
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
