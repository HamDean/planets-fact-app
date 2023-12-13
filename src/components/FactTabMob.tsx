import { styles } from "../data/constants";

const FactTabMob = () => {
  return (
    <div
      className={`${styles.flexBetween} uppercase font-spartan text-[11px] text-[#838391] font-bold border-[#38384F] border-b px-7 md:hidden  `}
    >
      <div className="w-[88px] py-5 hover:text-white cursor-pointer transition-all">
        <p>overview</p>
      </div>
      <div className="w-[88px] py-5 hover:text-white cursor-pointer transition-all">
        <p>structure</p>
      </div>
      <div className="w-[88px] py-5 hover:text-white cursor-pointer transition-all">
        <p>surface</p>
      </div>
    </div>
  );
};
export default FactTabMob;
