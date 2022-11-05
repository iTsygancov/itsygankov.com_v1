import { Container, Grid } from '@mantine/core';
import fs from 'fs';
import matter from 'gray-matter';
import { GetStaticPaths, GetStaticProps } from 'next';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import path from 'path';

import Post from '../../components/Post/Post';
import { IFrontMatter } from '../../types';
import { postFilePaths, POSTS_PATH } from '../../utils/mdxUtils';


type PostPageProps = {
  frontMatter: IFrontMatter,
  source: {
    compiledSource: string,
    frontMatter: {},
    scope: IFrontMatter
  }
}


export default function PostPage({ source, frontMatter }: PostPageProps) {
  const components = {
    CodeHighlighter: dynamic(() => import('../../components/CodeHighlighter/CodeHighlighter'), { ssr: false }),
    Head,
  };

  return (
    <Container size='xl'>
      <Grid>
        <Grid.Col md={8}>
          <Post frontMatter={frontMatter}>
            <MDXRemote {...source} components={components} />
          </Post>
        </Grid.Col>
      </Grid>
    </Container>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postFilePath = path.join(POSTS_PATH, `${params?.slug}.mdx`);
  const source = fs.readFileSync(postFilePath);

  const { content, data } = matter(source);

  const mdxSource = await serialize(content, { scope: data });

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
    },
  };
};

type IPaths = {
  params: {
    slug: string
  },
  locale: string
}

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
