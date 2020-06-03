import React from "react";
import { Image } from "./Image";
import { Link } from "react-router-dom";
export function Gallery() {
  return (
    <div className="Gallery">
      <Link to="/image">
        <Image />
      </Link>
      <Link to="/image">
        <Image />
      </Link>
      <Link to="/image">
        <Image />
      </Link>
      <Link to="/image">
        <Image />
      </Link>
      <Link to="/image">
        <Image />
      </Link>
      <Link to="/image">
        <Image />
      </Link>
      <Link to="/image">
        <Image />
      </Link>
      <Link to="/image">
        <Image />
      </Link>
      <Link to="/image">
        <Image />
      </Link>

     
    </div>
  );
}
