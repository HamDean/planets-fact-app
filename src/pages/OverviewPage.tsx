import usePlanetStore from "../store";
import planets from "../data/data";

const OverviewPage = () => {
  const currentPlanet = usePlanetStore((s) => s.planet);
  const planet = planets.find(
    (planet) => planet.name.toLocaleLowerCase() === currentPlanet
  );

  return (
    <section>
      <h2>{planet?.name}</h2>
      <p>{planet?.overview.content}</p>
    </section>
  );
};
export default OverviewPage;
