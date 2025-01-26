
import ProjectItem from "@/components/ProjectItem";
import SeniorCaucusWebsite from "public/portfolio/Senior_Caucus_Website.png";


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
                title="Senior Caucus Website"
                description="The Senior Caucus Website! This project is designed to provide information and updates about the Senior Caucus at our school."
                image={SeniorCaucusWebsite}
                link="https://github.com/Senior-Caucus/Senior-Caucus-Website"
            />

        </div>
        <div>
        </div>
    </>)
}