import React from 'react';
import { Layers, Palette, Truck, ShieldAlert } from 'lucide-react';

export const BrandEthos: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-zenji-surface border-y border-zenji-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-mono text-zenji-crimson tracking-widest uppercase mb-2">
            ORIGIN & CRAFT // THE LABEL
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-zenji-bone mb-6">
            JAPANESE STREETWEAR RESTRAINT.
          </h2>
          <p className="text-base md:text-lg text-zenji-muted leading-relaxed">
            ZENJI is an Australian anime streetwear label founded in 2024 by fans raised on late-night subs and long shonen arcs. We craft graphic tees for anyone who wants the reference to read as elevated design first, wearable to work, to a convention or out on a weekend without needing explanation.
          </p>
        </div>

        {/* 3 Value Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-zenji-card border border-zenji-border p-8 rounded-sm">
            <div className="w-12 h-12 bg-zenji-surface border border-zenji-border rounded-sm flex items-center justify-center text-zenji-crimson mb-6">
              <Layers className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-zenji-bone tracking-tight mb-3">
              BUILT TO LAST (240 GSM)
            </h3>
            <p className="text-xs text-zenji-muted leading-relaxed">
              240gsm heavyweight 100% combed cotton jersey, garment-washed so it holds its shape. Screenprinted with high-density pigments engineered to survive the wash cycle without fading.
            </p>
          </div>

          <div className="bg-zenji-card border border-zenji-border p-8 rounded-sm">
            <div className="w-12 h-12 bg-zenji-surface border border-zenji-border rounded-sm flex items-center justify-center text-zenji-crimson mb-6">
              <Palette className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-zenji-bone tracking-tight mb-3">
              ORIGINAL ARTWORK
            </h3>
            <p className="text-xs text-zenji-muted leading-relaxed">
              Every anime graphic is hand-drawn for the specific drop it appears on. No generic stock templates and zero reprints once a drop sells out. The piece you own stays truly limited.
            </p>
          </div>

          <div className="bg-zenji-card border border-zenji-border p-8 rounded-sm">
            <div className="w-12 h-12 bg-zenji-surface border border-zenji-border rounded-sm flex items-center justify-center text-zenji-crimson mb-6">
              <Truck className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-zenji-bone tracking-tight mb-3">
              AUSTRALIA-WIDE DELIVERY
            </h3>
            <p className="text-xs text-zenji-muted leading-relaxed">
              Dispatched directly from Australia with tracked delivery in 1–2 weeks. Enjoy complimentary shipping on orders over A$100 and a 14-day unworn return window.
            </p>
          </div>
        </div>

        {/* Fabric & Silhouette Technical Card */}
        <div id="specs" className="mt-12 bg-zenji-bg border border-zenji-border p-6 md:p-8 rounded-sm">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-zenji-crimson uppercase mb-1">
                <ShieldAlert className="w-4 h-4" />
                <span>SPECIFICATIONS SHEET</span>
              </div>
              <h4 className="text-xl font-bold text-zenji-bone tracking-tight">
                CUT & FIT: THE BOX-OVERSIZED SILHOUETTE
              </h4>
              <p className="text-xs text-zenji-muted mt-1 max-w-xl">
                True to Australian streetwear sizing. Dropped shoulders, relaxed chest cut and thick ribbed collar that won't sag over time.
              </p>
            </div>
            <div className="flex items-center gap-4 text-xs font-mono">
              <div className="px-4 py-2 bg-zenji-surface border border-zenji-border text-zenji-bone rounded-sm">
                XS / S / M / L / XL / XXL
              </div>
              <div className="px-4 py-2 bg-zenji-crimson/10 border border-zenji-crimson/30 text-zenji-crimson font-bold rounded-sm">
                PRE-SHRUNK
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
