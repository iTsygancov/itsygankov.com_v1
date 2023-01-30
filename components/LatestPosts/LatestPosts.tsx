import { Container } from '@mantine/core';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { IPost } from '../../types';
import PostList from '../Post/_List/PostList';
import { en, ru } from './LatestPosts.locale';


type LatestPostsProps = {
  posts: IPost[];
};

const cssPrefix = 'latestPosts';

const LatestPosts = ({ posts }: LatestPostsProps) => {
  const router = useRouter();
  const currentLocale = router.locale === 'en' ? en : ru;

  return (
    <div className={cssPrefix}>
      <Container size='xl'>
        <div className={`${cssPrefix}__header`}>
          <h2 className={`${cssPrefix}__title`}>{currentLocale.title}</h2>
          <Link href='blog/'>
            <a className={`${cssPrefix}__link`}>{currentLocale.link}</a>
          </Link>
        </div>
        <PostList posts={posts} />
      </Container>
    </div>
  );
};

export default LatestPosts;
