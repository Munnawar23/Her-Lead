import type { Metadata } from "next";
import "../styles/globals.css";
import Navbar from "@/components/ui/Navbar";

export const metadata: Metadata = {
  title: "Her Lead",
  description: "A Next.js application",
};

import SmoothScroll from "@/components/common/SmoothScroll";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SmoothScroll>
          <Navbar />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
