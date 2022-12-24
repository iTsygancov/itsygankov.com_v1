import { Container, Grid } from '@mantine/core';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { IPost } from '../../types';
import PostsCategories from './_Categories/BlogCategories';
import { en, ru } from './Blog.locale';


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

  const enCategories = enPosts.reduce((acc: string[], post) => {
    if (!acc.includes(post.data.category)) acc.push(post.data.category);
    return acc;
  }, []);
  const ruCategories = ruPosts.reduce((acc: string[], post) => {
    if (!acc.includes(post.data.category)) acc.push(post.data.category);
    return acc;
  }, []);

  return (
    <>
      <Head>
        <title>{currentLocale.meta.title}</title>
        <meta
          name="description"
          content={currentLocale.meta.description}
        />
        <meta property="og:title" content={currentLocale.meta.title} />
        <meta property="og:description" content={currentLocale.meta.description} />
      </Head>
      <Container size="xl" className={cssPrefix}>
        <Grid>
          <Grid.Col md={9}>
            <h1 className={`${cssPrefix}__title`}>
              {query.category || currentLocale.title}
            </h1>
            <div className={`${cssPrefix}__list`}>
              {router.locale === 'en' && Object.keys(query).length !== 0
                ? enPosts.map(
                  (post) =>
                    post.data.category === query.category && (
                      <Link
                        as={`/blog/${post.filePath.replace(/\.mdx?$/, '')}`}
                        href={'/blog/[slug]'}
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
                    as={`/blog/${post.filePath.replace(/\.mdx?$/, '')}`}
                    href={'/blog/[slug]'}
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
                        as={`/blog/${post.filePath.replace(/\.mdx?$/, '')}`}
                        href={'/blog/[slug]'}
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
                    as={`/blog/${post.filePath.replace(/\.mdx?$/, '')}`}
                    href={'/blog/[slug]'}
                    key={post.data.id}
                  >
                    <a className={`${cssPrefix}__link`}>{post.data.title}</a>
                  </Link>
                ))}
            </div>
          </Grid.Col>
          <Grid.Col md={3}>
            {
              router.locale === 'en'
                ? <PostsCategories categories={enCategories} />
                : <PostsCategories categories={ruCategories} />
            }
          </Grid.Col>
        </Grid>
      </Container>

    </>
  );
};

export default Posts;
