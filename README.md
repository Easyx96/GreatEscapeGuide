# Great Escape Olympia - Guest Guide

A modern, fast, and responsive guest guide for your Airbnb property near Ancient Olympia, Greece.

Built with **Vite + React 18 + Material UI v5 + Tailwind CSS**.

## Features

- ⚡ Lightning-fast load times (no CDN dependencies, pre-compiled JSX)
- 🌍 Multi-language support (EN, DE, FR, EL)
- 🌤️ Live weather widget
- 📱 Mobile-first responsive design
- 📍 Quick navigation to local spots (Google Maps)
- 🆘 Emergency numbers with one-tap calling
- 🏠 Property info (WiFi, check-in/out times)
- 🍽️ Local dining recommendations
- 🏖️ Beach guide
- 🗺️ Day trip excursions

## Quick Start

### Prerequisites

- Node.js 18+ (recommended: 20+)
- npm or yarn

### Run Locally

```bash
# Clone or download the project
cd ge-guide

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:3000`

### Build for Production

```bash
npm run build
```

The optimized build will be in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub/GitLab
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel auto-detects Vite and deploys

Or use the Vercel CLI:

```bash
npm i -g vercel
vercel
```

### Deploy to GitHub Pages

1. Add to `vite.config.js`:
   ```js
   export default defineConfig({
     base: '/your-repo-name/',
     // ... rest of config
   })
   ```

2. Build and deploy:
   ```bash
   npm run build
   # The dist folder contains your static site
   ```

3. Push the `dist` folder to the `gh-pages` branch, or use GitHub Actions.

### Deploy to Netlify

1. Connect your repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`

## Customization

### Property Data

Edit `src/data/propertyData.js` to update:
- Property details (WiFi, check-in times, contact info)
- Restaurant recommendations
- Beach locations
- Essential services
- Day trip excursions
- Emergency numbers

### Translations

Edit `src/data/translations.js` to modify text in any language.

### Styling

Edit `src/styles.js` for layout and component styles.
Edit `src/index.css` for global CSS and Tailwind customizations.

### Background Image

Replace `public/olympia_background.png` with your own image.

## Project Structure

```
ge-guide/
├── public/
│   └── olympia_background.png
├── src/
│   ├── components/
│   │   ├── tabs/           # Tab content components
│   │   └── *.jsx           # Reusable UI components
│   ├── data/
│   │   ├── propertyData.js # Property & location data
│   │   └── translations.js # i18n strings
│   ├── hooks/
│   │   ├── useResponsive.js
│   │   └── useWeather.js
│   ├── App.jsx
│   ├── main.jsx
│   ├── styles.js
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Tech Stack

- [Vite](https://vitejs.dev/) - Build tool
- [React 18](https://react.dev/) - UI library
- [Material UI v5](https://mui.com/) - Component library
- [Tailwind CSS](https://tailwindcss.com/) - Utility CSS
- [Open-Meteo API](https://open-meteo.com/) - Weather data

## License

MIT
