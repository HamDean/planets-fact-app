import { NavLink } from "react-router-dom";
import FactTab from "../components/FactTab";
import StatMob from "../components/Stat";
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
        <div className="planet-image-container">
          <img
            className="planet-image"
            src={planet?.images.planet}
            alt={`Planet ${planet}`}
          />
        </div>

        <div className="md:flex lg:flex-col md:justify-between md:items-center lg:items-stretch md:w-[80vw] lg:w-[350px] lg:justify-self-end">
          <div>
            <h2 className="text-[4rem] font-antonio mb-[16px] uppercase">
              {planet?.name}
            </h2>
            <p className="text-[1.1rem] font-spartan opacity-[0.5] leading-[22px] w-[320px]">
              {planet?.overview.content}
            </p>
            <p className="opacity-[0.5] flex justify-start items-center gap-1 mt-[32px]">
              Source:{"    "}
              <a
                href={planet?.overview.source}
                target="_blank"
                className="flex items-center justify-center text-[1.1rem] font-spartan opacity-[0.7] font-bold leading-[25px] underline"
              >
                Wikipedia
                <span>
                  <img
                    className="w-[12px] h-[12px]"
                    src="../src/assets/icon-source.svg"
                  />
                </span>
              </a>
            </p>
          </div>

          <div className="hidden md:block lg:w-[350px] lg:self-end ">
            <NavLink to={"/"}>
              <FactTab index={1} title="overview" />
            </NavLink>
            <NavLink to={"/structure"}>
              <FactTab index={2} title="internal structure" />
            </NavLink>
            <NavLink to={"/surface"}>
              <FactTab index={3} title="geology" />
            </NavLink>
          </div>
        </div>
      </div>

      <div className="md:w-[80vw] md:flex md:justify-between gap-2 items-center mt-[30px]">
        <StatMob stat="rotation time" figure={planet?.rotation} />
        <StatMob stat="revolution time" figure={planet?.revolution} />
        <StatMob stat="radius" figure={planet?.radius} />
        <StatMob stat="temperature" figure={planet?.temperature} />
      </div>
    </section>
  );
};
export default OverviewPage;
