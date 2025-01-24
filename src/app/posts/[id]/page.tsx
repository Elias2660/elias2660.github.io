
// https://nextjs.org/learn-pages-router/basics/dynamic-routes/render-markdown

// path: src/app/posts/[id]/page.tsx

export default async function Page({ params }: { params: { id: Promise<string> } }) {
    const id = await params.id;
    return <div>My Post: {id}</div>;
}
