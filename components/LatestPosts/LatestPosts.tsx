import { Container } from '@mantine/core';

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
        <h2 className={`${cssPrefix}__title`}>Последние посты</h2>
        <PostList posts={posts} />
      </Container>
    </div>
  );
};

export default LatestPosts;