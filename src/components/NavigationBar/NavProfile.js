import React from "react";

import musicAvatar from "../../assets/icons/music.svg";

export default function NavProfile({ avatar = musicAvatar, name }) {
  return (
    <div className="nav-profile-wrapper">
      <div className="image-wrapper">
        <img src={avatar} alt="Profile" />
      </div>
      <h2 className="avatar-name">{name}</h2>
    </div>
  );
}
