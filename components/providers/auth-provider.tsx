"use client";

import { useTheme } from "next-themes";
import { ClerkProvider } from "@clerk/nextjs";

import { dark } from "@clerk/themes";

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {

  const { resolvedTheme } = useTheme();

  const ClerkTheme: {
    baseTheme?: [any];
  } = {};

  if (resolvedTheme === "dark") {
    ClerkTheme["baseTheme"] = [dark];
  }

  return (
    <ClerkProvider
      appearance={{
        ...ClerkTheme,
      }}
    >
      {children}
    </ClerkProvider>
  );
};
