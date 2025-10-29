import React from 'react';

const products = [
  {
    id: 1,
    name: 'Spider Lily Classic',
    description: 'Minimal bouquet with glowing red accents',
    price: 48,
    colorFrom: 'from-rose-200',
    colorTo: 'to-rose-400/60',
  },
  {
    id: 2,
    name: 'Dawn Petals',
    description: 'Soft blush tones with airy greens',
    price: 62,
    colorFrom: 'from-rose-100',
    colorTo: 'to-rose-300/60',
  },
  {
    id: 3,
    name: 'Hikari Stem',
    description: 'Single-stem statement piece',
    price: 28,
    colorFrom: 'from-rose-50',
    colorTo: 'to-rose-200/70',
  },
  {
    id: 4,
    name: 'Crimson Whisper',
    description: 'Dramatic reds with subtle sway',
    price: 74,
    colorFrom: 'from-rose-200',
    colorTo: 'to-rose-500/50',
  },
];

export default function CollectionGrid() {
  return (
    <section id="collection" className="relative py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-10 md:mb-14">
          <h2 className="text-3xl md:text-4xl font-semibold text-rose-900">Featured Bouquets</h2>
          <p className="mt-2 text-rose-800/70 max-w-2xl">
            Curated arrangements inspired by the spider lily’s graceful motion — designed to feel serene and modern in any space.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {products.map((p) => (
            <div
              key={p.id}
              className="group relative overflow-hidden rounded-2xl border border-rose-200 bg-gradient-to-br shadow-sm transition hover:shadow-md focus-within:shadow-md "
            >
              <div className={`h-40 sm:h-48 bg-gradient-to-br ${p.colorFrom} ${p.colorTo}`}></div>

              <div className="p-4">
                <h3 className="font-medium text-rose-900">{p.name}</h3>
                <p className="mt-1 text-sm text-rose-800/70">{p.description}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-rose-900 font-semibold">${p.price}</span>
                  <button className="inline-flex items-center rounded-full bg-rose-600 text-white px-4 py-1.5 text-xs font-medium hover:bg-rose-700 transition">
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
