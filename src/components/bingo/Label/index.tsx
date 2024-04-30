import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

type LabelProps = {}

const Label = async ({}: LabelProps) => {
  const supabase = createServerComponentClient({ cookies })

  const { data, error } = await supabase.from('bingos')
    .select(`*`)
    .eq('user_id', (await supabase.auth.getUser()).data.user?.id)
    .single()
  
  return (
    <div className="flex justify-center pb-[50px]">
      <div className="inline-flex justify-center items-center border-accent border-2 py-1 px-16 rounded-full">
        <span className="text-[18px] font-extrabold text-accent tracking-[-0.04em] xl:text-[28px]">
          {data && data.length !==0 ? data.family_name+`${" "}`+"은혜 빙고" : '우리 가족 은혜 빙고'}
        </span>
      </div>
    </div>
  );
};

export default Label;
