import React, { useEffect, useState } from "react";
import "./sideBar.css";
import SideBarButton from "./SideBarButton";
import { IoIosAlbums } from "react-icons/io";
import { CgFeed } from "react-icons/cg";
import { IoStar } from "react-icons/io5";
import { FaSignOutAlt } from "react-icons/fa";
import { BsFillMusicPlayerFill, BsFire } from "react-icons/bs";
import { apiClient } from "../../../spotify";

const SideBar = () => {
  const [user, setUser] = useState({
    name: "",
    avatar: "",
  });
  useEffect(() => {
    apiClient.get("me").then(
      (response) => (
        console.log(response.data),
        setUser({
          name: response?.data?.display_name,
          avatar: response?.data?.images[0]?.url,
        })
      )
    );
  }, []);

  return (
    <div className="sidebar">
      <div className="sidebar-container">
        <img className="user-avatar" src={user?.avatar} alt={user?.name} />
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
          isLogout
          icon={<FaSignOutAlt size={20} />}
        />
      </div>
    </div>
  );
};

export default SideBar;
