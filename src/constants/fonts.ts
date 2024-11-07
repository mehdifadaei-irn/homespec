import localFont from "next/font/local";

export const robotoSans = localFont({
  src: [
    {
      path: "../../public/fonts/Roboto-Thin.woff2",
      weight: "100",
    },
    {
      path: "../../public/fonts/Roboto-Light.woff2",
      weight: "300",
    },
    {
      path: "../../public/fonts/Roboto-Regular.woff2",
      weight: "400",
    },
    {
      path: "../../public/fonts/Roboto-Medium.woff2",
      weight: "500",
    },
    {
      path: "../../public/fonts/Roboto-Bold.woff2",
      weight: "700",
    },
    {
      path: "../../public/fonts/Roboto-Black.woff2",
      weight: "900",
    },
  ],
  variable: "--font-sans",
});

export const geistSans = localFont({
  src: "../../public/fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

export const geistMono = localFont({
  src: "../../public/fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
