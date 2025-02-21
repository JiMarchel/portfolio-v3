import { louzeDisplay, manuka } from "@/app/fonts/fonts";
import Image from "next/image";

export const Heading = () => {
  return (
    <div className="min-h-fit grid grid-cols-3 gap-2 text-black">
      <div className="col-span-1 w-full h-full">
        <h1
          className={`text-[37.6cqmin] tracking-wide leading-none rotate-90  whitespace-nowrap ${manuka.className} uppercase `}
        >
          Shonen Coder.
        </h1>
      </div>

      <div className="col-span-2 mt-3 border space-y-8">
        <div className="space-y-2">
          <Image
            src="/knight.jpg"
            alt="knight"
            width={900}
            height={900}
            className="border-2 border-primary rounded-lg"
          />
          <p className="text-center font-medium text-xs mx-5 text-muted-foreground uppercase">
            (Scrollnya pelan pelan bang...)
          </p>
        </div>
        <div>
          <p
            className={`${louzeDisplay.className} italic text-6xl text-[#fafafa]`}
            style={{
              WebkitTextStroke: "1px black", // Garis luar hitam
            }}
          >
            Code
          </p>
          <p className={`${louzeDisplay.className} text-6xl leading-[3.5rem]`}>
            With Figthing Spirit
          </p>
          <p className="leading-4 font-medium mt-2">
            The personal site and portfolio of Moch Jimmy Marchel, an
            Indonesia-based web developer.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};
