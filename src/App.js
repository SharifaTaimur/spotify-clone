import React, { useEffect, useState } from "react";
import "./App.css";
import Login from "./Login/Login";
import { getTokenFromResponse } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./Player/Player";
import { useStateValue } from "./StateProvider";

const s = new SpotifyWebApi();

function App() {
  const [{ user, token }, dispatch] = useStateValue();

  useEffect(() => {
    const hash = getTokenFromResponse();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });

      s.setAccessToken(_token);

      s.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user: user,
        });
      });

      s.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists,
        });
      });

      s.getPlaylist("37i9dQZEVXcDIECAr7ap2B").then((response) =>
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: response,
        })
      );
    }
  }, []);

  return (
    <div className="app">{token ? <Player spotify={s} /> : <Login />}</div>
  );
}

export default App;
