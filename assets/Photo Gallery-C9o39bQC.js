const a=`---
title: "Photo Gallery"
tags: ["React", "Javascript", "HTML/CSS", "API Integration", "AJAX"]
github: 
- {name : "Vanilla JS Version", url: "https://github.com/NammanShukla/photogallery" }
- {name : "React Version", url: "https://github.com/NammanShukla/react-gallery" }
summary : "Responsive photo gallery app built with both Vanilla JS and React, featuring modals, carousels, and dynamic image fetching via APIs."
image: "public/assets/photo-gallery.png"
---

Created two versions of a responsive photo gallery app — one using HTML, CSS, and Vanilla JavaScript, and another using React with modular components. The Vanilla version includes a custom-built carousel, modals, and dynamic image loading via the Pixabay API using AJAX, with fallback to local assets or Picsum. The React version improves maintainability by splitting UI into components like a header and carousel, replacing hardcoded logic with an npm carousel package for smoother UX.

`;export{a as default};
