---
title: "User Authentication with JWT"
tags: ["React", "Redux", "Context API", "JWT", "MongoDB", "Express.js", "CRUD", "REST API"]
github: {name: "Source Code", url: "https://github.com/NammanShukla/fs-authsys"}
summary: "Implemented stateless JWT-based authentication in a React full-stack app with Redux and Context API."
image: "/nova-portfolio/assets/fs-sysauth.png"
---

This project implements secure, scalable auth using React, Node.js, and MongoDB. It uses JWTs for stateless sessions, Redux + Context for state, and a modular backend with bcrypt and passport-local for verification.

On login, a JWT is created and stored in Redux/localStorage, auto-included in future API calls. ProtectedRoutes guard frontend pages, and logout clears all auth data. Forms are validated, and the UI updates dynamically based on login state.