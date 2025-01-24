// 

'use client' // Error boundaries must be Client Components
import Link from "next/link";
import Image from "next/image";
import UpRightArrow from "public/UpRightArrow.svg";

export default function PageNotFound() {
    return (
        // global-error must include html and body tags
        <div className="w-[100vw] h-[90vh] flex flex-col justify-center items-center text-center">
            <div className=" relative inline-block">
                <div className="text-5xl sm:text-7xl md:text-8xl">Page not found</div>
                <span className="gap-x-0 mt-6 sm:mt-11 md:mt-16 absolute opacity-75 inset-0 bottom-1 -z-10 bg-cyan-600 h-5 w-[22rem] sm:w-[32rem] md:w-[43rem]" />

            </div>
            <div className="flex flex-col jistify-center item-center group">
                <Link href="/">
                    <p className="inline group-hover:underline text-3xl">
                        Go Back to Home
                    </p>
                    <Image src={UpRightArrow} alt="arrow" className="mb-2 -ml-1 group-hover:-translate-y-2 inline dark:invert" />
                </Link>
            </div>
        </div>


    )
}