
// import Link from "next/link"import Image from "next/image";
// import Sun from "public/Sun.svg";

"use client"
import Moon from "public/Moon.png";
import Sun from "public/Sun.png";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from 'next/navigation'


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
            <Link href="/" className="text-xl col-start-1 row-start-1 hover:font-bold">
                e@web:{pathname}
            </Link>
            <Link href="/" className="text-xl col-start-4 lg:col-start-7 row-start-1 hover:font-bold">
                /
            </Link>
            <Link href="/about" className="text-xl col-start-6 lg:col-start-8 row-start-1 hover:font-bold">
                /about
            </Link>
            <Link href="/portfolio" className="text-xl col-start-8 lg:col-start-9 row-start-1 hover:font-bold">
                /portfolio
            </Link>
            <Link href="/posts" className="text-xl col-start-10 lg:col-start-10 row-start-1 hover:font-bold">
                /posts
            </Link>
            <button onClick={toggleDarkMode} className="col-start-12 row-start-1">
                <Image
                    src={isDarkMode ? Sun : Moon}
                    alt={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
                    className="h-7 w-7 align-middle hover:scale-105"
                />
            </button>
        </nav>
    </>)
}

