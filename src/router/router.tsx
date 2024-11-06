import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Home/Home";
import Login from "../Authentication/Login/Login";
import Register from "../Authentication/Register/Register";
import BecomeWriter from "../Writer/BecomeWriter/BecomeWriter";

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
      {
        path: "/become-a-writer/be-writer-and-spreed-knowledge",
        element: <BecomeWriter />,
      },
    ],
  },
]);

export default router;
