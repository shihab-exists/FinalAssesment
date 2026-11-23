# Brillance - React.js & Tailwind CSS v4 Component-Based Web Application

## 📌 Project Overview
This project is a modern, component-driven transformation of the **Brillance** custom contract billing landing page into a fully modular **React.js** application powered by **Vite** and **Tailwind CSS v4**.

The application features clean component architecture, reusable card patterns, props-driven data flow, Array of Objects rendered via `.map()`, dedicated SVG icon components, and full responsiveness across mobile, tablet, and desktop devices. It is ready for one-click deployment to **Vercel**.

---

## 🚀 Technologies Used
- **React.js 19**: Component-based UI library
- **Vite 6**: Next-generation lightning-fast frontend tooling
- **Tailwind CSS v4**: Latest utility-first CSS framework using `@tailwindcss/vite`
- **JavaScript (ES6+)**: Clean, modern syntax
- **HTML5 & CSS3**: Semantic structuring and custom typography styling
- **Google Fonts**: Inter & Instrument Serif

---

## 📁 Folder Structure
```
Assesment Project/
│
├── public/
│   ├── assets/
│   │   └── images/
│   │       └── services/
│   │           ├── analytics-dashboard-with-charts-graphs-and-data-vi.jpg
│   │           ├── data-visualization-dashboard-with-interactive-char.jpg
│   │           ├── integration.png
│   │           ├── logo.svg
│   │           ├── plan-your-schedules.jpeg
│   │           ├── speak.png
│   │           ├── work-order.png
│   │           └── work-sync.png
│   └── logo.svg
│
├── src/
│   ├── components/
│   │   ├── Header.jsx               # Navigation bar with responsive mobile menu
│   │   ├── Hero.jsx                 # Hero section with typography and CTA
│   │   ├── Services.jsx             # Reusable service cards section
│   │   ├── Testimonials.jsx         # Customer testimonial and social proof
│   │   ├── Features.jsx             # 2x2 Feature grid with decorative hatching
│   │   ├── Pricing.jsx              # Pricing plan comparison section
│   │   ├── Footer.jsx               # Brand info, social icons, and sitemap
│   │   │
│   │   ├── cards/
│   │   │   ├── ServiceCard.jsx      # Reusable card component for services
│   │   │   ├── FeatureCard.jsx      # Reusable card component for features
│   │   │   └── PricingCard.jsx      # Reusable card component for pricing tiers
│   │   │
│   │   ├── common/
│   │   │   ├── SectionBadge.jsx     # Reusable section header pill badge
│   │   │   └── DiagonalHatchPattern.jsx # Reusable diagonal border patterns
│   │   │
│   │   └── icons/
│   │       ├── LogoIcon.jsx         # Brillance logo mark SVG
│   │       ├── ServicesBadgeIcon.jsx# 4-square grid icon
│   │       ├── TestimonialBadgeIcon.jsx # Analytics blocks icon
│   │       ├── PricingBadgeIcon.jsx # Currency dollar icon
│   │       ├── TwitterIcon.jsx      # X / Twitter icon
│   │       ├── LinkedInIcon.jsx     # LinkedIn icon
│   │       ├── GitHubIcon.jsx       # GitHub icon
│   │       ├── CheckIcon.jsx        # Checkmark icon
│   │       ├── MenuIcon.jsx         # Mobile hamburger menu icon
│   │       ├── CloseIcon.jsx        # Mobile close icon
│   │       ├── HeroPatternSvg.jsx   # Hero background grid pattern
│   │       └── index.js             # Icons barrel export
│   │
│   ├── data/
│   │   └── websiteData.js           # Centralized Arrays of Objects for data mapping
│   │
│   ├── App.jsx                      # Main application container
│   ├── main.jsx                     # React DOM entry point
│   └── index.css                    # Tailwind CSS v4 styling & theme configuration
│
├── index.html                       # Vite HTML template with fonts and metadata
├── vite.config.js                   # Vite configuration with @tailwindcss/vite
├── package.json                     # Scripts and project dependencies
├── vercel.json                      # Vercel deployment configuration
├── .gitignore                       # Git ignore rules (node_modules, dist, etc.)
└── README.md                        # Documentation
```

---

## 🌟 Key Features & Requirements Implemented

### 1. Component-Based Architecture
The application is decoupled into independent, self-contained React components:
- `Header`
- `Hero`
- `Services`
- `Features`
- `Testimonials`
- `Pricing`
- `Footer`

### 2. Reusable Components & Props
- `ServiceCard`: Reusable card accepting `title`, `description`, `imageSrc`, `imageAlt`, and `isLast`.
- `FeatureCard`: Reusable grid item card accepting `title`, `description`, `imageSrc`, `imageAlt`, and styling props.
- `PricingCard`: Reusable pricing tier card accepting `name`, `price`, `period`, `description`, `features` array, and highlight flag `isPopular`.
- `SectionBadge`: Reusable badge component used across Testimonials, Features, and Pricing headers.

### 3. Array of Objects & Map Function
Data is separated cleanly into `src/data/websiteData.js`. The following sections dynamically render using ES6 `.map()`:
- **Services Section**: `servicesData.map(...)`
- **Features Section**: `featuresData.map(...)`
- **Pricing Plans**: `pricingPlansData.map(...)`
- **Navigation Links**: `navLinks.map(...)`
- **Footer Sitemap**: `columns.map(...)` and `links.map(...)`

### 4. Standalone SVG Icon Components
Every SVG icon from the original template has its own React component inside `src/components/icons/`:
- `LogoIcon`, `ServicesBadgeIcon`, `TestimonialBadgeIcon`, `PricingBadgeIcon`, `TwitterIcon`, `LinkedInIcon`, `GitHubIcon`, `CheckIcon`, `MenuIcon`, `CloseIcon`, `HeroPatternSvg`.

### 5. Tailwind CSS Version 4
Installed and configured according to the official documentation:
- Uses `@tailwindcss/vite` plugin in `vite.config.js`.
- Root stylesheet `src/index.css` configured with `@import "tailwindcss";` and `@theme` definitions.

### 6. Responsive Design
Optimized for mobile, tablet, and desktop screens:
- Mobile hamburger menu toggle in the header.
- Multi-column flex and grid layouts collapse gracefully on smaller viewports (`sm`, `md`, `lg`).
- Adaptive typography sizing and spacing matching original aesthetics.

---

## 🛠️ Installation & Local Setup

### 1. Clone or Extract the Project
```bash
cd "Assesment Project"
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Development Server
```bash
npm run dev
```
Open `http://localhost:5173` in your browser.

### 4. Build for Production
```bash
npm run build
```
This produces the optimized production build in the `dist/` directory.

### 5. Preview Production Build
```bash
npm run preview
```

---

## ☁️ Deploying to Vercel

This project is pre-configured for seamless deployment to **Vercel**:

### Method 1: Deploy via Vercel CLI
```bash
npm i -g vercel
vercel
```

### Method 2: Deploy via GitHub / Vercel Web Dashboard
1. Push this repository to GitHub or GitLab.
2. Go to [vercel.com](https://vercel.com) and click **"Add New Project"**.
3. Import the repository.
4. Vercel will automatically detect:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. Click **"Deploy"**.

---

## 📦 How to Create Submission ZIP File
To create a clean ZIP file for submission without bulky `node_modules` or `dist`:
```bash
# macOS / Linux:
zip -r React-Tailwind-Assignment.zip . -x "node_modules/*" "dist/*" ".git/*"
```
The resulting ZIP file will contain clean source code ready to run with `npm install` and `npm run dev`.
