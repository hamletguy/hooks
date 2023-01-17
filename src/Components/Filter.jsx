import React from "react";
import Stars from "./Stars";

export default function Filter({ title, setTitle, rating, setRating }) {
  return (
    <div
      style={{
        display: "flex",
        margin: "20px 0",
        gap: "10px",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <input
        type="text"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        style={{ width: "500px", height: "43px" }}
      />
      <Stars rating={rating} setRating={setRating} />
    </div>
  );
}
