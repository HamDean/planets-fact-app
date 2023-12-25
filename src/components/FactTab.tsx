interface Props {
  index: number;
  title: string;
  isActive: boolean;
  onSelectTab: () => void;
}

const FactTab = ({ index, title, isActive, onSelectTab }: Props) => {
  return (
    <div
      className={`flex justify-start items-center text-[9px] h-[48px] 
        w-[280px] lg:w-full gap-8 font-bold border-[#38384F] border 
        px-[28px] py-[12px] mb-3 hover:bg-[#38384F] ${
          isActive && "bg-green-500"
        } cursor-pointer 
        transition-all`}
      onClick={onSelectTab}
    >
      <h4 className=" opacity-[0.5]">0{index}</h4>
      <h3 className="uppercase">{title}</h3>
    </div>
  );
};
export default FactTab;
