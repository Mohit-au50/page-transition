import "@/app/_styles/globals.css";
import type { Metadata } from "next";
import { inter } from "@/app/_ui/fonts";
import Wrapper from "@/app/_ui/wrapper";

export const metadata: Metadata = {
  title: "Page Transitions",
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
        <Wrapper>{children}</Wrapper>
      </body>
    </html>
  );
}
