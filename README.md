# Nitesh Kumar — Portfolio

A clean, modern, responsive personal portfolio/résumé site for **Nitesh Kumar**, Senior Software Engineer.

🔗 **Live site:** https://nitesh-jobvite.github.io

Built with **React + Vite**. Light/dark theme, scroll-reveal animations, fully responsive, accessible, and SEO-friendly. Automatically built and deployed to GitHub Pages via GitHub Actions on every push to `main`.

## Sections

Hero · About · Skills · Experience · Projects · Résumé (PDF download) · Contact

## Tech stack

- [React 19](https://react.dev/) + [Vite](https://vite.dev/)
- Plain CSS with custom properties (no UI framework)
- Inline SVG icons (no icon-library dependency)
- GitHub Actions → GitHub Pages

## Project structure

```
.
├── .github/workflows/deploy.yml   # CI: build + deploy to GitHub Pages
├── public/
│   ├── favicon.svg
│   └── Nitesh_Kumar_Resume.pdf     # résumé served at /Nitesh_Kumar_Resume.pdf
├── src/
│   ├── components/                 # Navbar, Hero, About, Skills, Experience,
│   │                               #   Projects, Resume, Contact, Footer
│   ├── data.js                     # ← edit all content here (single source of truth)
│   ├── icons.jsx                   # inline SVG icons
│   ├── useReveal.js                # scroll-reveal hook
│   ├── index.css                   # design system + all styles
│   ├── App.jsx
│   └── main.jsx
├── index.html                      # meta tags, fonts, structured data (SEO)
└── vite.config.js                  # base: "/" for a user site
```

## Editing content

All text — profile, skills, experience, projects, contact details — lives in
[`src/data.js`](src/data.js). Update values there; no component markup changes needed.
To replace the résumé, drop a new PDF into `public/` and update `resumeUrl` in `data.js`.

## Local development

```bash
# install dependencies (first time only)
npm install

# start the dev server with hot reload → http://localhost:5173
npm run dev
```

## Build & preview

```bash
# production build into ./dist
npm run build

# preview the production build locally → http://localhost:4173
npm run preview
```

## Deployment

This repo deploys **automatically**. Pushing to `main` triggers the
`.github/workflows/deploy.yml` workflow, which builds the site and publishes it to
GitHub Pages.

**One-time setup** (required once for the workflow to publish): in the GitHub repo,
go to **Settings → Pages → Build and deployment → Source** and select **GitHub Actions**.

After that, every push to `main` redeploys:

```bash
git add .
git commit -m "Update content"
git push
```

The site goes live at **https://nitesh-jobvite.github.io** within a minute or two.

### Notes on base path

This is a GitHub **user site** (`nitesh-jobvite.github.io`), served from the domain root,
so `base` is `"/"` in `vite.config.js`. If you ever move this to a **project repo**
(e.g. `github.com/nitesh-jobvite/portfolio`), change `base` to `"/portfolio/"` so asset
URLs resolve correctly.

## License

Personal project — content © Nitesh Kumar.
