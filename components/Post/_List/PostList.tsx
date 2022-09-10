import { IPost } from '../../../types';
import PostCard from '../_Card/PostCard';


type PostListProps = {
    posts: IPost[]
}

const cssPrefix = 'postList';

const PostList = ({ posts }: PostListProps) => {
  return (
    <div className={cssPrefix}>
      {
        posts.map((post) => (
          <PostCard post={post} key={post.data.title} />
        ))
      }
    </div>
  );
};

export default PostList;