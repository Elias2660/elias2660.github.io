// https://nextjs.org/learn-pages-router/basics/dynamic-routes/render-markdown
import PostBox from "@/components/PostBox";
import Panda from "public/docImages/DALL·E 2022-10-10 14.56.21 - pandas library oil pastel.png";

export default function Posts() {
    return (<>
        <div className="w-full h-[40vh] grid grid-cols-12 grid-rows-12 ">
            <div className="relative inline-block z-10 col-start-2 md:col-start-6 col-span-2 row-start-2 align-middle text-center">
                <h1 className="text-7xl">Posts</h1>
                <span className="ml-5 gap-x-0 mt-10 absolute opacity-75 inset-0 bottom-1 -z-10 bg-cyan-600 h-8 w-[11.4rem]" />
            </div>
            <div className="col-start-2 col-span-10 row-start-6 row-span-full">
                <p className="text-2xl font-light">
                    Here are some random yapps and ramblings; I&apos;ll be posting unoccasionally.
                </p>
            </div>
        </div>
        <div className="w-full flex justify-center items-center flex-col">
            <PostBox
                title="First Test Post"
                image={Panda}
                description="First Test Post!!!"
                id="test"
            />
        </div>
    </>)
}