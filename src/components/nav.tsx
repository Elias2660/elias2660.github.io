
// import Link from "next/link"import Image from "next/image";
// import Sun from "public/Sun.svg";

"use client"
import Moon from "public/Moon.png";
import Sun from "public/Sun.png";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from 'next/navigation'
import darkMenu from "public/darkMenu.png";
import lightMenu from "public/lightMenu.png";


export default function Nav() {

    const pathname = usePathname()

    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        // Check the initial theme preference
        const isDark = document.body.classList.contains("dark");
        setIsDarkMode(isDark);
    }, []);

    const toggleDarkMode = () => {
        document.body.classList.toggle("dark");
        setIsDarkMode((prevMode) => !prevMode);
    };

    return (<>
        <nav className="w-full h-14 grid grid-cols-12 grid-rows-1 p-4">
            <Link href="/" className="text-xl col-start-1 row-start-1 font-bold hover:font-extrabold">
                elias@web:{pathname}
            </Link>
            <div className="col-start-5 md:col-start-6 lg:col-start-8 col-end-11 row-start-1 flex justify-between">
                <Link href="/" className="invisible sm:visible text-xl row-start-1 hover:font-bold">
                    /
                </Link>
                <Link href="/about" className="invisible sm:visible text-xl row-start-1 hover:font-bold">
                    /about
                </Link>
                <Link href="/portfolio" className="invisible sm:visible text-xl  row-start-1 hover:font-bold">
                    /portfolio
                </Link>
                <Link href="/posts" className="invisible sm:visible text-xl row-start-1 hover:font-bold">
                    /posts
                </Link>
            </div>
            <button onClick={toggleDarkMode} className="col-start-11 sm:col-start-12 row-start-1">
                <Image
                    src={isDarkMode ? Sun : Moon}
                    alt={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
                    className="h-7 w-7 align-middle hover:scale-105"
                />
            </button>
            {/* the dropdown */}
            <div className="visible sm:invisible group inline-block relative col-start-12 row-start-1 h-14 w-10">
                <button className="visible sm:invisible">
                    <Image
                        src={isDarkMode ? lightMenu : darkMenu}
                        alt={isDarkMode ? "light Menu" : "dark Menu"}
                        className="h7 w-7 align-middle hover:scale-105"
                    />
                </button>
                <div className="invisible group-hover:visible absolute right-3 z-10">
                    <Link href="/" className=" text-xl block hover:font-bold">
                        /
                    </Link>
                    <Link href="/about" className=" text-xl block hover:font-bold">
                        /about
                    </Link>
                    <Link href="/portfolio" className=" text-xl block hover:font-bold">
                        /portfolio
                    </Link>
                    <Link href="/posts" className=" text-xl block hover:font-bold">
                        /posts
                    </Link>
                </div>
            </div>
        </nav>
    </>)
}

