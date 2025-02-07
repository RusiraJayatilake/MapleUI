import type { Metadata } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "MapleUI",
  description: "Custom Build TailwindCSS Component Library",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
