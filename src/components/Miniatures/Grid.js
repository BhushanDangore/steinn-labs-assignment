import React from "react";
import classnames from "classnames";

import SongCard from "./SongCard";

export default function Grid({ items, title, inline }) {
  const gridItems = items.map((item, idx) => (
    <SongCard
      key={idx}
      img={item.image}
      title={item.name}
      transitionDelay={Math.random().toFixed(2)}
    />
  ));

  return (
    <div className="grid-container">
      <div className="grid-title-bar">{title}</div>
      <div
        className={classnames("grid-list", {
          inline,
        })}
      >
        {gridItems}
      </div>
    </div>
  );
}
