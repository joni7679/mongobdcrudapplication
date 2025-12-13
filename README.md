## Project Overview
This is the backend of a To-Do List application built using **Node.js**, **Express.js**, and **MongoDB**.
It provides RESTful APIs for managing tasks including creation, retrieval, updating, deletion, status updates, and searching tasks.

## Tech Stack
* Node.js
* Express.js
* MongoDB
* Mongoose
* dotenv
* CORS
## Folder Structure
```
src/
 ├─ controllers/
 ├─ routes/
 ├─ models/
 ├─ db/
 │   └─ db.js
 ├─ server.js
 └
```
## API Endpoints
| Method | Endpoint            | Description        |
| ------ | ------------------- | ------------------ |
| GET    | /tasks              | Get all tasks      |
| GET    | /tasks/:id          | Get task by ID     |
| POST   | /tasks              | Create new task    |
| PUT    | /tasks/:id          | Update task        |
| PATCH  | /tasks/:id/status   | Update task status |
| DELETE | /tasks/:id          | Delete task        |
| GET    | /tasks?search=value | Search tasks       |

## Environment Variables
Create a `.env` file:
```
PORT=3000
MONGO_URI=your_mongodb_connection_string
```
## How to Run Locally
```
npm install
npm run dev
```
## Error Handling
* Used try-catch blocks in controllers
* Proper HTTP status codes
* Meaningful error responses

## Challenges Faced
* MongoDB connection issues
* Handling async API errors
* CORS issues during frontend integration

## Solutions
* Used dotenv for environment variables
* Implemented structured try-catch blocks
* Enabled CORS middleware

---
# FRONTEND 
## Project Overview
This is the frontend of a To-Do List application built using **React.js**.
It is fully integrated with the backend APIs to perform CRUD operations, status updates, and task searching.
## Tech Stack
* React.js
* Axios
* CSS / Tailwind
* Netlify (Deployment)


## Features
* Add new task
* Update task
* Delete task
* Mark task as complete / pending
* Search tasks
* Real-time UI updates

## Environment Variables
Create a `.env` file:
```
VITE_API_URL=https://YOUR-BACKEND-URL.onrender.com
```
## How to Run Locally
```
npm install
npm run dev
```
## API Integration
* Axios used for all API requests
* State managed using React `useState`
* UI updates dynamically based on API responses

## Error Handling
* Handled API errors using try-catch
* Displayed error messages to users
## Challenges Faced
* Connecting frontend with live backend
* Managing component state after API updates
* Handling API errors gracefully

## Solutions
* Used environment variables for API URLs
* Proper state updates after CRUD operations
* Centralized API calls using Axios
---
# Submission Notes
Ensure that:
* Repositories are **public**
* `.env` and `node_modules` are **not pushed**
* Live links are working properly


## Live Demo
## frontend 
```
https://mongobdcrudapplication.vercel.app/
```
## Backend API URL
```
https://mongobdcrudapplication.onrender.com/task
```