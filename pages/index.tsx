import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';

import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import PostList from '../components/Post/_List/PostList';
import { IPost } from '../types';
import { postFilePaths, POSTS_PATH } from '../utils/mdxUtils';


interface IndexProps {
  posts: IPost[],
}


export default function Index({ posts }: IndexProps) {
  return (
    <>
      <Header />
      <Hero />
      <PostList posts={posts} />
    </>
  );
}

export function getStaticProps() {
  const posts = postFilePaths.map((filePath) => {
    const source = fs.readFileSync(path.join(POSTS_PATH, filePath));
    const { content, data } = matter(source);

    return {
      content,
      data,
      filePath,
    };
  });

  return { props: { posts } };
}
