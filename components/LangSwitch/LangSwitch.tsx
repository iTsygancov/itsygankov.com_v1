import Image from 'next/image';
import { useRouter } from 'next/router';

import language from '../../public/assets/icon-language.svg';


const cssPrefix = 'langSwitch';

const LangSwitch = () => {
  const router = useRouter();

  const handleLanguage = () => {
    if (router.locale === 'en') router.push('/', '/ru', { locale: 'ru' });
    if (router.locale === 'ru') router.push('/', '/', { locale: 'en' });
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