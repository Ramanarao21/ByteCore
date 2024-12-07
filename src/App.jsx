import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import ManagerPage from "./Pages/ManagerPage/ManagerPage";
import AdminPage from "./Pages/AdminPage/AdminPage";
import EmployeePage from "./Pages/EmployeePage/EmployeePage";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import Profile from "./components/Profile/Profile";

const App = () => {
  const [currentUser, setCurrentUser] = useState(null);

  const handleLogin = (user) => {
    setCurrentUser(user);
  };

  const handleLogout = () => {
    setCurrentUser(null);
  };

  const data = {
    projects: [
      {
        id: 1,
        name: "FortiGuard",
        admin: "Alex Johnson",
        team: ["Employee1", "Employee2", "Employee3"],
        tasks: {
          Employee1: ["Task 1", "Task 2"],
          Employee2: ["Task 3", "Task 4"],
          Employee3: ["Task 5", "Task 6"],
        },
      },
      {
        id: 2,
        name: "ShieldNet",
        admin: "Sarah Martinez",
        team: ["Employee4", "Employee5"],
        tasks: {
          Employee4: ["Task 7", "Task 8"],
          Employee5: ["Task 9", "Task 10"],
        },
      },
    ],
  };

  if (!currentUser) {
    // Redirect to login if user is not logged in
    return <Login onLogin={handleLogin} />;
  }

  return (
    <Routes>
      <Route path="/login" element={<Login onLogin={handleLogin} />} />
      {/* Redirect to dashboard/home if already logged in */}
      <Route path="/" element={<Navigate to="/dashboard/home" />} />
      <Route path="/dashboard" element={<Dashboard currentUser={currentUser} onLogout={handleLogout} />}>
        {/* Nested routes with relative paths */}
        <Route path="home" element={<Home />} />
        <Route
            path="profile"
            element={<Profile currentUser={currentUser.role} username={currentUser.name} />}
          />
        {currentUser.role === "manager" && (
          <Route path="team" element={<ManagerPage data={data} />} />
        )}
        {currentUser.role === "admin" && (
          <Route path="manage" element={<AdminPage data={data} adminName={currentUser.name} />} />
        )}
        {currentUser.role === "employee" && (
          <Route path="tasks" element={<EmployeePage data={data} employeeName={currentUser.name} />} />
        )}
      </Route>
    </Routes>
  );
};

export default App;
