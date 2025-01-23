import { StaticImageData } from "next/image";
import Image from "next/image";

interface ResumeItemProps {
    title: string;
    organization: string;
    date: string;
    description: string;
    image: StaticImageData;
}


export default function ResumeItem(props: ResumeItemProps) {
    return (
        <>
            <div className="h-full w-full grid grid-cols-12 fill grid-rows-12 md:grid-rows-2 gap-5">
                <Image src={props.image} alt="logo" className="dark:invert object-fit col-start-1 col-span-2 sm:col-span-2 md:col-span-2 lg:col-span-1 row-start-1 row-span-2  sm:row-span-1 md:row-span-2 lg:row-span-1" />
                <div className="col-start-3 sm:col-start-3 md:col-start-3 lg:col-start-2 col-span-full row-start-1 ">
                    <h1 className="text-xl sm:text-2xl ">{props.title}</h1>
                </div>
                <div className="col-start-1 md:col-start-3 lg:col-start-2 col-span-full row-start-4 sm:row-start-5 md:row-start-6 row-span-full">
                    <p className="text-xs sm:text-sm">{props.organization}</p>
                    <p className="text-xs sm:text-sm">{props.date}</p>
                    <p className="text-sm sm:text-base">{props.description}</p>
                </div>
            </div>
        </>
    )
}