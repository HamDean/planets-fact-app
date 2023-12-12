import { planets } from "../data/constants";
import { styles } from "../data/constants";

const NavLinksMob = () => {
  return (
    <ul className="flex flex-col h-[90vh] text-[15px] px-[24px] font-bold font-spartan bg-[#070724] uppercase tracking-[1.4px]">
      {planets.map((p, i) => (
        <li
          key={i}
          className={`${
            i !== planets.length - 1 ? "border-b border-[#38384F]" : ""
          } py-10 ${styles.flexBetween}`}
        >
          {p}
          <img src="../src/assets/icon-chevron.svg" />
        </li>
      ))}
    </ul>
  );
};
export default NavLinksMob;
