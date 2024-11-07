import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Home/Home";
import Login from "../Authentication/Login/Login";
import Register from "../Authentication/Register/Register";
import BecomeWriter from "../Writer/BecomeWriter/BecomeWriter";
import MainDashboard from "../dashboard/MainDashboard/MainDashboard";
import BecomeWriterRequest from "../dashboard/BecomeWriterRequest/BecomeWriterRequest";
import DashboardLayout from "../dashboard/DashboardLayout/DashboardLayout";
import ApprovedRequest from "../dashboard/ApprovedRequest/ApprovedRequest";
import Post from "../Post/Post";

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
      {
        path: "/write-a-blog-and-change-human-life/write-blog",
        element: <Post />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "",
        element: <MainDashboard />,
      },
      {
        path: "writer-request-accept",
        element: <BecomeWriterRequest />,
      },
      {
        path: "accept-writer-request-or-declined",
        element: <ApprovedRequest />,
      },
    ],
  },
]);

export default router;
