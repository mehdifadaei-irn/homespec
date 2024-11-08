import { Metadata } from "next";
import "./globals.css";
import Providers from "@/providers/Providers";
import { robotoSans } from "@/constants/fonts";

export const metadata: Metadata = {
  title: "MyHomeSpec",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${robotoSans.className} antialiased`}>
        <Providers>
          {/* <DefaultLayout> */}
          {children}
          {/* <ClientOnly/> */}
          {/* </DefaultLayout> */}
        </Providers>
      </body>
    </html>
  );
}
