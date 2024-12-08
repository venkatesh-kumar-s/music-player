import React from "react";
import "./sideBar.css";
import SideBarButton from "./SideBarButton";
import { IoIosAlbums } from "react-icons/io";
import { CgFeed } from "react-icons/cg";
import { IoStar } from "react-icons/io5";
import { FaSignOutAlt } from "react-icons/fa";
import { BsFillMusicPlayerFill, BsFire } from "react-icons/bs";

const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-container">
        <img
          className="user-avatar"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6CThk6PdvZjZCSsT-z7uMlP4NaD2OCAsfvg&s"
          alt="user avatar"
        />
        <div className="nav-buttons">
          <SideBarButton
            title="Trending"
            to="/trending"
            icon={<BsFire size={20} />}
          />
          <SideBarButton title="Feed" to="/feed" icon={<CgFeed size={20} />} />
          <SideBarButton
            title="Player"
            to="/player"
            icon={<BsFillMusicPlayerFill size={20} />}
          />
          <SideBarButton
            title="Favourites"
            to="/favourites"
            icon={<IoStar size={20} />}
          />
          <SideBarButton
            title="Library"
            to="/"
            icon={<IoIosAlbums size={20} />}
          />
        </div>
        <SideBarButton
          title="Logout"
          to="/logout"
          icon={<FaSignOutAlt size={20} />}
        />
      </div>
    </div>
  );
};

export default SideBar;
