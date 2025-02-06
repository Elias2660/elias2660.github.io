
import ProjectItem from "@/components/ProjectItem";
import SeniorCaucusWebsite from "public/portfolio/Senior_Caucus_Website.webp";
import RutgersBeeImage from "public/portfolio/BeeZ.webp";
import JuniorCaucusWebsite from "public/portfolio/JuniorCaucusWeb.webp";
import ProompterImage from "public/portfolio/Proompter.webp";

export default function Portfolio() {
    return (<>
        <div className="w-full h-[7rem] sm:h-[7.5rem] md:h-[8rem] grid grid-cols-12 grid-rows-12 ">
            <div className="relative inline-block z-10 col-start-1 col-span-full row-start-1 align-middle text-center">
                <h1 className="text-6xl sm:text-7xl flex justify-center items-center">Portfolio</h1>
                <span className="gap-x-0 mt-8 sm:mt-10 absolute opacity-75 inset-0 bottom-1 -z-10 bg-purple-700 h-6 sm:h-8 w-[15rem] sm:w-[18rem] left-1/2 transform -translate-x-1/2" />
            </div>
            <div className="col-start-2 col-span-10 row-start-8 md:row-start-8 flex align-middle justify-center row-span-full">
                <p className="text-sm sm:text-base md:text-xl font-light">
                    Here’s a list of some of my favorite personal projects :)! Don’t hesitate to check them out!
                </p>
            </div>
        </div>
        {/* container for the  */}
        <div className="w-full flex justify-center items-center flex-col">
        <ProjectItem
                title="Proompter"
                description="stuyai's discord bot, which allows users to run multiple different models in our server."
                image={ProompterImage}
                link="https://github.com/stuyai/Proompter"
            />

            <ProjectItem
                title="Unified Bee Runner"
                description="Unified Bee Runner is a pipeline for processing and analyzing bee-related datasets, built for the Rutgers WINLAB Behavior Analysis Project."
                image={RutgersBeeImage}
                link="https://github.com/Elias2660/Unified-bee-Runner"
            />

            <ProjectItem
                title="Stuy SC Website"
                description="The Senior Caucus Website! This project is designed to provide information and updates about the Senior Caucus at our school."
                image={SeniorCaucusWebsite}
                link="https://github.com/Senior-Caucus/Senior-Caucus-Website"
            />

            <ProjectItem
                title="Stuy JC Website"
                description="This project was designed to provide information and updates about the Junior Caucus 2023-2024 at our school."
                image={JuniorCaucusWebsite}
                link="https://github.com/Junior-Caucus-SU/NextJS-Rewrite"
            />
        </div>
        <div>
        </div>
    </>)
}