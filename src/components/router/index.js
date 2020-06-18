import React from "react";
import Routes from "./components/router/routes";
import { Link } from "react-router-dom";

function RouterIndex() {
  return (
    <div>
      <header>
        <p>React_Router</p>
        <div>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </header>
      <Routes />
    </div>
  );
}

export default RouterIndex;
