import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import "./Dashboard.css";
import assets from "../../assets/assets";

const Dashboard = ({ currentUser, onLogout }) => {
  return (
    <div className="dashboard-body">
      <nav className="dashboard-sidebar">
        <header className="sidebar-header">
          <div className="logo-container">
            <div className="logo-placeholder">
                <img src={assets.companylogo} className="logo"/>
            </div>
            <div className="header-text">
            <div className="dashboard-name">ByteCore</div>
              <div className=" dashboard-subtitle">Welcome, {currentUser.name}!</div>
              
            </div>
          </div>
        </header>
        <div className="menu-bar">
          <ul className="menu-links">
            <li>
              <NavLink className="link" to="home">
                <span className="icon-placeholder">🏠</span>
                <span className="link-text">Home</span>
              </NavLink>
            </li>
            <li>
              <NavLink className="link" to="profile">
                <span className="icon-placeholder">👥</span>
                <span className="link-text">Profile</span>
              </NavLink>
            </li>
            {currentUser.role === "admin" && (
              <li>
                <NavLink className="link" to="manage">
                  <span className="icon-placeholder">👥</span>
                  <span className="link-text">Manage Users</span>
                </NavLink>
              </li>
            )}
            {currentUser.role === "manager" && (
              <li>
                <NavLink className="link" to="team">
                  <span className="icon-placeholder">📝</span>
                  <span className="link-text">Projects</span>
                </NavLink>
              </li>
            )}
            {currentUser.role === "employee" && (
              <li>
                <NavLink className="link" to="tasks">
                  <span className="icon-placeholder">📝</span>
                  <span className="link-text">Tasks</span>
                </NavLink>
              </li>
            )}
            <li className="bottom-links">
              <NavLink className="link" to="/login" onClick={onLogout}>
                <span className="icon-placeholder">🚪</span>
                <span className="link-text">Logout</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
      <main className="dashboard-content">
        <Outlet />
      </main>
    </div>
  );
};

export default Dashboard;
