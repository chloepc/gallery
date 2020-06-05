import React from "react";
import { Link } from "react-router-dom";
import { data } from "../data/data";
export function Gallery() {
  return (
    <div className="Gallery">
      {data.images.map(image => {
        return (
          <Link to={"/images/" + image.id} key={image.id}>
            <img src={image.small} alt="" />
          </Link>
        );
      })}
    </div>
  );
}
