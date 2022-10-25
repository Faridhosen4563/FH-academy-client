import React from "react";
import { Link } from "react-router-dom";

const CourseCard = ({ course }) => {
  const { title, price, image, rating } = course;
  return (
    <div className="card w-full bg-base-100 shadow-xl">
      <figure>
        <img src={image} className="w-80 h-56" alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {title}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>Price : ${price}</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">{rating.rate}</div>
          <div className="badge badge-outline">{rating.count}</div>
        </div>
        <div>
          <Link to={`/courses/${course.id}`}>
            <button className="btn btn-outline my-2 w-full">See Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
