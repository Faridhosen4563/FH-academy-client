import React from "react";
import { useEffect } from "react";
import { useState } from "react";

import CourseCard from "./CourseCard";
import SideMenu from "./SideMenu";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [spinner, setSpinner] = useState(true);
  useEffect(() => {
    fetch("https://fh-academy-server-side.vercel.app/courses")
      .then((res) => res.json())
      .then((data) => {
        setSpinner(false);
        setCourses(data);
      });
  }, []);

  if (spinner) {
    return <progress className="progress w-full"></progress>;
  }

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
