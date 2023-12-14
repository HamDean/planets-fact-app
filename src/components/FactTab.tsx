interface Props {
  index: number;
  title: string;
}

const FactTab = ({ index, title }: Props) => {
  return (
    <div
      className={`flex justify-start items-center text-[9px] h-[48px] 
        w-[280px] gap-8 font-bold border-[#38384F] border 
        px-[28px] py-[12px] mb-3 hover:bg-[#38384F] cursor-pointer 
        transition-all`}
    >
      <h4 className=" opacity-[0.5]">0{index}</h4>
      <h3 className="uppercase">{title}</h3>
    </div>
  );
};
export default FactTab;
