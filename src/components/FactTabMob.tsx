import { Link } from "react-router-dom";
import { styles } from "../data/constants";
import usePlanetStore from "../store";

const FactTabMob = () => {
  const navTabMob = ["overview", "structure", "surface"];
  const setTab = usePlanetStore((s) => s.setTab);
  const setSelectedIndex = usePlanetStore((s) => s.setSelectedIndex);
  const selectedIndex = usePlanetStore((s) => s.selectedIndex);
  const planet = usePlanetStore((s) => s.planet);

  return (
    <div
      className={`${styles.flexBetween} uppercase font-spartan text-[11px] text-[#838391] font-bold border-[#38384F] border-b px-7 md:hidden  `}
    >
      {navTabMob.map((nav, i) => (
        <div
          key={i}
          onClick={() => setSelectedIndex(i)}
          className={`w-[88px] py-7 text-center hover:text-white cursor-pointer transition-all ${
            selectedIndex === i && " active-" + planet
          }`}
        >
          <Link to={i === 0 ? "/" : "/" + nav} onClick={() => setTab(nav)}>
            {nav}
          </Link>
        </div>
      ))}
    </div>
  );
};
export default FactTabMob;
