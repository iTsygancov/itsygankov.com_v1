import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import downloadIcon from '../../../public/assets/icon-download.svg';
import { en, ru } from './AboutMiscellaneous.locale';


const cssPrefix = 'aboutMiscellaneous';

const AboutMiscellaneous = () => {
  const router = useRouter();
  const currentLocale = router.locale === 'en' ? en : ru;
  const { linkTitle, src, title } = currentLocale;

  return (
    <div className={cssPrefix}>
      <h2 className={`${cssPrefix}__title`}>{title}</h2>
      <Link
        href={src}
        locale={false}
      >
        <a
          className={`${cssPrefix}__link`}
          target='_blank'
        >
          <Image
            className={`${cssPrefix}__link-icon`}
            src={downloadIcon}
            layout='intrinsic'
            alt='Download icon'
          />
          {linkTitle}
        </a>
      </Link>
      <hr />
    </div>
  );
};

export default AboutMiscellaneous;
