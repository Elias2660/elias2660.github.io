import UpRightArrow from "public/UpRightArrow.svg";
import Image, { StaticImageData } from "next/image";

interface ProjectItemProps {
    title: string;
    description: string;
    image: StaticImageData;
    link: string;
}

export default function ProjectItem(props: ProjectItemProps) {
    return (<div className="w-[90vw] h-[30rem] md:h-[15rem] m-2 border-2 border-black dark:border-white rounded-sm grid grid-cols-12 grid-rows-12">
        <div className=" col-start-1 row-start-1 md:col-start-1 md:row-start-1 relative row-span-7 md:row-span-full col-span-full md:col-span-5 flex justify-center items-center">
            <Image src={props.image} alt={props.title} className="h-full w-auto p-4 object-contain" />
        </div>
        <div className="flex col-start-1 flex-row justify-center md:justify-start col-span-full row-start-8 md:col-start-6 md:row-start-2">
            <p className={`underline lg:text-left ${props.title.length > 13 ? 'text-2xl md:text-3xl lg:text-4xl' : 'text-4xl md:text-4xl lg:text-5xl'} font-bold`}>
            {props.title}
            </p>
        </div>
        <div className="p-4 md:p-0 flex justify-center text-center md:block md:text-left col-start-1 md:col-start-6 col-span-full row-start-9 md:row-start-5 row-span-8">
            <p className="text-base md:text-lg lg:text-xl font-light">
                {props.description}
            </p>
        </div>

        <div className="group col-start-8   text-right md:col-start-6 col-span-full md:col-span-full row-start-12 md:row-start-11 row-span-3">
            <a target="_blank" className="flex flex-row justify-end mr-2 align-right items-center" href={props.link}>
                <p className="group-hover:font-bold underline font-light text-xl md:text-base lg:text-xl">Check Out</p>
                <Image src={UpRightArrow} alt="arrow" className="dark:invert w-4 h-4 sm:w-6 sm:h-6 lg:w-8 lg:h-8 group-hover:-translate-y-1" />
            </a>
        </div>
    </div>);
}