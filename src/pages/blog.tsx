import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import matter from 'gray-matter';
import Image from 'next/image';
import { parseISO, format } from 'date-fns';

export const getStaticProps = async () => {
    const postsDirectory = path.join(process.cwd(), '/src/markdownPosts');
    const filenames = fs.readdirSync(postsDirectory);

    let posts = filenames.map((filename) => {
        const slug = filename.replace('.md', '');
        const fullPath = path.join(postsDirectory, filename);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const { data } = matter(fileContents);
    
        return {
            slug,
            title: data.title,
            date: data.date,
            subtitle: data.subtitle,
        };
    });
    
    // Convert date strings to Date objects
    posts = posts.map(post => ({ ...post, date: parseISO(post.date) }));
    // Sort posts by date in descending order
    posts.sort((a, b) => b.date.getTime() - a.date.getTime());
    // Convert date back to a string and assign an ID to each post
    posts = posts.map((post, index) => ({ ...post, date: format(post.date, 'yyyy-MM-dd'), id: index + 1 }));

    return {
        props: {
            posts
        },
    };
};



const Blog = ({ posts }: { posts: { id: number, slug: string, title: string, date: string, subtitle: string }[] }) => {
    return (
        <div>
            <main>
                <section className="w-full flex">
                    <div className="w-full flex flex-col gap-8 p-48 max-[400px]:p-10 min-[400px]:px-10 min-[400px]:py-16 lg:p-48 text-white bg-timberwolf py-24 px-5 md:p-24 justify-center items-start bg-[url('/irapuato.jpg')] bg-no-repeat bg-cover bg-center">
                        <h3 className="text-lg sm:text-xl md:text-2xl xl:text-3xl max-[400px]:text-sm">
                            Explora nuestro blog
                        </h3>
                        <p className="text-xl sm:text-2xl md:text-3xl xl:text-5xl max-[400px]:text-xl font-bold w-3/5 sm:w-1/2">
                            Enterate de nuestras ultimas novdedades, noticias y actualizaciones en una sola pagina
                        </p>
                    </div>
                </section>
                <section className='grid grid-cols-1 md:grid-cols-2 px-48 2xl:px-40 xl:px-32 md:px-24 min-[400px]:px-10 min-[400px]:py-16 max-[400px]:p-10 xl:py-32 gap-8'>
                    {posts.map((post) => (
                        <div className='rounded-lg border border-black hover:bg-slate-200 bg-white hover:scale-[1.01] transition-all' key={post.slug}>
                            <Link href={`/blog/${post.slug}`}>
                                <div className='group'>
                                    <Image src={`https://picsum.photos/seed/${post.id}/1000/600`} alt='image' width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} className='filter brightness-100 group-hover:brightness-50 transition-all' />
                                    <div className='flex flex-col justify-between p-4 gap-4'>
                                        <h2 className='text-lg lg:text-3xl font-bold'>{post.title}</h2>
                                        <p className='text-sm lg:text-xl'>{post.date}</p>
                                        <p className='text-base lg:text-2xl'>{post.subtitle}</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </section>
            </main>
        </div>
    );
};

export default Blog;
