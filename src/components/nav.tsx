
// import Link from "next/link"import Image from "next/image";
// import Sun from "public/Sun.svg";

"use client"
import Moon from "public/Moon.webp";
import Sun from "public/Sun.webp";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from 'next/navigation'
import darkMenu from "public/darkMenu.webp";
import lightMenu from "public/lightMenu.webp";
import { useTheme } from "next-themes";
import Blank from "public/Blank.webp";

export default function Nav() {
    const [mounted, setMounted] = useState(false)
    const { setTheme, resolvedTheme } = useTheme()


    const pathname = usePathname()

    const toggleDarkMode = () => {
        setTheme(resolvedTheme === "dark" ? "light" : "dark")
    }

    useEffect(() => setMounted(true), [])

    return (<>
        <nav className="w-full h-12 grid grid-cols-12 grid-rows-1 items-center">
            <Link href="/" className={`pl-4 cols-span-2 text-xl col-start-1 row-start-1 font-bold hover:font-extrabold ${`elias@web:${pathname}`.length > 20 ? "sm:text-base md:text-xl" : ""}`}>
                {`elias@web:${pathname}`.length > 20 ? "elias@web:/../" + pathname.split("/").slice(-1)[0] : `elias@web:${pathname}`}
            </Link>
            <div className="items-center col-start-5 md:col-start-6 lg:col-start-8 col-end-11 row-start-1 flex justify-between">
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
            <button onClick={toggleDarkMode} className="col-start-11 sm:col-start-12 row-start-1" suppressHydrationWarning>
                {
                    !mounted &&
                    <Image
                        src={Blank}
                        width={36}
                        height={36}
                        sizes="36x36"
                        alt="Loading Light/Dark Toggle"
                        priority={false}
                        title="Loading Light/Dark Toggle"
                    />
                }
                {
                    mounted && <Image
                        src={resolvedTheme === "dark" ? Sun : Moon}
                        alt={resolvedTheme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
                        className="w-7 h-7 hover:scale-105"
                    />
                }
            </button>
            {/* the dropdown */}
            <div className="visible sm:invisible group inline-block relative col-start-12 row-start-1">
                <button className="visible sm:invisible" >
                    {
                        !mounted &&
                        <Image
                            src={Blank}
                            width={36}
                            height={36}
                            sizes="36x36"
                            alt="Loading Light/Dark Toggle"
                            priority={false}
                            title="Loading Light/Dark Toggle"
                        />
                    }
                    {
                        mounted && <Image
                            src={resolvedTheme === "dark" ? lightMenu : darkMenu}
                            alt={resolvedTheme === "dark" ? "light Menu" : "dark Menu"}
                            className="h-7 w-7 hover:scale-105"
                        />
                    }
                </button>
                <div className="invisible group-hover:visible absolute right-1 p-3 rounded-sm bg-white dark:bg-black z-50">
                    <Link href="/" className="text-xl block hover:font-bold">
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

