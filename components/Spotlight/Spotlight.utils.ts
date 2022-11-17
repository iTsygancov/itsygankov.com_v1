import { SpotlightAction } from '@mantine/spotlight/lib/types';
import { NextRouter } from 'next/router';

import { IPost } from '../../types';


export const getSpotlightActions = async (router: NextRouter) => {
  const data = fetch('/api/posts').then((posts) =>
    posts.json().then((posts: IPost[]) => {
      const actionsFromPosts: SpotlightAction[] = posts.reduce(
        (acc: SpotlightAction[], post: IPost) => {
          if (router.locale === 'en' && !post.filePath.replace(/\.mdx?$/, '').endsWith('-ru')) {
            acc.push({
              title: post.data.title,
              onTrigger: () => router.push(`/posts/${post.filePath.replace(/\.mdx?$/, '')}`),
            });
          }
          if (router.locale === 'ru' && post.filePath.replace(/\.mdx?$/, '').endsWith('-ru')) {
            acc.push({
              title: post.data.title,
              onTrigger: () => router.push(`/posts/${post.filePath.replace(/\.mdx?$/, '')}`),
            });
          }
          return acc;
        }, []);
      return actionsFromPosts;
    }),
  );
  return data;
};