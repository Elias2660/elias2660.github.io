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
            <div className="h-[7rem] sm:h-[7.5rem] md:h-[8rem] lg:h-[8.5rem] w-[90vw] grid grid-cols-12 grid-rows-12 m-2">
                <Image src={props.image} alt="logo" height={500} width={500} className="dark:invert p-1 -pt-2 sm:p-3 w-full h-auto max-h-28 max-w-28 object-fit col-start-1 col-span-2 sm:col-span-2 md:col-span-2 lg:col-span-1 row-start-1 row-span-2  sm:row-start-1 sm:row-span-1 md:row-span-2 md:p-4 lg:p-0" />
                <div className="ml-2 col-start-3 sm:col-start-3 md:col-start-3 md:row-start-1 md:row-span-2 lg:col-start-2 lg:row-start-1 lg:row-span-2 col-span-full row-start-1 row-span-1">
                    <h1 className={`font-bold ${props.title.length >= 30 ? 'text-sm' : props.title.length >= 20 ? 'text-1xl' : 'text-2xl'} sm:text-2xl`}>{props.title}</h1>
                </div>
                <div className={`ml-2 col-start-3 md:col-start-3 col-span-full ${props.title.length > 20 ?"row-start-3":"row-start-4"} sm:row-start-4 md:row-start-4 lg:col-start-2 mt-1 row-span-full`}>
                    <p className="text-xs sm:text-sm">{props.organization}</p>
                    <p className="text-xs sm:text-sm italic">{props.date}</p>
                    <p className="text-xs sm:text-sm">{props.description}</p>
                </div>
            </div>
        </>
    )
}