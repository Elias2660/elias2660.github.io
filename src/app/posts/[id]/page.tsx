
// https://nextjs.org/learn-pages-router/basics/dynamic-routes/render-markdown

// path: src/app/posts/[id]/page.tsx

interface Params {
    id: string;
}

// Generate the static params for the [id] route
export async function generateStaticParams(): Promise<Params[]> {
    // Replace this with actual IDs fetched from your data source
    const posts = [
        { id: "1" },
        { id: "2" },
        { id: "3" },
    ];
    return posts.map((post) => ({ id: post.id }));
}

export default async function page({ params }: { params: Params }) {
    const id = await params.id;
    return <div>My Post: {id}</div>;
}
