import { createBrowserRouter } from "react-router-dom";
import Roots from "../layout/Roots";
import Home from "../components/home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Roots />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
]);
export default router;
