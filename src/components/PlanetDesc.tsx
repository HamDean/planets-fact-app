interface Props {
  name?: string;
  content?: string;
  source?: string;
}

const PlanetDesc = ({ name, content, source }: Props) => {
  return (
    <div className="lg:mb-[40px]">
      <h2 className="text-[4rem] font-antonio mb-[16px] uppercase">{name}</h2>
      <p className="text-[1.1rem] font-spartan opacity-[0.5] leading-[22px] w-[320px]">
        {content}
      </p>
      <p className="opacity-[0.5] flex justify-start items-center gap-1 mt-[32px]">
        Source:{"    "}
        <a
          href={source}
          target="_blank"
          className="flex items-center justify-start text-[1.1rem] font-spartan opacity-[0.7] font-bold leading-[25px] underline"
        >
          Wikipedia
          <span>
            <img
              className="w-[12px] h-[12px]"
              src="../src/assets/icon-source.svg"
            />
          </span>
        </a>
      </p>
    </div>
  );
};
export default PlanetDesc;
