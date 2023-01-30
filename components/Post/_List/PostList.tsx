import { Grid } from '@mantine/core';

import { IPost } from '../../../types';
import PostCard from '../_Card/PostCard';


type PostListProps = {
  posts: IPost[];
};

const cssPrefix = 'postList';

const PostList = ({ posts }: PostListProps) => {
  const sortedPosts = posts.sort((a, b) => (a.data.id < b.data.id ? 1 : -1));

  return (
    <div className={cssPrefix}>
      <Grid>
        {sortedPosts.map((post) => (
          <Grid.Col
            sm={6}
            md={4}
            lg={3}
            key={post.data.id}
          >
            <PostCard
              post={post}
              key={post.data.title}
            />
          </Grid.Col>
        ))}
      </Grid>
    </div>
  );
};

export default PostList;
