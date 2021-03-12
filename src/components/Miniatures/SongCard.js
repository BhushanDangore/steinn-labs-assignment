import React from "react";

export default function SongCard({ img, title }) {
  return (
    <div className="m-card-wrapper">
      <img src={img} alt={title} />
      <p className="m-card-song-title">{title}</p>
    </div>
  );
}
