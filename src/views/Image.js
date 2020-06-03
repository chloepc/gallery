import React from "react";

export function Image({ large }) {
  if (large) {
    return (
      <div className="Image">
        <img src="https://via.placeholder.com/600" alt="" />
      </div>
    );
  }
  return (
    <div className="Image">
      <img src="https://via.placeholder.com/200" alt="" />
    </div>
  );
}
