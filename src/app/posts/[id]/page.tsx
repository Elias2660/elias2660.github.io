
// https://nextjs.org/learn-pages-router/basics/dynamic-routes/render-markdown
// path: src/app/posts/[id]/page.tsx
import { getPostData } from "@/utils/getPostData";
import fs from 'fs';
import Image from "next/image";
import Link from "next/link";
import path from 'path';
import UpRightArrow from "public/UpRightArrow.svg";

interface Params {
    id: string;
}

// Generate the static params for the [id] route
export async function generateStaticParams(): Promise<Params[]> {
    // Replace this with actual IDs fetched from your data source
    const docsDirectory = path.join(process.cwd(), 'public/docs');
    const filenames = fs.readdirSync(docsDirectory);
    const posts = filenames.map((name) => ({
        id: name.replace(/\.md$/, ''),
    }));
    return posts.map((post) => ({ id: post.id }));
}


export default async function Page({ params }: { params: Promise<Params> }) {
    const { id } = await params;
    const postData = await getPostData(id);
    return (
        <>
            {postData !== null && (
                <div className="prose">
                    <div className="ml-4" dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
                </div>
            )}
            {
                postData === null && (
                    <div className="w-[100vw] h-[90vh] flex flex-col justify-center items-center text-center">
                        <div className=" relative inline-block">
                            <div className="text-5xl sm:text-7xl md:text-8xl">Post not found</div>
                            <span className="gap-x-0 mt-6 sm:mt-11 md:mt-16 absolute opacity-75 inset-0 bottom-1 -z-10 bg-cyan-600 h-5 w-[21rem] sm:w-[31rem] md:w-[42rem]" />

                        </div>
                        <div className="flex flex-col jistify-center item-center group">
                            <Link href="/posts">
                                <p className="inline group-hover:underline text-3xl">
                                    Go Back to Posts
                                </p>
                                <Image src={UpRightArrow} alt="arrow" className="mb-2 -ml-1 group-hover:-translate-y-2 inline dark:invert" />
                            </Link>
                        </div>
                    </div>
                )
            }
        </>
    );
}
