# Day 3 – Tuwaiq Back-End Course

This directory contains all resources, assignments, and labs for Day 3 of the Tuwaiq Back-End Course. It is split into two main sections: *home work* and *lab task*, each having standalone Node.js projects and JavaScript files.

## Directory Structure

```
day3/
│
├── home work/
│ ├── .gitignore
│ ├── People.js
│ ├── app.js
│ ├── package-lock.json
│ └── package.json
│
└── lab task/
├── .gitignore
├── app.js
├── server.js
├── person.json
├── package-lock.json
└── package.json
```

---

## home work

A CRUD Express.js REST API for handling a people dataset.

### Files

- **People.js**: Exports an array of person objects with properties: `id`, `firstName`, `lastName`, `age`, and `city`. For example:
```
[
{ id: 1, firstName: "khalid", lastName: "tamimi", age: 24, city: "yanbu" },
{ id: 2, firstName: "salih", lastName: "mshari", age: 30, city: "Khubar" },
{ id: 3, firstName: "ahmed", lastName: "omar", age: 20, city: "Dammam" },
{ id: 4, firstName: "anwr", lastName: "hassan", age: 18, city: "jeddah" }
]
```
- **app.js**: Express.js application with API endpoints for manipulating the people data.
- **package.json / package-lock.json**: Defines dependencies and scripts for running the API.
- **.gitignore**: Ignores standard development artifacts.

---

## lab task

A simple Node.js API server with additional data storage using JSON.

### Files

- **server.js**: Implements the core HTTP server logic.
- **app.js**: Express.js routing for lab tasks.
- **person.json**: Sample JSON data object – e.g., `{ "name": "ahmed" }`
- **package.json / package-lock.json**: Manages dependencies and scripts.
- **.gitignore**: Standard Node/npm ignores.

---

## How to Use

1. `cd` into either subdirectory (`home work` or `lab task`).
2. Run `npm install` to fetch dependencies.
3. Start the server (see `package.json` scripts, usually `node app.js` or `node server.js`).
4. Use the API as described in the source or with Postman.

---

## Author

Published by **abo-ah-md** as part of the Tuwaiq Back-End Course.
