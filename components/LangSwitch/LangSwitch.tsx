import Image from 'next/image';
import { useRouter } from 'next/router';

import language from '../../public/assets/icon-language.svg';


const cssPrefix = 'langSwitch';

const LangSwitch = () => {
  const router = useRouter();

  const handleLanguage = () => {
    const currentPath = router.asPath;
    const slicedPath = currentPath.slice(0, -3);
    if (router.locale === 'en')
      router.push(
        '/ru',
        currentPath.includes('/blog/') ? `${currentPath}-ru` : currentPath,
        { locale: 'ru', scroll: true },
      );
    if (router.locale === 'ru')
      router.push(
        '/en',
        currentPath.includes('/blog/') ? slicedPath : currentPath,
        { locale: 'en', scroll: true },
      );
  };

  return (
    <div className={cssPrefix}>
      <Image
        className={`${cssPrefix}__icon`}
        src={language}
        layout="intrinsic"
        alt="Language icon"
      />
      <div className={`${cssPrefix}__menu`}>
        <button
          className={`${cssPrefix}__button`}
          disabled={router.locale === 'en'}
          onClick={handleLanguage}
        >
          EN
        </button>
        <span className={`${cssPrefix}__divider`}>|</span>
        <button
          className={`${cssPrefix}__button`}
          disabled={router.locale === 'ru'}
          onClick={handleLanguage}
        >
          RU
        </button>
      </div>
    </div>
  );
};

export default LangSwitch;
