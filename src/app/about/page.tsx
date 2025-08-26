import Rutgers from "public/logos/rutgers.webp";
import ResumeItem from "@/components/resumeItem";
import Insta from "public/instagram.svg";
import Linkedin from "public/linkedin.svg";
import Github from "public/github.svg";
import Facebook from "public/facebook.svg";
import Image from "next/image";
import Sunset from "public/sunset.webp"
import MeiWahImage from "public/logos/MeiWah.webp";
import CityGrowers from "public/logos/city_growers.webp";
import StuyLogo from "public/logos/Stuyvesant_High_School_logo.svg";
import UPennClassics from "public/logos/UPennClassics.webp";
import CornellLogo from "public/logos/cornell.webp";
import AstorApiaries from "public/logos/AstorApiaries.webp";
import USACOlogo from "public/logos/USACOlogo.webp";
import HRAS from "public/logos/HRAS.webp";
import ServiceInSchools from "public/logos/ServiceInSchools.webp";
import YaleCertamenLogo from "public/logos/YaleCertamenLogo.webp";

import NJCLlogo from "public/logos/njcl.webp";


export default function About() {
    return (<>
        <div className="h-[35rem] md:h-[40rem] w-full grid grid-cols-12 grid-rows-12 ">
            <div className="relative inline-block ml-4 mt-4 col-start-1 col-span-full row-start-1 sm:row-start-2 row-span-1 ">
                <h1 className="text-7xl">
                    About Me
                </h1>
                <span className="gap-x-0 mt-10 absolute opacity-75 inset-0 bottom-1 -z-10 bg-cyan-600 h-5 w-[20.75rem]" />
            </div>
            <p className="text-sm sm:text-base md:text-xl  ml-10 font-light col-start-1 col-end-11 row-start-5 sm:row-start-5  lg:row-start-5 row-end-12 sm:col-end-7">
                Here’s a short list of my professional activities for the past few years. Most of my coding projects will either be in the portfolio section of this website, or on my Github. I usually don’t post on Insta or Facebook, but I’ve also listed it for fun.
                Also, here&apos;s a photo of a sunset in NYC.
            </p>
            {/* future image here */}
            <Image src={Sunset} alt="sunset in nyc" className="object-contain w-auto h-full blur-md sm:blur-none dark:brightness-90 dark:contrast-100 brightness-125 contrast-75 col-start-4 col-end-12 sm:col-start-8 md:col-start-8  md:col-end-12 lg:col-start-8 sm:col-end-12 row-start-1 text-sm sm:text-base row-span-full -z-20" />
            <div className="col-start-2 col-span-6 row-start-11 sm:row-start-10 row-span-full relative inline-block">
                <p className="text-lg">
                    Socials
                </p>
                <span className="gap-x-0 mt-3 absolute opacity-75 inset-0 bottom-1 -z-10 bg-red-700 h-3 w-[3.8rem]" />
            </div>
            <div className="row-start-12 sm:row-start-11 col-start-2 col-end-11 sm:col-end-6 lg:col-end-4 flex justify-between align-middle">
                <a target="_blank" href="https://www.linkedin.com/in/elias-xu-300388282/" className="z-10 hover:-translate-y-2 hover:scale-105"><Image src={Linkedin} alt="Linkedin" className={`w-8 h-8 dark:invert`} /></a>
                <a target="_blank" href="https://www.instagram.com/piquantreward/" className="z-10 hover:-translate-y-2 hover:scale-105"><Image src={Insta} alt="Instagram" className={`w-8 h-8 dark:invert`} /></a>
                <a target="_blank" href="https://github.com/Elias2660" className="z-10 hover:-translate-y-2 hover:scale-105"><Image src={Github} alt="Github" className={`w-8 h-8 dark:invert`} /></a>
                <a target="_blank" href="https://www.facebook.com/profile.php?id=100060917898759" className="z-10 hover:-translate-y-2 hover:scale-105"><Image src={Facebook} alt="Facebook" className={`w-8 h-8 dark:invert`} /></a>
            </div>
        </div>


        <div className="w-full h-2" />

        {/* WORK EXPERIENCE */}
        <div className="flex flex-col items-center justify-center w-full">
            <div className="relative inline-block w-full h-[5rem] pt-4 pl-10">
                <h1 className="text-4xl sm:text-5xl underline">
                    Work Experience
                </h1>
                <span className="ml-10 gap-x-0 mt-8 sm:mt-10 absolute opacity-75 inset-0 bottom-1 -z-10 bg-green-700 h-5 w-[18.15rem] sm:w-[24.25rem]" />
            </div>
            <ResumeItem
                title="Researcher"
                organization="Rutgers WINLAB (Wireless Information Network Laboratory)"
                date="August 2023 - August 2025"
                image={Rutgers}
                description="Analyze animal behavior data using machine learning; study the impact of electromagnetic waves on bees."
            />
            <ResumeItem
                title="Assistant Teacher"
                organization="Mei Wah School"
                date="May 2023 - August 2024"
                image={MeiWahImage}
                description="Teach robotics and music to 30+ students; coordinate activities; set up class materials; redesign school site"
            />

            <ResumeItem
                title="Assistant Beekeeper"
                organization="City Growers"
                date="July 2022 - August 2023"
                image={CityGrowers}
                description="Manage rooftop hives across the city, along with working with other aspects of NYC's environmental movement"
            />


            <ResumeItem
                title="Assistant Beekeeper"
                organization="Hudson River Apiary Society"
                date="June 2022 - August 2024"
                image={HRAS}
                description="Worked with head for beekeeping, community outreach, and grant writing."
            />


            <ResumeItem
                title="Student Teacher"
                organization="Service in Schools Institute"
                date="April 2023 - June 2023"
                image={ServiceInSchools}
                description="Teach in a group younger students remotely about fast fashion"
            />


            {/* EDUCATION */}
            <div className="relative inline-block w-full h-[5rem] pt-4 pl-10">
                <h1 className="text-4xl sm:text-5xl underline">
                    Education
                </h1>
                <span className="ml-10 gap-x-0 mt-8 sm:mt-10 absolute opacity-75 inset-0 bottom-1 -z-10 bg-purple-800 h-5 w-[10.6rem] sm:w-[14.15rem]" />
            </div>

            <ResumeItem
                title="Undergraduate"
                organization="Cornell College of Engineering"
                date="Class of 2029"
                image={CornellLogo}
                description="Rising Freshman"
            />


            <ResumeItem
                title="High School Diploma"
                organization="Stuyvesant High School"
                date="Class of 2025"
                image={StuyLogo}
                description="Student Union, National Honor Society, CSdojo, stuyai, Stuy Classics"
            />


            <ResumeItem
                title="Beekeeping Apprenticeship"
                organization="Astor Apiaries"
                date="November 2021 - November 2022"
                image={AstorApiaries}
                description="Learned basics of beekeeping, including hive management, honey extraction, and bee biology"
            />

            <div className="relative inline-block w-full h-[5rem] pt-4 pl-10">
                <h1 className="text-4xl sm:text-5xl underline">
                    Awards
                </h1>
                <span className="ml-10 gap-x-0 mt-8 sm:mt-10 absolute opacity-75 inset-0 bottom-1 -z-10 bg-amber-700 h-5 w-[7.9rem] sm:w-[10.5rem]" />
            </div>


            <ResumeItem
                title="National Latin Exam"
                organization="National Junior Classical League"
                date=""
                image={NJCLlogo}
                description="2022, 2023, 2024 Summa Cum Laude (Gold)"
            />
            <ResumeItem
                title="National Medusa Mythology Exam"
                organization="National Junior Classical League"
                date=""
                image={NJCLlogo}
                description="2022 Silver Medalist, 2023 Gold Medalist, 2024 Bronze Medalist"
            />
            <ResumeItem
                title="National Etymology Exam"
                organization="National Junior Classical League"
                date=""
                image={NJCLlogo}
                description="2023 Silver Medalist, 2024 Bronze Medalist"
            />
            <ResumeItem
                title="National Vocabulary Exam"
                organization="National Junior Classical League"
                date=""
                image={NJCLlogo}
                description="2024 Bronze Medalist"
            />
            <ResumeItem
                title="UPenn Certamen"
                organization="UPenn Classics Committee"
                date="2024"
                image={UPennClassics}
                description="Semifinalist"
            />
               <ResumeItem
                title="Yale Certamen"
                organization="Yale Classics Committee"
                date="2024"
                image={YaleCertamenLogo}
                description="Semifinalist"
            />
            <ResumeItem
                title="USACO"
                organization="USA Computing Olympiad"
                date="2022 December"
                image={USACOlogo}
                description="2022 Silver Medalist"
            />
        </div>



    </>)
}