
import ProjectItem from "@/components/ProjectItem";
import SeniorCaucusWebsite from "public/portfolio/Senior_Caucus_Website.png";
import RutgersBeeImage from "public/portfolio/BeeZ.png";
import JuniorCaucusWebsite from "public/portfolio/JuniorCaucusWeb.png";
import ProompterImage from "public/portfolio/Proompter.png";

export default function Portfolio() {
    return (<>
        <div className="w-full h-[40vh] grid grid-cols-12 grid-rows-12 ">
            <div className="relative inline-block z-10 col-start-2 md:col-start-6 col-span-2 row-start-2 align-middle text-center">
                <h1 className="text-7xl">Portfolio</h1>
                <span className="gap-x-0 mt-10 absolute opacity-75 inset-0 bottom-1 -z-10 bg-purple-700 h-8 w-[18rem]" />
            </div>
            <div className="col-start-2 col-span-10 row-start-6 row-span-full">
                <p className="text-2xl font-light">
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
            <div className="w-full h-10" />
            <ProjectItem
                title="Unified Bee Runner"
                description="Unified Bee Runner is a pipeline for processing and analyzing bee-related datasets, built for the Rutgers WINLAB Behavior Analysis Project. This project includes several steps such as dataset creation, video conversion, data splitting, and model training."
                image={RutgersBeeImage}
                link="https://github.com/Elias2660/Unified-bee-Runner"
            />
            <div className="w-full h-10" />
            <ProjectItem
                title="Stuy Senior Caucus Website"
                description="The Senior Caucus Website! This project is designed to provide information and updates about the Senior Caucus at our school."
                image={SeniorCaucusWebsite}
                link="https://github.com/Senior-Caucus/Senior-Caucus-Website"
            />
            <div className="w-full h-10" />
            <ProjectItem
                title="Stuy Junior Caucus Website"
                description="This project was designed to provide information and updates about the Junior Caucus 2023-2024 at our school."
                image={JuniorCaucusWebsite}
                link="https://github.com/Junior-Caucus-SU/NextJS-Rewrite"
            />
        </div>
        <div>
        </div>
    </>)
}