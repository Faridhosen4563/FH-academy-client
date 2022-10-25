import { createBrowserRouter } from "react-router-dom";
import Errorpage from "../../components/Errorpage/Errorpage";
import Login from "../../components/Errorpage/Login/Login";
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
    ],
  },
]);
