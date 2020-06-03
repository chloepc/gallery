import React from "react";
import {Gallery} from "./Gallery";
import { Link } from "react-router-dom";

export function HomeView() {
  return (
    <div>
      HomeView
      <Link to="/about">About</Link>
      <Gallery/>
      <Link to="/about">About</Link>
      <Link to="/help">Help</Link>
    </div>
  );
}
