import { Container } from '@mantine/core';
import Link from 'next/link';


const cssPrefix = 'about';

const About = () => {
  return (
    <Container size='xl' className={cssPrefix}>
      <h1 className={`${cssPrefix}__title`}>About me</h1>
      <div className={`${cssPrefix}__description`}>
        <p className={`${cssPrefix}__description-text`}>
          I&apos;m a Front-End developer living in Moscow.
          I&apos;m seriously into creating intuitive, dynamic user interfaces,
            web design and animation.
        </p>
        <p className={`${cssPrefix}__description-text`}>
          Well-organized person, problem solver, worker with high attention 
          to detail. Lover of outdoor activities, soap operas and music.
          Family man and father of one fidgety daughter. Interested in the
          whole spectrum of frontend and working on ambitious projects 
          with positive people.
        </p>
      </div>
      <Link href='/contacts' passHref>
        <button className={`${cssPrefix}__button`}>Contact me</button>
      </Link>
    </Container>
  );
};

export default About;