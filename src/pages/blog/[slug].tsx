import { useRouter } from 'next/router'
import { InferGetStaticPropsType, GetStaticPropsContext } from 'next'
import { parseMdFile } from '@/utilities'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'

import fs from 'fs';
import path from 'path';


export default function Post({ post }: InferGetStaticPropsType<typeof getStaticProps>) {
    const router = useRouter()

    //If the page is not yet generated, this will be displayed
    if (router.isFallback) {
        return <div>Loading...</div>
    }

    return (
        <main>
            <section className="w-full flex flex-col gap-8 justify-center h-[64rem] max-[400px]:h-60 min-[400px]:h-80 sm:h-[30rem] md:h-[35rem] lg:h-[40rem] xl:h-[45rem] md:items-center">
            <div style={{
                    backgroundImage: `url('https://picsum.photos/seed/${post.slug}/1000/600')`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    width: '100%',
                    height: '100%',
                }}></div>
            </section>
            <section>
                <div className='flex flex-col px-24 2xl:px-64 xl:px-48 md:px-24 min-[400px]:px-10 max-[400px]:p-10 py-32 gap-16'>
                    <h1 className="text-center text-3xl md:text-4xl xl:text-5xl max-[400px]:text-2xl font-bold ">{post.name}</h1>
                    <p className="text-xl max-[400px]:text-base min-[400px]:text-2xl">
                        <ReactMarkdown>
                            { post.body }
                        </ReactMarkdown>
                    </p>
                </div>
            </section>
        </main>
    )
}

export async function getStaticPaths() {
    const postsPath = path.join('public/posts');
    const files = fs.readdirSync(postsPath);

    const availableMdFiles = files.filter(p => p.endsWith(".md"));

    const readFiles = await Promise.all(availableMdFiles.map(async p => {
        const postPath = path.join(postsPath, p);
        const file = fs.readFileSync(postPath);
        const stripExt = p.substring(0, p.length - 3);
        return [stripExt, file] as [string, Buffer];
    }));

    const paths = readFiles.map(([name, content]) => ({
        params: { slug: parseMdFile(content, name).slug }
    }));

    // pre-render only these paths at build time. { fallback: true } means other routes should serve a fallback page until the static page is generated.
    return { paths, fallback: true }
}


export async function getStaticProps({ params }: GetStaticPropsContext<{ slug: string }>) {
    const postsPath = path.join('public/posts');
    const slug = params?.slug;

    const filePath = path.join(postsPath, slug + ".md");
    const fileContent = fs.readFileSync(filePath).toString();
    
    const post = parseMdFile(fileContent, slug);

    // Pass post data to the page via props
    return { props: { post }, revalidate: 1 }

}
