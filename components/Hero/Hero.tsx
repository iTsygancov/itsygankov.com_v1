import { Container } from '@mantine/core';
import Image from 'next/image';

import hero from '../../public/assets/hero.svg';


const cssPrefix = 'hero';


const Hero = () => {
  return (
    <Container size='xl'>
      <div className="hero">
        <div className={`${cssPrefix}__content`}>
          <h1 className={`${cssPrefix}__title`}>
            Hey, I&apos;m Igor!
          </h1>
          <p className={`${cssPrefix}__subtitle`}>
            Welcome to my website.
          </p>
          <p className={`${cssPrefix}__subtitle`}>
            Here I share my experience as a
            Frontend Developer and everything I learn about Javascript,
            React, Typescript, and much more.
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