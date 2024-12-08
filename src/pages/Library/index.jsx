import React, { useEffect, useState } from "react";
import { apiClient } from "../../spotify";
import { FaPlay } from "react-icons/fa";
import "./library.css";
import { useNavigate } from "react-router-dom";

const Library = () => {
  const [content, setContent] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    apiClient
      .get("me/playlists")
      .then((response) =>
        setContent(
          response?.data?.items?.filter((playlist) => playlist !== null)
        )
      )
      .then(() => console.log("content---", content));
  }, []);

  const playPlaylist = (id) => {
    navigate("/player", { state: { id: id } });
  };

  return (
    <div className="view-container">
      <div className="library">
        <div className="library-body">
          {content?.map((playlist) => (
            <div
              className="playlist-card"
              key={playlist?.id}
              onClick={() => playPlaylist(playlist?.id)}
            >
              <img
                className="playlist-avatar"
                src={playlist?.images[0]?.url}
                alt=""
              />
              <p className="playlist-name">{playlist?.name}</p>
              <p className="total-tracks">{playlist?.tracks?.total} Songs</p>
              <div className="play-playlist">
                <FaPlay size={30} color="#e81123" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Library;
