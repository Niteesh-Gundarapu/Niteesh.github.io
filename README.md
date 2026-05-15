# Niteesh Gundarapu | Premium Full Stack Portfolio

A high-performance, interactive, and "Cyber-OS" themed portfolio built with Next.js 19 and Framer Motion. This project replicates the pixel-perfect aesthetic of high-end developer showcases with advanced environmental and cinematic effects.

## 🚀 Key Features

- **Cyber-OS Desktop Interface**: A complete desktop-style UI with a system menu bar, dock, and z-index-managed draggable windows.
- **Dynamic Weather System**: Environmental effects (Rain, Snow, Heat) that respond to current weather conditions.
- **Cinematic Hero States**: A multi-modal Hero section that cycles between:
  - **Sleek Typography**: High-end gradient and outline text.
  - **Jungle Protocol**: Immersive "Jungle" video background state.
  - **Pipeline Fail**: Tactical glitch effects and dev-ops terminal visualizations.
  - **Global Zoom**: Cinematic camera transitions.
- **Interactive WebGL Background**: A reactive 3D starfield and grid system that responds to mouse movement.
- **Tactical Custom Cursor**: A crosshair HUD with live coordinate tracking and magnetic hover states.
- **Metadata-Driven Content**: Fully configurable career data via `src/constants/data.ts`.

## 🛠️ Tech Stack

- **Framework**: Next.js 19 (App Router)
- **Styling**: Vanilla CSS (Tailwind-compatible logic)
- **Animations**: Framer Motion, GSAP, Lenis (Smooth Scroll)
- **3D/Graphics**: React Three Fiber, Three.js
- **Icons**: Lucide React, Simple Icons (CDN)

## 📂 Project Structure

- `src/components/ui/`: Core interactive components (Cursor, Navbar, Dock, HUDWindows).
- `src/components/sections/`: Modular portfolio sections (Hero, Projects, Experience, Skills).
- `src/constants/data.ts`: Centralized career data and project archives.
- `src/app/globals.css`: Custom design system and animation tokens.

## 📦 Getting Started

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Run Development Server**:
   ```bash
   npm run dev
   ```

3. **Static Export**:
   ```bash
   npm run build
   ```

## 🌐 CI/CD

Automatically deploys to GitHub Pages via GitHub Actions (see `.github/workflows/deploy.yml`).

---
Built with ⚡ by Antigravity
