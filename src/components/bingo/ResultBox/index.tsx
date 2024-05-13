'use client'

import { getResults } from "@/lib/supabase";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";

type ResultBoxProps = {}

const ResultBox = ({}: ResultBoxProps) => {
  const { isLoading, isFetching, data } = useQuery({
    queryKey: ['getResults'],
    queryFn: () => getResults(),
    staleTime: 15 * 60 * 1000,
    gcTime: 30 * 60 * 1000
  })

  return (
    <div className="flex justify-center mt-[32px]">
      <div className="relative">
        <span className="text-[24px] font-medium leading-[170%] tracking-[-0.04em] text-white text-center xl:text-[38px]">
          지금까지 <strong className="text-accent font-bold">{data ? data : 0}개</strong>의 빙고칸을 채웠어요!
        </span>
        {/* {data === 9 && (
          <div className="absolute -right-7 -bottom-5 xl:-right-10 xl:-bottom-5">
            <Image src={"/images/stamp.png"} width={48} height={48} alt="완료스탬프" className="block xl:hidden"/>
            <Image src={"/images/stamp.png"} width={64} height={64} alt="완료스탬프" className="hidden xl:block"/>
          </div>
        )} */}
      </div>
    </div>
  );
};

export default ResultBox;
