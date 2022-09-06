import { Group } from '@mantine/core';
import { openSpotlight } from '@mantine/spotlight';

import IconSearch from '../Icon/_Search/IconSearch';


const cssPrefix = 'spotlight';

const Spotlight = () => {
  return (
    <div className={cssPrefix}>
      <button className={`${cssPrefix}__button`} onClick={() => openSpotlight()}>
        <Group spacing={12}>
          <div className={`${cssPrefix}__button-icon`}>
            <IconSearch />
          </div>
          <span className={`${cssPrefix}__button-text`}>Искать</span>
        </Group>
        <Group className={`${cssPrefix}__tag`}>
          ⌘ + K
        </Group>
      </button>
    </div>
  );
};

export default Spotlight;
