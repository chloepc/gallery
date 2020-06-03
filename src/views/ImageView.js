import React from "react";
import { Link, useParams } from "react-router-dom";
import { data } from "../data/data";

export function ImageView() {
  const params = useParams();
  const imageId = params.imageId;
  const image = data.images.filter(image => image.id === imageId)[0];

  return (
    <div>
      ImageView
      <Link to={"/"}>
        <img src={image.big} alt="description" />
      </Link>
    </div>
  );
}
