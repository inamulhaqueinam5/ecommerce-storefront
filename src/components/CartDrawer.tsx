import React, { useEffect } from 'react';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, ShieldCheck, Truck } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface CartDrawerProps {
  onCheckout: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({ onCheckout }) => {
  const {
    items,
    isOpen,
    closeCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    subtotal,
    totalItems,
    freeShippingThreshold,
    amountToFreeShipping,
  } = useCart();

  // Close on Escape key press for accessibility
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        closeCart();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, closeCart]);

  // Lock body scroll when cart is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const isFreeShipping = amountToFreeShipping === 0;
  const progressPercent = Math.min(100, (subtotal / freeShippingThreshold) * 100);

  return (
    <div
      className="fixed inset-0 z-50 overflow-hidden"
      role="dialog"
      aria-modal="true"
      aria-labelledby="cart-title"
    >
      {/* Backdrop overlay */}
      <div
        className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
        onClick={closeCart}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-zenji-surface border-l border-zenji-border shadow-2xl flex flex-col">
          {/* Cart Header */}
          <div className="p-6 border-b border-zenji-border flex items-center justify-between bg-zenji-bg">
            <div className="flex items-center space-x-3">
              <ShoppingBag className="w-5 h-5 text-zenji-crimson" />
              <h2 id="cart-title" className="text-lg font-bold text-zenji-bone tracking-tight">
                SHOPPING BAG ({totalItems})
              </h2>
            </div>
            <button
              onClick={closeCart}
              className="p-1.5 rounded-sm border border-zenji-border hover:border-zenji-border-hover text-zenji-muted hover:text-zenji-bone transition-colors"
              aria-label="Close cart drawer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Free Shipping Meter */}
          <div className="bg-zenji-card px-6 py-3 border-b border-zenji-border text-xs font-mono">
            <div className="flex items-center justify-between mb-1.5">
              <span className="flex items-center gap-1.5 text-zenji-muted">
                <Truck className="w-3.5 h-3.5 text-zenji-crimson" />
                {isFreeShipping ? (
                  <span className="text-emerald-400 font-bold">FREE AUS SHIPPING UNLOCKED</span>
                ) : (
                  <span>
                    Add <strong className="text-zenji-bone font-mono">A${amountToFreeShipping.toFixed(2)}</strong> for Free Shipping
                  </span>
                )}
              </span>
              <span className="text-zenji-dim">{Math.round(progressPercent)}%</span>
            </div>
            <div className="w-full bg-zenji-bg h-1.5 rounded-full overflow-hidden">
              <div
                className={`h-full transition-all duration-300 ${
                  isFreeShipping ? 'bg-emerald-500' : 'bg-zenji-crimson'
                }`}
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>

          {/* Cart Items Scroll Container */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {items.length === 0 ? (
              <div className="text-center py-16 space-y-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-zenji-card border border-zenji-border flex items-center justify-center text-zenji-dim">
                  <ShoppingBag className="w-8 h-8 text-zenji-dim" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-zenji-bone">YOUR BAG IS EMPTY</h3>
                  <p className="text-xs text-zenji-muted mt-1 max-w-xs mx-auto">
                    Limited anime drops sell out fast. Inspect the catalog and secure your size.
                  </p>
                </div>
                <button
                  onClick={closeCart}
                  className="inline-flex items-center gap-2 px-6 py-2.5 bg-zenji-crimson hover:bg-zenji-crimson-hover text-white text-xs font-bold rounded-sm tracking-wider"
                >
                  <span>BROWSE PIECES</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ) : (
              items.map((item) => (
                <div
                  key={`${item.productId}-${item.size}`}
                  className="flex gap-4 p-3 bg-zenji-card border border-zenji-border rounded-sm group hover:border-zenji-border-hover transition-colors"
                >
                  {/* Thumbnail Image */}
                  <div className="w-20 h-24 bg-zenji-surface rounded-sm overflow-hidden flex-shrink-0">
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Item Details */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start gap-1">
                        <h4 className="font-bold text-sm text-zenji-bone leading-tight">
                          {item.product.name}
                        </h4>
                        <button
                          onClick={() => removeFromCart(item.productId, item.size)}
                          className="text-zenji-dim hover:text-zenji-crimson transition-colors p-1"
                          aria-label={`Remove ${item.product.name} size ${item.size} from cart`}
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-[11px] font-mono px-1.5 py-0.5 bg-zenji-surface text-zenji-bone border border-zenji-border rounded-sm">
                          SIZE: {item.size}
                        </span>
                        <span className="text-xs font-mono text-zenji-muted">
                          A${item.product.price.toFixed(2)} each
                        </span>
                      </div>
                    </div>

                    {/* Quantity Stepper & Line Total */}
                    <div className="flex items-center justify-between mt-3 pt-2 border-t border-zenji-border/60">
                      <div className="flex items-center border border-zenji-border rounded-sm bg-zenji-surface">
                        <button
                          onClick={() => updateQuantity(item.productId, item.size, -1)}
                          className="p-1 hover:text-zenji-crimson text-zenji-dim transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="px-2.5 text-xs font-mono font-bold text-zenji-bone">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.productId, item.size, 1)}
                          className="p-1 hover:text-zenji-crimson text-zenji-dim transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <span className="text-sm font-bold font-mono text-zenji-bone">
                        A${(item.product.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Cart Footer Summary */}
          {items.length > 0 && (
            <div className="p-6 bg-zenji-bg border-t border-zenji-border space-y-4">
              <div className="space-y-1.5 text-xs font-mono">
                <div className="flex justify-between text-zenji-muted">
                  <span>SUBTOTAL</span>
                  <span className="text-zenji-bone font-bold">A${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-zenji-muted">
                  <span>SHIPPING</span>
                  <span>{isFreeShipping ? 'FREE' : 'A$10.00'}</span>
                </div>
                <div className="flex justify-between text-base font-bold text-zenji-bone pt-2 border-t border-zenji-border">
                  <span>TOTAL AUD</span>
                  <span className="font-mono text-zenji-crimson">
                    A${(subtotal + (isFreeShipping ? 0 : 10)).toFixed(2)}
                  </span>
                </div>
              </div>

              <div className="space-y-2">
                <button
                  type="button"
                  onClick={() => {
                    closeCart();
                    onCheckout();
                  }}
                  className="w-full py-4 bg-zenji-crimson hover:bg-zenji-crimson-hover text-white font-bold text-sm tracking-wider rounded-sm flex items-center justify-center gap-2 transition-all shadow-lg active:scale-[0.99]"
                >
                  <span>PROCEED TO DEMO CHECKOUT</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  type="button"
                  onClick={clearCart}
                  className="w-full py-2 text-xs font-mono text-zenji-dim hover:text-zenji-bone transition-colors"
                >
                  CLEAR BAG
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-[10px] font-mono text-zenji-dim pt-2">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                <span>DEMO ENVIRONMENT // NO REAL PAYMENT REQUIRED</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
