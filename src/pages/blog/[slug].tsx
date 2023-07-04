import { useRouter } from 'next/router'
import { InferGetStaticPropsType, GetStaticPropsContext } from 'next'
import { BlogPost, BlogPosts } from '../api/blog/common'
import { buildUrl } from '@/utilities'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'

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
    const res = await fetch(buildUrl('/api/blog'))
    const posts: BlogPosts = await res.json()

    // Get the paths to pre-render based on posts
    const paths = posts.map((post) => ({
        params: { slug: post.slug },
    }))

    // pre-render only these paths at build time. { fallback: true } means other routes should serve a fallback page until the static page is generated.
    return { paths, fallback: true }
}


export async function getStaticProps({ params }: GetStaticPropsContext<{ slug: string }>) {
    // params contains the post 'id'. If the route is like /posts/1, then params.id is 1
    const res = await fetch(buildUrl(`/api/blog/${params?.slug}`))
    const post: BlogPost = await res.json()

    // Pass post data to the page via props
    return { props: { post }, revalidate: 1 }
    }
