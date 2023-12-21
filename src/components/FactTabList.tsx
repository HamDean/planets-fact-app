import { NavLink } from "react-router-dom";
import FactTab from "./FactTab";

const FactTabList = () => {
  return (
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
  );
};
export default FactTabList;
