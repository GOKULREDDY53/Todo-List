# ToDo App

Frontend repository : https://github.com/JunaidIqbalKK/todo-app-frontend
Backend repository : https://github.com/JunaidIqbalKK/todo-app-backend

![Screenshot](/tmp/todo-0.png)

## Table of Contents

- [Description](#description)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [API Documentation](#api-documentation)
- [Screenshots](#screenshots)
- [Contact](#contact)

## Description

The ToDo app is a full-stack web application built using the MERN stack (MongoDB, Express.js, React.js, Node.js). It allows users to manage their tasks and to-dos efficiently. The app supports user authentication using JWT, and data validation is handled using Joi, JoiPasswordComplexity and bycrypt for added security.

## Features

- User Registration and Login with JWT authentication
- Add, Edit, and Delete individual tasks
- Bulk data import from CSV files from client and server both
- Styling using react-bootstrap with responsive design
- Pagination for easy task navigation
- Floating labels for a more user-friendly experience

## Technologies Used

- Frontend: React.js, React-Bootstrap
- Backend: Node.js, Express.js, MongoDB
- User Authentication: JWT, Joi, JoiPasswordComplexity, Bcrypt
- Data Import: CSV import from client and server sides
- Other Libraries and Tools: axios, router, csv-parser etc...

## Installation

1. Clone the repository from GitHub.
2. Install dependencies using `npm install`.
3. ...

## Usage

1. Make sure MongoDB is running on your system.
2. Start the backend server using `npm start`.
3. Start the frontend development server using `npm start`.
4. Open your browser and go to `http://localhost:3000`.
5. Sample user details: `email: junaid03@gmail.com' && 'password: aA@12345678`.

## API Documentation

The ToDo app's backend exposes two RESTful APIs:

- `/todo`: Provides endpoints for creating, reading, updating, and deleting tasks.
- `/user`: Provides endpoints for user registration and login.

### API Endpoints

- `POST /todo/create`: Create a new task.
- `GET /todo/read`: Get all tasks.
- `PUT /todo/update`: Update a task by ID.
- `DELETE /todo/delete`: Delete a task by ID.

---

- `POST /user/signup`: Sign Up a new user.
- `POST /user/signin`: Sign In an existing user.
- `PUT /user/update`: Change the existing user password.
- `DELETE /user/delete`: Delete account of an existing user.

## Screenshots

![Screenshot 1](/tmp/todo-2.png)
![Screenshot 2](/tmp/todo-1.png)

## Contact

For any questions or feedback, feel free to contact me at [junaidiqbalkk@gmail.com](mailto:junaidiqbalkk@gmail.com).
