import usePlanetStore from "../store";
import planets from "../data/data";
import StatMob from "../components/Stat";
import FactTab from "../components/FactTab";

const OverviewPage = () => {
  const currentPlanet = usePlanetStore((s) => s.planet);
  const planet = planets.find(
    (planet) => planet.name.toLocaleLowerCase() === currentPlanet
  );

  // const sizes = planet?.images.size;
  // let sm = sizes![0].sm;
  // let md = sizes![1].md;
  // let lg = sizes![2].lg;

  return (
    <section className="flex flex-col justify-center items-center px-7 text-center md:text-left mt-[95px]">
      <div className="lg:grid lg:grid-cols-2 lg:w-[80vw]">
        <div className="mb-[100px]">
          <img
            className={`w-[110px] h-[$180px] md:w-[180px] md:h-[180px] lg:w-[260px] lg:h-[260px]`}
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
            <FactTab index={1} title="overview" />
            <FactTab index={2} title="internal structure" />
            <FactTab index={3} title="geology" />
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
