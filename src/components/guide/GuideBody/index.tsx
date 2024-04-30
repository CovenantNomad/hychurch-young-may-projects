import { guideList } from "@/constants/guide";

type GuideBodyProps = {}

const GuideBody = ({}: GuideBodyProps) => {
  return (
    <>
      <div className="flex justify-center pt-[38px]">
        <p className="text-[17px] font-medium leading-[160%] tracking-[-0.04em] text-primary whitespace-pre-line text-center xl:text-[26px]">
          5월 가정의 달을 맞아 은혜로운 가정을 세우기 위해<br/>
          [더한다] 사진촬영 빙고 프로젝트를 준비했습니다<br/>
          예배, 기도, 섬김, 조이, 허깅을 주제로<br/>
          가족들끼리 기존보다 한번 [더한다]는 의미입니다<br/>
        </p>
      </div>
      <div className="flex justify-center pt-[100px]">
        <div className="h-[60px] w-full flex justify-center items-center bg-primary xl:h-[75px]">
          <span className="text-[28px] font-extrabold leading-[160%] tracking-[-0.04em] text-white xl:text-[38px]">참여방법</span>
        </div>
      </div>
      <div className="grid grid-cols-1 pt-[46px] gap-[32px] xl:grid-cols-2">
        {guideList.map(item => (
          <div key={item.id} className="relative w-full border-2 border-primary pt-[50px] px-[30px] pb-[30px]">
            <div className="h-[32px] w-[94px] absolute top-[-13px] left-[50%] translate-x-[-50%] inline-flex justify-center items-center bg-primary rounded-3xl py-1 xl:h-[48px] xl:w-[183px] xl:top-[-24px]">
              <span className="text-accent text-[20px] font-extrabold xl:text-[24px]">{item.title}</span>
            </div>
            <div className="flex justify-center items-center xl:min-h-[126px]">
              <span className="text-[18px] font-medium leading-[160%] tracking-[-0.04em] text-primary text-center break-words xl:text-[26px]">{item.content}</span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default GuideBody;
