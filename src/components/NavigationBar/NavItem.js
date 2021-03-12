import React from "react";
import { Link } from "react-router-dom";
import classnames from "classnames";

export default function NavItem({ name, icon, to, isActive }) {
  return (
    <div className={classnames("nav-link", { active: isActive })}>
      <img src={icon} alt="" />
      <Link to={to}>{name}</Link>
    </div>
  );
}
