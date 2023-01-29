import { Container } from '@mantine/core';
import Head from 'next/head';
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
  const {
    descriptionText, link, meta, outro, title, 
  } = currentLocale;

  return (
    <>
      <Head>
        <title>
          {meta.title}
        </title>
        <meta
          name="description"
          content={meta.description}
        />
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
      </Head>
      <Container size="xl" className={cssPrefix}>
        <h1 className={`${cssPrefix}__title`}>
          {title}
        </h1>
        <div className={`${cssPrefix}__description`}>
          {descriptionText.map((text) => (
            <p className={`${cssPrefix}__description-text`} key={text}>
              {text}
            </p>
          ))}
        </div>
        <AboutSkills />
        <AboutTools />
        <AboutMiscellaneous />
        <p className={`${cssPrefix}__outro`}>
          {outro}
          <Link href='/contacts'>
            <a>{link}</a>
          </Link>
        </p>
      </Container>
    </>
  );
};

export default About;