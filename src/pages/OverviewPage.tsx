import FactTabList from "../components/FactTabList";
import PageImage from "../components/PageImage";
import PlanetDesc from "../components/PlanetDesc";
import StatList from "../components/StatList";
import planets from "../data/data";
import usePlanetStore from "../store";

const OverviewPage = () => {
  const currentPlanet = usePlanetStore((s) => s.planet);

  const planet = planets.find(
    (planet) => planet.name.toLocaleLowerCase() === currentPlanet
  );

  return (
    <section className="tab-container">
      <div className="tab-layout">
        <PageImage image={planet?.images.planet} />

        <div className="planet-desc">
          <PlanetDesc
            name={planet?.name}
            content={planet?.overview.content}
            source={planet?.overview.source}
          />
          <FactTabList />
        </div>
      </div>
      <StatList planet={planet} />
    </section>
  );
};
export default OverviewPage;
