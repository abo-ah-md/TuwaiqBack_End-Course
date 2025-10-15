# Day 4 - Backend Course

This folder contains resources and exercises for Day 4 of the Tuwaiq Backend Course.

## Directory Structure

- [`DB/`](./DB/): Contains the backend database project, including source code and dependencies.
  - `app.js`: The main application file.
  - `.gitignore`: Git configuration for ignoring unnecessary files.
  - `package.json`: Project dependencies and scripts.
  - `package-lock.json`: Version lock file for package installations.
  - [`models/`](./DB/models): Data models for the application.

- [`users.json`](./users.json): Sample user data in JSON format.

## Description

- The **DB** subdirectory is a Node.js project for practicing backend concepts. It features basic database models, server setup, and dependencies.
- The **users.json** file provides mock user entries for testing and demonstration purposes.

### Sample `users.json` format

```
[
{
"id": 1,
"firstName": "khalid",
"lastName": "tamimi",
"age": 24,
"city": "yanbu"
},
{
"id": 2,
"firstName": "salih",
"lastName": "mshari",
"age": 30,
"city": "Khubar"
},
{
"id": 3,
"firstName": "ahmed",
"lastName": "omar",
"age": 20,
"city": "Dammam"
},
{
"id": 4,
"firstName": "anwr",
"lastName": "hassan",
"age": 18,
"city": "jeddah"
}
]
```

## Getting Started

1. Navigate to the `DB` directory and run `npm install` to install dependencies.
2. Start the backend application with `node app.js`.
3. Use the sample `users.json` data for API testing or frontend integration.

---

*For more details or updates, see the [commit history](https://github.com/abo-ah-md/TuwaiqBack_End-Course/commits/master/day4).*


