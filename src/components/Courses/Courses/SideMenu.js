import React from "react";
import { Link } from "react-router-dom";

const SideMenu = ({ course }) => {
  return (
    <div>
      <li>
        <Link>
          <button className="btn btn-outline w-full">{course.title}</button>
        </Link>
      </li>
    </div>
  );
};

export default SideMenu;
