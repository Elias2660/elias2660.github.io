
// https://nextjs.org/learn-pages-router/basics/dynamic-routes/render-markdown
// path: src/app/posts/[id]/page.tsx
import { getPostData } from "@/utils/getPostData";
import fs from 'fs';
import path from 'path';

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
        <div className="prose">
            <div className="ml-4" dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </div>
    );
}

