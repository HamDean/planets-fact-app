import { NavLink } from "react-router-dom";
import usePlanetStore from "../store";
import FactTab from "./FactTab";

const FactTabList = () => {
  const selectedIndex = usePlanetStore((s) => s.selectedIndex);
  const setSelectedIndex = usePlanetStore((s) => s.setSelectedIndex);

  return (
    <div className="hidden md:block lg:w-[350px] lg:self-end ">
      <NavLink to={"/"}>
        <FactTab
          onSelectTab={() => setSelectedIndex(1)}
          isActive={selectedIndex === 1}
          index={1}
          title="overview"
        />
      </NavLink>
      <NavLink to={"/structure"}>
        <FactTab
          onSelectTab={() => setSelectedIndex(2)}
          isActive={selectedIndex === 2}
          index={2}
          title="internal structure"
        />
      </NavLink>
      <NavLink to={"/surface"}>
        <FactTab
          onSelectTab={() => setSelectedIndex(3)}
          isActive={selectedIndex === 3}
          index={3}
          title="geology"
        />
      </NavLink>
    </div>
  );
};
export default FactTabList;
