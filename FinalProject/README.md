# Splace FinalProject

A backend web application for collaborative spaces, user management, and project interactions using Node.js, Express, and MongoDB (Mongoose).

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Setup & Installation](#setup--installation)
- [Available Scripts](#available-scripts)
- [API Endpoints](#api-endpoints)
- [Contribution](#contribution)
- [License](#license)

## Introduction

This project serves as a backend platform for managing users, spaces (groups/rooms), and projects. It provides RESTful API endpoints for creating, updating, and deleting entities, as well as handling collaboration and membership in projects and spaces.

## Features

- **User Management:** Register, view, update, and delete users.
- **Spaces:** Create spaces, add/remove members, manage rooms within spaces.
- **Projects:** Create and manage projects, assign users, update and delete projects.
- **MongoDB Integration:** Uses Mongoose for object modeling and data management.
- **RESTful API:** Structured endpoints for all core entities.

## Tech Stack

- Node.js
- Express.js
- MongoDB (Mongoose ORM)
- dotenv (Environment configs)

## Project Structure
```
FinalProject/
├── controller/
│ ├── userController.js
│ ├── spaceController.js
│ ├── projectController.js
├── models/
│ ├── userModel.js
│ ├── spaceModel.js
│ ├── projectModel.js
├── public/ // Static files (CSS, HTML)
│ ├── index.html
│ └── CSS/styles.css
├── routes/
│ ├── userRoutes.js
│ ├── spaceRoutes.js
│ ├── projectRoutes.js
├── app.js // Main application file
├── package.json // Project metadata and dependencies
├── package-lock.json // Dependency version locking
├── .gitignore // Files and folders ignored by Git
└── README.md // Project documentation
```

## Setup & Installation

1. **Clone the repository:**

```
git clone https://github.com/abo-ah-md/TuwaiqBack_End-Course.git
cd TuwaiqBack_End-Course/FinalProject
```

2. **Install dependencies:**

```
npm install
```

3. **Configure environment:**
- Create a `.env` file at the project root, and specify your MongoDB URI:
  ```
  DBURI=mongodb://localhost:27017/splace
  PORT=3000
  ```

4. **Start the server:**
```
npm start
```

## Available Scripts

- `npm start`: Runs the server using Nodemon for live reload.
- `npm test`: Placeholder for running tests.

## API Endpoints

### Users
- `POST /user/newUser`: Register a new user.
- `GET /user/`: List users.
- `GET /user/:name`: View specific user info.
- `PUT /user/:name`: Update user info.
- `DELETE /user/delete/:name`: Delete (soft-remove) a user.

### Spaces
- `POST /space/newSpace/:id`: Create a new space (admin user ID).
- `GET /space/`: List all spaces.
- `GET /space/:spaceID`: View details of a space.
- `PUT /space/Room/:id`: Add new room to space.
- `PUT /space/:spaceID`: Add a new space member.
- `PUT /space/Room/leave/:spaceID`: Leave a room.
- `PUT /space/leave/:spaceID`: Remove member from space.
- `DELETE /space/delete/:id`: Delete space.

### Projects
- `POST /project/newProject`: Register a new project.
- `GET /project/`: List all projects.
- `GET /project/:id`: Get project info.
- `PUT /project/:id`: Update project.
- `DELETE /project/delete/:id`: Delete project.

## Contribution

Contributions are welcome! Please fork the repository, create a PR, and follow best practices in coding and documentation. All contributions should be submitted via pull requests and will be reviewed for quality and consistency.

## License

This project is licensed under the ISC License.

---

**Maintainer:** [abo-ah-md](https://github.com/abo-ah-md)
