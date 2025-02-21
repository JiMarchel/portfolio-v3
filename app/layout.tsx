import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const neue = localFont({
  src: [
    {
      path: "../app/fonts/NeueMontreal-Bold.otf",
      style: "bold",
    },
    {
      path: "../app/fonts/NeueMontreal-Regular.otf",
      style: "normal",
    },
    {
      path: "../app/fonts/NeueMontreal-Italic.otf",
      style: "italic",
    },
  ],
});

export const metadata: Metadata = {
  title: "Moch Jimmy Marchel",
  description: "A portfolio web by Moch Jimmy Marchel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${neue.className}  antialiased bg-[#fafafa]`}>
        {children}
      </body>
    </html>
  );
}
