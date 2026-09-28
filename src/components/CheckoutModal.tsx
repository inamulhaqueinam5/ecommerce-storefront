import React, { useState } from 'react';
import { X, CheckCircle2, ShieldCheck, PackageCheck, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({ isOpen, onClose }) => {
  const { items, subtotal, clearCart, amountToFreeShipping } = useCart();
  const [isSuccess, setIsSuccess] = useState(false);
  const [orderId, setOrderId] = useState('');

  if (!isOpen) return null;

  const isFreeShipping = amountToFreeShipping === 0;
  const shippingCost = isFreeShipping ? 0 : 10;
  const total = subtotal + shippingCost;

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    const generatedId = `ZNJ-${Math.floor(100000 + Math.random() * 900000)}`;
    setOrderId(generatedId);
    setIsSuccess(true);
    clearCart();
  };

  const handleFinish = () => {
    setIsSuccess(false);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
      role="dialog"
      aria-modal="true"
    >
      <div className="bg-zenji-surface border border-zenji-border rounded-sm max-w-lg w-full overflow-hidden shadow-2xl">
        {/* Header */}
        <div className="p-5 border-b border-zenji-border flex items-center justify-between bg-zenji-bg">
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-zenji-crimson"></span>
            <h3 className="font-bold text-base text-zenji-bone tracking-tight">
              {isSuccess ? 'ORDER CONFIRMED' : 'SIMULATED DEMO CHECKOUT'}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-sm text-zenji-dim hover:text-zenji-bone"
            aria-label="Close checkout modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6">
          {isSuccess ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-16 h-16 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div>
                <h4 className="text-xl font-extrabold text-zenji-bone tracking-tight">
                  DEMO ORDER SUCCESSFUL!
                </h4>
                <p className="text-xs font-mono text-zenji-dim mt-1">
                  ORDER REFERENCE: <strong className="text-zenji-crimson">{orderId}</strong>
                </p>
              </div>

              <div className="bg-zenji-card border border-zenji-border p-4 rounded-sm text-left text-xs space-y-2">
                <div className="flex items-center gap-2 text-zenji-bone font-medium">
                  <PackageCheck className="w-4 h-4 text-zenji-crimson" />
                  <span>Packaging & Garment Prep</span>
                </div>
                <p className="text-zenji-muted text-[11px] leading-relaxed">
                  This is a portfolio hiring assessment simulation. In production, items would be dispatched via Australia Post with tracking sent to your email within 24 hours.
                </p>
              </div>

              <button
                type="button"
                onClick={handleFinish}
                className="w-full py-3 bg-zenji-crimson hover:bg-zenji-crimson-hover text-white font-bold text-xs tracking-wider rounded-sm transition-colors"
              >
                RETURN TO STOREFRONT
              </button>
            </div>
          ) : (
            <form onSubmit={handlePlaceOrder} className="space-y-4">
              <div className="bg-zenji-card border border-zenji-border p-3 rounded-sm space-y-1 text-xs font-mono">
                <div className="flex justify-between text-zenji-muted">
                  <span>ITEMS IN CART:</span>
                  <span className="text-zenji-bone font-bold">{items.length} unique pieces</span>
                </div>
                <div className="flex justify-between text-zenji-muted">
                  <span>ESTIMATED DELIVERY:</span>
                  <span className="text-zenji-bone">1–2 Weeks (Australia)</span>
                </div>
                <div className="flex justify-between text-sm font-bold text-zenji-bone pt-2 border-t border-zenji-border">
                  <span>ORDER TOTAL:</span>
                  <span className="text-zenji-crimson">A${total.toFixed(2)}</span>
                </div>
              </div>

              <div className="space-y-3 text-xs">
                <div>
                  <label className="block font-mono text-zenji-muted mb-1">
                    DELIVERY ADDRESS (SIMULATION)
                  </label>
                  <input
                    type="text"
                    defaultValue="42 Shibuya Arc, Melbourne VIC 3000"
                    required
                    className="w-full p-2.5 bg-zenji-card border border-zenji-border rounded-sm text-zenji-bone focus:border-zenji-crimson outline-none font-mono text-xs"
                  />
                </div>

                <div>
                  <label className="block font-mono text-zenji-muted mb-1">
                    CUSTOMER EMAIL
                  </label>
                  <input
                    type="email"
                    defaultValue="collector@zenji.shop"
                    required
                    className="w-full p-2.5 bg-zenji-card border border-zenji-border rounded-sm text-zenji-bone focus:border-zenji-crimson outline-none font-mono text-xs"
                  />
                </div>
              </div>

              <div className="p-3 bg-zenji-bg/60 border border-zenji-border rounded-sm flex items-start gap-2 text-[11px] text-zenji-dim">
                <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span>
                  No credit card or payment gateway is hooked up. Submitting will complete the simulated cart lifecycle.
                </span>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-zenji-crimson hover:bg-zenji-crimson-hover text-white font-bold text-xs tracking-wider rounded-sm flex items-center justify-center gap-2 transition-all shadow-lg"
              >
                <span>CONFIRM & PLACE DEMO ORDER</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
