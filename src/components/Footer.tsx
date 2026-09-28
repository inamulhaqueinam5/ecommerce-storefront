import { ExternalLink, Github } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer id="faq" className="bg-zenji-bg border-t border-zenji-border pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* FAQ Section */}
        <div className="mb-16 pb-16 border-b border-zenji-border">
          <div className="text-xs font-mono text-zenji-crimson tracking-widest uppercase mb-2">
            HELP & LORE // FREQUENTLY ASKED
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-zenji-bone mb-8">
            QUESTIONS & ANSWERS
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs">
            <div className="bg-zenji-card border border-zenji-border p-5 rounded-sm">
              <h4 className="font-bold text-sm text-zenji-bone mb-2">
                HOW DOES THE SIZING FIT?
              </h4>
              <p className="text-zenji-muted leading-relaxed">
                Our pieces feature a custom oversized, boxy streetwear cut with dropped shoulders. Order your true size for the intended streetwear look, or size down if you prefer a slim fit.
              </p>
            </div>

            <div className="bg-zenji-card border border-zenji-border p-5 rounded-sm">
              <h4 className="font-bold text-sm text-zenji-bone mb-2">
                DO YOU RESTOCK SOLD-OUT DROPS?
              </h4>
              <p className="text-zenji-muted leading-relaxed">
                No restocks. Ever. Once a drop sells through, the screens are retired permanently so that the piece you own remains limited to its original release run.
              </p>
            </div>

            <div className="bg-zenji-card border border-zenji-border p-5 rounded-sm">
              <h4 className="font-bold text-sm text-zenji-bone mb-2">
                WHERE DO YOU SHIP FROM?
              </h4>
              <p className="text-zenji-muted leading-relaxed">
                All pieces are dispatched directly from Australia. Tracked shipping takes 1–2 weeks nationwide and is free on orders over A$100.
              </p>
            </div>
          </div>
        </div>

        {/* Footer Bottom Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center space-x-3">
            <div className="w-7 h-7 bg-zenji-crimson flex items-center justify-center font-bold text-white text-xs rounded-sm">
              ゼ
            </div>
            <div>
              <span className="font-extrabold text-base tracking-tight text-zenji-bone">
                ZENJI
              </span>
              <span className="text-xs text-zenji-dim ml-2 font-mono">
                LIMITED ANIME STREETWEAR AUSTRALIA
              </span>
            </div>
          </div>

          {/* Social and Repository Links */}
          <div className="flex items-center space-x-6 text-xs font-mono text-zenji-muted">
            <a
              href="https://zenji.shop/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-zenji-bone flex items-center gap-1 transition-colors"
            >
              <span>OFFICIAL STORE</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <a
              href="https://www.instagram.com/zenji_.shop/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-zenji-bone flex items-center gap-1 transition-colors"
            >
              <span>INSTAGRAM</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <a
              href="https://github.com/inamulhaqueinam5/ecommerce-storefront"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-zenji-crimson flex items-center gap-1.5 transition-colors"
            >
              <Github className="w-3.5 h-3.5" />
              <span>SOURCE CODE</span>
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-zenji-border/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-zenji-dim">
          <p>© {new Date().getFullYear()} ZENJI AUSTRALIA. CREATED AS A TECHNICAL ASSESSMENT DEMO.</p>
          <p className="flex items-center gap-1">
            BUILT WITH VITE, REACT, TYPESCRIPT AND TAILWIND CSS
          </p>
        </div>
      </div>
    </footer>
  );
};
