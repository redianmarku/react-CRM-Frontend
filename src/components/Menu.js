import React from "react";
import "../styles/Menu.css"; // Assuming you'll create this CSS file

function Menu() {
  return (
    <nav className="menu">
      <ul className="menu-items">
        <li>
          <button className="menu-button">Home</button>
        </li>
        <li>
          <button className="menu-button">About</button>
        </li>
        <li className="dropdown">
          <button className="menu-button dropdown-toggle">Profile</button>
          <ul className="dropdown-menu">
            <li>
              <button className="dropdown-item">Settings</button>
            </li>
            <li>
              <button className="dropdown-item">Logout</button>
            </li>
          </ul>
        </li>
        <li>
          <button className="menu-button">Contact</button>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
