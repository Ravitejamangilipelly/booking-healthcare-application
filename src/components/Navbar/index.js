import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./index.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">NirogGyan HealthCare</div>
      <div className={`menu ${menuOpen ? "open" : ""}`}>
        <NavLink to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Home</NavLink>
      </div>
      <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </button>
    </nav>
  );
}

export default Navbar;