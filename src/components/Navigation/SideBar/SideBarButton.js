import React from "react";
import { Link, useLocation } from "react-router-dom";

const SideBarButton = ({ title, to, icon, isLogout = false }) => {
  const location = useLocation();
  const btnClass =
    location?.pathname === to ? "nav-btn-body active" : "nav-btn-body";

  const handleRedirect = (e) => {
    if (isLogout) {
      sessionStorage.removeItem("token");
    }
  };

  return (
    <Link
      to={to}
      style={{ textDecoration: "none", margin: "0.2rem" }}
      onClick={handleRedirect}
    >
      <div className={btnClass}>
        {icon}
        <p className="nav-btn-title">{title}</p>
      </div>
    </Link>
  );
};

export default SideBarButton;
