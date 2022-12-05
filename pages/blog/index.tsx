import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';

import Posts from '../../components/Blog/Blog';
import { IPost } from '../../types';
import { postFilePaths, POSTS_PATH } from '../../utils/mdxUtils';


interface PostPageProps {
    posts: IPost[]
}


const PostsPage = ({ posts }: PostPageProps) => {
  return (
    <Posts posts={posts} />
  );
};

export default PostsPage;


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