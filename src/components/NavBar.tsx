import { styles, planets } from "../data/constants";

const NavBar = () => {
  return (
    <nav
      className={`${styles.flexBetween} border-[#38384F] border-b md:border-1 md:flex-col lg:flex-row  py-[16px] px-[24px]`}
    >
      <h1 className="md:mt-[20px] lg:mt-0">THE PLANETS </h1>

      <ul
        className={`${styles.flexBetween} hidden md:flex  gap-[33px] uppercase text-[#838391] text-[1.1rem] font-bold md:mt-[40px] lg:mt-0 md:mb-[10px] lg:mb-0 md:w-full lg:w-auto md:px-[50px] lg:px-0 md:justify-between md:items-center`}
      >
        {planets.map((planet, i) => (
          <li key={i}>
            <li className="cursor-pointer md:hover:text-white transition-all">
              {planet}
            </li>
          </li>
        ))}
      </ul>

      <img
        className="w-[2.4rem] h-[1.7rem] md:hidden"
        src="../src/assets/icon-hamburger.svg"
      />
    </nav>
  );
};
export default NavBar;
