import "@/styles/globals.css";
import type { Metadata } from "next";
import { inter } from "@/app/_ui/fonts";

export const metadata: Metadata = {
  title: "page transitions",
  description: "Nextjs page transitions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main>{children}</main>
      </body>
    </html>
  );
}
