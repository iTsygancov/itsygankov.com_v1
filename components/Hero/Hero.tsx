import { Container } from '@mantine/core';
import Image from 'next/image';
import { useRouter } from 'next/router';

import hero from '../../public/assets/hero.svg';
import { en, ru } from './Hero.locale';


const cssPrefix = 'hero';


const Hero = () => {
  const router = useRouter();
  const currentLocale = router.locale === 'en' ? en : ru;
  return (
    <Container size='xl'>
      <div className="hero">
        <div className={`${cssPrefix}__content`}>
          <h1 className={`${cssPrefix}__title`}>
            {currentLocale.title}
          </h1>
          <p className={`${cssPrefix}__subtitle`}>
            {currentLocale.subtitle}
          </p>
          <p className={`${cssPrefix}__subtitle`}>
            {currentLocale.description}
          </p>
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
  );
};

export default Hero;