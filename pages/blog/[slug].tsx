import { Container, Grid } from '@mantine/core';
import fs from 'fs';
import matter from 'gray-matter';
import { GetStaticPaths, GetStaticProps } from 'next';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import path from 'path';
import rehypeHighlight from 'rehype-highlight';

import Post from '../../components/Post/Post';
import { IFrontMatter } from '../../types';
import { postFilePaths, POSTS_PATH } from '../../utils/mdxUtils';


type PostPageProps = {
  frontMatter: IFrontMatter;
  source: {
    compiledSource: string;
    frontMatter: {};
    scope: IFrontMatter;
  };
};

export default function PostPage({ source, frontMatter }: PostPageProps) {
  const components = {
    PostFrames: dynamic(
      () => import('../../components/Post/_Frames/PostFrames'),
      { ssr: false },
    ),
    PostCodeHeader: dynamic(
      () => import('../../components/Post/_CodeHeader/PostCodeHeader'),
      { ssr: false },
    ),
    Head,
    p: ({ children }: any) => <p className="post__text">{children}</p>,
  };

  const {
    title, description, id, keywords, 
  } = frontMatter;

  return (
    <Container size="xl">
      <Head>
        <title>{title + ' | < iTsygankov />'}</title>
        <meta
          name="description"
          content={description}
          key={id}
        />
        <meta property="og:title" content={title + ' | < iTsygankov />'} />
        <meta property="og:description" content={description} />
        <meta name="keywords" content={keywords?.join(', ')} />
      </Head>
      <Grid>
        <Grid.Col md={2} />
        <Grid.Col md={8}>
          <Post frontMatter={frontMatter}>
            <MDXRemote {...source} components={components} />
          </Post>
        </Grid.Col>
        <Grid.Col md={2} />
      </Grid>
    </Container>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postFilePath = path.join(POSTS_PATH, `${params?.slug}.mdx`);
  const source = fs.readFileSync(postFilePath);

  const { content, data } = matter(source);

  const mdxSource = await serialize(content, {
    scope: data,
    mdxOptions: { rehypePlugins: [rehypeHighlight] },
  });

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
    },
  };
};

type IPaths = {
  params: {
    slug: string;
  };
  locale: string;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = postFilePaths
    .map((path) => path.replace(/\.mdx?$/, ''))
    .reduce((acc: IPaths[], slug) => {
      acc.push({ params: { slug }, locale: 'en' });
      acc.push({ params: { slug }, locale: 'ru' });
      return acc;
    }, []);

  return {
    paths,
    fallback: false,
  };
};
