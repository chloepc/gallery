import React from "react";
import { Link } from "react-router-dom";
import { data } from "../data/data";
import styles from "./Gallery.module.css";
export function Gallery() {
  return (
    <div className={styles.gallery}>
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
