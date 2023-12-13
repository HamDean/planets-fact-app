import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import OverviewPage from "./pages/OverviewPage";
import PlanetPage from "./pages/PlanetPage";
import StructurePage from "./pages/StructurePage";
import SurfacePage from "./pages/SurfacePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <PlanetPage />,
        children: [
          { path: "/", element: <OverviewPage /> },
          { path: "structure", element: <StructurePage /> },
          { path: "surface", element: <SurfacePage /> },
        ],
      },
    ],
  },
]);

export default router;
