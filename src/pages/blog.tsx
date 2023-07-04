import { InferGetStaticPropsType } from 'next'
import Image from 'next/image';
import Link from 'next/link'

interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

export default function Blog({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
    return (
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
                    <div className='rounded-lg border border-black hover:bg-slate-200 bg-white hover:scale-[1.01] transition-all' key={post.id}>
                        <Link href={`/posts/${post.id}`}>
                            <div className='group'>
                                <Image src={`https://picsum.photos/seed/${post.id}/1000/600`} alt='image' width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} className='filter brightness-100 group-hover:brightness-50 transition-all' />
                                <div className='flex flex-col justify-between p-4 gap-4'>
                                    <h2 className='text-lg lg:text-3xl font-bold'>{post.title}</h2>
                                    <p className='text-base lg:text-2xl'>{post.body}</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
            </section>
        </main>
    )
}

export async function getStaticProps() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    let posts: Post[] = await res.json()

    posts = posts.slice(0, 10);

    return {
        props: {
            posts
        },
    }
}
