"use client"

// import GrayBox from "public/grey.jpg";
import Image from "next/image";
import PersonPhoto from "public/ProfilePic.webp"

export default function Home() {
  return (
    <div className="w-full h-[50rem] grid grid-cols-12 grid-rows-12 ">
      <div className="relative inline-block z-10 ml-4 col-start-1 col-span-full row-start-2 sm:row-start-1 row-span-2 md:col-start-1 md:col-span-full md:row-start-3 md:row-span-1 md:ml-4 lg:col-start-1 lg:col-end-10 lg:row-start-3">
        <h1 className="text-5xl sm:text-6xl z-30">Hi, I&apos;m Elias! </h1>
        <span className="gap-x-0 mt-6 sm:mt-10 absolute opacity-75 inset-0 bottom-1 -z-10 bg-yellow-300 h-5 w-[17rem] sm:w-[22rem]" />
      </div>
      <p className="grid z-10 col-start-1 col-span-full ml-4 mt-4 text-sm  sm:text-base row-start-9 row-span-full sm:col-start-2 sm:col-end-11 sm:mt-2 sm:row-start-8 md:col-start-1  mr-0  md:col-end-7 md:mr-2 md:row-start-4 md:row-end-10 md:text-xl md:ml-4 lg:row-start-4 lg:row-end-11 lg:col-start-1 lg:col-end-6 lg:mr-4 lg:ml-4 font-light">
        Hi people of the internet, welcome to my website! I’m Elias, and I’m a bookworm, tech guy,
        and beekeeper. I’m
        a current freshman at Cornell University. I was part of a
        research program at Rutgers WINLAB, studying how machine learning can detect the behavior of untrained organisms,
        a beekeeper at various places, and a coder who likes weird projects :).
        The photo is from 2022, where I worked as an assistant beekeeper at the Brooklyn Bee Corps, which is part of City Growers.
      </p>
      {/* ! IDK if imma add a photo or not */}
      <div className="relative flex items-start justify-center col-start-1 col-span-full row-start-3 row-span-6 sm:col-start-1 sm:col-span-full sm:row-start-2 sm:mr-0 md:col-start-7 md:row-start-2 md:col-span-full md:mr-4 md:row-span-full lg:col-start-6 lg:col-span-6 lg:row-start-1 lg:row-span-full">
        <Image
          priority
          src={PersonPhoto}
          alt="Elias Xu"
          width={500}
          height={500}
          className="w-auto h-full sm:w-auto sm:h-full md:w-full md:h-auto lg:w-auto lg:h-full object-contain dark:brightness-75 z-0 rounded-sm"
        />
      </div>
    </div>
  );
}
