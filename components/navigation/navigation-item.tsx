"use client";

import { useParams, useRouter } from "next/navigation";

import Image from "next/image";

import { ActionTooltip } from "@/components/action-tooltip";

import { cn } from "@/lib/utils";

interface NavigationItemProps {
  id: string;
  imageUrl: string;
  name: string;
}

export const NavigationItem = ({ id, imageUrl, name }: NavigationItemProps) => {
  const params = useParams();
  const router = useRouter();

  const onClick = () => {
    router.push(`/servers/${id}`);
  };

  return (
    <ActionTooltip side="right" align="center" label={name}>
      <button onClick={onClick} className="group relative flex items-center focus:outline-none">
        <div
          className={cn(
            "absolute left-0 bg-primary rounded-r-full transition-all w-[4px]",
            params?.serverId !== id && "group-hover:h-[20px]",
            params?.serverId === id ? "h-[36px]" : "h-[8px]"
          )}
        />
        <div
          data-active={params?.serverId === id ? true : false}
          className={cn(
            "relative group flex mx-3 w-[48px] h-[48px] rounded-[24px] data-[active='false']:group-hover:rounded-[20px] transition-all overflow-hidden",
            params?.serverId === id &&
              "bg-primary/10 text-primary rounded-[16px]"
          )}
        >
          <Image fill src={imageUrl} alt="Channel" className="object-cover" />
        </div>
      </button>
    </ActionTooltip>
  );
};
