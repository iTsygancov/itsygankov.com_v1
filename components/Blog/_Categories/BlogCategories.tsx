import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { en, ru } from './BlogCategories.locale';


type BlogCategoriesProps = {
  categories: string[];
};

const cssPrefix = 'blogCategories';

const BlogCategories = ({ categories }: BlogCategoriesProps) => {
  const router = useRouter();
  const currentLocale = router.locale === 'en' ? en : ru;
  const query = router.query;

  return (
    <div className={cssPrefix}>
      <Head>
        {query.category && (
          <title>{query.category + ' | < iTsygankov />'}</title>
        )}
      </Head>
      <h3 className={`${cssPrefix}__title`}>{currentLocale.title}</h3>
      <div className={`${cssPrefix}__list`}>
        {categories.map((category) => (
          <Link
            href={{
              pathname: '/blog',
              query: { category: category },
            }}
            key={category}
          >
            <a
              className={`${cssPrefix}__link ${
                query.category === category ? `${cssPrefix}__link--active` : ''
              }`}
            >
              {category}
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BlogCategories;
