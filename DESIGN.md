---
name: ZENJI Storefront
description: Limited Anime Streetwear Australia
colors:
  bg: "#09090b"
  surface: "#121215"
  card: "#18181b"
  border: "#27272a"
  border-hover: "#3f3f46"
  crimson: "#e11d48"
  crimson-hover: "#f43f5e"
  crimson-dim: "rgba(225, 29, 72, 0.15)"
  muted: "#a1a1aa"
  dim: "#71717a"
  bone: "#fafafa"
typography:
  display:
    fontFamily: "Plus Jakarta Sans, system-ui, sans-serif"
    fontSize: "clamp(2.5rem, 6vw, 4.5rem)"
    fontWeight: 800
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Plus Jakarta Sans, system-ui, sans-serif"
    fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)"
    fontWeight: 800
    letterSpacing: "-0.03em"
  body:
    fontFamily: "Plus Jakarta Sans, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
  telemetry:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
    fontSize: "0.75rem"
    fontWeight: 500
    letterSpacing: "0.05em"
rounded:
  sm: "2px"
  md: "4px"
  full: "9999px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
---

# Design System: ZENJI Anime Streetwear

## Overview
ZENJI's visual identity fuses Australian urban streetwear with Japanese minimalism and shonen lore restraint. The aesthetic rejects bright neon gimmicks and childish cartoon tropes in favor of deep matte black canvas, crisp bone typography, subtle crimson highlights and structured technical telemetry.

## Colors
- **Canvas (`#09090b`)**: Deep matte obsidian background providing high contrast for photography and typography.
- **Surface & Cards (`#121215`, `#18181b`)**: Subtle tonal elevation layers for containers, drawers and interactive cards.
- **Borders (`#27272a`, `#3f3f46`)**: Hairline 1px structural grid boundaries.
- **Signal Crimson (`#e11d48`, `#f43f5e`)**: Singular accent reserved for actions, badges, active states and critical alerts.
- **Bone White (`#fafafa`)**: Primary high-contrast typography.
- **Muted & Dim Slate (`#a1a1aa`, `#71717a`)**: Secondary body copy, specs and telemetry labels.

## Typography
- **Display & Headings**: `Plus Jakarta Sans`, heavy weights (700, 800), tight tracking (`-0.04em`), uppercase leading phrases.
- **Body & Paragraphs**: `Plus Jakarta Sans`, regular weight (400), line height 1.6 for comfortable reading on all devices.
- **Telemetry & Badges**: `JetBrains Mono`, medium weight (500), tracked out for garment weight, drop numbers and size options.

## Layout
- Single-page fluid responsive container constrained to a maximum width of `1280px` (`max-w-7xl`).
- Grid structures adapt fluidly: single column on mobile (<640px), two columns on tablet (640px–1024px) and three balanced columns on desktop (>=1024px).
- Generous vertical spacing rhythm (80px to 112px between major page movements).

## Elevation & Depth
- Avoid arbitrary drop shadows. Depth is achieved via tonal surface layering (`#09090b` to `#121215` to `#18181b`) and 1px crisp borders.
- Floating chrome (slide-over cart drawer and sticky header) utilizes high-performance backdrop blurs (`backdrop-blur-md`) with semi-transparent dark tinting.

## Shapes
- Streetwear box cuts: subtle `2px` border radius (`rounded-sm`) on cards, buttons, badges and image viewports.
- Pill badges (`rounded-full`) reserved strictly for status telemetry (such as the live drop indicator).

## Components
- **Header**: Fixed top bar with telemetry ticker, brand logo, katakana badge and reactive cart trigger.
- **Hero**: Typographic anchor with "WEAR THE ARC" statement, ambient katakana watermark and direct "SHOP THE DROP" CTA.
- **Product Card**: High-definition garment showcase, size variant pill selection and responsive "Add to Bag" interaction.
- **Slide-over Cart Drawer**: Off-canvas right sheet with quantity steppers, item removal, free shipping calculation and simulated checkout launch.
- **Simulated Checkout Modal**: Accessible modal displaying order breakdown, address simulation and mock order confirmation.

## Do's and Don'ts
- **DO**: Treat anime references as elevated high-fashion streetwear design first.
- **DO**: Use monospaced font only for data, measurements (240 GSM) and drop metadata.
- **DO**: Provide instant keyboard access and high-contrast visible focus rings.
- **DON'T**: Use bouncy or cartoonish easing curves (all animations decelerate smoothly).
- **DON'T**: Use gradient text or multicolor neon halos.
- **DON'T**: Restock sold out drops or compromise the finite drop narrative.
