// https://nextjs.org/learn-pages-router/basics/dynamic-routes/render-markdown
import PostBox from "@/components/PostBox";
import Panda from "public/docImages/Proompter.png";
import WebsiteImage from "public/docImages/WebsiteHeader.png";


export default function Posts() {
    return (<>
        <div className="w-full h-[10vh] grid grid-cols-12 grid-rows-12 ">
            <div className="ml-4 md:ml-0 relative inline-block z-10 col-start-1 col-end-4 row-start-1 align-middle text-center">
                <div className="relative inline-block">
                    <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl align-middle">Posts</h1>
                    <span className="gap-x-0 mt-5 sm:mt-7  md:mt-10 lg:mt-14  absolute opacity-75 inset-0 bottom-1 -z-10 bg-cyan-600 h-6 sm:h-8 w-[8rem] sm:w-[10rem] md:w-[11.7rem] lg:w-[16rem]" />
                </div>
            </div>
            <div className="flex flex-col justify-center align-middle col-start-6 sm:col-start-5 md:col-start-4 col-span-10 row-start-1 row-span-full">
                <p className="text-base sm:text-xl md:text-2xl font-light">
                    Here are some random yapps and ramblings; I&apos;ll be posting unoccasionally.
                </p>
            </div>
        </div>
        <div className="w-full flex justify-center items-center flex-col">
            <PostBox
                title="The Readme for this Website"
                image={WebsiteImage}
                description="Here's the readme for the website, btw."
                id="readme"
            />
            <PostBox
                title="First Test Post"
                image={Panda}
                description="First Test Post!!!"
                id="test"
            />
        </div>
    </>)
}