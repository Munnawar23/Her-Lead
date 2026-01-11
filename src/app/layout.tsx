import type { Metadata } from "next";
import "../styles/globals.css";

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
        {children}
      </body>
    </html>
  );
}
