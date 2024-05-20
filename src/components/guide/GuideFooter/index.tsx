import { missionList } from "@/constants/guide";

type GuideFooterProps = {}

const GuideFooter = ({}: GuideFooterProps) => {
  return (
    <>
      <div className="flex justify-center pt-[100px]">
        <div className="h-[60px] w-full flex justify-center items-center bg-primary xl:h-[75px]">
          <span className="text-[28px] font-extrabold leading-[160%] tracking-[-0.04em] text-white xl:text-[38px]">미션내용</span>
        </div>
      </div>
      <div className="grid grid-cols-1 pt-[46px] gap-[32px] xl:grid-cols-2">
        {missionList.map(item => (
          <div key={item.id} className="relative w-full pt-[16px] px-[30px] pb-[30px]">
            <div className="h-[32px] w-[94px] absolute top-[-13px] left-[50%] translate-x-[-50%] inline-flex justify-center items-center bg-primary rounded-3xl py-1 xl:h-[48px] xl:w-[183px] xl:top-[-24px]">
              <span className="text-accent text-[20px] font-extrabold xl:text-[24px]">{item.tag}</span>
            </div>
            <div className="min-h-[126px] flex flex-col justify-center items-center">
              <span className="inline-block text-[28px] font-bold leading-[160%] tracking-[-0.04em] text-primary text-center break-words pb-[12px]">{item.title}</span>
              <span className="text-[20px] font-medium leading-[160%] tracking-[-0.04em] text-primary text-center break-words">{item.content}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-col items-center pt-[60px]">
        <span className="block text-[16px] font-medium leading-[160%] tracking-[-0.04em] text-black xl:text-[20px]">미션별 참신한 아이디어 사진도 가능합니다 ^^</span>
        <span className="block text-[16px] font-medium leading-[160%] tracking-[-0.04em] text-black xl:text-[20px]">
          <strong className="inline-block px-1 py-0.5 bg-primary text-accent">주의</strong>
          {" "}업로드한 사진은 변경이 안됩니다
        </span>
        <span className="block text-[16px] font-medium leading-[160%] tracking-[-0.04em] text-black mt-4 text-center xl:text-[20px]">
          사진 업로드시 <br/>
          로딩이 조금 걸리니 여유있게 기다려주세요
        </span>
      </div>
      <div className="flex flex-col items-center pt-[60px]">
        <span className="inline-block text-[16px] font-medium leading-[160%] tracking-[-0.04em] bg-primary text-accent xl:text-[20px]">[ 미션완수 가정에게는 소정의 선물을 드립니다 ]</span>
        <span className="block text-[16px] font-medium leading-[160%] tracking-[-0.04em] text-black text-center mt-2 xl:text-[20px]">
          가정마다 은혜의 모먼트를 사진으로 남기며<br className="xl:hidden" /> 믿음의 가정을 세워가시길 바랍니다 ^^
        </span>
      </div>
      
    </>
  );
};

export default GuideFooter;
