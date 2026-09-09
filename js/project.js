document.getElementById("year").textContent = new Date().getFullYear();

const params = new URLSearchParams(window.location.search);
const slug = params.get("slug");
const project = PROJECTS.find(p => p.slug === slug) || PROJECTS[0];
const photos = getPhotosForProject(project);

document.title = `${project.title} — Your Name Photography`;
document.getElementById("proj-title").textContent = project.title;
document.getElementById("proj-meta").textContent = `${project.location} — ${project.year} — ${photos.length} photos`;
document.getElementById("proj-caption").textContent = project.caption;

const galleryEl = document.getElementById("gallery");

photos.forEach((photo, i) => {
  const a = document.createElement("a");
  a.href = "#";
  a.dataset.index = i;
  a.innerHTML = `<img src="${photo.src}" alt="${photo.alt}" loading="lazy">`;
  galleryEl.appendChild(a);
});

// Lightbox
const lightbox = document.getElementById("lightbox");
const lbImage = document.getElementById("lbImage");
const lbCounter = document.getElementById("lbCounter");
let current = 0;

function openLightbox(index) {
  current = index;
  updateLightbox();
  lightbox.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  lightbox.classList.remove("open");
  document.body.style.overflow = "";
}

function updateLightbox() {
  const photo = photos[current];
  lbImage.src = photo.src.replace("/1200/", "/1800/"); // higher res for the enlarged view
  lbImage.alt = photo.alt;
  lbCounter.textContent = `${current + 1} / ${photos.length}`;
}

function showNext() {
  current = (current + 1) % photos.length;
  updateLightbox();
}

function showPrev() {
  current = (current - 1 + photos.length) % photos.length;
  updateLightbox();
}

galleryEl.addEventListener("click", (e) => {
  const link = e.target.closest("a[data-index]");
  if (!link) return;
  e.preventDefault();
  openLightbox(parseInt(link.dataset.index, 10));
});

document.getElementById("lbClose").addEventListener("click", closeLightbox);
document.getElementById("lbNext").addEventListener("click", showNext);
document.getElementById("lbPrev").addEventListener("click", showPrev);

lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) closeLightbox();
});

document.addEventListener("keydown", (e) => {
  if (!lightbox.classList.contains("open")) return;
  if (e.key === "Escape") closeLightbox();
  if (e.key === "ArrowRight") showNext();
  if (e.key === "ArrowLeft") showPrev();
});
