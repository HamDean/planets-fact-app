import { Outlet } from "react-router-dom";
import FactTabMob from "../components/FactTabMob";

const PlanetPage = () => {
  return (
    <>
      <FactTabMob />
      <Outlet />
    </>
  );
};
export default PlanetPage;
