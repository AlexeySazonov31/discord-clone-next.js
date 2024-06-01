import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import {
  ClerkProvider,
  RedirectToSignIn,
  SignedIn,
  SignedOut,
} from "@clerk/nextjs";

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
    <html lang="en">
      <body className={font.className}>
        <ClerkProvider>{children}</ClerkProvider>
      </body>
    </html>
  );
}
