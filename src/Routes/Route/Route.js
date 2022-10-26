import { createBrowserRouter } from "react-router-dom";
import Blog from "../../components/Blog/Blog";
import CourseDetails from "../../components/Courses/CourseDetails/CourseDetails";
import Courses from "../../components/Courses/Courses/Courses";
import Errorpage from "../../components/Errorpage/Errorpage";
import Home from "../../components/Home/Home";
import Login from "../../components/Login/Login";
import Signup from "../../components/Signup/Signup";
import Main from "../../Layout/Main";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Errorpage></Errorpage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/courses",
        element: <Courses></Courses>,
        loader: () =>
          fetch("https://fh-academy-server-side.vercel.app/courses"),
      },
      {
        path: "/courses/:name",
        element: <CourseDetails></CourseDetails>,
        loader: ({ params }) => {
          return fetch(
            `https://fh-academy-server-side-faridhosen.vercel.app/courses/${params.name}`
          );
        },
      },
      {
        path: "/courseDetails/:id",
        element: <div>This is new </div>,
        loader: ({ params }) => {
          return fetch(
            `https://fh-academy-server-side-faridhosen.vercel.app/courses/courseDetails/${params.id}`
          );
        },
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "signup",
        element: <Signup></Signup>,
      },
    ],
  },
]);
