# Team Task Manager

## Overview

The Team Task Manager is a full-stack web application designed to help teams manage projects, assign tasks, and track progress efficiently.

The application provides authentication, project management, task tracking, and dashboard analytics with role-based access control for Admins and Members.

Users can create projects, manage tasks, update task status, and monitor team productivity through an interactive dashboard.

The application is built using React, Node.js, Express.js, and MongoDB Atlas, with deployment on Vercel and Railway.

---

## Tech Stack

### Frontend
- React.js
- Vite
- Tailwind CSS
- Axios
- React Router DOM

### Backend
- Node.js
- Express.js
- MongoDB Atlas
- JWT Authentication
- bcryptjs

### Deployment
- Vercel (Frontend)
- Railway (Backend)

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

The application uses MongoDB Atlas as the cloud database.

### Collections

#### User Collection
Stores:
- Name
- Email
- Password
- Role (Admin / Member)

#### Project Collection
Stores:
- Project Title
- Description
- Team Members
- Created By

#### Task Collection
Stores:
- Task Title
- Description
- Task Status
- Project ID
- Assigned User

---

## Authentication System

The application uses JWT (JSON Web Token) based authentication.

### Features
- User Signup
- User Login
- Password Hashing using bcryptjs
- Protected Routes
- Token-based Authorization

---

## Features

### User Authentication

Users can:
- Create accounts
- Login securely
- Access protected routes

### Project Management

Admins can:
- Create projects
- View project list
- Manage project information

### Task Management

Users can:
- Create tasks
- View tasks
- Update task status

### Task Status Tracking

Task statuses include:
- Todo
- In Progress
- Completed

### Dashboard Analytics

The dashboard displays:
- Total Tasks
- Completed Tasks
- Pending Tasks

### Navigation System

The application includes:
- Navbar Navigation
- Protected Pages
- Logout Functionality

---

## REST API Endpoints

### Authentication APIs

#### Signup
POST  
/api/auth/signup

#### Login
POST  
/api/auth/login

---

### Project APIs

#### Create Project
POST  
/api/projects

#### Get Projects
GET  
/api/projects

---

### Task APIs

#### Create Task
POST  
/api/tasks

#### Get Tasks
GET  
/api/tasks

#### Update Task Status
PUT  
/api/tasks/:id

---

## Installation

Clone the repository

```bash
git clone https://github.com/anujpratap12/team-task-manager
