import { cookies } from "next/headers";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import InnerWrapper from "../InnerWrapper";
import Profile from "../Profile";

type NavbarProps = {}

const Navbar = async ({}: NavbarProps) => {
  const supabase = createServerComponentClient({ cookies })
  const {
    data: { user },
  } = await supabase.auth.getUser()

  return (
    <div>
      <InnerWrapper>
        <div className="relative h-[66px]">
          <div className="h-full flex flex-col justify-center">
            <span className="inline-block text-[21px] font-extrabold tracking-[-0.02em] text-primary">
              청장년 <strong className="inline-block py-0.5 px-1 bg-primary text-accent">[더한다]</strong> 프로젝트
            </span>
          </div>
          <Profile user={user} />
        </div>
      </InnerWrapper>
    </div>
  );
};

export default Navbar;
