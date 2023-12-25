import { NavLink } from "react-router-dom";
import { planets, styles } from "../data/constants";
import usePlanetStore from "../store";
import NavLinksMob from "./NavLinksMob";

const NavBar = () => {
  const setOpen = usePlanetStore((s) => s.setOpen);
  const isOpen = usePlanetStore((s) => s.isOpen);
  const setPlanet = usePlanetStore((s) => s.setPlanet);
  const colorCode: { [key: number]: string } = {
    0: "#DEF4FC",
    1: "#F7CC7F",
    2: "#545BFE",
    3: "#FF6A45",
    4: "#ECAD7A",
    5: "#FCCB6B",
    6: "#65F0D5",
    7: "#497EFA",
  };

  return (
    <nav className="flex flex-col lg:py-5">
      <div
        className={`${styles.flexBetween} border-[#38384F] border-b md:border-1 md:flex-col lg:flex-row  py-[16px] px-[24px]`}
      >
        <h1 className="md:mt-[20px] lg:mt-0">THE PLANETS </h1>

        <ul
          className={`${styles.flexBetween} hidden md:flex lg:h-[45px]  gap-[33px] uppercase text-[#838391] text-[1.1rem] font-bold md:mt-[40px] lg:mt-0 md:mb-[10px] lg:mb-0 md:w-full lg:w-auto md:px-[50px] lg:px-0 md:justify-between md:items-center`}
        >
          {planets.map((planet, i) => (
            <li
              key={i}
              className={`hover:text-white lg:hover:border-t-2 lg:hover:border-[${colorCode[i]}] lg:hover:py-16 transition-all `}
            >
              <NavLink to={"/"} onClick={() => setPlanet(planet)}>
                {planet}
              </NavLink>
            </li>
          ))}
        </ul>

        <img
          className="w-[2.4rem] h-[1.7rem] cursor-pointer md:hidden"
          src="../src/assets/icon-hamburger.svg"
          onClick={() => setOpen()}
        />
      </div>
      {isOpen && <NavLinksMob />}
    </nav>
  );
};
export default NavBar;
