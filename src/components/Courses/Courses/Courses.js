import React from "react";
import { useLoaderData } from "react-router-dom";
import CourseCard from "./CourseCard";
import SideMenu from "./SideMenu";

const Courses = () => {
  const courses = useLoaderData();
  return (
    <div>
      <div className="my-12 flex flex-col md:flex-row">
        <div className="md:w-1/4">
          <ul className="menu  w-full p-2 rounded-box">
            {courses.map((course) => (
              <SideMenu key={course.id} course={course}></SideMenu>
            ))}
          </ul>
        </div>
        <div className="mx-auto my-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course}></CourseCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;
