import React, { useEffect } from "react";
import "./App.css";
import Login from "./Login/Login";
import { getTokenFromResponse } from "./spotify";

function App() {
  useEffect(() => {
    const token = getTokenFromResponse();
  }, []);

  return (
    <div className="app">
      <Login />
    </div>
  );
}

export default App;
