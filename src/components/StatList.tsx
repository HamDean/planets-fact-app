import Planet from "../entities/entities";
import StatMob from "./Stat";

interface Props {
  planet?: Planet;
}

const StatList = ({ planet }: Props) => {
  return (
    <div className="md:w-[80vw] flex flex-col md:flex-row md:justify-between gap-2 items-center my-[30px]  mx-auto">
      <StatMob stat="rotation time" figure={planet?.rotation} />
      <StatMob stat="revolution time" figure={planet?.revolution} />
      <StatMob stat="radius" figure={planet?.radius} />
      <StatMob stat="temperature" figure={planet?.temperature} />
    </div>
  );
};
export default StatList;
