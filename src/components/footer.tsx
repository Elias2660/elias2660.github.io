"use client"

import Image from "next/image";
import UpArrow from "public/upArrow.svg";
import Insta from "public/instagram.svg";
import Linkedin from "public/linkedin.svg";
import Github from "public/github.svg";
import Facebook from "public/facebook.svg"
import Link from "next/link";
import UpRightArrow from "public/UpRightArrow.svg";

export default function Footer() {
    const date = new Date();
    const year = date.getFullYear();

    return (<>
        <footer className="mt-4 w-full h-[13rem] grid grid-cols-12 grid-rows-12 items-center">
            <button onClick={() => jump("top")} className="group col-start-1 col-span-full row-start-1 row-span-1 flex justify-left sm:pl-10 align-middle">
                <Image src={UpArrow} alt="Up Arrow" className="group-hover:-translate-y-1 w-8 h-8 dark:invert" />
                <p className="mt-1 italic font-light group-hover:underline">
                    Back to top
                </p>
            </button>
            <div className="col-start-1 col-span-full row-start-2 row-span-1 mb-2 text-center">
                <p className="italic font-light">
                    Socials
                </p>
            </div>
            <div className="col-start-3 col-end-11 sm:col-start-4 sm:col-end-10 md:col-start-6 md:col-end-8 row-start-3 row-span-2 flex justify-between align-middle">
                <a target="_blank" href="https://www.linkedin.com/in/elias-xu-300388282/" className="z-10 hover:-translate-y-2 hover:scale-105"><Image src={Linkedin} alt="Linkedin" className={`w-8 h-8 dark:invert`} /></a>
                <a target="_blank" href="https://www.instagram.com/piquantreward/" className="z-10 hover:-translate-y-2 hover:scale-105"><Image src={Insta} alt="Instagram" className={`w-8 h-8 dark:invert`} /></a>
                <a target="_blank" href="https://github.com/Elias2660" className="z-10 hover:-translate-y-2 hover:scale-105"><Image src={Github} alt="Github" className={`w-8 h-8 dark:invert`} /></a>
                <a target="_blank" href="https://www.facebook.com/profile.php?id=100060917898759" className="z-10 hover:-translate-y-2 hover:scale-105"><Image src={Facebook} alt="Facebook" className={`w-8 h-8 dark:invert`} /></a>
            </div>
            <div className="col-start-1 col-span-full row-start-6 row-span-1 text-center mb-3">
                <p className="italic font-light">Pages</p>
            </div>
            <div className="col-start-2 col-end-12 sm:col-start-3 sm:col-end-11 md:col-start-5 md:col-end-9 row-start-7 row-span-1 flex justify-between align-middle text-2xl">
                <Link href="/" className="hover:font-bold">/</Link>
                <Link href="/about" className="hover:font-bold">/about</Link>
                <Link href="/portfolio" className="hover:font-bold">/portfolio</Link>
                <Link href="/posts" className="hover:font-bold">/posts</Link>
            </div>
            <a href="https://github.com/Elias2660/elias2660.github.io" className="group col-start-1 sm:col-start-1 md:col-start-1 lg:col-start-1 col-span-full row-start-9 row-span-1 text-center flex justify-center flex-row ">
                <p className="group-hover:font-extrabold text-xs font-semibold inline underline">
                    Check out the website&apos;s source code!
                </p>
                <Image src={UpRightArrow} alt="Up Right Arrow" className=" group-hover:-translate-y-1 w-4 h-4 dark:invert inline" />
            </a>
            <div className="col-start-1 col-span-full row-start-11 row-span-1 text-center">
                <p className="text-sm font-semibold">© {year} Elias Xu</p>
            </div>
            <div className="col-start-1 col-span-full row-start-12 row-span-1 text-center">
                <p className="text-sm font-semibold">All rights reserved</p>
            </div>

        </footer ></>);
}

function jump(h: string) {
    const target = document.getElementById(h);
    if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
    } else {
        console.warn(`Element with ID "${h}" not found.`);
    }
}