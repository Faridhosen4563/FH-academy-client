import { createBrowserRouter } from "react-router-dom";
import Errorpage from "../../components/Errorpage/Errorpage";
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
