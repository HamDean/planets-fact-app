import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import MercuryPage from "./pages/MercuryPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [{ path: "mercury/:id", element: <MercuryPage /> }],
  },
]);

export default router;
