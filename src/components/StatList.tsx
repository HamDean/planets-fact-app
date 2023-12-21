import Planet from "../entities/entities";
import StatMob from "./Stat";

interface Props {
  planet?: Planet;
}

const StatList = ({ planet }: Props) => {
  return (
    <div className="md:w-[80vw] md:flex md:justify-between gap-2 items-center mt-[30px]">
      <StatMob stat="rotation time" figure={planet?.rotation} />
      <StatMob stat="revolution time" figure={planet?.revolution} />
      <StatMob stat="radius" figure={planet?.radius} />
      <StatMob stat="temperature" figure={planet?.temperature} />
    </div>
  );
};
export default StatList;
