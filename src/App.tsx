import React, { useState } from 'react';
import { CartProvider, useCart } from './context/CartContext';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProductGrid } from './components/ProductGrid';
import { BrandEthos } from './components/BrandEthos';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { CheckoutModal } from './components/CheckoutModal';
import { Check } from 'lucide-react';

const StorefrontContent: React.FC = () => {
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const { toastMessage } = useCart();

  return (
    <div className="min-h-screen bg-zenji-bg text-zenji-bone flex flex-col relative selection:bg-zenji-crimson selection:text-white">
      {/* Toast Notification */}
      {toastMessage && (
        <div
          role="status"
          aria-live="polite"
          className="fixed bottom-6 right-6 z-50 bg-zenji-card border border-zenji-border px-4 py-3 rounded-sm shadow-2xl flex items-center gap-3 text-xs font-mono text-zenji-bone animate-slide-up"
        >
          <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0">
            <Check className="w-3.5 h-3.5" />
          </div>
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Main Structural Components */}
      <Header />
      <main className="flex-1">
        <Hero />
        <ProductGrid />
        <BrandEthos />
      </main>
      <Footer />

      {/* Slide-Over Cart Drawer & Simulated Checkout Modal */}
      <CartDrawer onCheckout={() => setCheckoutOpen(true)} />
      <CheckoutModal isOpen={checkoutOpen} onClose={() => setCheckoutOpen(false)} />
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <CartProvider>
      <StorefrontContent />
    </CartProvider>
  );
};

export default App;
