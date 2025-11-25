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

### Option 1: Automatic Deployment with GitHub Actions (Recommended)

The project includes a GitHub Actions workflow that automatically deploys your site when you push to the `main` branch.

1. **Push your code to GitHub:**
   ```bash
   git add .
   git commit -m "Setup GitHub Pages deployment"
   git push origin main
   ```

2. **Configure GitHub Pages:**
   - Go to your repository: https://github.com/GRP98/photomagnetfactory
   - Click **Settings** → **Pages**
   - Under **Build and deployment** → **Source**, select:
     - Source: `Deploy from a branch`
     - Branch: `gh-pages`
     - Folder: `/ (root)`
   - Click **Save**

3. **Your site will be live at:**
   ```
   https://GRP98.github.io/photomagnetfactory/
   ```

**Future updates:** Just push to `main` branch and the site will automatically deploy!

### Option 2: Manual Deployment with gh-pages

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

**Future updates:** Run `npm run deploy` whenever you want to update the site.

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
