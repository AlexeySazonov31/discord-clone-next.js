import { Menu } from "lucide-react";

import { Sheet, SheetContent, SheetOverlay, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { NavigationSidebar } from "@/components/navigation/navigation-sidebar";
import { ServerSideBar } from "@/components/server/server-sidebar";

export const MobileToggle = ({ serverId }: { serverId: string }) => {
  return (
    <Sheet modal={false}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden mr-3 justify-self-start focus-visible:ring-0 focus-visible:ring-offset-0"
        >
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="p-0 flex gap-0" >
        <div className="w-[72px]">
          <NavigationSidebar />
        </div>
        <ServerSideBar serverId={serverId} />
      </SheetContent>
    </Sheet>
  );
};
