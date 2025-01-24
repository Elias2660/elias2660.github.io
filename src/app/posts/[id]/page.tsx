
// https://nextjs.org/learn-pages-router/basics/dynamic-routes/render-markdown

// path: 

interface Params {
    id: string;
}

export default async function page({ params }: { params: Promise<Params> }) {
    const id = (await params).id;
    return <div>My Post: {id}</div>
}