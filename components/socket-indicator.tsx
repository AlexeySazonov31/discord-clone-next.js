"use client";

import { useSocket } from "@/components/providers/socket-provider";
import { Badge } from "@/components/ui/badge";

export const SocketIndicator = () => {
  const { isConnected } = useSocket();

  return (
    <Badge
      data-connected={isConnected}
      variant="outline"
      className="flex justify-center bg-yellow-600 data-[connected='true']:bg-emerald-600 text-white border-none ml-3 transition duration-700 w-[65px]"
    >
      {isConnected ? "Live" : "Syncing"}
    </Badge>
  );
};
