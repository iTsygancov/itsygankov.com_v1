import { Container, Grid } from '@mantine/core';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { IPost } from '../../types';
import PostsCategories from './_Categories/PostsCategories';
import { en, ru } from './Posts.locale';


interface PostsProps {
  posts: IPost[];
}

const cssPrefix = 'posts';

const Posts = ({ posts }: PostsProps) => {
  const router = useRouter();
  const currentLocale = router.locale === 'en' ? en : ru;
  const query = router.query;
  const sortedPosts = posts.sort((a, b) => (a.data.id < b.data.id ? 1 : -1));

  // TODO: add sorting to utils
  const enPosts = sortedPosts.reduce((acc: IPost[], post) => {
    if (!post.filePath.replace(/\.mdx?$/, '').endsWith('-ru')) {
      acc.push(post);
    }
    return acc;
  }, []);

  const ruPosts = sortedPosts.reduce((acc: IPost[], post) => {
    if (post.filePath.replace(/\.mdx?$/, '').endsWith('-ru')) {
      acc.push(post);
    }
    return acc;
  }, []);

  const categories = ruPosts.reduce((acc: string[], post) => {
    if (!acc.includes(post.data.category)) acc.push(post.data.category);
    return acc;
  }, []);

  return (
    <Container size="xl" className={cssPrefix}>
      <Grid>
        <Grid.Col lg={9}>
          <h1 className={`${cssPrefix}__title`}>
            {query.category || currentLocale.title}
          </h1>
          <div className={`${cssPrefix}__list`}>
            {router.locale === 'en' && Object.keys(query).length !== 0
              ? enPosts.map(
                (post) =>
                  post.data.category === query.category && (
                    <Link
                      as={`/posts/${post.filePath.replace(/\.mdx?$/, '')}`}
                      href={'/posts/[slug]'}
                      key={post.data.id}
                    >
                      <a className={`${cssPrefix}__link`}>
                        {post.data.title}
                      </a>
                    </Link>
                  ),
              )
              : router.locale === 'en' &&
                enPosts.map((post) => (
                  <Link
                    as={`/posts/${post.filePath.replace(/\.mdx?$/, '')}`}
                    href={'/posts/[slug]'}
                    key={post.data.id}
                  >
                    <a className={`${cssPrefix}__link`}>{post.data.title}</a>
                  </Link>
                ))}

            {router.locale === 'ru' && Object.keys(query).length !== 0
              ? ruPosts.map(
                (post) =>
                  post.data.category === query.category && (
                    <Link
                      as={`/posts/${post.filePath.replace(/\.mdx?$/, '')}`}
                      href={'/posts/[slug]'}
                      key={post.data.id}
                    >
                      <a className={`${cssPrefix}__link`}>
                        {post.data.title}
                      </a>
                    </Link>
                  ),
              )
              : router.locale === 'ru' &&
                ruPosts.map((post) => (
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
