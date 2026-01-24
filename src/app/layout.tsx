import type { Metadata } from "next";
import "../styles/globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import { TransitionProvider } from "@/context/TransitionProvider";
import Navbar from "@/components/Navbar";

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
        <SmoothScroll>
          <TransitionProvider>
            <Navbar />
            {children}
          </TransitionProvider>
        </SmoothScroll>
      </body>
    </html>
  );
}
