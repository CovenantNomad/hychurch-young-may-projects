'use client'

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { User, createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { LogOut } from "lucide-react";
import { useRouter } from 'next/navigation';

type ProfileProps = {
  user: User | null
}

const Profile = ({ user }: ProfileProps) => {
  const router = useRouter()
  const supabase = createClientComponentClient()


  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.refresh()
  }

  return (
    <div className="absolute top-[50%] right-0 translate-y-[-50%]">
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Avatar>
            {user ? (
              <AvatarImage src={user.user_metadata.avatar_url} alt="profile" />
            ) : (
              <AvatarFallback>청장년</AvatarFallback>
            )}
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuGroup>
            <DropdownMenuItem onClick={handleSignOut} className="cursor-pointer">
              <LogOut className="mr-2 h-4 w-4" />
              <span>로그아웃</span>
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default Profile;
