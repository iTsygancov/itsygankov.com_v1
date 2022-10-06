import { Container } from '@mantine/core';
import Link from 'next/link';

import { IPost } from '../../types';
import PostList from '../Post/_List/PostList';


type LatestPostsProps = {
    posts: IPost[]
}

const cssPrefix = 'latestPosts';

const LatestPosts = ({ posts }: LatestPostsProps) => {
  return (
    <div className={cssPrefix}>
      <Container size='xl'>
        <div className={`${cssPrefix}__header`}>
          <h2 className={`${cssPrefix}__title`}>Latest posts</h2>
          <Link href='posts/'>
            <a className={`${cssPrefix}__link`}>View all</a>
          </Link>
        </div>
        <PostList posts={posts} />
      </Container>
    </div>
  );
};

export default LatestPosts;