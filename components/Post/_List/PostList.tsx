import { Grid } from '@mantine/core';

import { IPost } from '../../../types';
import PostCard from '../_Card/PostCard';


type PostListProps = {
    posts: IPost[]
}

const cssPrefix = 'postList';

const PostList = ({ posts }: PostListProps) => {
  return (
    <div className={cssPrefix}>
      <Grid>
        {
          posts.map((post) => (
            <Grid.Col
              sm={6}
              md={4}
              lg={3}
              key={post.data.id}
            >
              <PostCard post={post} key={post.data.title} />
            </Grid.Col>
          ))
        }
      </Grid>
    </div>
  );
};

export default PostList;
