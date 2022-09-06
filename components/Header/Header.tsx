import { Burger, Container, Transition } from '@mantine/core';
import { useDisclosure, useMediaQuery } from '@mantine/hooks';
import { SpotlightProvider } from '@mantine/spotlight';
import Link from 'next/link';
import { useRouter } from 'next/router';

import Navbar from '../Navbar/Navbar';
import Spotlight from '../Spotlight/Spotlight';
import { getSpotlightActions } from '../Spotlight/Spotlight.utils';


const cssPrefix = 'header';

function Header() {
  const router = useRouter();
  const actions = getSpotlightActions(router);
  const matches = useMediaQuery('(min-width: 767.98px)');
  const [opened, { toggle }] = useDisclosure(false);
  return (
    <header className={cssPrefix}>
      <Container className={`${cssPrefix}__container`} size='xl'>
        <div className={`${cssPrefix}__left`}>
          {
            matches
              ?
              <>
                <Link href='/'>
                  <a className={`${cssPrefix}__logo`}>{'< iTsygankov />'}</a>
                </Link>
                <Navbar />
              </>
              :
              <>
                <Burger
                  opened={opened}
                  onClick={toggle}
                />
                <Transition transition="fade" mounted={opened}>
                  {(styles) => (
                    <Navbar style={{ ...styles }} />
                  )}
                </Transition>
                <Link href='/'>
                  <a className={`${cssPrefix}__logo`}>{'< iTsygankov />'}</a>
                </Link>
              </>
          }
        </div>
        <SpotlightProvider
          actions={actions}
          searchPlaceholder="Search..."
          shortcut="mod + k"
          nothingFoundMessage="Nothing found..."
        >
          <Spotlight />
        </SpotlightProvider>
      </Container>
    </header>
  );
}

export default Header;
