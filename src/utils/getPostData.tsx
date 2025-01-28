import path from 'path';
import fs from 'fs';
import { remark } from 'remark';
import html from 'remark-html';
import matter from 'gray-matter';
import remarkGfm from 'remark-gfm';
import remarkBreaks from 'remark-breaks';

export async function getPostData(id: string) {
    const fullPath = path.join('public/docs', `${id}.md`);
    if (!fs.existsSync(fullPath)) {
        return null;
    }
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Parse the post metadata section
    const matterResult = matter(fileContents);

    // Process the Markdown content
    const processedContent = await remark()
        .use(html)
        .process(matterResult.content);

    const contentHtml = processedContent.toString();

    // Combine the data with the id and contentHtml
    return {
        id,
        contentHtml,
        ...matterResult.data,
    };
}
