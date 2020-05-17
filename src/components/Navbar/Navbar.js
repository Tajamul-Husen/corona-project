import React from "react";
import "./Navbar.scss";
import icon from "../../assets/icons/virus.png";

function Header() {
  return (
    <div className="nav">
      <div className="nav-container">
        <h2 className="nav-container-header">C<img src={icon} className="nav-container-header-icon" alt="virus-icon"/>VID-19 Tracker</h2>
      </div>
    </div>
  );
}

export default Header;
