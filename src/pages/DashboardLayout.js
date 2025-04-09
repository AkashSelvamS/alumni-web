// src/pages/DashboardLayout.js
import React from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";
import "./Dashboard.css";

const DashboardLayout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/signin");
  };

  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <h2 className="logo">AlumniNet</h2>
        <nav>
          <Link to="/dashboard/home">🏠 Home</Link>
          <Link to="/dashboard/profile">👤 Profile</Link>
          <Link to="/dashboard/messages">💬 Messages</Link>
          <button onClick={handleLogout} className="logout-btn">
            🚪 Logout
          </button>
        </nav>
      </aside>

      <main className="main-content">
        <div className="topbar">
          <h3>🎓 Alumni Dashboard</h3>
        </div>
        <div className="content-area">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;
