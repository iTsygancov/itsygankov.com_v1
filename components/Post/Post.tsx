import Link from 'next/link';
import { useRouter } from 'next/router';
import { ReactNode } from 'react';

import { IFrontMatter } from '../../types';
import { en, ru } from './Post.locale';


type PostProps = {
  frontMatter: IFrontMatter;
  children: ReactNode;
};

const cssPrefix = 'post';

const Post = ({ children, frontMatter }: PostProps) => {
  const { title, category, date } = frontMatter;
  const router = useRouter();
  const currentLocale = router.locale === 'en' ? en : ru;

  return (
    <div className={cssPrefix}>
      <div className={`${cssPrefix}__header`}>
        <p className={`${cssPrefix}__date`}>{date}</p>
        <h1 className={`${cssPrefix}__title`}>{title}</h1>
        <div className={`${cssPrefix}__description`}>
          <span className={`${cssPrefix}__description-title`}>
            {currentLocale.category}
          </span>
          <Link
            href={{
              pathname: '/blog',
              query: { category: category },
            }}
            key={category}
          >
            <a className={`${cssPrefix}__category`}>{category}</a>
          </Link>
        </div>
      </div>
      <main>{children}</main>
    </div>
  );
};

export default Post;
