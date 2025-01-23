"use client"

// import GrayBox from "public/grey.jpg";
import Image from "next/image";
import PersonPhoto from "public/ProfilePic.png"

export default function Home() {
    return (
        <div className="w-full h-[90vh] grid grid-cols-12 grid-rows-12 ">
            <h1 className="z-10 col-start-2 col-span-4 row-start-3 text-6xl">Hi, I&apos;m Elias!</h1>
            <p className="z-10 col-start-2 col-end-7 row-start-5 row-end-12 text-xl font-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            {/* ! IDK if imma add a photo or not */}
            <Image src={PersonPhoto} alt="Elias Xu" className="z-0 col-start-7 col-span-5 row-start-2 row-span-8 w-fit h-fit" />
        </div>
    );
}
