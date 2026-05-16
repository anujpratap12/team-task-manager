# Team Task Manager

## Overview

The **Team Task Manager** is a full-stack web application designed to help teams manage projects, assign tasks, and track progress efficiently.

The application provides authentication, project management, task tracking, and dashboard analytics with role-based access control for Admins and Members.

Users can create projects, manage tasks, update task status, and monitor team productivity through an interactive dashboard.

The application is built using **React**, **Node.js**, **Express.js**, and **MongoDB Atlas**, with deployment on **Vercel** and **Railway**.

---

## Tech Stack

### Frontend

* React.js
* Vite
* Tailwind CSS
* Axios
* React Router DOM

### Backend

* Node.js
* Express.js
* MongoDB Atlas
* JWT Authentication
* bcryptjs

### Deployment

* Vercel (Frontend)
* Railway (Backend)

---

## System Workflow

User Authentication
↓
JWT Token Generation
↓
Protected Routes
↓
Project Management
↓
Task Management
↓
Status Tracking
↓
Dashboard Analytics

---

## Database Design

The application uses **MongoDB Atlas** as the cloud database.

### Collections

#### User Collection

Stores:

* Name
* Email
* Password
* Role (Admin / Member)

#### Project Collection

Stores:

* Project Title
* Description
* Team Members
* Created By

#### Task Collection

Stores:

* Task Title
* Description
* Task Status
* Project ID
* Assigned User

---

## Authentication System

The application uses **JWT (JSON Web Token)** based authentication.

### Features

* User Signup
* User Login
* Password Hashing using bcryptjs
* Protected Routes
* Token-based Authorization

---

## Features

### User Authentication

Users can:

* Create accounts
* Login securely
* Access protected routes

### Project Management

Admins can:

* Create projects
* View project list
* Manage project information

### Task Management

Users can:

* Create tasks
* View tasks
* Update task status

### Task Status Tracking

Task statuses include:

* Todo
* In Progress
* Completed

### Dashboard Analytics

The dashboard displays:

* Total Tasks
* Completed Tasks
* Pending Tasks

### Navigation System

The application includes:

* Navbar Navigation
* Protected Pages
* Logout Functionality

---

## REST API Endpoints

### Authentication APIs

#### Signup

POST

```
/api/auth/signup
```

#### Login

POST

```
/api/auth/login
```

---

### Project APIs

#### Create Project

POST

```
/api/projects
```

#### Get Projects

GET

```
/api/projects
```

---

### Task APIs

#### Create Task

POST

```
/api/tasks
```

#### Get Tasks

GET

```
/api/tasks
```

#### Update Task Status

PUT

```
/api/tasks/:id
```

---

## Installation

Clone the repository

```bash
git clone https://github.com/anujpratap12/team-task-manager
```

---

## Backend Setup

Navigate to backend folder

```bash
cd backend
```

Install dependencies

```bash
npm install
```

Run backend server

```bash
npm run dev
```

Backend runs on:

```bash
http://localhost:5000
```

---

## Frontend Setup

Navigate to frontend folder

```bash
cd frontend
```

Install dependencies

```bash
npm install
```

Run frontend server

```bash
npm run dev
```

Frontend runs on:

```bash
http://localhost:5173
```

---

## Environment Variables

Create a `.env` file inside backend folder and add:

```env
MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret

PORT=5000
```

---

## Live Deployment

### Frontend (Vercel)

https://team-task-manager-two-gold.vercel.app

### Backend (Railway)

https://team-task-manager-production-812e.up.railway.app

---

## Application Demo

### Login Page

The application provides secure login functionality with JWT authentication.

### Dashboard

Users can view:

* total tasks
* completed tasks
* pending tasks

### Project Management

Users can:

* create projects
* view projects
* manage project details

### Task Management

Users can:

* create tasks
* update task status
* track project progress

---

## Future Improvements

Possible future enhancements include:

* Task assignment to multiple users
* Email notifications
* Real-time collaboration
* Kanban Board Interface
* Team analytics dashboard
* Role-based admin controls
* Dark mode support

---

## Author

Anuj Pratap Singh
Final Year Computer Science Student
Interested in Full-Stack Development, AI, and Machine Learning
