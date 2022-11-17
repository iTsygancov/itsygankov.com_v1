import { Container } from '@mantine/core';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { en, ru } from './About.locale';


const cssPrefix = 'about';

const About = () => {
  const router = useRouter();
  const currentLocale = router.locale === 'en' ? en : ru;
  return (
    <Container size='xl' className={cssPrefix}>
      <h1 className={`${cssPrefix}__title`}>
        {currentLocale.title}
      </h1>
      <div className={`${cssPrefix}__description`}>
        {currentLocale.descriptionText.map((text) => (
          <p className={`${cssPrefix}__description-text`} key={text}>
            {text}
          </p>
        ))}
      </div>
      <Link href='/contacts' passHref>
        <button className={`${cssPrefix}__button`}>
          {currentLocale.button}
        </button>
      </Link>
    </Container>
  );
};

export default About;