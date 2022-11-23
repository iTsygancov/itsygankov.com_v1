import { SimpleGrid } from '@mantine/core';
import { useRouter } from 'next/router';

import ProgressBar from '../../ProgressBar/Progressbar';
import { data } from './AbouSkills.data';
import { en, ru } from './AboutSkills.locale';


const cssPrefix = 'aboutSkills';

const AboutSkills = () => {
  const router = useRouter();
  const currentLocale = router.locale === 'en' ? en : ru;

  return (
    <div className={cssPrefix}>
      <h2 className={`${cssPrefix}__title`}>{currentLocale.title}</h2>
      <SimpleGrid
        cols={2}
        breakpoints={[
          { maxWidth: 'md', cols: 2, spacing: 'md' },
          { maxWidth: 'sm', cols: 1, spacing: 'sm' },
        ]}
      >
        {data.map(({ title, label, value }) => (
          <ProgressBar
            title={title}
            label={label}
            value={value}
            key={title}
          />
        ))}
      </SimpleGrid>
    </div>
  );
};

export default AboutSkills;
