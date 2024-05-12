import { createBrowserRouter } from "react-router-dom";
import Roots from "../layout/Roots";
import Home from "../components/home/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRoutes from "../PrivateRoute/PrivateRoutes";
import CreateAssignments from "../pages/CreateAssignments";
import PendingAssignments from "../pages/PendingAssignments";
import Assignment from "../pages/Assignment";
import UpdatePage from "../pages/UpdatePage";
import ViewDetails from "../pages/ViewDetails";
import AssignmentSubForm from "../pages/AssignmentSubForm";

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
        path: "/create",
        element: (
          <PrivateRoutes>
            <CreateAssignments />
          </PrivateRoutes>
        ),
      },
      {
        path: "/pending",
        element: (
          <PrivateRoutes>
            <PendingAssignments />
          </PrivateRoutes>
        ),
      },
      {
        path: "/assignments",
        element: <Assignment />,
      },
      {
        path: "/update/:id",
        element: <UpdatePage />,
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_URL}/assignments/${params.id}`),
      },
      {
        path: "/details/:id",
        element: <ViewDetails />,
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_URL}/assignments/${params.id}`),
      },
      {
        path:'/submit',
        element:<AssignmentSubForm/>
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
