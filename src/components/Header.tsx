import React, { useState } from 'react';
import { ShoppingBag, Menu, X, ShieldCheck } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const Header: React.FC = () => {
  const { totalItems, toggleCart } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-zenji-bg/90 backdrop-blur-md border-b border-zenji-border">
      {/* Top Telemetry Ticker */}
      <div className="bg-zenji-surface border-b border-zenji-border py-1 px-4 text-xs font-mono text-zenji-dim overflow-hidden whitespace-nowrap">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center space-x-4">
            <span className="inline-flex items-center text-zenji-crimson">
              <span className="w-1.5 h-1.5 rounded-full bg-zenji-crimson animate-ping mr-2"></span>
              DROP_01 ACTIVE
            </span>
            <span className="hidden sm:inline">240 GSM HEAVYWEIGHT COTTON</span>
            <span className="hidden md:inline">FREE AUS SHIPPING OVER A$100</span>
          </div>
          <div className="flex items-center space-x-2 text-zenji-dim">
            <ShieldCheck className="w-3.5 h-3.5 text-zenji-muted" />
            <span className="tracking-widest uppercase">NO RESTOCKS. EVER.</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center space-x-2.5 group">
          <div className="w-8 h-8 bg-zenji-crimson flex items-center justify-center font-bold text-white text-base tracking-tighter rounded-sm shadow-sm group-hover:bg-zenji-crimson-hover transition-colors">
            ゼ
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-xl tracking-tighter text-zenji-bone group-hover:text-zenji-crimson transition-colors">
              ZENJI
            </span>
            <span className="text-[9px] font-mono text-zenji-dim -mt-1 tracking-widest">
              STREETWEAR
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
          <a
            href="#products"
            className="text-zenji-muted hover:text-zenji-bone transition-colors tracking-wide"
          >
            LATEST DROPS
          </a>
          <a
            href="#about"
            className="text-zenji-muted hover:text-zenji-bone transition-colors tracking-wide"
          >
            OUR STORY
          </a>
          <a
            href="#specs"
            className="text-zenji-muted hover:text-zenji-bone transition-colors tracking-wide"
          >
            FABRIC & FIT
          </a>
          <a
            href="#faq"
            className="text-zenji-muted hover:text-zenji-bone transition-colors tracking-wide"
          >
            FAQ
          </a>
        </nav>

        {/* Right Action Controls */}
        <div className="flex items-center space-x-4">
          <button
            onClick={toggleCart}
            className="relative p-2 rounded-md border border-zenji-border hover:border-zenji-border-hover bg-zenji-surface text-zenji-bone hover:text-zenji-crimson transition-all focus-visible:outline-none"
            aria-label={`Open shopping cart containing ${totalItems} items`}
          >
            <ShoppingBag className="w-5 h-5" />
            {totalItems > 0 && (
              <span className="absolute -top-1.5 -right-1.5 bg-zenji-crimson text-white text-[11px] font-bold font-mono w-5 h-5 rounded-full flex items-center justify-center shadow-md animate-pulse-glow">
                {totalItems}
              </span>
            )}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="md:hidden p-2 rounded-md border border-zenji-border bg-zenji-surface text-zenji-muted hover:text-zenji-bone"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-zenji-surface border-b border-zenji-border px-4 py-5 space-y-4">
          <a
            href="#products"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-medium text-zenji-muted hover:text-zenji-bone"
          >
            LATEST DROPS
          </a>
          <a
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-medium text-zenji-muted hover:text-zenji-bone"
          >
            OUR STORY
          </a>
          <a
            href="#specs"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-medium text-zenji-muted hover:text-zenji-bone"
          >
            FABRIC & FIT
          </a>
          <a
            href="#faq"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-medium text-zenji-muted hover:text-zenji-bone"
          >
            FAQ
          </a>
        </div>
      )}
    </header>
  );
};
