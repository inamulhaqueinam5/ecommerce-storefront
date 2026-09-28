import React, { useState } from 'react';
import { Plus, Check } from 'lucide-react';
import { Product, Size } from '../types/store';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  const [selectedSize, setSelectedSize] = useState<Size>(product.sizes[0] || 'L');
  const [justAdded, setJustAdded] = useState(false);

  const handleAdd = () => {
    addToCart(product, selectedSize);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1600);
  };

  return (
    <article className="group bg-zenji-card border border-zenji-border hover:border-zenji-border-hover rounded-sm overflow-hidden flex flex-col transition-all duration-200">
      {/* Visual Image Container */}
      <div className="relative aspect-[4/5] bg-zenji-surface overflow-hidden">
        <img
          src={product.image}
          alt={`${product.name} anime streetwear graphic tee`}
          className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />

        {/* Kanji Overlay Badge */}
        <div className="absolute top-3 left-3 bg-zenji-bg/80 backdrop-blur-sm border border-zenji-border px-2.5 py-1 text-xs font-mono text-zenji-bone rounded-sm">
          {product.kanji}
        </div>

        {/* Product Tag (Sale / New) */}
        {product.tag && (
          <div
            className={`absolute top-3 right-3 px-2.5 py-1 text-[11px] font-mono font-bold tracking-wider rounded-sm ${
              product.isSale
                ? 'bg-zenji-crimson text-white'
                : 'bg-zenji-surface text-zenji-bone border border-zenji-border'
            }`}
          >
            {product.tag}
          </div>
        )}

        {/* Garment Weight Pin */}
        <div className="absolute bottom-3 left-3 bg-zenji-bg/80 backdrop-blur-sm border border-zenji-border px-2 py-0.5 text-[10px] font-mono text-zenji-dim rounded-sm">
          {product.weightGsm} GSM COTTON
        </div>
      </div>

      {/* Product Content Body */}
      <div className="p-5 flex flex-col flex-1 justify-between">
        <div>
          {/* Header Row: Title & Price */}
          <div className="flex items-start justify-between gap-2 mb-2">
            <h3 className="font-bold text-base text-zenji-bone tracking-tight group-hover:text-zenji-crimson transition-colors">
              {product.name}
            </h3>
            <div className="text-right whitespace-nowrap">
              <span className="font-bold text-base text-zenji-bone font-mono">
                A${product.price.toFixed(2)}
              </span>
              {product.originalPrice && (
                <div className="text-xs text-zenji-dim line-through font-mono">
                  A${product.originalPrice.toFixed(2)}
                </div>
              )}
            </div>
          </div>

          {/* Description */}
          <p className="text-xs text-zenji-muted line-clamp-2 leading-relaxed mb-4">
            {product.description}
          </p>
        </div>

        <div>
          {/* Size Variant Picker */}
          <div className="mb-4">
            <div className="flex items-center justify-between text-[11px] font-mono text-zenji-dim mb-1.5">
              <span>SELECT SIZE:</span>
              <span className="text-zenji-bone font-bold">{selectedSize} (OVERSIZED)</span>
            </div>
            <div className="flex flex-wrap gap-1.5" role="radiogroup" aria-label={`Size options for ${product.name}`}>
              {product.sizes.map((size) => {
                const isSelected = selectedSize === size;
                return (
                  <button
                    key={size}
                    type="button"
                    role="radio"
                    aria-checked={isSelected}
                    onClick={() => setSelectedSize(size)}
                    className={`min-w-[36px] h-8 px-2 rounded-sm text-xs font-mono font-medium border transition-all ${
                      isSelected
                        ? 'bg-zenji-bone text-zenji-bg border-zenji-bone font-bold shadow-sm'
                        : 'bg-zenji-surface text-zenji-muted border-zenji-border hover:border-zenji-border-hover hover:text-zenji-bone'
                    }`}
                  >
                    {size}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Add to Bag Action Button */}
          <button
            type="button"
            onClick={handleAdd}
            className={`w-full py-3 px-4 rounded-sm font-bold text-xs tracking-wider flex items-center justify-center gap-2 transition-all ${
              justAdded
                ? 'bg-emerald-600 text-white'
                : 'bg-zenji-crimson hover:bg-zenji-crimson-hover text-white active:scale-[0.98]'
            }`}
          >
            {justAdded ? (
              <>
                <Check className="w-4 h-4" />
                <span>ADDED TO BAG</span>
              </>
            ) : (
              <>
                <Plus className="w-4 h-4" />
                <span>ADD TO BAG ({selectedSize})</span>
              </>
            )}
          </button>
        </div>
      </div>
    </article>
  );
};
