import { Container } from '@mantine/core';
import Link from 'next/link';

import { IPost } from '../../types';


interface PostsProps {
    posts: IPost[]
}

const cssPrefix = 'posts';


const Posts = ({ posts }: PostsProps) => {
  const sortedPosts = posts.sort((a,b) => (a.data.id < b.data.id) ? 1 : -1);
  return (
    <Container size='xl' className={cssPrefix}>
      <h1 className={`${cssPrefix}__title`}>Posts</h1>
      <div className={`${cssPrefix}__list`}>
        {sortedPosts.map((post) => (
          <Link 
            as={`/posts/${post.filePath.replace(/\.mdx?$/, '')}`}
            href={'/posts/[slug]'}
            key={post.data.id}
          >
            <a className={`${cssPrefix}__link`}>{post.data.title}</a>
          </Link>
        ))}
      </div>
    </Container>
  );
};

export default Posts;