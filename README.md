# Bytecore 🛠️

Bytecore is a role-based management system built with **React**. It provides specific access to **Managers**, **Admins**, and **Employees** within an organization, ensuring that users see only what they need.

## Features ✨

- **Role-Based Dashboards**:
  - **Manager**: View all projects and employee names.
  - **Admin**: Access employee names and projects.
  - **Employee**: View assigned tasks.
- **User Authentication**: Allows users to sign up and log in with a role.
- **Routing**: Seamless navigation between various dashboard pages.

## Installation 🛠️

### Prerequisites 🧑‍💻

Ensure that **Node.js** and **npm** are installed on your machine.

### Steps to Set Up:

1. **Clone the repository**:

    ```bash
    git clone https://github.com/your-username/bytecore.git
    cd bytecore
    ```

2. **Install dependencies**:

    ```bash
    npm install
    ```

3. **Start the development server**:

    ```bash
    npm run dev
    ```

    This will start the server, and you can view your app at [http://localhost:5173](http://localhost:5173).

## Usage 🔧

1. **Sign Up** with your **email**, **password**, and **role** (Manager, Admin, or Employee).
2. **Login** with the same credentials and navigate to your personalized dashboard.
3. Managers and Admins can access various features, while Employees can view their tasks.

## Routing 📍

The project features different routes for the respective views:

- `/dashboard/login`: Login page for users.
- `/dashboard/home`: Main page after logging in.
- `/dashboard/profile`: View and update user profile.
- `/dashboard/role`: Admin/Manager role management.

## Login & Signup 🔑

- **Signup**: Requires a **name**, **email**, **password**, and **role** (Manager, Admin, or Employee).
- **Login**: Requires **email**, **password**, and **role**.

## Live Demo 🌐

You can view the live demo of the project at the following link:

[Bytecore Live Demo](https://ramana-bytecore-a46e15.netlify.app/)

## Folder Structure 📂

```plaintext
/src
  ├── components
  │     ├── Dashboard.js     // Dashboard home for users
  │     ├── Home.js          // Home page component for the app
  │     ├── Login.js         // Login form component
  │     ├── Profile.js       // User profile page component
  ├── pages
  │     ├── AdminPage.js     // Admin page with admin-specific content
  │     ├── ManagerPage.js   // Manager page with manager-specific content
  │     ├── EmployeePage.js  // Employee page with employee-specific content
  ├── styles
  │     └── App.css          // Global styling for the app
  ├── App.js                 // Main app component




