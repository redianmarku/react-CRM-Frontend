import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navigation.css";

function Navigation() {
  return (
    <nav className="navigation">
      <div className="nav-header">
        <h2>CRM Platform</h2>
      </div>
      <ul className="nav-list">
        <li className="nav-item">
          <Link to="/" className="nav-link">
            <i className="fas fa-tachometer-alt"></i> Dashboard
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/contacts" className="nav-link">
            <i className="fas fa-address-book"></i> Contacts
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/leads" className="nav-link">
            <i className="fas fa-user-tie"></i> Leads
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/opportunities" className="nav-link">
            <i className="fas fa-chart-line"></i> Opportunities
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/tasks" className="nav-link">
            <i className="fas fa-tasks"></i> Tasks
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/reports" className="nav-link">
            <i className="fas fa-chart-bar"></i> Reports
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/settings" className="nav-link">
            <i className="fas fa-cog"></i> Settings
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
