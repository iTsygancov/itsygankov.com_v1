import fs from 'fs';
import matter from 'gray-matter';
import { useRouter } from 'next/router';
import path from 'path';

import Hero from '../components/Hero/Hero';
import LatestPosts from '../components/LatestPosts/LatestPosts';
import PopularPosts from '../components/PopularPosts/PopularPosts';
import { IPost } from '../types';
import { postFilePaths, POSTS_PATH } from '../utils/mdxUtils';


interface IndexProps {
  posts: IPost[],
}

export default function Index({ posts }: IndexProps) {
  const router = useRouter();

  // TODO: add sorting to utils
  const enPosts = posts.reduce((acc: IPost[], post) => {
    if (!post.filePath.replace(/\.mdx?$/, '').endsWith('-ru')) {
      acc.push(post);
    }
    return acc;
  }, []);
  const ruPosts = posts.reduce((acc: IPost[], post) => {
    if (post.filePath.replace(/\.mdx?$/, '').endsWith('-ru')) {
      acc.push(post);
    }
    return acc;
  }, []);

  const renderPopularPosts = () => {
    let popularPosts: IPost[];
    if (router.locale === 'en') {
      popularPosts = enPosts.filter((post) => post.data.section === 'popular');
    } else {
      popularPosts = ruPosts.filter((post) => post.data.section === 'popular');
    }
    return popularPosts.length !== 0 && <PopularPosts posts={popularPosts} />;
  };

  const renderLatestPosts = () => {
    let latestPosts: IPost[];
    if (router.locale === 'en') {
      latestPosts = enPosts.filter((post) => post.data.section !== 'popular');
    } else {
      latestPosts = ruPosts.filter((post) => post.data.section !== 'popular');
    }
    return latestPosts.length !== 0 && <LatestPosts posts={latestPosts} />;
  };

  return (
    <>
      <Hero />
      {renderPopularPosts()}
      {renderLatestPosts()}
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
