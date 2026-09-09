# Your photography site

A static site, ready for GitHub Pages. No build step, no dependencies — just HTML, CSS, and vanilla JS.

## What's here

```
index.html      Homepage — alternating spreads, one per project
project.html    Full gallery for one project (?slug=your-project-slug)
about.html      Bio / contact page
css/style.css   All styling
js/data.js      Your project list — edit this to change content
js/main.js      Renders the homepage spreads
js/project.js   Renders the gallery + lightbox on project pages
```

## Deploy to GitHub Pages

1. Create a new repository on GitHub (e.g. `yourusername.github.io` for a root domain, or any name for a project site).
2. Push these files to the repo's default branch:
   ```
   git init
   git add .
   git commit -m "Initial site"
   git branch -M main
   git remote add origin https://github.com/yourusername/your-repo.git
   git push -u origin main
   ```
3. In the repo, go to **Settings → Pages**, set the source to the `main` branch, root folder, and save.
4. Your site will be live at `https://yourusername.github.io/your-repo/` (or your root domain) within a minute or two.

## Swapping in your real photos

Everything currently uses placeholder images from picsum.photos, driven by `js/data.js`.

1. Create a folder per project inside `assets/`, e.g. `assets/photos/iceland/`.
2. Drop your images in there, resized to roughly 1600–2000px on the long edge (full-res files will slow the site down).
3. In `js/data.js`, give each project a real `photos` array instead of relying on `getPhotosForProject()`:
   ```js
   {
     slug: "two-weeks-in-iceland",
     title: "Two weeks in Iceland",
     year: "2024",
     location: "South Coast, Iceland",
     caption: "Your real caption here.",
     photos: [
       { src: "assets/photos/iceland/01.jpg", alt: "Black sand beach at dawn" },
       { src: "assets/photos/iceland/02.jpg", alt: "Glacier lagoon" }
       // ...
     ]
   }
   ```
4. Update `js/main.js` and `js/project.js` to read `project.photos` directly instead of calling `getPhotosForProject(project)` — it's a one-line change in each file.

## Easy edits

- **Your name / site title** — find-and-replace "Your Name" across the HTML files.
- **Email** — replace `hello@yourname.com` everywhere.
- **Colors** — all in the `:root` block at the top of `css/style.css`.
- **Fonts** — swapped via the `@import` at the top of `css/style.css` (currently Fraunces + Archivo from Google Fonts).
- **Add/remove/reorder projects** — edit the `PROJECTS` array in `js/data.js`; the homepage and spreads update automatically.

## Optional: custom domain

Add a `CNAME` file to the repo root containing just your domain (e.g. `yourname.com`), then point your domain's DNS at GitHub Pages per [GitHub's instructions](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site).
