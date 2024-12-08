import React from "react";
import { loginEndpoint } from "../../spotify";
import "./auth.css";

const Login = () => {
  return (
    <div className="login-container">
      <img
        className="brand-logo"
        alt="Music"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Spotify_logo_with_text.svg/1024px-Spotify_logo_with_text.svg.png"
      />
      <a className="auth-link" href={loginEndpoint}>
        LOG IN
      </a>
    </div>
  );
};

export default Login;
