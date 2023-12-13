import { Link } from "react-router-dom";
import { planets } from "../data/constants";
import { styles } from "../data/constants";

const NavLinksMob = () => {
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
            <Link to={"/"}>{p}</Link>
          </span>
          <img src="../src/assets/icon-chevron.svg" />
        </li>
      ))}
    </ul>
  );
};
export default NavLinksMob;
