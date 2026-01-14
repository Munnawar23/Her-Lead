import type { Metadata } from "next";
import "../styles/globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";
import { TransitionProvider } from "@/components/TransitionProvider";
import Navbar from "@/components/Navbar";
import SocialBottomBar from "@/components/SocialBottomBar";

export const metadata: Metadata = {
  title: "Her Lead",
  description: "A Next.js application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <CustomCursor />
        <SmoothScroll>
          <TransitionProvider>
            <Navbar />
            {children}
            <SocialBottomBar />
          </TransitionProvider>
        </SmoothScroll>
      </body>
    </html>
  );
}
