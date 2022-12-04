import { Badge } from '@mantine/core';
import { useRouter } from 'next/router';

import { data } from './AbouSkills.data';
import { en, ru } from './AboutSkills.locale';


const cssPrefix = 'aboutSkills';

const AboutSkills = () => {
  const router = useRouter();
  const currentLocale = router.locale === 'en' ? en : ru;

  return (
    <div className={cssPrefix}>
      <h2 className={`${cssPrefix}__title`}>{currentLocale.title}</h2>
      {data.map((item: string) => (
        <Badge className={`${cssPrefix}__badge`} key={item}>
          {item}
        </Badge>
      ))}
    </div>
  );
};

export default AboutSkills;
