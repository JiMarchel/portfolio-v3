import { Bebas_Neue } from "next/font/google";
import localFont from "next/font/local";

export const bebas_Neue = Bebas_Neue({
  subsets: ["latin"],
  style: ["normal"],
  weight: ["400"],
});

export const manuka = localFont({
  src: [
    {
      path: "../fonts/ManukaCondensed-Black-BF663c33da63cae.otf",
      style: "bold",
      weight: "900",
    },
  ],
});

export const louzeDisplay = localFont({
  src: [
    {
      path: "../fonts/LouizeDisplay-Italic.ttf",
    },
  ],
});
