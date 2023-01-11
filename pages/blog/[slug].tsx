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

import PostPreTag from '../../components/Post/_PreTag/PostPreTag';
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
    pre: ({ children }: any) => <PostPreTag>{children}</PostPreTag>,
    li: ({ children }: any) => <li className="post__listItem">{children}</li>,
    h2: ({ children }: any) => {
      const anchor = children.toLowerCase().split(' ').join('-');
      return (
        <h2 className='post__subtitle' id={anchor}>
          {children}
          <a
            className='post__subtitle-link'
            href={`#${anchor}`}
          >
            <svg
              className='post__subtitle-linkIcon'
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.5413 22H9C7.4087 22 5.88258 21.3679 4.75736 20.2426C3.63214 19.1174 3 17.5913 3 16C3 14.4087 3.63214 12.8826 4.75736 11.7574C5.88258 10.6321 7.4087 10 9 10H12.4631M19.5369 10H23C24.5913 10 26.1174 10.6321 27.2426 11.7574C28.3679 12.8826 29 14.4087 29 16C29 17.5913 28.3679 19.1174 27.2426 20.2426C26.1174 21.3679 24.5913 22 23 22H19.4587M10.5669 16H21.5581" stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </h2>
      );
    },
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
