import Rutgers from "public/logos/rutgers.png";
import ResumeItem from "@/components/resumeItem";
import Insta from "public/instagram.svg";
import Linkedin from "public/linkedin.svg";
import Github from "public/github.svg";
import Facebook from "public/facebook.svg";
import Image from "next/image";
import Sunset from "public/sunset.jpg"


export default function About() {
    return (<>
        <div className="h-[80vh] md:h-[70vh] w-full grid grid-cols-12 grid-rows-12 ">
            <div className="relative inline-block ml-4 mt-4 col-start-1 col-span-full row-start-1 sm:row-start-2 row-span-1 ">
                <h1 className="text-7xl">
                    About Me
                </h1>
                <span className="gap-x-0 mt-10 absolute opacity-75 inset-0 bottom-1 -z-10 bg-cyan-600 h-5 w-[22rem]" />
            </div>
            <p className="text-base sm:text-base lg:text-xl ml-10 font-light col-start-1 col-end-11 row-start-3 sm:row-start-4 lg:row-start-4 row-end-12 sm:col-end-7">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            {/* future image here */}
            <Image src={Sunset} alt="sunset in nyc" className="blur-md sm:blur-none dark:brightness-90 dark:contrast-100 brightness-125 contrast-75 col-start-4 col-end-11 sm:col-start-6 md:col-start-7  md:col-end-11 lg:col-start-7 sm:col-end-12 row-start-3 text-sm sm:text-base row-span-full -z-20" />
            <div className="col-start-2 col-span-6 row-start-11 sm:row-start-10 row-span-full relative inline-block">
                <p className="text-lg">
                    Socials
                </p>
                <span className="gap-x-0 mt-3 absolute opacity-75 inset-0 bottom-1 -z-10 bg-red-700 h-3 w-[4rem]" />
            </div>
            <div className="row-start-12 sm:row-start-11 col-start-2 col-end-11 sm:col-end-6 lg:col-end-4 flex justify-between align-middle">
                <a target="_blank" href="https://www.linkedin.com/in/elias-xu-300388282/" className="z-10 hover:-translate-y-2 hover:scale-105"><Image src={Linkedin} alt="Linkedin" className={`w-8 h-8 dark:invert`} /></a>
                <a target="_blank" href="https://www.instagram.com/piquantreward/" className="z-10 hover:-translate-y-2 hover:scale-105"><Image src={Insta} alt="Instagram" className={`w-8 h-8 dark:invert`} /></a>
                <a target="_blank" href="https://github.com/Elias2660" className="z-10 hover:-translate-y-2 hover:scale-105"><Image src={Github} alt="Github" className={`w-8 h-8 dark:invert`} /></a>
                <a target="_blank" href="https://www.facebook.com/profile.php?id=100060917898759" className="z-10 hover:-translate-y-2 hover:scale-105"><Image src={Facebook} alt="Facebook" className={`w-8 h-8 dark:invert`} /></a>
            </div>
        </div>


        <div className="w-full h-10" />

        {/* WORK EXPERIENCE */}
        <div className="flex flex-col items-center justify-center w-full">
            <div className="relative inline-block w-full h-[10vh] pt-4 pl-10">
                <h1 className="text-4xl sm:text-5xl underline">
                    Work Experience
                </h1>
                <span className="ml-10 gap-x-0 mt-8 sm:mt-10 absolute opacity-75 inset-0 bottom-1 -z-10 bg-green-700 h-5 w-[19rem] sm:w-[25rem]" />
            </div>
            <ResumeItem
                title="Researcher"
                organization="Rutgers Winlab"
                date="August 2023 - Present"
                image={Rutgers}
                description="Analyze bee image data using machine learning; study the impact of electromagnetic waves on bees; rewrite data pipeline"
            />
            <div className="w-full h-10" />
            <ResumeItem
                title="Researcher"
                organization="Rutgers Winlab"
                date="August 2023 - Present"
                image={Rutgers}
                description="Analyze bee image data using machine learning; study the impact of electromagnetic waves on bees; rewrite data pipeline"
            />
            <div className="w-full h-[10vh] " />

            {/* EDUCATION */}
            <div className="relative inline-block w-full h-[10vh] pt-4 pl-10">
                <h1 className="text-4xl sm:text-5xl underline">
                    Education
                </h1>
                <span className="ml-10 gap-x-0 mt-8 sm:mt-10 absolute opacity-75 inset-0 bottom-1 -z-10 bg-purple-800 h-5 w-[11rem] sm:w-[14.5rem]" />
            </div>

            {/* AWARDS */}
            <div className="w-[00vw] h-[10vh]" />
            <div className="relative inline-block w-full h-[10vh] pt-4 pl-10">
                <h1 className="text-4xl sm:text-5xl underline">
                    Awards
                </h1>
                <span className="ml-10 gap-x-0 mt-8 sm:mt-10 absolute opacity-75 inset-0 bottom-1 -z-10 bg-amber-700 h-5 w-[9rem] sm:w-[11rem]" />
            </div>
        </div>

    </>)
}