import React from "react";
import reactDom from "react-dom";

import { getHostName } from "../../helper/environment";

export default function AuthorizationModal() {
  // This key is not suppose to be placed here but for this assignment it's out of scope to write extra backend just for this.
  const client_id = "a1c97f5c4a374db692e2ded6db432261";
  const query = new URLSearchParams();
  query.set("client_id", client_id);
  query.set("response_type", "token");
  query.set("redirect_uri", getHostName());

  return reactDom.createPortal(
    <div className="portal">
      <p>Hey, you neet to grant permission to access spotify API</p>
      <a
        href={`https://accounts.spotify.com/authorize?${query.toString()}`}
        target="_blank"
        rel="noreferrer"
      >
        Authorize
      </a>
    </div>,
    document.getElementById("root")
  );
}
