import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';

import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import PopularPosts from '../components/PopularPosts/PopularPosts';
import { IPost } from '../types';
import { postFilePaths, POSTS_PATH } from '../utils/mdxUtils';


interface IndexProps {
  posts: IPost[],
}


export default function Index({ posts }: IndexProps) {
  const renderPopularPosts = () => {
    const popularPosts = posts.filter((post) => post.data.section === 'popular');
    return popularPosts.length !== 0 && <PopularPosts posts={popularPosts} />;
  };
  return (
    <>
      <Header />
      <Hero />
      {renderPopularPosts()}
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
