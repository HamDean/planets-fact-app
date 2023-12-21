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
    <section className="flex flex-col justify-center items-center px-7 text-center md:text-left mt-[50px]">
      <div className="flex flex-col justify-center items-center lg:grid lg:grid-cols-2 lg:w-[80vw] mb-32">
        <div className="mb-[100px] lg:mx-auto lg:my-auto relative">
          <img
            className={`w-[180px] h-[180px] md:w-[200px] md:h-[200px] lg:w-[260px] lg:h-[260px] object-contain`}
            src={planet?.images.planet}
            alt={`Planet ${planet}`}
          />
          <img
            className={`absolute top-56 left-[45px] md:top-[150px] md:left-16 lg:top-[200px] lg:left-20 w-[90px] h-[90px] md:w-[120px] md:h-[120px] lg:w-[160px] lg:h-[160px] object-contain`}
            src={planet?.images.geology}
            alt={`Planet ${planet}`}
          />
        </div>

        <div className="md:flex lg:flex-col md:justify-between md:items-center lg:items-stretch md:w-[80vw] lg:w-[350px] lg:justify-self-end">
          <div>
            <h2 className="text-[4rem] font-antonio mb-[16px] uppercase">
              {planet?.name}
            </h2>
            <p className="text-[1.1rem] font-spartan opacity-[0.5] leading-[22px] w-[320px]">
              {planet?.geology.content}
            </p>
            <p className="opacity-[0.5] flex justify-start items-center gap-1 mt-[32px]">
              Source:{"    "}
              <a
                href={planet?.geology.source}
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
