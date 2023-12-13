import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import FactTabMob from "../components/FactTabMob";

const Layout = () => {
  return (
    <>
      <NavBar />
      <FactTabMob />
      <Outlet />
    </>
  );
};
export default Layout;
