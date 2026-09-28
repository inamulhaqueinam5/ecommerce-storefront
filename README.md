# ZENJI | Limited Anime Streetwear Storefront

A responsive, high-performance one-page e-commerce storefront for **ZENJI**, an Australian anime streetwear label crafting limited-edition, 240gsm heavyweight cotton apparel with Japanese minimalist restraint.

Built as a hiring assessment demonstration showcasing frontend architecture, visual craftsmanship, responsive usability and clean state management.

---

## Live Demo & Repository

- **GitHub Repository**: [inamulhaqueinam5/ecommerce-storefront](https://github.com/inamulhaqueinam5/ecommerce-storefront)
- **Live Demo Target**: Ready for instant zero-config deployment on Vercel or edge CDNs.

---

## Assignment Requirements & Implementation

| Requirement | Implementation Detail | Status |
| :--- | :--- | :--- |
| **Branded Header & Hero** | Fixed navigation with drop ticker, brand mark (ゼンジ), and high-impact typographic hero with "SHOP THE DROP" CTA | Complete |
| **Sample Product Cards** | 6 authentic pieces (Domain Expansion, Demon Blood, Blue Flame, Bushido, Warrior Spirit, Water Breathing) with sizes XS to XXL | Complete |
| **Working Demo Cart** | Slide-over drawer with item removal, quantity adjustment (+/-), dynamic subtotal, and free shipping progress meter | Complete |
| **Mobile & Desktop Polish** | Fluid responsive grid (1 col mobile, 2 col tablet, 3 col desktop) with touch-friendly targets and keyboard focus rings | Complete |
| **Stack & Zero Backend** | Vite + React + TypeScript + Tailwind CSS with client-side localStorage persistence and mock checkout simulation | Complete |

---

## Architectural Highlights

- **Domain-Driven Design (DDD)**: Established project glossary in [`CONTEXT.md`](./CONTEXT.md) defining canonical terms (`Drop`, `Piece`, `Line Item`, `Cart` and `Size Variant`).
- **Architectural Decision Records**: Documented technology trade-offs in [`docs/adr/0001-vite-react-spa-architecture.md`](./docs/adr/0001-vite-react-spa-architecture.md).
- **Design System Specification**: Formally captured tokens, typography scales, colors and component rules in [`DESIGN.md`](./DESIGN.md).
- **Composite Cart Keys**: Cart uniqueness keyed by `productId + size` so multiple size variants of the same piece can be purchased independently.
- **Accessibility & Focus**: Semantic HTML5 landmarks, ARIA live regions for cart feedback, keyboard Escape key handlers and WCAG AA contrast compliance.

---

## Tech Stack

- **Framework**: [React 19](https://react.dev/) + [Vite 6](https://vite.dev/)
- **Language**: [TypeScript 5](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 3](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Typography**: Plus Jakarta Sans + JetBrains Mono

---

## Local Development

```bash
# Clone the repository
git clone https://github.com/inamulhaqueinam5/ecommerce-storefront.git
cd ecommerce-storefront

# Install dependencies
npm install

# Start local development server
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

---

## License & Attribution

Designed and developed for the ZENJI Technical Storefront Assessment. All product mockups and anime graphic references are inspired by the official [ZENJI Store](https://zenji.shop/).
