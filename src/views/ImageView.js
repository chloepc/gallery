import React from "react";
import { Link } from "react-router-dom";
import { Image } from "./Image";

export function ImageView() {
  return (
    <div>
      ImageView
      <Link to="/">
        <Image large={true} />
      </Link>
    </div>
  );
}
