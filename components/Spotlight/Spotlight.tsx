import { Group } from '@mantine/core';
import { openSpotlight } from '@mantine/spotlight';
import { useRouter } from 'next/router';

import IconSearch from '../Icon/_Search/IconSearch';
import { en, ru } from './Spotlight.locale';


const cssPrefix = 'spotlight';

const Spotlight = () => {
  const router = useRouter();
  const currentLocale = router.locale === 'en' ? en : ru;

  return (
    <div className={cssPrefix}>
      <button className={`${cssPrefix}__button`} onClick={() => openSpotlight()}>
        <Group spacing={12}>
          <div className={`${cssPrefix}__button-icon`}>
            <IconSearch />
          </div>
          <span className={`${cssPrefix}__button-text`}>{currentLocale.buttonText}</span>
        </Group>
        <Group className={`${cssPrefix}__tag`}>
          ⌘ + K
        </Group>
      </button>
    </div>
  );
};

export default Spotlight;
