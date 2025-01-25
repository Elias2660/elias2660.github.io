"use client"

// import GrayBox from "public/grey.jpg";
import Image from "next/image";
import PersonPhoto from "public/ProfilePic.png"

export default function Home() {
    return (
        <div className="w-full h-[90vh] grid grid-cols-12 grid-rows-12 ">
            <div className="relative inline-block z-10 col-start-2 col-span-full row-start-2 row-span-2 sm:col-start-2 sm:col-end-10 sm:row-start-3">
                <h1 className="text-6xl z-30">Hi, I&apos;m Elias! </h1>
                <span className="gap-x-0 mt-10 absolute opacity-75 inset-0 bottom-1 -z-10 bg-yellow-300 h-5 w-[22rem]" />
            </div>
            <p className="z-10 col-start-2 sm:text-lg row-start-6 col-end-10 sm:col-start-2    sm:col-end-7 sm:row-start-5 sm:row-end-12 md:text-xl font-light">
                Hi people, and welcome to my website! I’m Elias, and I’m a bookworm, tech guy, and beekeeper. I’m currently a second semester senior at Stuyvesant High School, (and if all goes well) a rising freshman at Cornell University. I’m currently a researcher at Rutgers WINLAB, studying how machine learning can detect the behavior of untrained organisms, a beekeeper at various organizations, and a coder for different organizations :). The photo is from 2022, where I worked as an assistant beekeeper at the Brooklyn Bee Corps, which is part of City Growers.
            </p>
            {/* ! IDK if imma add a photo or not */}
            <Image src={PersonPhoto} alt="Elias Xu" className="col-start-4 col-span-8 row-start-3 row-span-full dark:brightness-75 z-0 sm:col-start-6 sm:col-span-5 sm:row-start-2 sm:row-span-8 w-fit h-fit" />
        </div>
    );
}
