import FactTabList from "../components/FactTabList";
import PageImage from "../components/PageImage";
import PlanetDesc from "../components/PlanetDesc";
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
        <PageImage image={planet?.images.internal} />
        <div className="planet-desc">
          <PlanetDesc
            name={planet?.name}
            content={planet?.structure.content}
            source={planet?.structure.source}
          />
          <FactTabList />
        </div>
      </div>
    </section>
  );
};
export default OverviewPage;
