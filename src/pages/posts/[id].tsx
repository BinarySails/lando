import { useRouter } from 'next/router'
import { InferGetStaticPropsType } from 'next'
import Image from 'next/image';

interface PostType {
    userId: number;
    id: number;
    title: string;
    body: string;
}

interface Params {
    params: {
        id: string;
    };
}

export default function Post({ post }: InferGetStaticPropsType<typeof getStaticProps>) {
    const router = useRouter()

    //If the page is not yet generated, this will be displayed
    if (router.isFallback) {
        return <div>Loading...</div>
    }

    return (
        <div>
            <Image src={`https://picsum.photos/seed/${post.id}/500/300`} alt='image' width={500} height={500}/>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
        </div>
    )
}

export async function getStaticPaths() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    let posts: PostType[] = await res.json()

    posts = posts.slice(0, 10);

    // Get the paths we want to pre-render based on posts
    const paths = posts.map((post) => ({
        params: { id: post.id.toString() },
    }))

    // We'll pre-render only these paths at build time. { fallback: true } means other routes should serve a fallback page until the static page is generated.
    return { paths, fallback: true }
}


export async function getStaticProps({ params }: Params) {
    // params contains the post `id`. If the route is like /posts/1, then params.id is 1
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
    const post: PostType = await res.json()

    // Pass post data to the page via props
    return { props: { post }, revalidate: 1 }
    }
