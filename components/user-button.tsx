"use client";

import { UserButton as Button } from "@clerk/nextjs";

export const UserButton = () => {
  return (
    <Button
      appearance={{
        elements: {
          avatarBox: "h-[48px] w-[48px]",
        },
      }}
    />
  );
};
