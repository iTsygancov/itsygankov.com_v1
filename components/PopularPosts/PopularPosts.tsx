import { Container } from '@mantine/core';
import { useRouter } from 'next/router';

import { IPost } from '../../types';
import PostList from '../Post/_List/PostList';
import { en, ru } from './PopularPosts.locale';


type PopularPostsProps = {
  posts: IPost[];
};

const cssPrefix = 'popularPosts';

const PopularPosts = ({ posts }: PopularPostsProps) => {
  const router = useRouter();
  const currentLocale = router.locale === 'en' ? en : ru;
  return (
    <div className={cssPrefix}>
      <Container size='xl'>
        <h2 className={`${cssPrefix}__title`}>{currentLocale.title}</h2>
        <PostList posts={posts} />
      </Container>
    </div>
  );
};

export default PopularPosts;
