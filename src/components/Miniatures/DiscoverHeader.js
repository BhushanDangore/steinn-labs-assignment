import React from "react";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function DiscoverHeader() {
  return (
    <header className="header">
      <div className="text-area">
        <h2 className="heading">Your favorite tunes</h2>
        <p className="support-text">
          All
          <FontAwesomeIcon icon={faSun} />
          and all night
          <FontAwesomeIcon icon={faMoon} />
        </p>
      </div>
    </header>
  );
}
