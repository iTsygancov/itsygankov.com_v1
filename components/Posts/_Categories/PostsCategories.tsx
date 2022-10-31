import Link from 'next/link';
import { useRouter } from 'next/router';


type PostsCategoriesProps = {
  categories: string[]
}

const cssPrefix = 'postsCategories';

const PostsCategories = ({ categories }: PostsCategoriesProps) => {
  const router = useRouter();
  const query = router.query;
  return (
    <div className={cssPrefix}>
      <h3 className={`${cssPrefix}__title`}>Categories</h3>
      <div className={`${cssPrefix}__list`}>
        {categories.map((category) => (
          <Link
            href={{
              pathname: '/posts',
              query: { category: category },
            }} 
            key={category}
          >
            <a
              className={`${cssPrefix}__link ${
                query.category === category 
                  ? `${cssPrefix}__link--active`
                  : ''}`}
            >
              {category}
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PostsCategories;