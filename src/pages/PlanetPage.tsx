import { Outlet } from "react-router-dom";
import FactTabMob from "../components/FactTabMob";
import StatList from "../components/StatList";
import planets from "../data/data";
import usePlanetStore from "../store";

const PlanetPage = () => {
  const currentPlanet = usePlanetStore((s) => s.planet);

  const planet = planets.find(
    (planet) => planet.name.toLocaleLowerCase() === currentPlanet
  );

  return (
    <>
      <FactTabMob />
      <Outlet />
      <StatList planet={planet} />
    </>
  );
};
export default PlanetPage;
