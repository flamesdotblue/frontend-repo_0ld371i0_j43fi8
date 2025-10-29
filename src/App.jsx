import React from 'react';
import Hero3D from './components/Hero3D';
import CollectionGrid from './components/CollectionGrid';
import About from './components/About';
import FooterCTA from './components/FooterCTA';

function App() {
  return (
    <div className="min-h-screen bg-white text-rose-900">
      {/* Top minimal nav */}
      <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-rose-200/60">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          <a href="#" className="font-medium tracking-wide">Lilium</a>
          <nav className="hidden sm:flex items-center gap-6 text-sm text-rose-800/80">
            <a href="#collection" className="hover:text-rose-900">Collection</a>
            <a href="#about" className="hover:text-rose-900">About</a>
            <a href="#" className="hover:text-rose-900">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero3D />
        <CollectionGrid />
        <About />
      </main>

      <FooterCTA />
    </div>
  );
}

export default App;
