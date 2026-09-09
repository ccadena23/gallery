document.getElementById("year").textContent = new Date().getFullYear();

const spreadsEl = document.getElementById("spreads");

PROJECTS.forEach((project, index) => {
  const photos = getPhotosForProject(project).slice(0, 3);
  const flip = index % 2 === 1;

  const section = document.createElement("section");
  section.className = "spread" + (flip ? " flip" : "");

  section.innerHTML = `
    <div class="spread-photos">
      <a href="project.html?slug=${project.slug}" class="ph-main">
        <img src="${photos[0].src}" alt="${photos[0].alt}" loading="lazy">
      </a>
      <a href="project.html?slug=${project.slug}">
        <img src="${photos[1].src}" alt="${photos[1].alt}" loading="lazy">
      </a>
      <a href="project.html?slug=${project.slug}">
        <img src="${photos[2].src}" alt="${photos[2].alt}" loading="lazy">
      </a>
    </div>
    <div class="spread-caption">
      <p class="meta">${project.location} — ${project.year}</p>
      <h2><a href="project.html?slug=${project.slug}">${project.title}</a></h2>
      <p>${project.caption}</p>
      <a class="view-link" href="project.html?slug=${project.slug}">View all ${project.photoCount} photos &rarr;</a>
    </div>
  `;

  spreadsEl.appendChild(section);
});
