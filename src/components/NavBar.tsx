import { NavLink } from "react-router-dom";
import { planets, styles } from "../data/constants";
import usePlanetStore from "../store";
import NavLinksMob from "./NavLinksMob";

const NavBar = () => {
  const setOpen = usePlanetStore((s) => s.setOpen);
  const isOpen = usePlanetStore((s) => s.isOpen);
  const setPlanet = usePlanetStore((s) => s.setPlanet);
  const setSelectedIndex = usePlanetStore((s) => s.setSelectedIndex);
  const setPlanetIndex = usePlanetStore((s) => s.setPlanetIndex);
  const planetIndex = usePlanetStore((s) => s.planetIndex);

  return (
    <nav className="flex flex-col">
      <div
        className={`${styles.flexBetween} border-[#38384F] border-b md:border-1 md:flex-col lg:flex-row  py-[16px] px-[24px]`}
      >
        <h1
          onClick={() => {
            setPlanet("mercury");
          }}
          className="md:mt-[20px] lg:mt-0 cursor-pointer"
        >
          THE PLANETS
        </h1>

        <ul
          className={`${styles.flexBetween} hidden md:flex lg:h-[45px]  gap-[33px] uppercase text-[#838391] text-[1.1rem] font-bold md:mt-[40px] lg:mt-0 md:mb-[10px] lg:mb-0 md:w-full lg:w-auto md:px-[50px] lg:px-0 md:justify-between md:items-center`}
        >
          {planets.map((planet, i) => (
            <li
              key={i}
              onClick={() => {
                setSelectedIndex(0);
                setPlanetIndex(i);
              }}
              className={`hover:text-white lg:py-12 ${
                planetIndex === i && `lg:border-t-2 lg:border-[--${planet}-bg]`
              } `}
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
