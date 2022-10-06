import { Container } from '@mantine/core';

import { IPost } from '../../types';
import PostList from '../Post/_List/PostList';


type PopularPostsProps = {
    posts: IPost[]
}

const cssPrefix = 'popularPosts';

const PopularPosts = ({ posts }: PopularPostsProps) => {
  return (
    <div className={cssPrefix}>
      <Container size='xl'>
        <h2 className={`${cssPrefix}__title`}>Popular posts</h2>
        <PostList posts={posts} />
      </Container>
    </div>
  );
};

export default PopularPosts;