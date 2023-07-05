import fs from "fs";
import path from 'path';
import Markdown from "markdown-to-jsx";
import matter from 'gray-matter';
import { GetStaticPaths, GetStaticProps } from 'next';

// This function runs at build time and generates paths for all your posts
export const getStaticPaths: GetStaticPaths = async () => {
  const postsDirectory = path.join(process.cwd(), '/src/markdownPosts');
  const filenames = fs.readdirSync(postsDirectory);
  const slugs = filenames.map((filename) => filename.replace('.mdx', ''));

  const paths = slugs.map((slug) => ({
    params: { slug }
  }));

  return { paths, fallback: false };
};

// This function runs at build time for each path returned by getStaticPaths
// It fetches the data for each individual post.
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug;
  const postsDirectory = path.join(process.cwd(), '/src/markdownPosts');
  const fullPath = path.join(postsDirectory, `${slug}.mdx`);

  const content = fs.readFileSync(fullPath, 'utf8');
  const matterResult = matter(content);

  return { props: { content, slug } };
};

const PostPage = ({ content, slug }: { content: string, slug: string }) => {
  return ( 
    <div>
      <h1>This is a post: {slug}</h1>
      <Markdown>{content}</Markdown>
    </div>
  );
};

export default PostPage;

