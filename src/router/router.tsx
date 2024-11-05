import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Home/Home";
import Login from "../Authentication/Login/Login";
import Register from "../Authentication/Register/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/user-auth/login",
        element: <Login />,
      },
      {
        path: "/user-auth/sign-up",
        element: <Register />,
      },
    ],
  },
]);

export default router;
