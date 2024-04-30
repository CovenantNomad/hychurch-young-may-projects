'use client'

import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createNewBingo } from "@/lib/supabase";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type CreateBingoProps = {}

const CreateBingo = ({}: CreateBingoProps) => {
  const queryClient = useQueryClient()
  const [name, setName] = useState<string>("")

  const mutation = useMutation({
    mutationFn: createNewBingo,
    onSettled: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ['getBingo'] })
    },
  })

  return (
    <div className="max-w-[848px] w-full border border-accent rounded-3xl py-8 px-12">
      <div>
        <span className="text-[18px] font-medium text-white xl:text-[24px]">
          가족명을 입력하시고,<br className="block xl:hidden" />
          빙고판을 만들어주세요
        </span>
      </div>
      <div className="w-full flex flex-col justify-center gap-x-4 mt-4 xl:items-center xl:justify-normal">
        <Input 
          type="text" 
          placeholder="가족명을 입력해주세요" 
          value={name} 
          onChange={e => setName(e.target.value)} 
        />
        <Button 
          size={"lg"} 
          className="mt-4 bg-accent text-white disabled:bg-black xl:mt-0" 
          onClick={() => {
            mutation.mutateAsync({
              name: name
            })
          }}
          disabled={name === ""}
        >
          빙고 만들기
        </Button>
      </div>
    </div>
  );
};

export default CreateBingo;
