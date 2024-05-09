import { createBrowserRouter } from "react-router-dom";
import Roots from "../layout/Roots";
import Home from "../components/home/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRoutes from "../PrivateRoute/PrivateRoutes";
import CreateAssignments from "../pages/CreateAssignments";
import PendingAssignments from "../pages/PendingAssignments";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Roots />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path:'/create',
        element:<PrivateRoutes><CreateAssignments/></PrivateRoutes>
      },
      {
        path:'/pending',
        element:<PrivateRoutes><PendingAssignments/></PrivateRoutes>
      },

      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);
export default router;
