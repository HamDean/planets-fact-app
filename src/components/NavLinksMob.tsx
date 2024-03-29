import { Link } from "react-router-dom";
import { planets, styles } from "../data/constants";
import usePlanetStore from "../store";
import { imgSrc } from "../data/data";

const NavLinksMob = () => {
  const setPlanet = usePlanetStore((s) => s.setPlanet);
  const setOpen = usePlanetStore((s) => s.setOpen);
  const setSelectedIndex = usePlanetStore((s) => s.setSelectedIndex);
  const setPlanetIndex = usePlanetStore((s) => s.setPlanetIndex);
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
    <ul className="flex flex-col h-[90vh] md:hidden text-[15px] px-[24px] font-bold font-spartan bg-[#070724] uppercase tracking-[1.4px]">
      {planets.map((p, i) => (
        <li
          key={i}
          className={`${
            i !== planets.length - 1 ? "border-b border-[#38384F]" : ""
          } py-10 ${styles.flexBetween}`}
          onClick={() => setSelectedIndex(0)}
        >
          <span className={`${styles.flexBetween} gap-7`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              className="mb-2"
            >
              <circle cx="10" cy="10" r="10" fill={`${colorCode[i]}`} />
            </svg>
            <Link
              to={"/"}
              onClick={() => {
                setPlanet(p);
                setOpen();
                setPlanetIndex(i);
              }}
            >
              {p}
            </Link>
          </span>
          <img src={imgSrc.chevron} />
        </li>
      ))}
    </ul>
  );
};
export default NavLinksMob;
