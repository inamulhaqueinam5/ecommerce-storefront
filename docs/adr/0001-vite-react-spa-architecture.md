# 0001: Vite, React and Tailwind Architecture for Single-Page Storefront

## Context
The project brief requires a responsive, high-fidelity one-page demo storefront for ZENJI anime streetwear within a short delivery window. The assignment assesses brand fit, visual quality, mobile responsiveness, cart state management and code clarity. No real payments, user accounts or backend database are needed.

## Decision
We chose Vite with React, TypeScript and Tailwind CSS over heavier full-stack frameworks (such as Next.js App Router). We pair this with Framer Motion for tactile streetwear micro-interactions and Lucide React for lightweight iconography.

## Consequences
- Fast developer feedback loop and instantaneous HMR.
- Zero server runtime dependencies, allowing direct static hosting on Vercel or edge CDNs.
- Clean client-side state architecture using React hooks and context.
- If server-rendered dynamic catalog indexing or server-side payment processing is introduced in the future, the component tree can migrate cleanly into Next.js or Remix.
