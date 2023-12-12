import { styles } from "../data/constants";

interface Props {
  stat: string;
  figure: number;
}

const StatMob = ({ stat, figure }: Props) => {
  return (
    <div
      className={`${styles.flexBetween} md:flex-col px-[24px] md:p-5 py-[13px] border-[#38384F] border h-[48px] md:h-[80px] uppercase mb-[8px] md:mb-0`}
    >
      <p className="text-[#838391] text-[9px] font-bold font-spartan">{stat}</p>
      <h3 className="text-[2rem] md:text-[2.4rem] font-antonio">
        {figure} DAYS
      </h3>
    </div>
  );
};
export default StatMob;
