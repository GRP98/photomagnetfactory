# Photo Magnet Factory

A simple web application for Photo Magnet Factory - Custom Photo Magnets, Acrylic Frames & Personalized Gifts.

## Tech Stack

- **React** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Lucide React** - Icons
- **Vite** - Build tool
- **React Router** - Routing

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
npm install
```

### Development

```bash
npm start
# or
npm run dev
```

The app will open automatically at `http://localhost:3000`

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Deployment to GitHub Pages

### Prerequisites

- GitHub repository: `photomagnetfactory`
- `gh-pages` package (already installed)

### Deploy Steps

1. **Build and deploy:**

   ```bash
   npm run deploy
   ```

   This will:

   - Build the app (`npm run build`)
   - Copy `index.html` to `404.html` (for SPA routing)
   - Deploy the `dist` folder to the `gh-pages` branch

2. **Configure GitHub Pages:**

   - Go to your repository: https://github.com/GRP98/photomagnetfactory
   - Click **Settings** → **Pages**
   - Under **Source**, select:
     - Branch: `gh-pages`
     - Folder: `/ (root)`
   - Click **Save**

3. **Your site will be live at:**
   ```
   https://GRP98.github.io/photomagnetfactory/
   ```

### Future Updates

To update the deployed site, simply run:

```bash
npm run deploy
```

The site will update automatically within 1-2 minutes.

## Project Structure

```
src/
├── components/     # React components
├── pages/          # Page components
├── lib/            # Utilities and constants
├── assets/         # Images and static assets
└── hooks/          # Custom React hooks
```

## Features

- Product catalog with cart functionality
- WhatsApp integration for orders
- Responsive design
- Event service booking
