import { Analytics } from "@vercel/analytics/react";

import type { Metadata, Viewport } from "next";

import { ThemeProvider } from "@/components/providers/theme-provider";
import { ModalProvider } from "@/components/providers/modal-provider";
import { SocketProvider } from "@/components/providers/socket-provider";
import { QueryProvider } from "@/components/providers/query-provider";
import { ClerkProvider } from "@clerk/nextjs";

import { cn } from "@/lib/utils";
import { Open_Sans } from "next/font/google";
import "./globals.css";

const font = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Discord Clone",
  description:
    "Aliaksei Sazonau's Discord Clone App: your ultimate platform for seamless communication, voice chats, and community building.",
  keywords:
    "Discord Clone, communication platform, voice chat, community building, online chat, Aliaksei Sazonau",
  authors: [{ name: "Aliaksei Sazonau", url: "https://t.me/alexeusazonov" }],
};

export const viewport: Viewport = {
  themeColor: "#313338",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <ClerkProvider>
        <html lang="en" suppressHydrationWarning>
          <head>
            <link rel="apple-touch-icon" sizes="152x152" href="/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
            <link rel="manifest" href="/site.webmanifest" />
            <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5b76d5" />
            <meta name="msapplication-TileColor" content="#2b5797" />
          </head>
          <body className={cn(font.className, "bg-white dark:bg-[#313338]")}>
            <ThemeProvider
              attribute="class"
              defaultTheme="dark"
              enableSystem
              storageKey="discord-theme"
            >
              <SocketProvider>
                <ModalProvider />
                <QueryProvider>{children}</QueryProvider>
              </SocketProvider>
            </ThemeProvider>
          </body>
        </html>
      </ClerkProvider>
      <Analytics />
    </>
  );
}
