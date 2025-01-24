import Image,  { StaticImageData } from "next/image";
import Link from "next/link";
import UpRightArrow from "public/UpRightArrow.svg";

interface PostBoxProps {
    title: string;
    description: string;
    image: StaticImageData;
    id: string;
}


export default function PostBox(props:PostBoxProps) {
    return (<div className="w-[90vw] h-[60vh] md:h-[30vh] m-4 border-2 border-black dark:border-white rounded-sm grid grid-cols-12 grid-rows-12">
        <div className=" col-start-1 row-start-1 md:col-start-1 md:row-start-1 relative row-span-6 md:row-span-full col-span-full md:col-span-4 flex justify-center items-center">
            <Image src={props.image} alt={props.title} layout="fill" className="p-4 object-contain" />
        </div>
        <div className="col-start-1 col-span-full row-start-7 md:col-start-5 md:row-start-2 flex justify-center md:justify-normal" >
            <p className="underline text-2xl md:text-4xl lg:text-5xl font-light italic">
                {props.title}
            </p>
        </div>
        <div className="p-4 md:p-0 col-start-1 md:col-start-5 col-span-full row-start-8 md:row-start-5 row-span-8">
            <p className="text-sm md:text-base lg:text-xl font-light">
                {props.description}
            </p>
        </div>

        <div className="group col-start-8 md:col-start-5 col-span-full md:col-span-full row-start-12 md:row-start-11 row-span-3">
            <Link className="flex flex-row align-middle items-center" href={`/posts/${props.id}`}>
                <p className="group-hover:font-bold underline font-light text-base md:text-base lg:text-xl">Check Out More</p>
                <Image src={UpRightArrow} alt="arrow" className="dark:invert w-4 h-4 sm:w-6 sm:h-6 lg:w-8 lg:h-8 group-hover:-translate-y-1" />
            </Link>
        </div>
    </div>);
} 