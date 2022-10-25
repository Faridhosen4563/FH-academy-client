import { createBrowserRouter } from "react-router-dom";
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
        path: "courses",
        element: <Courses></Courses>,
        loader: () => fetch("http://localhost:5000/courses"),
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
