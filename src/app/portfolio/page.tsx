
import Image from "next/image";
import UpRightArrow from "public/UpRightArrow.svg";


export default function Portfolio() {
    return (<>
        <div className="w-full h-[40vh] grid grid-cols-12 grid-rows-12 ">
            <div className="relative inline-block z-10 col-start-6 col-span-2 row-start-2 align-middle text-center">
                <h1 className="text-7xl">Portfolio</h1>
                <span className="gap-x-0 mt-10 absolute opacity-75 inset-0 bottom-1 -z-10 bg-purple-700 h-8 w-[18rem]" />
            </div>
            <div className="col-start-2 col-span-10 row-start-8 row-span-full">
                <p className="text-2xl">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                </p>
            </div>
        </div>
        {/* container for the  */}
        <div className="w-full h-[100vh] flex justify-center items-center">
            <div className="w-[90vw] h-[30vh] m-4 border-2 border-black rounded-sm grid grid-cols-12 grid-rows-12">
                <div className="bg-gray-900 m-3 col-start-1 row-start-1 row-span-full col-span-4" />
                <div className="col-start-5 col-span-full row-start-2 relative inline-block" >
                    <p className="underline text-5xl font-light">
                        Project 1
                    </p>
                    <span className="gap-x-0 mt-6 absolute opacity-75 inset-0 bottom-1 -z-10 bg-purple-700 h-8 w-[12rem]" />
                </div>
                <div className="col-start-5 col-span-full row-start-5 row-span-8">
                    <p className="text-xl font-light">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                </div>
                <div className="group col-start-5 col-span-full row-start-11 row-span-1 flex flex-row align-middle items-center">
                    <p className="group-hover:font-bold underline font-light text-xl">Check Out More</p>
                    <Image src={UpRightArrow} alt="arrow" className=" w-8 h-8 group-hover:-translate-y-1" />
                </div>
            </div>
        </div>
        <div>

        </div>
    </>)
}