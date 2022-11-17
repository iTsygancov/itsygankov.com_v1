import { Burger, Container, Transition } from '@mantine/core';
import { useDisclosure, useMediaQuery } from '@mantine/hooks';
import { SpotlightProvider } from '@mantine/spotlight';
import { SpotlightAction } from '@mantine/spotlight/lib/types';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import Logo from '../Logo/Logo';
import Navbar from '../Navbar/Navbar';
import Spotlight from '../Spotlight/Spotlight';
import { getSpotlightActions } from '../Spotlight/Spotlight.utils';


const cssPrefix = 'header';

function Header() {
  const router = useRouter();
  const matches = useMediaQuery('(min-width: 767.98px)');
  const [opened, { toggle }] = useDisclosure(false);
  const [actions, setActions] = useState<SpotlightAction[]>([]);

  useEffect(() => {
    getSpotlightActions(router).then((actions) => {
      setActions(actions);
    });
  });

  return (
    <header className={cssPrefix}>
      <Container className={`${cssPrefix}__container`} size="xl">
        <div className={`${cssPrefix}__left`}>
          {matches ? (
            <>
              <Logo />
              <Navbar />
            </>
          ) : (
            <>
              <Burger opened={opened} onClick={toggle} />
              <Transition transition="scale-x" mounted={opened}>
                {(styles) => (
                  <Navbar handleClick={toggle} style={{ ...styles }} />
                )}
              </Transition>
              <Logo opened={opened} handleClick={toggle} />
            </>
          )}
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
