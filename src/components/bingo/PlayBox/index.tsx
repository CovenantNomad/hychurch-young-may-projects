'use client'

import CreateBingo from "../CreateBingo";
import { useQuery } from "@tanstack/react-query";
import { getBingo } from "@/lib/supabase";
import { bingoList } from "@/constants/bingoList";
import BingoItem from "../BingoItem";


type PlayBoxProps = {}

const PlayBox = ({}: PlayBoxProps) => {
  const { isLoading, isFetching, data } = useQuery({
    queryKey: ['getBingo'],
    queryFn: () => getBingo(),
    staleTime: 15 * 60 * 1000,
    gcTime: 30 * 60 * 1000
  })

  return (
    <div className="max-w-none mx-auto xl:max-w-[848px] xl:h-[846px]">
      {isLoading || isFetching ? (
        <div className="w-full h-[400px] flex flex-col justify-center">
          <div className="flex justify-center items-center gap-x-3">
            <div className="w-4 h-4 rounded-full bg-accent animate-bounce delay-200"/>
            <div className="w-4 h-4 rounded-full bg-accent animate-bounce delay-500"/>
            <div className="w-4 h-4 rounded-full bg-accent animate-bounce delay-700"/>
          </div>
          <div className="inline-block font-medium text-accent text-center mt-3 animate-pulse">함께 지어져 가는 중</div>
        </div>
      ) : (
        <>
          <div className="h-full py-[24px] xl:py-[60px] xl:pr-[82px] xl:pl-[82px]">
            {data && data.length !== 0 ? (
              <div className="grid grid-rows-3 grid-cols-3 gap-y-4 gap-x-4">
                {bingoList.map(item => (
                  <BingoItem key={item.id} number={item.missionNumber} title={item.missionTitle} />
                ))}
              </div>
            ) : (
              <CreateBingo />
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default PlayBox;
