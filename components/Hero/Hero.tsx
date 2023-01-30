import { Container } from '@mantine/core';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';

import hero from '../../public/assets/hero.png';
import { en, ru } from './Hero.locale';


const cssPrefix = 'hero';

const Hero = () => {
  const router = useRouter();
  const currentLocale = router.locale === 'en' ? en : ru;
  const { description, subtitle, title } = currentLocale;

  return (
    <>
      <Head>
        <meta
          name='description'
          content={description}
        />
        <meta
          property='og:description'
          content={description}
        />
      </Head>
      <Container size='xl'>
        <div className='hero'>
          <div className={`${cssPrefix}__content`}>
            <h1 className={`${cssPrefix}__title`}>{title}</h1>
            <p className={`${cssPrefix}__subtitle`}>{subtitle}</p>
            <p className={`${cssPrefix}__subtitle`}>{description}</p>
          </div>
          <div className={`${cssPrefix}__image`}>
            <Image
              src={hero}
              layout='intrinsic'
              alt='Hero image'
            />
          </div>
        </div>
      </Container>
    </>
  );
};

export default Hero;
