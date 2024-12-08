import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Library from "../Library";
import Favourites from "../Favourites";
import Feed from "../Feed";
import Trending from "../Trending";
import Player from "../Player";
import SideBar from "../../components/Navigation/SideBar";

// Styles
import "./home.css";
import Login from "../Auth";
import { setClientToken } from "../../spotify";

const Home = () => {
  const [token, setToken] = useState("");
  useEffect(() => {
    const tokenFromURL = window.location.hash?.split("&")[0]?.split("=")[1];
    const tokenFormStorage = sessionStorage.getItem("token");
    window.location.hash = "";
    if (!tokenFormStorage && tokenFromURL) {
      sessionStorage.setItem("token", tokenFromURL);
      setToken(tokenFromURL);
      setClientToken(tokenFromURL);
    } else {
      setToken(tokenFormStorage);
      setClientToken(tokenFormStorage);
    }
  }, []);
  return (
    <Router>
      {!token ? (
        <Login />
      ) : (
        <div className="main-body">
          <SideBar />
          <Routes>
            <Route path="/" element={<Library />} />
            <Route path="/feed" element={<Feed />} />
            <Route path="/favourites" element={<Favourites />} />
            <Route path="/trending" element={<Trending />} />
            <Route path="/player" element={<Player />} />
          </Routes>
        </div>
      )}
    </Router>
  );
};

export default Home;
