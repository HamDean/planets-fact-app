import usePlanetStore from "../store";
import planets from "../data/data";
import StatMob from "../components/Stat";
import FactTab from "../components/FactTab";

const OverviewPage = () => {
  const currentPlanet = usePlanetStore((s) => s.planet);
  const planet = planets.find(
    (planet) => planet.name.toLocaleLowerCase() === currentPlanet
  );

  return (
    <section className="flex flex-col justify-center items-center px-7 text-center md:text-left mt-[95px]">
      <div className="w-[110px] h-[110px] mb-[100px]">
        <img src={planet?.images.planet} alt="" />
      </div>
      <div className="md:flex md:justify-between md:items-center md:w-[80vw]">
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

        <div className="hidden md:block">
          <FactTab index={1} title="overview" />
          <FactTab index={2} title="internal structure" />
          <FactTab index={3} title="geology" />
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
