# TaxSafar Frontend 🚀

TaxSafar is a premium, high-performance financial services platform for tax compliance, accounting, business advisory, and registration support. Built with modern web technologies, the platform delivers a fast, secure, and visually stunning experience across all devices.

## 🌟 Key Features

* **Dynamic Service Engine:** Highly scalable Next.js `app/services/[serviceSlug]` dynamic routing rendering bespoke service detail layouts (`ServiceLayoutRenderer`).
* **Advanced Theming System:** Custom Context API (`ThemeContext.tsx`) seamlessly enabling zero-flicker Light and Dark mode transitions utilizing Tailwind CSS v4 variants.
* **Premium Aesthetics:** Integrated `framer-motion` for fluid micro-animations, glassmorphism overlays, and robust interactive elements.
* **Component-First Architecture:** Organized with highly reusable layout templates (`ContentPageLayout`, `AuthLayout`) and unified branding assets (`TaxSafarLogo`).
* **Authentication Suite:** Dedicated, polished interfaces for user login, user registration, and specialized partner portal access.
* **SEO & Performance Optimized:** Leveraging Next.js App Router static site generation (SSG) alongside dynamic routing for absolute peak load speeds.

## 🛠️ Technology Stack

* **Framework:** [Next.js](https://nextjs.org/) (App Router, Turbopack)
* **Library:** [React 19](https://react.dev/)
* **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
* **Animations:** [Framer Motion](https://www.framer.com/motion/)
* **Icons:** [Lucide React](https://lucide.dev/)

## 📂 Project Structure

```text
├── app/
│   ├── [slug]/                   # Dynamic generic info pages (About, Terms, FAQ, etc.)
│   ├── services/
│   │   └── [serviceSlug]/        # Dynamic bespoke service pages (GST, ITR, Virtual Office)
│   ├── login/                    # User authentication
│   ├── register/                 # Account creation
│   ├── partner-login/            # Dedicated partner access
│   ├── layout.tsx                # Root layout with ThemeProvider injection
│   └── globals.css               # Global Tailwind directives & custom CSS variables
│
├── components/
│   ├── Navbar.tsx                # Interactive primary navigation with ThemeToggle
│   ├── Hero.tsx                  # Animated landing dashboard
│   ├── ServiceGrid.tsx           # Categorized service grid
│   ├── ServiceLayoutRenderer.tsx # Data-driven renderer for varied complex service blocks
│   ├── AuthLayout.tsx            # Split-screen responsive auth wrapper
│   └── Footer.tsx                # Multi-column dynamic sitemap footer
│
├── contexts/
│   └── ThemeContext.tsx          # LocalStorage synced Light/Dark state provider
│
└── lib/
    ├── servicesData.ts           # Centralized configuration mapping for dynamic services
    └── utils.ts                  # Tailwind class-merging utilities (clsx, tailwind-merge)
```

## 🚀 Getting Started

### Prerequisites
Make sure you have Node.js (v18 or higher) installed on your machine.

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd taxsafar-frontend
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

3. Start the development server (configured rapidly with Turbopack):
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

## 📦 Deployment

To build the application for production:
```bash
npm run build
npm start
```

## 📄 License & Ownership
Copyright © **TaxSafar**. All rights reserved. Do not distribute or copy without explicit organizational authorization.
