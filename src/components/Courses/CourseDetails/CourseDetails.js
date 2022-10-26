import React, { createRef } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Pdf from "react-to-pdf";

const ref = createRef();

const CourseDetails = () => {
  const courseDetails = useLoaderData();
  const { title, price, image, rating, description, id } = courseDetails;
  return (
    <div>
      <Pdf targetRef={ref} filename="course-details.pdf">
        {({ toPdf }) => (
          <button className="btn btn-info my-4" onClick={toPdf}>
            Download pdf
          </button>
        )}
      </Pdf>
      <div ref={ref} className="my-20 mx-auto w-9/12 lg:w-5/12">
        <div className="card w-full bg-base-100 shadow-xl">
          <figure>
            <img src={image} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{title}</h2>
            <p>Price : ${price}</p>
            <div className="mb-2 flex justify-between items-center">
              <div className="badge badge-outline">{rating.rate}</div>
              <div className="badge badge-outline">{rating.count}</div>
            </div>
            <p>{description}</p>
            <div className="card-actions w-full mt-2">
              <Link className="w-full" to={`/courseDetails/${id}`}>
                <button className="btn btn-outline w-full">
                  Get premium access
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
