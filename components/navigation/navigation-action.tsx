"use client";

import { useModal } from "@/hooks/use-modal-store";

import { Plus } from "lucide-react";
import { ActionTooltip } from "@/components/action-tooltip";

export const NavigationAction = () => {
  const { onOpen } = useModal();

  return (
    <div>
      <ActionTooltip side="right" align="center" label="Add a server">
        <button
          className="group flex items-center focus:outline-none"
          onClick={() => onOpen("createServer")}
        >
          <div className="flex mx-3 h-[48px] w-[48px] rounded-[24px] group-hover:rounded-[16px] transition-all overflow-hidden items-center justify-center bg-[#F2F3F5] dark:bg-neutral-700 group-hover:bg-emerald-500">
            <Plus
              className="group-hover:text-white transition text-emerald-500 group-hover:rotate-90"
              size={25}
            />
          </div>
        </button>
      </ActionTooltip>
    </div>
  );
};
