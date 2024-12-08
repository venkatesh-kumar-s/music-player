import React from "react";
import { Link, useLocation } from "react-router-dom";

const SideBarButton = ({ title, to, icon }) => {
  const location = useLocation();
  const btnClass =
    location?.pathname === to ? "nav-btn-body active" : "nav-btn-body";
  return (
    <Link to={to} style={{ textDecoration: "none", margin: "0.2rem" }}>
      <div className={btnClass}>
        {icon}
        <p className="nav-btn-title">{title}</p>
      </div>
    </Link>
  );
};

export default SideBarButton;
