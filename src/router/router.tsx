import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Home/Home";
import Login from "../Authentication/Login/Login";
import Register from "../Authentication/Register/Register";
import BecomeWriter from "../Writer/BecomeWriter/BecomeWriter";
import MainDashboard from "../dashboard/MainDashboard/MainDashboard";
import BecomeWriterRequest from "../dashboard/BecomeWriterRequest/BecomeWriterRequest";
import DashboardLayout from "../dashboard/DashboardLayout/DashboardLayout";

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
  {
    path: "/dashboard",
    element: <DashboardLayout />, // Layout for dashboard
    children: [
      {
        path: "", // Empty path for the dashboard home
        element: <MainDashboard />, // This will render when you visit /dashboard
      },
      {
        path: "writer-request-accept",
        element: <BecomeWriterRequest />, // This will show when you visit /dashboard/writer-request-accept
      },
    ],
  },
]);

export default router;
