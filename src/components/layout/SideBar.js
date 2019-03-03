import React from "react";
import { Link } from "react-router-dom";

export default function SideBar() {
  return (
    <div>
      <Link to="/clients/add" className="btn btn-success btn-block">
        <i className="fas fa-plus" > New </i>
      </Link>
    </div>
  );
}
