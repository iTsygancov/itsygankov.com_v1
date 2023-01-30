import Link from 'next/link';
import { useRouter } from 'next/router';

import { en, ru } from './PageNotFound.locale';


const cssPrefix = 'pageNotFound';

export default function PageNotFound() {
  const router = useRouter();
  const currentLocale = router.locale === 'en' ? en : ru;

  return (
    <div className={cssPrefix}>
      <div className={`${cssPrefix}__error`}>404</div>
      <h1 className={`${cssPrefix}__title`}>{currentLocale.title}</h1>
      <p className={`${cssPrefix}__description`}>{currentLocale.description}</p>
      <Link
        href='/'
        passHref
      >
        <a className={`${cssPrefix}__link`}>{currentLocale.link}</a>
      </Link>
    </div>
  );
}
