import Link from 'next/link';
import { ReactNode } from 'react';

import { IFrontMatter } from '../../types';


type PostProps = {
  frontMatter: IFrontMatter,
  children: ReactNode,
}

const cssPrefix = 'post';

const Post = ({ children, frontMatter }: PostProps) => {
  return (
    <div className={cssPrefix}>
      <div className={`${cssPrefix}__header`}>
        <h1 className={`${cssPrefix}__title`}>{frontMatter.title}</h1>
        <div className={`${cssPrefix}__description`}>
          <Link
            href={{
              pathname: '/posts',
              query: { category: frontMatter.category },
            }} 
            key={frontMatter.category}
          >
            <a className={`${cssPrefix}__category`} > {frontMatter.category} </a>
          </Link>
          <span className={`${cssPrefix}__separator`}>&#x2022;</span>
          <p className={`${cssPrefix}__date`}> {frontMatter.date} </p>
        </div>
      </div>
      <main>
        {children}
      </main>
    </div>
  );
};

export default Post;