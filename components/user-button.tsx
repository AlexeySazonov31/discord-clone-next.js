"use client";

import { UserButton as Button } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

import { useTheme } from "next-themes";

export const UserButton = () => {
  const { resolvedTheme } = useTheme();

  const ClerkTheme: {
    baseTheme?: [any];
  } = {};

  if (resolvedTheme === "dark") {
    ClerkTheme["baseTheme"] = [dark];
  }

  return (
    <Button
      appearance={{
        ...ClerkTheme,
        elements: {
          avatarBox: "h-[48px] w-[48px]",
        },
      }}
    />
  );
};
