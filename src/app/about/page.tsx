
export default function About() {
    return (<>
        <div className="h-[60vh] w-full grid grid-cols-12 grid-rows-12 ">
            <div className="relative inline-block ml-4 mt-4 col-start-1 col-span-full row-start-2 row-span-1 ">
                <h1 className="text-7xl">
                    About Me
                </h1>
                <span className="gap-x-0 mt-10 absolute opacity-75 inset-0 bottom-1 -z-10 bg-cyan-600 h-5 w-[22rem]" />
            </div>
            <p className="text-xl font-light col-start-2 col-end-11 row-start-6 row-end-12 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <div className="col-start-7 col-span-4 row-start-3 row-span-full -z-20 bg-slate-600" />
        </div>
        <div className="h-[100vh] w-full grid grid-cols-12 grid-rows-12" >
            <div className="relative inline-block col-start-2 col-span-full row-start-2 row-span-1 ">
                <h1 className="text-5xl underline">
                    Work Experience
                </h1>
                <span className="gap-x-0 mt-8 absolute opacity-75 inset-0 bottom-1 -z-10 bg-green-700 h-5 w-[25rem]" />
            </div>
            <div className="col-start-2 col-end-11 row-start-3 row-span-3">
                <div className="h-full w-full grid grid-cols-12 grid-rows-2 gap-5">
                    <div className="bg-slate-500 col-start-1 col-span-2 row-start-1 row-span-1" />
                    <div className="col-start-3 col-span-full row-start-1 row-span-full">
                        <h1 className="text-3xl">Researcher</h1>
                        <p className="text-base">Rutgers Winlab</p>
                        <p className="text-base">New Brunswick</p>
                        <p className="text-sm">May 2021 - August 2021</p>

                    </div>
                </div>
            </div>

        </div>
        <div className="h-[100vh] w-full grid grid-cols-12 grid-rows-12" >
            <div className="relative inline-block col-start-2 col-span-full row-start-2 row-span-1 ">
                <h1 className="text-5xl underline">
                    Education
                </h1>
                <span className="gap-x-0 mt-8 absolute opacity-75 inset-0 bottom-1 -z-10 bg-orange-700 h-5 w-[15rem]" />
            </div>
            <div className="col-start-2 col-end-11 row-start-3 row-span-3">
                <div className="h-full w-full grid grid-cols-12 grid-rows-2 gap-5">
                    <div className="bg-slate-500 col-start-1 col-span-2 row-start-1 row-span-1" />
                    <div className="col-start-3 col-span-full row-start-1 row-span-full">
                        <h1 className="text-3xl">Researcher</h1>
                        <p className="text-base">Rutgers Winlab</p>
                        <p className="text-base">New Brunswick</p>
                        <p className="text-sm">May 2021 - August 2021</p>
                    </div>
                </div>
            </div>
        </div>
    </>)
}