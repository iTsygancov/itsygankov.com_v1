import { NextRouter } from 'next/router';

import { IPost } from '../../types';


export const getPosts = (router: NextRouter, posts: IPost[]) => {
  if (router.locale === 'en') {
    return posts.reduce((acc: IPost[], post) => {
      if (post.filePath.replace(/\.mdx?$/, '').endsWith('-en')) {
        acc.push(post);
      }
      return acc;
    }, []);
  }

  return posts.reduce((acc: IPost[], post) => {
    if (post.filePath.replace(/\.mdx?$/, '').endsWith('-ru')) {
      acc.push(post);
    }
    return acc;
  }, []);
};

export const getCategories = (posts: IPost[]) => {
  return posts.reduce((acc: string[], post) => {
    if (!acc.includes(post.data.category)) acc.push(post.data.category);
    return acc;
  }, []);
};
