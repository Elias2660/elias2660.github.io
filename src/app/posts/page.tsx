
export default function Posts() {
    return (<>
        <div className="w-full h-[40vh] grid grid-cols-12 grid-rows-12 ">
            <div className="relative inline-block z-10 col-start-2 md:col-start-6 col-span-2 row-start-2 align-middle text-center">
                <h1 className="text-7xl">Posts</h1>
                <span className="gap-x-0 mt-10 absolute opacity-75 inset-0 bottom-1 -z-10 bg-purple-700 h-8 w-[14rem]" />
            </div>
            <div className="col-start-2 col-span-10 row-start-6 row-span-full">
                <p className="text-2xl font-light">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                </p>
            </div>
        </div>
    </>)
}