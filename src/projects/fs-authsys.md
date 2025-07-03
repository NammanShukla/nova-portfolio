---
title: "User Authentication with JWT"
tags: ["React", "Redux", "Context API", "JWT", "MongoDB", "Express.js", "CRUD", "REST API"]
github: {name: "Source Code", url: "https://github.com/NammanShukla/fs-authsys"}
summary: "Implemented stateless JWT-based authentication in a React full-stack app with Redux and Context API."
image: "/nova-portfolio/assets/fs-sysauth.png"
---

This project features a secure and scalable authentication system built with React, Node.js, and MongoDB. It uses JWT for stateless login sessions, Redux and Context API for state management, and a clean controller-based structure on the backend for better modularity and maintainability.

On login, the backend verifies credentials using bcrypt and passport-local, then generates a signed JWT containing the user ID. The token is sent to the frontend, stored in Redux and localStorage, and included in all future API requests. Registration securely hashes passwords and stores the user in the database.

The frontend now includes a ProtectedRoutes.js component to guard access to pages based on login state. On logout, Redux and localStorage are cleared and the user is returned to the homepage. Forms are validated before submission, and the UI dynamically reflects authentication status across all components using Context.

Earlier session-based auth with express-session and MongoDB has been deprecated in favor of this modern JWT flow, making the app more robust and production-ready.