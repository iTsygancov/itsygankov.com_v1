import { Container, Grid } from '@mantine/core';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { IPost } from '../../types';
import BlogCategories from './_Categories/BlogCategories';
import { en, ru } from './Blog.locale';
import { getCategories, getPosts } from './Blog.utils';


interface PostsProps {
  posts: IPost[];
}

const cssPrefix = 'posts';

const Posts = ({ posts }: PostsProps) => {
  const router = useRouter();
  const currentLocale = router.locale === 'en' ? en : ru;
  const query = router.query;
  const sortedPosts = posts.sort((a, b) => (a.data.id < b.data.id ? 1 : -1));

  const localePosts = getPosts(router, sortedPosts);

  const localeCategories = getCategories(localePosts);

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
          <Grid.Col sm={9}>
            <h1 className={`${cssPrefix}__title`}>
              {
                query.category
                  ? currentLocale.categoryTitle + query.category
                  : currentLocale.title
              }
            </h1>
            <div className={`${cssPrefix}__list`}>
              {Object.keys(query).length !== 0
                ? localePosts?.map((post) =>
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
                : localePosts?.map((post) => (
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
          <Grid.Col sm={3}>
            <BlogCategories categories={localeCategories} />
          </Grid.Col>
        </Grid>
      </Container>

    </>
  );
};

export default Posts;
