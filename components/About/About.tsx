import { Container } from '@mantine/core';
import Link from 'next/link';
import { useRouter } from 'next/router';

import AboutMiscellaneous from './_Miscellaneous/AboutMiscellaneous';
import AboutSkills from './_Skills/AboutSkills';
import AboutTools from './_Tools/AboutTools';
import { en, ru } from './About.locale';


const cssPrefix = 'about';

const About = () => {
  const router = useRouter();
  const currentLocale = router.locale === 'en' ? en : ru;

  return (
    <Container size="xl" className={cssPrefix}>
      <h1 className={`${cssPrefix}__title`}>{currentLocale.title}</h1>
      <div className={`${cssPrefix}__description`}>
        {currentLocale.descriptionText.map((text) => (
          <p className={`${cssPrefix}__description-text`} key={text}>
            {text}
          </p>
        ))}
      </div>
      <AboutSkills />
      <AboutTools />
      <AboutMiscellaneous />
      <p className={`${cssPrefix}__outro`}>{currentLocale.outro}<Link href='/contacts'><a>{currentLocale.link}</a></Link></p>
    </Container>
  );
};

export default About;
