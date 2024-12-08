import React from "react";
import { loginEndpoint } from "../../spotify";

const Login = () => {
  return (
    <div>
      <img
        alt="Music"
        src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwallpapers.com%2Fmusic-background-png&psig=AOvVaw0MNdjH82-TT1FKEssSBqAc&ust=1733750224826000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKC5hI-hmIoDFQAAAAAdAAAAABAJ"
      />
      <a href={loginEndpoint}>LOG IN</a>
    </div>
  );
};

export default Login;
