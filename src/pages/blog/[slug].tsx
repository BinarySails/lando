import fs from "fs";
import path from 'path';
import Markdown from "markdown-to-jsx";
import matter from 'gray-matter';
import { GetStaticPaths, GetStaticProps } from 'next';

// This function runs at build time and generates paths for all the posts
export const getStaticPaths: GetStaticPaths = async () => {
	const postsDirectory = path.join(process.cwd(), '/src/markdownPosts');
	const filenames = fs.readdirSync(postsDirectory);
	const slugs = filenames.map((filename) => filename.replace('.md', ''));

	const paths = slugs.map((slug) => ({
		params: { slug }
	}));

    return { paths, fallback: false };
};

// This function runs at build time for each path returned by getStaticPaths, it fetches the data for each individual post.
export const getStaticProps: GetStaticProps = async ({ params }) => {
    const postsDirectory = path.join(process.cwd(), '/src/markdownPosts');
    const fullPath = path.join(postsDirectory, `${params?.slug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
        props: {
            title: data.title,
            slug: params?.slug,
            date: data.date,
            content
        },
    };
};

interface PostPageProps {
    title: string;
    slug: string;
    date: string;
    content: string;
}

const PostPage = ({ title, date, content }: PostPageProps) => {
    return (
		<main>
            <section className="w-full flex flex-col gap-8 justify-center h-[64rem] max-[400px]:h-60 min-[400px]:h-80 sm:h-[30rem] md:h-[35rem] lg:h-[40rem] xl:h-[45rem] md:items-center">
            <div style={{
                    backgroundImage: `url('https://picsum.photos/seed/8/1000/600')`, //All images are the same for now
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    width: '100%',
                    height: '100%',
                }}></div>
            </section>
            <section>
                <div className='flex flex-col px-24 2xl:px-64 xl:px-48 md:px-24 min-[400px]:px-10 max-[400px]:p-10 py-32 gap-16'>
                    <h1 className="text-center text-3xl md:text-4xl xl:text-5xl max-[400px]:text-2xl font-bold ">{title}</h1>
                    <p className='text-center text-sm lg:text-xl text-zinc-400'>Last edited {date}</p>
                    <article className="prose max-w-none md:prose-lg lg:prose-xl">
                        <Markdown className="text-xl max-[400px]:text-base min-[400px]:text-2xl">{content}</Markdown>
                    </article>
                </div>
            </section>
        </main>
	);
};

export default PostPage;

