import React from 'react';

export default function FooterCTA() {
  return (
    <footer className="bg-white border-t border-rose-200/70">
      <div className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-rose-900">Join the Atelier</h3>
            <p className="mt-2 text-rose-800/70">
              Be the first to know about seasonal stems, limited drops, and floral styling tips.
            </p>
          </div>
          <form className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              required
              placeholder="your@email.com"
              className="flex-1 rounded-full border border-rose-200 px-5 py-3 text-sm placeholder:text-rose-400 focus:outline-none focus:ring-2 focus:ring-rose-300"
            />
            <button
              type="submit"
              className="rounded-full bg-rose-600 text-white px-6 py-3 text-sm font-medium hover:bg-rose-700 transition"
            >
              Subscribe
            </button>
          </form>
        </div>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-rose-800/60">© {new Date().getFullYear()} Lilium Studio. All rights reserved.</p>
          <nav className="flex items-center gap-6 text-sm text-rose-800/70">
            <a href="#collection" className="hover:text-rose-900">Collection</a>
            <a href="#about" className="hover:text-rose-900">About</a>
            <a href="#" className="hover:text-rose-900">Shipping</a>
            <a href="#" className="hover:text-rose-900">Contact</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
