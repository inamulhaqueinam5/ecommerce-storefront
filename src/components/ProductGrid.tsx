import React, { useState } from 'react';
import { PRODUCTS } from '../data/products';
import { ProductCard } from './ProductCard';

type FilterType = 'all' | 'sale' | 'regular';

export const ProductGrid: React.FC = () => {
  const [filter, setFilter] = useState<FilterType>('all');

  const filteredProducts = PRODUCTS.filter((item) => {
    if (filter === 'sale') return item.isSale;
    if (filter === 'regular') return !item.isSale;
    return true;
  });

  return (
    <section id="products" className="py-20 md:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-b border-zenji-border pb-6">
        <div>
          <div className="text-xs font-mono text-zenji-crimson tracking-widest uppercase mb-2">
            CATALOG // ARCHIVE PIECES
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-zenji-bone">
            LATEST DROPS
          </h2>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0">
          <button
            onClick={() => setFilter('all')}
            className={`px-3 py-1.5 rounded-sm text-xs font-mono transition-colors ${
              filter === 'all'
                ? 'bg-zenji-bone text-zenji-bg font-bold'
                : 'bg-zenji-surface text-zenji-muted hover:text-zenji-bone border border-zenji-border'
            }`}
          >
            ALL PIECES ({PRODUCTS.length})
          </button>
          <button
            onClick={() => setFilter('sale')}
            className={`px-3 py-1.5 rounded-sm text-xs font-mono transition-colors ${
              filter === 'sale'
                ? 'bg-zenji-crimson text-white font-bold'
                : 'bg-zenji-surface text-zenji-muted hover:text-zenji-bone border border-zenji-border'
            }`}
          >
            ON SALE ({PRODUCTS.filter((p) => p.isSale).length})
          </button>
          <button
            onClick={() => setFilter('regular')}
            className={`px-3 py-1.5 rounded-sm text-xs font-mono transition-colors ${
              filter === 'regular'
                ? 'bg-zenji-bone text-zenji-bg font-bold'
                : 'bg-zenji-surface text-zenji-muted hover:text-zenji-bone border border-zenji-border'
            }`}
          >
            CORE COLLECTION ({PRODUCTS.filter((p) => !p.isSale).length})
          </button>
        </div>
      </div>

      {/* Grid of Product Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};
