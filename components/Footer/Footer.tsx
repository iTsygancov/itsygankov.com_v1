import { Container } from '@mantine/core';

import LangSwitch from '../LangSwitch/LangSwitch';
import Logo from '../Logo/Logo';
import Navbar from '../Navbar/Navbar';


const cssPrefix = 'footer';

const Footer = () => {
  return (
    <footer className={cssPrefix}>
      <Container size='xl'>
        <div className={`${cssPrefix}__content`}>
          <div className='footer__menu'>
            <Logo />
            <Navbar />
          </div>
          <hr />
          <p className={`${cssPrefix}__copyright`}>
            Copyright © 2022 | Igor Tsygankov
          </p>
          <LangSwitch />
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
