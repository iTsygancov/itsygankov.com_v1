import Link from 'next/link';

import { IPost } from '../../../types';


type PostCardProps = {
    post: IPost
}


const cssPrefix = 'postCard';

const PostCard = ({ post }: PostCardProps) => {
  const { date, title, category } = post.data;

  return (
    <div className={cssPrefix}>
      <div className={`${cssPrefix}__header`}>
        <span className={`${cssPrefix}__date`}>{date}</span>
        <Link
          as={`/blog/${post.filePath.replace(/\.mdx?$/, '')}`}
          href={'/blog/[slug]'}
        >
          <h3 className={`${cssPrefix}__title`}>
            <a>{title}</a>
          </h3>
        </Link>
      </div>
      <Link
        href={{ pathname: '/blog', query: { category } }} 
        key={category}
      >
        <a className={`${cssPrefix}__category`} > {category} </a>
      </Link>
    </div>
  );
};

export default PostCard;