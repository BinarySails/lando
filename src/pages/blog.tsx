import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import matter from 'gray-matter';

export const getStaticProps = async () => {
  const postsDirectory = path.join(process.cwd(), '/src/markdownPosts');
  const filenames = fs.readdirSync(postsDirectory);

  const posts = filenames.map((filename) => {
    const slug = filename.replace('.mdx', '');
    const fullPath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data } = matter(fileContents);

    return {
      slug,
      title: data.title,
      date: data.date,
      description: data.subtitle,
    };
  });

  return {
    props: {
      posts
    },
  };
};

const Blog = ({ posts }: { posts: { slug: string, title: string, date: string, description: string }[] }) => {
  const postPreviews = posts.map((post) => (
    <div key={post.slug}>
      <Link href={`/posts/${post.slug}`}>
        <h2>{post.title}</h2>
      </Link>
      <p>{post.description}</p>
      <p>{post.date}</p>
    </div>)
  );
  return <div>{postPreviews}</div>;
};

export default Blog;
