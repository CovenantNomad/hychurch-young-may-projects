
type GuideHeaderProps = {}

const GuideHeader = ({}: GuideHeaderProps) => {
  return (
    <div className="flex flex-col items-center">
      <span className="text-[28px] font-extrabold leading-[170%] tracking-[-0.04em] text-primary xl:text-[38px]">가정의 달</span>
      <span className="text-[28px] font-extrabold leading-[170%] tracking-[-0.04em] text-primary xl:text-[38px]">
        청장년 <strong className="inline-block py-0.5 px-1 bg-accent text-primary">[더한다]</strong> 프로젝트
      </span>
    </div>
  );
};

export default GuideHeader;
