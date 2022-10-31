import { Container, Grid } from '@mantine/core';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { IPost } from '../../types';
import PostsCategories from './_Categories/PostsCategories';


interface PostsProps {
    posts: IPost[]
}

const cssPrefix = 'posts';


const Posts = ({ posts }: PostsProps) => {
  const router = useRouter();
  const query = router.query;
  const sortedPosts = posts.sort((a,b) => (a.data.id < b.data.id) ? 1 : -1);
  const categories = posts.reduce((acc: string[], post) => {
    if (!acc.includes(post.data.category)) acc.push(post.data.category);
    return acc;
  }, []);
  return (
    <Container size='xl' className={cssPrefix}>
      <Grid>
        <Grid.Col lg={9}>
          <h1>{query.category || 'Posts'}</h1>
          <div className={`${cssPrefix}__list`}>
            {(Object.keys(query).length !== 0)
              ? sortedPosts.map((post) => (
                post.data.category === query.category &&
                <Link href={`/posts/?category=${post.data.category}`} key={post.data.id}>
                  <a className={`${cssPrefix}__link`}>{post.data.title}</a>
                </Link>
              ))
              : sortedPosts.map((post) => (
                <Link 
                  as={`/posts/${post.filePath.replace(/\.mdx?$/, '')}`}
                  href={'/posts/[slug]'}
                  key={post.data.id}
                >
                  <a className={`${cssPrefix}__link`}>{post.data.title}</a>
                </Link>
              ))}
          </div>
        </Grid.Col>
        <Grid.Col lg={3}>
          <PostsCategories categories={categories} />
        </Grid.Col>
      </Grid>
    </Container>
  );
};

export default Posts;