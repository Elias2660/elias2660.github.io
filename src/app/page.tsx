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
            <p className="z-10 col-start-2 sm:text-lg row-start-6 col-end-10 sm:col-start-2    sm:col-end-7 sm:row-start-5 sm:row-end-12 md:text-xl font-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            {/* ! IDK if imma add a photo or not */}
            <Image src={PersonPhoto} alt="Elias Xu" className="col-start-4 col-span-8 row-start-3 row-span-full dark:brightness-50 z-0 sm:col-start-6 sm:col-span-5 sm:row-start-2 sm:row-span-8 w-fit h-fit" />
        </div>
    );
}
