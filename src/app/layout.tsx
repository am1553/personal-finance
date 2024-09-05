import type { Metadata } from "next";
import { Public_Sans } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";

import "./globals.css";

const publicSans = Public_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Finance",
  description: "A personal finance app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={publicSans.className}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
