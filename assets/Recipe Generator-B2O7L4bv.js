const e=`---
title: "Recipe Generator"
tags: ["Django", "REST API", "SQLite", "CRUD", "LLM", "Python"]
github: {name: "Source Code", url: "https://github.com/Albert-Alvaro/CP3407_RecipeApp"}
summary: "Full-stack Django app that uses Python-based computer vision and a local LLM to generate recipes from fridge images."
image: "/src/assets/recipe_gen.png"
---

Alchemist is a Django web application developed in Python that generates recipe suggestions using object detection and a locally hosted LLM. It leverages a custom-trained YOLOv8 model for ingredient recognition and integrates with a local LLM via the OpenAI-compatible Python SDK. The system handles image uploads, file processing, and dynamic prompt generation. Features include user authentication, CRUD operations, personalized recipe storage, and a review system.
`;export{e as default};
