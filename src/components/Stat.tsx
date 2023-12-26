interface Props {
  stat: string;
  figure?: string;
}

const StatMob = ({ stat, figure }: Props) => {
  return (
    <div
      className={`flex justify-between items-center min-w-[320px] md:min-w-[165px] lg:w-[375px] md:flex-col md:items-start px-[10px]   md:p-5 py-[13px] border-[#38384F] border h-[48px] md:h-auto md:mb1  uppercase mb-[8px] md:mb-0  text-left`}
    >
      <p className="text-[#838391] text-[9px] font-bold font-spartan">{stat}</p>
      <span className="text-[16px] tracking-[-1px] md:text-[20px] font-antonio text-left ">
        {figure}
      </span>
    </div>
  );
};
export default StatMob;
