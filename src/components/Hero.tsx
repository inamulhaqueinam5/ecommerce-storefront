import React from 'react';
import { ArrowDownRight, Sparkles, Flame } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden border-b border-zenji-border">
      {/* Background Katakana Ambient Watermark */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none text-zenji-surface font-extrabold text-[18vw] leading-none opacity-40 z-0 tracking-tighter"
        aria-hidden="true"
      >
        ゼンジ
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zenji-border bg-zenji-surface text-zenji-muted text-xs font-mono mb-6">
            <Flame className="w-3.5 h-3.5 text-zenji-crimson" />
            <span>DROP 01 // STRICTLY LIMITED RUN</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tighter text-zenji-bone leading-[1.05] mb-6">
            WEAR THE ARC.
            <br />
            <span className="text-zenji-muted">JAPANESE RESTRAINT.</span>
          </h1>

          <p className="text-lg md:text-xl text-zenji-muted leading-relaxed mb-10 max-w-2xl">
            Limited anime streetwear from Australia. 240gsm heavyweight combed cotton, original hand-drawn artwork and custom oversized cuts. Every piece is printed once and never restocked.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <a
              href="#products"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-zenji-crimson hover:bg-zenji-crimson-hover text-white font-bold tracking-wide rounded-sm transition-all shadow-lg hover:shadow-zenji-crimson/25 active:scale-[0.99] focus-visible:outline-none"
            >
              <span>SHOP THE DROP</span>
              <ArrowDownRight className="w-5 h-5" />
            </a>

            <a
              href="#about"
              className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-zenji-surface hover:bg-zenji-card border border-zenji-border hover:border-zenji-border-hover text-zenji-bone font-medium rounded-sm transition-all focus-visible:outline-none"
            >
              <Sparkles className="w-4 h-4 text-zenji-crimson" />
              <span>THE ZENJI ETHOS</span>
            </a>
          </div>

          {/* Quick Specifications Strip */}
          <div className="grid grid-cols-3 gap-4 pt-12 mt-12 border-t border-zenji-border/70 text-xs font-mono">
            <div>
              <div className="text-zenji-bone font-bold text-sm">240 GSM</div>
              <div className="text-zenji-dim">Heavyweight Cotton</div>
            </div>
            <div>
              <div className="text-zenji-bone font-bold text-sm">OVERSIZED</div>
              <div className="text-zenji-dim">Streetwear Silhouette</div>
            </div>
            <div>
              <div className="text-zenji-bone font-bold text-sm">ZERO RESTOCK</div>
              <div className="text-zenji-dim">Once Sold Out, Gone</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
