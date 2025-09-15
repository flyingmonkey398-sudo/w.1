# Token Marketplace Framework

A modern, mobile-friendly React web framework for token and NFT marketplaces.

## 🚀 Features

### Mobile-First Design
- **Responsive Grid Layout**: Token grid adapts from 6 columns on desktop to 2 on mobile, 1 on very small screens
- **Touch-Friendly Navigation**: Hamburger menu for mobile devices with smooth animations
- **Optimized Typography**: Scalable text using `clamp()` for perfect readability across all devices
- **Progressive Enhancement**: Works great on desktop and scales beautifully to mobile

### Pages & Navigation
- **Landing Page**: Hero section with features showcase and clear call-to-action
- **Token Marketplace**: Main application with "My Tokens" and "My Collection" views
- **React Router**: Smooth navigation between landing page (`/`) and marketplace (`/app`)

### Responsive Breakpoints
- **Desktop**: 1200px+ (6-column grid, full navigation)
- **Tablet**: 768px-1199px (4-column grid, condensed layout)
- **Mobile**: 480px-767px (2-column grid, hamburger menu)
- **Small Mobile**: <480px (optimized for tiny screens)

## 🛠 Tech Stack
- **React 18** with hooks and modern patterns
- **Vite** for fast development and building
- **React Router Dom** for client-side routing
- **Pure CSS** with CSS Grid, Flexbox, and modern features
- **Mobile-first responsive design**

## 📱 Mobile Features
- Hamburger menu with smooth slide-down animation
- Touch-optimized buttons and interactive elements
- Responsive images and token grid
- Mobile-friendly collection view with reorganized actions
- Optimized for both portrait and landscape orientations

## 🎨 Design System
- **Colors**: Dark theme (#000) with yellow accents (#FFEF5F)
- **Typography**: Inter font family with responsive sizing
- **Components**: Reusable, accessible React components
- **Icons**: Custom SVG icons optimized for mobile

## 🚀 Getting Started

```bash
npm install
npm run dev
```

Visit `http://localhost:3000` to see the landing page, then navigate to `/app` for the marketplace.

## 📁 Project Structure
```
src/
├── components/
│   ├── LandingPage.jsx      # Mobile-friendly landing page
│   ├── TokenMarketplace.jsx # Main marketplace application
│   ├── MobileNavigation.jsx # Responsive navigation
│   ├── TokenGrid.jsx        # Responsive token grid
│   ├── CollectionView.jsx   # Mobile-optimized collection view
│   └── InteractiveElements.jsx # Touch-friendly UI components
├── App.jsx                  # Router setup
├── main.jsx                 # Application entry point
└── index.css               # Complete responsive design system
```
