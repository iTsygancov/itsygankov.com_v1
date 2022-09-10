import { Container } from '@mantine/core';

import { IPost } from '../../../types';
import PostCard from '../_Card/PostCard';


type PostListProps = {
    posts: IPost[]
}

const cssPrefix = 'postList';

const PostList = ({ posts }: PostListProps) => {
  return (
    <Container size='xl'>
      <div className={cssPrefix}>
        {
          posts.map((post) => (
            <PostCard post={post} key={post.data.title} />
          ))
        }
      </div>
    </Container>
  );
};

export default PostList;