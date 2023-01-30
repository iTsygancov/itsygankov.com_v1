import { Group } from '@mantine/core';
import { useOs } from '@mantine/hooks';
import { openSpotlight } from '@mantine/spotlight';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import IconSearch from '../Icon/_Search/IconSearch';
import { en, ru } from './Spotlight.locale';


type IOs = '⌘' | 'Ctrl' | undefined;

const cssPrefix = 'spotlight';

const Spotlight = () => {
  const router = useRouter();
  const currentLocale = router.locale === 'en' ? en : ru;
  const [modKey, setModKey] = useState<IOs>();
  const os = useOs();

  useEffect(() => {
    const isMac = os === 'macos';
    if (isMac) {
      setModKey('⌘');
    } else {
      setModKey('Ctrl');
    }
  }, [os]);

  return (
    <div className={cssPrefix}>
      <button
        className={`${cssPrefix}__button`}
        onClick={() => openSpotlight()}
      >
        <Group spacing={12}>
          <div className={`${cssPrefix}__button-icon`}>
            <IconSearch />
          </div>
          <span className={`${cssPrefix}__button-text`}>
            {currentLocale.buttonText}
          </span>
        </Group>
        <Group className={`${cssPrefix}__tag`}>{modKey} + K</Group>
      </button>
    </div>
  );
};

export default Spotlight;
