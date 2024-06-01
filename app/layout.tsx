import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import {
  ClerkProvider,
  RedirectToSignIn,
  SignedIn,
  SignedOut,
} from "@clerk/nextjs";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { cn } from "@/lib/utils";

const font = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Discord Clone",
  description:
    "Aliaksei Sazonau's Discord Clone App: your ultimate platform for seamless communication, voice chats, and community building.",
  keywords:
    "Discord Clone, communication platform, voice chat, community building, online chat, Aliaksei Sazonau",
  authors: [{ name: "Aliaksei Sazonau", url: "https://t.me/alexeusazonov" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en" suppressHydrationWarning>
      <body className={cn(font.className, "bg-white dark:bg-[#313338]")}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem storageKey="discord-theme">
        {children}
        </ThemeProvider>
      </body>
    </html>
    </ClerkProvider>
  );
}
