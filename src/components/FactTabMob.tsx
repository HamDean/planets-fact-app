import { NavLink } from "react-router-dom";
import { styles } from "../data/constants";

const FactTabMob = () => {
  const navTabMob = ["overview", "structure", "surface"];

  return (
    <div
      className={`${styles.flexBetween} uppercase font-spartan text-[11px] text-[#838391] font-bold border-[#38384F] border-b px-7 md:hidden  `}
    >
      {navTabMob.map((nav, i) => (
        <div
          key={i}
          className="w-[88px] py-5 hover:text-white cursor-pointer transition-all"
        >
          <NavLink
            to={i === 0 ? `/${nav}` : "/" + nav}
            className={({ isActive }) => (isActive ? "active-mob" : "")}
          >
            {nav}
          </NavLink>
        </div>
      ))}
    </div>
  );
};
export default FactTabMob;
