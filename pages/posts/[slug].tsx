import { Container, Grid } from '@mantine/core';
import fs from 'fs';
import matter from 'gray-matter';
import { GetStaticPaths, GetStaticProps } from 'next';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import Link from 'next/link';
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import path from 'path';

import Header from '../../components/Header/Header';
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


const components = {
  CodeHighlighter: dynamic(() => import('../../components/CodeHighlighter/CodeHighlighter'), { ssr: false }),
  Head,
};

export default function PostPage({ source, frontMatter }: PostPageProps) {
  return (
    <Container size='xl'>
      <Grid>
        <Grid.Col md={8}>
          <div className="post-header">
            <h1>{frontMatter.title}</h1>
            {frontMatter.description && (
              <p className="description">{frontMatter.description}</p>
            )}
          </div>
          <main>
            <MDXRemote {...source} components={components} />
          </main>
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

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = postFilePaths
    .map((path) => path.replace(/\.mdx?$/, ''))
    .map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};
