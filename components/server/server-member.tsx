"use client";

import { useParams, useRouter } from "next/navigation";
import { Member, MemberRole, Profile, Server } from "@prisma/client";

import { UserAvatar } from "@/components/user-avatar";

import { ShieldAlert, ShieldCheck } from "lucide-react";
import { cn, limitLengthFirstWord } from "@/lib/utils";

interface ServerMemberProps {
  member: Member & { profile: Profile };
  server: Server;
}

const roleIconMap = {
  [MemberRole.GUEST]: null,
  [MemberRole.MODERATOR]: <ShieldCheck className="w-4 h-4 ml-2 text-indigo-500" />,
  [MemberRole.ADMIN]: <ShieldAlert className="w-4 h-4 ml-2 text-rose-700" />,
};

const ServerMember = ({ member, server }: ServerMemberProps) => {
  const params = useParams();
  const router = useRouter();

  const icon = roleIconMap[member.role];

  return (
    <button
      className={cn(
        "group px-2 py-2 rounded-md flex items-center gap-x-2 w-full hover:bg-zinc-700/10 dark:hover:bg-zinc-700/50 transition mb-1",
        params?.memberId === member.id && "bg-zinc-700/20 dark:bg-zinc-700"
      )}
    >
      <UserAvatar src={member.profile.imageUrl} className="h-8 w-8 md:h-8 md:w-8" />
      <p
        className={cn(
          "text-left line-clamp-1 font-semibold text-sm text-zinc-500 group-hover:text-zinc-600 dark:text-zinc-400 dark:group-hover:text-zinc-300 transition",
          params?.channelId === member.id &&
            "text-primary dark:text-zinc-200 dark:group-hover:text-white"
        )}
      >
        {/null/.test(member.profile.name) ? limitLengthFirstWord(member.profile.email, 14) : limitLengthFirstWord(member.profile.name, 14)}
      </p>
      {icon}
    </button>
  );
};

export default ServerMember;