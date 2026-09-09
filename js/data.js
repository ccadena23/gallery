// PROJECT DATA
// Replace `cover` and each photo's `src` with paths to your own images
// (e.g. "assets/photos/iceland/01.jpg") once you're ready to swap in real work.
// Keep the same shape: slug, title, year, location, caption, photos[].

const PROJECTS = [
  {
    slug: "tale-of-three-waterfalls",
    title: "Tale of Three Waterfalls",
    year: "2026",
    location: "Gorges State Park, North Carolina",
    caption: "Who would've thought that the first weekend in September would make such a beautiful hike.",
    photoCount: 11,
    photos: [
       { src: "assets/photos/waterfalls/220_resized.jpg", alt: "Rainbow Falls, vertical" },
       { src: "assets/photos/waterfalls/236_resized.jpg", alt: "Danger sign" },
       { src: "assets/photos/waterfalls/238_resized.jpg", alt: "Fungi on fallen tree" },
       { src: "assets/photos/waterfalls/206_resized.jpg", alt: "Overlook from hiking path" },
       { src: "assets/photos/waterfalls/209_resized.jpg", alt: "View down the creek" },
       { src: "assets/photos/waterfalls/221_resized.jpg", alt: "Rainbow Falls, horizontal" },
       { src: "assets/photos/waterfalls/233_resized.jpg", alt: "Stairway to the falls" },
       { src: "assets/photos/waterfalls/248_resized.jpg", alt: "Heron in the creek, portrait" },
       { src: "assets/photos/waterfalls/286_resized.jpg", alt: "Drift Falls" },
       { src: "assets/photos/waterfalls/292_resized.jpg", alt: "Turtleback Falls" },
       { src: "assets/photos/waterfalls/242_resized.jpg", alt: "Heron in the creek, landscape" }
     ]
  },
  // {
  //   slug: "corner-store-portraits",
  //   title: "Corner store portraits",
  //   year: "2024",
  //   location: "Queens, New York",
  //   caption: "A summer spent asking shopkeepers if I could take their picture. Most said yes.",
  //   photoCount: 16,
  //   seed: "cornerstore"
  // },
  // {
  //   slug: "the-long-way-home",
  //   title: "The long way home",
  //   year: "2023",
  //   location: "Highway 1, California",
  //   caption: "A slow drive up the coast, three days, no itinerary.",
  //   photoCount: 20,
  //   seed: "highway1"
  // },
  // {
  //   slug: "night-shift",
  //   title: "Night shift",
  //   year: "2023",
  //   location: "Downtown, Chicago",
  //   caption: "The city after midnight belongs to a different cast of characters.",
  //   photoCount: 15,
  //   seed: "nightshift"
  // },
  // {
  //   slug: "field-notes",
  //   title: "Field notes",
  //   year: "2023",
  //   location: "Willamette Valley, Oregon",
  //   caption: "A season on a small farm, documented one chore at a time.",
  //   photoCount: 19,
  //   seed: "fieldnotes"
  // },
  // {
  //   slug: "salt-and-tide",
  //   title: "Salt and tide",
  //   year: "2022",
  //   location: "Outer Banks, North Carolina",
  //   caption: "Low tide reveals a different coastline every morning.",
  //   photoCount: 17,
  //   seed: "salttide"
  // },
  // {
  //   slug: "between-trains",
  //   title: "Between trains",
  //   year: "2022",
  //   location: "Tokyo, Japan",
  //   caption: "Waiting rooms, platforms, and the particular stillness of transit.",
  //   photoCount: 20,
  //   seed: "trains"
  // },
  // {
  //   slug: "backyard-astronomy",
  //   title: "Backyard astronomy",
  //   year: "2022",
  //   location: "Catskills, New York",
  //   caption: "Long exposures from a friend's field with no light pollution for miles.",
  //   photoCount: 15,
  //   seed: "astronomy"
  // },
  // {
  //   slug: "market-day",
  //   title: "Market day",
  //   year: "2021",
  //   location: "Oaxaca, Mexico",
  //   caption: "Color, noise, and the choreography of a market at full swing.",
  //   photoCount: 18,
  //   seed: "marketday"
  // },
  // {
  //   slug: "the-workshop",
  //   title: "The workshop",
  //   year: "2021",
  //   location: "Asheville, North Carolina",
  //   caption: "A woodworker, his tools, and forty years of sawdust.",
  //   photoCount: 16,
  //   seed: "workshop"
  // }
];

// Generates placeholder photo objects for a project using picsum.photos.
// Swap this out entirely once you have real files — just give each project
// a `photos` array of { src, alt } objects instead of relying on this.
function getPhotosForProject(project) {
  // const photos = [];
  // for (let i = 1; i <= project.photoCount; i++) {
  //   photos.push({
  //     src: `https://picsum.photos/seed/${project.seed}${i}/1200/${900 + (i % 5) * 60}`,
  //     alt: `${project.title} — photo ${i}`
  //   });
  // }
  // return photos;
  return project.photos;
}
