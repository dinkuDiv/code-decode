import "../styles/globals.css";
import { Comfortaa } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

const comfortaa = Comfortaa({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export const metadata = {
  title: "Code Decode",
  description: "Encrypt & Decode Text",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
        />
      </head>
      <Analytics />
      <body className={comfortaa.className}>{children}</body>
    </html>
  );
}
