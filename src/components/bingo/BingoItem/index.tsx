'use client'

import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import ImageUploadModal from "../ImageUploadModal";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getMission } from "@/lib/supabase";
import Image from "next/image";
import { Skeleton } from "@/components/ui/skeleton";

type BingoItemProps = {
  number: number
  title: string
}

const BingoItem = ({ number, title }: BingoItemProps) => {
  const [open, setOpen] = useState(false)

  const { isLoading, isFetching, data } = useQuery({
    queryKey: ['getMission', number],
    queryFn: () => getMission({ number }),
    staleTime: 15 * 60 * 1000,
    gcTime: 30 * 60 * 1000
  })

  return (
    <div className="relative w-full aspect-[210/210] bg-[#003F34] shadow-inner rounded-2xl xl:h-[210px]">
      {isLoading || isFetching ? (
        <Skeleton className="w-full h-full rounded-2xl bg-gray-300/30" />
      ) : (
        <>
          {data && data.length !== 0 ? (
            <Image src={data[0].image_url} alt="" fill className="w-full h-full rounded-2xl" />
          ) : (
            <div className="flex flex-col items-center justify-around py-2 xl:py-5">
              <div className="text-center pb-[11px] xl:pb-6">
                <span className="text-[10px] leading-[125%] tracking-[0.06em] text-white/60 xl:text-[14px]">MISSION</span>
              </div>
              <div>
                <span className="text-[18px] font-extrabold leading-[125%] tracking-[-0.04em] text-white xl:text-[28px]">
                  {title}
                </span>
              </div>
              <div className="flex justify-center pt-[10px] xl:pt-6">
                <Dialog open={open} onOpenChange={setOpen}>
                  <DialogTrigger>
                    <svg width="13" height="12" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="xl:hidden">
                      <path d="M2 20.5V26H27.5V20.5M6.5 10L14.5 2M14.5 2L22.5 10M14.5 2V20.5" stroke="#FFC360" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <svg width="29" height="28" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="hidden xl:block">
                      <path d="M2 20.5V26H27.5V20.5M6.5 10L14.5 2M14.5 2L22.5 10M14.5 2V20.5" stroke="#FFC360" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </DialogTrigger>
                  <ImageUploadModal number={number} setOpen={setOpen} />
                </Dialog>
              </div>
            </div>    
          )}
        </>
      )}
    </div>
  );
};

export default BingoItem;
