import React from "react";
import "../../assets/Header/Header.css";
import { NavLink } from "react-router-dom";
import { FaHome, FaAddressCard, FaFolderOpen } from "react-icons/fa";

function Header() {
  return (
    <header className="tight-header">
      <div className="centered-nav">
        <NavLink to="/about" className="logo"><FaAddressCard /></NavLink>
        <NavLink to="/" className="logo"><FaHome /></NavLink>
        <NavLink to="/project" className="logo"><FaFolderOpen /></NavLink>
      </div>
    </header>
  );
}

export default Header;
