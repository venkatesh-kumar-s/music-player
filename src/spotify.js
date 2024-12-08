const authEndpoint = "https://accounts.spotify.com/authorize?";
const clientID = "1c487413def14c3c9c2afdb6d4b9a2bc";
const redirectUri = "http://localhost:3000/";
const scopes = ["user-library-read", "playlist-read-private"];

export const loginEndpoint = `${authEndpoint}client_id=${clientID}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;
